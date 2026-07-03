export interface EducationExperienceItem {
  year: string;
  title: string;
  degree: string;
  link: string;
  description: string;
  institution?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  image: string;
  github: string | null;
  live: string | null;
  info: string;
  category: string;
  tags: string[];
  year: string;
  role: string;
  description: string;
}

export interface MediumArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
  category: string;
}

export interface TechCategory {
  name: string;
  tools: string[];
}

export interface SocialLink {
  name: string;
  href: string;
  label: string;
}

export const siteConfig = {
  name: "Saurav Sharma",
  title: "Frontend Developer",
  tagline:
    "Crafting immersive digital experiences at the intersection of design, motion, and engineering.",
  email: "sharmasaurav150503@gmail.com",
  location: "India",
  resumeUrl: "/resume/saurav-sharma-resume.pdf",
  githubUsername: "sharma151",
  profileImage: "/avatar.png",
  whatsappNumber: "8873274641", // Add your WhatsApp number here without the '+' sign
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/sharma151",
    label: "Visit GitHub profile",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/saurav0402/",
    label: "Connect on LinkedIn",
  },
  {
    name: "Email",
    href: "mailto:sharmasaurav150503@gmail.com",
    label: "Send an email",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sharma_saurav_1303/",
    label: "Follow on Instagram",
  },
  // {
  //   name: "Twitter",
  //   href: "https://twitter.com/sauravsharma",
  //   label: "Follow on Twitter",
  // },
];

export const educationExperience: EducationExperienceItem[] = [
  {
    year: "2024 - Present",
    title: "Young Innovation Pvt Ltd (NP)",
    degree: "Frontend Developer",
    link: "https://younginnovations.com.np/",
    description:
      " React Frontend Developer | Building clean, responsive UIs using modern technologies like TypeScript, TanStack Query, and Tailwind CSS. Focused on scalable components, intuitive user experiences, and continuous improvement. Open to new challenges and growth opportunities.",
  },
  {
    year: "2020 - 2024",
    title: "Oriental College of Technology",
    degree: "B.Tech - Computer science Engineering",
    link: "https://oriental.ac.in/",
    description:
      "Completed B.Tech in Computer Science and Engineering with a specialization in Cyber Security. Gained a strong foundation in core engineering disciplines including Civil, Electrical, and Mechanical, along with in-depth knowledge in Software Engineering, Cryptography, Ethical Hacking, Mobile Forensics, IT and Web Technologies, Hardware Security, OOPs, Data Structures and Algorithms, DBMS, Python, Operating Systems, Network Security, Digital Forensics, and more.",
    institution: "Bhopal (MP), India",
  },
  {
    year: "2018 - 2020",
    title: "Dav Sushil Kedia Vishwa Bharti",
    degree: "Senior Secondary Schooling",
    link: "https://davnepal.com/",
    description:
      "Completed senior secondary education (Class 11–12) under CBSE with a focus on the Science stream, specializing in Physics, Chemistry, Mathematics, Computer Science, English, and Physical Education. ",
    institution: "Kathmandu, Nepal",
  },
  {
    year: "2015 - 2018",
    title: " Gyan Bharti Public School",
    degree: "Higher Secondary School",
    link: "http://gbpsdbg.org/",
    description: " Darbhanga (BR), India ",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "infosnap",
    title: "InfoSnap",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    github: "https://github.com/sauravsharma/infosnap",
    live: "https://infosnap.dev",
    info: "Real-time analytics dashboard with fluid data visualizations and sub-16ms render performance.",
    category: "SaaS",
    tags: ["Next.js", "D3.js", "WebSockets", "TypeScript"],
    year: "2025",
    role: "Lead Frontend Engineer",
    description:
      "InfoSnap is a real-time analytics platform designed for product teams who need instant insights without sacrificing visual polish. The interface features fluid chart morphing, intelligent data density adaptation, and a custom rendering engine that maintains 60fps even with 50k+ data points. Built with a modular widget architecture and strict accessibility compliance.",
  },
  {
    id: "devflow",
    title: "DevFlow",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    github: "https://github.com/sauravsharma/devflow",
    live: "https://devflow.io",
    info: "Developer workflow automation platform with AI-assisted code review and deployment pipelines.",
    category: "Developer Tools",
    tags: ["React", "Node.js", "GraphQL", "Tailwind"],
    year: "2024",
    role: "Full-Stack Engineer",
    description:
      "DevFlow streamlines the entire development lifecycle from PR to production. Features include AI-powered code review suggestions, visual deployment pipelines, and a collaborative debugging workspace. The frontend leverages optimistic UI patterns and real-time collaboration via CRDTs.",
  },
  {
    id: "nexus-ui",
    title: "Nexus UI",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    github: "https://github.com/sauravsharma/nexus-ui",
    live: "https://nexus-ui.dev",
    info: "Open-source design system with 80+ accessible components and advanced motion primitives.",
    category: "Design System",
    tags: ["React", "Storybook", "Radix UI", "GSAP"],
    year: "2024",
    role: "Design Systems Lead",
    description:
      "Nexus UI is a comprehensive design system built for teams who refuse to compromise between aesthetics and accessibility. Every component ships with WCAG 2.2 AA compliance, comprehensive Storybook documentation, and optional GSAP-powered motion variants.",
  },
  {
    id: "pulse-analytics",
    title: "Pulse Analytics",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    github: "https://github.com/sauravsharma/pulse-analytics",
    live: null,
    info: "Privacy-first web analytics with beautiful, customizable reporting dashboards.",
    category: "SaaS",
    tags: ["Vue.js", "PostgreSQL", "Redis", "Docker"],
    year: "2023",
    role: "Frontend Architect",
    description:
      "Pulse Analytics reimagines web analytics with a privacy-first approach and stunning data presentation. Features include custom event tracking, funnel analysis, and heatmap overlays — all rendered with GPU-accelerated canvas visualizations.",
  },
  {
    id: "cipher-vault",
    title: "Cipher Vault",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    github: "https://github.com/sauravsharma/cipher-vault",
    live: "https://ciphervault.app",
    info: "End-to-end encrypted password manager with biometric authentication and seamless sync.",
    category: "Security",
    tags: ["Next.js", "Web Crypto API", "PWA", "IndexedDB"],
    year: "2023",
    role: "Lead Engineer",
    description:
      "Cipher Vault delivers military-grade encryption with consumer-grade UX. Zero-knowledge architecture ensures data never leaves the client unencrypted. Features include biometric unlock, secure sharing, and offline-first PWA capabilities.",
  },
  {
    id: "atlas-maps",
    title: "Atlas Maps",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80",
    github: "https://github.com/sauravsharma/atlas-maps",
    live: "https://atlasmaps.co",
    info: "Interactive 3D globe visualization platform for geospatial data storytelling.",
    category: "Data Viz",
    tags: ["Three.js", "Mapbox", "WebGL", "TypeScript"],
    year: "2022",
    role: "Creative Technologist",
    description:
      "Atlas Maps transforms complex geospatial datasets into immersive 3D narratives. Users can fly through data layers, scrub timelines, and export cinematic flythrough videos. Built on Three.js with custom shader pipelines for atmospheric effects.",
  },
];

