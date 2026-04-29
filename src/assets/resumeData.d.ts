export interface Contact {
  email: string;
  linkedin: string;
}

export interface LocationInfo {
  city: string;
  relocation: string;
}

export interface Skills {
  core: string[];
  db: string[];
  aws: string[];
  tools: string[];
}

export interface Academic {
  institution: string;
  location: string;
  degree: string;
  details?: string;
  date: string;
}

export interface Certification {
  institution: string;
  location: string;
  certificate: string;
  details?: string;
  date: string;
}

export interface Experience {
  company: string;
  title: string;
  dates: string;
  tech: string;
  bullets: (string | { text: string; emphasis?: string[] })[];
}

export interface ResumeData {
  name: string;
  headline: string;
  contact: Contact;
  location: LocationInfo;
  skills: Skills;
  academics: Academic[];
  certification: Certification[];
  experience: Experience[];
}

export const resumeData: ResumeData;
