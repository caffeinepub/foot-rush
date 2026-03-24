import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { Product as BackendProduct } from "../backend";
import type { Product } from "../context/CartContext";
import { products as staticProducts } from "../data/products";
import { useActor } from "../hooks/useActor";
import ProductCard from "./ProductCard";

function toProduct(p: BackendProduct): Product {
  return {
    id: Number(p.id),
    name: p.name,
    price: Number(p.price),
    image: p.imageUrl,
    category: p.category,
    rating: p.rating,
    reviews: Number(p.reviews),
    badge: p.badge.__kind__ === "Some" ? p.badge.value : undefined,
  };
}

const SectionHeading = ({
  eyebrow,
  title,
}: { eyebrow: string; title: string }) => (
  <motion.div
    className="text-center mb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <p
      className="text-xs uppercase tracking-[0.3em] mb-3"
      style={{
        color: "oklch(0.62 0.12 70)",
        fontFamily: "'Libre Baskerville', serif",
        fontStyle: "italic",
      }}
    >
      {eyebrow}
    </p>
    <h2
      className="text-4xl font-black uppercase tracking-tight"
      style={{
        fontFamily: "'Playfair Display', serif",
        color: "oklch(0.22 0.05 45)",
      }}
    >
      {title}
    </h2>
    {/* Ornamental divider */}
    <div className="ornament justify-center mt-3">
      <span style={{ color: "oklch(0.72 0.11 78)" }}>——————✦——————</span>
    </div>
  </motion.div>
);

export default function FeaturedProducts() {
  const { actor } = useActor();
  const [products, setProducts] = useState<Product[]>(staticProducts);

  useEffect(() => {
    if (!actor) return;
    actor
      .getProducts()
      .then((backendProducts: BackendProduct[]) => {
        if (backendProducts.length > 0) {
          setProducts(backendProducts.map(toProduct));
        }
      })
      .catch(() => {});
  }, [actor]);

  const featured = products.slice(0, 4);

  return (
    <section
      id="featured"
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.92 0.04 80) 0%, oklch(0.88 0.05 78) 50%, oklch(0.90 0.04 82) 100%)",
      }}
    >
      {/* Aged top ornament border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.11 78 / 0.55), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Featured Collection" title="New Releases" />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="product.list"
        >
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <ProductCard product={product} index={i} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Full Catalogue" title="All Sneakers" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(4).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.12 }}
              >
                <ProductCard product={product} index={i + 4} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
