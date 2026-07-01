import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

function IconBase({
  className,
  children,
  viewBox = "0 0 24 24",
}: IconProps & { children: React.ReactNode; viewBox?: string }) {
  return (
    <svg
      viewBox={viewBox}
      fill="currentColor"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ReactIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l-.28.5.02.02c.31-.05.6-.1.86-.16-.08-.28-.18-.59-.3-.87m-1.1-2.33a12 12 0 0 0-1.9-1.06 12 12 0 0 0-3.4 0 12 12 0 0 0-1.9 1.06c.36.41.7.85 1 1.31.33-.01.67-.01 1.01-.01.34 0 .68 0 1.01.01.3-.46.64-.9 1-1.31M12 3.4c-1.2 0-2.17.97-2.17 2.17 0 .6.24 1.14.64 1.53.4.4.94.64 1.53.64.6 0 1.14-.24 1.53-.64a2.17 2.17 0 0 0-2.53-3.7M5.57 7.34A10.9 10.9 0 0 0 4.1 12c.49 1.63 1.31 3.14 2.39 4.43.17-.93.46-1.93.86-2.97a23 23 0 0 1-1.78-6.12M18.43 7.34c-.5 1.72-1.1 3.36-1.78 4.95.4 1.04.69 2.04.86 2.97A10.9 10.9 0 0 0 19.9 12c-.49-1.63-1.31-3.14-2.39-4.43a23 23 0 0 0 1.78-6.12M12 1.73c-1.73 0-3.27.37-4.57 1.04 1.07 1.87 1.97 4.05 2.62 6.36A22.6 22.6 0 0 1 12 8.9c.88 0 1.74.07 2.57.2.65-2.31 1.55-4.49 2.62-6.36A10.2 10.2 0 0 0 12 1.73M12 22.27c1.73 0 3.27-.37 4.57-1.04-1.07-1.87-1.97-4.05-2.62-6.36a22.6 22.6 0 0 1-2.57.2 22.6 22.6 0 0 1-2.57-.2c-.65 2.31-1.55 4.49-2.62 6.36 1.3.67 2.84 1.04 4.57 1.04" />
    </IconBase>
  );
}

export function NextJsIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M11.5 2.5h1v17.8l-1-.25V2.5zm-3 3.2L18.5 20h-2.1l-2.5-6.7-2.5 6.7H9.4l10-14.3z" />
    </IconBase>
  );
}

export function TypeScriptIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M4 4h16v16H4V4zm14.5 12.2c.6.9 1.5 1.6 2.9 1.6 1.2 0 2-.5 2-1.4 0-.9-.7-1.2-2-1.7l-.7-.3c-2-.7-3.3-1.6-3.3-3.5 0-1.7 1.3-3 3.4-3 1.5 0 2.6.5 3.4 1.9l-1.9 1.2c-.4-.7-1-.9-1.6-.9-.7 0-1.1.4-1.1 1 0 .7.4 1 1.4 1.4l.7.3c2.3.8 3.6 1.7 3.6 3.6 0 2-1.6 3.2-3.8 3.2-2.1 0-3.5-.9-4.2-2.1l2-1.4z" />
    </IconBase>
  );
}

export function VueIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 3.5L2 20h4.5l1.5-2.6h8l1.5 2.6H22L12 3.5zm0 5.2l3.2 5.6H8.8L12 8.7z" />
    </IconBase>
  );
}

export function TailwindIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 6c-2.7 0-4.4 1.3-5 4 1-1.3 2.1-1.8 3.3-1.6.72.14 1.23.55 1.8 1 .95.87 2.05 1.88 4.4 1.88 2.7 0 4.4-1.3 5-4-1 1.3-2.1 1.8-3.3 1.6-.72-.14-1.23-.55-1.8-1-.95-.87-2.05-1.88-4.4-1.88zM7 14c-2.7 0-4.4 1.3-5 4 1-1.3 2.1-1.8 3.3-1.6.72.14 1.23.55 1.8 1 .95.87 2.05 1.88 4.4 1.88 2.7 0 4.4-1.3 5-4-1 1.3-2.1 1.8-3.3 1.6-.72-.14-1.23-.55-1.8-1-.95-.87-2.05-1.88-4.4-1.88z" />
    </IconBase>
  );
}

export function GsapIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M4 18V6h4.5c2.5 0 4 1.4 4 3.5S11 13 8.5 13H7v5H4zm3-7h1.4c1 0 1.6-.5 1.6-1.3S9.4 8.5 8.4 8.5H7V11zm9.5 7h-3l-1.2-3h-3.1l-1.2 3H5.2l4.3-12h2.9l4.3 12zM11.2 15.5l1-2.8 1 2.8h-2zM20 18v-5.2c0-1.5-.8-2.3-2.2-2.3-.9 0-1.7.4-2.2 1.1V13H12v8h2.5v-4.8c0-.8.5-1.3 1.2-1.3.7 0 1.1.4 1.1 1.2V18H20z" />
    </IconBase>
  );
}

