"use client";

import { useEffect, useState } from "react";
import { User, Briefcase, Code, Award, Mail, Sparkles, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Intro", icon: Terminal },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Code },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "achievements", label: "Achievements", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Calculate scroll progress percentage
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Intersection Observer to update active section
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Focus on the middle-upper part of viewport
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8 z-50 py-8 px-4 rounded-3xl bg-white/70 dark:bg-slate-950/30 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/60 shadow-2xl">
        <div className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-300">
          <Terminal className="w-5 h-5 animate-pulse" />
        </div>
        
        {/* Progress Timeline Track */}
        <div className="relative w-[2px] h-60 bg-slate-200 dark:bg-slate-800/80 rounded-full flex flex-col justify-between items-center my-2">
          {/* Active progress indicator line */}
          <motion.div 
            className="absolute top-0 w-full bg-emerald-500 rounded-full origin-top"
            style={{ height: `${scrollProgress * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
          />

          {/* Dots corresponding to sections */}
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative z-10 w-3 h-3 rounded-full flex items-center justify-center cursor-pointer group"
                aria-label={`Scroll to ${item.label}`}
              >
                {/* Dot background indicator */}
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive 
                    ? "bg-emerald-500 scale-125 ring-4 ring-emerald-500/20" 
                    : "bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-400 dark:group-hover:bg-slate-500 group-hover:scale-110"
                }`} />

                {/* Floating tooltip label */}
                <div className="absolute left-10 py-1 px-3 rounded-lg text-xs font-medium tracking-wide bg-slate-900 text-slate-100 dark:bg-slate-950 border border-slate-800 dark:border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
                  {item.label}
                </div>
              </button>
            );
          })}
        </div>

        <ThemeToggle />
      </nav>

      <nav className="fixed top-0 left-0 right-0 h-16 lg:hidden flex items-center justify-between px-6 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm">
        <button 
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 cursor-pointer font-bold tracking-tight text-slate-900 dark:text-slate-100"
        >
          <span className="text-emerald-500 font-mono">&lt;</span>
          <span>MS</span>
          <span className="text-emerald-500 font-mono">/&gt;</span>
        </button>

        {/* Scroll Nav Items List */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.slice(1).map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-2 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center ${
                  isActive
                    ? "bg-slate-200/80 dark:bg-slate-800 text-emerald-500 dark:text-emerald-400 scale-105"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/50 dark:hover:bg-slate-900/50"
                }`}
                aria-label={`Scroll to ${item.label}`}
              >
                <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>
            );
          })}
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1" />
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
