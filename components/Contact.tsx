"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";

type Status = "idle" | "submitting" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  purpose?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", purpose: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(): boolean {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!EMAIL_RE.test(values.email))
      next.email = "Enter a valid email address.";
    if (!values.message.trim()) next.message = "Message is required.";
    else if (values.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Request failed");
      }

      setStatus("success");
      setValues({ name: "", email: "", purpose: "", message: "" });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrors((prev) => ({ ...prev, server: err.message }));
    }
  }

  return (
    <section id="contact" className="relative py-[clamp(4rem,6vw,6rem)] bg-bg-primary overflow-hidden">
      {/* Decorative Orbs for Contact Section */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[20%] right-[-10%] w-[70vw] h-[70vw] lg:w-[500px] lg:h-[500px] bg-orange-400/10 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[80vw] h-[80vw] lg:w-[600px] lg:h-[600px] bg-purple-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '14s' }} />
      </div>

      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)] relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-start">
          <div className="flex flex-col">
            <SectionHeading
              eyebrow="07 — contact"
              title="Let's build something."
              description="Have a role, project, or question? Send a message and I'll get back to you."
            />

            <Reveal delay={50}>
              <div className="mt-8 lg:mt-10 bg-white/50 backdrop-blur-md rounded-2xl p-6 lg:p-0 lg:bg-transparent lg:backdrop-blur-none lg:border-none border border-slate-100 shadow-sm lg:shadow-none space-y-5 font-mono text-sm">
                <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-8">
                  I&apos;m currently open to new opportunities. Whether you have
                  a project in mind or just want to say hi — my inbox is always
                  open.
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 text-slate-800 font-bold transition-colors hover:text-accent group w-fit"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-orange-100 flex items-center justify-center transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-accent"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    {profile.email}
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-800 font-bold transition-colors hover:text-accent group w-fit"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-orange-100 flex items-center justify-center transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-accent"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </div>
                    GitHub ↗
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-800 font-bold transition-colors hover:text-accent group w-fit"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-orange-100 flex items-center justify-center transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-accent"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </div>
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] max-w-[420px] w-full">
              <h3 className="text-xl font-black text-[#111827] mb-1.5">Send a Message</h3>
              <p className="text-[#6b7280] text-[0.85rem] mb-6">Have an idea or opportunity? Let's talk.</p>
              
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-[0.6rem] font-bold tracking-widest text-[#9ca3af] uppercase mb-1.5">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={values.name}
                    onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                    className="w-full bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-3.5 py-2.5 text-[#111827] text-[0.9rem] focus:border-[#d1d5db] focus:ring-4 focus:ring-gray-100 outline-none transition-all placeholder:text-[#d1d5db]"
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[0.6rem] font-bold tracking-widest text-[#9ca3af] uppercase mb-1.5">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={values.email}
                    onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                    className="w-full bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-3.5 py-2.5 text-[#111827] text-[0.9rem] focus:border-[#d1d5db] focus:ring-4 focus:ring-gray-100 outline-none transition-all placeholder:text-[#d1d5db]"
                    placeholder="jane@company.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-purpose" className="block text-[0.6rem] font-bold tracking-widest text-[#9ca3af] uppercase mb-1.5">
                    Purpose
                  </label>
                  <input
                    id="contact-purpose"
                    type="text"
                    value={values.purpose}
                    onChange={(e) => setValues((v) => ({ ...v, purpose: e.target.value }))}
                    className="w-full bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-3.5 py-2.5 text-[#111827] text-[0.9rem] focus:border-[#d1d5db] focus:ring-4 focus:ring-gray-100 outline-none transition-all placeholder:text-[#d1d5db]"
                    placeholder="Internship / Job Opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[0.6rem] font-bold tracking-widest text-[#9ca3af] uppercase mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                    className="w-full resize-none bg-[#f9fafb] border border-[#f3f4f6] rounded-xl px-3.5 py-2.5 text-[#111827] text-[0.9rem] focus:border-[#d1d5db] focus:ring-4 focus:ring-gray-100 outline-none transition-all placeholder:text-[#d1d5db]"
                    placeholder="Hi Prince, I saw your portfolio and wanted to reach out regarding..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-black text-white font-bold rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors disabled:opacity-70 disabled:cursor-not-allowed text-[0.95rem]"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                  {status !== "submitting" && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  )}
                </button>

                <div role="status" aria-live="polite">
                  {status === "success" && (
                    <p className="text-xs text-green-600 font-medium text-center mt-2">
                      ✓ Message sent — thanks for reaching out.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-xs text-red-500 font-medium text-center mt-2">
                      {(errors as any).server || "Something went wrong. Please try again or email directly."}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-[#f3f4f6] space-y-2.5">
                  <div className="flex items-center gap-2.5 text-[0.75rem] text-[#6b7280]">
                    <svg className="text-emerald-500 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    Typically responds within 24 hours
                  </div>
                  <div className="flex items-center gap-2.5 text-[0.75rem] text-[#6b7280]">
                    <svg className="text-blue-500 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                    Open to serious technical opportunities only
                  </div>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
