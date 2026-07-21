"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Link2, GitFork, Send, CheckCircle, Loader2, MessageSquare, ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

type FormState = "idle" | "sending" | "sent";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name required";
    if (!form.email.trim()) e.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Subject required";
    if (!form.message.trim()) e.message = "Message required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    setErrors({}); setState("sending");
    await new Promise(r => setTimeout(r, 1600));
    setState("sent");
  };

  const contactLinks = [
    { Icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: "#38BDF8" },
    { Icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: "#A78BFA" },
    { Icon: MapPin, label: "Location", value: personalInfo.location, href: null, color: "#34D399" },
    { Icon: Link2, label: "LinkedIn", value: "View Profile", href: personalInfo.linkedin, color: "#818CF8" },
    { Icon: GitFork, label: "GitHub", value: `@${personalInfo.githubUsername}`, href: personalInfo.github, color: "#C084FC" },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[400px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)" }} />
        </div>
        <div className="absolute inset-0 dot-bg opacity-25" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-pill mb-4">
            <MessageSquare className="w-3 h-3" /> Let&apos;s Connect
          </div>
          <h2 className="section-heading text-white mb-3">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-white/40 max-w-xl text-sm leading-relaxed">
            Open to internships, entry-level roles, freelance projects, and interesting collaborations in AI, data, and software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Info card */}
            <div className="card gradient-border p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
                <span className="font-bold text-sm text-white">Contact Info</span>
              </div>
              <div className="space-y-4">
                {contactLinks.map(({ Icon, label, value, href, color }, ci) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + ci * 0.08 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ background: `${color}18`, border: `1px solid ${color}20` }}
                    >
                      <Icon className="w-4 h-4" style={{ color }} />
                    </motion.div>
                    <div>
                      <div className="text-[10px] text-white/25 font-medium uppercase tracking-wider">{label}</div>
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                          className="text-sm text-white/65 group-hover:text-white transition-colors">{value}</a>
                      ) : (
                        <span className="text-sm text-white/65">{value}</span>
                      )}
                    </div>
                    {href && <motion.div
                      initial={{ opacity: 0, x: -4 }}
                      whileHover={{ opacity: 0.4, x: 0 }}
                      className="ml-auto"
                    >
                      <ArrowRight className="w-3.5 h-3.5" style={{ color }} />
                    </motion.div>}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-green-500 to-emerald-600" />
                <span className="font-bold text-sm text-white">Available For</span>
              </div>
              {[
                { icon: "🎓", label: "Internships" },
                { icon: "🚀", label: "Entry-level roles" },
                { icon: "🤝", label: "Freelance projects" },
                { icon: "💡", label: "Open source & collaboration" },
              ].map(({ icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2.5 py-2 group"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  </motion.div>
                  <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">{icon} {label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="card gradient-border p-8">
              {state === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    className="relative w-20 h-20 rounded-2xl bg-green-500/15 border border-green-500/25 flex items-center justify-center mb-5"
                  >
                    {/* Success ring */}
                    {[0, 1, 2].map(i => (
                      <motion.div
                        key={i}
                        className="absolute rounded-2xl border border-green-400/40"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
                        style={{ inset: 0 }}
                      />
                    ))}
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl font-bold text-white mb-2"
                  >
                    Message Sent! 🎉
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/45 text-sm max-w-xs"
                  >
                    Thank you for reaching out. I&apos;ll respond within 24 hours.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    onClick={() => { setState("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 px-5 py-2.5 rounded-xl bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 text-sm font-semibold hover:bg-indigo-500/25 transition-all"
                  >
                    Send another →
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-6 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
                      <span className="font-bold text-sm text-white">Send a Message</span>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {["name", "email"].map(field => (
                      <div key={field}>
                        <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider capitalize">{field}</label>
                        <input
                          type={field === "email" ? "email" : "text"}
                          placeholder={field === "name" ? "Your full name" : "you@email.com"}
                          value={form[field as keyof typeof form]}
                          onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                          className={`w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 bg-white/4 border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 ${errors[field] ? "border-red-500/40" : "border-white/8 focus:border-indigo-500/40"}`}
                        />
                        {errors[field] && <p className="text-red-400 text-[11px] mt-1.5">{errors[field]}</p>}
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      placeholder="Job opportunity / Project / Collaboration"
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 bg-white/4 border transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/30 ${errors.subject ? "border-red-500/40" : "border-white/8 focus:border-indigo-500/40"}`}
                    />
                    {errors.subject && <p className="text-red-400 text-[11px] mt-1.5">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about the opportunity or project..."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 bg-white/4 border transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/30 resize-none ${errors.message ? "border-red-500/40" : "border-white/8 focus:border-indigo-500/40"}`}
                    />
                    {errors.message && <p className="text-red-400 text-[11px] mt-1.5">{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={state === "sending"}
                    whileHover={{ scale: 1.02, y: -2, boxShadow: "0 8px 30px rgba(79,70,229,0.45)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-white disabled:opacity-60 relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)", boxShadow: "0 4px 24px rgba(79,70,229,0.3)" }}
                  >
                    {/* Shimmer sweep on button */}
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
                    />
                    <span className="relative flex items-center gap-2">
                      {state === "sending" ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="w-4 h-4" /> Send Message</>
                      )}
                    </span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
