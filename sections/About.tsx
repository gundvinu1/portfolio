"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Mail, Phone, Link2, GitFork, Sparkles, ArrowRight } from "lucide-react";
import { personalInfo, interests } from "@/data/portfolio";

const targetRoles = [
  { label: "AI / ML Engineer", emoji: "🤖", color: "#818CF8" },
  { label: "Data Analyst", emoji: "📊", color: "#38BDF8" },
  { label: "Big Data Engineer", emoji: "⚡", color: "#FB923C" },
  { label: "Data Engineer", emoji: "🔄", color: "#34D399" },
  { label: "Software Developer", emoji: "💻", color: "#C084FC" },
  { label: "Backend Developer", emoji: "⚙️", color: "#94A3B8" },
];

const contactItems = [
  { icon: MapPin, value: personalInfo.location, color: "#34D399" },
  { icon: Mail, value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: "#38BDF8" },
  { icon: Phone, value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: "#A78BFA" },
  { icon: Link2, value: "LinkedIn", href: personalInfo.linkedin, color: "#818CF8" },
  { icon: GitFork, value: "GitHub", href: personalInfo.github, color: "#C084FC" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Divider top */}
      <div className="section-divider mb-0 absolute top-0 left-0 right-0" />

      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 dot-bg opacity-40" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="section-pill mb-4"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-3 h-3" />
            </motion.div>
            About Me
          </motion.div>
          <h2 className="section-heading text-white mb-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="text-white/40 max-w-xl text-base leading-relaxed">
            AI/ML Engineer · Data Analytics · Big Data · Backend Development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left col: bio + contact */}
          <div className="lg:col-span-3 space-y-5">
            {/* Bio card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card gradient-border p-7 relative overflow-hidden scan-container"
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.div
                  animate={{ scaleY: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-6 rounded-full bg-gradient-to-b from-indigo-500 to-cyan-500"
                />
                <span className="text-sm font-bold text-white/80">My Story</span>
              </div>
              <p className="text-white/65 text-base leading-[1.85]">{personalInfo.about}</p>
            </motion.div>

            {/* Contact grid */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <motion.div
                  animate={{ scaleY: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="w-1 h-6 rounded-full bg-gradient-to-b from-cyan-500 to-green-500"
                />
                <span className="text-sm font-bold text-white/80">Contact Details</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {contactItems.map(({ icon: Icon, value, href, color }, ci) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + ci * 0.06 }}
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ background: `${color}18` }}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color }} />
                    </motion.div>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-white/55 group-hover:text-white transition-colors truncate">
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-white/55 truncate">{value}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right col: photo + roles + interests */}
          <div className="lg:col-span-2 space-y-5">
            {/* Profile photo card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-6 flex flex-col items-center text-center gap-4"
            >
              {/* Animated photo */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Glow ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, #4F46E5, #06B6D4, #22C55E, #C084FC, #4F46E5)",
                    filter: "blur(10px)",
                    opacity: 0.5,
                    transform: "scale(1.12)",
                  }}
                />
                <div
                  className="rounded-full p-[3px] relative"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4, #22C55E)" }}
                >
                  <div className="rounded-full p-[2px] bg-[#09090B] dark:bg-[#09090B]">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src="/vinayak.jpg"
                        alt="Vinayak Rajendra Gund"
                        fill
                        className="object-cover object-top"
                        sizes="96px"
                      />
                    </div>
                  </div>
                </div>
                {/* Availability dot */}
                <motion.div
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-[#09090B]"
                  style={{ boxShadow: "0 0 8px rgba(34,197,94,0.7)" }}
                />
              </motion.div>
              <div>
                <p className="font-bold text-white text-sm">{personalInfo.name}</p>
                <p className="text-[11px] text-white/40 mt-0.5">{personalInfo.location}</p>
              </div>
            </motion.div>

            {/* Target roles */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="card p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-purple-500 to-pink-500" />
                <span className="text-sm font-bold text-white/80">Open for Roles</span>
              </div>
              <div className="space-y-2">
                {targetRoles.map(({ label, emoji, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.06 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/3 border border-white/4 hover:border-white/10 transition-all cursor-default"
                  >
                    <span className="text-base">{emoji}</span>
                    <span className="text-sm font-semibold" style={{ color }}>{label}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color }} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="card p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-green-500 to-teal-500" />
                <span className="text-sm font-bold text-white/80">Interests</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, i) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.75, y: 8 }}
                    animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.04, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="tag cursor-default text-[11px] relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
