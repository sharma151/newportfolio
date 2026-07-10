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
  github?: string | null;
  live?: string | null;
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
    image: "/Projects-img/ATFM-A-CDM-cover.avif",
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
    id: "secure-next-admission",
    title: "Secure Next Admission",
    image: "/Projects-img/securenextadmission.avif",
    github: "https://github.com/sharma151/securenextadmission",
    live: "https://securenextadmission.com",
    category: "Web Application / Consultation & EdTech",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Email.js",
      "SEO Optimization",
    ],
    year: "2026",
    role: "Frontend Developer",
    info: "A scalable educational consultation platform empowering students to explore top medical, engineering, and management colleges and secure direct admission guidance.",
    description:
      "A production-ready consultation agency platform designed to streamline college discovery and admission workflows for students looking into medical, engineering, and management domains. As the frontend developer, I built the entire interface using Next.js, implementing standard modular code patterns engineered for future scalability and maintenance. The UI leverages Shadcn UI and Tailwind CSS to deliver a polished, high-performance, and fully responsive user experience. I integrated Email.js to handle complex contact and consultation forms seamlessly, alongside robust on-page SEO strategies to maximize the platform's visibility and organic reach.",
  },
  {
    id: "saurav-furniture",
    title: "Saurav Furniture",
    image: "/Projects-img/saurav-furnitures.avif",
    github: "https://github.com/sharma151/sauravfurnitures",
    live: "https://sauravfurnitures.vercel.app/",
    category: "Web Application / E-Commerce & Manufacturing",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    info: "A premium digital showroom and manufacturing platform featuring a dynamic product catalog, custom quotation builder, and interactive consultation scheduling.",
    year: "2026",
    role: "Full Stack Developer",
    description:
      "An enterprise-grade web platform designed to digitize a custom furniture manufacturing business and streamline B2B/B2C client acquisitions. As the developer, I built a highly responsive, modern interface using Next.js and Tailwind CSS, leaning heavily on shadcn/ui to ensure accessible, clean design patterns. The application showcases the manufacturer's extensive portfolio and premium product catalog with smooth micro-interactions powered by Framer Motion. Key feature implementations include an automated multi-step quotation request engine—allowing users to submit custom dimensions and material preferences—as well as an integrated scheduling system for direct workshop consultations and site measurements.",
  },
  {
    id: "whatsapp-clone",
    title: "Real-Time Chat Application",
    image:
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&q=80", // Replace with your actual project screenshot
    github: "https://github.com/sharma151/message_me_fe",
    // live: "https://chat-clone.dev",
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
    github: "https://github.com/sharma151/Socialmedia_APP",
    // live: "https://social-connect.dev",
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
    github: "https://github.com/sharma151/Businesscard-Generator",
    live: "https://businesscard-generator.vercel.app/",
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
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80",
    github: "https://github.com/sharma151/Task-schedular",
    live: "https://tasksschedular.vercel.app/",
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
    github: "https://github.com/sharma151/web-calc",
    // live: "https://calculator.dev",
    category: "Web Application",
    tags: ["JavaScript (ES6+)", "HTML5", "CSS3 / Flexbox", "UI/UX Design"],
    year: "2022",
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
    // github: "https://github.com/sauravsharma/weather-app",
    // live: "https://weather-vision.dev",
    category: "Web Application",
    tags: [
      "JavaScript (ES6+)",
      "Asynchronous Fetch API",
      "JSON Data Parsing",
      "HTML5 / CSS3",
    ],
    year: "2021",
    role: "Frontend Developer",
    info: "A responsive weather application utilizing asynchronous API integration to deliver real-time atmospheric forecasts and current conditions.",
    description:
      "A clean, responsive weather forecast application designed to demonstrate seamless third-party data integration and asynchronous frontend architecture. Built using vanilla JavaScript (ES6+), semantic HTML5, and modern CSS layouts, the application connects to a public weather API using the Fetch API to retrieve live, location-based meteorological data. I engineered the asynchronous data flow to handle network states gracefully, parse JSON payloads efficiently, and instantly update the DOM with current temperatures, wind speeds, and regional forecast matrices. Special attention was paid to creating an intuitive user interface that shifts visually to present up-to-date atmospheric conditions across mobile and desktop displays.",
  },
  // {
  //   id: "devflow",
  //   title: "DevFlow",
  //   image:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  //   github: "https://github.com/sauravsharma/devflow",
  //   live: "https://devflow.io",
  //   info: "Developer workflow automation platform with AI-assisted code review and deployment pipelines.",
  //   category: "Developer Tools",
  //   tags: ["React", "Node.js", "GraphQL", "Tailwind"],
  //   year: "2024",
  //   role: "Full-Stack Engineer",
  //   description:
  //     "DevFlow streamlines the entire development lifecycle from PR to production. Features include AI-powered code review suggestions, visual deployment pipelines, and a collaborative debugging workspace. The frontend leverages optimistic UI patterns and real-time collaboration via CRDTs.",
  // },
];

