"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Derek Adams",
    role: "Residential Client",
    stars: 5,
    text: "Brikly exceeded every expectation. Our custom home was delivered on time, on budget, and beyond what we imagined. The team's attention to detail is unparalleled.",
    initials: "DA",
  },
  {
    name: "Linda Hart",
    role: "Commercial Developer",
    stars: 5,
    text: "We've worked with many contractors over the years. Brikly stands apart — professional, communicative, and they truly care about the finished product.",
    initials: "LH",
  },
  {
    name: "Mark Johnson",
    role: "Renovation Client",
    stars: 5,
    text: "Our kitchen and bathroom remodel transformed our home completely. The craftsmanship is extraordinary and the team was a pleasure to work with.",
    initials: "MJ",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#8DC63F">
          <path d="M7 1L8.6 5.3H13L9.5 7.9L10.8 12.2L7 9.5L3.2 12.2L4.5 7.9L1 5.3H5.4L7 1Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Client Stories</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-cream rounded-2xl p-7 flex flex-col gap-5"
            >
              <Stars count={r.stars} />
              <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-dark-mid flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-xs font-bold">{r.initials}</span>
                </div>
                <div>
                  <p className="text-dark font-semibold text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
