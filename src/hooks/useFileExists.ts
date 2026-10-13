import { useEffect, useState } from "react";

/**
 * True when `url` points at a real file. Dev servers and SPA hosts answer unknown paths with
 * index.html (status 200), so an HTML response counts as "missing".
 */
export function useFileExists(url: string): boolean {
  const [exists, setExists] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(url, { method: "HEAD" })
      .then((res) => {
        const type = res.headers.get("content-type") ?? "";
        if (alive) setExists(res.ok && !type.includes("text/html"));
      })
      .catch(() => {
        if (alive) setExists(false);
      });
    return () => {
      alive = false;
    };
  }, [url]);

  return exists;
}
