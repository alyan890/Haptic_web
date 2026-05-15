"use client";

import { motion } from "framer-motion";

const items = [
  "Web Design",
  "Development",
  "UI/UX",
  "Branding",
  "SEO",
  "E-Commerce",
  "Web Apps",
  "Motion Design",
];

export default function MarqueeStrip() {
  return (
    <div className="py-12 bg-accent-cyan/5 border-y border-white/5 overflow-hidden whitespace-nowrap flex group">
      <motion.div
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="flex items-center space-x-12 px-6 shrink-0"
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center space-x-12 shrink-0">
            <span className="text-2xl md:text-4xl font-syne font-bold uppercase tracking-tighter text-white/80">
              {item}
            </span>
            <span className="w-3 h-3 rounded-full bg-accent-cyan" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
