"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  frame: string;
}

export default function PageHero({ label, title, subtitle, frame }: PageHeroProps) {
  return (
    <section
      className="relative h-[52vh] min-h-[380px] flex items-end overflow-hidden"
      style={{
        backgroundImage: `url('/frames/${frame}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/50 to-dark/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-14 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-label mb-3"
        >
          {label}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/55 text-lg mt-4 max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
