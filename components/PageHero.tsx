"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/animations";

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
      {/* Animated overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
        className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/50 to-dark/85"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-14 w-full">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="section-label mb-3"
        >
          {label}
        </motion.p>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="h-0.5 w-10 bg-accent origin-left mb-4"
        />

        {/* Title — masked reveal */}
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            {title}
          </motion.h1>
        </div>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            className="text-white/55 text-lg mt-4 max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
