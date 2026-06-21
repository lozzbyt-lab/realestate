"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";

const TOTAL_FRAMES = 36;
const FRAME_PATH = (i: number) =>
  `/frames/frame_${String(i + 1).padStart(4, "0")}.jpeg`;

interface ScrollIntroProps {
  onComplete: () => void;
}

export default function ScrollIntro({ onComplete }: ScrollIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const isReadyRef = useRef(false);
  const isCompletedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);

  const wrapperControls = useAnimation();
  const loaderControls = useAnimation();

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imagesRef.current[Math.max(0, Math.min(index, TOTAL_FRAMES - 1))];
    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
    const drawW = img.naturalWidth * scale;
    const drawH = img.naturalHeight * scale;
    const x = (w - drawW) / 2;
    const y = (h - drawH) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x * dpr, y * dpr, drawW * dpr, drawH * dpr);
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    drawFrame(Math.round(currentFrameRef.current));
  }, [drawFrame]);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    const prev = currentFrameRef.current;
    const next = lerp(prev, targetFrameRef.current, 0.12);
    const snapped = Math.round(next);
    const prevSnapped = Math.round(prev);

    if (Math.abs(next - prev) > 0.005) {
      currentFrameRef.current = next;
      if (snapped !== prevSnapped) drawFrame(snapped);
    }

    rafRef.current = requestAnimationFrame(animate);
  }, [drawFrame]);

  const triggerCompletion = useCallback(async () => {
    if (isCompletedRef.current) return;
    isCompletedRef.current = true;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    drawFrame(TOTAL_FRAMES - 1);

    await wrapperControls.start({
      opacity: 0,
      transition: { duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] },
    });

    const container = containerRef.current;
    if (container) container.style.display = "none";

    window.scrollTo({ top: 0, behavior: "instant" });
    document.body.style.overflow = "";
    onComplete();
  }, [wrapperControls, drawFrame, onComplete]);

  const handleScroll = useCallback(() => {
    if (!isReadyRef.current || isCompletedRef.current) return;
    const container = containerRef.current;
    if (!container) return;

    const scrollTop = window.scrollY;
    const maxScroll = container.offsetHeight - window.innerHeight;
    const progress = Math.min(scrollTop / maxScroll, 1);

    targetFrameRef.current = progress * (TOTAL_FRAMES - 1);

    if (progress >= 0.95) triggerCompletion();
  }, [triggerCompletion]);

  const onAllLoaded = useCallback(async () => {
    isReadyRef.current = true;

    await loaderControls.start({
      opacity: 0,
      transition: { duration: 0.6 },
    });

    document.body.style.overflow = "";
    drawFrame(0);
    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, [loaderControls, drawFrame, animate, handleScroll]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    resizeCanvas();

    const handleResize = () => resizeCanvas();
    window.addEventListener("resize", handleResize);

    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === TOTAL_FRAMES) onAllLoaded();
      };
      images[i] = img;
    }
    imagesRef.current = images;

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
      <motion.div
        animate={wrapperControls}
        className="sticky top-0 w-full h-screen overflow-hidden bg-black"
        style={{ willChange: "opacity" }}
      >
        <canvas ref={canvasRef} className="absolute inset-0" />

        <motion.div
          animate={loaderControls}
          initial={{ opacity: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
        >
          <div className="flex flex-col items-center gap-5">
            <div className="w-10 h-10">
              <svg className="animate-spin" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="17" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                <path d="M20 3 A17 17 0 0 1 37 20" stroke="#8DC63F" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-white/30 text-xs tracking-[0.35em] uppercase font-medium">Loading</p>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ delay: 0.8, duration: 1.8, repeat: Infinity, repeatDelay: 0.6 }}
            className="text-white text-[10px] tracking-[0.4em] uppercase font-medium"
          >
            Scroll
          </motion.p>
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: [0, 1, 0], opacity: [0, 0.4, 0] }}
            transition={{ delay: 0.8, duration: 1.8, repeat: Infinity, repeatDelay: 0.6 }}
            className="w-px h-10 bg-white origin-top"
          />
        </div>
      </motion.div>
    </div>
  );
}
