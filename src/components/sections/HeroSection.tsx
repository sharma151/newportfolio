"use client";

import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/portfolioData";
import { gsap, registerScrollTrigger } from "@/hooks/useScrollTrigger";
import { useSplitTextAnimation } from "@/hooks/useSplitTextAnimation";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { containerRef: titleRef, chars } = useSplitTextAnimation(
    siteConfig.name,
    { stagger: 0.04, delay: 0.3 }
  );

  useGSAP(
    () => {
      registerScrollTrigger();

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.3, ease: "power3.out" }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="grid-accent absolute inset-0 opacity-100 dark:opacity-55"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {siteConfig.title}
        </p>

        <h1
          id="hero-heading"
          className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span
            ref={titleRef}
            className="inline-flex flex-wrap justify-center gap-x-[0.05em]"
          >
            {chars.map((char, i) => (
              <span
                key={`${char}-${i}`}
                data-char
                className="inline-block"
                style={{ perspective: "600px" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          {siteConfig.tagline}
        </p>

        <div
          ref={ctaRef}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/projects" data-cursor="interactive">
            <Button size="lg">View Projects</Button>
          </Link>
          <Link href="/about" data-cursor="interactive">
            <Button variant="outline" size="lg">
              About Me
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <ArrowDown className="h-5 w-5 animate-bounce text-muted-foreground" />
      </div>
    </section>
  );
}
