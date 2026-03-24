import { Heart, ShoppingCart, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { type Product, useCart } from "../context/CartContext";

const STARS = [1, 2, 3, 4, 5];

interface ProductCardProps {
  product: Product;
  index: number;
}

function formatINR(amount: number) {
  return `\u20B9${amount.toLocaleString("en-IN")}`;
}

// Vintage earth-tone card palette — rotating
const CARD_PALETTES = [
  {
    bg: "oklch(0.93 0.04 82)",
    border: "oklch(0.72 0.11 78 / 0.55)",
    accent: "oklch(0.62 0.12 70)",
    cat: "oklch(0.48 0.11 48)",
    shadow: "oklch(0.18 0.05 45 / 0.14)",
  },
  {
    bg: "oklch(0.92 0.04 78)",
    border: "oklch(0.65 0.08 25 / 0.55)",
    accent: "oklch(0.58 0.09 22)",
    cat: "oklch(0.50 0.09 25)",
    shadow: "oklch(0.18 0.05 45 / 0.12)",
  },
  {
    bg: "oklch(0.94 0.04 88)",
    border: "oklch(0.68 0.14 68 / 0.50)",
    accent: "oklch(0.62 0.13 65)",
    cat: "oklch(0.52 0.12 62)",
    shadow: "oklch(0.18 0.05 45 / 0.14)",
  },
  {
    bg: "oklch(0.91 0.04 80)",
    border: "oklch(0.62 0.07 145 / 0.50)",
    accent: "oklch(0.55 0.08 145)",
    cat: "oklch(0.46 0.08 140)",
    shadow: "oklch(0.18 0.05 45 / 0.12)",
  },
];

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useCart();
  const [wishlisted, setWishlisted] = useState(false);

  const p = CARD_PALETTES[index % CARD_PALETTES.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -5, boxShadow: `0 16px 48px ${p.shadow}` }}
      className="group rounded-sm overflow-hidden transition-all duration-400 card-vintage"
      style={{
        background: p.bg,
        border: `2px solid ${p.border}`,
        boxShadow: `0 4px 16px ${p.shadow}`,
      }}
      data-ocid={`product.item.${index + 1}`}
    >
      {/* Image area */}
      <div
        className="relative overflow-hidden aspect-square"
        style={{ background: "oklch(0.88 0.05 78)" }}
      >
        {/* Gold top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px z-10"
          style={{
            background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`,
          }}
        />

        {product.badge && (
          <span
            className="stamp-badge absolute top-3 left-3 z-10"
            style={{ color: p.accent, borderColor: p.accent }}
          >
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full shadow-sm hover:scale-110 transition-transform"
          style={{ background: "oklch(0.94 0.04 85 / 0.85)" }}
          aria-label="Toggle wishlist"
          data-ocid={`product.toggle.${index + 1}`}
        >
          <Heart
            className="w-4 h-4 transition-colors"
            style={
              wishlisted
                ? { fill: p.accent, stroke: p.accent }
                : { stroke: p.cat, fill: "transparent" }
            }
          />
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-600"
          style={{ filter: "sepia(0.15) contrast(0.95)" }}
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <p
          className="text-xs font-bold uppercase tracking-wider mb-1"
          style={{ color: p.cat, fontFamily: "'Libre Baskerville', serif" }}
        >
          {product.category}
        </p>
        <h3
          className="font-bold mb-2 text-sm sm:text-base"
          style={{
            color: "oklch(0.22 0.05 45)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-3">
          {STARS.map((star) => (
            <Star
              key={star}
              className="w-3.5 h-3.5"
              style={{
                fill:
                  star <= Math.floor(product.rating)
                    ? p.accent
                    : "oklch(0.80 0.04 78)",
                stroke:
                  star <= Math.floor(product.rating)
                    ? p.accent
                    : "oklch(0.75 0.04 75)",
              }}
            />
          ))}
          <span
            className="text-xs ml-1"
            style={{ color: "oklch(0.55 0.05 55)" }}
          >
            ({product.reviews})
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span
            className="font-black text-base"
            style={{
              color: "oklch(0.28 0.06 48)",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {formatINR(product.price)}
          </span>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="btn-vintage flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-sm hover:-translate-y-0.5 transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${p.accent}, oklch(0.62 0.12 70))`,
              color: "oklch(0.94 0.04 85)",
              border: `1px solid ${p.border}`,
              boxShadow: `0 2px 10px ${p.shadow}`,
              fontFamily: "'Libre Baskerville', serif",
            }}
            data-ocid={`product.button.${index + 1}`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}
