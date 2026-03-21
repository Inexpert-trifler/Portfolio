export const sectionIds = ["home", "about", "projects", "skills", "achievements", "contact"] as const;

export type SectionId = (typeof sectionIds)[number];

export const navItems = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Achievements", href: "#achievements", sectionId: "achievements" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
] as const satisfies ReadonlyArray<{
  label: string;
  href: string;
  sectionId: SectionId;
}>;

export const trustItems = ["Google Ambassador", "SIH Selected", "Hackathon Builder"];

export const vibeContent = {
  title: "Builder • Curious • Consistent",
  description: "Hackathon-driven, late-night builder with a startup mindset",
};

export const contactLinks = [
  {
    label: "Email",
    value: "saranshh.yadav@gmail.com",
    href: "mailto:saranshh.yadav@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Inexpert-trifler",
    href: "https://github.com/Inexpert-trifler",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/saransh-yadav-b72643336",
    href: "https://www.linkedin.com/in/saransh-yadav-b72643336/",
  },
];
