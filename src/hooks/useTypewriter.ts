import { useEffect, useState } from "react";

interface TypewriterOptions {
  type?: number;
  erase?: number;
  hold?: number;
}

// `words` must be a stable reference (module constant or memoized).
export function useTypewriter(words: readonly string[], { type = 85, erase = 45, hold = 1600 }: TypewriterOptions = {}): string {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];

    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), hold);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((n) => n + 1);
      return;
    }

    const t = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? erase : type
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words, type, erase, hold]);

  return text;
}
