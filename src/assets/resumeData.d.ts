   declare module '../../assets/resumeData' {
     export interface Contact {
       email: string;
       linkedin: string;
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

     export interface ResumeData {
       contact: Contact;
       skills: Skills;
       academics: Academic[];
       certification: Certification[];
     }

     export const resumeData: ResumeData;
   }