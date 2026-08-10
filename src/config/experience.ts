import type { ExperienceItem } from "@/types";

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-relx',
    role: 'Data Quality Check Specialist Intern',
    company: 'RELX Reed Elsevier',
    period: 'Apr 2026 – Jul 2026',
    location: 'Remote / On-site',
    status: 'PAST',
    commitHash: 'b7d4c32',
    bullets: [
      'Conducted detailed quantitative analysis and scoring of AI responses using Microsoft Excel to ensure high standards of accuracy and consistency.',
      'Earned the Quality Excellence Award for achieving the highest quality output score among all interns during the internship cohort.',
    ],
    tech: ['Excel', 'Data Analysis', 'Quality Assurance', 'Python'],
  },
  {
    id: 'exp-fireclay',
    role: 'Software Developer Intern',
    company: 'Fireclay Corporation',
    period: 'Dec 2025 – Apr 2026',
    location: 'On-site',
    status: 'PAST',
    commitHash: 'd8e2a91',
    bullets: [
      'Completed a four-month internship at Fireclay Corporation, handling bug fixes and small-scale feature updates across two projects.',
    ],
    tech: ['Java', 'Vaadin', 'Spring Boot', 'MongoDB', 'Git', 'Linux'],
  },
];
