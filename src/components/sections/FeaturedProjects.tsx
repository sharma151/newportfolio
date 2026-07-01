"use client";

import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Badge } from "@/components/ui/Badge";
import { getFeaturedProjects } from "@/data/portfolioData";
import { gsap, registerScrollTrigger } from "@/hooks/useScrollTrigger";

const gridLayouts = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
];

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projects = getFeaturedProjects();

  useGSAP(
    () => {
      registerScrollTrigger();
      const cards = sectionRef.current?.querySelectorAll("[data-project-card]");

      if (!cards) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
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
      className="px-6 py-24 lg:px-8"
      aria-labelledby="featured-projects-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Selected Work
            </p>
            <h2
              id="featured-projects-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            data-cursor="interactive"
            className="group hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:flex"
          >
            View All
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              data-cursor="interactive"
              data-project-card
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${gridLayouts[index] ?? ""}`}
              aria-label={`View project: ${project.title}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:h-full md:min-h-[280px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-2">
                  <Badge variant="accent">{project.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {project.info}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
