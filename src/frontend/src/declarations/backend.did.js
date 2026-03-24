/* eslint-disable */

// @ts-nocheck

import { IDL } from '@icp-sdk/core/candid';

const Product = IDL.Record({
  id: IDL.Nat,
  name: IDL.Text,
  price: IDL.Nat,
  category: IDL.Text,
  rating: IDL.Float64,
  reviews: IDL.Nat,
  badge: IDL.Opt(IDL.Text),
  imageUrl: IDL.Text,
});

const OrderItem = IDL.Record({
  productId: IDL.Nat,
  name: IDL.Text,
  quantity: IDL.Nat,
  price: IDL.Nat,
});

const Order = IDL.Record({
  orderId: IDL.Nat,
  customerName: IDL.Text,
  email: IDL.Text,
  phone: IDL.Text,
  address: IDL.Text,
  items: IDL.Vec(OrderItem),
  total: IDL.Nat,
  timestamp: IDL.Int,
});

const Contact = IDL.Record({
  name: IDL.Text,
  email: IDL.Text,
  message: IDL.Text,
  timestamp: IDL.Int,
});

export const idlService = IDL.Service({
  getProducts: IDL.Func([], [IDL.Vec(Product)], ['query']),
  placeOrder: IDL.Func([IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Vec(OrderItem), IDL.Nat], [IDL.Nat], []),
  getAllOrders: IDL.Func([], [IDL.Vec(Order)], ['query']),
  subscribeNewsletter: IDL.Func([IDL.Text], [IDL.Bool], []),
  getSubscribers: IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
  submitContact: IDL.Func([IDL.Text, IDL.Text, IDL.Text], [IDL.Bool], []),
  getContacts: IDL.Func([], [IDL.Vec(Contact)], ['query']),
});

export const idlInitArgs = [];

export const idlFactory = ({ IDL }) => {
  const Product = IDL.Record({
    id: IDL.Nat,
    name: IDL.Text,
    price: IDL.Nat,
    category: IDL.Text,
    rating: IDL.Float64,
    reviews: IDL.Nat,
    badge: IDL.Opt(IDL.Text),
    imageUrl: IDL.Text,
  });
  const OrderItem = IDL.Record({
    productId: IDL.Nat,
    name: IDL.Text,
    quantity: IDL.Nat,
    price: IDL.Nat,
  });
  const Order = IDL.Record({
    orderId: IDL.Nat,
    customerName: IDL.Text,
    email: IDL.Text,
    phone: IDL.Text,
    address: IDL.Text,
    items: IDL.Vec(OrderItem),
    total: IDL.Nat,
    timestamp: IDL.Int,
  });
  const Contact = IDL.Record({
    name: IDL.Text,
    email: IDL.Text,
    message: IDL.Text,
    timestamp: IDL.Int,
  });
  return IDL.Service({
    getProducts: IDL.Func([], [IDL.Vec(Product)], ['query']),
    placeOrder: IDL.Func([IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Vec(OrderItem), IDL.Nat], [IDL.Nat], []),
    getAllOrders: IDL.Func([], [IDL.Vec(Order)], ['query']),
    subscribeNewsletter: IDL.Func([IDL.Text], [IDL.Bool], []),
    getSubscribers: IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    submitContact: IDL.Func([IDL.Text, IDL.Text, IDL.Text], [IDL.Bool], []),
    getContacts: IDL.Func([], [IDL.Vec(Contact)], ['query']),
  });
};

export const init = ({ IDL }) => { return []; };
