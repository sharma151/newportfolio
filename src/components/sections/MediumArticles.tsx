"use client";

import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Clock } from "lucide-react";
import { useRef } from "react";
import { Badge } from "@/components/ui/Badge";
import { mediumArticles } from "@/data/portfolioData";
import { gsap, registerScrollTrigger } from "@/hooks/useScrollTrigger";

export function MediumArticles() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerScrollTrigger();
      const cards = sectionRef.current?.querySelectorAll("[data-article-card]");

      if (!cards) return;

      gsap.fromTo(
        cards,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.12,
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

  return (
    <section
      ref={sectionRef}
      className="border-t border-border px-6 py-24 lg:px-8"
      aria-labelledby="articles-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Writing
          </p>
          <h2
            id="articles-heading"
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Latest Articles
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {mediumArticles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="interactive"
              data-article-card
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
              aria-label={`Read article: ${article.title}`}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150" aria-hidden="true" />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <Badge variant="outline">{article.category}</Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
                  {article.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
