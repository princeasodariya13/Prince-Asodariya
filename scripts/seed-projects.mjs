/**
 * seed-projects.mjs
 * Run with: node scripts/seed-projects.mjs
 * Seeds all portfolio projects into MongoDB
 */

import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env.local
dotenv.config({ path: join(__dirname, "../.env.local") });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("❌ MONGODB_URI not set in .env.local");
  process.exit(1);
}

const projects = [
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
    featured: true,
    order: 1,
    createdAt: new Date(),
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
    featured: true,
    order: 2,
    createdAt: new Date(),
  },
  {
    id: "setu-architect",
    title: "Setu Architects",
    description:
      "A professional business website for Setu Architecture — a structural engineering firm established in 1988. Showcases their portfolio of residential, commercial, industrial & public infrastructure projects with MEPF design capabilities.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    features: [
      "Full company portfolio with project showcase gallery",
      "Structural & civil engineering services presentation",
      "Client portfolio across residential, commercial & industrial segments",
      "Contact form & inquiry system for new projects",
    ],
    githubUrl: "https://github.com/princeasodariya13",
    liveUrl: "https://setu-architect.vercel.app/",
    featured: false,
    order: 3,
    createdAt: new Date(),
  },
  {
    id: "thumblify",
    title: "Thumblify — AI Thumbnail Generator",
    description:
      "An AI-powered web tool that generates professional, eye-catching YouTube thumbnails from text prompts in seconds. Saves content creators hours of design work with smart style presets and one-click downloads.",
    techStack: ["React", "Vite", "TypeScript", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    features: [
      "Text-to-image AI thumbnail generation in seconds",
      "Multiple style & template presets for YouTube content",
      "Cloudinary-powered storage & CDN delivery",
      "One-click download in high-resolution formats",
    ],
    githubUrl: "https://github.com/princeasodariya13",
    liveUrl: "https://thumblify-7nxy.vercel.app/",
    featured: false,
    order: 4,
    createdAt: new Date(),
  },
  {
    id: "transit-ops",
    title: "Transit OPS — Smart Transport",
    description:
      "A full-stack fleet and transport operations management platform (FleetFlow) for enterprise teams. Features role-based access control, vehicle tracking, driver management, trip logs, fuel records, maintenance scheduling, and analytics with PDF export.",
    techStack: ["React", "Vite", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Role-based access: Administrator & Fleet Manager",
      "Vehicle inventory, driver profiles & trip management",
      "Fuel consumption logs & maintenance scheduling",
      "Analytics dashboard with PDF export for reports",
    ],
    githubUrl: "https://github.com/princeasodariya13",
    liveUrl: "https://transit-ops-smart-transport.vercel.app/",
    featured: false,
    order: 5,
    createdAt: new Date(),
  },
  {
    id: "healthcare-hub",
    title: "Healthcare Hub",
    description:
      "A comprehensive hospital management system built on the MERN stack for managing end-to-end hospital operations — patient records, OPD scheduling, doctor management, billing, and pharmacy inventory with secure role-based access.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST API", "Tailwind CSS"],
    features: [
      "Role-based access for Admins, Doctors & Patients",
      "OPD appointment scheduling & patient record management",
      "Integrated billing system with invoice generation",
      "Pharmacy inventory tracking & prescription management",
    ],
    githubUrl: "https://github.com/princeasodariya13",
    liveUrl: null,
    featured: false,
    order: 6,
    createdAt: new Date(),
  },
];

async function seed() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(process.env.MONGODB_DB || "portfolio");
    const collection = db.collection("projects");

    // Drop existing projects and re-seed
    await collection.deleteMany({});
    console.log("🗑️  Cleared existing projects");

    const result = await collection.insertMany(projects);
    console.log(`✅ Seeded ${result.insertedCount} projects into MongoDB`);

    // Create index on id for fast lookups
    await collection.createIndex({ id: 1 }, { unique: true });
    console.log("📑 Created unique index on id");

    console.log("\n🎉 Seed complete! Projects stored in MongoDB:");
    projects.forEach((p) => console.log(`   • ${p.title} (${p.id})`));
  } catch (err) {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seed();
