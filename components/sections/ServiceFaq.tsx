"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, labelReveal, lineGrowX, stagger, VIEWPORT, EASE } from "@/lib/animations";

const faqs = [
  { q: "How long does a typical residential build take?", a: "A custom home typically takes 8–14 months from groundbreaking to handover, depending on size and complexity. We provide a detailed schedule at the planning stage." },
  { q: "Do you handle permits and approvals?", a: "Yes — completely. We manage all permit applications, council submissions, and inspections on your behalf. You won't need to deal with any government paperwork." },
  { q: "What's included in your project management service?", a: "Full coordination of all trades, daily site supervision, weekly progress reports, budget tracking, and quality control inspections at every milestone." },
  { q: "Can I make changes during construction?", a: "Yes, within reason. We use a formal change-order process that clearly documents scope, cost, and timeline impact before any changes are executed." },
  { q: "Do you offer a warranty on your work?", a: "All our projects come with a minimum 12-month workmanship warranty. Structural elements carry a 7-year warranty as required by Texas law." },
  { q: "How do you handle budget overruns?", a: "We provide a detailed fixed-price contract upfront. Any variations are documented and agreed before execution — you'll never be surprised by an invoice." },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: EASE }}
      viewport={{ once: true }}
      className="border-b border-gray-100 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="text-dark font-semibold text-base leading-snug group-hover:text-dark-mid transition-colors duration-200">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1V11M1 6H11" stroke="#8DC63F" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 text-sm leading-relaxed pr-10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServiceFaq() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.div variants={labelReveal}>
              <p className="section-label mb-3">Got Questions?</p>
            </motion.div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                variants={fadeUp}
                className="text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
            </div>
            <motion.div variants={lineGrowX} className="h-0.5 w-14 bg-accent origin-left mb-6" />
            <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-8">
              Can&apos;t find what you&apos;re looking for? Reach out directly — our team typically responds within a few hours.
            </motion.p>
            <motion.div variants={fadeUp}>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04, x: 4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 bg-dark text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-dark-mid transition-colors duration-200"
              >
                Ask Us Anything
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            viewport={VIEWPORT}
            className="bg-white rounded-2xl px-7 shadow-sm"
          >
            {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} index={i} />)}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
