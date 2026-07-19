"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PROJECTS, SITE } from "@/constants/site";
import { gsap, registerGsap } from "@/lib/gsap";

const COUNT = PROJECTS.length;
const STEP = 360 / COUNT;

export function Work() {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    registerGsap();
    const rootEl = root.current;
    const ringEl = ring.current;
    const stageEl = stage.current;
    if (!rootEl || !ringEl || !stageEl) return;

    const cards = gsap.utils.toArray<HTMLElement>(
      rootEl.querySelectorAll("[data-orbit-card]"),
    );

    const getRadius = () => {
      const w = window.innerWidth;
      if (w < 640) return Math.min(w * 0.48, 180);
      if (w < 1024) return Math.min(w * 0.3, 280);
      return Math.min(w * 0.22, 320);
    };

    const placeCards = () => {
      const r = getRadius();
      cards.forEach((card, i) => {
        card.style.transform = `translate(-50%, -50%) rotateY(${i * STEP}deg) translateZ(${r}px)`;
      });
    };

    placeCards();

    const totalSpin = STEP * (COUNT - 1);
    const state = { angle: 0 };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootEl,
          start: "top top",
          end: () => `+=${window.innerHeight * (COUNT * 0.9 + 1)}`,
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: placeCards,
          onUpdate: (self) => {
            const spinProgress = Math.min(1, self.progress / 0.8);
            setActive(Math.round(spinProgress * (COUNT - 1)));
          },
        },
      });

      // Rotate the circle through every project
      tl.to(
        state,
        {
          angle: -totalSpin,
          ease: "none",
          duration: 0.8,
          onUpdate: () => {
            ringEl.style.transform = `rotateY(${state.angle}deg)`;
          },
        },
        0,
      );

      // After full circle — sink down and release to next section
      tl.to(
        "[data-work-header]",
        { y: -48, opacity: 0, ease: "power2.in", duration: 0.2 },
        0.8,
      )
        .to(
          stageEl,
          {
            y: 160,
            scale: 0.86,
            opacity: 0,
            ease: "power2.in",
            duration: 0.2,
          },
          0.8,
        )
        .to(
          "[data-work-dots]",
          { opacity: 0, y: 20, ease: "power2.in", duration: 0.15 },
          0.82,
        )
        .fromTo(
          "[data-work-exit]",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.15 },
          0.88,
        );
    }, rootEl);

    const onResize = () => {
      placeCards();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      id="work"
      className="relative min-h-screen overflow-hidden bg-ink text-paper"
    >
      <div
        data-work-header
        className="relative z-20 px-5 pb-2 pt-24 md:px-10 md:pt-28"
      >
        <p className="text-[11px] uppercase tracking-[0.3em] text-accent-soft">
          Work / {SITE.shortName}
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,5rem)] font-medium tracking-[-0.03em]">
          Selected projects
        </h2>
        <p
          lang="ar"
          dir="rtl"
          className="font-arabic mt-3 max-w-xl text-right text-sm leading-[1.9] text-white/45 md:text-base"
        >
          نبذة عن المشاريع الموجودة في{" "}
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent-soft underline-offset-4 hover:underline"
          >
            github.com/HassanButmah
          </a>
        </p>
      </div>

      <div
        ref={stage}
        className="relative z-10 flex h-[52vh] items-center justify-center md:h-[56vh]"
        style={{ perspective: "1100px", perspectiveOrigin: "50% 45%" }}
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(52vw,380px)] w-[min(52vw,380px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(34vw,250px)] w-[min(34vw,250px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.06]" />

        <div
          ref={ring}
          className="relative h-0 w-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {PROJECTS.map((project, i) => {
            const isActive = i === active;
            return (
              <article
                key={project.num}
                data-orbit-card
                className="absolute left-0 top-0 w-[min(58vw,240px)] overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#121417] shadow-[0_20px_50px_rgba(0,0,0,0.45)] md:w-[min(22vw,260px)]"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  opacity: isActive ? 1 : 0.35,
                  filter: isActive ? "none" : "brightness(0.5) blur(0.5px)",
                  transition: "opacity 0.3s ease, filter 0.3s ease",
                  zIndex: isActive ? 4 : 1,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="260px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/15" />

                  <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5">
                    <div>
                      <p className="font-display text-3xl text-white/25 md:text-4xl">
                        {project.num}
                      </p>
                      <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-accent-soft">
                        {project.role}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display text-[1.25rem] tracking-[-0.03em] md:text-[1.45rem]">
                        {project.title}
                      </h3>
                      <p
                        lang="ar"
                        dir="rtl"
                        className="font-arabic mt-2 line-clamp-2 text-right text-[12px] leading-[1.7] text-white/65"
                      >
                        {project.note}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.live ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full bg-paper px-3 py-1.5 text-[9px] uppercase tracking-[0.14em] text-ink transition hover:bg-accent-soft"
                          >
                            Live demo
                          </a>
                        ) : null}
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-white/25 px-3 py-1.5 text-[9px] uppercase tracking-[0.14em] text-white/80 transition hover:border-accent-soft hover:text-accent-soft"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div
        data-work-dots
        className="relative z-20 flex justify-center gap-2 pb-10"
      >
        {PROJECTS.map((p, i) => (
          <span
            key={p.num}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-accent-soft" : "w-1.5 bg-white/25"
            }`}
          />
        ))}
      </div>

      <p
        data-work-exit
        className="pointer-events-none absolute inset-x-0 bottom-14 z-30 text-center text-[11px] uppercase tracking-[0.32em] text-white/35 opacity-0"
      >
        Continue ↓
      </p>
    </section>
  );
}