export function FramerMotionIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm13 0h3v3h-3v-3zm-3 3h3v4h-4v-3h1z" />
    </IconBase>
  );
}

export function ThreeJsIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l7.5 3.8v7.6L12 19.4l-7.5-3.8V8l7.5-3.8z" />
    </IconBase>
  );
}

export function WebGlIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
    </IconBase>
  );
}

export function LottieIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M8 5h8v2H8V5zm0 4h8v2H8V9zm0 4h5v2H8v-2zm-2 6h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
    </IconBase>
  );
}

export function RiveIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm2 4v8h2V8H8zm4 0v8h2v-3h1a2 2 0 1 0 0-4h-1V8h-2zm2 2v0h1a1 1 0 1 1 0 0h-1z" />
    </IconBase>
  );
}

export function NodeJsIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 2a3 3 0 0 0-3 3v1H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3zm-1 4V5a1 1 0 1 1 2 0v1h-2zm-4 4h10v8H7v-8z" />
    </IconBase>
  );
}

export function GraphQlIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 2l2.6 4.5h5.2L17.2 11l2.6 4.5-5.2.1L12 20l-2.6-4.4-5.2-.1 2.6-4.5L4.2 6.5h5.2L12 2zm0 5.8a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4z" />
    </IconBase>
  );
}

export function PostgreSqlIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 3C8.5 3 6 5 6 8.5c0 2 .8 3.5 2 4.5v6c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-6c1.2-1 2-2.5 2-4.5C18 5 15.5 3 12 3zm-2 14v-5.2c.6.1 1.3.2 2 .2s1.4-.1 2-.2V17h-4z" />
    </IconBase>
  );
}

export function RedisIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 3L4 7v4l8 4 8-4V7l-8-4zm0 3.2l5 2.5v2.1l-5 2.5-5-2.5V8.7l5-2.5zM4 14l8 4 8-4v2l-8 4-8-4v-2z" />
    </IconBase>
  );
}

export function PrismaIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 2 4 20h4l4-8 4 8h4L12 2z" />
    </IconBase>
  );
}

export function VercelIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 3 4 19h16L12 3z" />
    </IconBase>
  );
}

export function DockerIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M4 10h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zM4 13h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zM3 16h14a2 2 0 0 0 2-2h1a5 5 0 0 0-5-5h-.3A6 6 0 0 0 6 14H3v2z" />
    </IconBase>
  );
}

export function GitHubActionsIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 2a4 4 0 0 0-4 4v1H6a4 4 0 0 0-4 4v5a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-5a4 4 0 0 0-4-4h-2V6a4 4 0 0 0-4-4zm-2 5V6a2 2 0 1 1 4 0v1h-4zm-4 4h12v5H6v-5z" />
    </IconBase>
  );
}

export function StorybookIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M6 4h12v16l-6-3-6 3V4zm2 2v9.5l4-2 4 2V6H8z" />
    </IconBase>
  );
}

export function FigmaIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M8 4h4a4 4 0 0 1 0 8H8V4zm0 8h4a4 4 0 0 1 0 8H8v-8zm0-8H6a2 2 0 0 0 0 4h2V4zm0 8H6a2 2 0 0 0 0 4h2v-4z" />
    </IconBase>
  );
}

export function ViteIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="m12 2 2 8h6l-5 4 2 8-5-4-5 4 2-8-5-4h6l2-8z" />
    </IconBase>
  );
}

export function TanStackQueryIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-9v4h4l-5 9z" />
    </IconBase>
  );
}

export function ReduxIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 2 4 6.5v11L12 22l8-4.5v-11L12 2zm0 2.2 5.8 3.25v6.5L12 17.5l-5.8-3.25v-6.5L12 4.2z" />
    </IconBase>
  );
}

export function PythonIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 2C9.2 2 7 3.2 7 5.5V8h5V9H6.5C4.6 9 3 10.4 3 12.5v3C3 17.6 4.6 19 6.5 19H8v-2.5c0-2.3 2.2-3.5 5-3.5h3c1.9 0 3.5-1.4 3.5-3.5v-3C19.5 4.4 17.9 3 16 3h-1V2h-3zm-2.5 2c.8 0 1.5.7 1.5 1.5S10.3 7 9.5 7 8 6.3 8 5.5 8.7 4 9.5 4zm7 16c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm2.5-4H14v1h5v-2.5c0-2.3-2.2-3.5-5-3.5h-3C8.6 11 7 12.4 7 14.5V16h1v-1.5c0-1.3 1.2-2 3-2h3c1.9 0 3.5 1.4 3.5 3.5V16z" />
    </IconBase>
  );
}

