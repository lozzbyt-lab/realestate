"use client";

import { motion } from "framer-motion";
import { VIEWPORT, EASE } from "@/lib/animations";

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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={VIEWPORT}
        className="absolute inset-0 bg-dark-mid/90"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div style={{ overflow: "hidden" }}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE }}
            viewport={VIEWPORT}
            className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight max-w-lg"
          >
            Let&apos;s Build Your{" "}
            <span className="text-accent">Dream Home.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          viewport={VIEWPORT}
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="inline-block bg-accent hover:bg-accent-dark text-dark font-bold px-9 py-4 rounded-full text-sm whitespace-nowrap transition-colors duration-200"
          >
            Start Your Project →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
