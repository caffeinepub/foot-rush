import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const navLinks = ["NEW ARRIVALS", "MEN", "WOMEN", "BRANDS", "SALE", "EXPLORE"];

const announcementText =
  "✦ Foot Rush | Official Store — India 🇮🇳  ·  Free Shipping on Orders over ₹5,000  ·  New Collection 2026 Just Dropped  ·  Up to 40% Off on Select Styles  ·  Exclusive Deals Every Week  ·";

export default function Header() {
  const { cartCount, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Announcement bar — vintage espresso marquee */}
      <motion.div
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="overflow-hidden text-xs py-2 tracking-widest"
        style={{
          background: "oklch(0.18 0.05 45)",
          color: "oklch(0.82 0.09 82)",
          borderBottom: "1px solid oklch(0.72 0.11 78 / 0.35)",
        }}
      >
        <div className="flex whitespace-nowrap animate-marquee select-none">
          <span className="pr-16">{announcementText}</span>
          <span className="pr-16">{announcementText}</span>
        </div>
      </motion.div>

      <header
        className="sticky top-0 z-50"
        style={{
          background: "oklch(0.22 0.05 45)",
          borderBottom: "2px solid oklch(0.72 0.11 78 / 0.45)",
          boxShadow: "0 4px 24px oklch(0.10 0.04 45 / 0.55)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="/"
              className="flex items-center group"
              data-ocid="nav.link"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <img
                src="/assets/uploads/whatsapp_image_2026-03-24_at_12.17.32_pm-019d1eb7-9f69-769f-adf3-cfbc068fcd85-1.jpeg"
                alt="Foot Rush Shoecare"
                className="h-12 w-auto object-contain"
              />
            </motion.a>

            <nav
              className="hidden lg:flex items-center gap-7"
              aria-label="Primary navigation"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href="/"
                  className="relative text-xs uppercase tracking-widest transition-all duration-300 group"
                  style={{
                    color: "oklch(0.82 0.09 82)",
                    fontFamily: "'Libre Baskerville', serif",
                    fontWeight: 700,
                  }}
                  data-ocid="nav.link"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                  whileHover={{ y: -1 }}
                >
                  {link}
                  <span
                    className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-400"
                    style={{ background: "oklch(0.72 0.11 78)" }}
                  />
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {[
                { Icon: Search, label: "Search" },
                { Icon: User, label: "Account" },
                { Icon: Heart, label: "Wishlist" },
              ].map(({ Icon, label }) => (
                <motion.button
                  key={label}
                  type="button"
                  className="p-2 rounded-sm transition-colors hidden sm:flex"
                  style={{
                    background: "oklch(0.28 0.06 48 / 0.6)",
                    color: "oklch(0.82 0.09 82)",
                    border: "1px solid oklch(0.72 0.11 78 / 0.25)",
                  }}
                  aria-label={label}
                  data-ocid="nav.button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.button>
              ))}

              <motion.button
                type="button"
                onClick={() => setIsOpen(true)}
                className="relative p-2 rounded-sm transition-colors btn-vintage"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.11 78), oklch(0.62 0.12 70))",
                  border: "1px solid oklch(0.55 0.11 72)",
                  color: "oklch(0.18 0.05 45)",
                  boxShadow: "0 2px 12px oklch(0.72 0.11 78 / 0.35)",
                }}
                aria-label="Shopping cart"
                data-ocid="cart.open_modal_button"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                <ShoppingCart className="w-5 h-5" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      key="badge"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className="absolute -top-0.5 -right-0.5 rounded-full text-[10px] font-bold flex items-center justify-center"
                      style={{
                        background: "oklch(0.48 0.11 48)",
                        color: "oklch(0.94 0.04 85)",
                        width: "18px",
                        height: "18px",
                      }}
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <motion.button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-sm transition-colors"
                style={{
                  background: "oklch(0.28 0.06 48 / 0.6)",
                  border: "1px solid oklch(0.72 0.11 78 / 0.25)",
                  color: "oklch(0.82 0.09 82)",
                }}
                aria-label="Toggle menu"
                data-ocid="nav.toggle"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
              style={{
                background: "oklch(0.20 0.05 45)",
                borderTop: "1px solid oklch(0.72 0.11 78 / 0.3)",
              }}
            >
              <nav className="flex flex-col px-4 py-4 gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link}
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="text-left text-xs uppercase tracking-widest py-3 font-bold transition-colors"
                    style={{
                      color: "oklch(0.82 0.09 82)",
                      borderBottom: "1px solid oklch(0.72 0.11 78 / 0.20)",
                    }}
                    data-ocid="nav.link"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {link}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
