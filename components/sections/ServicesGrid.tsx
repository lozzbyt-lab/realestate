"use client";

import { motion } from "framer-motion";
import { cardReveal, labelReveal, lineGrowX, stagger, VIEWPORT, EASE } from "@/lib/animations";

const services = [
  {
    frame: "frame_0004.jpeg",
    title: "Residential Construction",
    desc: "Custom homes built to the highest standards. We handle everything from architectural planning to final finishing — delivering spaces that feel like home from day one.",
    features: ["Custom home design", "Luxury fit-out", "Smart home integration", "Landscape planning"],
  },
  {
    frame: "frame_0010.jpeg",
    title: "Commercial Buildings",
    desc: "Office complexes, retail centers, and mixed-use developments designed for productivity, brand presence, and long-term value.",
    features: ["Office fit-outs", "Retail spaces", "Warehousing & industrial", "Mixed-use development"],
  },
  {
    frame: "frame_0018.jpeg",
    title: "Renovation & Remodeling",
    desc: "Transform any space — kitchen, bathroom, entire floor, or full structural overhaul. We renovate with precision and minimal disruption to your daily life.",
    features: ["Kitchen & bathroom remodels", "Full-home renovations", "Structural modifications", "Historic restorations"],
  },
  {
    frame: "frame_0024.jpeg",
    title: "Design & Consulting",
    desc: "Not ready to build yet? Our design and consulting team can help you plan, budget, and visualize your project before a single brick is laid.",
    features: ["Feasibility studies", "Cost estimation", "Architectural drafting", "Permit assistance"],
  },
  {
    frame: "frame_0028.jpeg",
    title: "Project Management",
    desc: "Already have a team? Bring us in as your dedicated project manager. We coordinate subcontractors, timelines, and quality control so you don't have to.",
    features: ["Subcontractor coordination", "Timeline management", "Budget oversight", "Quality assurance"],
  },
  {
    frame: "frame_0032.jpeg",
    title: "Green & Sustainable Builds",
    desc: "Future-ready construction that meets LEED standards, reduces energy use, and keeps your environmental footprint as small as possible.",
    features: ["LEED certification support", "Solar-ready builds", "Eco-friendly materials", "Energy audits"],
  },
];

const featureItem = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {services.map((svc, i) => (
            <motion.div
              key={i}
              variants={cardReveal}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-cream rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-default"
            >
              <div className="h-52 relative overflow-hidden flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.55, ease: EASE }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('/frames/${svc.frame}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/15 transition-colors duration-500 pointer-events-none" />
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-dark font-bold text-xl mb-3 tracking-tight">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{svc.desc}</p>
                <motion.ul
                  className="space-y-2"
                  variants={stagger(0.06)}
                >
                  {svc.features.map((f, j) => (
                    <motion.li key={j} variants={featureItem} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                          <path d="M1 3.5L3 5.5L7 1" stroke="#8DC63F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {f}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
