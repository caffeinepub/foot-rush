import { Headphones, RotateCcw, Star, Truck } from "lucide-react";
import { motion } from "motion/react";

const props = [
  {
    icon: Truck,
    label: "Fast Shipping",
    desc: "Free delivery on orders over $100",
  },
  {
    icon: Star,
    label: "Premium Quality",
    desc: "Curated from top global brands",
  },
  {
    icon: RotateCcw,
    label: "Easy Returns",
    desc: "30-day hassle-free returns",
  },
  {
    icon: Headphones,
    label: "24/7 Support",
    desc: "Always here when you need us",
  },
];

export default function ValueProps() {
  return (
    <section className="py-16 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-black uppercase text-[oklch(0.145_0_0)] tracking-widest">
            Why Foot Rush
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {props.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: "oklch(0.965 0.004 240)" }}
              >
                <Icon
                  className="w-6 h-6"
                  style={{ color: "var(--fr-orange)" }}
                />
              </div>
              <h3 className="font-bold text-[oklch(0.145_0_0)] text-sm uppercase tracking-wide">
                {label}
              </h3>
              <p className="text-xs text-[oklch(0.62_0.012_250)] leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
