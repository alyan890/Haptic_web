"use client";

import { TECHNOLOGIES } from "@/lib/constants";
import { motion } from "framer-motion";

export default function TechSection() {
  return (
    <section className="py-24 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-10 mb-16">
        <h2 className="text-3xl font-bold font-syne text-center uppercase tracking-widest opacity-40">
          Technologies We Use
        </h2>
      </div>

      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex items-center space-x-12 px-6"
        >
          {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
            <div 
              key={index}
              className="px-8 py-4 glass rounded-2xl text-xl font-bold font-syne text-white/60 hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
