"use client";

import { motion } from "framer-motion";
import { fadeUp, labelReveal, stagger, VIEWPORT } from "@/lib/animations";

export default function FinalCta() {
  return (
    <section id="contact" className="bg-accent py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.div variants={labelReveal}>
              <p className="text-dark/60 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Ready to Build?
              </p>
            </motion.div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                variants={fadeUp}
                className="text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight"
              >
                From Idea to Reality, <br />Let&apos;s Begin.
              </motion.h2>
            </div>
          </motion.div>

          <motion.div
            variants={stagger(0.1, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="flex flex-col gap-4"
          >
            <motion.p variants={fadeUp} className="text-dark/70 leading-relaxed">
              Tell us about your project and we&apos;ll connect you with the right team.
              Whether it&apos;s a custom home, commercial space, or renovation — we&apos;re ready.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.a
                href="tel:+15121234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="bg-dark text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-dark-mid transition-colors duration-200"
              >
                Call Us Today
              </motion.a>
              <motion.a
                href="mailto:hello@brikly.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="border-2 border-dark text-dark font-bold px-7 py-3.5 rounded-full text-sm hover:bg-dark/5 transition-colors duration-200"
              >
                Email Us
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
