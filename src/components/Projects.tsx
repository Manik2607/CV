"use client";

import { useState } from "react";
import { resumeData, Project } from "../lib/data";
import { Code, ExternalLink, Globe, ArrowRight, CornerDownRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const { projects } = resumeData;
  const [filter, setFilter] = useState<"all" | "fullstack" | "frontend" | "backend">("all");

  const getFilteredProjects = () => {
    if (filter === "all") return projects;
    if (filter === "fullstack") {
      return projects.filter(p => p.title.toLowerCase().includes("adda") || p.title.toLowerCase().includes("musica"));
    }
    if (filter === "frontend") {
      return projects.filter(p => p.title.toLowerCase().includes("spellwave") || p.title.toLowerCase().includes("adda"));
    }
    if (filter === "backend") {
      return projects.filter(p => p.title.toLowerCase().includes("musica") || p.title.toLowerCase().includes("adda"));
    }
    return projects;
  };

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "frontend", label: "Frontend/UI" },
    { id: "backend", label: "Backend/APIs" },
  ] as const;

  const cardBorders = [
    "border-t-emerald-500 dark:border-t-emerald-400 hover:border-emerald-500/50 dark:hover:border-emerald-400/40",
    "border-t-indigo-500 dark:border-t-indigo-400 hover:border-indigo-500/50 dark:hover:border-indigo-400/40",
    "border-t-violet-500 dark:border-t-violet-400 hover:border-violet-500/50 dark:hover:border-violet-400/40",
  ];

  const textHovers = [
    "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
    "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
    "group-hover:text-violet-600 dark:group-hover:text-violet-400",
  ];

  const dateColors = [
    "text-emerald-600 dark:text-emerald-400",
    "text-indigo-600 dark:text-indigo-400",
    "text-violet-600 dark:text-violet-400",
  ];

  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto border-t border-slate-200/50 dark:border-slate-900/50">
      <div className="space-y-12">
        {/* Section Heading & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
              <Code className="w-4 h-4" />
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Dynamic Filter pill list */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/40 self-start">
            {categories.map((cat) => {
              const active = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    active
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                  }`}
                >
                  {active && (
                     <motion.div
                       layoutId="activeFilter"
                       className="absolute inset-0 bg-white dark:bg-slate-800 shadow-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl"
                       transition={{ type: "spring", stiffness: 350, damping: 30 }}
                     />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Card Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {getFilteredProjects().map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80 ${cardBorders[idx % cardBorders.length]} border-t-[4px] hover:bg-slate-50/15 dark:hover:bg-slate-950/60 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 h-full`}
              >
                <div className="space-y-4">
                  {/* Card Title & Icon */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className={`text-[10px] font-mono font-bold tracking-widest ${dateColors[idx % dateColors.length]} uppercase`}>
                        {project.date}
                      </span>
                      <h3 className={`text-xl font-extrabold text-slate-900 dark:text-slate-100 ${textHovers[idx % textHovers.length]} transition-colors mt-0.5`}>
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 italic mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Launch/External Live Link icon */}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors shadow-sm cursor-pointer"
                        aria-label={`Visit live site for ${project.title}`}
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Bullet description list */}
                  <ul className="space-y-2.5 pt-2">
                    {project.description.map((bullet, bulletIdx) => (
                      <li
                        key={bulletIdx}
                        className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed"
                      >
                        <span className="mt-1 text-emerald-500/70 dark:text-emerald-400/60 flex-shrink-0">
                          <CornerDownRight className="w-3.5 h-3.5" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badge tags (Moved to Bottom) */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 text-[10px] font-mono text-slate-600 dark:text-slate-400 tracking-tight"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer action button */}
                {project.links.live && (
                  <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/40">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors group/link cursor-pointer"
                    >
                      <span>Visit Live Application</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
