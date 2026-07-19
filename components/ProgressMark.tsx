"use client";

import { useEffect, useState } from "react";

/** Floating chapter progress like the 01 / 11 marker on otsuka-air. */
export function ProgressMark() {
  const [progress, setProgress] = useState(1);
  const total = 6;

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      setProgress(Math.min(total, Math.max(1, Math.ceil(p * total))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-6 left-5 z-40 hidden items-baseline gap-2 font-display text-ink/40 md:flex">
      <span className="text-2xl text-ink/70">
        {String(progress).padStart(2, "0")}
      </span>
      <span className="text-sm">/</span>
      <span className="text-sm">{String(total).padStart(2, "0")}</span>
    </div>
  );
}
