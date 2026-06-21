"use client";

import { motion } from "framer-motion";
import { cardReveal, labelReveal, lineGrowX, stagger, VIEWPORT, EASE } from "@/lib/animations";

const steps = [
  { num: "01", title: "Consultation", desc: "We start with a free consultation to understand your vision, goals, budget, and timeline. No pressure, just an open conversation." },
  { num: "02", title: "Design & Planning", desc: "Our architects and engineers produce detailed plans, 3D renders, and a transparent cost breakdown before any work begins." },
  { num: "03", title: "Permits & Approvals", desc: "We handle all permit applications, council submissions, and regulatory approvals — saving you weeks of back-and-forth." },
  { num: "04", title: "Construction", desc: "Our on-site team executes with precision. You get a dedicated project manager and live progress updates throughout the build." },
  { num: "05", title: "Quality Inspection", desc: "Before handover, every inch of your project is independently inspected against our quality checklist and your original brief." },
  { num: "06", title: "Handover & Support", desc: "We walk you through every system in your new space and provide 12-month aftercare for any punch-list items." },
];

const numVariant = {
  hidden: { opacity: 0, scale: 0.5, y: 10 },
  show: { opacity: 0.6, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
};

export default function ServiceProcess() {
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
            <p className="section-label mb-3">How We Work</p>
          </motion.div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } } }}
              className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
            >
              Our Simple 6-Step Process
            </motion.h2>
          </div>
          <motion.div variants={lineGrowX} className="h-0.5 w-14 bg-accent mx-auto origin-left mt-5 mb-4" />
          <motion.p
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.7 } } }}
            className="text-white/40 max-w-lg mx-auto text-base"
          >
            From first call to final handover — a clear, transparent process that keeps you in control.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={cardReveal}
              whileHover={{ y: -6, borderColor: "rgba(141,198,63,0.3)", transition: { duration: 0.25 } }}
              className="bg-dark-mid rounded-2xl p-7 border border-white/5 transition-colors duration-300 group cursor-default"
            >
              <motion.span
                variants={numVariant}
                whileHover={{ opacity: 1 }}
                className="text-accent font-bold text-4xl leading-none block mb-5 transition-opacity duration-300"
              >
                {step.num}
              </motion.span>
              <h3 className="text-white font-bold text-lg mb-3 tracking-tight">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
