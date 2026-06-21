"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Residential", "Commercial", "Renovation"];

const projects = [
  { frame: "frame_0003.jpeg", title: "Skyline Residences", cat: "Residential", loc: "East Austin", year: "2024" },
  { frame: "frame_0006.jpeg", title: "Aurora Business Park", cat: "Commercial", loc: "Downtown", year: "2024" },
  { frame: "frame_0009.jpeg", title: "Lakefront Villa", cat: "Residential", loc: "Lake Travis", year: "2023" },
  { frame: "frame_0011.jpeg", title: "The Meridian Tower", cat: "Commercial", loc: "CBD", year: "2023" },
  { frame: "frame_0013.jpeg", title: "Crestwood Kitchen Reno", cat: "Renovation", loc: "Westlake Hills", year: "2023" },
  { frame: "frame_0015.jpeg", title: "Riverside Apartments", cat: "Residential", loc: "South Congress", year: "2022" },
  { frame: "frame_0017.jpeg", title: "Tech Campus HQ", cat: "Commercial", loc: "Domain", year: "2022" },
  { frame: "frame_0019.jpeg", title: "Heritage Home Restore", cat: "Renovation", loc: "Hyde Park", year: "2022" },
  { frame: "frame_0021.jpeg", title: "Cedar Ridge Estates", cat: "Residential", loc: "Dripping Springs", year: "2021" },
  { frame: "frame_0023.jpeg", title: "Flex Office Suites", cat: "Commercial", loc: "Mueller", year: "2021" },
  { frame: "frame_0025.jpeg", title: "Barton Creek Remodel", cat: "Renovation", loc: "Barton Creek", year: "2021" },
  { frame: "frame_0027.jpeg", title: "Vista Verde Homes", cat: "Residential", loc: "Bee Cave", year: "2020" },
];

export default function ProjectsGallery() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter(p => p.cat === active);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? "bg-dark text-white"
                  : "bg-cream text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group rounded-2xl overflow-hidden bg-cream"
              >
                <div
                  className="h-56 relative overflow-hidden"
                  style={{
                    backgroundImage: `url('/frames/${p.frame}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/10 transition-colors duration-400" />
                  <span className="absolute top-4 left-4 bg-dark-mid/80 backdrop-blur-sm text-accent text-xs font-semibold px-3 py-1 rounded-full">
                    {p.cat}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-dark font-bold text-base">{p.title}</h3>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-gray-400 text-xs">{p.loc}</span>
                    <span className="text-gray-300 text-xs">{p.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
