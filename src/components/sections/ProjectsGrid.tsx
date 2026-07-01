"use client";

import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { type ProjectItem, projectCategories, projects } from "@/data/portfolioData";
import { gsap, registerScrollTrigger } from "@/hooks/useScrollTrigger";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const router = useRouter();

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  useGSAP(
    () => {
      registerScrollTrigger();
      animateCards();
    },
    { scope: sectionRef, dependencies: [activeCategory] }
  );

  const animateCards = () => {
    const cards = gridRef.current?.querySelectorAll("[data-project-item]");
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      }
    );
  };

  const handleProjectClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    project: ProjectItem
  ) => {
    e.preventDefault();
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const clone = card.cloneNode(true) as HTMLElement;
    clone.style.position = "fixed";
    clone.style.top = `${rect.top}px`;
    clone.style.left = `${rect.left}px`;
    clone.style.width = `${rect.width}px`;
    clone.style.height = `${rect.height}px`;
    clone.style.zIndex = "9999";
    clone.style.pointerEvents = "none";
    document.body.appendChild(clone);

    gsap.to(clone, {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      borderRadius: 0,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        document.body.removeChild(clone);
        router.push(`/projects/${project.id}`);
      },
    });

    gsap.to(card, {
      opacity: 0,
      duration: 0.3,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="px-6 py-24 lg:px-8"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Portfolio
          </p>
          <h1
            id="projects-heading"
            className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            All Projects
          </h1>
        </div>

        <div
          className="mb-12 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              data-cursor="interactive"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          ref={gridRef}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          role="tabpanel"
        >
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              data-cursor="interactive"
              data-project-item
              onClick={(e) => handleProjectClick(e, project)}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
              aria-label={`View project: ${project.title}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Badge variant="accent">{project.category}</Badge>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {project.info}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  View Project
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
