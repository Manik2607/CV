"use client";

import { resumeData } from "../lib/data";
import { Briefcase, Calendar, MapPin, CheckCircle, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const { experience } = resumeData;

  const timelineItems = [
    {
      type: "experience",
      role: experience[0].role,
      company: experience[0].company,
      location: experience[0].location,
      date: experience[0].date,
      summary: "Led mobile systems architecture, managing high-performance integrations and progression framework development.",
      bullets: [
        "Architected 12+ modular systems using event-driven singleton structures for mobile game frameworks.",
        "Managed cross-platform rewarded, banner, and interstitial monetization integrations using Unity Ads SDK.",
        "Designed persistent state hierarchies, dynamic game scaling algorithms, and 25-level checkpoint systems."
      ],
      icon: Briefcase,
    },
    {
      type: "education",
      role: "B.E. in Computer Science and Engineering",
      company: "Sri Krishna College of Engineering and Technology",
      location: "Coimbatore, India",
      date: "2023 – 2027 (Expected)",
      summary: "Pursuing rigorous computer science fundamentals, focusing on databases, data structures, and algorithms.",
      bullets: [
        "Specialized in Algorithms, Systems Engineering, Computer Networks, and Object-Oriented Design.",
        "Maintained high academic rigor while contributing actively to production applications.",
        "Developed custom compiler experiments and low-level system designs independently."
      ],
      icon: GraduationCap,
    },
    {
      type: "milestone",
      role: "Open Source Contributor & Creator",
      company: "Godot Engine & AI Labs",
      location: "GitHub",
      date: "2023 – Present",
      summary: "Active software creator contributing performance optimizations to core engine architectures.",
      bullets: [
        "Submitted low-level structural optimizations and C++ usability enhancements to Godot Engine.",
        "Maintained over 50 GitHub repositories showcasing varied compiler and full-stack experiments.",
        "Created optimized developer scripts and automation tooling used by the web developer community."
      ],
      icon: Award,
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto border-t border-slate-200/50 dark:border-slate-900/50">
      <div className="space-y-12">
        {/* Section Heading */}
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
            <Briefcase className="w-4 h-4" />
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Journey & Experience
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800/80 pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-12 py-3">
          {timelineItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Connector Dot */}
                <div className={`absolute -left-[39px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center border-2 transition-all duration-300 ${
                  item.type === "experience"
                    ? "bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/25 dark:shadow-emerald-500/10"
                    : item.type === "education"
                    ? "bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-500/25 dark:shadow-indigo-500/10"
                    : "bg-slate-900 border-slate-900 dark:bg-slate-100 dark:border-slate-100 text-white dark:text-slate-950 shadow-lg shadow-slate-900/10 dark:shadow-white/10"
                }`}>
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Timeline Card */}
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:bg-slate-50/20 dark:hover:bg-slate-950/65 transition-all duration-300 shadow-sm hover:shadow-md">
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/60 pb-4 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                          {item.company}
                        </span>
                        <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
                        <span className="flex items-center gap-1 text-slate-500 font-mono text-xs">
                          <MapPin className="w-3 h-3 text-slate-400" /> {item.location}
                        </span>
                      </div>
                    </div>
                    
                    {/* Date badge (Separated & Right Aligned) */}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-xs font-mono font-bold text-emerald-650 dark:text-emerald-400 self-start md:self-center md:text-right shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Role Brief Summary */}
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed mb-4 line-clamp-2 italic">
                    {item.summary}
                  </p>

                  {/* High-impact bullet achievements */}
                  <ul className="space-y-2.5">
                    {item.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                        <span className="mt-1 flex-shrink-0">
                          <CheckCircle className={`w-3.5 h-3.5 ${
                            item.type === "experience" 
                              ? "text-emerald-500" 
                              : item.type === "education"
                              ? "text-indigo-500"
                              : "text-slate-500"
                          }`} />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
