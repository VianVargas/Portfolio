import type { CertificationItem } from "@/types";

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-ccna',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    year: 'Aug 2024',
    description: 'Proves that I successfully completed the Introduction to Networks course and achieved this student level credential. Gaining knowledge of networking including IP addressing, how physical, data link protocols support Ethernet, can configure connectivity between switches, routers and end devices to provide access to local and remote resources.',
    skills: ['IP Addressing', 'Ethernet', 'Routing', 'Switching'],
    link: 'https://www.credly.com/badges/7abd0b53-073b-4b51-9b99-ea325b19e10f/public_url',
  },
  {
    id: 'cert-python',
    title: 'IT Specialist - Python',
    issuer: 'Certiport',
    year: 'Jul 2024',
    description: 'This badge demonstrates that I can recognize, write, and debug Python code that will logically solve a problem.',
    skills: ['Python', 'Debugging', 'Problem Solving'],
    link: 'https://www.credly.com/badges/1ba97113-d882-46e0-a885-d277eea4918f/public_url',
  },
  {
    id: 'cert-pmi',
    title: 'PMI Project Management Ready',
    issuer: 'Project Management Institute',
    year: 'Mar 2025',
    description: 'This badge shows that I have an understanding of the concepts within the growing field of project management, and the tools to apply this knowledge to a wide range of opportunities. Assessed and validated in the core concepts of project management, business analysis and traditional and agile methodologies used across industries globally. This industry recognized certification is built from a global practice analysis of project professionals.',
    skills: ['Project Management', 'Agile', 'Business Analysis', 'Methodologies'],
    link: 'https://www.credly.com/badges/acf64924-d8f1-4616-b0f3-a02d630a6293/public_url',
  },
  {
    id: 'cert-vaadin',
    title: 'Certified Vaadin 24 Developer',
    issuer: 'Vaadin',
    year: 'Mar 2026',
    description: 'This certification proves that I have demonstrated adequate skills and knowledge of the Vaadin Framework and related tools for successful web application development. It validates my ability to build, design, and manage fully functional, multi-view enterprise web applications entirely in Java, encompassing UI layouts, forms and data binding, routing, and the efficient handling of large datasets.',
    skills: ['Vaadin', 'Java', 'UI Layouts', 'Data Binding', 'Routing'],
    link: 'https://vaadin.com/learn/certificate/2cc40770-9a4b-4989-b22b-bbaef4e50b81',
  },
];
