"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-10 flex justify-between items-center",
        isScrolled ? "glass-dark py-4" : "bg-transparent"
      )}
    >
      <Link href="/" className="text-2xl font-bold font-syne tracking-tighter group">
        HAPTIC<span className="text-accent-cyan group-hover:text-accent-violet transition-colors">WEB</span>
      </Link>

      <div className="hidden md:flex items-center space-x-12">
          {["Services", "Work", "About", "Contact"].map((item) => {
              const map: { [k: string]: string } = {
                Services: "/services",
                Work: "/#work",
                About: "/#about",
                Contact: "/contact",
              };
              return (
                <Link
                  key={item}
                  href={map[item]}
                  onClick={handleLinkClick}
                  className="text-lg font-medium uppercase tracking-widest hover:text-accent-cyan transition-colors"
                >
                  {item}
                </Link>
              );
            })}
      </div>

        <Link href="/contact" className="hidden md:block">
          <MagneticButton className="py-2 px-6 text-sm">Start a Project</MagneticButton>
        </Link>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-white z-50 relative"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* Mobile Menu Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-72 bg-gradient-to-b from-gray-900 to-black z-40 md:hidden pt-24 px-8 border-l border-accent-cyan/20"
      >
        <div className="flex flex-col space-y-8">
          {["Services", "Work", "About", "Contact"].map((item) => {
            const map: { [k: string]: string } = {
              Services: "/services",
              Work: "/#work",
              About: "/#about",
              Contact: "/contact",
            };
            return (
              <Link
                key={item}
                href={map[item]}
                onClick={handleLinkClick}
                className="text-lg font-medium uppercase tracking-widest hover:text-accent-cyan transition-colors"
              >
                {item}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="mt-8 bg-gradient-to-r from-accent-cyan to-accent-violet py-3 px-6 text-sm font-bold uppercase tracking-widest text-black rounded-full hover:shadow-lg hover:shadow-accent-cyan/50 transition-all text-center"
          >
            Start a Project
          </Link>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </motion.nav>
  );
}
