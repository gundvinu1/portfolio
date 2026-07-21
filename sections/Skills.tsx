"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Zap } from "lucide-react";
import { skills } from "@/data/portfolio";
import { SpotlightCard } from "@/components/AnimatedSection";

const categoryColors: Record<string, { from: string; to: string; glow: string }> = {
  "Programming":           { from: "#4F46E5", to: "#7C3AED", glow: "rgba(79,70,229,0.18)" },
  "Artificial Intelligence": { from: "#7C3AED", to: "#EC4899", glow: "rgba(124,58,237,0.18)" },
  "Data Analytics":        { from: "#06B6D4", to: "#0EA5E9", glow: "rgba(6,182,212,0.18)" },
  "Big Data":              { from: "#F97316", to: "#EF4444", glow: "rgba(249,115,22,0.18)" },
  "Databases":             { from: "#22C55E", to: "#16A34A", glow: "rgba(34,197,94,0.18)" },
  "Backend Development":   { from: "#64748B", to: "#475569", glow: "rgba(100,116,139,0.18)" },
  "DevOps":                { from: "#0EA5E9", to: "#06B6D4", glow: "rgba(14,165,233,0.18)" },
  "AI Development Tools":  { from: "#F59E0B", to: "#F97316", glow: "rgba(245,158,11,0.18)" },
  "Soft Skills":           { from: "#EC4899", to: "#F43F5E", glow: "rgba(236,72,153,0.18)" },
};

function SkillBadge({ skill, delay, from, to }: { skill: string; delay: number; from: string; to: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.75, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.1, y: -2 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="skill-badge relative overflow-hidden cursor-default"
      style={hovered ? {
        borderColor: `${from}55`,
        background: `linear-gradient(135deg, ${from}18, ${to}14)`,
        color: from,
      } : {}}
    >
      {hovered && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
        />
      )}
      {skill}
    </motion.span>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0">
        {[
          { left: "10%", top: "20%", color: "rgba(79,70,229,0.07)" },
          { left: "70%", top: "60%", color: "rgba(6,182,212,0.06)" },
          { left: "40%", top: "80%", color: "rgba(139,92,246,0.05)" },
        ].map((o, i) => (
          <motion.div key={i}
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, delay: i * 1.5 }}
            className="absolute w-[450px] h-[450px] rounded-full blur-3xl"
            style={{ left: o.left, top: o.top, background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)` }}
          />
        ))}
        <div className="absolute inset-0 dot-bg opacity-25" />
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
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-3 h-3" />
            </motion.div>
            Technical Skills
          </motion.div>
          <h2 className="section-heading text-white mb-3">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-white/40 max-w-xl text-sm leading-relaxed">
            9 domains spanning AI/ML, data engineering, analytics, backend development and beyond.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, { icon, items }], catIdx) => {
            const colors = categoryColors[category] || { from: "#4F46E5", to: "#7C3AED", glow: "rgba(79,70,229,0.12)" };

            return (
              <SpotlightCard
                key={category}
                glowColor={colors.glow}
                className="card relative overflow-hidden group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: catIdx * 0.07 }}
                  whileHover={{ y: -5 }}
                  style={{ transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)" }}
                >
                  {/* Animated top color bar */}
                  <div className="relative h-0.5 w-full overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(90deg, ${colors.from}, ${colors.to})` }}
                    />
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: catIdx * 0.2 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                  </div>

                  {/* Animated glow on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 pointer-events-none rounded-[inherit]"
                    style={{ background: `radial-gradient(ellipse at top left, ${colors.glow} 0%, transparent 60%)` }}
                  />

                  <div className="p-6 relative">
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-5">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${colors.from}20, ${colors.to}20)`,
                          border: `1px solid ${colors.from}30`,
                        }}
                      >
                        {icon}
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-sm text-white">{category}</h3>
                        <p className="text-[10px] text-white/30 mt-0.5">{items.length} skills</p>
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: catIdx * 0.3 }}
                        className="ml-auto w-6 h-6 rounded-lg flex items-center justify-center"
                        style={{ background: `${colors.from}15`, border: `1px solid ${colors.from}25` }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: colors.from }} />
                      </motion.div>
                    </div>

                    {/* Skill badges with individual hover shimmer */}
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <SkillBadge
                          key={skill}
                          skill={skill}
                          delay={inView ? catIdx * 0.07 + i * 0.025 : 0}
                          from={colors.from}
                          to={colors.to}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
