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
    id: "atfm",
    title: "ATFM (Air Traffic Flow Management)",
    image: "/Projects-img/ATFM-A-CDM-cover.png",
    github: "https://github.com/sauravsharma/infosnap",
    live: "https://infosnap.dev",
    category: "Web Application / Aviation",
    tags: [
      "React.js",
      "TypeScript",
      "Ant Design",
      "SSE (Server-Sent Events)",
      "Leaflet.js",
      "Recharts",
      "TanStack Query",
    ],
    year: "2025",
    role: "Frontend Developer",
    info: "Real-time air traffic flow and flight scheduling platform featuring live AMHS data streams, weather forecasts, and regional Ground Delay Programs (GDP).",
    description:
      "An enterprise-grade real-time system designed to modernize airport operations and minimize airborne delays at TIA by addressing key stakeholder pain points. As a frontend developer on the team, my key responsibilities centered around full UI development and engineering complex data interfaces. I utilized Ant Design to build a clean, highly accessible user experience capable of handling large-scale data virtualization. To support real-time situational awareness, I integrated Server-Sent Events (SSE) for instant flight updates and notification streaming, alongside dynamic graphs and maps powered by Recharts and Leaflet.js. The platform ingests live flight messages from the Aeronautical Message Handling System (AMHS) to calculate exact flight timings, incorporate weather forecasts, and implement a Ground Delay Program (GDP) tailored for regional airports across Nepal.",
  },
  {
    id: "whatsapp-clone",
    title: "Real-Time Chat Application",
    image:
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&q=80", // Replace with your actual project screenshot
    github: "https://github.com/sauravsharma/whatsapp-clone", // Update with your repository link
    live: "https://chat-clone.dev", // Update with your live link if applicable
    category: "Full-Stack Web Application",
    tags: [
      "React.js",
      "TanStack Router",
      "Shadcn/UI",
      "Tailwind CSS",
      "WebSockets",
      "Node.js",
      "PostgreSQL",
    ],
    year: "2025",
    role: "Full-Stack Developer",
    info: "A full-stack, real-time messaging platform featuring secure authentication, instant individual and group chats, and media sharing.",
    description:
      "A production-ready communication platform designed to replicate modern instant messaging workflows. As the developer, I built a highly responsive frontend using React and Shadcn/UI components, leveraging TanStack Router for type-safe, nested routing and seamless page transitions. The backend is powered by Node.js and PostgreSQL to manage relational user data, secure authentication, and chat histories. For the core messaging experience, I implemented WebSockets to handle real-time bi-directional communication, enabling instant delivery for individual messages, dynamic group chat creation, active user statuses, and live image uploads, all while maintaining data consistency across connected clients.",
  },
  {
    id: "social-media-platform",
    title: "Social Media Platform",
    image:
      "https://images.unsplash.com/photo-1665470909905-129dada26242?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/sauravsharma/facebook-clone",
    live: "https://social-connect.dev",
    category: "Web Application",
    tags: ["React.js (JSX)", "TanStack Query", "Tailwind CSS", "Context API"],
    year: "2025",
    role: "Frontend Developer",
    info: "A dynamic social networking frontend featuring full CRUD functionality for posts, engagement interactions, and detailed user profile customization.",
    description:
      "A responsive social media interface designed to handle core community-building interactions. Built using pure React JSX components and styled entirely with Tailwind CSS, the application focuses on clean UI states and fluid layouts. Key responsibilities included implementing full CRUD functionality for user feeds, allowing users to seamlessly create, read, and delete posts. I engineered the interactive engagement features, including dynamic like/dislike toggles, and developed comprehensive profile management tools that enable users to upload and update both profile avatars and cover images. State management and efficient data synchronized views were handled using TanStack tools to ensure a smooth, lag-free user experience during feed interactions.",
  },
  {
    id: "infosnap",
    title: "InfoSnap Generator Hub",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    github: "https://github.com/sauravsharma/infosnap-hub",
    live: "https://infosnap-generator.dev",
    category: "Web Application",
    tags: [
      "React.js",
      "React Context API",
      "Sass / SCSS",
      "Sass/SCSS Modules",
      "Client-Side File Export",
    ],
    year: "2024",
    role: "Frontend Developer",
    info: "A versatile data-to-asset generation utility for creating custom QR codes, barcodes, and downloadable digital business cards using React Context API.",
    description:
      "A versatile utility hub designed to transform user inputs into scannable assets and professional identifiers instantly. Built using React and structured with modular Sass/SCSS, the application leverages the React Context API to manage global state across complex input forms, dynamic layouts, and real-time generation previews. As the developer, I integrated dedicated barcode and QR code packages to handle instantaneous data parsing and rendering. To deliver a seamless user experience, I engineered layout customization options for digital business cards and implemented file exporting mechanisms that convert live JSX elements into high-resolution PNG images or print-ready PDF downloads directly from the browser.",
  },
  {
    id: "task-scheduler",
    title: "Date-Driven Task Scheduler",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80", // Replace with your actual project screenshot
    github: "https://github.com/sauravsharma/task-scheduler", // Update with your repository link
    live: "https://scheduler.dev", // Update with your live link if applicable
    category: "Web Application",
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Context API / State Management",
    ],
    year: "2024",
    role: "Frontend Developer",
    info: "A type-safe productivity application featuring dynamic calendar rendering and full CRUD capabilities for date-specific task organization.",
    description:
      "A productivity application engineered to streamline daily workflows through date-specific task management. Developed entirely with TypeScript and structured for high maintainability, the platform leverages React to handle complex interactive calendar states and timeline views. I built a clean, minimalist UI using Tailwind CSS, ensuring complete visual responsiveness across desktop and mobile devices. Key technical implementations included developing full CRUD functionality—allowing users to seamlessly create, read, edit, delete, and persist tasks—alongside a robust state engine that aligns scheduling data with precise date contexts for reliable data accuracy.",
  },
  {
    id: "modern-calculator",
    title: "Interactive Web Calculator",
    image:
      "https://images.unsplash.com/photo-1643894333833-d0be51338dd3?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your actual project screenshot
    github: "https://github.com/sauravsharma/modern-calculator", // Update with your repository link
    live: "https://calculator.dev", // Update with your live link if applicable
    category: "Web Application",
    tags: ["JavaScript (ES6+)", "HTML5", "CSS3 / Flexbox", "UI/UX Design"],
    year: "2024",
    role: "Frontend Developer",
    info: "A sleek, responsive mathematical utility featuring dynamic input handling and smooth mathematical evaluation.",
    description:
      "A clean, responsive mathematical utility designed to provide a highly interactive client-side execution experience. Built using semantic HTML5 and vanilla JavaScript (ES6+), the application implements an immediate-execution logic engine to evaluate basic arithmetic operations reliably. I engineered the user interface utilizing modern CSS layouts like Flexbox and Grid to guarantee fluid scalability across varying screen sizes. The development focused on crafting a polished user experience, incorporating intuitive button active states, input validation to handle edge cases gracefully, and continuous display updates for seamless interaction.",
  },
  {
    id: "weather-tracker",
    title: "Real-Time Weather Tracker",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&q=80", // Replace with your actual project screenshot
    github: "https://github.com/sauravsharma/weather-app", // Update with your repository link
    live: "https://weather-vision.dev", // Update with your live link if applicable
    category: "Web Application",
    tags: [
      "JavaScript (ES6+)",
      "Asynchronous Fetch API",
      "JSON Data Parsing",
      "HTML5 / CSS3",
    ],
    year: "2024",
    role: "Frontend Developer",
    info: "A responsive weather application utilizing asynchronous API integration to deliver real-time atmospheric forecasts and current conditions.",
    description:
      "A clean, responsive weather forecast application designed to demonstrate seamless third-party data integration and asynchronous frontend architecture. Built using vanilla JavaScript (ES6+), semantic HTML5, and modern CSS layouts, the application connects to a public weather API using the Fetch API to retrieve live, location-based meteorological data. I engineered the asynchronous data flow to handle network states gracefully, parse JSON payloads efficiently, and instantly update the DOM with current temperatures, wind speeds, and regional forecast matrices. Special attention was paid to creating an intuitive user interface that shifts visually to present up-to-date atmospheric conditions across mobile and desktop displays.",
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
];

