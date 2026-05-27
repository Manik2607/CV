"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 16; // ~60fps
    const totalSteps = Math.ceil(duration / stepTime);
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  const stats = [
    { target: 50, suffix: "+", label: "Git Repositories" },
    { target: 3, suffix: "+", label: "Production Apps" },
    { target: 100, suffix: "+", label: "Active Users" },
  ];

  return (
    <div className="w-full border-y border-slate-200/60 dark:border-slate-900/60 bg-slate-100/10 dark:bg-slate-900/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-10 md:py-12">
        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-3xl sm:text-4xl md:text-[46px] font-extrabold text-slate-900 dark:text-slate-50 tracking-tight font-mono leading-none">
                <AnimatedNumber target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-2 md:mt-3">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
