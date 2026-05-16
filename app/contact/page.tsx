"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Facebook, ChevronDown, Loader2, CheckCircle2 } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzybDD7w7LSJ7KBiDj72bC5vq2aSRGrPuq4mdiyoSBrXIl0WuBR0nRhemTACbZoxPU8/exec";
      
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Necessary for some Apps Script deployments
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Since mode is "no-cors", we can't read the response body.
      // We assume success if no error was thrown during fetch.
      setIsSuccess(true);
    } catch (err: any) {
      // Fallback for demo purposes if URL is not set
      console.error(err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                <div className="w-20 h-20 rounded-full bg-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-bold font-syne">Message Sent!</h3>
                <p className="text-white/60 max-w-xs">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-accent-cyan font-bold uppercase tracking-widest text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-2">Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-2">Email</label>
                    <input 
                      required
                      name="email"
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
                      <select name="projectType" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-12 outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all appearance-none">
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
                      <select name="budget" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-12 outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all appearance-none">
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
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all resize-none"
                  />
                </div>

                {error && <p className="text-red-500 text-sm ml-2">{error}</p>}

                <MagneticButton 
                  className="w-full py-6 text-xl flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </MagneticButton>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
