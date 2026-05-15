"use client";

import { PROCESS_STEPS } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "./ScrollReveal";
import { motion } from "framer-motion";

export default function ProcessSection() {
  return (
    <section id="about" className="py-24 px-10 bg-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold font-syne mb-6">Our Creative Process</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We follow a proven methodology to ensure every project is delivered with the highest quality and precision.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-accent-cyan/20 via-accent-violet/20 to-accent-cyan/20 -translate-y-1/2 -z-10" />

          {PROCESS_STEPS.map((step, index) => (
            <StaggerItem key={step.id}>
              <div className={index % 2 === 0 ? "lg:pt-0" : "lg:pt-20"}>
                <div className="glass p-8 rounded-3xl relative group">
                  <div className="absolute -top-10 -left-4 text-7xl font-black font-syne text-accent-cyan/10 group-hover:text-accent-cyan/30 transition-colors pointer-events-none">
                    {step.id}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-accent-cyan flex items-center justify-center text-background font-bold mb-6">
                    {step.id}
                  </div>
                  <h3 className="text-2xl font-bold font-syne mb-4">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
