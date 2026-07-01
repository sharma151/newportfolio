"use client";

import { useGSAP } from "@gsap/react";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";
import { educationExperience } from "@/data/portfolioData";
import { gsap, registerScrollTrigger } from "@/hooks/useScrollTrigger";

export function ExperienceRoadmap() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerScrollTrigger();
      const items = timelineRef.current?.querySelectorAll("[data-milestone]");

      if (!items) return;

      gsap.fromTo(
        items,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const line = timelineRef.current?.querySelector("[data-timeline-line]");
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="border-t border-border px-6 py-24 lg:px-8"
      aria-labelledby="roadmap-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Journey
          </p>
          <h2
            id="roadmap-heading"
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Experience & Education
          </h2>
        </div>

        <div ref={timelineRef} className="relative" role="list">
          <div
            data-timeline-line
            className="absolute left-[7px] top-2 h-full w-px origin-top bg-border md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          {educationExperience.map((item, index) => (
            <article
              key={`${item.title}-${item.year}`}
              data-milestone
              className={`relative mb-12 flex flex-col gap-4 pl-8 md:mb-16 md:w-1/2 md:pl-0 ${
                index % 2 === 0
                  ? "md:mr-auto md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12"
              }`}
              role="listitem"
            >
              <div
                className={`absolute top-1 h-4 w-4 rounded-full border-2 border-accent bg-background md:top-2 ${
                  index % 2 === 0
                    ? "left-0 md:left-auto md:right-[-8px]"
                    : "left-0 md:left-[-8px]"
                }`}
                aria-hidden="true"
              />

              <time className="text-sm font-medium text-accent">{item.year}</time>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.degree}
                  {item.institution && ` · ${item.institution}`}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="interactive"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-70"
                  aria-label={`Visit ${item.institution ?? item.title}`}
                >
                  Learn more
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
