import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import IndexRail from "@/components/IndexRail";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

import LenisProvider from "@/components/LenisProvider";
import IntroAnimation from "@/components/IntroAnimation";

const siteUrl = "https://prince-asodariya.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prince Asodariya — MERN Stack & Full-Stack Developer",
    template: "%s | Prince Asodariya",
  },
  description:
    "Prince Asodariya is a MERN Stack and Full-Stack Developer from Gujarat, India, specializing in React, Node.js, Express.js, MongoDB, Next.js, TypeScript, and scalable web applications.",
  keywords: [
    "Prince Asodariya",
    "Prince Asodariya Developer",
    "Prince Asodariya Portfolio",
    "MERN Stack Developer",
    "MERN Developer",
    "Full-Stack Developer",
    "Full Stack Web Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "MongoDB Developer",
    "Web Developer",
    "Software Developer",
    "Full Stack Developer Gujarat",
    "MERN Stack Developer Gujarat",
    "Developer Ahmedabad",
    "Web Developer Ahmedabad",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Prince Asodariya — MERN Stack & Full-Stack Developer",
    description:
      "Prince Asodariya is a MERN Stack and Full-Stack Developer from Gujarat, India, specializing in React, Node.js, Express.js, MongoDB, Next.js, TypeScript, and scalable web applications.",
    url: siteUrl,
    siteName: "Prince Asodariya Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/image-Prince3.png",
        alt: "Prince Asodariya — MERN Stack & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Asodariya — MERN Stack & Full-Stack Developer",
    description:
      "Prince Asodariya is a MERN Stack and Full-Stack Developer from Gujarat, India, specializing in React, Node.js, Express.js, MongoDB, Next.js, TypeScript, and scalable web applications.",
    images: ["/image-Prince3.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="font-body antialiased">
        <IntroAnimation />
        <LenisProvider>
          <IndexRail />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
