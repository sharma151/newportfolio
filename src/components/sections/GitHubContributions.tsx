"use client";

import { useGSAP } from "@gsap/react";
import { useTheme } from "next-themes";
import { useRef, useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { siteConfig } from "@/data/portfolioData";
import { gsap, registerScrollTrigger } from "@/hooks/useScrollTrigger";

export function GitHubContributions() {
  const sectionRef = useRef<HTMLElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(
    () => {
      registerScrollTrigger();

      if (!calendarRef.current) return;

      gsap.fromTo(
        calendarRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
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

  const explicitTheme = {
    light: [
      "#e5e7eb",
      "#818CF866",
      "#818CF899",
      "#818CF8CC",
      "#818CF8",
    ],
    dark: [
      "#374151",
      "#818CF866",
      "#818CF899",
      "#818CF8CC",
      "#818CF8",
    ],
  };

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
            My open source contributions on{" "}
            <a
              href={`https://github.com/sharma151`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="interactive"
              className="text-accent hover:underline"
            >
              @sharma151
            </a>
          </p>
        </div>

        <div
          ref={calendarRef}
          className="flex justify-center rounded-2xl border border-border bg-card p-4 sm:p-6 w-full overflow-hidden"
        >
          <div className="w-fit mx-auto max-w-full [&_article]:w-full [&_svg]:!w-full [&_svg]:!h-auto [&_svg]:!max-w-full">
            {mounted && (
              <GitHubCalendar
                username="sharma151"
                colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                theme={explicitTheme}
                fontSize={12}
                blockSize={12}
                blockMargin={4}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
