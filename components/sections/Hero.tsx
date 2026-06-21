"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "On Time", label: "Delivery Guaranteed" },
  { value: "ISO", label: "Certified Company" },
  { value: "Premium", label: "Quality Materials" },
];

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen flex flex-col justify-end overflow-hidden"
      style={{
        backgroundImage: "url('/frames/frame_0036.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-0 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl mb-12"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="section-label mb-4"
          >
            Premium Construction
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            Building Your <br />
            <span className="text-accent">Dreams</span> to Reality
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/60 text-lg font-light max-w-lg leading-relaxed mb-8"
          >
            From concept to completion, we craft exceptional spaces with precision,
            quality, and a commitment to your vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#services"
              className="bg-accent hover:bg-accent-dark text-dark font-bold px-7 py-3.5 rounded-full text-sm transition-colors duration-200"
            >
              Start a Project
            </a>
            <a
              href="#about"
              className="border border-white/30 hover:border-white/60 text-white font-medium px-7 py-3.5 rounded-full text-sm transition-colors duration-200"
            >
              Our Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 w-full bg-dark-mid/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={i} className="py-5 px-6 flex items-center gap-4">
                <div className="w-1 h-8 bg-accent rounded-full flex-shrink-0" />
                <div>
                  <p className="text-white font-bold text-base">{s.value}</p>
                  <p className="text-white/40 text-xs mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
