"use client";

import { useGSAP } from "@gsap/react";
// import Image from "next/image";
import { useRef } from "react";
import { siteConfig } from "@/data/portfolioData";
import { gsap, registerScrollTrigger } from "@/hooks/useScrollTrigger";

export function AboutIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerScrollTrigger();

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
      );

      gsap.fromTo(
        textRef.current?.children ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.3,
          ease: "power3.out",
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="px-6 pt-32 pb-16 lg:px-8"
      aria-labelledby="about-intro-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* <div ref={imageRef} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
            alt={`Portrait of ${siteConfig.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border" aria-hidden="true" />
        </div> */}

        <div ref={textRef}>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            About
          </p>
          <h1
            id="about-intro-heading"
            className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Building digital experiences that{" "}
            <span className="gradient-text">inspire</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I&apos;m {siteConfig.name}, a {siteConfig.title.toLowerCase()} based
            in {siteConfig.location}. With over 8 years of experience, I
            specialize in crafting performant, accessible, and visually stunning
            web applications that push the boundaries of what&apos;s possible in
            the browser.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            My work sits at the intersection of engineering precision and
            creative expression — from design systems used by millions to
            award-winning campaign experiences for global brands.
          </p>
        </div>
      </div>
    </section>
  );
}
