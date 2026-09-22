import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Prince Asodariya — MERN Stack & Full-Stack Developer",
  description:
    "Get in touch with Prince Asodariya, a MERN Stack & Full-Stack Developer based in Gujarat, India. Open for freelance projects and engineering opportunities.",
  alternates: {
    canonical: "https://prince-asodariya.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Prince Asodariya — MERN Stack & Full-Stack Developer",
    description:
      "Get in touch with Prince Asodariya, a MERN Stack & Full-Stack Developer based in Gujarat, India. Open for freelance projects and engineering opportunities.",
    url: "https://prince-asodariya.vercel.app/contact",
    siteName: "Prince Asodariya Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/image-Prince3.png",
        alt: "Contact Prince Asodariya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Prince Asodariya — MERN Stack & Full-Stack Developer",
    description:
      "Get in touch with Prince Asodariya, a MERN Stack & Full-Stack Developer based in Gujarat, India. Open for freelance projects and engineering opportunities.",
    images: ["/image-Prince3.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#fcfcfc]">
        <h1 className="sr-only">Contact Prince Asodariya — MERN Stack &amp; Full-Stack Developer</h1>
        <div className="w-full max-w-[1180px] mx-auto px-[clamp(1.25rem,5vw,5rem)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs font-bold text-slate-500">
          <Link href="/" className="hover:text-accent transition-colors">
            ← Return to Main Portfolio
          </Link>
          <Link href="/journey" className="hover:text-accent transition-colors">
            View Development Journey →
          </Link>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
