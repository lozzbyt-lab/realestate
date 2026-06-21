"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = ["Home", "About", "Services", "Projects", "Blog"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 14 L9 4 L16 14 Z" fill="#0D1F14" />
            </svg>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">Brikly</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-dark text-dark font-bold text-sm px-5 py-2.5 rounded-full transition-colors duration-200"
          >
            Get a Quote
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-dark/98 backdrop-blur-md px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link} href="#" className="text-white/80 text-base font-medium py-1">
              {link}
            </a>
          ))}
          <a href="#contact" className="bg-accent text-dark font-bold text-sm px-5 py-2.5 rounded-full w-fit mt-2">
            Get a Quote
          </a>
        </div>
      )}
    </motion.nav>
  );
}
