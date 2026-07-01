import type { Metadata } from "next";
import { ResumeViewer } from "@/components/sections/ResumeViewer";
import { siteConfig } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Resume",
  description: `View and download ${siteConfig.name}'s resume — ${siteConfig.title}.`,
};

export default function ResumePage() {
  return <ResumeViewer />;
}
