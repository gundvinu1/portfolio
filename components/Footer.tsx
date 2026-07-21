"use client";

import { motion } from "framer-motion";
import { Code2, GitFork, Link2, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#data-expertise", label: "Data Expertise" },
  { href: "#certifications", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { Icon: GitFork, href: personalInfo.github, label: "GitHub", color: "#C084FC" },
  { Icon: Link2, href: personalInfo.linkedin, label: "LinkedIn", color: "#818CF8" },
  { Icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", color: "#38BDF8" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/50 dark:border-white/8 bg-slate-100/80 dark:bg-slate-950 relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <div
          className="w-[600px] h-[400px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)" }}
        />
      </motion.div>

      <div className="container-shell py-12 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <motion.span
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-600 dark:text-cyan-300"
              >
                <Code2 className="h-5 w-5" />
              </motion.span>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{personalInfo.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                  AI | Data | Software
                </p>
              </div>
            </motion.div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
              Building practical AI, data, and backend systems with a focus on reliability, clean implementation, and business value.
            </p>
            <span className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="h-4 w-4 text-cyan-500 dark:text-cyan-300 flex-shrink-0" />
              </motion.div>
              {personalInfo.location}
            </span>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
              Navigation
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ x: 3, color: "#38bdf8" }}
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
              Contact
            </h3>
            <div className="mt-4 flex gap-2">
              {socials.map(({ Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3, boxShadow: `0 4px 16px ${color}30` }}
                  whileTap={{ scale: 0.95 }}
                  className="icon-link"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ x: 3 }}
              className="mt-4 block break-all text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              {personalInfo.email}
            </motion.a>
            <motion.a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              whileHover={{ x: 3 }}
              className="mt-2 block text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              {personalInfo.phone}
            </motion.a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200/60 dark:border-white/8 pt-6 text-xs text-slate-400 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-red-400"
            >
              ♥
            </motion.span>
            using Next.js, TypeScript, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
