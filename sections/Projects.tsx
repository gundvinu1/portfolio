"use client";

import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { GitFork, ExternalLink, BookOpen, FolderOpen, Sparkles } from "lucide-react";
import { projects, personalInfo } from "@/data/portfolio";

type ProjectFilter = "all" | "ai" | "backend" | "fullstack" | "data";

const filters: { id: ProjectFilter; label: string; icon: string }[] = [
  { id: "all", label: "All", icon: "✨" },
  { id: "ai", label: "AI / ML", icon: "🤖" },
  { id: "backend", label: "Backend", icon: "⚙️" },
  { id: "fullstack", label: "Full Stack", icon: "🌐" },
  { id: "data", label: "Data Science", icon: "📊" },
];

const gradients = [
  "from-[#4F46E5] via-[#7C3AED] to-[#C084FC]",
  "from-[#0EA5E9] via-[#06B6D4] to-[#4F46E5]",
  "from-[#10B981] via-[#059669] to-[#06B6D4]",
  "from-[#F97316] via-[#EF4444] to-[#EC4899]",
];

function ProjectCard({ project, i, inView }: {
  project: typeof projects[0];
  i: number;
  inView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [spotPos, setSpotPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const rotX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 300, damping: 30 });
  const rotY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 300, damping: 30 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(nx);
    mouseY.set(ny);
    setSpotPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX: rotX,
        rotateY: rotY,
        transformPerspective: 1000,
      }}
      whileHover={{ y: -8 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="card gradient-border overflow-hidden group relative cursor-default"
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 rounded-[inherit]"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${spotPos.x}% ${spotPos.y}%, rgba(99,102,241,0.1), transparent 60%)`,
        }}
      />

      {/* Banner */}
      <div className={`h-44 bg-gradient-to-br ${gradients[i % 4]} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/25" />

        {/* Animated scan line on banner */}
        <motion.div
          animate={{ top: ["-2%", "102%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)" }}
        />

        {/* Animated rings */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.08, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -right-10 -top-10 w-48 h-48 rounded-full border border-white/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -left-6 -bottom-6 w-32 h-32 rounded-full border border-white/8"
        />

        {/* Project icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-7xl filter drop-shadow-2xl"
          >
            {project.icon}
          </motion.span>
        </div>

        {/* Category badges */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {project.category.map((cat, ci) => (
            <motion.span
              key={cat}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + ci * 0.05 }}
              className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/40 text-white/80 backdrop-blur-sm border border-white/10 capitalize"
            >
              {cat}
            </motion.span>
          ))}
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="font-bold text-lg text-white group-hover:text-indigo-200 transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <p className="text-white/55 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.features.slice(0, 4).map((f, fi) => (
            <motion.span
              key={f}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 + fi * 0.04 }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-green-500/8 text-green-400 border border-green-500/15"
            >
              <Sparkles className="w-2.5 h-2.5" /> {f}
            </motion.span>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t, ti) => (
            <motion.span
              key={t}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.1 + ti * 0.03 }}
              whileHover={{ scale: 1.08, y: -1 }}
              className="tag text-[11px]"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 flex-wrap">
          {project.github && (
            <motion.a
              href={project.github} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg glass border border-white/8 text-white/60 hover:text-white hover:border-white/16 text-xs font-semibold transition-all"
            >
              <GitFork className="w-3.5 h-3.5" /> GitHub
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 hover:bg-indigo-500/25 text-xs font-semibold transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </motion.a>
          )}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/18 text-cyan-400 hover:bg-cyan-500/18 text-xs font-semibold transition-all"
          >
            <BookOpen className="w-3.5 h-3.5" /> Case Study
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<ProjectFilter>("all");

  const filtered = active === "all" ? projects : projects.filter(p => p.category.includes(active));

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 grid-bg opacity-25" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="section-pill mb-4">
            <FolderOpen className="w-3 h-3" /> Projects
          </div>
          <h2 className="section-heading text-white mb-3">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-white/40 max-w-lg text-sm leading-relaxed">
            Production-grade AI, data, and software engineering projects built with modern technologies.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map(f => (
            <motion.button
              key={f.id}
              onClick={() => setActive(f.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200 relative overflow-hidden ${
                active === f.id
                  ? "text-white shadow-lg shadow-indigo-500/20"
                  : "glass border border-white/7 text-white/50 hover:text-white/80"
              }`}
              style={active === f.id ? { background: "linear-gradient(135deg, #4F46E5, #7C3AED)" } : {}}
            >
              {active === f.id && (
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
                />
              )}
              <span>{f.icon}</span>
              <span className="relative">{f.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid lg:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} inView={inView} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <motion.a
            href={`https://github.com/${personalInfo.githubUsername}`}
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2, boxShadow: "0 4px 24px rgba(79,70,229,0.2)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 glass border border-white/8 text-white/50 hover:text-white hover:border-white/15 rounded-xl text-sm font-medium transition-all"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <GitFork className="w-4 h-4" />
            </motion.div>
            View all on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
