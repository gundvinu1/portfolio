"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitMerge } from "lucide-react";
import { dataEngineeringTopics } from "@/data/portfolio";

const etlStages = [
  { label: "Extract", emoji: "📤", desc: "Source data", color: "#818CF8", bg: "rgba(129,140,248,0.15)" },
  { label: "Transform", emoji: "⚙️", desc: "Clean & reshape", color: "#F59E0B", bg: "rgba(245,158,11,0.15)" },
  { label: "Load", emoji: "📥", desc: "Target store", color: "#34D399", bg: "rgba(52,211,153,0.15)" },
  { label: "Analyze", emoji: "📊", desc: "Business insights", color: "#F472B6", bg: "rgba(244,114,182,0.15)" },
];

export default function DataEngineering() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="data-engineering" className="py-28 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(52,211,153,0.04) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 dot-bg opacity-25" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-pill mb-4" style={{ borderColor: "rgba(34,197,94,0.3)", background: "rgba(34,197,94,0.08)", color: "#34D399" }}>
            <GitMerge className="w-3 h-3" /> Data Engineering
          </div>
          <h2 className="section-heading text-white mb-3">
            Data <span className="gradient-text-accent">Engineering</span>
          </h2>
          <p className="text-white/40 max-w-2xl text-sm leading-relaxed">
            Knowledge of building scalable ETL workflows, data pipelines, and database solutions for enterprise analytics.
          </p>
        </motion.div>

        {/* ETL Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="card gradient-border p-8 mb-8"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-white/30 tracking-widest uppercase">ETL Pipeline Flow</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {etlStages.map((stage, i) => (
              <div key={stage.label} className="flex sm:flex-col sm:items-center items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 300 }}
                  whileHover={{ y: -8, scale: 1.08 }}
                  className="flex flex-col items-center gap-2 p-5 rounded-2xl border cursor-default"
                  style={{ background: stage.bg, borderColor: `${stage.color}30`, minWidth: 110 }}
                >
                  <span className="text-3xl">{stage.emoji}</span>
                  <span className="font-bold text-sm" style={{ color: stage.color }}>{stage.label}</span>
                  <span className="text-[11px] text-white/35 text-center">{stage.desc}</span>
                </motion.div>

                {i < etlStages.length - 1 && (
                  <>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ delay: 0.55 + i * 0.15 }}
                      className="hidden sm:flex items-center gap-1"
                    >
                      <div className="w-8 h-px bg-gradient-to-r from-white/20 to-white/10" />
                      <div className="w-0 h-0 border-l-[6px] border-y-[4px] border-l-white/25 border-y-transparent" />
                    </motion.div>
                    <div className="sm:hidden w-px h-4 bg-white/15" />
                  </>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Topics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {dataEngineeringTopics.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.06 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card p-5 group cursor-default shimmer-hover"
            >
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform">{topic.icon}</span>
                <div>
                  <div className="font-bold text-[13px] text-white/80 group-hover:text-green-300 transition-colors">{topic.title}</div>
                  <div className="text-[11px] text-white/30 mt-1 leading-snug">{topic.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
