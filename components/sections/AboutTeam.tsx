"use client";

import { motion } from "framer-motion";

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
        <div className="text-center mb-16">
          <p className="section-label mb-4">The People</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight">
            Meet the Team
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Our people are our greatest asset — experienced professionals united by a passion for excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="group bg-cream rounded-2xl p-7 flex items-center gap-5 hover:shadow-md transition-shadow duration-300"
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: member.color }}
              >
                <span className="text-accent font-bold text-lg">{member.initials}</span>
              </div>
              <div>
                <p className="text-dark font-bold text-base">{member.name}</p>
                <p className="text-gray-400 text-sm mt-0.5">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
