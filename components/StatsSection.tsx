"use client";

import { STATS } from "@/lib/constants";
import { useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl md:text-7xl font-bold font-syne text-accent-cyan">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 px-10">
      <div className="max-w-7xl mx-auto glass p-12 md:p-20 rounded-[3rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold mt-4">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
