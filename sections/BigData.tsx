"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap } from "lucide-react";
import { bigDataTech } from "@/data/portfolio";

const pipeline = [
  { emoji: "📥", label: "Ingest", tools: "Kafka · Flume", color: "#818CF8", bg: "rgba(129,140,248,0.12)" },
  { emoji: "💾", label: "Store", tools: "HDFS · S3", color: "#38BDF8", bg: "rgba(56,189,248,0.12)" },
  { emoji: "⚡", label: "Process", tools: "Spark · MapReduce", color: "#FB923C", bg: "rgba(251,146,60,0.12)" },
  { emoji: "🔍", label: "Query", tools: "Hive · Spark SQL", color: "#F472B6", bg: "rgba(244,114,182,0.12)" },
  { emoji: "📊", label: "Visualize", tools: "Power BI · Tableau", color: "#34D399", bg: "rgba(52,211,153,0.12)" },
];

export default function BigData() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="big-data" className="py-28 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-pill mb-4" style={{ borderColor: "rgba(249,115,22,0.3)", background: "rgba(249,115,22,0.08)", color: "#FB923C" }}>
            <Zap className="w-3 h-3" /> Big Data Engineering
          </div>
          <h2 className="section-heading text-white mb-3">
            Big Data{" "}
            <span className="gradient-text-fire">Engineering</span>
          </h2>
          <p className="text-white/40 max-w-2xl text-sm leading-relaxed">
            Knowledge of distributed computing, scalable data processing, and big data ecosystems for handling enterprise-scale analytics.
          </p>
        </motion.div>

        {/* Pipeline architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="card gradient-border p-8 mb-8"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-white/30 tracking-widest uppercase">Architecture Pipeline</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {pipeline.map((step, i) => (
              <div key={step.label} className="flex sm:flex-col sm:items-center items-center gap-3">
                {/* Step card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 300 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl border backdrop-blur-sm cursor-default"
                  style={{ background: step.bg, borderColor: `${step.color}30`, minWidth: 100 }}
                >
                  <span className="text-3xl">{step.emoji}</span>
                  <span className="font-bold text-sm" style={{ color: step.color }}>{step.label}</span>
                  <span className="text-[10px] text-white/35 text-center leading-tight">{step.tools}</span>
                </motion.div>

                {/* Arrow connector */}
                {i < pipeline.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.12 }}
                    className="hidden sm:flex items-center"
                  >
                    <div className="flex items-center gap-0">
                      <div className="w-6 h-px bg-white/15" />
                      <div className="w-0 h-0 border-l-[6px] border-y-[4px] border-l-white/25 border-y-transparent" />
                    </div>
                  </motion.div>
                )}

                {/* Mobile vertical arrow */}
                {i < pipeline.length - 1 && (
                  <div className="sm:hidden w-px h-4 bg-white/15 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {bigDataTech.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.06 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="card p-4 group cursor-default shimmer-hover"
            >
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform">{tech.icon}</span>
                <div>
                  <div className="font-bold text-[13px] text-white/80 group-hover:text-orange-300 transition-colors leading-tight">{tech.name}</div>
                  <div className="text-[10px] text-white/30 mt-1 leading-snug">{tech.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
