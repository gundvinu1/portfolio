"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Layers } from "lucide-react";
import { techStackCloud } from "@/data/portfolio";

const categories = ["All", "Programming", "Backend", "Frontend", "Machine Learning", "Deep Learning", "Data Analytics", "Big Data", "DevOps", "Database", "AI Tools", "AI", "Visualization"];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? techStackCloud
    : techStackCloud.filter(t => t.category === activeCategory);

  return (
    <section id="tech-stack" className="py-28 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(79,70,229,0.05) 0%, transparent 70%)" }} />
        </div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="section-pill mb-4">
            <Layers className="w-3 h-3" /> Tech Ecosystem
          </div>
          <h2 className="section-heading text-white mb-3">
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-white/40 max-w-lg text-sm">
            26+ technologies across AI, data engineering, backend, and DevOps — color-coded by domain.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "text-white shadow-lg shadow-indigo-500/20"
                  : "glass border border-white/7 text-white/45 hover:text-white/70"
              }`}
              style={activeCategory === cat ? { background: "linear-gradient(135deg, #4F46E5, #7C3AED)" } : {}}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Tech cloud */}
        <motion.div layout className="flex flex-wrap justify-center gap-2.5">
          {filtered.map((tech, i) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: i * 0.025, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="group cursor-default"
            >
              <div
                className="relative px-4 py-2 rounded-xl glass border border-white/7 text-sm font-semibold text-white/60 flex items-center gap-2 transition-all duration-300"
                style={{ "--tech-color": tech.color } as React.CSSProperties}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = `${tech.color}50`;
                  el.style.boxShadow = `0 0 20px ${tech.color}25, 0 4px 12px rgba(0,0,0,0.3)`;
                  el.style.color = tech.color;
                  el.style.background = `${tech.color}10`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(255,255,255,0.07)";
                  el.style.boxShadow = "none";
                  el.style.color = "rgba(248,250,252,0.6)";
                  el.style.background = "rgba(18,18,22,0.65)";
                }}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0 transition-all"
                  style={{ background: tech.color, boxShadow: `0 0 6px ${tech.color}60` }} />
                {tech.name}
                {/* Category tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg text-[10px] text-white/50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"
                  style={{ background: "#0F0F14", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {tech.category}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-10 pt-8 border-t border-white/5"
        >
          {[
            { label: "Programming", color: "#818CF8" },
            { label: "Machine Learning", color: "#EC4899" },
            { label: "Data Analytics", color: "#38BDF8" },
            { label: "Big Data", color: "#FB923C" },
            { label: "DevOps", color: "#34D399" },
            { label: "Database", color: "#F59E0B" },
          ].map(({ label, color }) => (
            <span key={label} className="flex items-center gap-1.5 text-[11px] text-white/30">
              <span className="w-2 h-2 rounded-full" style={{ background: color }} />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
