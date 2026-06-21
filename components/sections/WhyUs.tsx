"use client";

import { motion } from "framer-motion";
import { fadeUp, cardReveal, labelReveal, lineGrowX, stagger, VIEWPORT } from "@/lib/animations";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Local Expertise",
    desc: "Deep roots in Austin's construction landscape, understanding local codes, climate, and community standards.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "The Team",
    desc: "Hand-picked professionals — architects, engineers, and craftspeople — united by a passion for excellence.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Smart Designs",
    desc: "Innovation-led design thinking that blends beauty with functionality and long-term structural integrity.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: "Client Focus",
    desc: "You're a partner, not just a project. We listen deeply and communicate at every step of the build.",
  },
];

const iconVariant = {
  hidden: { scale: 0.5, opacity: 0, rotate: -10 },
  show: { scale: 1, opacity: 1, rotate: 0, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
};

export default function WhyUs() {
  return (
    <section className="bg-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          className="text-center mb-16"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.div variants={labelReveal}>
            <p className="section-label mb-3">Why Choose Us</p>
          </motion.div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
            >
              What Sets Us Apart
            </motion.h2>
          </div>
          <motion.div variants={lineGrowX} className="h-0.5 w-14 bg-accent mx-auto origin-left mt-5" />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={cardReveal}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
              className="bg-dark-mid rounded-2xl p-7 border border-white/5 hover:border-accent/30 transition-colors duration-300 group cursor-default"
            >
              <motion.div
                variants={iconVariant}
                className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 text-accent group-hover:bg-accent/20 transition-colors duration-300"
              >
                {f.icon}
              </motion.div>
              <h3 className="text-white font-bold text-lg mb-3 tracking-tight">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
