// Types for the vendored React Bits component (TechText.jsx). The implementation stays JavaScript so it
// can be re-pulled from upstream; this file types the boundary.
import type { CSSProperties } from "react";

export interface TechTextProps {
  text?: string;
  fontFamily?: string;
  fontWeight?: number;
  /** Largest font size in px; shrinks to fit narrower containers. */
  fontSize?: number;
  /** In em. */
  letterSpacing?: number;
  color?: string;
  accentColor?: string;
  reveal?: "area" | "letter" | "off";
  reach?: number;
  softness?: number;
  dashLength?: number;
  dashGap?: number;
  strokeWidth?: number;
  lineStyle?: "dashed" | "solid";
  specks?: number;
  selection?: boolean;
  labels?: boolean;
  draggable?: boolean;
  sweep?: boolean;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

declare const TechText: (props: TechTextProps) => JSX.Element;
export default TechText;
