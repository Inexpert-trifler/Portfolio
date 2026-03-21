export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "BuildSprint",
    description:
      "A hackathon workflow platform that helps teams organize ideas, tasks, and pitches in one fast-moving workspace.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/Inexpert-trifler",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Campus Connect",
    description:
      "A student-first community app for sharing opportunities, project ideas, and collaboration updates across campus.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Inexpert-trifler",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Pitch Deck AI",
    description:
      "A simple tool for turning startup notes into clean pitch deck outlines with fast summaries and clear structure.",
    techStack: ["Next.js", "OpenAI API", "Tailwind CSS"],
    githubUrl: "https://github.com/Inexpert-trifler",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    title: "Dev Journal",
    description:
      "A minimal progress tracker for documenting daily learning, experiments, and build streaks.",
    techStack: ["TypeScript", "React", "Supabase"],
    githubUrl: "https://github.com/Inexpert-trifler",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    title: "Team Match",
    description:
      "A quick matchmaking app for hackathon participants to discover teammates by skills, interests, and availability.",
    techStack: ["Next.js", "Tailwind CSS", "Prisma"],
    githubUrl: "https://github.com/Inexpert-trifler",
    liveUrl: "https://example.com",
    featured: false,
  },
];
