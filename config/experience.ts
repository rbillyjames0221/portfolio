import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "civil-service-commission",
    position: "ICT Systems Developer - CoS",
    company: "Civil Service Commission",
    location: "Quezon City / Taguig, Philippines",
    startDate: new Date("2025-03-01"),
    endDate: "Present",
    description: [
      "Designed, developed, and maintained internal websites, administrative web applications, and AI chatbot systems to support institutional digital transformation.",
      "Engineered the prototype Legal Case Management System (OLA-CMS demo) for the Office of Legal Affairs to manage case lifecycles, hearing calendars, and timeline audit logs.",
      "Integrated self-hosted LLM endpoints and vector search pipelines to improve institutional knowledge discovery and document accessibility across departments.",
    ],
    achievements: [
      "Built and demonstrated the OLA-CMS Legal Case Management system prototype featuring 5-role RBAC, hearing calendar management, and comprehensive timeline audit logging.",
      "Implemented retrieval-grounded AI chatbot workflows to streamline internal inquiries and administrative operations.",
      "Maintained high uptime, data integrity, and security compliance across internal agency web portals and database systems.",
    ],
    skills: [
      "Next.js",
      "React",
      "Typescript",
      "Node.js",
      "PostgreSQL",
      "Python",
      "Tailwind CSS",
      "Drizzle ORM",
    ],
    companyUrl: "https://csc.gov.ph",
  },
  {
    id: "taguig-city-hall",
    position: "Digital Education Coordinator",
    company: "Taguig City Hall - Mayor's Office",
    location: "Taguig City, Philippines",
    startDate: new Date("2024-10-01"),
    endDate: new Date("2025-04-01"),
    description: [
      "Collaborated with IT and education teams to evaluate, align, and deploy digital education solutions across municipal programs.",
      "Coordinated technology initiatives and modern learning platforms for educators and student bodies across the city.",
      "Assisted in evaluating educational software tools, preparing implementation roadmaps, and providing technical orientation.",
    ],
    achievements: [
      "Successfully aligned municipal digital education programs with institutional IT workflows and infrastructure.",
      "Facilitated cross-agency coordination between city hall administrative divisions, school heads, and technical staff.",
      "Supported digital literacy programs and tech rollout logistics across Taguig educational facilities.",
    ],
    skills: ["Javascript", "Typescript", "HTML 5", "CSS 3", "MySQL"],
    companyUrl: "https://taguig.gov.ph",
  },
  {
    id: "rakso-ct",
    position: "Software Engineer Associate Intern",
    company: "Rakso CT",
    location: "Makati City, Philippines",
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-05-01"),
    description: [
      "Conducted day-to-day project coordination and feature implementation across cross-functional engineering teams.",
      "Collaborated on web application development, bug fixes, and system integration tasks.",
      "Participated in daily standups, code reviews, and testing quality assurance.",
    ],
    achievements: [
      "Coordinated sprint milestones and delivered tested web components on schedule.",
      "Identified and resolved front-end and back-end integration issues in development sprints.",
      "Gained hands-on experience in full-lifecycle software delivery and enterprise engineering standards.",
    ],
    skills: ["React", "Javascript", "HTML 5", "CSS 3", "Git", "Node.js"],
    companyUrl: "https://www.raksocct.com",
  },
];
