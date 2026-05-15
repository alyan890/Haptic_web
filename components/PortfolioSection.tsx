"use client";

import { PORTFOLIO } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function PortfolioSection() {
  return (
    <section id="work" className="py-24 px-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
        <h2 className="text-4xl md:text-6xl font-bold font-syne mb-8 md:mb-0">Selected Work</h2>
        <div className="flex items-center space-x-4 text-accent-cyan group cursor-pointer">
          <span className="font-bold tracking-widest uppercase text-sm">View All Projects</span>
          <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO.map((project, index) => (
          <StaggerItem key={index}>
            <div className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] cursor-pointer">
              {/* Image Placeholder */}
              <div 
                className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                style={{ background: project.image }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-accent-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold font-syne mb-6">{project.title}</h3>
                  <div className="flex items-center space-x-2 text-white/80 font-bold uppercase text-xs tracking-widest">
                    <span>View Project</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Tag (Always visible) */}
              <div className="absolute top-6 left-6 px-4 py-2 glass rounded-full text-[10px] font-bold uppercase tracking-widest">
                {project.category}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
