"use client";

import { motion } from "framer-motion";

interface MainContentProps {
  visible: boolean;
}

export default function MainContent({ visible }: MainContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      className="relative min-h-screen bg-black flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xs tracking-[0.4em] uppercase text-white/40 mb-6"
        >
          Redefining luxury
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-6xl md:text-8xl font-light tracking-tight text-white mb-8"
          style={{ letterSpacing: "-0.03em" }}
        >
          Next Section
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-lg text-white/50 font-light max-w-lg mx-auto leading-relaxed"
        >
          A new standard of living, crafted for those who demand excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={visible ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-16 h-px bg-white/10 w-24 mx-auto origin-center"
        />
      </div>

      <div className="h-[100vh]" />
    </motion.div>
  );
}
