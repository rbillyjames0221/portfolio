export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "psgc-api",
    contibutionDescription:
      "Public REST API & interactive dashboard for the Philippine Standard Geographic Code (42,000+ barangays, 1,493 municipalities).",
    repoOwner: "rbillyjames0221",
    link: "https://github.com/rbillyjames0221/psgc-api",
  },
  {
    repo: "schema-atlas",
    contibutionDescription:
      "Local-first visual database architecture studio with interactive ERD canvas, Dagre auto-layout, and Prisma/SQL sync.",
    repoOwner: "rbillyjames0221",
    link: "https://github.com/rbillyjames0221/schema-atlas",
  },
  {
    repo: "courtscribe-ai",
    contibutionDescription:
      "Mobile-first live transcription & digital stenography PWA tailored for Philippine court hearings with crash-safe IndexedDB audio.",
    repoOwner: "rbillyjames0221",
    link: "https://github.com/rbillyjames0221/courtscribe-ai",
  },
  {
    repo: "gov-rights-hub",
    contibutionDescription:
      "Public sector unionism and legal rights resource platform for 1.7M+ Philippine civil servants and government workers.",
    repoOwner: "rbillyjames0221",
    link: "https://github.com/rbillyjames0221/gov-rights-hub",
  },
  {
    repo: "ai-sdk-internal-knowledge-base",
    contibutionDescription:
      "Enterprise RAG knowledge base utilizing Vercel AI SDK 4 and Language Model Middleware for structured document guardrails.",
    repoOwner: "rbillyjames0221",
    link: "https://github.com/rbillyjames0221/ai-sdk-internal-knowledge-base",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
