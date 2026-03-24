import type { Principal } from "@icp-sdk/core/principal";
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
    placeOrder(
        customerName: string,
        email: string,
        phone: string,
        address: string,
        items: OrderItem[],
        total: bigint
    ): Promise<bigint>;
    getAllOrders(): Promise<Order[]>;
    subscribeNewsletter(email: string): Promise<boolean>;
    getSubscribers(): Promise<string[]>;
    submitContact(name: string, email: string, message: string): Promise<boolean>;
    getContacts(): Promise<Contact[]>;
}
