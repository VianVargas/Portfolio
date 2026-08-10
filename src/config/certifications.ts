import type { CertificationItem } from "@/types";

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-aws',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2024',
    credentialId: 'AWS-CLD-982341',
    badgeIcon: 'Cloud',
    skills: ['Cloud Infrastructure', 'IAM', 'EC2 & S3', 'Security'],
  },
  {
    id: 'cert-meta',
    title: 'Meta Front-End Developer',
    issuer: 'Coursera / Meta',
    year: '2023',
    credentialId: 'META-FE-774102',
    badgeIcon: 'Code2',
    skills: ['React', 'Advanced JavaScript', 'UI/UX Design', 'Version Control'],
  },
  {
    id: 'cert-java',
    title: 'Java Programming Masterclass',
    issuer: 'Udemy',
    year: '2023',
    credentialId: 'UC-JAVA-552190',
    badgeIcon: 'Coffee',
    skills: ['Java Core', 'OOP Patterns', 'Concurrency', 'Spring Fundamentals'],
  },
];