export const featuredProjectIds: string[] = ["atfm", "infosnap", "devflow"];

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

export interface HobbyHighlight {
  title: string;
  description: string;
  image?: string; // Optional image for the highlight
}

export interface HobbyDetail {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  highlights: HobbyHighlight[];
}

export const hobbiesDetailData: HobbyDetail[] = [
  {
    id: "trekking",
    title: "Trekking",
    description: "Conquering high altitudes and embracing the serenity of nature. Here are some of the remarkable places I've trekked.",
    coverImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80",
    highlights: [
      {
        title: "Annapurna Base Camp",
        description: "A breathtaking journey through the Himalayas, reaching an altitude of 4,130m with stunning panoramic views.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
      },
      {
        title: "Everest Base Camp",
        description: "The ultimate trekking adventure to the base of the world's highest peak.",
      },
      // Add more real places here!
    ],
  },
  {
    id: "hiking",
    title: "Hiking",
    description: "Exploring new trails and finding peace away from the screen. A collection of my favorite day hikes.",
    coverImage: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1200&q=80",
    highlights: [
      {
        title: "Shivapuri Peak",
        description: "A beautiful day hike offering lush green forests and a panoramic view of the Kathmandu valley.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      },
      {
        title: "Champadevi Hill",
        description: "A serene hike on the southern rim of the valley perfect for a quick nature escape.",
      },
      // Add more real hikes here!
    ],
  },
  {
    id: "music",
    title: "Music",
    description: "Curating vibes and finding rhythm in every step of the journey. Here's what I've been listening to.",
    coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
    highlights: [
      {
        title: "Lo-Fi Coding Beats",
        description: "The essential background music that fuels my late-night coding sessions.",
        image: "https://images.unsplash.com/photo-1516280440502-86971933e8b4?w=800&q=80",
      },
      {
        title: "Acoustic Sunsets",
        description: "Mellow acoustic tracks perfect for winding down after a long trek.",
      },
      // Add your real playlists or favorite genres here!
    ],
  },
];

export function getHobbyById(id: string): HobbyDetail | undefined {
  return hobbiesDetailData.find((hobby) => hobby.id === id);
}
