import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const navLinks = ["NEW ARRIVALS", "MEN", "WOMEN", "BRANDS", "SALE", "EXPLORE"];

export default function Header() {
  const { cartCount, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="bg-[oklch(0.145_0_0)] text-white text-xs py-2 text-center tracking-widest font-medium">
        Foot Rush | Official Store — India 🇮🇳 &nbsp;·&nbsp; Free shipping on
        orders over ₹5,000
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="/"
              className="flex items-center group"
              data-ocid="nav.link"
            >
              <img
                src="/assets/uploads/whatsapp_image_2026-03-24_at_12.17.32_pm-019d1eb7-9f69-769f-adf3-cfbc068fcd85-1.jpeg"
                alt="Foot Rush Shoecare"
                className="h-12 w-auto object-contain"
              />
            </a>

            <nav
              className="hidden lg:flex items-center gap-7"
              aria-label="Primary navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="/"
                  className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.39_0.012_250)] hover:text-[oklch(0.72_0.17_55)] transition-colors duration-200"
                  data-ocid="nav.link"
                >
                  {link}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="p-2 rounded-full hover:bg-muted transition-colors hidden sm:flex"
                aria-label="Search"
                data-ocid="nav.button"
              >
                <Search className="w-5 h-5 text-[oklch(0.39_0.012_250)]" />
              </button>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-muted transition-colors hidden sm:flex"
                aria-label="Account"
                data-ocid="nav.button"
              >
                <User className="w-5 h-5 text-[oklch(0.39_0.012_250)]" />
              </button>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-muted transition-colors hidden sm:flex"
                aria-label="Wishlist"
                data-ocid="nav.button"
              >
                <Heart className="w-5 h-5 text-[oklch(0.39_0.012_250)]" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="relative p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Shopping cart"
                data-ocid="cart.open_modal_button"
              >
                <ShoppingCart className="w-5 h-5 text-[oklch(0.39_0.012_250)]" />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-0.5 -right-0.5 rounded-full text-[10px] font-bold flex items-center justify-center text-white"
                    style={{
                      background: "var(--fr-orange)",
                      width: "18px",
                      height: "18px",
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle menu"
                data-ocid="nav.toggle"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden bg-white border-t border-border"
            >
              <nav className="flex flex-col px-4 py-4 gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="text-left text-sm font-semibold uppercase tracking-widest text-[oklch(0.39_0.012_250)] hover:text-[oklch(0.72_0.17_55)] py-3 border-b border-border last:border-0 transition-colors"
                    data-ocid="nav.link"
                  >
                    {link}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
