import type { ReactNode } from 'react';

export type ThemeMode = 'dark' | 'light';

export type WorkspaceTab = 'about' | 'experience' | 'tech' | 'projects' | 'certs' | 'contact';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  status: 'PRESENT' | 'PAST';
  commitHash: string;
  bullets: string[];
  tech: string[];
}

export interface TechSkill {
  name: string;
}

export interface TechStackGroup {
  category: string;
  iconName: string;
  skills: TechSkill[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  type: string;
  tags: string[];
  features: string[];
  githubUrl?: string;
  image?: string;
  liveDemoType?: 'pos' | 'trello' | 'dotfiles';
  metrics?: { label: string; value: string }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  skills: string[];
  link?: string;
}

export interface SystemStats {
  cpuUsage: number;
  ramUsage: number;
  latencyMs: number;
  uptime: string;
  kernel: string;
  osName: string;
}

export interface FloatingWindow {
  id: WorkspaceTab | 'resume';
  title: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized?: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  handle: string;
  hostname: string;
  role: string;
  education: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string;
}

export type { ReactNode };
