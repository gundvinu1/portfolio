"use client";

import { useMemo, useState, type ComponentType, type FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSection, StaggerContainer, staggerItem, MagneticCard, CountUp } from "@/components/AnimatedSection";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  FolderOpen,
  GitFork,
  GraduationCap,
  Layers,
  Link2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Server,
  Sparkles,
} from "lucide-react";
import {
  achievements,
  bigDataTech,
  certifications,
  dataAnalyticsSkills,
  dataAnalyticsTools,
  dataEngineeringTopics,
  education,
  experience,
  interests,
  personalInfo,
  projects,
  skills,
  techStackCloud,
} from "@/data/portfolio";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ProjectFilter = "all" | "ai" | "backend" | "fullstack" | "data";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  icon: ComponentType<{ className?: string }>;
};

const projectFilters: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI / ML" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "data", label: "Data" },
];

const heroStats = [
  { value: "4+", label: "Applied projects", numVal: 4, suffix: "+" },
  { value: "8.10", label: "CGPA", numVal: 810, suffix: "" },
  { value: "5+", label: "Engineering domains", numVal: 5, suffix: "+" },
  { value: "25+", label: "Tools and technologies", numVal: 25, suffix: "+" },
];

const projectIcons = [Server, Brain, BarChart3, Database];

const contactInitialState: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function SectionHeader({ eyebrow, title, description, icon: Icon }: SectionHeaderProps) {
  return (
    <AnimatedSection className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
      <div className="section-pill mb-4">
        <Icon className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="section-heading text-slate-900 dark:text-white">{title}</h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
          {description}
        </p>
      ) : null}
    </AnimatedSection>
  );
}

function validateContact(form: ContactForm) {
  const errors: Partial<Record<keyof ContactForm, string>> = {};

  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) errors.email = "Please enter your email.";
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Please enter a valid email.";
  if (!form.subject.trim()) errors.subject = "Please add a subject.";
  if (!form.message.trim()) errors.message = "Please write a message.";

  return errors;
}

