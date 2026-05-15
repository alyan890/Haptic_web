"use client";

import { SERVICES } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "./ScrollReveal";
import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-syne mb-8"
          >
            Digital Excellence <br />
            <span className="text-accent-cyan">Tailored for You</span>
          </motion.h2>
          <p className="text-white/60 text-lg">
            We offer a comprehensive suite of digital services designed to elevate your brand and drive meaningful results in the digital space.
          </p>
        </div>
        <div className="text-white/20 text-8xl md:text-9xl font-syne font-black opacity-10 select-none hidden lg:block">
          SERVICES
        </div>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <StaggerItem key={service.id}>
            <div className="glass group h-full p-10 rounded-3xl transition-all duration-500 hover:translate-y-[-10px] hover:border-accent-cyan/30 hover:shadow-[0_20px_40px_rgba(0,245,255,0.05)] flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-8 transition-all duration-500 group-hover:bg-accent-cyan group-hover:text-background">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold font-syne mb-4">{service.title}</h3>
              <p className="text-white/60 mb-8 flex-grow">{service.description}</p>
              <div className="flex items-center text-accent-cyan font-bold tracking-widest text-xs uppercase group-hover:gap-2 transition-all">
                Learn More <span>→</span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
