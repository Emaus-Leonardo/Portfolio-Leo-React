import { useEffect, useRef } from "react";
import { paintBack } from "../util/badge";
import { initialHistory, runCommand, type TermLine } from "../util/terminal";

const MAX_INPUT = 34;

interface Options {
  enabled: boolean;
  handle: string;
  /** Receives the repainted back face (a data URL). */
  onFrame: (dataUrl: string) => void;
}

// While the badge shows its back, typed keys go to the terminal drawn on the card.
export function useBadgeTerminal({ enabled, handle, onFrame }: Options): void {
  const state = useRef<{ history: TermLine[]; input: string }>({ history: initialHistory(), input: "" });
  const raf = useRef(0);
  const frame = useRef(onFrame);
  frame.current = onFrame;

  useEffect(() => {
    if (!enabled) return undefined;

    const repaint = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        frame.current(paintBack(handle, state.current.history, state.current.input));
      });
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
      const s = state.current;

      if (e.key === "Enter") {
        e.preventDefault();
        const typed = s.input;
        s.history.push({ p: true, t: typed });
        const res = runCommand(typed);
        if (res.clear) s.history = [];
        else s.history.push(...res.lines);
        if (res.event) window.dispatchEvent(new CustomEvent("badge-egg", { detail: res.event }));
        s.input = "";
        if (s.history.length > 80) s.history = s.history.slice(-80);
      } else if (e.key === "Backspace") {
        e.preventDefault();
        s.input = s.input.slice(0, -1);
      } else if (e.key.length === 1) {
        e.preventDefault(); // keeps Space from scrolling the page
        if (s.input.length < MAX_INPUT) s.input += e.key;
      } else {
        return;
      }
      repaint();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(raf.current);
    };
  }, [enabled, handle]);
}
