"use client";

import { useGSAP } from "@gsap/react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import type { HobbyDetail as HobbyDetailType } from "@/data/portfolioData";
import { gsap, registerScrollTrigger } from "@/hooks/useScrollTrigger";

interface HobbyDetailProps {
  hobby: HobbyDetailType;
}

export function HobbyDetail({ hobby }: HobbyDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerScrollTrigger();

      const tl = gsap.timeline();

      tl.fromTo(
        heroRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      ).fromTo(
        contentRef.current?.children ?? [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        "-=0.6"
      );

      if (highlightsRef.current) {
        gsap.fromTo(
          highlightsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: highlightsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <article ref={containerRef} className="min-h-screen px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <Link href="/about" data-cursor="interactive">
            <Button variant="ghost" className="gap-2 -ml-4">
              <ArrowLeft className="h-4 w-4" />
              Back to About
            </Button>
          </Link>
        </div>

        <header ref={heroRef} className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl bg-muted">
          <Image
            src={hobby.coverImage}
            alt={hobby.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {hobby.title}
            </h1>
          </div>
        </header>

        <div ref={contentRef} className="mt-12">
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {hobby.description}
          </p>
        </div>

        {hobby.highlights.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold tracking-tight">Highlights</h2>
            <div ref={highlightsRef} className="mt-8 grid gap-8 sm:grid-cols-2">
              {hobby.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-colors hover:bg-muted/50"
                >
                  {highlight.image && (
                    <div className="relative -mx-6 -mt-6 mb-6 aspect-video overflow-hidden border-b border-border/50">
                      <Image
                        src={highlight.image}
                        alt={highlight.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold">{highlight.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
