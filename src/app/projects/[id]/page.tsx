import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { getProjectById, projects } from "@/data/portfolioData";

interface ProjectPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({
  params,
}: ProjectPageProps): Metadata {
  const project = getProjectById(params.id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.info,
    openGraph: {
      title: project.title,
      description: project.info,
      images: [{ url: project.image, alt: project.title }],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
