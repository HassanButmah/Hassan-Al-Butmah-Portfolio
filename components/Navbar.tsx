"use client";

import { useEffect, useState } from "react";
import { NAV, SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-ink/5 bg-paper/75 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#top" className="font-display text-sm tracking-[0.18em] text-ink md:tracking-[0.22em]">
          {SITE.shortName}{" "}
          <span className="hidden font-normal text-mute sm:inline">
            AL-BUTMAH
          </span>
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[11px] uppercase tracking-[0.22em] text-mute transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={SITE.github}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-ink/15 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-ink transition hover:border-ink/40 md:inline-flex"
        >
          GitHub
        </a>

        <button
          type="button"
          aria-label="Menu"
          className="text-[11px] uppercase tracking-[0.22em] text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <div
        className={cn(
          "border-t border-ink/5 bg-paper md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-6">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-2xl text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
