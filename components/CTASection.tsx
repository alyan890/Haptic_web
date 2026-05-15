"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 px-10">
      <div className="max-w-7xl mx-auto glass-dark border border-white/10 rounded-[4rem] overflow-hidden relative">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/10 blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-violet/10 blur-[100px] -z-10" />

        <div className="py-24 px-10 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold font-syne mb-10 leading-tight tracking-tighter"
          >
            Ready to Build <br />
            <span className="bg-gradient-to-r from-accent-cyan to-accent-violet bg-clip-text text-transparent">
              Something Great?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-16"
          >
            Let&apos;s collaborate to turn your vision into a reality. Whether you have a specific project in mind or just want to explore possibilities, we&apos;re here to help.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <MagneticButton className="text-xl px-12 py-6">Start Your Project</MagneticButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
