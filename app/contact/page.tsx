"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Facebook, ChevronDown } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function ContactPage() {
  return (
    <div className="pt-32">
      <section className="px-10 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Info */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold font-syne mb-12 leading-tight"
            >
              Let&apos;s Work <br />
              <span className="text-accent-cyan text-stroke">Together</span>
            </motion.h1>
            
            <p className="text-xl text-white/60 mb-16 max-w-md">
              Have a project in mind? We&apos;d love to hear from you. Get in touch and let&apos;s build something extraordinary.
            </p>

            <div className="space-y-12">
              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-background transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-bold">contact@hapticwebdesigns.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-background transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-bold">+1 (813) 214-3224</p>
                </div>
              </div>

             
            </div>

            <div className="mt-20 flex space-x-6">
              <a
                href="https://www.facebook.com/share/1Fwqe2GjwR/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-10 md:p-16 rounded-[3rem] relative"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-2">Project Type</label>
                  <div className="relative">
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-12 outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all appearance-none">
                      <option className="bg-background">Web Development</option>
                      <option className="bg-background">UI/UX Design</option>
                      <option className="bg-background">E-Commerce</option>
                      <option className="bg-background">Branding</option>
                      <option className="bg-background">Other</option>
                    </select>
                    <ChevronDown size={18} className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-2">Budget Range</label>
                  <div className="relative">
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-12 outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all appearance-none">
                      <option className="bg-background">Less than $5k</option>
                      <option className="bg-background">$5k - $10k</option>
                      <option className="bg-background">$10k - $25k</option>
                      <option className="bg-background">$25k - $50k</option>
                      <option className="bg-background">$50k+</option>
                    </select>
                    <ChevronDown size={18} className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/50" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-2">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all resize-none"
                />
              </div>

              <MagneticButton className="w-full py-6 text-xl">
                Send Message
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
