"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";
import { fadeUp, cardReveal, labelReveal, lineGrowX, stagger, VIEWPORT } from "@/lib/animations";

const stats = [
  { to: 100, suffix: "+", label: "Projects Completed" },
  { to: 10, suffix: "", extra: "Yrs.", label: "Industry Experience" },
  { to: 98, suffix: "%", label: "Client Satisfaction" },
  { to: 40, suffix: "+", label: "Expert Team Members" },
];

export default function Stats() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.div variants={labelReveal}>
              <p className="section-label mb-3">Our Track Record</p>
            </motion.div>

            <div style={{ overflow: "hidden" }}>
              <motion.h2
                variants={fadeUp}
                className="text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight mb-4"
              >
                Backed by Results, <br />
                Built on Relationships.
              </motion.h2>
            </div>

            <motion.div variants={lineGrowX} className="h-0.5 w-14 bg-accent origin-left mb-6" />

            <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed text-base">
              Every number behind our name represents a family whose dream became
              reality, a business whose vision came to life, or a community that
              grew stronger because of what we built together.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-5"
            variants={stagger(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-white rounded-2xl p-7 cursor-default"
              >
                <p className="text-dark font-bold text-5xl tracking-tight leading-none mb-2">
                  <CountUp to={s.to} suffix={s.suffix} />
                  {s.extra && (
                    <span className="text-accent text-3xl ml-1">{s.extra}</span>
                  )}
                </p>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
