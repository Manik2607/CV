"use client";

import { resumeData } from "../lib/data";
import { Sparkles, Terminal, Laptop, Database, Gamepad2, Settings, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const categoryIcons: Record<string, React.ComponentType<any>> = {
  "Programming Languages": Code2,
  "Frontend Stack": Laptop,
  "Backend & APIs": Terminal,
  "Databases & Storage": Database,
  "Game Development": Gamepad2,
  "Tools & Platforms": Settings,
};

export default function Skills() {
  const { skills } = resumeData;
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto border-t border-slate-200/50 dark:border-slate-900/50">
      <div className="space-y-12">
        {/* Section Heading */}
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
            <Sparkles className="w-4 h-4" />
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Skills & Toolkit
          </h2>
        </div>

        {/* Dynamic Skill Cards Dashboard */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((category) => {
            const Icon = categoryIcons[category.name] || Code2;
            const isHighlighted = activeCategory === category.name;
            const isSomeHighlighted = activeCategory !== null;

            return (
              <motion.div
                key={category.name}
                variants={cardVariants}
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`p-6 rounded-3xl bg-white dark:bg-slate-950/40 border transition-all duration-500 flex flex-col justify-between shadow-sm cursor-default relative overflow-hidden ${
                  isHighlighted
                    ? "border-emerald-500/50 dark:border-emerald-400/40 bg-emerald-50/5 dark:bg-emerald-950/5 scale-[1.02] shadow-emerald-500/5 shadow-md"
                    : isSomeHighlighted
                    ? "border-slate-200 dark:border-slate-800 opacity-60 scale-[0.98]"
                    : "border-slate-200 dark:border-slate-800"
                }`}
              >
                {/* Decorative absolute background shape */}
                {isHighlighted && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none -mr-8 -mt-8" />
                )}

                <div className="space-y-5">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl border transition-colors duration-300 ${
                      isHighlighted
                        ? "bg-emerald-500 border-emerald-500 text-white"
                        : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skill Node List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium border tracking-tight transition-all duration-300 ${
                          isHighlighted
                            ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 border-slate-900 dark:border-white shadow-sm"
                            : "bg-slate-50 text-slate-700 dark:bg-slate-900 dark:text-slate-400 border-slate-200/50 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Accent mini indicator */}
                <div className="mt-6 flex items-center justify-between text-[10px] font-mono tracking-wider text-slate-400 dark:text-slate-500 uppercase select-none">
                  <span>Verified Competency</span>
                  <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isHighlighted ? "bg-emerald-500 animate-pulse" : "bg-slate-300 dark:bg-slate-700"
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
