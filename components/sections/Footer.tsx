"use client";

import Link from "next/link";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const connect = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f0ede8] overflow-hidden">
      {/* ── Top info strip ── */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-14 pb-10 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Visit */}
        <div>
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-dark mb-4">
            Visit
          </p>
          <address className="not-italic text-[13px] text-dark/55 leading-relaxed">
            1234 Construction Ave<br />
            Austin, TX 78701<br />
            United States
          </address>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-dark mb-4">
            Quick Links
          </p>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[13px] font-semibold text-dark/55 hover:text-dark tracking-wide transition-colors duration-200 uppercase"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-dark mb-4">
            Connect
          </p>
          <ul className="space-y-2.5">
            {connect.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[13px] font-semibold text-dark/55 hover:text-dark tracking-wide transition-colors duration-200 uppercase"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Brand + contact */}
        <div className="flex flex-col gap-3">
          {/* Mini logo */}
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-dark rounded-sm flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 18 18" fill="none">
                <path d="M2 14 L9 4 L16 14 Z" fill="#8DC63F" />
              </svg>
            </div>
            <span className="text-dark font-bold text-base tracking-tight">Brikly.</span>
          </div>

          <a
            href="tel:+15121234567"
            className="text-[13px] text-dark/60 hover:text-dark transition-colors font-medium"
          >
            +1 (512) 123-4567
          </a>
          <a
            href="mailto:hello@brikly.com"
            className="text-[13px] text-dark/60 hover:text-dark transition-colors font-medium uppercase tracking-wide"
          >
            hello@brikly.com
          </a>

          <p className="text-[11px] text-dark/35 mt-auto pt-4">
            © {new Date().getFullYear()} Brikly. All Rights Reserved
          </p>
        </div>
      </div>

      {/* ── Hero image + giant wordmark ── */}
      <div className="relative w-full" style={{ height: "clamp(340px, 48vw, 680px)" }}>
        {/* Building image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/footer-bg.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />

        {/* Very subtle light gradient at the top so image blends into the info strip */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f0ede8] to-transparent" />

        {/* Giant wordmark at the bottom of the image */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center overflow-hidden select-none pointer-events-none">
          <span
            className="font-black text-dark leading-none tracking-tighter"
            style={{
              fontSize: "clamp(80px, 18vw, 260px)",
              lineHeight: 0.85,
              letterSpacing: "-0.04em",
              opacity: 0.92,
              mixBlendMode: "multiply",
            }}
          >
            BRIKLY.
          </span>
        </div>
      </div>
    </footer>
  );
}
