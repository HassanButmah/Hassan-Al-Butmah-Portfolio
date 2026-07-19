"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { HERO_IMAGE, SITE } from "@/constants/site";
import { gsap, registerGsap } from "@/lib/gsap";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        "[data-hero-mask]",
        { clipPath: "inset(18% 12% 18% 12%)", scale: 1.12 },
        { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1.6 },
        0,
      )
        .fromTo(
          "[data-hero-brand]",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          0.25,
        )
        .fromTo(
          "[data-hero-line]",
          { y: "115%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1.05, stagger: 0.1 },
          0.45,
        )
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.85 },
          0.95,
        );

      gsap.to("[data-hero-img]", {
        yPercent: 18,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-hero-copy]", {
        y: -80,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-hero-veil]", {
        opacity: 0.78,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div
        data-hero-mask
        className="absolute inset-0 will-change-transform"
        style={{ clipPath: "inset(18% 12% 18% 12%)" }}
      >
        <div data-hero-img className="absolute inset-0 scale-110">
          <Image
            src={HERO_IMAGE}
            alt={SITE.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_20%]"
          />
        </div>
        <div
          data-hero-veil
          className="absolute inset-0 bg-gradient-to-t from-paper via-paper/60 to-paper/25"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(61,107,102,0.2),transparent_50%)]" />
      </div>

      <div
        data-hero-copy
        className="relative z-10 w-full px-5 pb-16 pt-28 md:px-10 md:pb-24"
      >
        <div className="mx-auto w-full max-w-[1400px]">
          <p
            data-hero-brand
            className="mb-6 font-display text-[clamp(1.4rem,4vw,2.4rem)] font-medium tracking-[-0.02em] text-ink"
          >
            {SITE.name}
          </p>
          <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-accent">
            {SITE.role} · Personal Portfolio
          </p>

          <h1 className="font-display text-[clamp(3rem,11vw,8.5rem)] font-medium leading-[0.92] tracking-[-0.04em] text-ink">
            <span className="block overflow-hidden">
              <span data-hero-line className="block">
                Awaken
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line className="block text-mute">
                Craft,
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line className="block">
                Drive
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line className="block">
                Everything
              </span>
            </span>
          </h1>

          <div
            data-hero-sub
            className="mt-10 flex max-w-xl flex-col gap-4 md:mt-14 md:max-w-none md:flex-row md:items-end md:justify-between"
          >
            <p
              lang="ar"
              dir="rtl"
              className="font-arabic max-w-md text-right text-base leading-[1.9] text-ink/70 md:text-lg"
            >
              {SITE.tagline}
            </p>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink/50">
              <span className="relative h-8 w-px overflow-hidden bg-ink/15">
                <span className="absolute inset-x-0 top-0 h-1/2 animate-pulse bg-accent" />
              </span>
              Scroll to explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
