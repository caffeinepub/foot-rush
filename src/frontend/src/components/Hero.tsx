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
      <img
        src="/assets/generated/hero-banner.dim_1400x600.jpg"
        alt="Foot Rush Hero — Runner at sunset"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-300 mb-4 block">
              New Collection 2026
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-none text-white mb-4 tracking-tight">
              STEP INTO
              <br />
              YOUR RUSH.
            </h1>
            <p className="text-lg text-white/80 mb-8 font-light">
              Discover High-Performance Sneakers built for speed, style, and
              endurance.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#featured"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold uppercase tracking-wider text-sm text-white rounded-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: "var(--fr-orange)" }}
                data-ocid="hero.primary_button"
              >
                Shop Now <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold uppercase tracking-wider text-sm text-white border-2 border-white/70 rounded-sm hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
                data-ocid="hero.secondary_button"
              >
                Explore Collections
              </a>
            </div>
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
            className={`rounded-full transition-all duration-300 ${activeSlide === i ? "w-8 h-2.5" : "w-2.5 h-2.5 bg-white/50 hover:bg-white/70"}`}
            style={activeSlide === i ? { background: "var(--fr-orange)" } : {}}
            aria-label={`Slide ${i + 1}`}
            data-ocid="hero.toggle"
          />
        ))}
      </div>
    </section>
  );
}
