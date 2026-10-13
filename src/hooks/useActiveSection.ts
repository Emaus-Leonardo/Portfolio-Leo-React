import { useEffect, useState } from "react";

/** Returns the id of the section currently crossing the middle of the viewport. */
export function useActiveSection<T extends string>(ids: readonly T[]): T {
  const [active, setActive] = useState<T>(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id as T);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
