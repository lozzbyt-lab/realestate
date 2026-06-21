"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We start with a free consultation to understand your vision, goals, budget, and timeline. No pressure, just an open conversation.",
  },
  {
    num: "02",
    title: "Design & Planning",
    desc: "Our architects and engineers produce detailed plans, 3D renders, and a transparent cost breakdown before any work begins.",
  },
  {
    num: "03",
    title: "Permits & Approvals",
    desc: "We handle all permit applications, council submissions, and regulatory approvals — saving you weeks of back-and-forth.",
  },
  {
    num: "04",
    title: "Construction",
    desc: "Our on-site team executes with precision. You get a dedicated project manager and live progress updates throughout the build.",
  },
  {
    num: "05",
    title: "Quality Inspection",
    desc: "Before handover, every inch of your project is independently inspected against our quality checklist and your original brief.",
  },
  {
    num: "06",
    title: "Handover & Support",
    desc: "We walk you through every system in your new space and provide 12-month aftercare for any punch-list items.",
  },
];

export default function ServiceProcess() {
  return (
    <section className="bg-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="section-label mb-4">How We Work</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            Our Simple 6-Step Process
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto text-base">
            From first call to final handover — a clear, transparent process that keeps you in control.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-dark-mid rounded-2xl p-7 border border-white/5 hover:border-accent/25 transition-colors duration-300 group"
            >
              <span className="text-accent font-bold text-4xl leading-none block mb-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {step.num}
              </span>
              <h3 className="text-white font-bold text-lg mb-3 tracking-tight">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
