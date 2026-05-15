"use client";

import { SERVICES, FAQS } from "@/lib/constants";
import { motion } from "framer-motion";
import { Plus, Minus, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <h4 className="text-xl md:text-2xl font-bold font-syne group-hover:text-accent-cyan transition-colors">
          {question}
        </h4>
        <div className="w-10 h-10 rounded-full glass flex items-center justify-center shrink-0 ml-4 group-hover:bg-accent-cyan group-hover:text-background transition-all">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-8 text-white/60 text-lg leading-relaxed max-w-3xl">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="px-10 pb-24 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-bold font-syne mb-12"
        >
          Our <br />
          <span className="text-accent-cyan">Services</span>
        </motion.h1>
        <p className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed">
          We combine creative excellence with technical precision to deliver digital solutions that drive real business impact.
        </p>
      </section>

      {/* Services Breakdown */}
      <section className="px-10 py-24 bg-white/5">
        <div className="max-w-7xl mx-auto space-y-32">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="w-20 h-20 rounded-3xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-8">
                  <service.icon size={40} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-syne mb-8">{service.title}</h2>
                <p className="text-white/60 text-xl leading-relaxed mb-12">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle2 className="text-accent-cyan shrink-0" size={20} />
                      <span className="text-white/80 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full aspect-square glass rounded-[3rem] relative overflow-hidden group">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundPosition: service.imagePosition ?? "center center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/45 to-black/75" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <service.icon size={120} className="text-white/15 group-hover:text-accent-cyan/40 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-10 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-syne mb-8 leading-tight">
              Frequently <br /> Asked <br /> Questions
            </h2>
            <p className="text-white/60">
              Everything you need to know about our process and how we work.
            </p>
          </div>
          <div className="lg:col-span-2">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
