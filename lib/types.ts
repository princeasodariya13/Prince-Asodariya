export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
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
