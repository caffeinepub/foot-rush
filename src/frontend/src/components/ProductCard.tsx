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

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useCart();
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
      data-ocid={`product.item.${index + 1}`}
    >
      <div className="relative overflow-hidden bg-[oklch(0.965_0.004_240)] aspect-square">
        {product.badge && (
          <span
            className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm text-white"
            style={{
              background:
                product.badge === "Sale"
                  ? "oklch(0.577 0.245 27.325)"
                  : "var(--fr-orange)",
            }}
          >
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 z-10 p-1.5 bg-white rounded-full shadow-sm hover:scale-110 transition-transform"
          aria-label="Toggle wishlist"
          data-ocid={`product.toggle.${index + 1}`}
        >
          <Heart
            className="w-4 h-4 transition-colors"
            style={
              wishlisted
                ? { fill: "var(--fr-orange)", stroke: "var(--fr-orange)" }
                : { stroke: "oklch(0.62 0.012 250)" }
            }
          />
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-[oklch(0.62_0.012_250)] mb-1">
          {product.category}
        </p>
        <h3 className="font-semibold text-[oklch(0.145_0_0)] mb-2 text-sm sm:text-base">
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
                    ? "var(--fr-orange)"
                    : "oklch(0.92 0.004 240)",
                stroke:
                  star <= Math.floor(product.rating)
                    ? "var(--fr-orange)"
                    : "oklch(0.92 0.004 240)",
              }}
            />
          ))}
          <span className="text-xs text-[oklch(0.62_0.012_250)] ml-1">
            ({product.reviews})
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-[oklch(0.145_0_0)] text-base">
            {formatINR(product.price)}
          </span>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider text-white rounded-sm hover:opacity-90 transition-all hover:-translate-y-0.5"
            style={{ background: "var(--fr-orange)" }}
            data-ocid={`product.button.${index + 1}`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
