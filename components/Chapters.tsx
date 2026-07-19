"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { CHAPTERS } from "@/constants/site";
import { gsap, registerGsap } from "@/lib/gsap";

export function Chapters() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>("[data-chapter]");

      panels.forEach((panel) => {
        const title = panel.querySelectorAll("[data-c-title]");
        const body = panel.querySelector("[data-c-body]");
        const eyebrow = panel.querySelector("[data-c-eye]");
        const num = panel.querySelector("[data-c-num]");
        const media = panel.querySelector("[data-c-media]");
        const img = panel.querySelector("[data-c-img]");

        gsap.set([title, body, eyebrow, num], { opacity: 0, y: 48 });
        gsap.set(media, {
          clipPath: "inset(100% 0% 0% 0%)",
          opacity: 1,
        });
        gsap.set(img, { scale: 1.25, yPercent: 8 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            end: "+=160%",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
          },
        });

        tl.to(
          media,
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.55, ease: "power2.out" },
          0,
        )
          .to(img, { scale: 1, yPercent: 0, duration: 0.7, ease: "none" }, 0)
          .to(num, { opacity: 1, y: 0, duration: 0.35 }, 0.12)
          .to(eyebrow, { opacity: 1, y: 0, duration: 0.35 }, 0.18)
          .to(
            title,
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.07 },
            0.22,
          )
          .to(body, { opacity: 1, y: 0, duration: 0.45 }, 0.42)
          .to({}, { duration: 0.28 })
          .to(
            [title, body, eyebrow, num],
            { opacity: 0, y: -32, duration: 0.4, stagger: 0.03 },
            0.9,
          )
          .to(
            media,
            { clipPath: "inset(0% 0% 100% 0%)", duration: 0.45 },
            0.95,
          );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root} className="relative bg-paper">
      {CHAPTERS.map((chapter, index) => (
        <article
          key={chapter.id}
          id={index === 1 ? "craft" : index === 3 ? "process" : undefined}
          data-chapter
          className="relative flex h-screen items-center overflow-hidden px-5 md:px-10"
        >
          <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-10 md:grid-cols-[1fr_0.95fr] md:gap-16">
            <div className={index % 2 === 1 ? "md:order-2" : undefined}>
              <p
                data-c-num
                className="font-display text-5xl text-ink/15 md:text-7xl"
              >
                {chapter.id}
              </p>
              <p
                data-c-eye
                className="mt-4 text-[11px] uppercase tracking-[0.28em] text-accent"
              >
                {chapter.eyebrow}
              </p>
              <h2 className="mt-6 font-display text-[clamp(2rem,5.2vw,4.2rem)] font-medium leading-[1.05] tracking-[-0.03em] text-ink">
                {chapter.title.split("\n").map((line) => (
                  <span key={line} className="block overflow-hidden">
                    <span data-c-title className="block">
                      {line}
                    </span>
                  </span>
                ))}
              </h2>
              <p
                data-c-body
                lang="ar"
                dir="rtl"
                className="font-arabic mt-8 max-w-xl text-right text-base leading-[1.9] text-mute md:text-lg"
              >
                {chapter.body}
              </p>
            </div>

            <div
              data-c-media
              className={`relative aspect-[4/5] w-full overflow-hidden md:aspect-[5/6] ${
                index % 2 === 1 ? "md:order-1" : ""
              }`}
              style={{ clipPath: "inset(100% 0% 0% 0%)" }}
            >
              <div data-c-img className="absolute inset-0 will-change-transform">
                <Image
                  src={chapter.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
