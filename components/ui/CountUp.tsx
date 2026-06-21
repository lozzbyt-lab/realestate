"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export default function CountUp({ to, prefix = "", suffix = "", duration = 2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = prefix + Math.round(v) + suffix;
        }
      },
    });
    return controls.stop;
  }, [inView, to, suffix, prefix, duration, motionVal]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
