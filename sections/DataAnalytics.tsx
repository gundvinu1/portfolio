"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Activity } from "lucide-react";
import {
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  BarChart, Bar, Cell,
} from "recharts";
import { dataAnalyticsSkills, dataAnalyticsTools } from "@/data/portfolio";

const kpiCards = [
  { icon: "📊", label: "Datasets Analyzed", value: "10+", sub: "structured & unstructured", color: "#818CF8", glow: "rgba(129,140,248,0.15)" },
  { icon: "🎯", label: "Prediction Accuracy", value: "95%+", sub: "fraud detection model", color: "#38BDF8", glow: "rgba(56,189,248,0.15)" },
  { icon: "📈", label: "BI Dashboards", value: "5+", sub: "Power BI & Tableau", color: "#34D399", glow: "rgba(52,211,153,0.15)" },
  { icon: "🤖", label: "ML Models", value: "3+", sub: "deployed in projects", color: "#F472B6", glow: "rgba(244,114,182,0.15)" },
];

const proficiencyData = [
  { skill: "Data Cleaning", level: 95 },
  { skill: "EDA", level: 90 },
  { skill: "Visualization", level: 88 },
  { skill: "ML Modeling", level: 85 },
  { skill: "BI Reports", level: 78 },
  { skill: "Statistics", level: 80 },
];

const radarData = [
  { subject: "Python", A: 90 },
  { subject: "Pandas", A: 88 },
  { subject: "Charts", A: 85 },
  { subject: "Stats", A: 78 },
  { subject: "Power BI", A: 75 },
  { subject: "SQL", A: 85 },
  { subject: "Tableau", A: 72 },
];

export default function DataAnalytics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="data-analytics" className="py-28 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(79,70,229,0.05) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-pill mb-4" style={{ borderColor: "rgba(6,182,212,0.3)", background: "rgba(6,182,212,0.08)", color: "#38BDF8" }}>
            <BarChart3 className="w-3 h-3" /> Data Analytics & BI
          </div>
          <h2 className="section-heading text-white mb-3">
            Data Analytics &{" "}
            <span className="gradient-text-accent">Business Intelligence</span>
          </h2>
          <p className="text-white/40 max-w-2xl text-sm leading-relaxed">
            Transforming raw data into actionable business insights using modern analytics tools, statistical analysis, and visualization techniques.
          </p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpiCards.map(({ icon, label, value, sub, color, glow }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20, scale: 0.92 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card relative overflow-hidden"
              style={{ transition: "all 0.3s" }}
            >
              <div className="absolute inset-0 rounded-[20px]"
                style={{ background: `radial-gradient(ellipse at bottom right, ${glow} 0%, transparent 60%)` }} />
              <div className="relative p-5 text-center">
                <div className="text-3xl mb-3">{icon}</div>
                <div className="text-2xl font-extrabold mb-1" style={{ color }}>{value}</div>
                <div className="text-xs font-bold text-white/70 mb-0.5">{label}</div>
                <div className="text-[10px] text-white/30">{sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid lg:grid-cols-2 gap-5 mb-8">
          {/* Bar chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="card p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(56,189,248,0.15)" }}>
                <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">Analytics Proficiency</h3>
                <p className="text-[10px] text-white/30">Skill levels across data domains</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={proficiencyData} layout="vertical" barCategoryGap={6}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" horizontal={false} />
                <XAxis type="number" tick={{ fill: "#ffffff30", fontSize: 10 }} axisLine={false} tickLine={false} unit="%" domain={[0, 100]} />
                <YAxis dataKey="skill" type="category" tick={{ fill: "#ffffff60", fontSize: 11 }} axisLine={false} tickLine={false} width={90} />
                <Tooltip
                  contentStyle={{ background: "#0F0F14", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", color: "#F8FAFC", fontSize: 12 }}
                  formatter={(v) => [`${v}%`, "Level"]}
                />
                <Bar dataKey="level" radius={[0, 8, 8, 0]}>
                  {proficiencyData.map((_, i) => (
                    <Cell key={i} fill={`hsl(${230 + i * 12}, 80%, ${60 + i * 2}%)`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Radar chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="card p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(129,140,248,0.15)" }}>
                <Activity className="w-3.5 h-3.5 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">Skill Radar</h3>
                <p className="text-[10px] text-white/30">Multi-dimensional skill view</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <RadarChart data={radarData} outerRadius={80}>
                <PolarGrid stroke="rgba(255,255,255,0.06)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "#ffffff50", fontSize: 10 }} />
                <PolarRadiusAxis tick={{ fill: "transparent" }} axisLine={false} />
                <Radar dataKey="A" stroke="#818CF8" fill="#818CF8" fillOpacity={0.2} strokeWidth={2} dot={{ r: 3, fill: "#818CF8" }} />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Skills + Tools */}
        <div className="grid lg:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="card p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-6 rounded-full bg-gradient-to-b from-cyan-500 to-blue-600" />
              <h3 className="font-bold text-sm text-white">Core Analytical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {dataAnalyticsSkills.map((s, i) => (
                <motion.span key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.04 }}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/8 border border-cyan-500/18 text-cyan-400 hover:bg-cyan-500/15 transition-all cursor-default"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45 }}
            className="card p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-6 rounded-full bg-gradient-to-b from-indigo-500 to-purple-600" />
              <h3 className="font-bold text-sm text-white">Tools & Libraries</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {dataAnalyticsTools.map((t, i) => (
                <motion.span key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.45 + i * 0.05 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-4 py-2 rounded-xl text-sm font-bold text-indigo-300 bg-indigo-500/8 border border-indigo-500/18 hover:bg-indigo-500/18 transition-all cursor-default"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
