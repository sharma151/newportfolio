# Personal Portfolio

A modern, responsive, and interactive personal portfolio built with Next.js, React, and Tailwind CSS. 

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) & `@gsap/react`
- **Icons**: [Lucide React](https://lucide.dev/)
- **PDF Viewer**: [React-PDF](https://github.com/wojtekmaj/react-pdf)
- **GitHub Stats**: `react-github-calendar`
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Theming**: `next-themes` (Dark & Light Mode)
- **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)
- **Code Quality**: [Husky](https://typicode.github.io/husky/) & `lint-staged` for pre-commit hooks

## ✨ Features

- **Modern UI/UX**: Clean and professional design tailored for showcasing projects and skills.
- **Responsive Layout**: fully functional and aesthetic on desktops, tablets, and mobile devices.
- **Smooth Animations**: High-performance interactions and transitions using GSAP.
- **Dark & Light Mode**: Seamless theme switching tailored to user preferences.
- **Projects Showcase**: Detailed project views with descriptions, tech stacks, and links.
- **Interactive Resume**: Integrated PDF viewer to read or download the resume.
- **GitHub Integration**: Live GitHub contribution calendar rendered directly on the site.
- **Contact Form**: Functional contact form powered by EmailJS.
- **Unit Testing**: Pre-configured Jest setup with a sample UI component test.
- **Pre-commit Hooks**: Enforces code formatting and passing tests before commits.

## 🏗️ Architecture

- **App Router**: Utilizes the modern Next.js App Router (`src/app`) for routing, layouts, and server/client components.
- **Component-Driven Design**: The UI is modularized into `common` (layout elements like headers/footers), `sections` (complex page blocks), and `ui` (atomic elements like buttons and inputs).
- **Separation of Concerns**: Custom hooks (`src/hooks`) and utility functions (`src/lib`) extract logic from components.
- **Centralized Data**: Static data (e.g., project lists, experiences) is decoupled from components and stored in `src/data` for easy updates.

## 📁 Folder Structure

```text
newportfolio/
├── public/                 # Static assets (images, icons, etc.)
├── src/                    # Source code
│   ├── app/                # Next.js App Router (Pages & Layouts)
│   │   ├── about/          # About page
│   │   ├── hobbies/        # Hobbies page
│   │   ├── projects/       # Projects page
│   │   ├── resume/         # Resume page
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React Components
│   │   ├── common/         # Reusable common components (Header, Footer)
│   │   ├── sections/       # Page-specific sections (ProjectDetail, TechStackGrid)
│   │   └── ui/             # Core UI elements (Buttons, Inputs, Cards)
│   ├── data/               # Static data and mock content
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utility functions and configurations
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Testing & Code Quality

This project is configured with **Husky** and **lint-staged** to automatically format code using Prettier and run relevant tests via **Jest** before every commit.

To run all tests manually:
```bash
yarn test
```

A sample test is provided for the `Badge` component in `src/components/ui/Badge.test.tsx`.

---

### ⭐️ Support & Feedback
If you like this project, please consider hitting the **Star** button! 
Your feedback and contributions are always welcome. Feel free to open an issue or submit a pull request.