export default function ProfessionalPortfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [form, setForm] = useState<ContactForm>(contactInitialState);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [sent, setSent] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category.includes(activeFilter));
  }, [activeFilter]);

  const groupedTech = useMemo(() => {
    const priority = ["Programming", "Backend", "Frontend", "Machine Learning", "Data Analytics", "Big Data", "Database", "DevOps"];
    return priority
      .map((category) => ({
        category,
        items: techStackCloud.filter((item) => item.category === category),
      }))
      .filter((group) => group.items.length > 0);
  }, []);

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSent(false);
  };

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateContact(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(contactInitialState);
  };

  return (
    <main className="relative overflow-hidden">
      <section id="hero" className="relative border-b border-slate-200/30 pt-24 dark:border-white/8 sm:pt-32 lg:min-h-[92vh]">
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="container-shell relative z-10 grid items-center gap-8 py-10 sm:gap-10 sm:py-14 lg:min-h-[calc(92vh-7rem)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-3 py-1.5 text-xs font-semibold leading-5 text-emerald-600 dark:text-emerald-300 sm:mb-6"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-emerald-400"
              />
              Fresher — Open to Internships &amp; Entry-level Roles
            </motion.div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
              Portfolio
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl break-words text-[clamp(2.35rem,12vw,4.75rem)] font-semibold leading-[1.05] text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-5 max-w-2xl text-lg leading-8 text-slate-500 dark:text-slate-300 sm:text-xl"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
            >
              <a href={personalInfo.resumeUrl} target="_blank" className="btn-primary w-full sm:w-auto" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Resume
              </a>
              <a href="#projects" className="btn-secondary w-full sm:w-auto">
                <FolderOpen className="h-4 w-4" />
                View Projects
              </a>
              <a href={`mailto:${personalInfo.email}`} className="btn-secondary w-full sm:w-auto">
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-col items-start gap-3 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-500" />
                {personalInfo.location}
              </span>
              <a className="inline-flex items-center gap-2 hover:text-slate-800 dark:hover:text-white" href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <GitFork className="h-4 w-4 text-cyan-500" />
                GitHub
              </a>
              <a className="inline-flex items-center gap-2 hover:text-slate-800 dark:hover:text-white" href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Link2 className="h-4 w-4 text-cyan-500" />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: Profile photo + stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-5"
          >
            {/* Photo */}
            <div className="relative flex items-center justify-center">
              {/* Conic rotating glow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full"
                style={{
                  width: 310,
                  height: 310,
                  background: "conic-gradient(from 0deg, #4F46E5, #06B6D4, #22C55E, #F97316, #C084FC, #4F46E5)",
                  filter: "blur(20px)",
                  opacity: 0.35,
                }}
              />
              {/* Second reverse glow */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full"
                style={{
                  width: 280,
                  height: 280,
                  background: "conic-gradient(from 180deg, #818CF8, #38BDF8, #34D399, #818CF8)",
                  filter: "blur(28px)",
                  opacity: 0.18,
                }}
              />

              {/* Orbiting dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute"
                style={{ width: 300, height: 300 }}
              >
                <motion.div
                  className="absolute w-3 h-3 rounded-full"
                  style={{ top: -6, left: "50%", marginLeft: -6, background: "#818CF8", boxShadow: "0 0 10px #818CF8" }}
                />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                className="absolute"
                style={{ width: 270, height: 270 }}
              >
                <motion.div
                  className="absolute w-2.5 h-2.5 rounded-full"
                  style={{ bottom: -5, left: "50%", marginLeft: -5, background: "#38BDF8", boxShadow: "0 0 8px #38BDF8" }}
                />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute"
                style={{ width: 310, height: 310 }}
              >
                <motion.div
                  className="absolute w-2.5 h-2.5 rounded-full"
                  style={{ top: "50%", right: -5, marginTop: -5, background: "#34D399", boxShadow: "0 0 8px #34D399" }}
                />
              </motion.div>

              {/* Photo with gradient border */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
                whileHover={{ scale: 1.03 }}
              >
                <div
                  className="rounded-full p-[3px]"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4, #22C55E, #C084FC)" }}
                >
                  <div className="rounded-full p-[3px] bg-white dark:bg-[#09090B]">
                    <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden">
                      <Image
                        src="/vinayak.jpg"
                        alt="Vinayak Rajendra Gund"
                        fill
                        className="object-cover object-top"
                        priority
                        sizes="(max-width: 640px) 208px, 240px"
                      />
                    </div>
                  </div>
                </div>

                {/* Open to work badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.0, type: "spring", stiffness: 300 }}
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-400/30 backdrop-blur-md whitespace-nowrap"
                  style={{ background: "rgba(9,9,11,0.9)" }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-emerald-400"
                    style={{ boxShadow: "0 0 8px rgba(52,211,153,0.8)" }}
                  />
                  <span className="text-[11px] font-semibold text-white/85">Open to work</span>
                </motion.div>

                {/* Experience badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
                  className="absolute -top-2 -right-4 px-2.5 py-1.5 rounded-xl border border-emerald-500/30 text-center backdrop-blur-md"
                  style={{ background: "rgba(16,185,129,0.2)" }}
                >
                  <div className="text-xs font-bold text-emerald-300">🎓 Fresher</div>
                  <div className="text-[9px] text-emerald-200/60">Open to Intern</div>
                </motion.div>
              </motion.div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {heroStats.map((stat, i) => (
                <MagneticCard
                  key={stat.label}
                  className="card cursor-default p-3 sm:p-4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1, type: "spring", stiffness: 260 }}
                  >
                    <div className="text-xl font-bold text-cyan-600 dark:text-cyan-300 sm:text-2xl">
                      {stat.label === "CGPA" ? (
                        <span>8.10</span>
                      ) : (
                        <CountUp value={stat.numVal} suffix={stat.suffix} />
                      )}
                    </div>
                    <div className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{stat.label}</div>
                  </motion.div>
                </MagneticCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section-block">
        <div className="container-shell">
          <SectionHeader
            eyebrow="About"
            title="AI, data, and software engineering in one practical workflow."
            description={personalInfo.about}
            icon={Sparkles}
          />

          <StaggerContainer className="grid gap-3 sm:gap-4 lg:grid-cols-3">
            {personalInfo.roles.map((role) => (
              <motion.div key={role} variants={staggerItem} className="card p-4 sm:p-5">
                <CheckCircle2 className="mb-4 h-5 w-5 text-emerald-500 dark:text-emerald-300" />
                <h3 className="font-semibold text-slate-900 dark:text-white">{role}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Applied experience across production workflows, analytics, automation, and scalable software systems.
                </p>
              </motion.div>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.2} className="mt-8 flex flex-wrap gap-2">
            {interests.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </AnimatedSection>
        </div>
      </section>


      <section id="experience" className="section-block border-y border-slate-200/40 dark:border-white/8 bg-slate-50/50 dark:bg-white/[0.015]">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Experience"
            title="Professional timeline"
            description="Work history focused on software delivery, machine learning workflows, and production-ready backend systems."
            icon={Briefcase}
          />

          <StaggerContainer className="space-y-4">
            {experience.map((item) => (
              <motion.article key={`${item.role}-${item.company}`} variants={staggerItem} className="card p-4 sm:p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-sm text-cyan-600 dark:text-cyan-300">
                      <Building2 className="h-4 w-4" />
                      {item.company}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] px-3 py-1 text-slate-600 dark:text-slate-300">
                      {item.type}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] px-3 py-1 text-slate-600 dark:text-slate-300">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.duration}
                    </span>
                  </div>
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {item.responsibilities.map((responsibility) => (
                    <div key={responsibility} className="flex gap-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-300" />
                      {responsibility}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-200 dark:border-white/8 pt-5">
                  {item.tech.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="projects" className="section-block">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Projects"
            title="Selected applied work"
            description="A focused set of AI, data, backend, and automation projects with clear engineering outcomes."
            icon={FolderOpen}
          />

          <AnimatedSection className="mb-8 flex flex-wrap justify-center gap-2">
            {projectFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id ? "filter-tab filter-tab-active" : "filter-tab"}
              >
                {filter.label}
              </button>
            ))}
          </AnimatedSection>

          <StaggerContainer className="grid gap-5 lg:grid-cols-2">
            {filteredProjects.map((project, index) => {
              const Icon = projectIcons[index % projectIcons.length];
              return (
              <motion.article key={project.id} variants={staggerItem} className="card flex flex-col p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex min-w-0 gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-600 dark:text-cyan-300 sm:h-12 sm:w-12">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white sm:text-lg">{project.title}</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.category.map((category) => (
                            <span key={category} className="tag capitalize">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link shrink-0"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">{project.description}</p>

                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {project.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-300" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-200 dark:border-white/8 pt-5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
                        <GitFork className="h-4 w-4" />
                        Repository
                      </a>
                    ) : null}
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </a>
                    ) : null}
                  </div>
                </motion.article>
              );
            })}
          </StaggerContainer>
        </div>
      </section>


      <section id="skills" className="section-block border-y border-slate-200/40 dark:border-white/8 bg-slate-50/50 dark:bg-white/[0.015]">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Skills"
            title="Technical capability map"
            description="Organized by practical delivery areas instead of decorative skill clouds."
            icon={Layers}
          />

          <StaggerContainer className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Object.entries(skills).map(([category, group]) => (
              <motion.div key={category} variants={staggerItem} className="card p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{category}</h3>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/8 px-2.5 py-1 text-[10px] font-semibold text-cyan-600 dark:text-cyan-300">
                    {group.items.length}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="skill-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

          <StaggerContainer className="mt-8 grid gap-4 lg:grid-cols-4">
            {groupedTech.map((group) => (
              <motion.div key={group.category} variants={staggerItem} className="card p-4 sm:p-5">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{group.category}</h3>
                <div className="mt-4 space-y-3">
                  {group.items.slice(0, 5).map((item) => (
                    <div key={item.name} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                      {item.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="education" className="section-block">
        <div className="container-shell max-w-5xl">
          <SectionHeader
            eyebrow="Education"
            title="Academic foundation"
            description="Formal education in AI/ML with strong supporting coursework in data, software, and analytical problem solving."
            icon={GraduationCap}
          />

          <StaggerContainer className="space-y-4">
            {education.map((item) => (
              <motion.article key={item.degree} variants={staggerItem} className="card p-4 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.degree}</h3>
                    {item.branch ? <p className="mt-1 text-sm font-medium text-cyan-600 dark:text-cyan-300">{item.branch}</p> : null}
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.institution}</p>
                    <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">{item.university}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] px-3 py-1 text-slate-600 dark:text-slate-300">
                      {item.duration}
                    </span>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/8 px-3 py-1 text-emerald-600 dark:text-emerald-300">
                      {item.status}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.cgpa ? <span className="tag">CGPA {item.cgpa}</span> : null}
                  {item.percentage ? <span className="tag">{item.percentage}</span> : null}
                  {item.classification ? <span className="tag">{item.classification}</span> : null}
                </div>
              </motion.article>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="data-expertise" className="section-block border-y border-slate-200/40 dark:border-white/8 bg-slate-50/50 dark:bg-white/[0.015]">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Data Expertise"
            title="Analytics, big data, and engineering coverage"
            description="A practical view of the data skills that support AI and backend delivery."
            icon={BarChart3}
          />

          <StaggerContainer className="grid gap-5 lg:grid-cols-3">
            <motion.div variants={staggerItem} className="card p-4 sm:p-6">
              <BarChart3 className="mb-5 h-7 w-7 text-cyan-600 dark:text-cyan-300" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Analytics and BI</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                Data cleaning, EDA, dashboarding, statistics, and business reporting.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[...dataAnalyticsSkills.slice(0, 6), ...dataAnalyticsTools.slice(0, 5)].map((item) => (
                  <span key={item} className="skill-badge">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="card p-4 sm:p-6">
              <Database className="mb-5 h-7 w-7 text-cyan-600 dark:text-cyan-300" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Big Data</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                Distributed storage, processing systems, streaming concepts, and data warehouse fundamentals.
              </p>
              <div className="mt-5 grid gap-2">
                {bigDataTech.slice(0, 6).map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/[0.03] px-3 py-2">
                    <span className="text-sm text-slate-800 dark:text-white">{item.name}</span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">{item.icon}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="card p-4 sm:p-6">
              <Code2 className="mb-5 h-7 w-7 text-cyan-600 dark:text-cyan-300" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Data Engineering</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                ETL workflows, data modeling, SQL optimization, validation, monitoring, and integration.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {dataEngineeringTopics.slice(0, 8).map((item) => (
                  <span key={item.title} className="skill-badge">
                    {item.title}
                  </span>
                ))}
              </div>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>

      <section id="certifications" className="section-block">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Credentials"
            title="Achievements and certifications"
            description="Highlights that support the portfolio and show continued technical development."
            icon={Award}
          />

          <StaggerContainer className="grid gap-4 lg:grid-cols-4">
            {achievements.map((item) => (
              <motion.div key={item.title} variants={staggerItem} className="card p-4 sm:p-5">
                <Award className="mb-4 h-5 w-5 text-cyan-600 dark:text-cyan-300" />
                <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>

          <StaggerContainer className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item) => (
              <motion.div key={item.title} variants={staggerItem} className="card flex items-center gap-3 p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 dark:text-emerald-300" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.title}</span>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="contact" className="section-block border-t border-slate-200/40 dark:border-white/8 bg-slate-50/50 dark:bg-white/[0.015]">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Contact"
            title="Start a focused conversation"
            description="Use the form or direct links below for internships, entry-level roles, freelance work, and collaboration."
            icon={MessageSquare}
          />

          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <AnimatedSection direction="left" className="space-y-4">
              {[
                { Icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { Icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
                { Icon: MapPin, label: "Location", value: personalInfo.location, href: null },
                { Icon: GitFork, label: "GitHub", value: personalInfo.githubUsername, href: personalInfo.github },
                { Icon: Link2, label: "LinkedIn", value: "Vinayak Gund", href: personalInfo.linkedin },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="card flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-600 dark:text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block truncate text-sm text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-white">
                        {value}
                      </a>
                    ) : (
                      <p className="truncate text-sm text-slate-700 dark:text-slate-200">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </AnimatedSection>

            <AnimatedSection direction="right">
              <form onSubmit={submitContact} className="card p-4 sm:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-field">
                    <span>Name</span>
                    <input
                      value={form.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      placeholder="Your name"
                    />
                    {errors.name ? <small>{errors.name}</small> : null}
                  </label>
                  <label className="form-field">
                    <span>Email</span>
                    <input
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      placeholder="you@example.com"
                      type="email"
                    />
                    {errors.email ? <small>{errors.email}</small> : null}
                  </label>
                </div>

                <label className="form-field mt-4">
                  <span>Subject</span>
                  <input
                    value={form.subject}
                    onChange={(event) => updateField("subject", event.target.value)}
                    placeholder="Role, project, or collaboration"
                  />
                  {errors.subject ? <small>{errors.subject}</small> : null}
                </label>

                <label className="form-field mt-4">
                  <span>Message</span>
                  <textarea
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    placeholder="Tell me what you want to build or discuss."
                    rows={6}
                  />
                  {errors.message ? <small>{errors.message}</small> : null}
                </label>

                <button type="submit" className="btn-primary mt-5 w-full justify-center">
                  <Send className="h-4 w-4" />
                  Send Email
                </button>

                {sent ? (
                  <p className="mt-3 text-center text-sm text-emerald-600 dark:text-emerald-300">
                    Email draft opened with your message.
                  </p>
                ) : null}
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