export function GitIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.16-1.11-1.47-1.11-1.47-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02A9.3 9.3 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
    </IconBase>
  );
}

export function DefaultTechIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 2 2 7v10l10 5 10-5V7L12 2zm0 3.5 6.5 3.25V16L12 19.25 5.5 16v-7.25L12 5.5z" />
    </IconBase>
  );
}

const techIconMap: Record<string, React.ComponentType<IconProps>> = {
  React: ReactIcon,
  "Next.js": NextJsIcon,
  TypeScript: TypeScriptIcon,
  "Vue.js": VueIcon,
  "Tailwind CSS": TailwindIcon,
  GSAP: GsapIcon,
  "Framer Motion": FramerMotionIcon,
  "Three.js": ThreeJsIcon,
  WebGL: WebGlIcon,
  Lottie: LottieIcon,
  Rive: RiveIcon,
  "Node.js": NodeJsIcon,
  GraphQL: GraphQlIcon,
  PostgreSQL: PostgreSqlIcon,
  Redis: RedisIcon,
  Prisma: PrismaIcon,
  Vercel: VercelIcon,
  Docker: DockerIcon,
  "GitHub Actions": GitHubActionsIcon,
  Storybook: StorybookIcon,
  Figma: FigmaIcon,
  Vite: ViteIcon,
  "TanStack Query": TanStackQueryIcon,
  Redux: ReduxIcon,
  Python: PythonIcon,
  Git: GitIcon,
};

export interface TechBrandStyle {
  color: string;
  glow: string;
}

export const techBrandStyles: Record<string, TechBrandStyle> = {
  React: { color: "#61DAFB", glow: "rgba(97, 218, 251, 0.35)" },
  TypeScript: { color: "#3178C6", glow: "rgba(49, 120, 198, 0.35)" },
  "Next.js": { color: "#E5E7EB", glow: "rgba(229, 231, 235, 0.2)" },
  "Tailwind CSS": { color: "#38BDF8", glow: "rgba(56, 189, 248, 0.35)" },
  "Framer Motion": { color: "#A855F7", glow: "rgba(168, 85, 247, 0.35)" },
  Vite: { color: "#F59E0B", glow: "rgba(245, 158, 11, 0.35)" },
  "TanStack Query": { color: "#EF4444", glow: "rgba(239, 68, 68, 0.35)" },
  Redux: { color: "#764ABC", glow: "rgba(118, 75, 188, 0.35)" },
  "Node.js": { color: "#68A063", glow: "rgba(104, 160, 99, 0.35)" },
  Python: { color: "#3776AB", glow: "rgba(55, 118, 171, 0.35)" },
  Docker: { color: "#2496ED", glow: "rgba(36, 150, 237, 0.35)" },
  Git: { color: "#F05032", glow: "rgba(240, 80, 50, 0.35)" },
  GraphQL: { color: "#E10098", glow: "rgba(225, 0, 152, 0.35)" },
  Figma: { color: "#A259FF", glow: "rgba(162, 89, 255, 0.35)" },
  GSAP: { color: "#88CE02", glow: "rgba(136, 206, 2, 0.35)" },
  "Vue.js": { color: "#42B883", glow: "rgba(66, 184, 131, 0.35)" },
  "Three.js": { color: "#FFFFFF", glow: "rgba(255, 255, 255, 0.2)" },
  WebGL: { color: "#990000", glow: "rgba(153, 0, 0, 0.35)" },
  PostgreSQL: { color: "#336791", glow: "rgba(51, 103, 145, 0.35)" },
  Redis: { color: "#DC382D", glow: "rgba(220, 56, 45, 0.35)" },
  Prisma: { color: "#2D3748", glow: "rgba(45, 55, 72, 0.35)" },
  Vercel: { color: "#E5E7EB", glow: "rgba(229, 231, 235, 0.2)" },
  "GitHub Actions": { color: "#2088FF", glow: "rgba(32, 136, 255, 0.35)" },
  Storybook: { color: "#FF4785", glow: "rgba(255, 71, 133, 0.35)" },
};

const defaultBrandStyle: TechBrandStyle = {
  color: "#818CF8",
  glow: "rgba(129, 140, 248, 0.35)",
};

export function getTechBrandStyle(name: string): TechBrandStyle {
  return techBrandStyles[name] ?? defaultBrandStyle;
}

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = techIconMap[name] ?? DefaultTechIcon;
  return <Icon className={className} />;
}
