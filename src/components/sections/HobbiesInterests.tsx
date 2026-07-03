"use client";

import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Headphones, Map, Mountain } from "lucide-react";
import { useRef } from "react";
import { gsap, registerScrollTrigger } from "@/hooks/useScrollTrigger";

const hobbies = [
  {
    id: "trekking",
    title: "Trekking",
    description: "Conquering high altitudes and embracing the serenity of nature.",
    icon: Mountain,
  },
  {
    id: "hiking",
    title: "Hiking",
    description: "Exploring new trails and finding peace away from the screen.",
    icon: Map,
  },
  {
    id: "music",
    title: "Music",
    description: "Curating vibes and finding rhythm in every step of the journey.",
    icon: Headphones,
  },
];

export function HobbiesInterests() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerScrollTrigger();

      gsap.fromTo(
        headerRef.current?.children ?? [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current?.children ?? [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        socialRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 90%",
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
      className="relative overflow-hidden px-6 py-24 lg:px-12"
      aria-labelledby="hobbies-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div ref={headerRef} className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Beyond The Screen
          </p>
          <h2
            id="hobbies-heading"
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Life Outside Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            When I&apos;m not writing code, you&apos;ll probably find me exploring the great outdoors or getting lost in a good playlist.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {hobbies.map((hobby) => (
            <Link
              key={hobby.id}
              href={`/hobbies/${hobby.id}`}
              data-cursor="interactive"
              className="group flex flex-col justify-between rounded-xl border border-border/50 bg-card/30 p-6 transition-all hover:bg-card hover:shadow-lg hover:shadow-accent/5 dark:hover:bg-card/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-background text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <hobby.icon className="h-5 w-5" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {hobby.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {hobby.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div ref={socialRef} className="mt-16 flex justify-center">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="interactive"
            className="group flex items-center gap-2 rounded-full border border-border/50 bg-card px-6 py-3 text-sm font-medium transition-all hover:border-accent hover:bg-accent/5"
          >
            <span className="text-foreground transition-colors">
              Follow my adventures on Instagram
            </span>
            <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
}
