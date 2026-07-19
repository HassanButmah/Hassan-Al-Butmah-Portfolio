"use client";

import { useEffect, useRef } from "react";
import { SITE } from "@/constants/site";
import { gsap, registerGsap } from "@/lib/gsap";

const MODES = {
  on: [
    {
      num: "01",
      title: "For Product",
      text: "تجارب إطلاق تروي قصة المنتج وتوصل قيمته بإحساس.",
    },
    {
      num: "02",
      title: "For Brand",
      text: "هويات رقمية تصبح فيها الحركة جزءًا من التوقيع.",
    },
    {
      num: "03",
      title: "For WebGL",
      text: "تجارب ثلاثية الأبعاد تحافظ على سلاستها أثناء التمرير.",
    },
    {
      num: "04",
      title: "For Systems",
      text: "أنظمة تربط التصميم بالكود وتبقى قابلة للتوسع.",
    },
  ],
  off: [
    {
      num: "05",
      title: "For Clarity",
      text: "واجهات هادئة وحِرفة واضحة.",
    },
    {
      num: "06",
      title: "For Pace",
      text: "حركة متزنة لا تطغى على المحتوى.",
    },
    {
      num: "07",
      title: "For Detail",
      text: "توازن دقيق بين الخط والمساحة والتوقيت.",
    },
    {
      num: "08",
      title: "For Trust",
      text: "واجهات مريحة يرغب المستخدم بالبقاء داخلها.",
    },
  ],
} as const;

export function Modes() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.from("[data-mode-head]", {
        y: 36,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });

      gsap.from("[data-mode]", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-mode-grid]",
          start: "top 80%",
          once: true,
        },
        clearProps: "opacity,transform",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-paper px-5 py-24 md:px-10 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(61,107,102,0.1),transparent_50%),radial-gradient(ellipse_at_90%_100%,rgba(212,184,150,0.1),transparent_50%)]" />

      <div className="relative mx-auto max-w-[1400px]">
        <p
          data-mode-head
          className="text-[11px] uppercase tracking-[0.3em] text-accent"
        >
          Capabilities · {SITE.shortName}
        </p>
        <h2
          data-mode-head
          className="mt-4 max-w-3xl font-display text-[clamp(2rem,5vw,3.8rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink"
        >
          How I work across every digital product.
        </h2>
        <p
          data-mode-head
          lang="ar"
          dir="rtl"
          className="font-arabic mt-4 max-w-xl text-right leading-[1.9] text-mute"
        >
          أبني المنتجات بطريقة متوازنة — قوة في التنفيذ، وحس في التجربة.
        </p>

        <div data-mode-grid className="mt-16 space-y-14 md:mt-20 md:space-y-16">
          {(["on", "off"] as const).map((side) => (
            <div key={side}>
              <div className="mb-6 flex items-center gap-4">
                <span
                  className={`inline-flex h-8 items-center rounded-full px-4 text-[11px] uppercase tracking-[0.22em] ${
                    side === "on"
                      ? "bg-ink text-paper"
                      : "border border-ink/15 text-ink/60"
                  }`}
                >
                  {side === "on" ? "ON · Build" : "OFF · Feel"}
                </span>
                <span className="h-px flex-1 bg-ink/10" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {MODES[side].map((item) => (
                  <article
                    key={item.title}
                    data-mode
                    className={`group relative overflow-hidden rounded-2xl border p-6 transition duration-500 md:p-8 ${
                      side === "on"
                        ? "border-ink/10 bg-ink text-paper hover:border-accent-soft/40"
                        : "border-ink/10 bg-white/60 text-ink hover:border-accent/30 hover:bg-white"
                    }`}
                  >
                    <div
                      className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl transition duration-500 group-hover:opacity-100 ${
                        side === "on"
                          ? "bg-accent/25 opacity-40"
                          : "bg-accent/15 opacity-0"
                      }`}
                    />

                    <div className="relative flex items-start justify-between gap-4">
                      <p
                        className={`font-display text-3xl md:text-4xl ${
                          side === "on" ? "text-white/20" : "text-ink/15"
                        }`}
                      >
                        {item.num}
                      </p>
                      <span
                        className={`mt-1 h-2 w-2 rounded-full ${
                          side === "on" ? "bg-accent-soft" : "bg-accent"
                        }`}
                      />
                    </div>

                    <h3 className="relative mt-6 font-display text-2xl tracking-[-0.02em] md:text-[1.75rem]">
                      {item.title}
                    </h3>
                    <p
                      lang="ar"
                      dir="rtl"
                      className={`font-arabic relative mt-3 text-right text-sm leading-[1.9] md:text-base ${
                        side === "on" ? "text-white/60" : "text-mute"
                      }`}
                    >
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
