import Time "mo:base/Time";
import Array "mo:base/Array";
import Text "mo:base/Text";

actor FootRush {

  // ---- Types ----

  public type Product = {
    id : Nat;
    name : Text;
    price : Nat;
    category : Text;
    rating : Float;
    reviews : Nat;
    badge : ?Text;
    imageUrl : Text;
  };

  public type OrderItem = {
    productId : Nat;
    name : Text;
    quantity : Nat;
    price : Nat;
  };

  public type Order = {
    orderId : Nat;
    customerName : Text;
    email : Text;
    phone : Text;
    address : Text;
    items : [OrderItem];
    total : Nat;
    timestamp : Int;
  };

  public type Contact = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  // ---- State ----

  var products : [Product] = [
    { id = 1; name = "Rush Pro X"; price = 10999; category = "Running"; rating = 4.8; reviews = 124; badge = ?"New"; imageUrl = "/assets/generated/shoe-1.dim_400x400.png" },
    { id = 2; name = "AeroStrike Elite"; price = 12499; category = "Training"; rating = 4.9; reviews = 89; badge = ?"Bestseller"; imageUrl = "/assets/generated/shoe-2.dim_400x400.png" },
    { id = 3; name = "FlexForce Max"; price = 9999; category = "Men"; rating = 4.7; reviews = 201; badge = null; imageUrl = "/assets/generated/shoe-3.dim_400x400.png" },
    { id = 4; name = "TrailBurst V2"; price = 11499; category = "Trail"; rating = 4.6; reviews = 156; badge = ?"Sale"; imageUrl = "/assets/generated/shoe-4.dim_400x400.png" },
    { id = 5; name = "Velocity Surge"; price = 13499; category = "Running"; rating = 5.0; reviews = 67; badge = ?"New"; imageUrl = "/assets/generated/shoe-1.dim_400x400.png" },
    { id = 6; name = "NightRun Pro"; price = 8999; category = "Running"; rating = 4.5; reviews = 312; badge = null; imageUrl = "/assets/generated/shoe-2.dim_400x400.png" },
    { id = 7; name = "CloudStep Ultra"; price = 11199; category = "Women"; rating = 4.8; reviews = 178; badge = ?"Popular"; imageUrl = "/assets/generated/shoe-3.dim_400x400.png" },
    { id = 8; name = "SwiftEdge Runner"; price = 10499; category = "Training"; rating = 4.7; reviews = 93; badge = null; imageUrl = "/assets/generated/shoe-4.dim_400x400.png" }
  ];

  var orders : [Order] = [];
  var nextOrderId : Nat = 1;
  var subscribers : [Text] = [];
  var contacts : [Contact] = [];

  // ---- Products ----

  public query func getProducts() : async [Product] {
    products
  };

  // ---- Orders ----

  public func placeOrder(
    customerName : Text,
    email : Text,
    phone : Text,
    address : Text,
    items : [OrderItem],
    total : Nat
  ) : async Nat {
    let orderId = nextOrderId;
    nextOrderId += 1;
    let order : Order = {
      orderId;
      customerName;
      email;
      phone;
      address;
      items;
      total;
      timestamp = Time.now();
    };
    orders := Array.append(orders, [order]);
    orderId
  };

  public query func getAllOrders() : async [Order] {
    orders
  };

  // ---- Newsletter ----

  public func subscribeNewsletter(email : Text) : async Bool {
    let alreadySubscribed = Array.find(subscribers, func(e : Text) : Bool { Text.equal(e, email) });
    switch (alreadySubscribed) {
      case (?_) { false };
      case null {
        subscribers := Array.append(subscribers, [email]);
        true
      };
    }
  };

  public query func getSubscribers() : async [Text] {
    subscribers
  };

  // ---- Contact ----

  public func submitContact(name : Text, email : Text, message : Text) : async Bool {
    let contact : Contact = { name; email; message; timestamp = Time.now() };
    contacts := Array.append(contacts, [contact]);
    true
  };

  public query func getContacts() : async [Contact] {
    contacts
  };
}
