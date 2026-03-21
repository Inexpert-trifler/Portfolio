export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "C", "C++", "Python"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "Supabase"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Figma", "Postman", "VS Code"],
  },
];
