import type { ExperienceItem } from "@/types";

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Software Engineering Intern',
    company: 'Company Name',
    period: '2024 – PRESENT',
    location: 'Remote / On-site',
    status: 'PRESENT',
    commitHash: 'a4f8e91',
    bullets: [
      'Resolved production bugs across the frontend codebase, improving overall application stability and user satisfaction.',
      'Implemented new end-user features in close collaboration with senior engineers and technical mentors.',
      'Contributed actively to code reviews, architectural planning, and technical design discussions as an individual contributor.',
    ],
    tech: ['TypeScript', 'React', 'Java', 'Spring Boot'],
  },
  {
    id: 'exp-2',
    role: 'Junior Developer',
    company: 'Previous Company',
    period: '2023 – 2024',
    location: 'On-site',
    status: 'PAST',
    commitHash: '7c3d20f',
    bullets: [
      'Developed and maintained internal engineering tools used by the company development teams.',
      'Assisted in migrating legacy monolith modules into modern full-stack web frameworks.',
      'Optimized database queries and backend route handling for data-intensive administrative dashboards.',
    ],
    tech: ['Java', 'Vaadin', 'PostgreSQL'],
  },
];
