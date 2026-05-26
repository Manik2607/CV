"use client";

import { useEffect, useState } from "react";
import { User, Briefcase, Code, Award, Mail, Sparkles, Terminal, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

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

export default function BottomDock() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -40% 0px", // Snappy activation centered around viewing area
      threshold: 0.15,
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

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl">
      {/* Floating Liquid Glass Dock Wrapper */}
      <div className="relative liquid-glass rounded-2xl md:rounded-3xl p-2.5 flex items-center justify-between gap-1.5 md:gap-3 overflow-hidden shadow-2xl">
        
        {/* Specular Micro-texture noise layer */}
        <div className="absolute inset-0 glass-noise" />

        {/* Specular light bending gloss reflection overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.06)_30%,rgba(255,255,255,0)_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/12 dark:via-white/1 dark:to-white/6 pointer-events-none rounded-[inherit]" />

        {/* Dynamic Navigation Items */}
        <div className="flex items-center gap-1 sm:gap-2 z-10 w-full justify-around md:justify-center">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isHovered = hoveredIdx === idx;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative py-2.5 px-3 md:px-4 rounded-xl cursor-pointer flex flex-col items-center justify-center transition-all duration-300 group focus:outline-none"
                aria-label={`Scroll to ${item.label}`}
              >
                {/* Active/Hover liquid pill (elastic sliding layout) */}
                {isActive && (
                  <motion.div
                    layoutId="activeDockHighlight"
                    className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 dark:border-emerald-400/20 rounded-xl"
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 24,
                    }}
                  />
                )}

                {/* Micro-dot Indicator for active state */}
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute bottom-1 w-1 h-1 rounded-full bg-emerald-500 dark:bg-emerald-400"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                )}

                {/* Dynamic Elastic Scaled Icon */}
                <motion.div
                  animate={{
                    scale: isHovered ? 1.25 : 1,
                    y: isHovered ? -5 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 18,
                  }}
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                  }`}
                >
                  <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </motion.div>

                {/* Floating Tooltip Label (Apple style) */}
                <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 origin-bottom pointer-events-none z-20">
                  <div className="bg-slate-900/90 text-slate-50 dark:bg-slate-950/90 text-[10px] font-mono tracking-wider font-semibold py-1 px-2.5 rounded-lg shadow-lg border border-slate-700/50 dark:border-slate-800/50 whitespace-nowrap">
                    {item.label}
                  </div>
                </div>
              </button>
            );
          })}

          {/* Symmetrical Separator Ring */}
          <div className="w-[1px] h-6 bg-slate-300/60 dark:bg-slate-700/60 mx-1 md:mx-2 self-center z-10" />

          {/* Sleek Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="relative py-2.5 px-3 md:px-4 rounded-xl cursor-pointer flex items-center justify-center transition-all duration-300 group z-10 focus:outline-none"
            aria-label="Toggle light and dark theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "light" ? (
                <motion.div
                  key="light"
                  initial={{ rotate: 45, scale: 0.6, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -45, scale: 0.6, opacity: 0 }}
                  whileHover={{ scale: 1.25, y: -4 }}
                  transition={{ duration: 0.2, type: "spring", stiffness: 350, damping: 15 }}
                  className="text-slate-700 hover:text-slate-950"
                >
                  <Moon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </motion.div>
              ) : (
                <motion.div
                  key="dark"
                  initial={{ rotate: -45, scale: 0.6, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 45, scale: 0.6, opacity: 0 }}
                  whileHover={{ scale: 1.25, y: -4 }}
                  transition={{ duration: 0.2, type: "spring", stiffness: 350, damping: 15 }}
                  className="text-amber-400 hover:text-amber-300"
                >
                  <Sun className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating Tooltip for Theme */}
            <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 origin-bottom pointer-events-none z-20">
              <div className="bg-slate-900/90 text-slate-50 dark:bg-slate-950/90 text-[10px] font-mono tracking-wider font-semibold py-1 px-2.5 rounded-lg shadow-lg border border-slate-700/50 dark:border-slate-800/50 whitespace-nowrap">
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
