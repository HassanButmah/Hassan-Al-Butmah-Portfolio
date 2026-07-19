"use client";

import { useEffect, useRef } from "react";
import { MARQUEE, SITE, SKILL_GROUPS, STATS } from "@/constants/site";
import { gsap, registerGsap } from "@/lib/gsap";

export function Skills() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.from("[data-skill-head]", {
        y: 36,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });

      gsap.utils.toArray<HTMLElement>("[data-stat-value]").forEach((el) => {
        const end = Number(el.dataset.statValue || "0");
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toString();
          },
        });
      });

      gsap.from("[data-skill-group]", {
        y: 40,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-skill-grid]",
          start: "top 85%",
          once: true,
        },
        clearProps: "opacity,transform",
      });

      gsap.fromTo(
        "[data-skill-bar]",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          stagger: 0.04,
          ease: "power2.out",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: "[data-skill-grid]",
            start: "top 82%",
            once: true,
          },
        },
      );

      const marquee = root.current?.querySelector("[data-marquee-track]");
      if (marquee) {
        gsap.to(marquee, {
          xPercent: -50,
          ease: "none",
          duration: 24,
          repeat: -1,
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="presence"
      className="relative overflow-hidden bg-[#d9e5e0] py-24 text-ink md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(61,107,102,0.16),transparent_55%),radial-gradient(ellipse_at_85%_100%,rgba(143,168,138,0.14),transparent_50%)]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <p
          data-skill-head
          className="text-[11px] uppercase tracking-[0.3em] text-accent"
        >
          Stack / {SITE.shortName}
        </p>
        <h2
          data-skill-head
          className="mt-4 max-w-3xl font-display text-[clamp(2rem,5.5vw,4rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ink"
        >
          Tools I build with, every single day.
        </h2>
        <p
          data-skill-head
          lang="ar"
          dir="rtl"
          className="font-arabic mt-4 max-w-xl text-right leading-[1.9] text-mute"
        >
          التقنيات والأدوات اللي أعتمد عليها لبناء منتجات حقيقية — من الواجهة
          إلى قواعد البيانات والذكاء الاصطناعي.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-8 border-y border-ink/10 py-10 md:grid-cols-4 md:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              data-skill-head
              className="flex flex-col items-center text-center"
            >
              <p className="font-display text-[clamp(2.4rem,6vw,4rem)] font-medium tracking-[-0.03em] text-ink">
                <span data-stat-value={stat.value}>0</span>
                <span className="text-accent">{stat.suffix}</span>
              </p>
              <p
                lang="ar"
                dir="rtl"
                className="font-arabic mt-3 text-sm leading-[1.7] text-mute"
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div
          data-skill-grid
          className="mt-16 grid gap-6 md:grid-cols-3 md:gap-7"
        >
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              data-skill-group
              className="rounded-2xl border border-ink/10 bg-[#f3f6f4] p-6 shadow-[0_12px_36px_rgba(23,25,28,0.06)] md:p-7"
            >
              <h3 className="font-display text-2xl tracking-[-0.02em] text-ink">
                {group.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="mb-1.5 flex items-center justify-between gap-3">
                      <span className="text-sm tracking-wide text-ink/80">
                        {item.name}
                      </span>
                      <span className="text-xs tabular-nums text-accent">
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-ink/8">
                      <div
                        data-skill-bar
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-soft"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden border-y border-ink/10 py-6">
        <div
          data-marquee-track
          className="flex w-max items-center gap-10 whitespace-nowrap will-change-transform"
        >
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display text-[clamp(1.6rem,3vw,2.6rem)] font-medium tracking-[-0.02em] text-ink/20"
            >
              {item}
              <span className="ml-10 text-accent/35">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
