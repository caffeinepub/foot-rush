import { Headphones, RotateCcw, Star, Truck } from "lucide-react";
import { motion } from "motion/react";

const props = [
  {
    icon: Truck,
    label: "Fast Shipping",
    desc: "Free delivery on orders over \u20b95,000",
    accent: "oklch(0.82 0.09 82)",
    iconBg: "oklch(0.72 0.11 78 / 0.18)",
    border: "oklch(0.72 0.11 78 / 0.40)",
  },
  {
    icon: Star,
    label: "Premium Quality",
    desc: "Curated from top global brands",
    accent: "oklch(0.82 0.06 30)",
    iconBg: "oklch(0.65 0.08 25 / 0.18)",
    border: "oklch(0.65 0.08 25 / 0.38)",
  },
  {
    icon: RotateCcw,
    label: "Easy Returns",
    desc: "30-day hassle-free returns",
    accent: "oklch(0.80 0.06 148)",
    iconBg: "oklch(0.62 0.07 145 / 0.18)",
    border: "oklch(0.62 0.07 145 / 0.38)",
  },
  {
    icon: Headphones,
    label: "24/7 Support",
    desc: "Always here when you need us",
    accent: "oklch(0.84 0.08 68)",
    iconBg: "oklch(0.68 0.14 68 / 0.18)",
    border: "oklch(0.68 0.14 68 / 0.38)",
  },
];

export default function ValueProps() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ background: "oklch(0.22 0.05 45)" }}
    >
      {/* Top ornament */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.11 78 / 0.5), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.11 78 / 0.5), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2
            className="text-2xl font-black uppercase tracking-widest"
            style={{
              color: "oklch(0.88 0.06 80)",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Why Foot Rush
          </h2>
          <div className="ornament justify-center mt-2">
            <span style={{ color: "oklch(0.72 0.11 78)" }}>——————✦——————</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {props.map(
            ({ icon: Icon, label, desc, accent, iconBg, border }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-sm transition-all duration-400"
                style={{
                  background: "oklch(0.28 0.06 48 / 0.5)",
                  border: `2px solid ${border}`,
                  boxShadow: "0 4px 20px oklch(0.10 0.04 45 / 0.35)",
                }}
              >
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-sm shadow"
                  style={{
                    background: iconBg,
                    border: `2px solid ${border}`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: accent }} />
                </div>
                <h3
                  className="font-black text-sm uppercase tracking-wide"
                  style={{
                    color: accent,
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {label}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(0.70 0.04 75)" }}
                >
                  {desc}
                </p>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
