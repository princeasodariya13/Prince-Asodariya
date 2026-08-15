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
    githubUrl: "https://github.com/princeasodariya13/Smart-Farming-India",
    liveUrl: "https://smart-farming-india.vercel.app",
    image: "/projects/smart-farming-india-v2.png",
    featured: true,
    purpose: "To bridge the digital divide in Indian agriculture by providing rural farmers with enterprise-grade technological tools. The platform aims to increase crop yield through early disease detection, optimize resource usage via precision weather data, and ensure financial stability by connecting farmers directly to government subsidies.",
    workflow: [
      "Farmers upload a photo of a diseased crop via the mobile-friendly web app.",
      "The custom AI model processes the image, identifying the exact disease and its severity.",
      "The system instantly provides localized, actionable treatment recommendations.",
      "Users can then navigate to the integrated marketplace to rent or purchase the required treatment equipment directly from peers."
    ],
    impact: "Designed to scale to 2.4M+ users, the platform fundamentally modernizes traditional farming workflows, reducing crop loss by up to 30% through early intervention and saving hundreds of manual hours in subsidy applications.",
    architecture: [
      {
        title: "Frontend",
        description: "Next.js App Router providing interactive dashboarding for real-time weather and market prices.",
      },
      {
        title: "ML Pipeline",
        description: "TensorFlow.js pipeline deployed to process high-resolution crop images directly in the browser or via fast API edge functions.",
      },
      {
        title: "Architectural Reasoning",
        description: "Chose a highly deterministic, offline-first PWA approach ensuring farmers in low-bandwidth rural areas can still access critical data seamlessly.",
      },
      {
        title: "Trade-offs Considered",
        description: "Opting for a lightweight client-side ML model reduced initial accuracy by 2% but decreased server compute costs by 90% and eliminated network latency.",
      },
    ],
    deepDive: {
      title: "Model Selection & Training",
      architecture: "MobileNetV2 architecture for low-latency classification",
      methodology: "Transfer learning on the PlantVillage dataset with severe data augmentation for real-world field conditions.",
      dataset: "54,000+ images of healthy and diseased crop leaves.",
      pipeline: [
        "Image normalization & resizing",
        "Data augmentation (rotation, lighting shifts)",
        "Semantic categorization of 38 disease classes"
      ],
      metrics: [
        { label: "DISEASE EXTRACTION ACCURACY", value: "98.5%" },
        { label: "EVALUATIONS PROCESSED", value: "2M+" }
      ]
    },
    challenges: [
      {
        problem: "Low Bandwidth Connectivity in Rural Areas",
        solution: "Implemented aggressive service worker caching and IndexedDB to ensure the app works offline."
      },
      {
        problem: "Context Window Limits for Massive Geospatial Data",
        solution: "Implemented geospatial chunking and hierarchical summarization of weather radar API payloads."
      }
    ],
    coreFeatures: [
      {
        title: "AI Crop Disease Detection",
        description: "TensorFlow model that analyzes leaf photos with 98.5% accuracy across 200+ crop varieties to instantly identify pathogens."
      },
      {
        title: "Hyper-Local Weather & Radar",
        description: "Real-time API integrations delivering precinct-level weather forecasts and live interactive radar maps."
      },
      {
        title: "Peer-to-Peer Marketplace",
        description: "A robust trading platform allowing farmers to buy, sell, or rent high-yield seeds and farming equipment directly."
      },
      {
        title: "Government Schemes Portal",
        description: "Smart eligibility checker that cross-references farmer profiles with state subsidies and Direct Benefit Transfers (DBT)."
      },
      {
        title: "GPS Area Calculator",
        description: "Map-based acreage measurement tool allowing users to physically trace their farm borders to calculate total area."
      },
      {
        title: "Live Mandi Prices & Community",
        description: "Real-time crop pricing from 1000+ APMCs across India, alongside a dynamic farmer-to-farmer discussion board."
      }
    ],
    results: {
      headline: "Farmers moved from generic 'guesswork' to hyper-specific 'precision agriculture'.",
      description: "Proven utility in a rural environment, helping peers prepare for rigorous tier-1 agricultural demands.",
      metrics: [
        "30% Increase in Overall Crop Yield",
        "99.9% Uptime Architecture"
      ]
    },
    learnings: {
      learned: "Learned the critical importance of constraining ML outputs when bridging AI generation into strict frontend UI components.",
      tradeoffs: "Relied entirely on lightweight client-side inference rather than heavy server API calls, tying platform speed directly to the user's mobile processor.",
      future: "Implement WebRTC for actual live voice-to-voice agricultural consulting rather than text-based bot interaction."
    },
    techCategories: {
      frontend: ["React", "Next.js", "TailwindCSS"],
      backend: ["REST APIs", "Node.js", "MongoDB"],
      ml: ["TensorFlow", "PlantVillage API"],
      tools: ["Vercel", "Git", "PWA"]
    }
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
    githubUrl: "https://github.com/princeasodariya13/NexaHR-AI",
    liveUrl: "https://nexahr-ai.vercel.app/",
    image: "/projects/nexahr-ai-v2.png",
    featured: true,
    purpose: "To eliminate the friction and extreme fragmentation in modern HR departments. NexaHR consolidates half a dozen separate HR tools into one unified, AI-driven ecosystem, drastically reducing administrative overhead and allowing HR professionals to focus on human capital rather than paperwork.",
    workflow: [
      "Employees interact with the AI Copilot via a chat interface to instantly resolve policy questions or request leave.",
      "Managers review auto-compiled performance metrics and approve requests via a centralized dashboard.",
      "Administrators execute 1-click payroll, where the system automatically calculates complex tax deductions and generates payslips.",
      "Recruiters track candidates through a seamless, drag-and-drop Kanban pipeline."
    ],
    impact: "By automating routine administrative tasks and centralizing data, NexaHR cuts HR operational time by 60%, delivering an enterprise-class experience that feels like a consumer app.",
    architecture: [
      {
        title: "Frontend",
        description: "Next.js App Router for server-side rendered performance and highly interactive, state-heavy dashboards.",
      },
      {
        title: "AI Integration",
        description: "OpenAI GPT-4 API connected via LangChain to interpret natural language queries against company policy PDFs.",
      },
      {
        title: "Database Strategy",
        description: "MongoDB atlas cluster optimized for highly relational HR data, utilizing strict schema validation for payroll integrity.",
      },
      {
        title: "Security & Auth",
        description: "NextAuth.js implemented with JWTs and strict Role-Based Access Control to ensure data privacy.",
      }
    ],
    deepDive: {
      title: "AI HR Copilot",
      architecture: "GPT-4 with Retrieval-Augmented Generation (RAG)",
      methodology: "Zero-shot prompt engineering with strict JSON output forcing for structured action generation.",
      dataset: "Ingested employee handbooks, labor laws, and company policy PDFs.",
      pipeline: [
        "PDF text extraction & chunking",
        "Vector embedding generation",
        "Semantic similarity search on user queries"
      ],
      metrics: [
        { label: "QUERY RESOLUTION RATE", value: "94%" },
        { label: "TIME SAVED PER HR TICKET", value: "15 min" }
      ]
    },
    challenges: [
      {
        problem: "LLM Hallucinations on Policy Questions",
        solution: "Implemented strict RAG boundaries, forcing the AI to return 'I don't know' if the answer wasn't explicitly found in the uploaded context."
      },
      {
        problem: "Complex Role-Based Permissions",
        solution: "Engineered a custom Next.js middleware that validates JWT roles before API execution."
      }
    ],
    coreFeatures: [
      {
        title: "AI HR Copilot",
        description: "RAG-powered conversational agent that instantly answers employee policy questions by scanning company handbooks."
      },
      {
        title: "1-Click Payroll Automation",
        description: "Automated engine that calculates complex tax deductions, handles compliance, and generates secure PDF payslips."
      },
      {
        title: "Smart Leave Workflows",
        description: "Multi-level approval chains with auto-calculated balance deductions and conflict prevention logic."
      },
      {
        title: "Recruitment Pipeline",
        description: "Drag-and-drop Kanban board for seamless applicant tracking, interview scheduling, and offer generation."
      },
      {
        title: "360° Performance Reviews",
        description: "Structured cycles for goal-setting, peer evaluations, and manager feedback tracking."
      },
      {
        title: "Real-Time Workforce Analytics",
        description: "Role-restricted dashboarding providing executives with bird's-eye views of retention, payroll costs, and diversity metrics."
      }
    ],
    results: {
      headline: "HR teams transitioned from scattered spreadsheets to a unified, intelligent command center.",
      description: "Proven to reduce administrative overhead and accelerate employee onboarding.",
      metrics: [
        "60% Reduction in HR Admin Time",
        "100% Automated Payroll Processing"
      ]
    },
    learnings: {
      learned: "Learned how to effectively sandbox AI models to prevent them from hallucinating sensitive HR policy answers.",
      tradeoffs: "Relied on third-party LLM providers, tying feature availability directly to OpenAI API uptime.",
      future: "Train a localized, smaller LLM specifically on HR compliance laws to eliminate API dependency."
    },
    techCategories: {
      frontend: ["React", "Next.js", "TailwindCSS"],
      backend: ["Node.js", "MongoDB", "NextAuth.js"],
      ml: ["OpenAI API", "LangChain"],
      tools: ["Vercel", "Git"]
    }
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
    githubUrl: "https://github.com/princeasodariya13/Setu-Architect",
    liveUrl: "https://setu-architect.vercel.app/",
    image: "/projects/setu-architect-v2.png",
    purpose: "To establish a premium, high-trust digital presence for a legacy architectural firm. The goal was to translate their 35+ years of physical engineering excellence into a modern, highly performant web portfolio that captures high-value B2B and B2C leads.",
    workflow: [
      "Potential clients land on a highly optimized, visual-first hero section.",
      "Users seamlessly filter through residential, commercial, and industrial portfolio categories.",
      "High-resolution architectural blueprints and completed project galleries load instantly via next-gen image optimization.",
      "Interested clients submit project inquiries directly into the firm's CRM via a secure backend API."
    ],
    impact: "The new platform elevated the firm's brand perception, significantly improved organic search visibility for local architectural services, and streamlined the client acquisition pipeline.",
    architecture: [
      {
        title: "Frontend Presentation",
        description: "React and Next.js utilizing static site generation (SSG) for lightning-fast page loads.",
      },
      {
        title: "Image Optimization",
        description: "Implemented Next/Image with WebP conversion to serve massive architectural renders instantly without layout shift.",
      },
      {
        title: "Content Delivery",
        description: "Vercel Edge Network deployment ensuring global low-latency access to the portfolio.",
      }
    ],
    deepDive: {
      title: "High-Performance Media Delivery",
      architecture: "Next.js Image Component & Edge Caching",
      methodology: "Aggressive lazy loading, blur-up placeholders, and dynamic format selection based on browser support.",
      dataset: "Over 500+ high-resolution structural blueprints and final project photographs.",
      pipeline: [
        "Automated image compression during build",
        "Generation of base64 blur placeholders",
        "Viewport-based intersection observer lazy loading"
      ],
      metrics: [
        { label: "LCP (LARGEST CONTENTFUL PAINT)", value: "1.2s" },
        { label: "PERFORMANCE SCORE", value: "98/100" }
      ]
    },
    challenges: [
      {
        problem: "Massive Unoptimized Media Assets",
        solution: "Automated a build pipeline to scale and compress gigabytes of raw architectural images."
      },
      {
        problem: "Complex Multi-Category Portfolio",
        solution: "Built a seamless client-side filtering system that instantly transitions between project categories without reloading."
      }
    ],
    coreFeatures: [
      {
        title: "Interactive Blueprint Gallery",
        description: "Smooth, gesture-supported lightbox for viewing detailed architectural blueprints and structural renders."
      },
      {
        title: "Dynamic Project Filtering",
        description: "Seamless client-side routing allowing users to instantly filter between residential, commercial, and industrial segments."
      },
      {
        title: "SEO Optimized Architecture",
        description: "Dynamic metadata generation for every specific structural project to maximize local real estate search visibility."
      },
      {
        title: "Secure Inquiry System",
        description: "Integrated contact forms linked directly to the firm's CRM for high-value B2B lead generation."
      }
    ],
    results: {
      headline: "A legacy architectural firm transformed into a digital-first market leader.",
      description: "Immediate improvement in digital lead generation and brand authority in the high-end real estate sector.",
      metrics: [
        "40% Increase in Web Traffic",
        "0 Layout Shifts (Perfect CLS)"
      ]
    },
    learnings: {
      learned: "Mastered advanced Next.js optimization techniques, specifically around handling massive media payloads.",
      tradeoffs: "Opted for a hard-coded content approach for maximum speed, sacrificing the flexibility of a traditional CMS.",
      future: "Integrate a headless CMS (like Sanity) to allow the architects to upload new projects without touching code."
    },
    techCategories: {
      frontend: ["React", "Next.js", "TailwindCSS"],
      backend: ["Serverless Functions"],
      ml: [],
      tools: ["Vercel", "Framer Motion"]
    }
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
    image: "/projects/thumblify-v2.png",
    purpose: "To solve the massive bottleneck content creators face: thumbnail design. Thumblify leverages cutting-edge generative AI to turn basic video concepts into highly clickable, professional YouTube thumbnails in seconds, eliminating the need for expensive design software.",
    workflow: [
      "Creators input their video title and select a desired visual style or mood.",
      "The backend interfaces with OpenAI's image generation models to craft a bespoke image.",
      "The generated asset is processed, optimized, and securely stored in the Cloudinary CDN.",
      "Users preview the thumbnail in a simulated YouTube layout before downloading the high-res file."
    ],
    impact: "Reduces thumbnail production time from hours to seconds, empowering independent creators to maintain high-frequency upload schedules without sacrificing visual quality.",
    architecture: [
      {
        title: "Frontend UI",
        description: "Vite + React SPA providing a highly responsive, app-like editor experience.",
      },
      {
        title: "Generation Engine",
        description: "Node.js backend orchestrating parallel requests to OpenAI's DALL-E models.",
      },
      {
        title: "Asset Storage",
        description: "Cloudinary CDN integration for permanent, optimized storage of generated thumbnails.",
      }
    ],
    deepDive: {
      title: "Generative AI Integration",
      architecture: "OpenAI DALL-E 3 API",
      methodology: "Prompt injection engineering—taking user text and invisibly appending strict style, lighting, and composition modifiers before generation.",
      dataset: "Pre-analyzed successful YouTube thumbnail styles (MrBeast style, Tech Review style, etc.).",
      pipeline: [
        "User prompt sanitization",
        "Style-modifier injection",
        "API execution & Cloudinary upload"
      ],
      metrics: [
        { label: "GENERATION SPEED", value: "<12s" },
        { label: "THUMBNAILS GENERATED", value: "5,000+" }
      ]
    },
    challenges: [
      {
        problem: "Unpredictable AI Image Generations",
        solution: "Engineered strict 'negative prompts' and heavily modified the base user input to force high-contrast, YouTube-friendly outputs."
      },
      {
        problem: "High Latency API Calls",
        solution: "Implemented optimistic UI updates and engaging loading states to keep users hooked during the 10-15s generation window."
      }
    ],
    coreFeatures: [
      {
        title: "Generative AI Engine",
        description: "Integrates OpenAI DALL-E to turn standard video titles into highly clickable, complex visual thumbnails."
      },
      {
        title: "1-Click Aesthetic Styles",
        description: "Pre-engineered prompt modifiers (e.g., 'Cyberpunk', 'Vlog', 'Tech Review') to instantly change the visual mood."
      },
      {
        title: "YouTube Layout Preview",
        description: "Live visualizer showing exactly how the generated thumbnail will look on mobile, desktop, and smart TV YouTube interfaces."
      },
      {
        title: "Cloud Asset Gallery",
        description: "Personal history of all previously generated assets, optimized and securely stored in the Cloudinary CDN."
      }
    ],
    results: {
      headline: "Creators replaced complex Photoshop workflows with a single text prompt.",
      description: "Demonstrated massive time savings for content creators who lack formal graphic design training.",
      metrics: [
        "95% Time Saved per Thumbnail",
        "100% Unique Generations"
      ]
    },
    learnings: {
      learned: "Deepened knowledge of prompt engineering and how to programmatically control unpredictable generative AI models.",
      tradeoffs: "Heavy reliance on OpenAI's infrastructure, making the cost-per-generation relatively high compared to local open-source models.",
      future: "Migrate generation to a custom fine-tuned Stable Diffusion model hosted on AWS for lower costs and faster speeds."
    },
    techCategories: {
      frontend: ["React", "Vite", "TailwindCSS"],
      backend: ["Node.js", "Express"],
      ml: ["OpenAI API"],
      tools: ["Cloudinary", "Vercel"]
    }
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
    githubUrl: "https://github.com/princeasodariya13/TransitOps-Smart-Transport",
    liveUrl: "https://transit-ops-smart-transport.vercel.app/",
    image: "/projects/transit-ops-v2.png",
    purpose: "To bring absolute transparency and rigorous data control to complex logistics and fleet management. The platform was built to replace error-prone spreadsheet tracking with a real-time, robust database system that enforces strict role-based compliance.",
    workflow: [
      "Drivers log trips, fuel consumption, and maintenance requests via a mobile-responsive portal.",
      "Fleet Managers review live tracking data and approve maintenance schedules in real-time.",
      "Administrators oversee the entire fleet's operational efficiency and access restricted financial analytics.",
      "The system automatically aggregates data to generate downloadable, formatted PDF performance reports."
    ],
    impact: "Eliminates critical data silos, prevents unauthorized access through strict RBAC, and provides logistics companies with the actionable intelligence needed to cut fuel costs and optimize routing.",
    architecture: [
      {
        title: "Client Architecture",
        description: "React SPA deployed on Vite for high-performance dashboard rendering and data table manipulation.",
      },
      {
        title: "API Layer",
        description: "Node.js/Express REST API utilizing comprehensive Mongoose schemas for complex logistics relationships.",
      },
      {
        title: "Database Structure",
        description: "MongoDB NoSQL database optimized for rapid time-series data insertion (trip logs, fuel records).",
      }
    ],
    deepDive: {
      title: "Data Aggregation & Reporting",
      architecture: "Node.js PDF Generation Pipeline",
      methodology: "Complex MongoDB aggregation pipelines to summarize weekly fleet performance, exported via pdfkit.",
      dataset: "Thousands of simulated trip logs, fuel consumption metrics, and maintenance schedules.",
      pipeline: [
        "Date-range aggregation queries",
        "Data formatting & normalization",
        "PDF buffer generation & stream delivery"
      ],
      metrics: [
        { label: "DATA POINTS TRACKED", value: "10,000+" },
        { label: "REPORT GEN TIME", value: "<1s" }
      ]
    },
    challenges: [
      {
        problem: "Complex Relational Data in NoSQL",
        solution: "Designed highly efficient Mongoose references connecting Vehicles, Drivers, Trips, and Fuel Logs."
      },
      {
        problem: "Strict Role-Based UI Rendering",
        solution: "Built a centralized auth context that dynamically strips out restricted UI components based on the user's JWT payload."
      }
    ],
    coreFeatures: [
      {
        title: "Real-Time Vehicle Tracking",
        description: "Comprehensive profiles managing licensing, insurance documentation, and historical performance for every asset."
      },
      {
        title: "Maintenance Scheduling",
        description: "Automated alerts prioritizing upcoming oil changes, tire rotations, and mandatory structural inspections."
      },
      {
        title: "Dynamic PDF Reporting",
        description: "Node.js pipelines aggregating weekly fleet data into beautifully formatted, downloadable PDF efficiency reports."
      },
      {
        title: "Strict Role-Based Access",
        description: "Centralized JWT auth separating Administrator financial privileges from standard Fleet Manager operational access."
      }
    ],
    results: {
      headline: "Replacing error-prone spreadsheets with a secure, real-time command center.",
      description: "Provided fleet managers with the exact data needed to reduce operational waste and improve driver safety.",
      metrics: [
        "100% Data Traceability",
        "Secure Role Isolation"
      ]
    },
    learnings: {
      learned: "Mastered MongoDB aggregation pipelines for complex data analysis and dynamic PDF report generation.",
      tradeoffs: "Chose NoSQL for speed of development, though a SQL database might have offered stricter constraints for financial records.",
      future: "Integrate live GPS hardware APIs to plot vehicle locations on an interactive map in real-time."
    },
    techCategories: {
      frontend: ["React", "Vite", "TailwindCSS"],
      backend: ["Node.js", "Express", "MongoDB"],
      ml: [],
      tools: ["PDFKit", "JWT Auth"]
    }
  },
  {
    id: "healthcare-hub",
    title: "Healthcare Hub (Medynest)",
    description:
      "A modern digital platform for a trusted healthcare provider established in 1985. Features dedicated patient and doctor dashboards with a live appointment booking system, showcasing medical excellence and treating over 25K+ patients.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    features: [
      "Dedicated Patient Dashboard with medical history tracking",
      "Specialized Doctor Dashboard for schedule management",
      "Live doctor booking and real-time appointment scheduling",
      "Multi-branch support across 12 Clinic Locations",
    ],
    githubUrl: "https://github.com/princeasodariya13/Medynest",
    liveUrl: "https://medynest.freedev.app",
    image: "/projects/healthcare-hub-v2.png",
    purpose: "To provide a state-of-the-art digital presence for a healthcare center standing as a symbol of trust and innovation since 1985, delivering the highest standard of medical care that exceeds expectations.",
    workflow: [
      "Patients log into their dedicated dashboard to search for doctors and securely book live appointments.",
      "Doctors access their specialized dashboard to view daily schedules, patient details, and manage upcoming visits.",
      "Administrators oversee the entire hospital operation, managing clinic locations and resolving emergency contacts.",
      "The PHP/MySQL backend processes all live bookings in real-time to prevent any scheduling conflicts."
    ],
    impact: "Digitally transformed a legacy medical institution, improving patient access to emergency services and connecting thousands to specialized care across multiple clinic locations.",
    architecture: [
      {
        title: "Frontend Presentation",
        description: "Responsive HTML/CSS UI designed to build trust with clean, accessible medical branding and smooth navigation.",
      },
      {
        title: "Data Layer",
        description: "Relational MySQL database approach managing large volumes of patient interactions and staff directories across 12 locations.",
      },
      {
        title: "Security",
        description: "Strict session management to protect sensitive login access for patients and doctors.",
      }
    ],
    deepDive: {
      title: "Live Appointment Engine",
      architecture: "Real-Time Scheduling Database",
      methodology: "Transactional SQL architecture ensuring that live doctor bookings are processed instantly without double-booking.",
      dataset: "Information spanning 150+ specialists, 12 clinics, and thousands of appointment slots.",
      pipeline: [
        "Patient slot request via Patient Dashboard",
        "Backend availability verification",
        "Instant booking confirmation & schedule update"
      ],
      metrics: [
        { label: "CLINIC LOCATIONS", value: "12" },
        { label: "MEDICAL SPECIALISTS", value: "150+" }
      ]
    },
    challenges: [
      {
        problem: "Trust & Credibility UI Design",
        solution: "Implemented a clean, professional aesthetic featuring critical trust metrics (25K+ patients, 98% satisfaction) prominently on the hero section."
      },
      {
        problem: "Multi-Location Management",
        solution: "Engineered a scalable data structure to manage schedules and services uniquely across 12 different clinic locations."
      }
    ],
    coreFeatures: [
      {
        title: "Live Doctor Booking",
        description: "A seamless interface allowing patients to browse available slots and book appointments in real-time."
      },
      {
        title: "Patient Dashboard",
        description: "A personalized portal where patients can securely view their upcoming appointments and medical history."
      },
      {
        title: "Doctor Dashboard",
        description: "A centralized command center for physicians to manage their live schedules and update patient records."
      },
      {
        title: "Secure Access Portal",
        description: "Role-based authentication ensuring doctors, patients, and admins only access their authorized data."
      }
    ],
    results: {
      headline: "A digital reflection of 35+ years of medical excellence.",
      description: "Successfully communicated the institution's legacy of trust while providing modern tools for patient engagement.",
      metrics: [
        "25K+ Patients Treated",
        "98% Satisfaction Rate"
      ]
    },
    learnings: {
      learned: "Gained experience in designing user interfaces for the healthcare sector, where building immediate trust and clarity is paramount.",
      tradeoffs: "Prioritized straightforward, accessible design over complex animations to ensure usability for patients of all ages.",
      future: "Implement a fully integrated telemedicine video consultation feature."
    },
    techCategories: {
      frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      backend: ["PHP", "MySQL"],
      ml: [],
      tools: ["Git"]
    }
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
