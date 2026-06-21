"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "10", suffix: "Yrs.", label: "Industry Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Expert Team Members" },
];

export default function Stats() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="section-label mb-4">Our Track Record</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight mb-6">
              Backed by Results, <br />
              Built on Relationships.
            </h2>
            <p className="text-gray-500 leading-relaxed text-base">
              Every number behind our name represents a family whose dream became
              reality, a business whose vision came to life, or a community that
              grew stronger because of what we built together.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-white rounded-2xl p-7"
              >
                <p className="text-dark font-bold text-5xl tracking-tight leading-none mb-2">
                  {s.value}
                  {s.suffix && (
                    <span className="text-accent text-3xl ml-1">{s.suffix}</span>
                  )}
                </p>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
