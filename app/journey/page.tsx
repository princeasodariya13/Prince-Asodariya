import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CursorGrid from "@/components/CursorGrid";
import Link from "next/link";
import { FaRocket, FaLaptopCode, FaDatabase, FaCode } from "react-icons/fa";

const journeyData = [
  {
    year: "2026",
    title: "MERN Stack Developer",
    subtitle: "Full-Stack Specialization",
    description: "Completed MERN Stack development in June 2026. Built full-stack applications using MongoDB, Express.js, React, and Node.js. Focused on RESTful APIs, authentication systems, responsive UI, and scalable web architecture.",
    icon: FaRocket,
    skills: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"]
  },
  {
    year: "2025",
    title: "Advanced Development",
    subtitle: "Technology Expansion",
    description: "Started MERN Stack development along with .NET framework and Android development. Strengthened JavaScript concepts including ES6+, asynchronous programming, API integration, and modern frontend development practices.",
    icon: FaLaptopCode,
    skills: [".NET", "Android", "JavaScript (ES6+)", "APIs"]
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
                <Link href="/#education" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-accent transition-colors mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                  <span>←</span> Back to Home
                </Link>
                <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-tight text-slate-900 leading-none">
                  My Journey<span className="text-accent">.</span>
                </h1>
                <p className="mt-3 text-[0.95rem] text-slate-600 font-medium max-w-xl">
                  A timeline of my professional growth, academic background, and the technologies I've mastered along the way.
                </p>
              </div>
              
              <Link 
                href="/#contact" 
                className="shrink-0 group inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-bold !text-white transition-all hover:bg-slate-800 hover:scale-[1.02] shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
                style={{ color: '#ffffff' }}
              >
                Let's Work Together <span className="transition-transform group-hover:translate-x-1 !text-white" style={{ color: '#ffffff' }}>→</span>
              </Link>
            </div>
          </Reveal>

          <div className="relative md:ml-[140px] space-y-12 mt-12 md:mt-24">
            {/* Continuous Gradient Line */}
            <div className="absolute left-[22px] top-6 bottom-6 w-[4px] bg-gradient-to-b from-accent via-purple-500/50 to-transparent rounded-full z-0" />
            
            {journeyData.map((item, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="relative flex items-start group">
                  
                  {/* Timeline Dot / Icon */}
                  <div className="flex items-center justify-center w-[48px] h-[48px] bg-white border-[3px] border-slate-200 group-hover:border-accent group-hover:bg-accent group-hover:text-white text-slate-400 transition-all duration-500 rounded-full shadow-[0_0_0_8px_#f8fafc] z-10 shrink-0">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  
                  {/* Desktop Year */}
                  <div className="hidden md:block absolute -left-[140px] w-[110px] text-right pt-2.5 z-10">
                    <span className="font-mono text-xl font-black text-slate-300 group-hover:text-accent transition-colors duration-500">
                      {item.year}
                    </span>
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 ml-6 md:ml-10 z-10">
                    {/* Mobile Year */}
                    <div className="md:hidden font-mono text-lg font-black text-accent mb-2 pt-2">
                      {item.year}
                    </div>

                    {/* Content Card */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1">
                      <div className="uppercase text-[0.6rem] font-black tracking-widest text-accent mb-2">
                        {item.subtitle}
                      </div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-slate-800 mb-2 md:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[0.85rem] text-slate-600 leading-[1.7] font-medium mb-5">
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
        </div>
      </main>
      <Footer />
    </>
  );
}
