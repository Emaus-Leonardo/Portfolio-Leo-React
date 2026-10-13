import React, { type ReactNode } from "react";

// "**bold**" -> highlighted span
export function rich(text: string, className = "text-neutral-900"): ReactNode[] {
  return text.split("**").map((part, i) =>
    i % 2 ? (
      <span key={i} className={className}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

// "Line one|Line two" -> lines separated by <br />
export function lines(text: string): ReactNode[] {
  return text.split("|").map((part, i, all) => (
    <React.Fragment key={i}>
      {part}
      {i < all.length - 1 && <br />}
    </React.Fragment>
  ));
}
