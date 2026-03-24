import { Mail, MapPin, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { useActor } from "../hooks/useActor";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "duplicate"
  >("idle");
  const { actor } = useActor();
  const year = new Date().getFullYear();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      if (actor) {
        const ok: boolean = await actor.subscribeNewsletter(email);
        setStatus(ok ? "success" : "duplicate");
      } else {
        setStatus("success");
      }
    } catch {
      setStatus("success");
    }
    setEmail("");
  };

  return (
    <motion.footer
      style={{ background: "oklch(0.18 0.05 45)" }}
      className="text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      {/* Antique gold top border */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.11 78 / 0.7), transparent)",
        }}
      />
      <div
        className="h-0.5"
        style={{ background: "oklch(0.72 0.11 78 / 0.25)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.11 78), oklch(0.62 0.12 70))",
                  border: "1px solid oklch(0.55 0.11 72)",
                  boxShadow: "0 0 12px oklch(0.72 0.11 78 / 0.30)",
                }}
              >
                <Zap
                  className="w-5 h-5"
                  style={{ color: "oklch(0.18 0.05 45)" }}
                />
              </div>
              <span
                className="font-black text-xl tracking-tight uppercase vintage-text"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Foot Rush
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-4 italic"
              style={{ color: "oklch(0.68 0.04 72)" }}
            >
              Your destination for premium performance sneakers. We curate the
              best from the world's top brands — designed for speed, built for
              life.
            </p>

            <div className="flex items-start gap-2 mb-3">
              <MapPin
                className="w-4 h-4 mt-0.5 shrink-0"
                style={{ color: "oklch(0.72 0.11 78)" }}
              />
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "oklch(0.88 0.06 80)" }}
                >
                  India 🇮🇳
                </p>
                <p className="text-xs" style={{ color: "oklch(0.62 0.04 70)" }}>
                  Serving customers across India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <Mail
                className="w-4 h-4 shrink-0"
                style={{ color: "oklch(0.65 0.08 25)" }}
              />
              <a
                href="mailto:cimmanuel657@gmail.com"
                className="text-sm transition-colors hover:text-white"
                style={{ color: "oklch(0.68 0.04 72)" }}
              >
                cimmanuel657@gmail.com
              </a>
            </div>

            {/* Ornamental divider */}
            <div className="ornament mb-5">
              <span style={{ color: "oklch(0.72 0.11 78)" }}>
                ——————✦——————
              </span>
            </div>

            <div className="flex gap-3">
              {[
                {
                  icon: SiInstagram,
                  label: "Instagram",
                  href: "https://instagram.com",
                  color: "oklch(0.72 0.09 25)",
                },
                {
                  icon: SiX,
                  label: "X / Twitter",
                  href: "https://x.com",
                  color: "oklch(0.84 0.03 80)",
                },
                {
                  icon: SiFacebook,
                  label: "Facebook",
                  href: "https://facebook.com",
                  color: "oklch(0.68 0.12 68)",
                },
                {
                  icon: SiYoutube,
                  label: "YouTube",
                  href: "https://youtube.com",
                  color: "oklch(0.62 0.12 45)",
                },
              ].map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center transition-all"
                  style={{
                    background: "oklch(0.26 0.06 48 / 0.6)",
                    border: "1px solid oklch(0.72 0.11 78 / 0.25)",
                  }}
                  data-ocid="footer.link"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Shop links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4
              className="font-black uppercase tracking-widest text-xs mb-5"
              style={{
                color: "oklch(0.72 0.11 78)",
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "0.2em",
              }}
            >
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "New Arrivals",
                "Men's Sneakers",
                "Women's Sneakers",
                "Training Shoes",
                "Running Shoes",
                "Sale",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#featured"
                    className="text-sm transition-colors hover:text-white"
                    style={{
                      color: "oklch(0.62 0.04 68)",
                      fontStyle: "italic",
                    }}
                    data-ocid="footer.link"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Help links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4
              className="font-black uppercase tracking-widest text-xs mb-5"
              style={{
                color: "oklch(0.72 0.11 78)",
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "0.2em",
              }}
            >
              Help
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "Size Guide",
                "Shipping Policy",
                "Returns & Exchanges",
                "Track Your Order",
                "Contact Us",
                "FAQs",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="text-sm transition-colors hover:text-white"
                    style={{
                      color: "oklch(0.62 0.04 68)",
                      fontStyle: "italic",
                    }}
                    data-ocid="footer.link"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4
              className="font-black uppercase tracking-widest text-xs mb-5"
              style={{
                color: "oklch(0.72 0.11 78)",
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "0.2em",
              }}
            >
              Newsletter
            </h4>
            <p
              className="text-sm mb-4 italic leading-relaxed"
              style={{ color: "oklch(0.62 0.04 68)" }}
            >
              Get exclusive deals and the latest arrivals in your inbox.
            </p>

            {status === "success" ? (
              <p
                className="text-sm font-semibold"
                style={{ color: "oklch(0.72 0.11 78)" }}
                data-ocid="newsletter.success_state"
              >
                ✦ Thank you for subscribing!
              </p>
            ) : status === "duplicate" ? (
              <p
                className="text-sm"
                style={{ color: "oklch(0.65 0.08 25)" }}
                data-ocid="newsletter.error_state"
              >
                Already subscribed.
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col gap-2"
                data-ocid="newsletter.input"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-3 py-2 text-sm rounded-sm outline-none transition-colors"
                  style={{
                    background: "oklch(0.26 0.06 48 / 0.6)",
                    border: "1px solid oklch(0.72 0.11 78 / 0.30)",
                    color: "oklch(0.88 0.06 80)",
                    fontFamily: "'Libre Baskerville', serif",
                  }}
                  data-ocid="newsletter.input"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-vintage w-full py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all disabled:opacity-60"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.11 78), oklch(0.62 0.12 70))",
                    color: "oklch(0.18 0.05 45)",
                    border: "1px solid oklch(0.55 0.11 72)",
                    fontFamily: "'Libre Baskerville', serif",
                  }}
                  data-ocid="newsletter.submit_button"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom ornamental divider */}
        <div className="ornament justify-center my-10">
          <span style={{ color: "oklch(0.72 0.11 78)" }}>
            ——————✦——————✦——————
          </span>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ color: "oklch(0.50 0.04 62)" }}
        >
          <p>&copy; {year} Foot Rush. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              style={{ color: "oklch(0.65 0.08 72)" }}
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="/"
                className="transition-colors hover:text-white"
                data-ocid="footer.link"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
