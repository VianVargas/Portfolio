import type { TechStackGroup } from "@/types";

export const TECH_STACK: TechStackGroup[] = [
  {
    category: 'Frontend',
    iconName: 'Layout',
    skills: [
      { name: 'TypeScript', level: 92, experienceYears: '2+ yrs', highlight: true },
      { name: 'React', level: 90, experienceYears: '2+ yrs', highlight: true },
      { name: 'Next.js', level: 85, experienceYears: '1+ yrs' },
      { name: 'Zustand', level: 88, experienceYears: '1+ yrs' },
      { name: 'Tailwind CSS', level: 94, experienceYears: '2+ yrs', highlight: true },
    ],
  },
  {
    category: 'Backend & Frameworks',
    iconName: 'Server',
    skills: [
      { name: 'Java', level: 88, experienceYears: '2+ yrs', highlight: true },
      { name: 'Spring Boot', level: 86, experienceYears: '2+ yrs', highlight: true },
      { name: 'Vaadin', level: 80, experienceYears: '1 yr' },
      { name: 'Node.js / Express', level: 84, experienceYears: '2 yrs' },
    ],
  },
  {
    category: 'Databases & Tools',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 88, experienceYears: '2+ yrs', highlight: true },
      { name: 'MongoDB', level: 82, experienceYears: '1+ yrs' },
      { name: 'AWS Cloud', level: 78, experienceYears: '1 yr' },
      { name: 'Linux / Docker', level: 90, experienceYears: '2+ yrs', highlight: true },
    ],
  },
];
