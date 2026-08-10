export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[]; // Legacy flat features
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
  purpose?: string;
  workflow?: string[];
  impact?: string;
  
  // NEW: Bento-box & Deep Dive Architecture
  architecture?: { title: string; description: string }[];
  deepDive?: {
    title: string;
    architecture: string;
    methodology: string;
    dataset: string;
    pipeline: string[];
    metrics: { label: string; value: string }[];
  };
  challenges?: { problem: string; solution: string }[];
  coreFeatures?: { title: string; description: string }[];
  results?: {
    headline: string;
    description: string;
    metrics: string[];
  };
  learnings?: {
    learned: string;
    tradeoffs: string;
    future: string;
  };
  techCategories?: {
    frontend?: string[];
    backend?: string[];
    ml?: string[];
    tools?: string[];
  };
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string | "Present";
  location?: string;
  responsibilities: string[];
  isPlaceholder?: boolean;
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  details?: string;
  isPlaceholder?: boolean;
}
