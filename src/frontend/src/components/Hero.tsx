import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(420px, 60vw, 620px)" }}
    >
      {/* Background image */}
      <motion.img
        src="/assets/generated/hero-banner.dim_1400x600.jpg"
        alt="Foot Rush Hero — Runner at sunset"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{ filter: "sepia(0.55) contrast(0.92) brightness(0.88)" }}
      />

      {/* Warm parchment overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.06 48 / 0.90) 0%, oklch(0.28 0.07 55 / 0.75) 40%, oklch(0.18 0.05 45 / 0.65) 75%, transparent 100%)",
        }}
      />

      {/* Aged vignette edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 120px oklch(0.12 0.04 45 / 0.6)",
        }}
      />

      {/* Ornamental bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.72 0.11 78 / 0.2), oklch(0.72 0.11 78 / 0.8), oklch(0.72 0.11 78 / 0.2))",
        }}
      />

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-xl"
          >
            {/* Vintage stamp badge */}
            <motion.span
              className="stamp-badge mb-5 inline-flex"
              style={{
                color: "oklch(0.82 0.09 82)",
                borderColor: "oklch(0.72 0.11 78 / 0.7)",
                background: "oklch(0.28 0.06 48 / 0.5)",
              }}
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              ✦ New Collection 2026 ✦
            </motion.span>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-none mb-5 tracking-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "oklch(0.94 0.04 85)",
                textShadow: "2px 4px 20px oklch(0.10 0.04 45 / 0.7)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              STEP INTO
              <br />
              <span className="vintage-text">YOUR RUSH.</span>
            </motion.h1>

            <motion.p
              className="text-base mb-8 leading-relaxed"
              style={{ color: "oklch(0.84 0.04 75)", fontStyle: "italic" }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
            >
              Discover High-Performance Sneakers built for speed, style, and
              endurance.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52 }}
            >
              <a
                href="#featured"
                className="btn-vintage inline-flex items-center gap-2 px-7 py-3.5 font-bold uppercase tracking-wider text-sm rounded-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.11 78), oklch(0.62 0.12 70))",
                  color: "oklch(0.18 0.05 45)",
                  border: "2px solid oklch(0.55 0.11 72)",
                  boxShadow:
                    "0 4px 20px oklch(0.72 0.11 78 / 0.35), 3px 3px 0 oklch(0.48 0.10 68)",
                  fontFamily: "'Libre Baskerville', serif",
                }}
                data-ocid="hero.primary_button"
              >
                Shop Now <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#categories"
                className="btn-vintage inline-flex items-center gap-2 px-7 py-3.5 font-bold uppercase tracking-wider text-sm rounded-sm hover:-translate-y-1 transition-all duration-300"
                style={{
                  border: "2px solid oklch(0.82 0.09 82 / 0.65)",
                  color: "oklch(0.88 0.05 78)",
                  background: "oklch(0.22 0.05 45 / 0.4)",
                  fontFamily: "'Libre Baskerville', serif",
                }}
                data-ocid="hero.secondary_button"
              >
                Explore Collections
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Dot pagination */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveSlide(i)}
            className="rounded-full transition-all duration-400"
            style={{
              width: activeSlide === i ? "28px" : "10px",
              height: "10px",
              background:
                activeSlide === i
                  ? "oklch(0.72 0.11 78)"
                  : "oklch(0.82 0.09 82 / 0.45)",
            }}
            aria-label={`Slide ${i + 1}`}
            data-ocid="hero.toggle"
          />
        ))}
      </div>
    </section>
  );
}
