"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { education } from "@/data/portfolio";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-28 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-pill mb-4">
            <GraduationCap className="w-3 h-3" /> Education
          </div>
          <h2 className="section-heading text-white">
            Academic <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-12">
          {/* Vertical line */}
          <div className="timeline-connector" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.18 }}
                className="relative"
              >
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.18, type: "spring", stiffness: 400 }}
                  className="absolute -left-8 sm:-left-12 top-6 w-5 h-5 rounded-full border-2 border-[#09090B] z-10 shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${i === 0 ? "#4F46E5,#7C3AED" : i === 1 ? "#06B6D4,#0EA5E9" : "#22C55E,#16A34A"})` }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="card gradient-border p-6 sm:p-8 shimmer-hover"
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl mt-0.5">{edu.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-white leading-tight">{edu.degree}</h3>
                        {edu.branch && (
                          <p className="text-sm font-semibold mt-0.5"
                            style={{ color: i === 0 ? "#818CF8" : i === 1 ? "#38BDF8" : "#34D399" }}>
                            {edu.branch}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white"
                        style={{ background: `linear-gradient(135deg, ${i === 0 ? "#4F46E5,#7C3AED" : i === 1 ? "#0284C7,#06B6D4" : "#16A34A,#22C55E"})` }}>
                        {edu.status}
                      </span>
                      {edu.cgpa && (
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-yellow-500/15 text-yellow-400 border border-yellow-500/25">
                          <Award className="w-3 h-3" /> {edu.cgpa}
                        </span>
                      )}
                      {edu.percentage && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-green-500/15 text-green-400 border border-green-500/25">
                          {edu.percentage}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Info grid */}
                  <div className="grid sm:grid-cols-3 gap-2 mb-4">
                    <div className="flex items-center gap-2 text-white/45 text-xs">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-white/25" />
                      <span className="truncate">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/45 text-xs">
                      <GraduationCap className="w-3.5 h-3.5 flex-shrink-0 text-white/25" />
                      <span className="truncate">{edu.university}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/45 text-xs">
                      <Calendar className="w-3.5 h-3.5 flex-shrink-0 text-white/25" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed">{edu.description}</p>

                  {edu.classification && (
                    <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                      <Award className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="text-xs font-bold text-indigo-300">{edu.classification}</span>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
