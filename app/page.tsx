import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { profile } from "@/lib/data";

const siteUrl = "https://prince-asodariya.vercel.app";

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      url: siteUrl,
      image: `${siteUrl}/image-Prince3.png`,
      jobTitle: "MERN Stack & Full-Stack Developer",
      description:
        "Prince Asodariya is a MERN Stack and Full-Stack Developer from Gujarat, India, specializing in React, Node.js, Express.js, MongoDB, Next.js, TypeScript, and scalable web applications.",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Gujarat",
        addressCountry: "India",
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        name: "Indus University",
      },
      "sameAs": [profile.github, profile.linkedin, profile.instagram].filter(
        Boolean
      ),
      "knowsAbout": [
        "MERN Stack",
        "Full-Stack Development",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "REST APIs",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Prince Asodariya Portfolio",
      description:
        "Prince Asodariya is a MERN Stack and Full-Stack Developer from Gujarat, India, specializing in React, Node.js, Express.js, MongoDB, Next.js, TypeScript, and scalable web applications.",
      author: {
        "@id": `${siteUrl}/#person`,
      },
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      "inLanguage": "en-US",
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={homepageJsonLd} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
