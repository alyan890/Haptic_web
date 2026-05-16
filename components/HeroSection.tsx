"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import MagneticButton from "./MagneticButton";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import DottedWaves from "./DottedWaves";

const words = ["Websites", "Apps", "Platforms", "Products"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1000); // Change word every 1 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-10 pt-20">
      <DottedWaves />
      {/* Background Orbs */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px] -z-10"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-violet/20 rounded-full blur-[120px] -z-10"
      />

      <div className="text-center max-w-5xl z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-bold font-syne leading-tight tracking-tighter mb-8"
        >
          We Build Digital <br />
          <span className="relative inline-block text-accent-cyan min-w-[300px] md:min-w-[450px]">
            <motion.span
              key={words[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {words[index]}
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12"
        >
          An award-winning digital agency specialized in creating high-performance websites and immersive experiences for global brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center"
        >
          <Link href="/#work">
            <MagneticButton>View Our Work</MagneticButton>
          </Link>
          <Link href="/contact">
            <MagneticButton variant="ghost">Let&apos;s Talk</MagneticButton>
          </Link>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
