"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:bg-slate-200/50 dark:hover:bg-slate-800/80 transition-all duration-300 flex items-center justify-center cursor-pointer group shadow-sm overflow-hidden"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="light"
            initial={{ y: 20, rotate: 45, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -20, rotate: -45, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <Moon className="w-5 h-5 text-slate-700 group-hover:text-emerald-600 transition-colors" />
          </motion.div>
        ) : (
          <motion.div
            key="dark"
            initial={{ y: 20, rotate: -45, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -20, rotate: 45, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <Sun className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
