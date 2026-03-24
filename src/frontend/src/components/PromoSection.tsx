import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

export default function PromoSection() {
  const { addToCart } = useCart();
  const promoProduct = products[1];

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.90 0.05 78) 0%, oklch(0.86 0.06 80) 50%, oklch(0.90 0.05 82) 100%)",
      }}
    >
      {/* Vintage stamp border frame */}
      <div
        className="absolute inset-6 pointer-events-none"
        style={{
          border: "2px solid oklch(0.72 0.11 78 / 0.30)",
          boxShadow:
            "inset 0 0 0 8px oklch(0.90 0.04 80 / 0.5), 0 0 0 2px oklch(0.72 0.11 78 / 0.15)",
        }}
      />

      {/* Decorative aged blobs — warm, subtle */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-20 animate-float"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.11 78), oklch(0.68 0.14 68 / 0.4) 60%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full blur-3xl opacity-15 animate-float"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.08 25), transparent 80%)",
          animationDelay: "2s",
        }}
      />

      {/* Top ornamental line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.11 78 / 0.5), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Warm glow behind shoe */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-35 animate-float"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.72 0.11 78 / 0.6), oklch(0.68 0.14 68 / 0.3) 55%, transparent 75%)",
                }}
              />
              <img
                src="/assets/generated/promo-shoe.dim_500x500.png"
                alt="Sneakerdrop of the Week"
                className="relative w-full max-w-md object-contain drop-shadow-xl animate-float"
                style={{
                  filter: "sepia(0.20) contrast(0.95)",
                  animationDelay: "0.5s",
                }}
                loading="lazy"
              />
            </div>
          </motion.div>

          <div>
            <motion.p
              className="text-xs uppercase tracking-[0.3em] mb-3"
              style={{
                color: "oklch(0.62 0.12 70)",
                fontFamily: "'Libre Baskerville', serif",
                fontStyle: "italic",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              ✦ Sneakerdrop of the Week
            </motion.p>

            <motion.h2
              className="text-4xl sm:text-5xl font-black uppercase leading-tight tracking-tight mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "oklch(0.22 0.05 45)",
              }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              AeroStrike
              <br />
              <span className="vintage-text">Elite</span>
            </motion.h2>

            {/* Ornamental divider */}
            <div className="ornament mb-5">
              <span style={{ color: "oklch(0.72 0.11 78)" }}>
                ——————✦——————
              </span>
            </div>

            <motion.p
              className="leading-relaxed mb-6 max-w-md text-sm"
              style={{ color: "oklch(0.42 0.06 50)", fontStyle: "italic" }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Engineered for peak performance, the AeroStrike Elite combines
              ultra-responsive cushioning with a breathable mesh upper. Built
              for athletes who refuse to slow down.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 items-center mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25 }}
            >
              <span
                className="text-3xl font-black vintage-text"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ₹12,499
              </span>
              <span
                className="stamp-badge"
                style={{
                  color: "oklch(0.48 0.11 48)",
                  borderColor: "oklch(0.48 0.11 48)",
                }}
              >
                🔥 Limited Stock
              </span>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 items-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                type="button"
                onClick={() => addToCart(promoProduct)}
                className="btn-vintage inline-flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-wider text-sm rounded-sm hover:opacity-90 hover:-translate-y-0.5 transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.11 78), oklch(0.62 0.12 70))",
                  color: "oklch(0.18 0.05 45)",
                  border: "2px solid oklch(0.55 0.11 72)",
                  boxShadow:
                    "0 4px 18px oklch(0.72 0.11 78 / 0.30), 3px 3px 0 oklch(0.48 0.10 68)",
                  fontFamily: "'Libre Baskerville', serif",
                }}
                data-ocid="promo.primary_button"
              >
                Add to Cart
              </button>
              <a
                href="/#shop"
                className="inline-flex items-center gap-2 text-sm font-bold transition-all hover:-translate-x-0.5 vintage-text"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
                data-ocid="promo.link"
              >
                Shop All{" "}
                <ArrowRight
                  className="w-4 h-4"
                  style={{ color: "oklch(0.62 0.12 70)" }}
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
