import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Billy James Ramos's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Technical competencies, programming languages, and tools.",
    metadata: {
      title: "Skills",
      description:
        "Billy James Ramos's technical skills and proficiencies in software engineering and AI.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful software applications and open-source systems.",
    metadata: {
      title: "Projects",
      description: "Billy James Ramos's projects in full-stack, AI, and systems development.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations or opportunities.",
    metadata: {
      title: "Contact",
      description: "Contact Billy James Ramos.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source projects, tools, and technical resources.",
    metadata: {
      title: "Contributions",
      description:
        "Billy James Ramos's open-source repositories and software contributions.",
    },
  },
  resume: {
    title: "Resume",
    description: "Billy James Ramos's professional resume.",
    metadata: {
      title: "Resume",
      description: "Billy James Ramos's resume and qualifications.",
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Articles and notes on full-stack development, database architecture, and applied AI.",
    metadata: {
      title: "Blogs",
      description:
        "Billy James Ramos's blog — thoughts on software development and AI engineering.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey, career timeline, and educational background.",
    metadata: {
      title: "Experience",
      description:
        "Billy James Ramos's professional experience and career milestones.",
    },
  },
};
