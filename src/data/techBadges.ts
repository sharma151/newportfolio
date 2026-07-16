export interface TechBadgeItem {
  name: string;
  rotate: number;
  offsetY: number;
}

export const techBadges: TechBadgeItem[] = [
  { name: "React.js", rotate: -2, offsetY: 0 },
  { name: "Next.js", rotate: -1, offsetY: -2 },
  { name: "TypeScript", rotate: 1, offsetY: 4 },
  { name: "Tailwind CSS", rotate: 2, offsetY: 6 },
  { name: "Framer Motion", rotate: -3, offsetY: 0 },
  { name: "JavaScript", rotate: 2, offsetY: 0 },
  { name: "Vite", rotate: 3, offsetY: 8 },
  { name: "TanStack Query", rotate: -2, offsetY: 4 },
  { name: "Redux", rotate: 1, offsetY: 0 },
  { name: "ShadCN UI", rotate: -1, offsetY: 6 },
  { name: "Docker", rotate: -2, offsetY: 4 },
  { name: "Git", rotate: 1, offsetY: 0 },
  { name: "Ant Design", rotate: -1, offsetY: 6 },
  { name: "TanStack Router", rotate: 2, offsetY: 0 },

  // --- TESTING ---
  { name: "Vitest", rotate: -2, offsetY: 2 },
  // { name: "Playwright", rotate: 3, offsetY: 6 },

  // --- BACKEND & DATABASE ---
  // { name: "Node.js", rotate: -1, offsetY: 0 },
  // { name: "PostgreSQL", rotate: 2, offsetY: 4 },
  // { name: "Drizzle ORM", rotate: -3, offsetY: 8 },

  // --- DEVOPS & CI/CD ---
  { name: "GitHub Actions", rotate: 1, offsetY: -2 },
  // { name: "AWS", rotate: -2, offsetY: 4 },

  // --- LINTING & TOOLING ---
  { name: "ESLint", rotate: 3, offsetY: 2 },
  { name: "Husky", rotate: -1, offsetY: 6 },
];
