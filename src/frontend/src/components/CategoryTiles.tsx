import { motion } from "motion/react";

const categories = [
  { label: "MEN", image: "/assets/generated/category-men.dim_600x400.jpg" },
  { label: "WOMEN", image: "/assets/generated/category-women.dim_600x400.jpg" },
  {
    label: "TRAINING",
    image: "/assets/generated/category-training.dim_600x400.jpg",
  },
  {
    label: "RUNNING",
    image: "/assets/generated/category-running.dim_600x400.jpg",
  },
];

export default function CategoryTiles() {
  return (
    <section
      id="categories"
      className="py-20"
      style={{ background: "oklch(0.965 0.004 240)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em] mb-2"
            style={{ color: "var(--fr-orange)" }}
          >
            Browse
          </p>
          <h2 className="text-4xl font-black uppercase text-[oklch(0.145_0_0)] tracking-tight">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.label}
              href={`/#${cat.label.toLowerCase()}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-lg overflow-hidden group aspect-[3/4] sm:aspect-[2/3] block"
              data-ocid="category.link"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-black text-xl sm:text-2xl uppercase tracking-[0.2em]">
                  {cat.label}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
