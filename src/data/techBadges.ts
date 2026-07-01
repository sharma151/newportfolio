export interface TechBadgeItem {
  name: string;
  rotate: number;
  offsetY: number;
}

export const techBadges: TechBadgeItem[] = [
  { name: "React", rotate: -2, offsetY: 0 },
  { name: "TypeScript", rotate: 1, offsetY: 4 },
  { name: "Next.js", rotate: -1, offsetY: -2 },
  { name: "Tailwind CSS", rotate: 2, offsetY: 6 },
  { name: "Framer Motion", rotate: -3, offsetY: 0 },
  { name: "Vite", rotate: 3, offsetY: 8 },
  { name: "TanStack Query", rotate: -2, offsetY: 4 },
  { name: "Redux", rotate: 1, offsetY: 0 },
  { name: "Node.js", rotate: -1, offsetY: 6 },
  { name: "Python", rotate: 2, offsetY: 0 },
  { name: "Docker", rotate: -2, offsetY: 4 },
  { name: "Git", rotate: 1, offsetY: 0 },
  { name: "GraphQL", rotate: -1, offsetY: 6 },
  { name: "Figma", rotate: 2, offsetY: 0 },
];
