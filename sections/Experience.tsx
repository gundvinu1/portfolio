"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, CheckCircle2, Building2 } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 dot-bg opacity-30" />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-pill mb-4">
            <Briefcase className="w-3 h-3" /> Experience
          </div>
          <h2 className="section-heading text-white">
            Professional <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative pl-8 sm:pl-12">
          {/* Animated timeline line */}
          <div className="timeline-connector">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="absolute inset-0 origin-top"
              style={{ background: "linear-gradient(to bottom, #38bdf8, rgba(52,211,153,0.65), transparent)" }}
            />
          </div>

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.2 }}
                className="relative"
              >
                {/* Animated dot with pulse ring */}
                <div className="absolute -left-8 sm:-left-12 top-7 z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.2, type: "spring", stiffness: 400, damping: 20 }}
                    className="w-5 h-5 rounded-full border-2 border-[#09090B] shadow-lg relative"
                    style={{
                      background: i === 0
                        ? "linear-gradient(135deg, #4F46E5, #7C3AED)"
                        : "linear-gradient(135deg, #06B6D4, #0EA5E9)"
                    }}
                  >
                    {/* Pulse ring */}
                    {i === 0 && (
                      <motion.div
                        animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full"
                        style={{ background: "rgba(79,70,229,0.4)" }}
                      />
                    )}
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="card gradient-border overflow-hidden"
                >
                  {/* Color bar */}
                  <div className="h-1 w-full"
                    style={{ background: i === 0 ? "linear-gradient(90deg, #4F46E5, #7C3AED, #06B6D4)" : "linear-gradient(90deg, #06B6D4, #0EA5E9, #22C55E)" }} />

                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                          style={{ background: i === 0 ? "rgba(79,70,229,0.15)" : "rgba(6,182,212,0.15)" }}>
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <Building2 className="w-3.5 h-3.5 text-white/30" />
                            <span className="text-sm font-semibold"
                              style={{ color: i === 0 ? "#818CF8" : "#38BDF8" }}>
                              {exp.company}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold text-white"
                          style={{ background: i === 0 ? "linear-gradient(135deg, #4F46E5, #7C3AED)" : "linear-gradient(135deg, #0284C7, #06B6D4)" }}>
                          {exp.type}
                        </span>
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium bg-white/5 border border-white/8 text-white/50">
                          <Calendar className="w-3 h-3" /> {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
                      {exp.responsibilities.map((r) => (
                        <motion.div key={r} className="flex items-start gap-2.5" whileHover={{ x: 3 }}>
                          <CheckCircle2 className="w-4 h-4 text-green-400/70 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-white/55 leading-relaxed">{r}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {exp.tech.map(t => (
                        <span key={t} className="tag text-[11px]">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
