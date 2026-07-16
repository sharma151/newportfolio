import React from "react";
import { cn } from "@/lib/utils";

// 1. Import specific, brand-accurate icons from react-icons
import { FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiVite,
  SiReactquery,
  SiShadcnui,
  SiAntdesign,
  SiVitest,
  SiGithubactions,
  SiEslint,
} from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";

// 2. Import Lucide icons as a fallback group
import * as LucideIcons from "lucide-react";

interface IconProps {
  className?: string;
}

// Default geometric placeholder icon if absolutely nothing matches
function DefaultTechIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden="true"
    >
      <path d="M12 2 2 7v10l10 5 10-5V7L12 2zm0 3.5 6.5 3.25V16L12 19.25 5.5 16v-7.25L12 5.5z" />
    </svg>
  );
}

// Direct dictionary mapping your techBadges array strings to react-icons components
const reactIconMap: Record<string, React.ComponentType<any>> = {
  "React.js": FaReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  JavaScript: SiJavascript,
  Vite: SiVite,
  "TanStack Query": SiReactquery,
  Redux: SiRedux,
  "ShadCN UI": SiShadcnui,
  Docker: FaDocker,
  Git: FaGitAlt,
  "Ant Design": SiAntdesign,
  "TanStack Router": BiGitBranch, // Using a clean branch indicator for modern routers
  Vitest: SiVitest,
  "GitHub Actions": SiGithubactions,
  ESLint: SiEslint,
};

// Fallback helper to search through lucide-react if a brand icon isn't manually mapped above (e.g. Husky)
function getLucideIconComponent(name: string): React.ComponentType<any> | null {
  const cleanName = name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const lucideKey = Object.keys(LucideIcons).find(
    (key) =>
      key.toLowerCase() === cleanName ||
      key.toLowerCase() === `${cleanName}icon`
  );

  if (lucideKey) {
    return (LucideIcons as any)[lucideKey];
  }
  return null;
}

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  // Priority 1: Check precise React Icons brand mapping
  const BrandIcon = reactIconMap[name];
  if (BrandIcon) {
    return <BrandIcon className={cn("h-5 w-5 shrink-0", className)} />;
  }

  // Priority 2: Look up inside the Lucide pack dynamically (e.g., checks for "Husky" -> Dog/Shield icon variants)
  const LucideIcon = getLucideIconComponent(name);
  if (LucideIcon) {
    return (
      <LucideIcon
        className={cn("h-5 w-5 shrink-0", className)}
        strokeWidth={2}
      />
    );
  }

  // Priority 3: Safe generic layout placeholder
  return <DefaultTechIcon className={className} />;
}

// --- BRAND METADATA ENGINES ---
export interface TechBrandStyle {
  color: string;
  glow: string;
}

export const techBrandStyles: Record<string, TechBrandStyle> = {
  "React.js": { color: "#61DAFB", glow: "rgba(97, 218, 251, 0.35)" },
  "Next.js": { color: "#E5E7EB", glow: "rgba(229, 231, 235, 0.2)" },
  TypeScript: { color: "#3178C6", glow: "rgba(49, 120, 198, 0.35)" },
  "Tailwind CSS": { color: "#38BDF8", glow: "rgba(56, 189, 248, 0.35)" },
  "Framer Motion": { color: "#A855F7", glow: "rgba(168, 85, 247, 0.35)" },
  JavaScript: { color: "#F7DF1E", glow: "rgba(247, 223, 30, 0.25)" },
  Vite: { color: "#F59E0B", glow: "rgba(245, 158, 11, 0.35)" },
  "TanStack Query": { color: "#EF4444", glow: "rgba(239, 68, 68, 0.35)" },
  Redux: { color: "#764ABC", glow: "rgba(118, 75, 188, 0.35)" },
  "ShadCN UI": { color: "#FFFFFF", glow: "rgba(255, 255, 255, 0.2)" },
  Docker: { color: "#2496ED", glow: "rgba(36, 150, 237, 0.35)" },
  Git: { color: "#F05032", glow: "rgba(240, 80, 50, 0.35)" },
  "Ant Design": { color: "#1890FF", glow: "rgba(24, 144, 255, 0.35)" },
  "TanStack Router": { color: "#22C55E", glow: "rgba(34, 197, 94, 0.35)" },
  Vitest: { color: "#FCC72B", glow: "rgba(252, 199, 43, 0.35)" },
  "GitHub Actions": { color: "#2088FF", glow: "rgba(32, 136, 255, 0.35)" },
  ESLint: { color: "#4B32C3", glow: "rgba(75, 50, 195, 0.35)" },
  Husky: { color: "#9CA3AF", glow: "rgba(156, 163, 175, 0.2)" },
};

const defaultBrandStyle: TechBrandStyle = {
  color: "#818CF8",
  glow: "rgba(129, 140, 248, 0.35)",
};

export function getTechBrandStyle(name: string): TechBrandStyle {
  return techBrandStyles[name] ?? defaultBrandStyle;
}
