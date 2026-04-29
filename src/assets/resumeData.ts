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

export const resumeData: ResumeData = {
  name: "Shaun Gonsalves",
  headline:
    "Open to full-time senior software engineer roles with a focus on backend and infrastructure. Based in Toronto; open to relocation within Canada. Authorized to work in Canada; no employer sponsorship required.",
  contact: {
    email: "shaun.gonsalves288@gmail.com",
    linkedin: "https://www.linkedin.com/in/shaungonsalves/",
  },
  location: {
    city: "Toronto ON",
    relocation: "Open to relocation",
  },
  skills: {
    core: ["Java", "JUnit", "Python", "Pytest", "Typescript"],
    db: ["SQL", "Postgres", "MongoDB", "DynamoDB"],
    aws: ["EC2", "S3", "IAM", "RDS", "DynamoDB", "EMR", "VPC", "Glue", "Lambda", "Redshift", "API Gateway", "SWF", "StepFunction", "CDK"],
    tools: ["Docker", "Kubernetes", "JIRA", "Mulesoft", "IICS"]
  },
  academics: [
    {
      institution: "Rochester Institute of Technology",
      location: "Rochester NY, United States",
      degree: "Master of Science (MS) in Computer Science",
      details: "Data Structures and Algorithms, Distributed Systems, Cloud Computing, Database Management, Big Data Analytics",
      date: "Aug 2019 - May 2022"
    },
    {
      institution: "University of Mumbai",
      location: "Mumbai, India",
      degree: "Bachelor of Electrical Engineering (BS)",
      details: "Operating Systems, Computer Networks, Microprocessor",
      date: "Jul 2012 - May 2016"
    }
  ],
  certification: [
    {
      institution: "Rochester Institute of Technology",
      location: "Rochester NY, United States",
      certificate: "Advanced Graduate Certificate in Big Data Analytics",
      details: "Big Data Analytics, Database Management",
      date: "May 2022"
    },
  ],
  experience: [
    {
      company: "Intuit Inc.",
      title: "Software Engineer 2",
      dates: "Oct 2024 - Present",
      tech: "Java 21, Kotlin, Springboot, Typescript, React",
      bullets: [
        {
          text: "Co-developed a Textract-based widget in TurboTax to ingest, parse, transform, and persist external documents via an event-driven pipeline allowing users to prefill all tax content; improved prefill rate from 91% to 97% for top 5 forms.",
          emphasis: ["improved prefill rate from 91% to 97%"]
        },
        {
          text: "Co-developed saved credentials pre import and payroll partner API integration to auto-retrieve tax forms and enable a done-for-you experience; adopted by 17% of eligible users and 9% of returning users.",
          emphasis: ["adopted by 17%", "and 9% of returning users"]
        },
        {
          text: "Solely built a Terraform-style framework in 1 week to automate Splunk alert provisioning using Flask, Pyandatic, and PyTest; enabled build/change/version workflows, faster rollouts, and an improved approval process for alert changes.",
          emphasis: ["Terraform", "in 1 week", "Splunk"]
        }
      ]
    },
    {
      company: "Amazon Inc.",
      title: "Software Dev Engineer",
      dates: "May 2022 - Oct 2024",
      tech: "Java 21, Springboot, JUnit5, Typescript, AWS CDK",
      bullets: [
        {
          text: "Service owner for a tier-1 application, enabling 40% faster onboarding, cutting user interventions, impacting $14 million in revenue for Amazon.",
          emphasis: ["40% faster onboarding", "impacting $14 million in revenue"],
        },
        {
          text: "Contributed to improving a deployment process using data pipelines, saving 4 SDE hours and 6 Analyst hours per deployment. Developed infrastructure using CDK to ensure connectivity with legacy systems.",
          emphasis: ["saving 4 SDE hours and 6 Analyst hours per deployment"],
        },
        {
          text: "Executed a feature from design to implementation to support promoting Amazon devices to 20 million users.",
          emphasis: ["20 million users"]
        },
        {
          text: "Implemented a proposal for making a tier-1 service resilient to outages that previously caused $200 million impact.",
          emphasis: ["$200 million impact"]
        },
        "Self-learner: Acclimatized myself with the service, tooling, and made design and code contributions within 30 days."
      ]
    },
    {
      company: "Mutual of Omaha",
      title: "Cloud Engineer Co-op",
      dates: "Jan 2021 - Dec 2021",
      tech: "Python3, Pytest, Typescript, Jenkins, AWS CDK",
      bullets: [
        "Developed internal AWS CDK Constructs, enabling hardened & organization specific configurations for internal customers - making cloud infrastructure secure, consistent by default.",
        "Automated organization wide monitoring using AWS Config along with testing infrastructure.",
        "Formalized the new associate onboarding process, enabling colleagues to be productive in 90 days.",
        "Mentored an intern as a peer. Improved their understanding of the significance of their contributions by highlighting their achievements to the broader team.",
        "Partnered with product team as an SME for platform requirements, improving adoption of cloud resources and saving on dev time and infrastructure costs.",
        'Recognized as "Stellar" for performance and outcomes.'
      ]
    },
    {
      company: "Tata Consultancy Services",
      title: "Software Engineer",
      dates: "Jan 2017 - Aug 2019",
      tech: "Java 8, Springboot, JUnit, IIB, Apigee, AWS, Azure",
      bullets: [
        "Demonstrated a microservices based presales use-case for an enterprise using two IPaaS tools.",
        "Developed a cloud native web application to view data at-a-glance sourced from Hadoop for a logistics company.",
        "Developed a microservices system for securely exposing enterprise functionality for a digital banking app using RESTful APIs, impacting 20 million customers.",
        "Consistently achieved highest performance rating of 5/5."
      ]
    }
  ]
};