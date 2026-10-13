import { projects } from "./projects";

const DIM = "rgba(255,255,255,0.6)";
const AMBER = "#ffbd2e";
const GREEN = "#27C93F";
const MAX = 40; // characters per line on the card

/** One line on the badge terminal. `p` marks a prompt line (the typed command). */
export interface TermLine {
  t: string;
  c?: string;
  p?: boolean;
}

export interface CommandResult {
  lines: TermLine[];
  clear?: boolean;
  /** Fired on `window` as a `badge-egg` CustomEvent. */
  event?: "hired";
}

export const initialHistory = (): TermLine[] => [
  { p: true, t: "whoami" },
  { t: "leo: full stack dev", c: DIM },
  { p: true, t: "cat motto.txt" },
  { t: "Push your limits.", c: DIM },
  { p: true, t: "ls ~/secrets" },
  { t: "you-found-me.txt", c: AMBER },
  { p: true, t: "cat you-found-me.txt" },
  { t: "psst... type 'help'", c: DIM },
];

const wrap = (text: string, c: string): TermLine[] => {
  const out: TermLine[] = [];
  let rest = String(text);
  while (rest.length > MAX) {
    let cut = rest.lastIndexOf(" ", MAX);
    if (cut < 10) cut = MAX;
    out.push({ t: rest.slice(0, cut), c });
    rest = rest.slice(cut).trimStart();
  }
  out.push({ t: rest, c });
  return out;
};
const out = (...texts: string[]): CommandResult => ({ lines: texts.flatMap((t) => wrap(t, DIM)) });

// Runs one command.
export function runCommand(raw: string): CommandResult {
  const cmd = raw.trim();
  const low = cmd.toLowerCase();
  if (!cmd) return { lines: [] };

  if (low === "clear") return { lines: [], clear: true };
  if (low === "help")
    return out("commands: help  whoami  ls  cat", "date  clear  skills  neofetch", "hint: there are secrets here.");
  if (low === "whoami") return out("leo: full stack developer");
  if (["hello", "hello world", "hello, world", "hello world!", "python hello.py", "node hello.js", "python3 hello.py"].includes(low))
    return { lines: [{ t: "Hello, World!", c: GREEN }] };
  if (low.startsWith("echo ")) return out(cmd.slice(5).replace(/^["']|["']$/g, ""));
  if (low === "ls" || low === "ls ~") return out("Documents  Projects  secrets");
  if (low === "ls secrets" || low === "ls ~/secrets" || low === "ls ./secrets") return { lines: [{ t: "you-found-me.txt", c: AMBER }] };
  if (low === "ls projects" || low === "ls ~/projects" || low === "projects") return out(projects.map((p) => p.slug).join("  "));
  if (low.startsWith("cat ")) {
    const file = low.slice(4).replace(/^~?\/?(secrets\/)?/, "");
    if (file === "you-found-me.txt") return out("psst... try the Konami code");
    if (file === "motto.txt") return out("Push your limits.");
    return out(`cat: ${cmd.slice(4)}: No such file or directory`);
  }
  if (low === "skills") return out("react  typescript  tailwind  javascript", "node  python  html  css");
  if (low === "date") return out(new Date().toString().slice(0, 33));
  if (low === "neofetch")
    return out(
      "leo@macbook",
      "-----------",
      "OS: macOS Léo 1.0",
      "Shell: zsh",
      "Stack: React, Node, Prisma",
      "Focus: web, mobile, desktop",
      "Coffee: 3 cups (low)"
    );
  if (low === "konami") return out("↑ ↑ ↓ ↓ ← → ← → B A");
  if (low === "npm run dev") return { lines: [{ t: "VITE v5  ready in 69 ms", c: GREEN }, { t: "Local: http://localhost:5173/", c: DIM }] };
  if (low.startsWith("git commit")) return out("[main 7f3a9c2] ship it", "1 file changed, 1 insertion(+)");
  if (low === "sudo hire leo")
    return {
      lines: [
        { t: "[sudo] password for recruiter:", c: DIM },
        { t: "access granted.", c: GREEN },
        { t: "Léo has been hired. Welcome!", c: AMBER },
      ],
      event: "hired",
    };
  if (low.startsWith("sudo")) return out("recruiter is not in the sudoers file.", "This incident will be reported.");
  if (low.startsWith("rm ")) return out("nice try.");
  if (low === "exit") return out("there is no escape.", "(click the badge to flip it back)");
  return { lines: [{ t: `zsh: command not found: ${cmd.split(" ")[0]}`, c: "#ff6b6b" }] };
}
