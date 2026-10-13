import React, { useEffect, useRef } from "react";

const COLORS = ["#0071e3", "#ff5a36", "#ffbd2e", "#27C93F", "#ff5fa2", "#8d9bff", "#181818"];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rot: number;
  vr: number;
  color: string;
}

// A small puff of square "pixel" confetti from the toast corner. Re-fires whenever `burst` changes.
export default function Confetti({ burst }: { burst: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!burst) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return undefined;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const parts: Particle[] = [];
    // small puff from the toast corner (top right), drifting down and out
    const ox = Math.max(40, w - 290); // roughly the toast icon
    const oy = 78;
    for (let i = 0; i < 34; i++) {
      const angle = Math.PI * (0.55 + Math.random() * 0.9);
      const speed = 2.5 + Math.random() * 5;
      parts.push({
        x: ox,
        y: oy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        size: 5 + Math.floor(Math.random() * 2) * 2,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.25,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      ctx.clearRect(0, 0, w, h);
      let alive = false;
      for (const p of parts) {
        p.vy += 0.22;
        p.vx *= 0.99;
        p.vy *= 0.992;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        if (p.y < h + 40) alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
      if (alive && now - start < 2600) raf = requestAnimationFrame(tick);
      else ctx.clearRect(0, 0, w, h);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, w, h);
    };
  }, [burst]);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[70] w-full h-full" />;
}