export const featuredProjectIds: string[] = ["infosnap", "devflow", "nexus-ui"];

export const projectCategories: string[] = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export const mediumArticles: MediumArticle[] = [
  {
    id: "gsap-react-patterns",
    title: "Advanced GSAP Patterns for React: Beyond useEffect",
    excerpt:
      "A deep dive into @gsap/react, scoped animations, and memory-safe ScrollTrigger cleanup in production SPAs.",
    date: "Mar 2025",
    readTime: "8 min read",
    url: "https://medium.com",
    category: "Animation",
  },
  {
    id: "design-tokens-motion",
    title: "Design Tokens Meet Motion: Building Cohesive Animation Systems",
    excerpt:
      "How to bridge the gap between static design systems and dynamic, motion-rich interfaces without chaos.",
    date: "Jan 2025",
    readTime: "12 min read",
    url: "https://medium.com",
    category: "Design Systems",
  },
  {
    id: "perf-budgets-2025",
    title: "Performance Budgets in 2025: What Actually Matters",
    excerpt:
      "Rethinking web performance metrics for modern SPAs with heavy animation and 3D content.",
    date: "Nov 2024",
    readTime: "6 min read",
    url: "https://medium.com",
    category: "Performance",
  },
  {
    id: "accessible-motion",
    title: "Accessible Motion: Respecting prefers-reduced-motion at Scale",
    excerpt:
      "Practical patterns for building motion-rich experiences that remain inclusive and performant.",
    date: "Sep 2024",
    readTime: "10 min read",
    url: "https://medium.com",
    category: "Accessibility",
  },
];

export const techStack: TechCategory[] = [
  {
    name: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "GSAP"],
  },
  {
    name: "Animation & 3D",
    tools: ["Framer Motion"],
  },
  {
    name: "Backend & Data",
    tools: ["Node.js", "GraphQL", "PostgreSQL", "Redis", "Prisma"],
  },
  {
    name: "DevOps & Tools",
    tools: ["Vercel", "Docker", "GitHub Actions", "Storybook", "Figma"],
  },
];

export function getProjectById(id: string): ProjectItem | undefined {
  return projects.find((project) => project.id === id);
}

export function getFeaturedProjects(): ProjectItem[] {
  return featuredProjectIds
    .map((id) => getProjectById(id))
    .filter((p): p is ProjectItem => p !== undefined);
}
