"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { GitFork, Star, TrendingUp, Activity } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from "recharts";

const topLanguages = [
  { name: "Python", percent: 42, color: "#818CF8" },
  { name: "TypeScript", percent: 28, color: "#38BDF8" },
  { name: "JavaScript", percent: 16, color: "#FBBF24" },
  { name: "SQL", percent: 8, color: "#34D399" },
  { name: "Other", percent: 6, color: "#C084FC" },
];

const pinnedRepos = [
  {
    name: "autoprint",
    desc: "WhatsApp-based automated self-service printing platform using intelligent agents",
    lang: "TypeScript",
    color: "#38BDF8",
    url: "https://github.com/gundvinu1/autoprint",
    gradient: "from-blue-600 to-indigo-700",
    icon: "🖨️",
  },
  {
    name: "AI-Automation-Agent",
    desc: "AI-powered automation assistant for Gmail, Calendar & productivity workflows",
    lang: "Python",
    color: "#818CF8",
    url: "https://github.com/gundvinu1/AI-Automation-Agent-",
    gradient: "from-indigo-600 to-purple-700",
    icon: "🤖",
  },
  {
    name: "Credit-Card-Fraud-Detection",
    desc: "High-accuracy ML system for detecting fraudulent transactions in real-time",
    lang: "Python",
    color: "#34D399",
    url: "https://github.com/gundvinu1/Credit-Card-Fraud-Detection-",
    gradient: "from-emerald-600 to-teal-700",
    icon: "🔐",
  },
];

const statsCards = [
  { icon: "📁", label: "Public Repos", value: "4+" },
  { icon: "⚡", label: "Contributions", value: "Active" },
  { icon: "💻", label: "Languages", value: "5+" },
  { icon: "🤖", label: "Focus Area", value: "AI & Data" },
];

export default function GitHub() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="github" className="py-28 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-pill mb-4" style={{ borderColor: "rgba(139,92,246,0.3)", background: "rgba(139,92,246,0.08)", color: "#C084FC" }}>
            <GitFork className="w-3 h-3" /> Open Source
          </div>
          <h2 className="section-heading text-white mb-2">
            GitHub <span className="gradient-text-warm">Activity</span>
          </h2>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="text-sm text-white/35 hover:text-white/60 transition-colors font-mono">
            github.com/{personalInfo.githubUsername}
          </a>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {statsCards.map(({ icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.09 }}
              className="card text-center p-5"
            >
              <div className="text-2xl mb-2">{icon}</div>
              <div className="text-xl font-extrabold text-white">{value}</div>
              <div className="text-[11px] text-white/35 mt-1 font-medium">{label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-5 mb-6">
          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="card p-6 lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-lg bg-purple-500/15 flex items-center justify-center">
                <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">Top Languages</h3>
                <p className="text-[10px] text-white/30">By repository usage</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={topLanguages} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" horizontal={false} />
                <XAxis type="number" tick={{ fill: "#ffffff30", fontSize: 10 }} axisLine={false} tickLine={false} unit="%" />
                <YAxis dataKey="name" type="category" tick={{ fill: "#ffffff60", fontSize: 11 }} axisLine={false} tickLine={false} width={80} />
                <Tooltip
                  contentStyle={{ background: "#0F0F14", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", color: "#F8FAFC", fontSize: 12 }}
                  formatter={(v) => [`${v}%`, "Usage"]}
                />
                <Bar dataKey="percent" radius={[0, 8, 8, 0]}>
                  {topLanguages.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
              {topLanguages.map(l => (
                <span key={l.name} className="flex items-center gap-1.5 text-[11px] text-white/40">
                  <span className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                  {l.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Contribution graph */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="card p-6 lg:col-span-3 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-purple-500/15 flex items-center justify-center">
                <Activity className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">Contribution Graph</h3>
                <p className="text-[10px] text-white/30">Coding activity over time</p>
              </div>
            </div>
            <div className="flex-1 rounded-xl overflow-hidden bg-black/20 border border-white/5 p-2">
              <Image
                src={`https://ghchart.rshah.org/4F46E5/${personalInfo.githubUsername}`}
                alt="GitHub Contribution Graph"
                width={720}
                height={160}
                unoptimized
                className="w-full object-contain opacity-75 rounded-lg"
              />
            </div>
            <p className="text-[10px] text-white/20 mt-2 text-center font-mono">{personalInfo.githubUsername}</p>
          </motion.div>
        </div>

        {/* Pinned repos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pinnedRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className="card overflow-hidden shimmer-hover block"
            >
              {/* Mini banner */}
              <div className={`h-16 bg-gradient-to-r ${repo.gradient} flex items-center px-4 gap-3`}>
                <span className="text-2xl">{repo.icon}</span>
                <span className="font-bold text-sm text-white/90 font-mono">{repo.name}</span>
              </div>
              <div className="p-4">
                <p className="text-white/50 text-xs leading-relaxed mb-3 line-clamp-2">{repo.desc}</p>
                <div className="flex items-center gap-3 text-[11px] text-white/35">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ background: repo.color }} />
                    {repo.lang}
                  </span>
                  <span className="flex items-center gap-1"><Star className="w-3 h-3" /> 0</span>
                  <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> 0</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
