"use client";

import Link from "next/link";
import Image from "next/image";

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
    <footer className="bg-[#f0ede8] overflow-hidden relative">
      {/* ── Top info strip ── */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-14 pb-10 grid grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {/* Visit */}
        <div>
          <p className="text-[11px] font-black tracking-[0.28em] uppercase text-dark mb-5">
            Visit
          </p>
          <address className="not-italic text-[13px] text-dark/70 leading-relaxed font-medium">
            1234 Construction Ave<br />
            Austin, TX 78701<br />
            United States
          </address>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-[11px] font-black tracking-[0.28em] uppercase text-dark mb-5">
            Quick Links
          </p>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[13px] font-bold text-dark/60 hover:text-dark tracking-[0.12em] transition-colors duration-200 uppercase"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <p className="text-[11px] font-black tracking-[0.28em] uppercase text-dark mb-5">
            Connect
          </p>
          <ul className="space-y-3">
            {connect.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[13px] font-bold text-dark/60 hover:text-dark tracking-[0.12em] transition-colors duration-200 uppercase"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Brand block */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-dark rounded-sm flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 18 18" fill="none">
                <path d="M2 14 L9 4 L16 14 Z" fill="#8DC63F" />
              </svg>
            </div>
            <span className="text-dark font-black text-base tracking-tight">Brikly.</span>
          </div>
          <a href="tel:+15121234567" className="text-[13px] text-dark/75 hover:text-dark font-semibold transition-colors">
            +1 (512) 123-4567
          </a>
          <a href="mailto:hello@brikly.com" className="text-[13px] text-dark/75 hover:text-dark font-semibold tracking-wide transition-colors uppercase">
            hello@brikly.com
          </a>
          <p className="text-[11px] text-dark/40 mt-auto pt-6 font-medium">
            © {new Date().getFullYear()} Brikly. All Rights Reserved
          </p>
        </div>
      </div>

      {/* ── Thin divider ── */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="h-px bg-dark/10" />
      </div>

      {/* ── House + wordmark stage ── */}
      <div
        className="relative w-full flex flex-col items-center justify-end overflow-hidden"
        style={{ height: "clamp(380px, 50vw, 700px)" }}
      >
        {/* Giant wordmark — sits behind the house */}
        <div
          className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden pointer-events-none select-none z-0"
          style={{ paddingBottom: "clamp(10px, 2vw, 28px)" }}
        >
          <span
            className="font-black text-dark leading-none"
            style={{
              fontSize: "clamp(90px, 20vw, 290px)",
              letterSpacing: "-0.045em",
              lineHeight: 0.82,
              opacity: 1,
              color: "#0D1F14",
            }}
          >
            BRIKLY.
          </span>
        </div>

        {/* Floating house image — sits in front of the wordmark */}
        <div
          className="relative z-10 footer-house"
          style={{
            width: "clamp(300px, 55%, 700px)",
            marginBottom: "clamp(-30px, -3vw, -60px)",
          }}
        >
          <Image
            src="/footer-house.webp"
            alt="Luxury modern home"
            width={700}
            height={560}
            className="object-contain drop-shadow-2xl"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </div>

      {/* Float + drift keyframe animation */}
      <style jsx>{`
        .footer-house {
          animation: houseFloat 5s ease-in-out infinite;
          transform-origin: center bottom;
        }

        @keyframes houseFloat {
          0%   { transform: translateY(0px) scale(1); filter: drop-shadow(0 30px 40px rgba(0,0,0,0.18)); }
          30%  { transform: translateY(-14px) scale(1.012); filter: drop-shadow(0 44px 55px rgba(0,0,0,0.13)); }
          60%  { transform: translateY(-22px) scale(1.018); filter: drop-shadow(0 52px 65px rgba(0,0,0,0.10)); }
          100% { transform: translateY(0px) scale(1); filter: drop-shadow(0 30px 40px rgba(0,0,0,0.18)); }
        }
      `}</style>
    </footer>
  );
}
