"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
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
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
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
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="flex justify-center px-6 pb-16 pt-32 lg:px-12"
      aria-labelledby="about-intro-heading"
    >
      {/* Added lg:justify-items-center to keep things balanced on big screens */}
      <div className="mx-auto grid w-full max-w-7xl items-center justify-center gap-12 lg:grid-cols-2 lg:justify-items-center lg:gap-20">
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
            in {siteConfig.location}. With over 2 years of experience, I
            specialize in crafting performant, accessible, and visually stunning
            web applications that push the boundaries of what&apos;s possible in
            the browser.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Currently I work as a Frontend Developer at Young Innovation Pvt.
            Ltd., Nepal focusing on developing secure, scalable, and
            user-friendly web applications. I hold a degree in Computer Science
            Engineering and have a strong interest in cybersecurity and modern
            web technologies.
          </p>
        </div>

        {/* Removed unnecessary inner flex row wrapper for desktop view to prevent centering issues */}
        <div
          ref={imageRef}
          className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-full md:max-w-[350px]"
        >
          <Image
            src={siteConfig.profileImage}
            alt={`Portrait of ${siteConfig.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 50vw, 50vw"
            priority
          />
          {/* Circular border overlay */}
          <div
            className="absolute inset-0 rounded-full ring-1 ring-inset ring-border"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
