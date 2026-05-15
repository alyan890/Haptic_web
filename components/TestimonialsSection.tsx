"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { Quote } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-10 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold font-syne mb-6">Client Stories</h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Hear from the brands we&apos;ve helped transform and grow in the digital landscape.
        </p>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <StaggerItem key={index}>
            <div className="glass p-10 rounded-[2.5rem] h-full flex flex-col relative group">
              <Quote className="absolute top-8 right-8 text-accent-cyan/20 group-hover:text-accent-cyan/40 transition-colors" size={40} />
              
              <div className="flex-grow">
                <p className="text-xl text-white/80 italic leading-relaxed mb-8">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-accent-cyan to-accent-violet shrink-0" />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white/40">{testimonial.company}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
