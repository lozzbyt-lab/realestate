"use client";

import { motion } from "framer-motion";

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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <p className="section-label mb-4">Our Projects</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Built to Last. <br />
              <span className="text-accent">Designed to Inspire.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-dark font-bold px-7 py-3.5 rounded-full text-sm transition-colors duration-200 self-start lg:self-auto whitespace-nowrap"
          >
            View All Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4" style={{ gridTemplateRows: "auto auto" }}>
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-60px" }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                i === 0 ? "row-span-2" : ""
              }`}
              style={{
                backgroundImage: `url('/frames/${p.frame}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: i === 0 ? "480px" : "220px",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/70 group-hover:to-dark/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-1">{p.category}</p>
                  <p className="text-white font-bold text-lg leading-tight">{p.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
