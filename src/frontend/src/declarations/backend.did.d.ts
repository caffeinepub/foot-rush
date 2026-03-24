/* eslint-disable */

// @ts-nocheck

import type { ActorMethod } from '@icp-sdk/core/agent';
import type { IDL } from '@icp-sdk/core/candid';
import type { Principal } from '@icp-sdk/core/principal';

export interface Product {
  id: bigint;
  name: string;
  price: bigint;
  category: string;
  rating: number;
  reviews: bigint;
  badge: [] | [string];
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
  items: Array<OrderItem>;
  total: bigint;
  timestamp: bigint;
}

export interface Contact {
  name: string;
  email: string;
  message: string;
  timestamp: bigint;
}

export interface _SERVICE {
  getProducts: ActorMethod<[], Array<Product>>;
  placeOrder: ActorMethod<[string, string, string, string, Array<OrderItem>, bigint], bigint>;
  getAllOrders: ActorMethod<[], Array<Order>>;
  subscribeNewsletter: ActorMethod<[string], boolean>;
  getSubscribers: ActorMethod<[], Array<string>>;
  submitContact: ActorMethod<[string, string, string], boolean>;
  getContacts: ActorMethod<[], Array<Contact>>;
}

export declare const idlService: IDL.ServiceClass;
export declare const idlInitArgs: IDL.Type[];
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
