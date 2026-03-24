import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { type Product, useCart } from "../context/CartContext";

function formatINR(amount: number) {
  return `\u20B9${amount.toLocaleString("en-IN")}`;
}

export default function CartDrawer() {
  const {
    cart: cartItems,
    isOpen,
    setIsOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50"
            style={{ background: "oklch(0.10 0.04 45 / 0.65)" }}
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 z-50 flex flex-col"
            style={{
              background: "oklch(0.94 0.04 85)",
              borderLeft: "2px solid oklch(0.72 0.11 78 / 0.40)",
              boxShadow: "-8px 0 48px oklch(0.10 0.04 45 / 0.30)",
            }}
            data-ocid="cart.sheet"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-5"
              style={{ borderBottom: "1px solid oklch(0.72 0.11 78 / 0.30)" }}
            >
              <div className="flex items-center gap-2">
                <ShoppingBag
                  className="w-5 h-5"
                  style={{ color: "oklch(0.72 0.11 78)" }}
                />
                <h2
                  className="text-lg font-black uppercase tracking-widest"
                  style={{
                    color: "oklch(0.22 0.05 45)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Your Cart
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-sm transition-colors hover:opacity-75"
                style={{
                  background: "oklch(0.88 0.05 78)",
                  border: "1px solid oklch(0.72 0.11 78 / 0.30)",
                }}
                aria-label="Close cart"
                data-ocid="cart.close_button"
              >
                <X
                  className="w-5 h-5"
                  style={{ color: "oklch(0.28 0.06 48)" }}
                />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cartItems.length === 0 ? (
                <div
                  className="flex flex-col items-center justify-center h-full gap-4 py-20 text-center"
                  data-ocid="cart.empty_state"
                >
                  <ShoppingBag
                    className="w-16 h-16 opacity-25"
                    style={{ color: "oklch(0.55 0.07 60)" }}
                  />
                  <p
                    className="font-bold uppercase tracking-wider text-sm"
                    style={{
                      color: "oklch(0.55 0.07 60)",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    Your cart is empty
                  </p>
                  <p
                    className="text-xs italic"
                    style={{ color: "oklch(0.65 0.05 68)" }}
                  >
                    Add some fine footwear to get started.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="btn-vintage mt-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.72 0.11 78), oklch(0.62 0.12 70))",
                      color: "oklch(0.18 0.05 45)",
                      border: "2px solid oklch(0.55 0.11 72)",
                      fontFamily: "'Libre Baskerville', serif",
                    }}
                    data-ocid="cart.secondary_button"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="flex flex-col gap-4" data-ocid="cart.list">
                  <AnimatePresence>
                    {cartItems.map(
                      (item: Product & { quantity: number }, i) => (
                        <motion.li
                          key={item.id}
                          layout
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 30, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex gap-3 p-3 rounded-sm"
                          style={{
                            background: "oklch(0.90 0.04 80)",
                            border: "1px solid oklch(0.72 0.11 78 / 0.25)",
                          }}
                          data-ocid={`cart.item.${i + 1}`}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-sm flex-shrink-0"
                            style={{ filter: "sepia(0.15)" }}
                          />
                          <div className="flex-1 min-w-0">
                            <h3
                              className="text-sm font-bold truncate"
                              style={{
                                color: "oklch(0.22 0.05 45)",
                                fontFamily: "'Playfair Display', serif",
                              }}
                            >
                              {item.name}
                            </h3>
                            <p
                              className="text-xs italic mb-2"
                              style={{ color: "oklch(0.55 0.06 60)" }}
                            >
                              {item.category}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                  className="w-6 h-6 flex items-center justify-center rounded-sm transition-colors hover:opacity-75"
                                  style={{
                                    background: "oklch(0.88 0.05 78)",
                                    border:
                                      "1px solid oklch(0.72 0.11 78 / 0.30)",
                                  }}
                                  data-ocid={`cart.button.${i + 1}`}
                                >
                                  <Minus
                                    className="w-3 h-3"
                                    style={{ color: "oklch(0.28 0.06 48)" }}
                                  />
                                </button>
                                <span
                                  className="w-7 text-center text-sm font-bold"
                                  style={{ color: "oklch(0.22 0.05 45)" }}
                                >
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                  className="w-6 h-6 flex items-center justify-center rounded-sm transition-colors hover:opacity-75"
                                  style={{
                                    background: "oklch(0.88 0.05 78)",
                                    border:
                                      "1px solid oklch(0.72 0.11 78 / 0.30)",
                                  }}
                                  data-ocid={`cart.button.${i + 1}`}
                                >
                                  <Plus
                                    className="w-3 h-3"
                                    style={{ color: "oklch(0.28 0.06 48)" }}
                                  />
                                </button>
                              </div>
                              <span
                                className="text-sm font-black"
                                style={{
                                  color: "oklch(0.28 0.06 48)",
                                  fontFamily: "'Playfair Display', serif",
                                }}
                              >
                                {formatINR(item.price * item.quantity)}
                              </span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="self-start p-1.5 rounded-sm transition-colors hover:opacity-75 flex-shrink-0"
                            style={{
                              background: "oklch(0.88 0.05 78)",
                              border: "1px solid oklch(0.65 0.08 25 / 0.30)",
                            }}
                            aria-label="Remove item"
                            data-ocid={`cart.delete_button.${i + 1}`}
                          >
                            <Trash2
                              className="w-3.5 h-3.5"
                              style={{ color: "oklch(0.52 0.10 22)" }}
                            />
                          </button>
                        </motion.li>
                      ),
                    )}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div
                className="px-6 py-5"
                style={{ borderTop: "1px solid oklch(0.72 0.11 78 / 0.30)" }}
              >
                {/* Ornament */}
                <div className="ornament justify-center mb-4">
                  <span style={{ color: "oklch(0.72 0.11 78)" }}>——✦——</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-sm uppercase tracking-wider font-bold"
                    style={{
                      color: "oklch(0.42 0.06 55)",
                      fontFamily: "'Libre Baskerville', serif",
                    }}
                  >
                    Total
                  </span>
                  <span
                    className="text-xl font-black vintage-text"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {formatINR(cartTotal)}
                  </span>
                </div>
                <button
                  type="button"
                  className="btn-vintage w-full py-3.5 text-sm font-bold uppercase tracking-wider rounded-sm transition-all hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.11 78), oklch(0.62 0.12 70))",
                    color: "oklch(0.18 0.05 45)",
                    border: "2px solid oklch(0.55 0.11 72)",
                    boxShadow:
                      "0 4px 18px oklch(0.72 0.11 78 / 0.30), 3px 3px 0 oklch(0.48 0.10 68)",
                    fontFamily: "'Libre Baskerville', serif",
                  }}
                  data-ocid="cart.primary_button"
                >
                  Proceed to Checkout
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full mt-2 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all hover:opacity-75"
                  style={{
                    color: "oklch(0.55 0.07 60)",
                    border: "1px solid oklch(0.72 0.11 78 / 0.25)",
                    fontFamily: "'Libre Baskerville', serif",
                  }}
                  data-ocid="cart.cancel_button"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
