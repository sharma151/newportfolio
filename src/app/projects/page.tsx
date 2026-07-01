import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { siteConfig } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore the portfolio of ${siteConfig.name} — featured web applications, design systems, and creative technology projects.`,
};

export default function ProjectsPage() {
  return <ProjectsGrid />;
}
