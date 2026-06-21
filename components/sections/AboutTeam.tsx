"use client";

import { motion } from "framer-motion";
import { cardReveal, labelReveal, lineGrowX, stagger, VIEWPORT } from "@/lib/animations";

const team = [
  { name: "Marcus Reid", role: "Founder & CEO", initials: "MR", color: "#1A3527" },
  { name: "Sophia Chen", role: "Lead Architect", initials: "SC", color: "#2d5a3d" },
  { name: "James Okafor", role: "Project Director", initials: "JO", color: "#1A3527" },
  { name: "Priya Nair", role: "Interior Design Lead", initials: "PN", color: "#2d5a3d" },
  { name: "Tyler Brooks", role: "Head of Engineering", initials: "TB", color: "#1A3527" },
  { name: "Ana Morales", role: "Client Relations", initials: "AM", color: "#2d5a3d" },
];

export default function AboutTeam() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          className="text-center mb-16"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.div variants={labelReveal}>
            <p className="section-label mb-3">The People</p>
          </motion.div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } }}
              className="text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight"
            >
              Meet the Team
            </motion.h2>
          </div>
          <motion.div variants={lineGrowX} className="h-0.5 w-14 bg-accent mx-auto origin-left mt-5 mb-4" />
          <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.7 } } }} className="text-gray-500 max-w-xl mx-auto">
            Our people are our greatest asset — experienced professionals united by a passion for excellence.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={cardReveal}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.25 } }}
              className="group bg-cream rounded-2xl p-7 flex items-center gap-5 cursor-default"
            >
              <motion.div
                whileHover={{ rotate: [0, -4, 4, 0] }}
                transition={{ duration: 0.4 }}
                className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: member.color }}
              >
                <span className="text-accent font-bold text-lg">{member.initials}</span>
              </motion.div>
              <div>
                <p className="text-dark font-bold text-base">{member.name}</p>
                <p className="text-gray-400 text-sm mt-0.5">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
