import { EducationEntry, ExperienceEntry, Project, SkillCategory } from "./types";

export const projects: (Project & { isPlaceholder?: boolean })[] = [
  {
    id: "smart-farming-india",
    title: "Smart Farming India",
    description:
      "India's complete digital farming ecosystem — a full-stack PWA empowering 2.4M+ farmers with AI-powered crop disease detection (98.5% precision), hyper-local weather forecasts, live Mandi prices from 1000+ APMCs, and direct access to government subsidies & DBT applications.",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "PWA", "REST APIs", "Vercel"],
    features: [
      "AI crop disease detection with 98.5% accuracy across 200+ varieties",
      "Hyper-local weather forecasts with live radar maps for Gujarat",
      "Real-time Mandi prices from 1000+ APMCs across India",
      "Government scheme & DBT subsidy eligibility checker",
      "Peer-to-peer equipment marketplace with rental & buying options",
      "GPS-based farm area calculator & community forum",
    ],
    githubUrl: "https://github.com/princeasodariya13",
    liveUrl: "https://smart-farming-india.vercel.app",
    image: undefined,
    featured: true,
  },
  {
    id: "nexahr-ai",
    title: "NexaHR AI",
    description:
      "An enterprise-grade HRMS platform that replaces scattered HR tools with one intelligent system. Features AI-powered HR copilot, 1-click payroll automation, smart leave workflows, recruitment pipeline, performance reviews, and real-time workforce analytics.",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "AI/LLM", "REST APIs", "Vercel"],
    features: [
      "AI HR Copilot for natural language queries & policy answers",
      "1-click payroll automation with automated tax deductions",
      "Smart leave workflows with auto-approval & balance tracking",
      "Full recruitment pipeline — candidates, interviews, offer letters",
      "360° performance reviews & goal-setting cycles",
      "Role-based access control (Admin / Manager / Employee)",
    ],
    githubUrl: "https://github.com/princeasodariya13",
    liveUrl: "https://nexahr-ai.vercel.app/",
    image: undefined,
    featured: true,
  },
  {
    id: "setu-architect",
    title: "Setu Architects",
    description:
      "A professional business website for Setu Architecture — a structural engineering firm established in 1988. Showcases their portfolio of residential, commercial, industrial & public infrastructure projects with full MEPF design capabilities.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    features: [
      "Full company portfolio with project showcase gallery",
      "Structural & civil engineering services presentation",
      "Client portfolio across residential, commercial & industrial segments",
      "Contact form & inquiry system for new projects",
    ],
    githubUrl: "https://github.com/princeasodariya13",
    liveUrl: "https://setu-architect.vercel.app/",
    image: undefined,
  },
  {
    id: "thumblify",
    title: "Thumblify — AI Thumbnail Generator",
    description:
      "An AI-powered web tool that generates professional, eye-catching YouTube thumbnails from text prompts in seconds using generative AI models. Saves content creators hours of design work with smart style presets and one-click downloads.",
    techStack: ["React", "Vite", "Node.js", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    features: [
      "Text-to-image AI thumbnail generation in seconds",
      "Multiple style & template presets for YouTube content",
      "Cloudinary-powered storage & CDN delivery",
      "One-click download in high-resolution formats",
    ],
    githubUrl: "https://github.com/princeasodariya13",
    liveUrl: "https://thumblify-7nxy.vercel.app/",
    image: undefined,
  },
  {
    id: "transit-ops",
    title: "Transit OPS — Smart Transport",
    description:
      "A full-stack fleet and transport operations management platform for enterprise teams. Features role-based access control, vehicle tracking, driver management, trip logs, fuel records, maintenance scheduling, and analytics with PDF export.",
    techStack: ["React", "Vite", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Role-based access: Administrator & Fleet Manager",
      "Vehicle inventory, driver profiles & trip management",
      "Fuel consumption logs & maintenance scheduling",
      "Analytics dashboard with PDF export for reports",
    ],
    githubUrl: "https://github.com/princeasodariya13",
    liveUrl: "https://transit-ops-smart-transport.vercel.app/",
    image: undefined,
  },
  {
    id: "healthcare-hub",
    title: "Healthcare Hub",
    description:
      "A robust PHP & MERN-based hospital management platform for end-to-end hospital operations — secure patient records, automated appointment scheduling, MySQL database management, and role-based access for admins, doctors, and patients.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "PHP", "MySQL", "Bootstrap"],
    features: [
      "Secure patient records & medical history management",
      "Automated OPD appointment scheduling system",
      "Role-based access for Admins, Doctors & Patients",
      "Integrated billing system with pharmacy inventory",
    ],
    githubUrl: "https://github.com/princeasodariya13",
    liveUrl: undefined,
    image: undefined,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "NextAuth.js", "PHP", ".NET"],
  },
  {
    id: "database",
    label: "Database",
    skills: ["MongoDB", "Mongoose", "MySQL", "Prisma", "PostgreSQL"],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "Cloudinary", "Vercel", "Vite", "Android", "Java", "C#"],
  },
];

export const experience: ExperienceEntry[] = [
  {
    id: "kict-intern",
    role: "MERN Stack Developer Intern",
    company: "KICT Education and Technology",
    startDate: "Aug 2025",
    endDate: "Feb 2026",
    location: "Gujarat, India",
    responsibilities: [
      "Built full-stack web applications using MongoDB, Express.js, React, and Node.js.",
      "Designed and implemented RESTful APIs with JWT-based authentication and role-based access control.",
      "Collaborated on real-world client projects — translated UI/UX designs into production-ready React components.",
      "Implemented responsive, accessible UIs using Tailwind CSS and modern component patterns.",
      "Optimized APIs and database schemas for performance and scalability.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    id: "indus-university",
    degree: "BSc Computer Application & Information Technology",
    institution: "Indus University",
    startYear: "2023",
    endYear: "2026",
    details:
      "Studying core Computer Science fundamentals alongside applied IT — software development, database management, web technologies, networking, and system design. Won Top College Project award (1st place) at Indus Institute.",
  },
];

export const profile = {
  name: "Prince Asodariya",
  role: "MERN / Full-Stack Developer",
  tagline:
    "I specialize in building end-to-end web applications using the MERN stack — architecting scalable APIs, designing seamless database schemas, and crafting high-performance user interfaces.",
  location: "Gujarat, India",
  email: "princeasodariya13@gmail.com",
  github: "https://github.com/princeasodariya13",
  linkedin: "https://www.linkedin.com/in/prince-asodariya-098395373/",
  instagram: "https://instagram.com/prince.asodariya.311",
  resumeUrl: "/resume.pdf",
  availability: "Open to new opportunities",
};
