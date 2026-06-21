"use client";

import { motion } from "framer-motion";

const checks = [
  "Full-cycle project management from design to handover",
  "Licensed architects, engineers, and skilled tradespeople",
  "Transparent pricing with no hidden costs",
  "On-time delivery with quality guarantees",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <div
              className="rounded-2xl overflow-hidden aspect-[4/5] relative"
              style={{
                backgroundImage: "url('/frames/frame_0020.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-dark/10" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl p-6 shadow-xl">
              <p className="text-dark font-bold text-4xl leading-none">15+</p>
              <p className="text-dark/70 text-sm mt-1 font-medium">Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="section-label mb-4">Who We Are</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight mb-6">
              Trusted Local Construction <br />
              <span className="text-dark-mid">Partner in Austin.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-base">
              With over a decade of excellence, Brikly has been the cornerstone of
              Austin&apos;s most celebrated residential and commercial developments.
              We combine innovative design with unmatched craftsmanship to deliver
              spaces that inspire and endure.
            </p>

            <ul className="space-y-4 mb-10">
              {checks.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-accent rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#0D1F14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-dark-mid text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-dark transition-colors duration-200"
            >
              Learn More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
