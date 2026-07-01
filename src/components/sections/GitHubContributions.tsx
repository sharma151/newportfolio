"use client";

import { useGSAP } from "@gsap/react";
import { useMemo, useRef } from "react";
import { siteConfig } from "@/data/portfolioData";
import { gsap, registerScrollTrigger } from "@/hooks/useScrollTrigger";
import { cn } from "@/lib/utils";

const WEEKS = 52;
const DAYS = 7;
const LEVELS = 5;

function generateContributionData(): number[][] {
  const data: number[][] = [];
  for (let week = 0; week < WEEKS; week++) {
    const weekData: number[] = [];
    for (let day = 0; day < DAYS; day++) {
      const rand = Math.random();
      if (rand < 0.25) weekData.push(0);
      else if (rand < 0.5) weekData.push(1);
      else if (rand < 0.7) weekData.push(2);
      else if (rand < 0.85) weekData.push(3);
      else weekData.push(4);
    }
    data.push(weekData);
  }
  return data;
}

const levelColors = [
  "bg-muted",
  "bg-accent/20",
  "bg-accent/40",
  "bg-accent/60",
  "bg-accent",
];

const monthLabels = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function GitHubContributions() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const contributions = useMemo(() => generateContributionData(), []);

  const totalContributions = useMemo(
    () =>
      contributions.flat().reduce((sum, level) => sum + (level > 0 ? level * 2 : 0), 0),
    [contributions]
  );

  useGSAP(
    () => {
      registerScrollTrigger();
      const cells = gridRef.current?.querySelectorAll("[data-contribution-cell]");

      if (!cells) return;

      gsap.fromTo(
        cells,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.002,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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
      className="border-t border-border px-6 py-24 lg:px-8"
      aria-labelledby="contributions-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Open Source
          </p>
          <h2
            id="contributions-heading"
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            GitHub Activity
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{totalContributions}</span>{" "}
            contributions in the last year on{" "}
            <a
              href={`https://github.com/${siteConfig.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="interactive"
              className="text-accent hover:underline"
            >
              @{siteConfig.githubUsername}
            </a>
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-card p-6">
          <div className="mb-3 flex gap-1 text-xs text-muted-foreground" aria-hidden="true">
            {monthLabels.map((month) => (
              <span key={month} className="flex-1 text-center">
                {month}
              </span>
            ))}
          </div>

          <div
            ref={gridRef}
            className="flex gap-[3px]"
            role="img"
            aria-label={`GitHub contribution graph showing ${totalContributions} contributions`}
          >
            {contributions.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3px]">
                {week.map((level, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    data-contribution-cell
                    className={cn(
                      "h-[11px] w-[11px] rounded-sm transition-colors",
                      levelColors[Math.min(level, LEVELS - 1)]
                    )}
                    title={`${level} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-end gap-2 text-xs text-muted-foreground">
            <span>Less</span>
            {levelColors.map((color, i) => (
              <div
                key={i}
                className={cn("h-[11px] w-[11px] rounded-sm", color)}
                aria-hidden="true"
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
