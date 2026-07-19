"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { PHOTOS, SITE } from "@/constants/site";
import { gsap, registerGsap } from "@/lib/gsap";

export function Contact() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.from("[data-contact]", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="contact"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Full-bleed photo */}
      <div className="absolute inset-0">
        <Image
          src={PHOTOS.contact}
          alt={SITE.name}
          fill
          sizes="100vw"
          className="object-cover object-[center_20%]"
          priority={false}
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-5 pt-28 md:px-10 md:pt-36">
        <div className="mx-auto flex w-full max-w-[900px] flex-1 flex-col items-center justify-center text-center">
          <p
            data-contact
            className="text-[11px] uppercase tracking-[0.35em] text-accent-soft"
          >
            Contact · {SITE.name}
          </p>
          <h2
            data-contact
            className="mt-6 font-display text-[clamp(2.4rem,7vw,5.2rem)] font-medium leading-[0.98] tracking-[-0.04em] text-paper"
          >
            Let&apos;s build something people stay inside.
          </h2>
          <p
            data-contact
            lang="ar"
            dir="rtl"
            className="font-arabic mx-auto mt-7 max-w-lg text-center text-base leading-[1.9] text-white/70 md:text-lg"
          >
            متاح لتعاونات مختارة تشمل إطلاق المنتجات ومواقع العلامات التجارية
            وتجارب الويب التفاعلية.
          </p>

          <div
            data-contact
            className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex h-12 items-center rounded-full bg-paper px-7 text-sm tracking-wide text-ink transition hover:bg-accent-soft"
            >
              {SITE.email}
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-full border border-white/30 px-7 text-sm tracking-wide text-paper transition hover:border-accent-soft hover:text-accent-soft"
            >
              GitHub
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-full border border-white/30 px-7 text-sm tracking-wide text-paper transition hover:border-accent-soft hover:text-accent-soft"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <footer className="border-t border-white/10 py-6 text-center">
          <p className="text-[12px] tracking-[0.06em] text-paper">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
