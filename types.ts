export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
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

export interface ProfileData {
  name: string;
  title: string;
  about: string;
  location: string;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
}
