"use client";

import { ThemeProvider } from "../components/ThemeProvider";
import BottomDock from "../components/BottomDock";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import { Terminal, ExternalLink } from "lucide-react";
import { resumeData } from "../lib/data";

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


interface HoverSectionWrapperProps {
  children: React.ReactNode;
  name: string;
}

function HoverSectionWrapper({ children, name }: HoverSectionWrapperProps) {
  return (
    <div className="relative group/section">
      {/* Floating Section Name Badge Container */}
      <div className="absolute inset-x-0 top-6 pointer-events-none z-30 opacity-0 group-hover/section:opacity-100 transition-all duration-300 -translate-y-2 group-hover/section:translate-y-0">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="inline-flex px-3 py-1.5 rounded-xl bg-slate-950/80 dark:bg-slate-900/95 text-emerald-400 text-xs font-mono border border-slate-200/20 dark:border-slate-800/80 shadow-xl items-center gap-2 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-400">&lt;</span>
            <span className="font-bold text-slate-200 dark:text-slate-100">{name}</span>
            <span className="text-slate-400">/&gt;</span>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}


export default function Home() {
  const { personal } = resumeData;
  const currentYear = new Date().getFullYear();

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-emerald-500/30 dark:selection:bg-emerald-500/20 transition-colors duration-300">
        
        {/* Floating progress & Scroll spy bottom dock nav */}
        <BottomDock />

        {/* Core Layout Grid */}
        <main className="w-full pb-24">
          
          {/* Main sections */}
          <HoverSectionWrapper name="Hero">
            <Hero />
          </HoverSectionWrapper>
          <HoverSectionWrapper name="About">
            <About />
          </HoverSectionWrapper>
          <HoverSectionWrapper name="Experience">
            <Experience />
          </HoverSectionWrapper>
          <HoverSectionWrapper name="Projects">
            <Projects />
          </HoverSectionWrapper>
          <HoverSectionWrapper name="Skills">
            <Skills />
          </HoverSectionWrapper>
          <HoverSectionWrapper name="Achievements">
            <Achievements />
          </HoverSectionWrapper>
          <HoverSectionWrapper name="Contact">
            <Contact />
          </HoverSectionWrapper>

          {/* Premium Footer */}
          <footer className="py-12 px-6 md:px-16 lg:px-24 border-t border-slate-200/50 dark:border-slate-900/50 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-emerald-500 text-sm font-bold animate-pulse">&gt;_</span>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Designed & Built by Manik Sharma • {currentYear}
              </p>
            </div>

            {/* Quick social footer links */}
            <div className="flex items-center gap-5">
              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-500 dark:text-slate-500 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-500 dark:text-slate-500 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href={personal.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-500 dark:text-slate-500 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                aria-label="Portfolio"
              >
                <ExternalLink className="w-4.5 h-4.5" />
              </a>
            </div>
          </footer>

        </main>
      </div>
    </ThemeProvider>
  );
}
