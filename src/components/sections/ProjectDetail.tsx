"use client";

import { useGSAP } from "@gsap/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { type ProjectItem } from "@/data/portfolioData";
import { gsap, registerScrollTrigger } from "@/hooks/useScrollTrigger";

interface ProjectDetailProps {
  project: ProjectItem;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerScrollTrigger();

      gsap.fromTo(
        heroRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        contentRef.current?.children ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          delay: 0.4,
          ease: "power3.out",
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <article ref={sectionRef}>
      <div ref={heroRef} className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div ref={contentRef} className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <Link
          href="/projects"
          data-cursor="interactive"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Projects
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="accent">{project.category}</Badge>
          <span className="text-sm text-muted-foreground">{project.year}</span>
          <span className="text-sm text-muted-foreground">·</span>
          <span className="text-sm text-muted-foreground">{project.role}</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">{project.info}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="interactive"
            >
              <Button size="lg">
                View Live Project
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Button>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="interactive"
            >
              <Button variant="outline" size="lg">
                <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                View on GitHub
              </Button>
            </a>
          )}
        </div>

        <div className="mt-12 flex flex-wrap gap-2" role="list" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="prose-section mt-12">
          <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>
      </div>
    </article>
  );
}
