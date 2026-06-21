"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import CtaBanner from "@/components/sections/CtaBanner";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

interface WebsiteProps {
  visible: boolean;
}

export default function Website({ visible }: WebsiteProps) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
    >
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <CtaBanner />
      <Testimonials />
      <Stats />
      <WhyUs />
      <FinalCta />
      <Footer />
    </motion.div>
  );
}