export const featuredProjectIds: string[] = [
  "atfm",
  "infosnap",
  "whatsapp-clone",
];

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
  title?: string;
  description?: string;
  image?: string;
  className?: string;
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
    title: "Trekking/Hiking",
    description:
      "Conquering high altitudes, exploring new trails, and finding peace away from the screen. Here are some of the remarkable places I've trekked.",
    coverImage:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80",
    highlights: [
      {
        title: "Annapurna Base Camp",
        description:
          "Located in the Kaski district at 4,130m. You get to stand in a massive 360-degree mountain amphitheater surrounded entirely by towering vertical walls of snow, overlooking the massive Annapurna glacier, blooming red rhododendron forests, and cascading waterfalls.",
        image: "/trek/annapurnabasecamp.avif",
      },
      {
        title: "Mardi Himal Base Camp",
        description:
          "Situated in the Annapurna region at 4,500m. Walking along a steep, narrow ridge trail, you get to see an incredibly up-close, dramatic view of the iconic Machapuchare (Fishtail) peak right in front of you, alongside low-lying clouds drifting through the valleys below.",
        image: "/trek/mardihimal.avif",
      },
      {
        title: "Gosaikunda Lake",
        description:
          "Located in the Rasuwa district at 4,380m. You get to look out over a cluster of frozen, turquoise alpine lakes nestled between jagged, rocky ridges, with sweeping views of the Langtang range stretching across the horizon.",
        image: "/trek/gosaikunda.avif",
      },
      {
        title: "Poon Hill & Ghandruk Trek",
        description:
          "A classic loop in the Myagdi and Kaski districts reaching 3,210m. You get to witness a spectacular golden sunrise illuminating the entire Dhaulagiri and Annapurna ranges, followed by walks through traditional stone-paved Gurung villages and terraced farmland.",
        image: "/trek/poonhill.avif",
      },
      {
        title: "Ama Yangri Peak",
        description:
          "Located in the Helambu region of Sindhupalchok at 3,771m. At the summit, you get to see thousands of colorful prayer flags fluttering around a grand white chorten, offering a clear, unobstructed panorama of the Langtang and inner Himalayan peaks.",
        image: "/trek/ama-yangri.avif",
      },
    ],
  },
  {
    id: "travel-and-culture",
    title: "Travel & Culture",
    description:
      "Exploring historic cities, architectural marvels, and vibrant cultures. A collection of my favorite urban escapes and heritage trails.",
    coverImage:
      "https://images.unsplash.com/photo-1477587458883-471a5ed94245?w=1200&q=80",
    highlights: [
      {
        title: "Jaipur",
        description:
          "The famed Pink City, renowned for its majestic forts like Amer Fort, intricate palaces like Hawa Mahal, and rich Rajasthani heritage.",
        image:
          "https://images.unsplash.com/photo-1477587458883-471a5ed94245?w=800&q=80",
      },
      {
        title: "Udaipur",
        description:
          "The City of Lakes, known for its sophisticated lake palaces, tranquil waters, and the stunning backdrop of the Aravalli Hills.",
        image:
          "https://images.unsplash.com/photo-1593693411515-c202e974fe08?w=800&q=80",
      },
      {
        title: "Agra",
        description:
          "Home to the iconic Taj Mahal, a monument of timeless love, alongside the grand Agra Fort and deep Mughal architectural history.",
        image:
          "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
      },
      {
        title: "Bhopal",
        description:
          "The City of Lakes in central India, blending a historic old city packed with mosques with a modern, green layout.",
        image:
          "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80",
      },
      {
        title: "Bangalore",
        description:
          "The Garden City and Silicon Valley of India, balancing a booming high-tech pulse with lush parks and a vibrant cafe culture.",
        image:
          "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80",
      },
      {
        title: "Delhi",
        description:
          "India's bustling capital, where the historic lanes of Old Delhi seamlessly meet the grand, tree-lined avenues of New Delhi.",
        image:
          "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
      },
      {
        title: "Indore",
        description:
          "India's cleanest city, famous for its grand Rajwada Palace and an incredible street food culture at Sarafa Bazaar.",
        image:
          "https://images.unsplash.com/photo-1619542402915-dcaf30e4e2a1?w=800&q=80",
      },
      {
        title: "Kolkata",
        description:
          "The City of Joy, celebrating grand colonial architecture, legendary literary history, and an unmatched artistic soul.",
        image:
          "https://images.unsplash.com/photo-1558431382-27e303142255?w=800&q=80",
      },
    ],
  },
  {
    id: "photography",
    title: "Photography",
    description:
      "Capturing perspectives, street landscapes, and visual stories during my travels and outdoor walks.",
    coverImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
    highlights: [
      {
        title: "Street Photography",
        description:
          "Capturing the candid moments of everyday life in the city.",
        image: "/photos/placeholder.jpg",
        className: "md:col-span-1 md:row-span-2",
      },
      {
        image: "/photos/placeholder.jpg",
        className: "md:col-span-2 md:row-span-1",
      },
      {
        description: "A beautiful landscape captured during sunset.",
        image: "/photos/placeholder.jpg",
        className: "md:col-span-1 md:row-span-1",
      },
      {
        image: "/photos/placeholder.jpg",
        className: "md:col-span-1 md:row-span-1",
      },
    ],
  },
];

export function getHobbyById(id: string): HobbyDetail | undefined {
  return hobbiesDetailData.find((hobby) => hobby.id === id);
}
