import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "Build high-performance full-stack web applications with App Router, server actions, and SSR.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "TypeScript",
    description:
      "Develop type-safe, maintainable, and scalable enterprise applications with strict static typing.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "React",
    description:
      "Craft reactive and intuitive user interfaces using modern hooks, state management, and reusable components.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Python",
    description:
      "Implement backend services, AI data pipelines, RAG ingestion scripts, and Flask applications.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "Retrieval-Augmented Generation (RAG)",
    description:
      "Build production RAG pipelines, semantic document chunking, embeddings, and context-grounded AI chat systems.",
    rating: 5,
    icon: Icons.sparkles,
  },
  {
    name: "Node.js",
    description:
      "Engineer fast and scalable server-side APIs, microservices, and asynchronous event-driven backends.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "PostgreSQL",
    description:
      "Design relational schemas, optimize complex queries, and manage transactional integrity with Drizzle and Prisma.",
    rating: 5,
    icon: Icons.postgresql,
  },
  {
    name: "Tailwind CSS",
    description:
      "Design clean, responsive, and accessible user interfaces quickly with utility-first modern CSS.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Prisma ORM",
    description:
      "Model application databases with intuitive schema definition, type-safe queries, and migrations.",
    rating: 5,
    icon: Icons.prisma,
  },
  {
    name: "Git & GitHub / GitLab",
    description:
      "Manage version control, code reviews, branch workflows, and multi-team collaboration across GitHub and GitLab.",
    rating: 5,
    icon: Icons.gitHub,
  },
  {
    name: "Flask",
    description:
      "Develop lightweight, modular REST APIs, automation services, and device management backends in Python.",
    rating: 4,
    icon: Icons.flask,
  },
  {
    name: "MySQL & SQL Server",
    description:
      "Manage relational databases, structured queries, stored procedures, and phpMyAdmin configurations.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "PHP & Laravel",
    description:
      "Build MVC web applications, manage administrative backend tools, and integrate relational systems.",
    rating: 4,
    icon: Icons.laravel,
  },
  {
    name: "Vue.js",
    description:
      "Create lightweight reactive client-side interfaces and modular front-end components.",
    rating: 4,
    icon: Icons.vuejs,
  },
  {
    name: "C++",
    description:
      "Understand core memory management, data structures, algorithms, and low-level system computing.",
    rating: 4,
    icon: Icons.cplusplus,
  },
  {
    name: "Qdrant Vector Database",
    description:
      "Store, index, and query high-dimensional embeddings for fast semantic search and similarity retrieval.",
    rating: 4,
    icon: Icons.database,
  },
  {
    name: "NGINX & Cloudflare",
    description:
      "Configure reverse proxies, SSL/TLS, edge caching, and DNS routing for production web systems.",
    rating: 4,
    icon: Icons.nginx,
  },
  {
    name: "Ubuntu / WSL & Linux",
    description:
      "Deploy and manage services in Linux environments, bash scripting, and developer toolchains.",
    rating: 4,
    icon: Icons.ubuntu,
  },
  {
    name: "Postman & API Design",
    description:
      "Architect RESTful APIs, test endpoints, automate request workflows, and document API contracts.",
    rating: 4,
    icon: Icons.postman,
  },
  {
    name: "CMS (Wordpress, Joomla)",
    description:
      "Customize, configure, and maintain enterprise CMS portals, plugins, and content architecture.",
    rating: 4,
    icon: Icons.wordpress,
  },
  {
    name: "Automation (n8n)",
    description:
      "Design event-driven workflows, webhook automations, and third-party system integrations.",
    rating: 3,
    icon: Icons.n8n,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
