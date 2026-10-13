// Types for the vendored React Bits component (Lanyard.jsx). The implementation stays JavaScript so it
// can be re-pulled from upstream; this file types the boundary. `onFlip` is a local addition.
import type { CSSProperties } from "react";

export interface LanyardProps {
  frontImage?: string;
  backImage?: string;
  imageFit?: "cover" | "contain";
  cardColor?: string;
  orientation?: "portrait" | "landscape";
  finish?: "glossy" | "matte" | "holographic" | "metallic";
  /** 0 (square) to 1 (very round). */
  cornerRadius?: number;
  /** Card height as a fraction of the container height. */
  size?: number;
  anchor?: "left" | "center" | "right";
  /** 0 (short band) to 1 (long band). */
  strapLength?: number;
  strapImage?: string;
  strapColor?: string;
  /** Relative band width, 0.4 to 2. */
  strapWidth?: number;
  metal?: "graphite" | "silver" | "gold";
  gravity?: number;
  damping?: number;
  elasticity?: number;
  breeze?: number;
  interactive?: boolean;
  intro?: boolean;
  /** Local change: called with `true` while the back of the card is showing. */
  onFlip?: (showingBack: boolean) => void;
  className?: string;
  style?: CSSProperties;
}

declare const Lanyard: (props: LanyardProps) => JSX.Element;
export default Lanyard;
