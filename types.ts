
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  description: string;
  link?: string;
  effortReduction?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  projects?: Project[];
  effortReduction?: string;
  link?: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  summary: string;
  date: string;
  readTime: string;
  content: string; 
  externalUrl?: string; 
}

export interface ProfileData {
  name: string;
  title: string;
  about: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  summaryPoints: string[];
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  articles: Article[];
}
