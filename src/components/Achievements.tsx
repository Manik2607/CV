"use client";

import { resumeData } from "../lib/data";
import { Award, GitMerge, ExternalLink, ShieldCheck, HeartHandshake, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const achievementIcons = [
  ShieldCheck, // Concept to deployment
  HeartHandshake, // 3+ production apps
  GitMerge, // Godot contributor
  GitBranch, // active github
];

export default function Achievements() {
  const { achievements } = resumeData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 18 },
    },
  };

  return (
    <section id="achievements" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto border-t border-slate-200/50 dark:border-slate-900/50">
      <div className="space-y-12">
        {/* Section Heading */}
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
            <Award className="w-4 h-4" />
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Key Achievements
          </h2>
        </div>

        {/* Dynamic Achievements list grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((item, idx) => {
            const Icon = achievementIcons[idx % achievementIcons.length] || Award;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:bg-slate-50/10 dark:hover:bg-slate-950/60 transition-all duration-300 shadow-sm"
              >
                <div className="flex gap-5">
                  {/* Left Column Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white shadow-sm duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Right Column details */}
                  <div className="space-y-4 flex-grow">
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                      {item.text}
                    </p>

                    {/* Conditional Action buttons */}
                    {item.link && (
                      <div className="pt-2">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 text-xs font-mono font-bold text-slate-700 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-300 shadow-sm cursor-pointer"
                        >
                          <span>{item.linkLabel || "View Reference"}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
