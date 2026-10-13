// Types for the vendored React Bits component (OptionWheel.jsx). The implementation stays JavaScript so it
// can be re-pulled from upstream; this file types the boundary. `selected` and `scrollable` are local additions.

export interface OptionWheelProps {
  items?: string[];
  defaultSelected?: number;
  /** Local change: controlled selection (e.g. driven by page scroll). */
  selected?: number;
  onChange?: (index: number, item: string) => void;
  textColor?: string;
  activeColor?: string;
  side?: "left" | "right";
  /** In rem. */
  fontSize?: number;
  spacing?: number;
  curve?: number;
  /** Degrees between neighbouring options. */
  tilt?: number;
  blur?: number;
  fade?: number;
  minOpacity?: number;
  smoothing?: number;
  inset?: number;
  loop?: boolean;
  draggable?: boolean;
  /** Local change: `false` lets the page keep the mouse-wheel scroll. */
  scrollable?: boolean;
  soundUrl?: string;
  soundVolume?: number;
  className?: string;
}

declare const OptionWheel: (props: OptionWheelProps) => JSX.Element;
export default OptionWheel;
