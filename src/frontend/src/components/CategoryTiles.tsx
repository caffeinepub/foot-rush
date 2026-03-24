import { motion } from "motion/react";

const categories = [
  {
    label: "MEN",
    image: "/assets/generated/category-men.dim_600x400.jpg",
    bg: "oklch(0.72 0.09 25)",
    overlay: "oklch(0.55 0.09 22 / 0.75)",
    accent: "oklch(0.82 0.09 30)",
    emoji: "👟",
  },
  {
    label: "WOMEN",
    image: "/assets/generated/category-women.dim_600x400.jpg",
    bg: "oklch(0.68 0.12 68)",
    overlay: "oklch(0.50 0.12 65 / 0.72)",
    accent: "oklch(0.82 0.10 72)",
    emoji: "👠",
  },
  {
    label: "TRAINING",
    image: "/assets/generated/category-training.dim_600x400.jpg",
    bg: "oklch(0.74 0.07 80)",
    overlay: "oklch(0.56 0.07 78 / 0.72)",
    accent: "oklch(0.86 0.06 82)",
    emoji: "🏋️",
  },
  {
    label: "RUNNING",
    image: "/assets/generated/category-running.dim_600x400.jpg",
    bg: "oklch(0.62 0.07 145)",
    overlay: "oklch(0.44 0.07 142 / 0.72)",
    accent: "oklch(0.78 0.06 148)",
    emoji: "🏃",
  },
];

export default function CategoryTiles() {
  return (
    <section
      id="categories"
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, oklch(0.94 0.04 82) 0%, oklch(0.90 0.05 78) 100%)",
      }}
    >
      {/* Top ornamental border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.11 78 / 0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Browse
          </p>
          <h2
            className="text-4xl font-black uppercase tracking-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "oklch(0.22 0.05 45)",
            }}
          >
            Shop by Category
          </h2>
          <div className="ornament justify-center mt-3">
            <span style={{ color: "oklch(0.72 0.11 78)" }}>——————✦——————</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.label}
              href={`/#${cat.label.toLowerCase()}`}
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="relative overflow-hidden group aspect-[3/4] sm:aspect-[2/3] block shadow-md transition-all duration-400"
              style={{
                background: cat.bg,
                borderRadius: "2px",
                border: "2px solid oklch(0.72 0.11 78 / 0.35)",
                boxShadow: "0 4px 20px oklch(0.18 0.05 45 / 0.18)",
              }}
              data-ocid="category.link"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-55 group-hover:scale-108 transition-all duration-600"
                style={{ filter: "sepia(0.5) contrast(0.9)" }}
                loading="lazy"
              />
              {/* Vintage bottom overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${cat.overlay} 0%, transparent 60%)`,
                }}
              />
              {/* Top double-line frame accent */}
              <div
                className="absolute top-2 left-2 right-2 bottom-2 pointer-events-none"
                style={{ border: "1px solid oklch(0.94 0.04 85 / 0.2)" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                <span className="text-3xl mb-1">{cat.emoji}</span>
                <span
                  className="font-black text-xl sm:text-2xl uppercase tracking-[0.2em] drop-shadow-md"
                  style={{
                    color: "oklch(0.96 0.03 88)",
                    fontFamily: "'Playfair Display', serif",
                    textShadow: "1px 2px 12px oklch(0.10 0.04 45 / 0.7)",
                  }}
                >
                  {cat.label}
                </span>
                <motion.span
                  className="stamp-badge opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: cat.accent, borderColor: cat.accent }}
                >
                  Shop Now
                </motion.span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
