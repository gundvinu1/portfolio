"use client";

import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";
import { motion, useInView, useMotionValue, useTransform, useSpring, type Variants } from "framer-motion";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 28 : 0,
      x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
};

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.09,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function AnimatedCard({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * MagneticCard — a card that tilts subtly toward the cursor on hover
 */
export function MagneticCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * CountUp — animates a number from 0 to its value when it enters view
 */
export function CountUp({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let frame = 0;
    const duration = 1200;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  );
}

/**
 * RevealText — animates text with character-by-character stagger reveal
 */
export function RevealText({
  text,
  className,
  delay = 0,
  stagger = 0.03,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const words = text.split(" ");

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              initial={{ y: "110%", opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + (wi * word.length + ci) * stagger,
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: delay + (wi + 1) * stagger * 3 }}
              className="inline-block"
            >
              &nbsp;
            </motion.span>
          )}
        </span>
      ))}
    </span>
  );
}

/**
 * SpotlightCard — follows cursor with a radial spotlight glow effect
 */
export function SpotlightCard({
  children,
  className,
  glowColor = "rgba(99,102,241,0.12)",
}: {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const [pos, setPos] = useState({ x: "50%", y: "50%" });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x: `${x}%`, y: `${y}%` });
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden ${className ?? ""}`}
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-[inherit]"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${pos.x} ${pos.y}, ${glowColor}, transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

/**
 * GlowCard — card with animated shimmer border
 */
export function GlowCard({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={`card-glow ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

/**
 * FloatingElement — subtle autonomous float animation
 */
export function FloatingElement({
  children,
  className,
  yRange = 12,
  duration = 4,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  yRange?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -yRange, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * FloatingParticles — renders animated floating dots in a container
 */
export function FloatingParticles({
  count = 20,
  colors = ["#4F46E5", "#06B6D4", "#8B5CF6", "#22C55E", "#F97316"],
  className,
}: {
  count?: number;
  colors?: string[];
  className?: string;
}) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 1 + ((i * 17) % 40) / 10,
    x: (i * 37 + 11) % 100,
    y: (i * 61 + 19) % 100,
    color: colors[i % colors.length],
    dur: 4 + ((i * 23) % 60) / 10,
    delay: ((i * 29) % 40) / 10,
    opacity: 0.2 + ((i * 31) % 50) / 100,
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className ?? ""}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.color,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -20, 5, -10, 0],
            x: [0, 8, -5, 3, 0],
            opacity: [p.opacity, p.opacity * 1.6, p.opacity * 0.6, p.opacity],
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
  );
}

/**
 * NumberTicker — animated number counter with custom formatting
 */
export function NumberTicker({
  value,
  prefix = "",
  suffix = "",
  className,
  duration = 1500,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let frame = 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}

/**
 * PulseRing — animated pulsing ring effect (like a radar ping)
 */
export function PulseRing({
  color = "rgba(79,70,229,0.4)",
  size = 40,
  className,
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center ${className ?? ""}`} style={{ width: size, height: size }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{ borderColor: color, width: size, height: size }}
          animate={{
            scale: [1, 2.5],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.66,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
