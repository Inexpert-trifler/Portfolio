export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built with Next.js, featuring interactive UI, glowing effects, and smooth animations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Inexpert-trifler/Portfolio",
    live: "",
    featured: true,
  },
  {
    title: "FinSight AI",
    description:
      "An AI-powered project focused on financial insights and smart data analysis using modern JavaScript tools.",
    tech: ["JavaScript"],
    github: "https://github.com/Inexpert-trifler/FinSightAI",
    live: "",
    featured: true,
  },
  {
    title: "RIFT Project",
    description:
      "A hackathon-based project built with TypeScript, focused on solving real-world problems with scalable architecture.",
    tech: ["TypeScript"],
    github: "https://github.com/Inexpert-trifler/RIFT-Project",
    live: "",
    featured: true,
  },
  {
    title: "Netflix Clone",
    description:
      "A Netflix-inspired UI clone built using HTML and CSS, focusing on responsive design and modern layout techniques.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Inexpert-trifler/Netflix-clone",
    live: "",
    featured: true,
  },
  {
    title: "IBM Project",
    description:
      "A project developed as part of IBM initiative, showcasing core web development skills using structured UI.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Inexpert-trifler/IBM-Project",
    live: "",
    featured: false,
  },
  {
    title: "Inexpert Trifler",
    description:
      "A personal experimental repository exploring coding ideas, concepts, and development practices.",
    tech: ["JavaScript"],
    github: "https://github.com/Inexpert-trifler/Inexpert-trifler",
    live: "",
    featured: false,
  },
];
