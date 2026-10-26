import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "psgc-api",
    companyName: "PSGC API & Interactive Dashboard",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "Frontend"],
    shortDescription:
      "Next.js dashboard and public REST API for the Philippine Standard Geographic Code (PSA PSGC) covering 42,010 barangays, 1,493 municipalities, 149 cities, 82 provinces, and 18 regions with staged quarterly updates.",
    websiteLink: "https://psgc.billyjamesramos.com/",
    githubLink: "https://github.com/rbillyjames0221/psgc-api",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS", "REST API"],
    startDate: new Date("2026-08-01"),
    endDate: new Date("2026-10-26"),
    companyLogoImg: "/favicon.ico",
    pagesInfoArr: [
      {
        title: "Interactive Geography Explorer",
        description:
          "Search and drill down from Regions to Provinces, Cities/Municipalities, and Barangays with official 10-digit PSGC codes.",
        imgArr: ["/favicon.ico"],
      },
      {
        title: "Quarterly Data Staging Pipeline",
        description:
          "Verified against Philippine Statistics Authority (PSA) quarterly releases with automated verification checks against national summaries.",
        imgArr: ["/favicon.ico"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "PSGC API is a comprehensive Next.js dashboard and public REST API built around the official Philippine Standard Geographic Code published by the Philippine Statistics Authority (PSA).",
        "It indexes every administrative level in the Philippines: 18 Regions, 82 Provinces, 149 Cities (33 HUC, 5 ICC, 111 CC), 1,493 Municipalities, 14 Sub-municipalities (Manila), and 42,010 Barangays, verified against PSA quarterly update releases.",
        "The platform provides both a clean, visual explorer for researchers and developers, and a high-performance REST API with interactive documentation, parameter filters, and multi-language client snippets (JavaScript, Python, cURL).",
      ],
      bullets: [
        "Parsed and structured 42,010 barangays and 1,700+ local government units from official PSA workbooks.",
        "Implemented hierarchical geographic search and filtering across regions, provinces, and municipalities.",
        "Engineered staged, human-approved quarterly data updates verified against PSA reference workbooks.",
        "Provided interactive documentation (/docs) with ready-to-run JavaScript, Python, and cURL snippets.",
      ],
    },
  },
  {
    id: "schema-atlas",
    companyName: "Schema Atlas - Database Architecture Studio",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "Local-first database architecture studio and interactive ERD canvas for visual schema design, inspection, Prisma import/export, and PostgreSQL SQL generation.",
    websiteLink: "https://schemaatlas.billyjamesramos.com",
    githubLink: "https://github.com/rbillyjames0221/schema-atlas",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    startDate: new Date("2026-07-01"),
    endDate: new Date("2026-10-26"),
    companyLogoImg: "/favicon.ico",
    pagesInfoArr: [
      {
        title: "Visual Entity-Relationship Canvas",
        description:
          "Interactive pan, zoom, minimap, grid snap, and Dagre automatic hierarchical layout for complex database architectures.",
        imgArr: ["/favicon.ico"],
      },
      {
        title: "Bi-Directional Schema Synchronization",
        description:
          "Import and export Prisma schema (.prisma), PostgreSQL CREATE TABLE SQL, and portable workspace JSON.",
        imgArr: ["/favicon.ico"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Schema Atlas is a responsive, local-first Next.js App Router application built for developers and database architects to design, inspect, and export database schemas visually.",
        "It provides an interactive node canvas supporting model creation, field editing, data types, nullability, primary and foreign keys, model directives, and automatic relationship handle routing.",
        "Designed for privacy and speed, all modifications run local-first in the browser, with seamless bi-directional synchronization between Prisma schema definitions, PostgreSQL SQL statements, and portable JSON workspaces.",
      ],
      bullets: [
        "Engineered an infinite canvas with pan, zoom, minimap, grid snapping, and Dagre automated hierarchical graph layout.",
        "Built bi-directional parsers for Prisma schema (schema.prisma) and PostgreSQL CREATE TABLE DDL.",
        "Implemented visual foreign key linking via drag-and-drop relationship handles with referential action configuration.",
        "Created zero-dependency workspace export/import preserving visual layout positions and model attributes.",
      ],
    },
  },
  {
    id: "courtscribe-ai",
    companyName: "CourtScribe AI",
    type: "Personal",
    category: ["Mobile Dev", "Applied AI", "Web Dev", "UI/UX"],
    shortDescription:
      "Mobile-first live transcription and digital stenography PWA tailored for Philippine court hearings, legal proceedings, and interviews with 5-second crash checkpoints and RA 10173 compliance.",
    githubLink: "https://github.com/rbillyjames0221/courtscribe-ai",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Web Speech API",
      "PWA",
    ],
    startDate: new Date("2026-06-01"),
    endDate: new Date("2026-10-20"),
    companyLogoImg: "/favicon.ico",
    pagesInfoArr: [
      {
        title: "Live Court Hearing Transcription",
        description:
          "Bilingual English and Filipino live speech-to-text with participant role tagging (Judge, Stenographer, Counsel, Witness, Clerk).",
        imgArr: ["/favicon.ico"],
      },
      {
        title: "Resilient Crash Recovery & Audio Storage",
        description:
          "IndexedDB chunked audio pipeline with 5-second checkpoints ensuring zero lost testimony even during browser interruptions.",
        imgArr: ["/favicon.ico"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "CourtScribe AI is a mobile-first Progressive Web Application (PWA) designed to assist Philippine court stenographers, legal clerks, and attorneys in recording and transcribing legal hearings.",
        "It addresses the specific realities of Philippine courtrooms: multi-lingual speech switching between English (en-PH), Filipino (fil-PH), and courtroom terminology, role tagging for judicial participants, and strict data privacy compliance under RA 10173.",
        "The audio engine runs outside React to record continuously while users navigate or edit, saving timestamped, sequence-numbered chunks to IndexedDB every 5 seconds to guarantee resilient crash recovery.",
      ],
      bullets: [
        "Architected a decoupled audio ingestion engine in IndexedDB saving timestamped audio chunks every 5 seconds.",
        "Supported bilingual speech recognition (English en-PH and Filipino fil-PH) with real-time speaker assignment.",
        "Developed an interactive steno review workspace with waveform navigation, passage playback, and inline corrections.",
        "Integrated judicial safeguards including mandatory authorization confirmation and compliance with Republic Act 10173.",
      ],
    },
  },
  {
    id: "case-management-hub",
    companyName: "Legal Case Management Hub (CSC OLA-CMS Demo)",
    type: "Professional",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Enterprise Legal Case Management System prototype developed for the Civil Service Commission (CSC) Office of Legal Affairs featuring 5-role RBAC, hearing calendars, and timeline audit logs.",
    githubLink: "https://github.com/rbillyjames0221/Case-Management-Hub",
    techStack: [
      "React",
      "Typescript",
      "express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Clerk Auth",
      "Tailwind CSS",
    ],
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-05-15"),
    companyLogoImg: "/favicon.ico",
    pagesInfoArr: [
      {
        title: "Administrative Case Tracking",
        description:
          "Complete lifecycle tracking from filing to investigation, hearing scheduling, resolution, and archival.",
        imgArr: ["/favicon.ico"],
      },
      {
        title: "Role-Based Access Control & Auditing",
        description:
          "Multi-tier RBAC for Super Admin, Legal Admin, Assigned Lawyers, Staff, and Citizens with automated audit trails.",
        imgArr: ["/favicon.ico"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Legal Case Management Hub (OLA-CMS) was engineered as a comprehensive demonstration system for the Civil Service Commission (CSC) Office of Legal Affairs to modernize administrative case processing.",
        "Built as a modular pnpm workspace monorepo with Express 5 and PostgreSQL (Drizzle ORM), the system models the full judicial lifecycle of civil service cases: Filed -> Under Review -> Investigation -> Hearing Scheduled -> Resolved -> Archived.",
        "The platform incorporates Clerk authentication with 5 distinct RBAC roles, encrypted file uploads for court documents, automated timeline audit logging, virtual hearing scheduling, and citizen communication channels.",
      ],
      bullets: [
        "Engineered full-stack monorepo with React Vite frontend, Express 5 API server, and Drizzle ORM PostgreSQL database.",
        "Implemented 5-tier Role-Based Access Control (Super Admin, Legal Admin, Lawyer, Staff, Complainant).",
        "Built automated timeline logging and global audit trail recording every case action, status transition, and note.",
        "Designed hearing scheduling workflows with virtual meeting links and automated participant notifications.",
      ],
    },
  },
  {
    id: "gov-rights-hub",
    companyName: "GovRights Hub - Public Sector Unionism",
    type: "Personal",
    category: ["Frontend", "Web Dev", "UI/UX"],
    shortDescription:
      "Public Sector Unionism and legal rights directory platform empowering 1.7M+ Philippine government employees and civil servants with policies, laws, and collective negotiation agreements.",
    githubLink: "https://github.com/rbillyjames0221/gov-rights-hub",
    techStack: ["React", "Typescript", "Tailwind CSS", "Supabase"],
    startDate: new Date("2026-01-15"),
    endDate: new Date("2026-03-25"),
    companyLogoImg: "/favicon.ico",
    pagesInfoArr: [
      {
        title: "Public Sector Unionism Resources",
        description:
          "Interactive exploration of civil servant rights, accredited unions, labor organizations, and dispute negotiation guidelines.",
        imgArr: ["/favicon.ico"],
      },
      {
        title: "Legal & Policy Library",
        description:
          "Searchable directory of Philippine civil service laws, executive orders, and collective negotiation agreements (CNA).",
        imgArr: ["/favicon.ico"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "GovRights Hub is an educational and legal rights resource platform built to empower over 1.7 million civil servants and public sector workers in the Philippines.",
        "The platform provides accessible, plain-language guides to public sector unionism, employee rights under Philippine civil service law, collective negotiation agreements (CNA), and accredited labor organizations.",
        "Built with React, Vite, and Tailwind CSS, it offers structured legal directories, dispute resolution guides, FAQs, and contact directories for civil servants across national agencies and local government units.",
      ],
      bullets: [
        "Created an accessible web platform synthesizing complex Philippine civil service labor regulations and CNA rights.",
        "Developed interactive directories of accredited public sector unions and labor federations.",
        "Structured searchable legal reference guides covering executive orders, CSC resolutions, and labor standards.",
        "Designed a responsive, high-contrast user interface prioritizing readability and mobile accessibility.",
      ],
    },
  },
  {
    id: "ai-sdk-internal-knowledge-base",
    companyName: "AI SDK Internal Knowledge Base",
    type: "Personal",
    category: ["Applied AI", "Full Stack", "Backend"],
    shortDescription:
      "Enterprise Retrieval-Augmented Generation (RAG) knowledge base utilizing Vercel AI SDK 4 and Language Model Middleware for structured document ingestion, vector retrieval, and output guardrails.",
    githubLink:
      "https://github.com/rbillyjames0221/ai-sdk-internal-knowledge-base",
    techStack: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Drizzle ORM",
      "Python",
      "Tailwind CSS",
    ],
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-02-28"),
    companyLogoImg: "/favicon.ico",
    pagesInfoArr: [
      {
        title: "RAG Pipeline & Middleware Guardrails",
        description:
          "Language Model Middleware enforcing factual grounding, prompt security, and content safety across LLM responses.",
        imgArr: ["/favicon.ico"],
      },
      {
        title: "Document Ingestion & Semantic Search",
        description:
          "Automated PDF parsing and chunking with LangChain text splitters and high-dimensional vector embeddings in PostgreSQL.",
        imgArr: ["/favicon.ico"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The AI SDK Internal Knowledge Base is a production-grade enterprise RAG application demonstrating advanced usage of Vercel AI SDK and Language Model Middleware for secure institutional knowledge retrieval.",
        "It enables internal teams to upload and index complex technical documents, policies, and PDF manuals, automatically generating semantic chunks and embeddings stored in PostgreSQL with pgvector.",
        "By implementing custom Language Model Middleware, the system enforces strict response guardrails, validates hallucination boundaries, and provides verifiable source document citations alongside streaming chat answers.",
      ],
      bullets: [
        "Architected an end-to-end RAG system with Vercel AI SDK, Next.js 15, and PostgreSQL (Drizzle ORM).",
        "Integrated LangChain text splitters for semantic document chunking and multi-page PDF ingestion.",
        "Implemented Language Model Middleware to enforce safety guardrails and source verification.",
        "Built a streaming chat interface with source citations, markdown formatting, and session persistence.",
      ],
    },
  },
  {
    id: "comlab-inventory-system",
    companyName: "ComLab Inventory System",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Automated computer laboratory inventory management system with real-time Windows USB peripheral detection, multi-lab asset tracking, and user session monitoring.",
    githubLink: "https://github.com/rbillyjames0221/ComLabInventorySystem",
    techStack: [
      "Python",
      "Flask",
      "SQLite",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2026-01-25"),
    companyLogoImg: "/favicon.ico",
    pagesInfoArr: [
      {
        title: "Automated Hardware Detection",
        description:
          "Real-time Windows API peripheral detection for connected USB mice, keyboards, monitors, and webcams.",
        imgArr: ["/favicon.ico"],
      },
      {
        title: "Multi-Lab Asset Dashboard",
        description:
          "Centralized administrator dashboard for tracking PC health, hardware anomalies, and student laboratory sessions.",
        imgArr: ["/favicon.ico"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "ComLab Inventory System is a Flask-based web application engineered for educational institutions to eliminate manual hardware inventory audits in computer laboratories.",
        "It features a lightweight client service running on laboratory Windows PCs that automatically detects connected USB peripherals (mice, keyboards, monitors, webcams) via native Windows APIs and reports status changes to a central server.",
        "The system provides multi-role management (Admins, Faculty, Students), hardware tampering alerts, automated anomaly detection, rate-limited authentication, and an optional startup lock daemon.",
      ],
      bullets: [
        "Developed automated peripheral detection scripts communicating hardware changes over secure REST endpoints.",
        "Engineered multi-lab dashboard with real-time PC status indicators, audit logs, and anomaly detection.",
        "Implemented comprehensive security hardening with CSRF protection, rate limiting, and session tracking.",
        "Built an optional Windows startup lock screen restricting workstation access to verified students.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
