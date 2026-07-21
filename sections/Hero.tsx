"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { Download, Briefcase, Mail, ChevronDown, Code2, GitFork } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { FloatingParticles } from "@/components/AnimatedSection";

const roles = personalInfo.roles;

const floatingCards = [
  { icon: "🤖", label: "AI / ML", color: "#818CF8", bg: "rgba(79,70,229,0.18)", x: "72%", y: "18%", delay: 0 },
  { icon: "📊", label: "Data Analyst", color: "#38BDF8", bg: "rgba(6,182,212,0.18)", x: "78%", y: "52%", delay: 0.6 },
  { icon: "⚡", label: "Big Data", color: "#FB923C", bg: "rgba(251,146,60,0.18)", x: "88%", y: "33%", delay: 0.3 },
  { icon: "🔄", label: "Data Eng.", color: "#34D399", bg: "rgba(52,211,153,0.18)", x: "68%", y: "68%", delay: 0.9 },
  { icon: "💻", label: "Backend", color: "#C084FC", bg: "rgba(192,132,252,0.18)", x: "82%", y: "72%", delay: 1.2 },
];

const stats = [
  { value: "4+", label: "Live Projects", icon: "🚀" },
  { value: "8.10", label: "CGPA (Distinction)", icon: "🎓" },
  { value: "5+", label: "Tech Domains", icon: "⚡" },
  { value: "10+", label: "Technologies", icon: "🛠️" },
];

function TypewriterRole({ roles }: { roles: string[] }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const target = roles[idx];
    if (!del && text === target) {
      const t = setTimeout(() => setDel(true), 2200);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      const t = setTimeout(() => {
        setDel(false);
        setIdx(i => (i + 1) % roles.length);
      }, 0);
      return () => clearTimeout(t);
    }
    const speed = del ? 45 : 75;
    const t = setTimeout(() => {
      setText(del ? text.slice(0, -1) : target.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx, roles]);

  return (
    <span className="gradient-text font-extrabold">
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-0.5 text-indigo-400"
      >|</motion.span>
    </span>
  );
}

/** Animated orbiting ring */
function OrbitRing({ size, duration, reverse = false, color, opacity }: {
  size: number; duration: number; reverse?: boolean; color: string; opacity: number;
}) {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="absolute rounded-full border pointer-events-none"
      style={{
        width: size, height: size,
        top: "50%", left: "50%",
        marginTop: -size / 2, marginLeft: -size / 2,
        borderColor: color,
        opacity,
      }}
    />
  );
}

