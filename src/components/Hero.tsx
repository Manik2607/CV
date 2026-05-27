"use client";

import { useState, useEffect, useCallback } from "react";
import { resumeData } from "../lib/data";
import { ExternalLink, ArrowRight, Download, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

// Custom inline SVG brand icons since lucide-react removed brand icons in recent versions
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// --- Typewriter Hook ---
const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPING = 2000;
const PAUSE_AFTER_DELETING = 500;

const typewriterPhrases = [
  "Software Engineer",
  "Game Developer",
  "Open Source Contributor",
  "Full-Stack Builder",
  "Problem Solver",
];

function useTypewriter(phrases: string[]) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
      // Typing forward
      const nextText = currentPhrase.substring(0, displayText.length + 1);
      setDisplayText(nextText);

      if (nextText === currentPhrase) {
        // Finished typing, pause then start deleting
        setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
        return;
      }
    } else {
      // Deleting
      const nextText = currentPhrase.substring(0, displayText.length - 1);
      setDisplayText(nextText);

      if (nextText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        // Small pause before typing next word
        setTimeout(() => {}, PAUSE_AFTER_DELETING);
        return;
      }
    }
  }, [displayText, isDeleting, phraseIndex, phrases]);

  useEffect(() => {
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return displayText;
}


export default function Hero() {
  const { personal, summary } = resumeData;
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedSummary = summary.length > 200 ? summary.substring(0, 200) + "..." : summary;
  const typedText = useTypewriter(typewriterPhrases);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.12, 1],
      opacity: [0.15, 0.22, 0.15],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 overflow-hidden pt-20 lg:pt-0"
    >
      {/* Background grids and glowing shapes */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.015] pointer-events-none" />
      
      {/* Soft color ambient glows */}
      <motion.div
        variants={glowVariants}
        animate="animate"
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 md:w-[450px] h-80 md:h-[450px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[80px] md:blur-[120px] pointer-events-none"
      />
      <motion.div
        variants={glowVariants}
        animate="animate"
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 md:w-[450px] h-80 md:h-[450px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[80px] md:blur-[120px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full z-10 text-left space-y-8"
      >
        {/* Available for Hire Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
            Available for Opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <div className="space-y-3">
          <motion.p
            variants={itemVariants}
            className="text-emerald-600 dark:text-emerald-400 font-mono text-sm md:text-base font-semibold tracking-wider uppercase"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-none"
          >
            {personal.name}
          </motion.h1>
          {/* Typewriter subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-[20px] font-medium text-slate-500 dark:text-slate-400/80 tracking-tight h-8 flex items-center"
          >
            <span>{typedText}</span>
            <span className="inline-block w-[2px] h-[1.2em] bg-emerald-500 dark:bg-emerald-400 ml-0.5 animate-blink" />
          </motion.h2>
        </div>

        {/* Bio summary */}
        <motion.p
          variants={itemVariants}
          className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-normal"
        >
          {isExpanded ? summary : truncatedSummary}
          {summary.length > 200 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 font-mono text-[11px] font-bold focus:outline-none cursor-pointer inline-flex items-center gap-0.5"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </motion.p>

        {/* Action Buttons & Socials (Moved Higher) */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-5 pt-2"
        >
          {/* Main CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-950 font-semibold text-sm transition-all duration-300 shadow-lg dark:shadow-slate-900/10 cursor-pointer flex items-center gap-2 hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/resume.pdf"
              download="Manik_Sharma_Resume.pdf"
              className="px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 bg-transparent text-slate-700 dark:text-slate-300 font-semibold text-sm transition-all duration-300 cursor-pointer flex items-center gap-2 hover:-translate-y-0.5 shadow-sm"
            >
              <span>Download PDF CV</span>
              <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Social Icons separator */}
          <div className="hidden sm:block w-[1px] h-8 bg-slate-200 dark:bg-slate-800 mx-1" />

          {/* Social Icons Link List */}
          <div className="flex items-center gap-3">
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-900 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-900 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personal.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-900 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="Existing Portfolio website"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Brief Contact Badges (Moved Lower) */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono pt-4 border-t border-slate-200/30 dark:border-slate-850/20 w-full max-w-2xl"
        >
          <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
            <Mail className="w-4 h-4 text-slate-400" />
            <span>{personal.email}</span>
          </a>
          <a href={`tel:${personal.phone}`} className="flex items-center gap-1.5 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
            <Phone className="w-4 h-4 text-slate-400" />
            <span>{personal.phone}</span>
          </a>
          <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
            <MapPin className="w-4 h-4" />
            <span>{personal.location}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
