"use client";

import { motion } from "framer-motion";

export default function FinalCta() {
  return (
    <section id="contact" className="bg-accent py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <p className="text-dark/60 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Ready to Build?
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight">
              From Idea to Reality, <br />Let&apos;s Begin.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <p className="text-dark/70 leading-relaxed">
              Tell us about your project and we&apos;ll connect you with the right team.
              Whether it&apos;s a custom home, commercial space, or renovation — we&apos;re ready.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+15121234567"
                className="bg-dark text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-dark-mid transition-colors duration-200"
              >
                Call Us Today
              </a>
              <a
                href="mailto:hello@brikly.com"
                className="border-2 border-dark text-dark font-bold px-7 py-3.5 rounded-full text-sm hover:bg-dark/5 transition-colors duration-200"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
