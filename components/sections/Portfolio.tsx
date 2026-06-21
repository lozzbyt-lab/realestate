"use client";

import { motion } from "framer-motion";
import { fadeUp, cardReveal, labelReveal, lineGrowX, stagger, VIEWPORT, EASE } from "@/lib/animations";

const projects = [
  { frame: "frame_0005.jpeg", label: "Skyline Residences", category: "Residential" },
  { frame: "frame_0012.jpeg", label: "Aurora Commercial Hub", category: "Commercial" },
  { frame: "frame_0022.jpeg", label: "Lakefront Villas", category: "Residential" },
  { frame: "frame_0030.jpeg", label: "The Meridian Tower", category: "Commercial" },
];

export default function Portfolio() {
  return (
    <section className="bg-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <div>
            <motion.div variants={labelReveal}>
              <p className="section-label mb-3">Our Projects</p>
            </motion.div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                variants={fadeUp}
                className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              >
                Built to Last. <br />
                <span className="text-accent">Designed to Inspire.</span>
              </motion.h2>
            </div>
            <motion.div variants={lineGrowX} className="h-0.5 w-14 bg-accent origin-left mt-5" />
          </div>

          <motion.div variants={fadeUp}>
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.04, x: 4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-dark font-bold px-7 py-3.5 rounded-full text-sm transition-colors duration-200 self-start lg:self-auto whitespace-nowrap"
            >
              View All Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4"
          style={{ gridTemplateRows: "auto auto" }}
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={cardReveal}
              whileHover="hover"
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${i === 0 ? "row-span-2" : ""}`}
              style={{ minHeight: i === 0 ? "480px" : "220px" }}
            >
              <motion.div
                variants={{ hover: { scale: 1.06 } }}
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('/frames/${p.frame}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/70 group-hover:to-dark/40 transition-colors duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <motion.div
                  initial={{ y: 8, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.28 }}
                >
                  <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-1">{p.category}</p>
                  <p className="text-white font-bold text-lg leading-tight">{p.label}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
