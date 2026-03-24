import { Mail, MapPin, Zap } from "lucide-react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";

export default function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--fr-navy)" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-sm flex items-center justify-center"
                style={{ background: "var(--fr-orange)" }}
              >
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-black text-xl tracking-tight uppercase">
                Foot Rush
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "oklch(0.78 0.01 250)" }}
            >
              Your destination for premium performance sneakers. We curate the
              best from the world's top brands — designed for speed, built for
              life.
            </p>

            {/* Location */}
            <div className="flex items-start gap-2 mb-3">
              <MapPin
                className="w-4 h-4 mt-0.5 shrink-0"
                style={{ color: "var(--fr-orange)" }}
              />
              <div>
                <p className="text-sm font-semibold text-white">India</p>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.78 0.01 250)" }}
                >
                  Serving customers across India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 mb-6">
              <Mail
                className="w-4 h-4 shrink-0"
                style={{ color: "var(--fr-orange)" }}
              />
              <a
                href="mailto:cimmanuel657@gmail.com"
                className="text-sm transition-colors hover:text-white"
                style={{ color: "oklch(0.78 0.01 250)" }}
              >
                cimmanuel657@gmail.com
              </a>
            </div>

            <div className="flex gap-3">
              {[
                {
                  icon: SiInstagram,
                  label: "Instagram",
                  href: "https://instagram.com",
                },
                { icon: SiX, label: "X / Twitter", href: "https://x.com" },
                {
                  icon: SiFacebook,
                  label: "Facebook",
                  href: "https://facebook.com",
                },
                {
                  icon: SiYoutube,
                  label: "YouTube",
                  href: "https://youtube.com",
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "oklch(0.25 0.04 240)" }}
                  data-ocid="footer.link"
                >
                  <Icon
                    className="w-4 h-4"
                    style={{ color: "oklch(0.78 0.01 250)" }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-5">
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "New Arrivals",
                "Men's Sneakers",
                "Women's Sneakers",
                "Training",
                "Running",
                "Sale",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/#"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "oklch(0.78 0.01 250)" }}
                    data-ocid="footer.link"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-5">
              Info
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "About Us",
                "Careers",
                "Press",
                "Sustainability",
                "Affiliates",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/#"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "oklch(0.78 0.01 250)" }}
                    data-ocid="footer.link"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:cimmanuel657@gmail.com"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "oklch(0.78 0.01 250)" }}
                  data-ocid="footer.link"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-2">
              Get 15% Off
            </h4>
            <p
              className="text-xs mb-4"
              style={{ color: "oklch(0.78 0.01 250)" }}
            >
              Join our newsletter for exclusive drops and offers.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="px-4 py-3 text-sm rounded-sm outline-none focus:ring-2 text-[oklch(0.145_0_0)]"
                style={{ background: "white" }}
                data-ocid="footer.input"
                required
              />
              <button
                type="submit"
                className="py-3 text-xs font-black uppercase tracking-widest text-white rounded-sm hover:opacity-90 transition-all"
                style={{ background: "var(--fr-orange)" }}
                data-ocid="footer.submit_button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "oklch(0.25 0.04 240)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "oklch(0.62 0.012 250)" }}>
            © {year} Foot Rush. All rights reserved. &nbsp;·&nbsp; 🇮🇳 India
          </p>
          <p className="text-xs" style={{ color: "oklch(0.62 0.012 250)" }}>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
