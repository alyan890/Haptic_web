"use client";

import Link from "next/link";
import { Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="mb-6 inline-flex items-center gap-3">
            <img
              src="/images/Haptic%20Icon%20.png"
              alt="Haptic Web logo"
              className="h-14 w-auto"
            />
            <span className="text-3xl font-bold font-syne tracking-tighter">
              HAPTIC<span className="text-accent-cyan">WEB</span>
            </span>
          </Link>
          <p className="text-white/60 max-w-sm mb-8">
            We build high-end digital experiences that help brands stand out in the modern web landscape.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/share/1Fwqe2GjwR/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-cyan transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 font-syne uppercase tracking-wider">Pages</h4>
          <ul className="space-y-4 text-white/60">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/#work" className="hover:text-white transition-colors">Work</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 font-syne uppercase tracking-wider">Contact</h4>
          <ul className="space-y-4 text-white/60">
            <li>hello@hapticweb.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center text-sm text-white/40">
        <p>© {new Date().getFullYear()} Haptic Web Designs. All rights reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
