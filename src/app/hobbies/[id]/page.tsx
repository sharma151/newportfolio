import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HobbyDetail } from "@/components/sections/HobbyDetail";
import { getHobbyById, hobbiesDetailData } from "@/data/portfolioData";

interface HobbyPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return hobbiesDetailData.map((hobby) => ({
    id: hobby.id,
  }));
}

export async function generateMetadata({ params }: HobbyPageProps): Promise<Metadata> {
  const { id } = await params;
  const hobby = getHobbyById(id);

  if (!hobby) {
    return { title: "Hobby Not Found" };
  }

  return {
    title: hobby.title,
    description: hobby.description,
    openGraph: {
      title: hobby.title,
      description: hobby.description,
      images: [{ url: hobby.coverImage, alt: hobby.title }],
    },
  };
}

export default async function HobbyPage({ params }: HobbyPageProps) {
  const { id } = await params;
  const hobby = getHobbyById(id);

  if (!hobby) {
    notFound();
  }

  return <HobbyDetail hobby={hobby} />;
}
