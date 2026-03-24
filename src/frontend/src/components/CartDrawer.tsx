import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "../context/CartContext";

function formatINR(amount: number) {
  return `\u20B9${amount.toLocaleString("en-IN")}`;
}

export default function CartDrawer() {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, cartTotal } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-50"
          />

          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 flex flex-col shadow-2xl"
            data-ocid="cart.dialog"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingBag
                  className="w-5 h-5"
                  style={{ color: "var(--fr-orange)" }}
                />
                <h2 className="font-bold uppercase tracking-wider text-sm text-[oklch(0.145_0_0)]">
                  Your Cart
                </h2>
                {cart.length > 0 && (
                  <span
                    className="text-[10px] font-bold text-white rounded-full px-2 py-0.5"
                    style={{ background: "var(--fr-orange)" }}
                  >
                    {cart.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Close cart"
                data-ocid="cart.close_button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {cart.length === 0 ? (
                <div
                  className="flex flex-col items-center justify-center h-full gap-4 text-center"
                  data-ocid="cart.empty_state"
                >
                  <ShoppingBag className="w-16 h-16 text-muted-foreground opacity-30" />
                  <p className="font-semibold text-[oklch(0.39_0.012_250)]">
                    Your cart is empty
                  </p>
                  <p className="text-sm text-[oklch(0.62_0.012_250)]">
                    Add some sneakers to get started!
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white rounded-sm"
                    style={{ background: "var(--fr-orange)" }}
                    data-ocid="cart.secondary_button"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {cart.map((item, idx) => (
                    <div
                      key={item.id}
                      className="flex gap-3 pb-4 border-b border-border last:border-0"
                      data-ocid={`cart.item.${idx + 1}`}
                    >
                      <div
                        className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0"
                        style={{ background: "oklch(0.965 0.004 240)" }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-[oklch(0.145_0_0)] truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-[oklch(0.62_0.012_250)] mb-2">
                          {item.category}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-border rounded-sm">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-1.5 hover:bg-muted transition-colors"
                              aria-label="Decrease quantity"
                              data-ocid={`cart.button.${idx + 1}`}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-1.5 hover:bg-muted transition-colors"
                              aria-label="Increase quantity"
                              data-ocid={`cart.button.${idx + 1}`}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-bold text-sm text-[oklch(0.145_0_0)]">
                            {formatINR(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="self-start p-1.5 rounded hover:bg-muted transition-colors flex-shrink-0"
                        aria-label="Remove item"
                        data-ocid={`cart.delete_button.${idx + 1}`}
                      >
                        <Trash2 className="w-4 h-4 text-[oklch(0.577_0.245_27.325)]" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="px-5 py-4 border-t border-border">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-[oklch(0.62_0.012_250)]">
                    Subtotal
                  </span>
                  <span className="font-bold text-[oklch(0.145_0_0)]">
                    {formatINR(cartTotal)}
                  </span>
                </div>
                <p className="text-xs text-[oklch(0.62_0.012_250)] mb-4">
                  Shipping and taxes calculated at checkout
                </p>
                <button
                  type="button"
                  className="w-full py-4 font-black uppercase tracking-widest text-sm text-white rounded-sm hover:opacity-90 transition-all"
                  style={{ background: "var(--fr-orange)" }}
                  data-ocid="cart.confirm_button"
                >
                  Checkout — {formatINR(cartTotal)}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
