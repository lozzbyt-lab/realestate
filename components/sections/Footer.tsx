"use client";

const footerLinks = {
  Company: ["About Us", "Our Team", "Careers", "Press"],
  Support: ["Contact", "FAQ", "Warranty", "Financing"],
  Services: ["Residential", "Commercial", "Renovation", "Consulting"],
};

const contactInfo = [
  { label: "Address", value: "1234 Construction Ave, Austin TX 78701" },
  { label: "Phone", value: "+1 (512) 123-4567" },
  { label: "Email", value: "hello@brikly.com" },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 14 L9 4 L16 14 Z" fill="#0D1F14" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">Brikly</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Building Austin&apos;s finest residential and commercial spaces for over
              15 years. Quality, integrity, excellence.
            </p>
            <div className="flex gap-3">
              {["TW", "IN", "FB", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-accent/20 hover:text-accent flex items-center justify-center text-white/40 text-xs font-medium transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <p className="text-white font-semibold text-sm mb-5">{col}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-white font-semibold text-sm mb-5">Contact</p>
            <ul className="space-y-4">
              {contactInfo.map((c) => (
                <li key={c.label}>
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-1">{c.label}</p>
                  <p className="text-white/60 text-sm">{c.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Brikly Construction. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors duration-200">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
