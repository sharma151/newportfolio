"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { getTechBrandStyle, TechIcon } from "@/components/ui/TechIcons";
import { type TechBadgeItem, techBadges } from "@/data/techBadges";
import {
  gsap as gsapShared,
  registerScrollTrigger,
} from "@/hooks/useScrollTrigger";

interface MagneticBadgeProps {
  badge: TechBadgeItem;
  index: number;
}

function MagneticBadge({ badge, index }: MagneticBadgeProps) {
  const floatRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const brand = getTechBrandStyle(badge.name);

  useGSAP(
    () => {
      const floatEl = floatRef.current;
      const el = badgeRef.current;
      if (!floatEl || !el) return;

      const floatDuration = 2.8 + (index % 4) * 0.4;
      const floatDelay = index * 0.15;

      gsap.to(floatEl, {
        y: "+=6",
        duration: floatDuration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: floatDelay,
      });

      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(el, {
          x: x * 0.35,
          y: y * 0.35,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.45)",
        });
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: floatRef, dependencies: [index] }
  );

  return (
    <div
      ref={floatRef}
      className="inline-flex will-change-transform"
      style={{
        transform: `rotate(${badge.rotate}deg) translateY(${badge.offsetY}px)`,
      }}
    >
      <div ref={badgeRef} data-tech-badge data-cursor="interactive">
        <span
          className="inline-flex items-center gap-2.5 rounded-full border px-5 py-2.5 backdrop-blur-md transition-shadow duration-300 hover:brightness-110"
          style={{
            borderColor: `${brand.color}55`,
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            boxShadow: `0 0 24px ${brand.glow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
            color: brand.color,
          }}
        >
          <TechIcon name={badge.name} className="h-4 w-4" />
          <span className="text-sm font-medium text-foreground/90">
            {badge.name}
          </span>
        </span>
      </div>
    </div>
  );
}

export function TechStackGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerScrollTrigger();

      gsapShared.fromTo(
        headerRef.current?.children ?? [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const badges = cloudRef.current?.querySelectorAll("[data-tech-badge]");
      if (!badges) return;

      gsapShared.fromTo(
        badges,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.05,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: cloudRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-border px-6 py-24 lg:px-8"
      aria-labelledby="tech-stack-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div ref={headerRef} className="mb-20 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent/80">
            Tools & Technologies
          </p>
          <h2
            id="tech-stack-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            My Tech Stack
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm text-muted-foreground">
            Move your cursor over the badges — they have their own gravity.
          </p>
        </div>

        <div
          ref={cloudRef}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-5 sm:gap-x-6 sm:gap-y-6"
          role="list"
          aria-label="Technology stack"
        >
          {techBadges.map((badge, index) => (
            <div key={badge.name} role="listitem">
              <MagneticBadge badge={badge} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
