"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";

const phrases = ["AI/ML Engineer", "Data Analyst", "Software Developer", "Big Data Engineer"];

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  dur: 3 + Math.random() * 4,
  delay: Math.random() * 3,
  color: ["#4F46E5", "#06B6D4", "#8B5CF6", "#22C55E"][i % 4],
}));

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); setTimeout(() => setLoading(false), 700); return 100; }
        return Math.min(p + Math.random() * 12 + 4, 100);
      });
    }, 80);
    const phraseTimer = setInterval(() => setPhraseIdx(i => (i + 1) % phrases.length), 900);
    return () => { clearInterval(interval); clearInterval(phraseTimer); };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08, filter: "blur(4px)" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[999] bg-[#09090B] flex items-center justify-center overflow-hidden"
        >
          {/* Animated floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                  background: p.color,
                  opacity: 0.4,
                }}
                animate={{
                  y: [0, -24, 6, -12, 0],
                  x: [0, 10, -6, 4, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: p.dur,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: p.delay,
                }}
              />
            ))}
          </div>

          {/* Animated background orbs */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 70%)" }}
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.25, 0.08] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)" }}
          />

          {/* Morphing blob */}
          <motion.div
            animate={{
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 60% 70% 40% / 50% 60% 30% 60%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
              ],
              scale: [1, 1.12, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[300px] h-[300px] opacity-10"
            style={{
              background: "linear-gradient(135deg, #4F46E5, #06B6D4, #8B5CF6)",
              filter: "blur(40px)",
            }}
          />

          {/* Grid overlay */}
          <div className="absolute inset-0 grid-bg opacity-25" />

          {/* Orbit rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[
              { size: 280, dur: 12, opacity: 0.08, color: "rgba(79,70,229,1)", reverse: false },
              { size: 200, dur: 8, opacity: 0.1, color: "rgba(6,182,212,1)", reverse: true },
              { size: 140, dur: 6, opacity: 0.07, color: "rgba(139,92,246,1)", reverse: false },
            ].map((ring, i) => (
              <motion.div
                key={i}
                animate={{ rotate: ring.reverse ? -360 : 360 }}
                transition={{ duration: ring.dur, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border"
                style={{
                  width: ring.size,
                  height: ring.size,
                  borderColor: ring.color,
                  opacity: ring.opacity,
                }}
              />
            ))}

            {/* Orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute"
              style={{ width: 200, height: 200 }}
            >
              <motion.div
                className="absolute w-2 h-2 rounded-full bg-cyan-400"
                style={{ top: -4, left: "50%", marginLeft: -4, boxShadow: "0 0 8px rgba(6,182,212,0.8)" }}
              />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute"
              style={{ width: 280, height: 280 }}
            >
              <motion.div
                className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400"
                style={{ top: -3, left: "50%", marginLeft: -3, boxShadow: "0 0 6px rgba(79,70,229,0.8)" }}
              />
            </motion.div>
          </div>

          <AnimatePresence>
            {showContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex flex-col items-center gap-8 px-8"
              >
                {/* Logo */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                  className="relative"
                >
                  {/* Conic glow */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: "conic-gradient(from 0deg, #4F46E5, #06B6D4, #22C55E, #F97316, #4F46E5)",
                      filter: "blur(10px)",
                      opacity: 0.7,
                      transform: "scale(1.2)",
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-2xl"
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Code2 className="w-10 h-10 text-white" />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <h1 className="text-3xl font-extrabold text-white tracking-tight">Vinayak Rajendra Gund</h1>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={phraseIdx}
                      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                      transition={{ duration: 0.3 }}
                      className="text-sm font-semibold mt-1 gradient-text"
                    >
                      {phrases[phraseIdx]}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* Progress bar */}
                <div className="w-72 space-y-2">
                  <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div
                      className="h-full rounded-full relative"
                      style={{
                        background: "linear-gradient(90deg, #4F46E5, #06B6D4, #22C55E)",
                        width: `${progress}%`,
                      }}
                      transition={{ duration: 0.15 }}
                    >
                      {/* Shimmer on progress bar */}
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                  <div className="flex justify-between text-[10px] text-white/20 font-mono">
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Loading portfolio
                    </motion.span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                </div>

                {/* Animated dots */}
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map(i => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [0.5, 1.3, 0.5],
                        opacity: [0.3, 1, 0.3],
                        backgroundColor: ["#4F46E5", "#06B6D4", "#8B5CF6", "#22C55E"][i],
                      }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      className="w-2 h-2 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
