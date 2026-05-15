"use client";

import { PORTFOLIO } from "@/lib/constants";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function PortfolioSection() {
  return (
    <section id="work" className="py-24 px-10 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-bold font-syne mb-8 md:mb-0">Selected Work</h2>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO.map((project, index) => (
          <StaggerItem key={index}>
            {(() => {
              const isEcommerce = project.category === "E-Commerce";

              return (
            <div className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] cursor-default">
              {/* Photo Background */}
              <div 
                className="w-full h-full transition-transform duration-700 group-hover:scale-110 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundPosition: project.imagePosition ?? "center center",
                }}
              />

              {/* Background Overlay */}
              <div
                className={
                  isEcommerce
                    ? "absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20 pointer-events-none"
                    : "absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10 pointer-events-none"
                }
              />
              
              {/* Overlay */}
              <div
                className={
                  isEcommerce
                    ? "absolute inset-0 bg-black/35 flex flex-col justify-end p-10"
                    : "absolute inset-0 bg-black/20 flex flex-col justify-end p-10"
                }
              >
                <div>
                  <span className="text-accent-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold font-syne mb-6">{project.title}</h3>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 text-white/80 font-bold uppercase text-xs tracking-widest transition-colors duration-300 group-hover:text-accent-cyan cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Tag (Always visible) */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-accent-cyan bg-accent-cyan/15 border border-accent-cyan/30 backdrop-blur-md">
                {project.category}
              </div>
            </div>
              );
            })()}
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
