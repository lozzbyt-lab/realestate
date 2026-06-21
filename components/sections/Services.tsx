"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Construction",
    desc: "Custom homes built to the highest standards. From luxury estates to modern urban dwellings, we bring your vision to life.",
    frame: "frame_0010.jpeg",
    icon: "🏠",
  },
  {
    title: "Commercial Buildings",
    desc: "Office complexes, retail spaces, and mixed-use developments designed for performance, prestige, and longevity.",
    frame: "frame_0018.jpeg",
    icon: "🏢",
  },
  {
    title: "Renovation & Remodeling",
    desc: "Transform existing spaces into something extraordinary. We handle everything from interior updates to full structural overhauls.",
    frame: "frame_0028.jpeg",
    icon: "🔨",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="section-label mb-4">What We Do</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight">
            Our Full-Spectrum <br />Construction Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-white rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="h-56 relative overflow-hidden"
                style={{
                  backgroundImage: `url('/frames/${svc.frame}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/10 transition-colors duration-500" />
              </div>

              <div className="p-7">
                <h3 className="text-dark font-bold text-xl mb-3 tracking-tight">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{svc.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-dark-mid font-semibold text-sm hover:text-accent transition-colors duration-200"
                >
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
