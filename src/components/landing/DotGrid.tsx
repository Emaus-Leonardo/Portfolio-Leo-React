import React, { useEffect, useRef, type CSSProperties } from "react";

const RADIUS_CELLS = 5;
const smooth = (t: number) => t * t * (3 - 2 * t);

/** [left, top, right, bottom] in canvas coordinates. */
type Rect = [number, number, number, number];

interface DotGridProps {
  className?: string;
  style?: CSSProperties;
}

// Static CSS dot grid + a canvas of square "pixels" that grow on the same dot centres
// around the cursor and leave a short trail.
export default function DotGrid({ className = "", style }: DotGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return undefined;
    const off =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia?.("(pointer: coarse)").matches;
    if (off) return undefined;

    let grid = 22, offset = 11, cols = 0, rows = 0, w = 1, h = 1, dpr = 1;
    let trail = new Float32Array(0);
    let raf = 0, alive = true;
    let blockers: Rect[] = []; // rects of links/buttons that no pixel may cover
    const target = { x: 0, y: 0, inside: false };
    const pos = { x: 0, y: 0 };
    let intensity = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      grid = window.innerWidth <= 640 ? 17 : 22;
      offset = grid / 2;
      cols = Math.ceil(w / grid);
      rows = Math.ceil(h / grid);
      trail = new Float32Array(cols * rows);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const PAD = 8;
    const measure = () => {
      const rect = canvas.getBoundingClientRect();
      const els = canvas.closest("section")?.querySelectorAll("a, button") ?? [];
      blockers = [...els].map((el): Rect => {
        const r = el.getBoundingClientRect();
        return [r.left - rect.left - PAD, r.top - rect.top - PAD, r.right - rect.left + PAD, r.bottom - rect.top + PAD];
      });
    };
    const blocked = (x: number, y: number) => blockers.some((b) => x >= b[0] && x <= b[2] && y >= b[1] && y <= b[3]);

    const tick = () => {
      raf = 0;
      if (!alive) return;
      pos.x += (target.x - pos.x) * 0.15;
      pos.y += (target.y - pos.y) * 0.15;
      intensity += ((target.inside ? 1 : 0) - intensity) * 0.12;

      const radius = RADIUS_CELLS * grid;
      const c0 = Math.max(0, Math.floor((pos.x - radius - offset) / grid));
      const c1 = Math.min(cols - 1, Math.ceil((pos.x + radius - offset) / grid));
      const r0 = Math.max(0, Math.floor((pos.y - radius - offset) / grid));
      const r1 = Math.min(rows - 1, Math.ceil((pos.y + radius - offset) / grid));

      let aliveCells = false;
      for (let i = 0; i < trail.length; i++) {
        trail[i] *= 0.9;
        if (trail[i] > 0.02) aliveCells = true;
      }
      if (intensity > 0.001) {
        for (let r = r0; r <= r1; r++) {
          for (let c = c0; c <= c1; c++) {
            const d = Math.hypot(offset + c * grid - pos.x, offset + r * grid - pos.y) / radius;
            if (d >= 1) continue;
            const f = smooth(1 - d) * intensity;
            const i = r * cols + c;
            if (f > trail[i]) trail[i] = f;
          }
        }
      }

      ctx.clearRect(0, 0, w, h);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const f = trail[r * cols + c];
          if (f <= 0.02) continue;
          if (blocked(offset + c * grid, offset + r * grid)) continue;
          const size = Math.round(2 + (grid * 0.45 - 2) * f);
          const x = Math.round(offset + c * grid - size / 2);
          const y = Math.round(offset + r * grid - size / 2);
          ctx.fillStyle = `rgba(24,24,24,${0.15 + 0.85 * f})`;
          ctx.fillRect(x, y, size, size);
        }
      }

      if (intensity > 0.001 || aliveCells) raf = requestAnimationFrame(tick);
    };
    const wake = () => {
      if (!raf && alive) {
        measure();
        raf = requestAnimationFrame(tick);
      }
    };

    // Window-level: the 3D badge canvas sits above this layer and would swallow events.
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Over a link or button the effect gets out of the way.
      const overUi = !!(e.target as Element | null)?.closest?.("a, button");
      const inside = !overUi && x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      if (inside && !target.inside) {
        pos.x = x;
        pos.y = y;
      }
      target.x = x;
      target.y = y;
      target.inside = inside;
      wake();
    };
    const onLeave = () => {
      target.inside = false;
      wake();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    resize();

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div aria-hidden="true" className={`pixel-grid pointer-events-none ${className}`} style={style}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
