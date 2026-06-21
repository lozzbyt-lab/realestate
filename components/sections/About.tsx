"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, labelReveal, lineGrowX, stagger, VIEWPORT, EASE } from "@/lib/animations";

const checks = [
  "Full-cycle project management from design to handover",
  "Licensed architects, engineers, and skilled tradespeople",
  "Transparent pricing with no hidden costs",
  "On-time delivery with quality guarantees",
];

const checkItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
              <motion.div
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, ease: EASE }}
                viewport={VIEWPORT}
                className="w-full h-full"
                style={{
                  backgroundImage: "url('/frames/frame_0020.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-dark/10" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.34, 1.3, 0.64, 1] }}
              viewport={VIEWPORT}
              className="absolute -bottom-6 -right-6 bg-accent rounded-2xl p-6 shadow-xl"
            >
              <p className="text-dark font-bold text-4xl leading-none">15+</p>
              <p className="text-dark/70 text-sm mt-1 font-medium">Years Experience</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={stagger(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.div variants={labelReveal}>
              <p className="section-label mb-3">Who We Are</p>
            </motion.div>

            <div style={{ overflow: "hidden" }}>
              <motion.h2
                variants={fadeUp}
                className="text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight mb-2"
              >
                Trusted Local Construction <br />
                <span className="text-dark-mid">Partner in Austin.</span>
              </motion.h2>
            </div>

            <motion.div variants={lineGrowX} className="h-0.5 w-14 bg-accent origin-left mb-6 mt-4" />

            <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-8 text-base">
              With over a decade of excellence, Brikly has been the cornerstone of
              Austin&apos;s most celebrated residential and commercial developments.
              We combine innovative design with unmatched craftsmanship to deliver
              spaces that inspire and endure.
            </motion.p>

            <motion.ul variants={stagger(0.08)} className="space-y-4 mb-10">
              {checks.map((item, i) => (
                <motion.li key={i} variants={checkItem} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-accent rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#0D1F14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.04, x: 4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 bg-dark-mid text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-dark transition-colors duration-200"
              >
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
