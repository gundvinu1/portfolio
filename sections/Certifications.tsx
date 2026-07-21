"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star, CheckCircle2 } from "lucide-react";
import { certifications, achievements } from "@/data/portfolio";

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-28 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 dot-bg opacity-25" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-pill mb-4" style={{ borderColor: "rgba(245,158,11,0.3)", background: "rgba(245,158,11,0.08)", color: "#F59E0B" }}>
            <Award className="w-3 h-3" /> Achievements
          </div>
          <h2 className="section-heading text-white mb-3">
            Honors &{" "}
            <span className="gradient-text-warm">Certifications</span>
          </h2>
        </motion.div>

        {/* Achievements */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {achievements.map(({ title, icon, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 280 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="card relative overflow-hidden text-center p-6"
            >
              {/* Gradient glow overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${color} rounded-[20px] opacity-5`} />

              <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center text-2xl mb-4 bg-gradient-to-br ${color}`}
                style={{ boxShadow: `0 8px 24px rgba(0,0,0,0.3)` }}>
                {icon}
              </div>
              <h3 className="font-bold text-sm text-white mb-2 leading-tight">{title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map(({ title, icon, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.07 }}
              whileHover={{ x: 5 }}
              className="card flex items-center gap-4 p-5 shimmer-hover"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 bg-gradient-to-br ${color}`}
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.25)" }}>
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-white leading-snug truncate">{title}</div>
                <div className="flex items-center gap-1 mt-1.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-[10px] text-white/25 ml-1">Certified</span>
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-green-400/50 flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
