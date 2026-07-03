import type { Metadata } from "next";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { ExperienceRoadmap } from "@/components/sections/ExperienceRoadmap";
import { GitHubContributions } from "@/components/sections/GitHubContributions";
import { HobbiesInterests } from "@/components/sections/HobbiesInterests";
import { TechStackGrid } from "@/components/sections/TechStackGrid";
import { siteConfig } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name} — ${siteConfig.title}. Experience, education, and technical expertise.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <ExperienceRoadmap />
      <TechStackGrid />
      <GitHubContributions />
      <HobbiesInterests />
    </>
  );
}
