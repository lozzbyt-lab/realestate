"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "2009", title: "Founded in Austin", desc: "Started with a 3-person team and a single residential project in East Austin." },
  { year: "2013", title: "Commercial Expansion", desc: "Landed our first major commercial contract — the 24,000 sq ft Meridian Office Park." },
  { year: "2016", title: "ISO Certification", desc: "Achieved ISO 9001 quality management certification, setting us apart from competitors." },
  { year: "2019", title: "50th Project Milestone", desc: "Celebrated delivering 50 completed projects across residential, commercial, and renovation." },
  { year: "2022", title: "Regional Recognition", desc: "Named Austin's Best Construction Company by Austin Business Journal for two consecutive years." },
  { year: "2024", title: "100+ Projects Delivered", desc: "Crossed the 100-project mark with an industry-leading 98% client satisfaction rate." },
];

export default function AboutTimeline() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Our Journey</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight">
            15 Years in the Making
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gray-200 lg:-translate-x-px" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.05 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true, margin: "-60px" }}
                className={`relative flex items-start gap-8 lg:gap-0 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 lg:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1 lg:-translate-x-1.5 mt-1.5 z-10 flex-shrink-0" />

                {/* Content */}
                <div className={`pl-14 lg:pl-0 lg:w-[calc(50%-3rem)] ${i % 2 === 0 ? "lg:pr-14 lg:text-right" : "lg:pl-14"}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <span className="text-accent font-bold text-sm tracking-wider">{m.year}</span>
                    <h3 className="text-dark font-bold text-lg mt-1 mb-2">{m.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
