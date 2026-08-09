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
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
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

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-[clamp(4.5rem,10vw,9rem)] bg-[#fafafa]">
      <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)]">
        <SectionHeading
          eyebrow="07 — contact"
          title="Let's build something."
          description="Have a role, project, or question? Send a message and I'll get back to you."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="space-y-5 font-mono text-sm">
              <p className="text-[#6b7280] text-base mb-8">
                I&apos;m currently open to new opportunities. Whether you have
                a project in mind or just want to say hi — my inbox is always
                open.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-[#111111] transition-colors hover:text-red-500 group"
              >
                <span className="w-8 h-[1px] bg-[#e5e7eb] group-hover:bg-red-500 transition-colors" />
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#111111] transition-colors hover:text-red-500 group"
              >
                <span className="w-8 h-[1px] bg-[#e5e7eb] group-hover:bg-red-500 transition-colors" />
                GitHub ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#111111] transition-colors hover:text-red-500 group"
              >
                <span className="w-8 h-[1px] bg-[#e5e7eb] group-hover:bg-red-500 transition-colors" />
                LinkedIn ↗
              </a>
              <a
                href={(profile as any).instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#111111] transition-colors hover:text-red-500 group"
              >
                <span className="w-8 h-[1px] bg-[#e5e7eb] group-hover:bg-red-500 transition-colors" />
                Instagram ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block font-mono text-sm text-[#6b7280]"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={values.name}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, name: e.target.value }))
                  }
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full rounded-[10px] border border-[#e5e7eb] bg-[#ffffff] px-4 py-3 text-[#111111] outline-none transition-colors focus:border-red-500 placeholder:text-[#9ca3af]"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block font-mono text-sm text-[#6b7280]"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={values.email}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, email: e.target.value }))
                  }
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-[10px] border border-[#e5e7eb] bg-[#ffffff] px-4 py-3 text-[#111111] outline-none transition-colors focus:border-red-500 placeholder:text-[#9ca3af]"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1.5 text-sm text-red-500"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block font-mono text-sm text-[#6b7280]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={values.message}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, message: e.target.value }))
                  }
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className="w-full resize-none rounded-[10px] border border-[#e5e7eb] bg-[#ffffff] px-4 py-3 text-[#111111] outline-none transition-colors focus:border-red-500 placeholder:text-[#9ca3af]"
                  placeholder="Tell me about your project or opportunity…"
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1.5 text-sm text-red-500"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Send Message"}
              </Button>

              <div role="status" aria-live="polite">
                {status === "success" && (
                  <p className="text-sm text-red-500">
                    ✓ Message sent — thanks for reaching out.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
