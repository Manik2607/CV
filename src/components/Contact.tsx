"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "../lib/data";

export default function Contact() {
  const { personal } = resumeData;
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/maniksharma2607@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Message from ${formState.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("FormSubmit response error:", response.statusText);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto border-t border-slate-200/50 dark:border-slate-900/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Detail & Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
              <Mail className="w-4 h-4" />
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Let's Connect
            </h2>
          </div>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            Have an exciting opportunity in Full-Stack Web Development, a complex Unity/C# Game project, or an open-source collaboration you want to discuss? Feel free to reach out directly or send a message using the form!
          </p>

          {/* Icon lists */}
          <div className="space-y-4 pt-4 font-mono text-sm">
            <a 
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/40 dark:hover:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-300 transition-all duration-300 shadow-sm"
            >
              <Mail className="w-4 h-4 text-emerald-500" />
              <span>{personal.email}</span>
            </a>

            <a 
              href={`tel:${personal.phone}`}
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/40 dark:hover:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-300 transition-all duration-300 shadow-sm"
            >
              <Phone className="w-4 h-4 text-emerald-500" />
              <span>{personal.phone}</span>
            </a>

            <div 
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 text-slate-500 dark:text-slate-400"
            >
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>{personal.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80 shadow-md space-y-5"
          >
            {/* Name Input */}
            <div className="space-y-2">
              <label 
                htmlFor="name-field" 
                className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name-field"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="John Doe"
                disabled={status === "sending"}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label 
                htmlFor="email-field" 
                className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email-field"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="johndoe@example.com"
                disabled={status === "sending"}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300"
              />
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label 
                htmlFor="message-field" 
                className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"
              >
                Message
              </label>
              <textarea
                id="message-field"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Hi Manik, I'd love to chat about..."
                disabled={status === "sending"}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 resize-none"
              />
            </div>

            {/* Form submission action button */}
            <button
              type="submit"
              disabled={status !== "idle"}
              className={`w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-md ${
                status === "sending"
                  ? "bg-slate-700 dark:bg-slate-800 cursor-not-allowed"
                  : status === "success"
                  ? "bg-emerald-500 shadow-emerald-500/20"
                  : status === "error"
                  ? "bg-rose-500 shadow-rose-500/20"
                  : "bg-slate-950 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-950"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === "sending" ? (
                  <motion.div
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </motion.div>
                ) : status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Message Sent Successfully!</span>
                  </motion.div>
                ) : status === "error" ? (
                  <motion.div
                    key="error"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>Failed to Send. Try Again!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
