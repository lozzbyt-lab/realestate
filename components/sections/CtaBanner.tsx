"use client";

import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/frames/frame_0015.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-dark-mid/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight max-w-lg"
        >
          Let&apos;s Build Your{" "}
          <span className="text-accent">Dream Home.</span>
        </motion.h2>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="bg-accent hover:bg-accent-dark text-dark font-bold px-9 py-4 rounded-full text-sm whitespace-nowrap transition-colors duration-200"
        >
          Start Your Project →
        </motion.a>
      </div>
    </section>
  );
}
