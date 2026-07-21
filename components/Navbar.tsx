"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Download, Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#data-expertise", label: "Data" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const current = navLinks.find((link) => {
        const section = document.getElementById(link.href.slice(1));
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (current) setActiveSection(current.href.slice(1));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-slate-200/30 dark:border-white/8 bg-white/88 dark:bg-slate-950/88 shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            : "border-transparent bg-white/70 dark:bg-slate-950/70 backdrop-blur-md"
        }`}
      >
        <div className="container-shell flex h-16 items-center justify-between">
          <Link href="#hero" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Go to hero section">
            <motion.span
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-600 dark:text-cyan-300"
            >
              <Code2 className="h-5 w-5" />
            </motion.span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold leading-none text-slate-900 dark:text-white">Vinayak Gund</span>
              <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 min-[380px]:block">
                AI | Data | Dev
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "text-cyan-600 dark:text-white"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.04] hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 rounded-lg bg-cyan-400/10 dark:bg-white/6"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:inline-flex btn-primary min-h-10 px-3"
            >
              <Download className="h-4 w-4" />
              Resume
            </motion.a>
            <ThemeToggle />
            <motion.button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              whileTap={{ scale: 0.9 }}
              className="icon-link lg:hidden"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 top-20 z-40 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-lg border border-slate-200 bg-white/96 p-2 shadow-2xl backdrop-blur-xl dark:border-white/8 dark:bg-slate-950/96 sm:inset-x-4 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.04] hover:text-slate-900 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-3 py-3 text-sm font-bold text-white"
            >
              <Download className="h-4 w-4" />
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
