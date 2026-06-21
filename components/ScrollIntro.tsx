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
  const loadedCountRef = useRef(0);
  const isReadyRef = useRef(false);
  const isCompletedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);

  const loaderControls = useAnimation();
  const canvasControls = useAnimation();

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imagesRef.current[index];
    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;
    const scale = Math.max(w / imgW, h / imgH);
    const drawW = imgW * scale;
    const drawH = imgH * scale;
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
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    const prev = currentFrameRef.current;
    const next = lerp(prev, targetFrameRef.current, 0.12);
    const snapped = Math.round(next);

    if (Math.abs(next - prev) > 0.01) {
      currentFrameRef.current = next;
      if (snapped !== Math.round(prev)) {
        drawFrame(snapped);
      }
    }

    rafRef.current = requestAnimationFrame(animate);
  }, [drawFrame]);

  const handleScroll = useCallback(() => {
    if (!isReadyRef.current || isCompletedRef.current) return;

    const container = containerRef.current;
    if (!container) return;

    const scrollTop = window.scrollY;
    const maxScroll = container.offsetHeight - window.innerHeight;
    const progress = Math.min(scrollTop / maxScroll, 1);

    targetFrameRef.current = progress * (TOTAL_FRAMES - 1);

    if (progress >= 0.95 && !isCompletedRef.current) {
      isCompletedRef.current = true;
      triggerCompletion();
    }
  }, []);

  const triggerCompletion = useCallback(async () => {
    document.body.style.overflow = "hidden";

    await canvasControls.start({
      opacity: 0,
      transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
    });

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    document.body.style.overflow = "";

    const container = containerRef.current;
    if (container) {
      container.style.display = "none";
    }

    window.scrollTo({ top: 0, behavior: "instant" });

    onComplete();
  }, [canvasControls, onComplete]);

  const onAllLoaded = useCallback(async () => {
    isReadyRef.current = true;

    await loaderControls.start({
      opacity: 0,
      transition: { duration: 0.5 },
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
      img.onload = () => {
        loaded++;
        loadedCountRef.current = loaded;

        loaderControls.set({ opacity: 1 });

        if (loaded === TOTAL_FRAMES) {
          onAllLoaded();
        }
      };
      img.onerror = () => {
        loaded++;
        loadedCountRef.current = loaded;
        if (loaded === TOTAL_FRAMES) {
          onAllLoaded();
        }
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
        animate={canvasControls}
        className="sticky top-0 w-full h-screen overflow-hidden bg-black"
        style={{ willChange: "opacity" }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{ willChange: "transform" }}
        />

        <motion.div
          animate={loaderControls}
          initial={{ opacity: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
        >
          <LoaderUI loadedRef={loadedCountRef} />
        </motion.div>
      </motion.div>
    </div>
  );
}

function LoaderUI({ loadedRef }: { loadedRef: React.RefObject<number> }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-10 h-10">
        <svg
          className="animate-spin"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20"
            cy="20"
            r="17"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.5"
          />
          <path
            d="M20 3 A17 17 0 0 1 37 20"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <p
        className="text-white/30 text-xs tracking-[0.35em] uppercase"
        style={{ letterSpacing: "0.35em" }}
      >
        Loading
      </p>
    </div>
  );
}
