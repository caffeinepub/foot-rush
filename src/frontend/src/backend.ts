/* eslint-disable */

// @ts-nocheck

import { Actor, HttpAgent, type HttpAgentOptions, type ActorConfig, type Agent, type ActorSubclass } from "@icp-sdk/core/agent";
import type { Principal } from "@icp-sdk/core/principal";
import { idlFactory, type _SERVICE } from "./declarations/backend.did";

export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;

export interface Product {
    id: bigint;
    name: string;
    price: bigint;
    category: string;
    rating: number;
    reviews: bigint;
    badge: Option<string>;
    imageUrl: string;
}

export interface OrderItem {
    productId: bigint;
    name: string;
    quantity: bigint;
    price: bigint;
}

export interface Order {
    orderId: bigint;
    customerName: string;
    email: string;
    phone: string;
    address: string;
    items: OrderItem[];
    total: bigint;
    timestamp: bigint;
}

export interface Contact {
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
}

export interface backendInterface {
    getProducts(): Promise<Product[]>;
    placeOrder(customerName: string, email: string, phone: string, address: string, items: OrderItem[], total: bigint): Promise<bigint>;
    getAllOrders(): Promise<Order[]>;
    subscribeNewsletter(email: string): Promise<boolean>;
    getSubscribers(): Promise<string[]>;
    submitContact(name: string, email: string, message: string): Promise<boolean>;
    getContacts(): Promise<Contact[]>;
}

function candid_opt_to_option<T>(arr: [T] | []): Option<T> {
    if (arr.length === 0) return { __kind__: "None" };
    return { __kind__: "Some", value: arr[0] };
}

function option_to_candid_opt<T>(opt: Option<T>): [T] | [] {
    if (opt.__kind__ === "None") return [];
    return [opt.value];
}

export class ExternalBlob {
    _blob?: Uint8Array<ArrayBuffer> | null;
    directURL: string;
    onProgress?: (percentage: number) => void = undefined;
    private constructor(directURL: string, blob: Uint8Array<ArrayBuffer> | null){
        if (blob) this._blob = blob;
        this.directURL = directURL;
    }
    static fromURL(url: string): ExternalBlob {
        return new ExternalBlob(url, null);
    }
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob {
        const url = URL.createObjectURL(new Blob([new Uint8Array(blob)], { type: 'application/octet-stream' }));
        return new ExternalBlob(url, blob);
    }
    public async getBytes(): Promise<Uint8Array<ArrayBuffer>> {
        if (this._blob) return this._blob;
        const response = await fetch(this.directURL);
        const blob = await response.blob();
        this._blob = new Uint8Array(await blob.arrayBuffer());
        return this._blob;
    }
    public getDirectURL(): string { return this.directURL; }
    public withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob {
        this.onProgress = onProgress;
        return this;
    }
}

export class Backend implements backendInterface {
    constructor(
        private actor: ActorSubclass<_SERVICE>,
        private _uploadFile: (file: ExternalBlob) => Promise<Uint8Array>,
        private _downloadFile: (file: Uint8Array) => Promise<ExternalBlob>,
        private processError?: (error: unknown) => never
    ) {}

    async getProducts(): Promise<Product[]> {
        try {
            const result = await this.actor.getProducts();
            return result.map((p: any) => ({
                ...p,
                badge: candid_opt_to_option(p.badge),
            }));
        } catch(e) { if (this.processError) this.processError(e); throw e; }
    }

    async placeOrder(customerName: string, email: string, phone: string, address: string, items: OrderItem[], total: bigint): Promise<bigint> {
        try {
            const candidItems = items.map(i => ({ ...i }));
            return await this.actor.placeOrder(customerName, email, phone, address, candidItems, total);
        } catch(e) { if (this.processError) this.processError(e); throw e; }
    }

    async getAllOrders(): Promise<Order[]> {
        try { return await this.actor.getAllOrders(); }
        catch(e) { if (this.processError) this.processError(e); throw e; }
    }

    async subscribeNewsletter(email: string): Promise<boolean> {
        try { return await this.actor.subscribeNewsletter(email); }
        catch(e) { if (this.processError) this.processError(e); throw e; }
    }

    async getSubscribers(): Promise<string[]> {
        try { return await this.actor.getSubscribers(); }
        catch(e) { if (this.processError) this.processError(e); throw e; }
    }

    async submitContact(name: string, email: string, message: string): Promise<boolean> {
        try { return await this.actor.submitContact(name, email, message); }
        catch(e) { if (this.processError) this.processError(e); throw e; }
    }

    async getContacts(): Promise<Contact[]> {
        try { return await this.actor.getContacts(); }
        catch(e) { if (this.processError) this.processError(e); throw e; }
    }
}

export interface CreateActorOptions {
    agent?: Agent;
    agentOptions?: HttpAgentOptions;
    actorOptions?: ActorConfig;
    processError?: (error: unknown) => never;
}

export function createActor(canisterId: string, _uploadFile: (file: ExternalBlob) => Promise<Uint8Array>, _downloadFile: (file: Uint8Array) => Promise<ExternalBlob>, options: CreateActorOptions = {}): Backend {
    const agent = options.agent || HttpAgent.createSync({ ...options.agentOptions });
    if (options.agent && options.agentOptions) {
        console.warn("Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent.");
    }
    const actor = Actor.createActor<_SERVICE>(idlFactory, {
        agent,
        canisterId,
        ...options.actorOptions,
    });
    return new Backend(actor, _uploadFile, _downloadFile, options.processError);
}
