"use client";

import { motion } from "framer-motion";
import { fadeUp, cardReveal, labelReveal, lineGrowX, stagger, VIEWPORT, EASE } from "@/lib/animations";

const services = [
  {
    title: "Residential Construction",
    desc: "Custom homes built to the highest standards. From luxury estates to modern urban dwellings, we bring your vision to life.",
    frame: "frame_0010.jpeg",
  },
  {
    title: "Commercial Buildings",
    desc: "Office complexes, retail spaces, and mixed-use developments designed for performance, prestige, and longevity.",
    frame: "frame_0018.jpeg",
  },
  {
    title: "Renovation & Remodeling",
    desc: "Transform existing spaces into something extraordinary. We handle everything from interior updates to full structural overhauls.",
    frame: "frame_0028.jpeg",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          className="text-center mb-16"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.div variants={labelReveal}>
            <p className="section-label mb-3">What We Do</p>
          </motion.div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight"
            >
              Our Full-Spectrum <br />Construction Services
            </motion.h2>
          </div>
          <motion.div variants={lineGrowX} className="h-0.5 w-14 bg-accent mx-auto origin-left mt-5" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {services.map((svc, i) => (
            <motion.div
              key={i}
              variants={cardReveal}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-56 relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('/frames/${svc.frame}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/10 transition-colors duration-500 pointer-events-none" />
              </div>

              <div className="p-7">
                <h3 className="text-dark font-bold text-xl mb-3 tracking-tight">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{svc.desc}</p>
                <motion.a
                  href="#contact"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-1.5 text-dark-mid font-semibold text-sm hover:text-accent transition-colors duration-200"
                >
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
