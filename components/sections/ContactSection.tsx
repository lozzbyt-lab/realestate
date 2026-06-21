"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const offices = [
  { city: "Austin — HQ", address: "1234 Construction Ave, Austin TX 78701", phone: "+1 (512) 123-4567", email: "hello@brikly.com" },
  { city: "Round Rock", address: "89 Commerce Blvd, Round Rock TX 78664", phone: "+1 (512) 234-5678", email: "roundrock@brikly.com" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors duration-200";

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
              className="section-label mb-3"
            >Send a Message</motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="h-0.5 w-14 bg-accent origin-left mb-5"
            />
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-dark tracking-tight mb-8"
              >
                Tell Us About Your Project
              </motion.h2>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-accent/10 border border-accent/30 rounded-2xl p-10 text-center"
              >
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
                    <path d="M1 9L8 16L21 1" stroke="#0D1F14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-dark font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">We&apos;ll be in touch within one business day.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" className={inputClass} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (512) 000-0000" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Service Needed</label>
                    <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
                      <option value="">Select a service…</option>
                      <option>Residential Construction</option>
                      <option>Commercial Buildings</option>
                      <option>Renovation & Remodeling</option>
                      <option>Design & Consulting</option>
                      <option>Project Management</option>
                      <option>Green & Sustainable Builds</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your project, timeline, and any specific requirements…"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="w-full bg-dark hover:bg-dark-mid text-white font-bold py-4 rounded-xl text-sm transition-colors duration-200 mt-2"
                >
                  Send Message →
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="section-label mb-4">Our Offices</p>
              <div className="space-y-5">
                {offices.map((o, i) => (
                  <div key={i} className="bg-cream rounded-2xl p-6">
                    <p className="text-dark font-bold text-base mb-3">{o.city}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <p className="flex items-start gap-2.5">
                        <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1C4.79 1 3 2.79 3 5c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4z" stroke="#8DC63F" strokeWidth="1.2"/></svg>
                        {o.address}
                      </p>
                      <p className="flex items-center gap-2.5">
                        <svg className="flex-shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M13 10.5v2a1 1 0 01-1.09 1A9.99 9.99 0 011 2.09 1 1 0 012 1h2a1 1 0 011 .75c.128.61.327 1.2.6 1.76a1 1 0 01-.26 1.06L4.09 5.85a8 8 0 004.06 4.06l1.28-1.27a1 1 0 011.07-.24c.56.27 1.15.47 1.75.6.44.09.75.48.75.91z" stroke="#8DC63F" strokeWidth="1.2"/></svg>
                        {o.phone}
                      </p>
                      <p className="flex items-center gap-2.5">
                        <svg className="flex-shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="2.5" width="12" height="9" rx="1" stroke="#8DC63F" strokeWidth="1.2"/><path d="M1 4l6 4 6-4" stroke="#8DC63F" strokeWidth="1.2"/></svg>
                        {o.email}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark rounded-2xl p-6">
              <p className="text-white font-bold text-base mb-2">Working Hours</p>
              <div className="space-y-2 text-sm text-white/50">
                <div className="flex justify-between"><span>Monday – Friday</span><span className="text-white/80">7:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="text-white/80">8:00 AM – 2:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-white/80">Closed</span></div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
              <p className="text-dark font-bold text-sm mb-1">Emergency Line</p>
              <p className="text-gray-500 text-xs mb-3">For active project emergencies only.</p>
              <a href="tel:+15129991234" className="text-dark font-bold text-xl hover:text-dark-mid transition-colors">
                +1 (512) 999-1234
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
