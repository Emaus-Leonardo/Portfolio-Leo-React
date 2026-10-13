import { initialHistory, type TermLine } from "./terminal";

// Draws the artwork for the 3D lanyard badge (card face and strap) on canvas,
// so the badge works without any extra image assets.

const W = 1024;
const H = 1440; // matches the portrait card ratio (1.6 x 2.25)
const FONT = '"Bricolage Grotesque", system-ui, sans-serif';
const MONO = '"JetBrains Mono", ui-monospace, monospace';
const BLACK = "#0b0b0d";

const loadImage = (src: string): Promise<HTMLImageElement | null> =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });

type Ctx = CanvasRenderingContext2D;

const cover = (ctx: Ctx, img: HTMLImageElement, x: number, y: number, w: number, h: number, focusY = 0.3) => {
  const scale = Math.max(w / img.width, h / img.height);
  const dw = img.width * scale;
  const dh = img.height * scale;
  ctx.drawImage(img, x - (dw - w) / 2, y - (dh - h) * focusY, dw, dh);
};

const makeCanvas = (w: number, h: number): [HTMLCanvasElement, Ctx] => {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d");
  if (!ctx) throw new Error("2D canvas is not available");
  return [c, ctx];
};

// Greyscale by hand (ctx.filter is not available everywhere).
const toGrey = (ctx: Ctx, x: number, y: number, w: number, h: number, contrast = 1.08) => {
  const img = ctx.getImageData(x, y, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const g = 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2];
    const v = Math.max(0, Math.min(255, (g - 128) * contrast + 128));
    d[i] = d[i + 1] = d[i + 2] = v;
  }
  ctx.putImageData(img, x, y);
};

function paintFront(photo: HTMLImageElement | null, handle: string): string {
  const [canvas, ctx] = makeCanvas(W, H);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, W, H);

  // header row, level with the lanyard slot: mark on the left, @handle on the right
  ctx.textBaseline = "middle";
  ctx.fillStyle = BLACK;
  ctx.textAlign = "left";
  ctx.font = `800 64px ${FONT}`;
  ctx.fillText("Léo", 72, 92);
  ctx.fillStyle = "#0071e3";
  ctx.fillText(".", 72 + ctx.measureText("Léo").width, 92);
  ctx.fillStyle = "rgba(0,0,0,0.68)";
  ctx.textAlign = "right";
  ctx.font = `400 36px ${MONO}`;
  ctx.fillText(handle, W - 72, 92);

  // greyscale portrait filling the rest of the card
  const m = 40;
  const y0 = 200;
  const pw = W - m * 2;
  const ph = H - y0 - m;
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(m, y0, pw, ph, 48);
  ctx.clip();
  ctx.fillStyle = "#e9e9ec";
  ctx.fillRect(m, y0, pw, ph);
  if (photo) {
    cover(ctx, photo, m, y0, pw, ph, 0.3);
    toGrey(ctx, m, y0, pw, ph);
  }
  ctx.restore();
  return canvas.toDataURL("image/png");
}

// Back of the badge: a live macOS terminal. `history` is drawn bottom-aligned,
// followed by the prompt with whatever has been typed so far.
export function paintBack(handle: string, history: TermLine[] = initialHistory(), input = ""): string {
  const [canvas, ctx] = makeCanvas(W, H);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, W, H);

  // same header row as the front
  ctx.textBaseline = "middle";
  ctx.textAlign = "left";
  ctx.fillStyle = BLACK;
  ctx.font = `800 64px ${FONT}`;
  ctx.fillText("Léo", 72, 92);
  ctx.fillStyle = "#0071e3";
  ctx.fillText(".", 72 + ctx.measureText("Léo").width, 92);
  ctx.fillStyle = "rgba(0,0,0,0.68)";
  ctx.textAlign = "right";
  ctx.font = `400 36px ${MONO}`;
  ctx.fillText(handle, W - 72, 92);

  // terminal window
  const m = 40, y0 = 200, pw = W - m * 2, ph = H - y0 - m;
  ctx.fillStyle = "#0b0b0d";
  ctx.beginPath();
  ctx.roundRect(m, y0, pw, ph, 48);
  ctx.fill();
  ([["#FF5F56", 0], ["#FFBD2E", 1], ["#27C93F", 2]] as [string, number][]).forEach(([c, i]) => {
    ctx.fillStyle = c;
    ctx.beginPath();
    ctx.arc(m + 56 + i * 40, y0 + 52, 13, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.font = `400 28px ${MONO}`;
  ctx.fillText("leo: zsh", W / 2, y0 + 52);

  // lines
  ctx.textAlign = "left";
  ctx.font = `400 32px ${MONO}`;
  const LH = 47;
  const x = m + 44;
  const top = y0 + 120;
  const bottom = y0 + ph - 84;
  const rows: (TermLine & { cursor?: boolean })[] = [...history, { p: true, t: input, cursor: true }];
  const visible = rows.slice(-Math.floor((bottom - top) / LH));
  visible.forEach((r, i) => {
    const y = top + i * LH;
    let cx = x;
    if (r.p) {
      ctx.fillStyle = "#27C93F";
      ctx.fillText("leo@macbook", cx, y);
      cx += ctx.measureText("leo@macbook ").width;
      ctx.fillStyle = "#4da3ff";
      ctx.fillText("~", cx, y);
      cx += ctx.measureText("~ ").width;
      ctx.fillStyle = "#ffffff";
      ctx.fillText("% ", cx, y);
      cx += ctx.measureText("% ").width;
      ctx.fillStyle = "rgba(255,255,255,0.95)";
    } else {
      ctx.fillStyle = r.c || "rgba(255,255,255,0.6)";
    }
    ctx.fillText(r.t, cx, y);
    if (r.cursor) {
      ctx.fillStyle = "#0a84ff";
      ctx.fillRect(cx + ctx.measureText(r.t).width + 2, y - 20, 18, 38);
    }
  });

  ctx.fillStyle = "rgba(255,255,255,0.28)";
  ctx.font = `400 28px ${MONO}`;
  ctx.textAlign = "left";
  ctx.fillText("type here · try 'help'", x, y0 + ph - 44);
  return canvas.toDataURL("image/jpeg", 0.9);
}

function paintStrap(): string {
  // Wide tile: it repeats along the band, its height spans the band width.
  const [canvas, ctx] = makeCanvas(560, 200);
  ctx.fillStyle = BLACK;
  ctx.fillRect(0, 0, 560, 200);
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.font = `800 96px ${FONT}`;
  const word = "Léo";
  const total = ctx.measureText(word).width + ctx.measureText(".").width;
  const x0 = 280 - total / 2;
  ctx.textAlign = "left";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(word, x0, 106);
  ctx.fillStyle = "#0a84ff";
  ctx.fillText(".", x0 + ctx.measureText(word).width, 106);
  return canvas.toDataURL("image/png");
}

export interface BadgeAssets {
  front: string;
  back: string;
  strap: string;
}

export async function createBadgeAssets(photoSrc: string, { handle = "@EmausLeonardo" }: { handle?: string } = {}): Promise<BadgeAssets> {
  try {
    await Promise.all([document.fonts.load(`800 64px ${FONT}`), document.fonts.load(`400 36px ${MONO}`), document.fonts.load(`400 28px ${MONO}`)]);
  } catch {
    /* fall back to system fonts */
  }
  const photo = await loadImage(photoSrc);
  return { front: paintFront(photo, handle), back: paintBack(handle), strap: paintStrap() };
}
