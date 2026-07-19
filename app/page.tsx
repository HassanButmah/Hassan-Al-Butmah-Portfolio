"use client";

import { Contact } from "@/components/Contact";
import { Chapters } from "@/components/Chapters";
import { Hero } from "@/components/Hero";
import { Modes } from "@/components/Modes";
import { Navbar } from "@/components/Navbar";
import { ProgressMark } from "@/components/ProgressMark";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function HomePage() {
  return (
    <SmoothScroll>
      <Navbar />
      <ProgressMark />
      <main>
        <Hero />
        <Chapters />
        <Work />
        <Skills />
        <Modes />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