/** Animated profile photo with glow frame */
function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center"
    >
      {/* Outer glow ring — conic rotating */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{
          width: 340,
          height: 340,
          background: "conic-gradient(from 0deg, #4F46E5, #06B6D4, #22C55E, #F97316, #C084FC, #4F46E5)",
          filter: "blur(18px)",
          opacity: 0.45,
        }}
      />

      {/* Secondary slower reverse ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{
          width: 310,
          height: 310,
          background: "conic-gradient(from 180deg, #818CF8, #38BDF8, #34D399, #818CF8)",
          filter: "blur(24px)",
          opacity: 0.25,
        }}
      />

      {/* Orbit dots */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute"
        style={{ width: 320, height: 320 }}
      >
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-indigo-400"
          style={{ top: -6, left: "50%", marginLeft: -6, boxShadow: "0 0 10px #818CF8" }}
        />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        className="absolute"
        style={{ width: 290, height: 290 }}
      >
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-cyan-400"
          style={{ bottom: -4, left: "50%", marginLeft: -4, boxShadow: "0 0 8px #38BDF8" }}
        />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute"
        style={{ width: 330, height: 330 }}
      >
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full bg-emerald-400"
          style={{ top: "50%", right: -5, marginTop: -5, boxShadow: "0 0 8px #34D399" }}
        />
      </motion.div>

      {/* Photo container */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
        whileHover={{ scale: 1.03 }}
      >
        {/* Gradient border ring */}
        <div
          className="rounded-full p-[3px]"
          style={{
            background: "linear-gradient(135deg, #4F46E5, #06B6D4, #22C55E, #C084FC)",
          }}
        >
          <div className="rounded-full p-[3px] bg-[#09090B]">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden">
              <Image
                src="/vinayak.jpg"
                alt="Vinayak Rajendra Gund"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 640px) 224px, 256px"
              />
              {/* Overlay shimmer on hover */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(79,70,229,0.12), rgba(6,182,212,0.08))",
                }}
              />
            </div>
          </div>
        </div>

        {/* Status badge pinned to photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border border-green-500/30 whitespace-nowrap"
          style={{ background: "rgba(9,9,11,0.85)" }}
        >
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-green-400"
            style={{ boxShadow: "0 0 8px rgba(34,197,94,0.8)" }}
          />
          <span className="text-[11px] font-semibold text-white/80">Open to work</span>
        </motion.div>

        {/* Experience badge — top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: -8 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 1.4, type: "spring", stiffness: 300 }}
          className="absolute -top-2 -right-4 px-2.5 py-1 rounded-lg backdrop-blur-md border border-indigo-500/30 text-center"
          style={{ background: "rgba(79,70,229,0.2)" }}
        >
          <div className="text-[10px] font-bold text-indigo-300">1 yr</div>
          <div className="text-[9px] text-white/40">Experience</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const orbX = useTransform(smoothX, [-1, 1], [-25, 25]);
  const orbY = useTransform(smoothY, [-1, 1], [-20, 20]);
  const cardX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const cardY = useTransform(smoothY, [-1, 1], [-8, 8]);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, 80]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Deep space background */}
      <div className="absolute inset-0 bg-[#09090B]">
        <div className="absolute inset-0 grid-bg opacity-50" />

        {/* Animated orbs with parallax */}
        {[
          { w: 700, h: 700, x: "-10%", y: "-5%", color: "rgba(79,70,229,0.14)", dur: 8 },
          { w: 500, h: 500, x: "60%", y: "20%", color: "rgba(6,182,212,0.10)", dur: 10 },
          { w: 400, h: 400, x: "40%", y: "60%", color: "rgba(139,92,246,0.10)", dur: 12 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            style={{
              x: orbX,
              y: orbY,
              width: orb.w,
              height: orb.h,
              left: orb.x,
              top: orb.y,
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: orb.dur, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
            className="absolute rounded-full blur-3xl"
          />
        ))}

        {/* Morphing blob accent */}
        <motion.div
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            width: 320, height: 320,
            right: "5%", bottom: "15%",
            background: "radial-gradient(circle, rgba(79,70,229,0.09) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Floating particles */}
      <FloatingParticles count={28} colors={["#4F46E5", "#06B6D4", "#8B5CF6", "#22C55E"]} />

      {/* Orbiting rings (centered on hero) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <OrbitRing size={900} duration={40} color="rgba(79,70,229,0.06)" opacity={1} />
        <OrbitRing size={650} duration={28} reverse color="rgba(6,182,212,0.07)" opacity={1} />
        <OrbitRing size={400} duration={18} color="rgba(139,92,246,0.06)" opacity={1} />
      </div>

      {/* Floating role cards — visible on large screens */}
      <motion.div
        style={{ x: cardX, y: cardY }}
        className="absolute inset-0 pointer-events-none"
      >
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
            transition={{
              opacity: { delay: 1.2 + card.delay, duration: 0.4 },
              scale: { delay: 1.2 + card.delay, duration: 0.4, type: "spring", stiffness: 300 },
              y: { delay: 1.6 + card.delay, duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute hidden xl:flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-sm border border-white/10"
            style={{ left: card.x, top: card.y, background: card.bg }}
          >
            {/* Pulse dot */}
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: card.delay }}
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
              style={{ background: card.color, boxShadow: `0 0 6px ${card.color}` }}
            />
            <span className="text-lg">{card.icon}</span>
            <span className="text-xs font-semibold text-white/80">{card.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Two-column layout: text left, photo right */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] py-20 gap-12 lg:gap-8">

          {/* ── LEFT COLUMN: Text content ── */}
          <div className="flex flex-col items-start max-w-2xl w-full">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-indigo-500/25 mb-6"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(34,197,94,0.6)]"
              />
              <span className="text-[13px] text-white/60 font-medium">Available for opportunities</span>
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/20"
              >
                Pune, India
              </motion.span>
            </motion.div>

            {/* Greeting + Name */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3"
            >
              <motion.p
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white/40 text-lg font-medium mb-1 tracking-wide"
              >
                Hi, I&apos;m
              </motion.p>
              <h1 className="section-heading text-white leading-[1.05]">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block"
                >
                  Vinayak{" "}
                </motion.span>
                <br className="sm:hidden" />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="gradient-text inline-block"
                >
                  Rajendra Gund
                </motion.span>
              </h1>
            </motion.div>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-2xl sm:text-3xl font-bold text-white/90 mb-5 min-h-[1.4em] flex items-center"
            >
              <TypewriterRole roles={roles} />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-white/55 text-base sm:text-lg max-w-xl leading-[1.7] mb-8"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <motion.a
                href="/resume.pdf" target="_blank"
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 8px 30px rgba(79,70,229,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white"
                style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)", boxShadow: "0 4px 24px rgba(79,70,229,0.35)" }}
              >
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Download className="w-4 h-4" />
                </motion.span>
                Download Resume
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -3, borderColor: "rgba(79,70,229,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white/80 glass border border-white/10 hover:text-white transition-all"
              >
                <Code2 className="w-4 h-4" /> View Projects
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-cyan-300 glass border border-cyan-500/25 hover:border-cyan-500/50 hover:bg-cyan-500/8 transition-all"
              >
                <Mail className="w-4 h-4" /> Hire Me
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.85 + i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.06, y: -4, boxShadow: "0 8px 24px rgba(79,70,229,0.2)" }}
                  className="glass border border-white/7 rounded-2xl p-4 text-center cursor-default group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(135deg, rgba(79,70,229,0.08), rgba(6,182,212,0.06))" }}
                  />
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                      className="text-xl mb-1"
                    >
                      {s.icon}
                    </motion.div>
                    <div className="stat-num">{s.value}</div>
                    <div className="text-[10px] text-white/35 mt-1 font-medium leading-tight">{s.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-3 mt-8"
            >
              {[
                { href: personalInfo.github, label: "GitHub", icon: <GitFork className="w-4 h-4" />, color: "#C084FC" },
                { href: personalInfo.linkedin, label: "LinkedIn", icon: <Briefcase className="w-4 h-4" />, color: "#818CF8" },
                { href: `mailto:${personalInfo.email}`, label: "Email", icon: <Mail className="w-4 h-4" />, color: "#38BDF8" },
              ].map(({ href, label, icon, color }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.1, type: "spring", stiffness: 300 }}
                  whileHover={{ scale: 1.15, y: -3, boxShadow: `0 4px 16px ${color}30` }}
                  className="w-9 h-9 rounded-xl glass border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:border-indigo-500/30 transition-all"
                  aria-label={label}
                  style={{ "--hover-color": color } as React.CSSProperties}
                >
                  {icon}
                </motion.a>
              ))}
              <div className="w-px h-4 bg-white/10 mx-1" />
              <span className="text-xs text-white/25 font-medium">{personalInfo.location}</span>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Profile photo ── */}
          <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
            <ProfilePhoto />
          </div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-white/25 hover:text-white/50 transition-colors"
        >
          <span className="text-[10px] font-medium tracking-widest uppercase">Explore</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
        {/* Scroll line animation */}
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>
    </section>
  );
}
