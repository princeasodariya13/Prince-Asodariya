import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import ProjectNavigation from "@/components/ProjectNavigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-[#fcfcfc] selection:bg-accent selection:text-white" id="top">
      {/* Background Image with CSS Mask */}
      {project.image && (
        <div className="absolute inset-x-0 top-0 h-[80vh] w-full z-0 pointer-events-none select-none">
          <div className="absolute inset-0 z-10 bg-[#fcfcfc]/40 backdrop-blur-[2px]" />
          <Image
            src={project.image}
            alt="Project Showcase"
            fill
            className="object-cover object-top opacity-30 mix-blend-multiply"
            style={{
              maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'
            }}
            priority
          />
        </div>
      )}

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,5rem)] pt-8 pb-20">
        
        {/* Top Action Bar */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-xl border border-[#e5e7eb] px-5 py-2.5 font-mono text-[0.75rem] font-bold tracking-wide text-[#374151] hover:bg-white hover:text-black hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 shadow-sm"
          >
            <span aria-hidden="true" className="text-lg leading-none mt-[-2px]">←</span> Back to Projects
          </Link>
          <ShareButton />
        </div>

        {/* Hero Section */}
        <header className="relative mb-10 md:mb-12">
          <div className="absolute -top-10 -left-[5%] w-[110%] overflow-hidden whitespace-nowrap opacity-[0.015] select-none pointer-events-none font-display text-[10vw] font-black leading-none tracking-tighter text-black">
            {project.title}
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="flex flex-wrap gap-2.5 mb-8">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <span 
                  key={tech} 
                  className={`uppercase text-[0.65rem] font-bold tracking-[0.15em] px-4 py-1.5 rounded-full border ${
                    i === 0 ? "bg-[#eef2ff] text-[#4f46e5] border-[#e0e7ff]" : "bg-white/50 text-[#4b5563] border-[#e5e7eb] backdrop-blur-md"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#111827] mb-6">
              {project.title}
            </h1>
            
            <p className="text-[clamp(1rem,1.5vw,1.15rem)] text-[#4b5563] max-w-2xl mb-12 leading-[1.7] font-medium tracking-tight">
              {project.description}
            </p>

            {/* Premium Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-2.5 rounded-full bg-black px-7 py-3.5 font-semibold !text-white transition-all duration-400 hover:scale-[1.04] hover:bg-gray-900 shadow-[0_8px_20px_rgb(0,0,0,0.16)] active:scale-95"
                >
                  Live Deployment
                  <svg className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-2.5 rounded-full bg-white border border-[#e5e7eb] px-7 py-3.5 font-semibold text-[#111827] transition-all duration-400 hover:scale-[1.04] hover:border-[#d1d5db] shadow-sm active:scale-95"
                >
                  GitHub Repo
                  <svg className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#6b7280] group-hover:text-[#111827]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Bento Box Architecture */}
        <article className="space-y-10 md:space-y-12">
          
          {/* The Problem & Objective */}
          {(project.purpose || project.impact) && (
            <section id="the-problem" className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-8 md:gap-12 items-start pt-4">
              {project.purpose && (
                <div>
                  <div className="flex items-center gap-2.5 text-[#4f46e5] font-bold tracking-[0.2em] text-[0.65rem] uppercase mb-8">
                    <svg className="text-[#4f46e5]/70" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
                    The Objective
                  </div>
                  <h2 className="font-display text-[clamp(1.5rem,2.5vw,1.8rem)] font-bold tracking-tight text-[#111827] leading-[1.6] max-w-2xl">
                    {project.purpose}
                  </h2>
                </div>
              )}
              {project.impact && (
                <div className="md:pt-16">
                  <div className="text-[#9ca3af] font-bold tracking-[0.2em] text-[0.65rem] uppercase mb-5">
                    Business Impact
                  </div>
                  <p className="text-[#4b5563] leading-[1.8] text-[0.95rem] font-medium">
                    {project.impact}
                  </p>
                </div>
              )}
            </section>
          )}

          {/* Architecture & System Design */}
          {project.architecture && (
            <section id="architecture" className="pt-8 md:pt-10 border-t border-[#f3f4f6]">
              <div className="flex items-center gap-2.5 text-[#2563eb] font-bold tracking-[0.2em] text-[0.65rem] uppercase mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                Architecture & System Design
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.architecture.map((arch, i) => (
                  <div key={i} className="bg-white border border-[#f3f4f6] rounded-[24px] p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-[#111827] mb-4">{arch.title}</h3>
                    <p className="text-[#4b5563] text-[0.95rem] leading-[1.7]">{arch.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technical Deep Dive */}
          {project.deepDive && (
            <section id="technical-deep-dive" className="pt-8 md:pt-10 border-t border-[#f3f4f6]">
              <div className="flex items-center gap-2.5 text-[#8b5cf6] font-bold tracking-[0.2em] text-[0.65rem] uppercase mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                {project.deepDive.title.toLowerCase().includes('ai') || project.deepDive.title.toLowerCase().includes('model') ? 'ML & Technical Deep Dive' : 'Technical Deep Dive'}
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Large Main Box */}
                <div className="md:col-span-2 bg-[#f5f3ff] rounded-[24px] p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-8">{project.deepDive.title}</h3>
                  <div className="space-y-8">
                    <div>
                      <div className="text-[#8b5cf6] text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-2">Core Architecture</div>
                      <div className="text-xl font-semibold text-[#1f2937]">{project.deepDive.architecture}</div>
                    </div>
                    <div>
                      <div className="text-[#8b5cf6] text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-2">Training Methodology</div>
                      <div className="text-[1rem] text-[#4b5563] leading-[1.7]">{project.deepDive.methodology}</div>
                    </div>
                  </div>
                </div>
                {/* Dataset Box */}
                <div className="bg-white border border-[#f3f4f6] rounded-[24px] p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-[#111827] mb-4">Dataset</h3>
                  <p className="text-[#4b5563] text-[0.95rem] leading-[1.7]">{project.deepDive.dataset}</p>
                </div>
                {/* Preprocessing Box */}
                <div className="bg-white border border-[#f3f4f6] rounded-[24px] p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-[#111827] mb-6">Preprocessing Pipeline</h3>
                  <ul className="space-y-4">
                    {project.deepDive.pipeline.map((step, i) => (
                      <li key={i} className="flex gap-4 items-start text-[#4b5563] text-[0.95rem]">
                        <span className="text-[#d1d5db] font-bold font-mono text-sm">.0{i+1}</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Metrics Box */}
                <div className="md:col-span-2 bg-white border border-[#f3f4f6] rounded-[24px] p-8 shadow-sm flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-[#111827] mb-8">Evaluation Metrics</h3>
                  <div className="grid grid-cols-2 gap-8">
                    {project.deepDive.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="text-4xl font-black text-[#111827] mb-2 font-display">{metric.value}</div>
                        <div className="text-[#9ca3af] text-[0.65rem] font-bold tracking-[0.2em] uppercase">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Technical Challenges & Core Features */}
          {project.challenges && (
            <section id="core-features" className="pt-8 md:pt-10 border-t border-[#f3f4f6]">
              <div className="bg-[#fff1f2] border border-[#fecdd3] rounded-[24px] p-8 md:p-10 mb-8">
                <div className="flex items-center gap-2 text-[#e11d48] font-bold text-[1.2rem] mb-8">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                  Technical Challenges
                </div>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  {project.challenges.map((challenge, i) => (
                    <div key={i}>
                      <div className="text-[#e11d48] font-bold mb-3">Problem: {challenge.problem}</div>
                      <div className="text-[#4b5563] text-[0.95rem] leading-[1.7]"><span className="font-bold text-[#111827]">Solution:</span> {challenge.solution}</div>
                    </div>
                  ))}
                </div>
              </div>

              {project.coreFeatures && (
                <div>
                  <div className="flex items-center gap-2.5 text-[#9ca3af] font-bold tracking-[0.2em] text-[0.65rem] uppercase mb-8">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    Core Features
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {project.coreFeatures.map((feat, i) => (
                      <div key={i} className="bg-white border border-[#f3f4f6] rounded-[24px] p-8 shadow-sm">
                        <h3 className="text-[1.1rem] font-bold text-[#111827] mb-3">{feat.title}</h3>
                        <p className="text-[#6b7280] text-[0.9rem] leading-[1.7]">{feat.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Results & Impact */}
          {project.results && (
            <section id="results" className="pt-8 md:pt-10 border-t border-[#f3f4f6]">
              <div className="flex items-center gap-2.5 text-[#059669] font-bold tracking-[0.2em] text-[0.65rem] uppercase mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                Results & Impact
              </div>
              <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div>
                  <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-bold text-[#111827] leading-[1.2] mb-6">
                    {project.results.headline}
                  </h2>
                  <p className="text-[#6b7280] text-[1.1rem] leading-[1.7]">
                    {project.results.description}
                  </p>
                </div>
                <div className="space-y-4">
                  {project.results.metrics.map((metric, i) => (
                    <div key={i} className="bg-[#ecfdf5] border border-[#d1fae5] rounded-[16px] p-6 text-[1.1rem] font-bold text-[#111827] shadow-sm">
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Learnings & Tech Stack */}
          {project.learnings && (
            <section id="learnings" className="pt-8 md:pt-10 border-t border-[#f3f4f6]">
              <div className="flex items-center gap-2.5 text-[#ea580c] font-bold tracking-[0.2em] text-[0.65rem] uppercase mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                Takeaways & Learnings
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-24">
                <div className="bg-white border border-[#f3f4f6] rounded-[24px] p-8 shadow-sm">
                  <div className="text-[#9ca3af] text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-4">What I Learned</div>
                  <p className="text-[#4b5563] text-[0.95rem] leading-[1.7]">{project.learnings.learned}</p>
                </div>
                <div className="bg-white border border-[#f3f4f6] rounded-[24px] p-8 shadow-sm">
                  <div className="text-[#9ca3af] text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-4">Trade-offs Made</div>
                  <p className="text-[#4b5563] text-[0.95rem] leading-[1.7]">{project.learnings.tradeoffs}</p>
                </div>
                <div className="bg-white border border-[#f3f4f6] rounded-[24px] p-8 shadow-sm">
                  <div className="text-[#9ca3af] text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-4">Future Improvements</div>
                  <p className="text-[#4b5563] text-[0.95rem] leading-[1.7]">{project.learnings.future}</p>
                </div>
              </div>

              {/* Tech Stack Breakdown */}
              {project.techCategories && (
                <div id="tech-stack" className="pt-12 border-t border-[#f3f4f6]">
                  <div className="flex items-center gap-2.5 text-[#9ca3af] font-bold tracking-[0.2em] text-[0.65rem] uppercase mb-8">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                    Tech Stack Foundation
                  </div>
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {Object.entries({
                      Frontend: project.techCategories.frontend,
                      Backend: project.techCategories.backend,
                      'ML / AI': project.techCategories.ml,
                      Tools: project.techCategories.tools
                    }).map(([category, items]) => items && (
                      <div key={category} className="bg-white border border-[#f3f4f6] rounded-[24px] p-6 shadow-sm">
                        <h4 className="text-lg font-bold text-[#111827] mb-4">{category}</h4>
                        <ul className="space-y-3">
                          {items.map(item => (
                            <li key={item} className="flex items-center gap-2 text-[#4b5563] text-[0.95rem]">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444]"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

        </article>
      </div>

      {/* Floating Navigation Menu */}
      <ProjectNavigation />
    </main>
  );
}
