"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const spring = useSpring(progress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const maxScroll = el.scrollHeight - el.clientHeight;
      const pct = maxScroll > 0 ? el.scrollTop / maxScroll : 0;
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="scroll-progress fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ scaleX: spring }}
    />
  );
}
