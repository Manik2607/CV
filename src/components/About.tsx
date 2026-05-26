"use client";

import { motion } from "framer-motion";
import { User, Shield, Terminal, Trophy } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto border-t border-slate-200/50 dark:border-slate-900/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Bio Text Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
              <User className="w-4 h-4" />
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              About Me
            </h2>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">
            Bridging High-Performance Web Architecture with Immersive Gameplay Systems
          </h3>
          
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
            <p>
              I am a passionate software engineer currently pursuing my B.E. in Computer Science and Engineering at Sri Krishna College of Engineering and Technology (2023 - 2027). My technical expertise spans across building sleek, scalable React/Next.js web applications and engineering robust game physics and UI architectures.
            </p>
            <p>
              Having worked as a Game Developer Intern at Bleeding Pixels Studio, I spearheaded team coordination and developed core systems utilizing event-driven architectures and persistent state managers. 
            </p>
            <p>
              In addition to web and game development, I am deeply committed to open source. I actively contribute to the C++ core codebase of the <strong>Godot Engine</strong>, focusing on performance, usability, and architecture, and maintain over 50 GitHub repositories showcasing varied projects and experiments.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-mono">50+</div>
              <div className="text-xs text-slate-500 font-mono mt-1">Git Repos</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-mono">3+</div>
              <div className="text-xs text-slate-500 font-mono mt-1">Prod Apps</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-mono">100+</div>
              <div className="text-xs text-slate-500 font-mono mt-1">Active Users</div>
            </div>
          </div>
        </motion.div>

        {/* Visual Terminal / Code Block Column */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 w-full relative"
        >
          {/* Decorative glowing background mesh */}
          <div className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-500/5 blur-[50px] rounded-full pointer-events-none" />

          {/* Visual Terminal Widget */}
          <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed text-slate-400">
            {/* Header / Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800/60">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                <Terminal className="w-3 h-3 text-emerald-500" /> profile.json
              </span>
              <div className="w-12" /> {/* spacing */}
            </div>

            {/* Terminal Body content */}
            <div className="p-5 space-y-3.5 text-xs sm:text-sm overflow-x-auto select-none">
              <div>
                <span className="text-pink-500">const</span>{" "}
                <span className="text-blue-400">developer</span>{" "}
                <span className="text-slate-300">=</span>{" "}
                <span className="text-slate-400">&#123;</span>
              </div>
              <div className="pl-4">
                <span className="text-emerald-500">name</span>:{" "}
                <span className="text-amber-300">"Manik Sharma"</span>,
              </div>
              <div className="pl-4">
                <span className="text-emerald-500">role</span>:{" "}
                <span className="text-amber-300">"Full-Stack Engineer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-emerald-500">specialties</span>: <span className="text-slate-400">[</span>
                <div className="pl-4">
                  <span className="text-amber-300">"Next.js/React Stack"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-amber-300">"C# Game Architecture"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-amber-300">"C++ Engine Contributor"</span>
                </div>
                <span className="text-slate-400">]</span>,
              </div>
              <div className="pl-4">
                <span className="text-emerald-500">currentStatus</span>:{" "}
                <span className="text-amber-300">"Building ADDA App"</span>,
              </div>
              <div className="pl-4">
                <span className="text-emerald-500">lovesSolving</span>:{" "}
                <span className="text-violet-400">()</span> <span className="text-slate-300">=&gt;</span> <span className="text-amber-300">"Complex Logic & Scroll Performance"</span>
              </div>
              <div><span className="text-slate-400">&#125;;</span></div>
              
              <div className="pt-2 text-slate-500 border-t border-slate-900 text-[11px]">
                // contributor to the open source Godot engine
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
