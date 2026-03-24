import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

export default function PromoSection() {
  const { addToCart } = useCart();
  const promoProduct = products[1];

  return (
    <section className="py-20" style={{ background: "oklch(0.965 0.004 240)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <img
              src="/assets/generated/promo-shoe.dim_500x500.png"
              alt="Sneakerdrop of the Week"
              className="w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.3em] mb-3"
              style={{ color: "var(--fr-orange)" }}
            >
              ⚡ Sneakerdrop of the Week
            </p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-[oklch(0.145_0_0)] leading-tight tracking-tight mb-4">
              AeroStrike
              <br />
              Elite
            </h2>
            <p className="text-[oklch(0.39_0.012_250)] leading-relaxed mb-6 max-w-md">
              Engineered for peak performance, the AeroStrike Elite combines
              ultra-responsive cushioning with a breathable mesh upper. Built
              for athletes who refuse to slow down.
            </p>
            <p className="text-3xl font-black text-[oklch(0.145_0_0)] mb-6">
              ₹12,499
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <button
                type="button"
                onClick={() => addToCart(promoProduct)}
                className="inline-flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-wider text-sm text-white rounded-sm hover:opacity-90 transition-all hover:-translate-y-0.5"
                style={{ background: "var(--fr-orange)" }}
                data-ocid="promo.primary_button"
              >
                Add to Cart
              </button>
              <a
                href="/#shop"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.145_0_0)] hover:text-[oklch(0.72_0.17_55)] transition-colors"
                data-ocid="promo.link"
              >
                Shop All <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
