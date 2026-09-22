import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CursorGrid from "@/components/CursorGrid";
import Link from "next/link";
import { FaRocket, FaLaptopCode, FaDatabase, FaCode } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Career & Technology Journey | Prince Asodariya",
  description:
    "Timeline of Prince Asodariya's developer journey from 2023 to 2026, featuring milestones in MERN stack, React, Node.js, and full-stack web development.",
  alternates: {
    canonical: "https://prince-asodariya.vercel.app/journey",
  },
  openGraph: {
    title: "Career & Technology Journey | Prince Asodariya",
    description:
      "Timeline of Prince Asodariya's developer journey from 2023 to 2026, featuring milestones in MERN stack, React, Node.js, and full-stack web development.",
    url: "https://prince-asodariya.vercel.app/journey",
    siteName: "Prince Asodariya Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/image-Prince3.png",
        alt: "Prince Asodariya — Development Journey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career & Technology Journey | Prince Asodariya",
    description:
      "Timeline of Prince Asodariya's developer journey from 2023 to 2026, featuring milestones in MERN stack, React, Node.js, and full-stack web development.",
    images: ["/image-Prince3.png"],
  },
};

const journeyData = [
  {
    year: "2026",
    title: "MERN Stack & Full-Stack Developer",
    subtitle: "Full-Stack Specialization",
    description: "Completed specialized MERN Stack development in June 2026. Built production-ready web applications using MongoDB, Express.js, React, Node.js, Next.js, and TypeScript. Focused on RESTful APIs, authentication systems, responsive UI, and scalable web architecture as a developer in Gujarat.",
    icon: FaRocket,
    skills: ["MongoDB", "Express.js", "React", "Node.js", "Next.js", "TypeScript", "REST APIs"]
  },
  {
    year: "2025",
    title: "Advanced Software & Web Development",
    subtitle: "Technology Expansion",
    description: "Expanded developer capabilities with modern JavaScript (ES6+), TypeScript, .NET framework, and mobile app development. Strengthened core software engineering practices, asynchronous logic, API integration, and component design.",
    icon: FaLaptopCode,
    skills: ["JavaScript (ES6+)", "TypeScript", ".NET", "Android", "APIs"]
  },
  {
    year: "2024",
    title: "Backend & Data Engineering",
    subtitle: "Skill Expansion Phase",
    description: "Learned Java programming, MySQL database management, and PHP backend development. Completed a Python certification course covering data libraries like NumPy, Pandas, and Tabula for data processing and analysis.",
    icon: FaDatabase,
    skills: ["Java", "MySQL", "PHP", "Python", "Pandas"]
  },
  {
    year: "2023",
    title: "Started Programming Journey",
    subtitle: "Foundation Phase",
    description: "Began the journey into programming and web development with HTML, CSS, JavaScript, and C++. Built basic websites and learned core programming logic and problem-solving skills.",
    icon: FaCode,
    skills: ["HTML5", "CSS3", "JavaScript", "C++"]
  }
];

export default function JourneyPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-[100svh] pt-[120px] pb-24 bg-[#f8fafc] overflow-hidden">
        {/* Subtle Interactive Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <CursorGrid
            cellSize={80}
            color="#94a3b8"
            radius={150}
            falloff="smooth"
            holdTime={100}
            fadeDuration={500}
            lineWidth={0.5}
            maxOpacity={0.2}
            fillOpacity={0}
            gridOpacity={0}
            cellRadius={0}
            clickPulse
            pulseSpeed={650}
          />
        </div>

        <div className="w-full max-w-[900px] mx-auto px-[clamp(1.25rem,5vw,5rem)] relative z-10">
          <Reveal>
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-accent transition-colors mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                  <span>←</span> Return to Main Portfolio
                </Link>
                <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tight text-slate-900 leading-none">
                  My Journey<span className="text-accent">.</span>
                </h1>
                <p className="mt-3 text-[0.95rem] text-slate-600 font-medium max-w-xl">
                  A timeline of Prince Asodariya&apos;s development journey, tracking technical growth as a MERN Stack Developer and Full-Stack Developer across React, Node.js, Next.js, TypeScript, and MongoDB engineering.
                </p>
              </div>
              
              <Link 
                href="/contact" 
                aria-label="Contact Prince Asodariya to work together"
                className="shrink-0 group inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-bold !text-white transition-all hover:bg-slate-800 hover:scale-[1.02] shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
                style={{ color: '#ffffff' }}
              >
                Contact Me / Let's Work Together <span className="transition-transform group-hover:translate-x-1 !text-white" style={{ color: '#ffffff' }}>→</span>
              </Link>
            </div>
          </Reveal>

          <div className="relative md:ml-[140px] space-y-12 mt-12 md:mt-24">
            {/* Continuous Gradient Line */}
            <div className="absolute top-4 bottom-4 left-[23px] w-[3px] bg-gradient-to-b from-accent via-blue-500 to-emerald-500 rounded-full opacity-80" />

            {journeyData.map((item, index) => (
              <Reveal key={item.year} delay={index * 100}>
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 group">
                  
                  {/* Left Date / Year Column */}
                  <div className="md:w-[120px] md:text-right shrink-0 flex md:block items-center gap-3">
                    <span className="font-display text-2xl md:text-3xl font-black text-slate-900 group-hover:text-accent transition-colors">
                      {item.year}
                    </span>
                    <span className="md:block font-mono text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider">
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Icon Node on Timeline Line */}
                  <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-700 shadow-md group-hover:border-accent group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm group-hover:shadow-md group-hover:border-accent/30 transition-all duration-300">
                    <div className="flex flex-col gap-4">
                      <div>
                        <div className="flex items-center gap-2 md:hidden mb-2">
                          <item.icon className="w-4 h-4 text-accent" />
                          <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
                            {item.subtitle}
                          </span>
                        </div>
                        <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-slate-600 text-[0.95rem] leading-relaxed font-medium">
                        {item.description}
                      </p>
                      
                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                        {item.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full text-[0.65rem] font-bold tracking-wide transition-colors group-hover:border-accent/30 group-hover:bg-accent/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <nav aria-label="Journey Footer Links" className="mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-sm font-bold">
            <Link href="/#projects" className="text-slate-600 hover:text-accent transition-colors">
              ← Explore Project Case Studies
            </Link>
            <Link href="/contact" className="text-accent hover:underline">
              Get in Touch with Prince Asodariya →
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
