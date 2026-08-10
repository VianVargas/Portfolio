import type { TechStackGroup } from "@/types";

export const TECH_STACK: TechStackGroup[] = [
  {
    category: "Languages",
    iconName: "Braces",
    skills: [
      { name: "Java" },
      { name: "C++" },
      { name: "Python" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "PHP" },
    ],
  },
  {
    category: "Database",
    iconName: "Database",
    skills: [{ name: "MySQL" }, { name: "MongoDB" }],
  },
  {
    category: "Frameworks",
    iconName: "Layout",
    skills: [
      { name: "Vaadin Flow" },
      { name: "React" },
      { name: "Spring Boot" },
      { name: "Tailwind" },
      { name: "NextJS" },
    ],
  },
  {
    category: "Dev Tools",
    iconName: "Wrench",
    skills: [
      { name: "Git" },
      { name: "Github" },
      { name: "Bitbucket" },
      { name: "VS Code" },
      { name: "Opencode" },
      { name: "Gemini" },
      { name: "MS Office" },
    ],
  },
];
