import type { ProjectItem } from "@/types";

export const PROJECTS: ProjectItem[] = [
  {
    id: 'pos-system',
    title: 'Full-Scale POS System',
    shortDesc: 'Comprehensive point-of-sale application handling inventory, real-time sales transactions, and financial reporting.',
    fullDesc: 'Designed and built a comprehensive point-of-sale application handling inventory, sales, and reporting. Architected with a React and TypeScript frontend and Java Spring Boot backend connected to PostgreSQL.',
    type: 'Full-Stack',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'TypeScript'],
    features: [
      'Interactive item checkout with quick barcode scanning & custom discount rules',
      'Real-time inventory deduction & low-stock automated alerts',
      'Daily/Monthly sales analytics with exportable PDF receipts',
      'Multi-user role management (Cashier vs Administrator)',
    ],
    githubUrl: 'https://github.com/vianandreivargas',
    metrics: [
      { label: 'Avg Latency', value: '< 45ms' },
      { label: 'Transaction Speed', value: '1,200/min' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    id: 'trello-app',
    title: 'Trello-Style Task Management App',
    shortDesc: 'Collaborative task board with drag-and-drop functionality, real-time status updates, and lightweight state management.',
    fullDesc: 'Built a collaborative task board with drag-and-drop functionality, real-time updates, and user authentication. Focused on clean UX, responsive design, and fluid animations.',
    type: 'Frontend',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Zustand'],
    features: [
      'Drag and drop Kanban columns (Backlog, In Progress, Review, Done)',
      'Subtask tracking with automated progress percentages',
      'Tag filtering, priority flags, and task deadline countdowns',
      'Zustand state persistence with instant optimistic UI updates',
    ],
    githubUrl: 'https://github.com/vianandreivargas',
    metrics: [
      { label: 'Drag UX', value: '60 FPS' },
      { label: 'Sync Delay', value: 'Instant' },
      { label: 'Storage', value: 'Local + MongoDB' },
    ],
  },
  {
    id: 'hyprland-dotfiles',
    title: 'Minimalist Hyprland Glass Dotfiles',
    shortDesc: 'Custom Linux desktop configuration featuring liquid glass Waybar panels, fuzzy launcher, and unix system monitors.',
    fullDesc: 'A curated Linux environment setup designed for maximum development productivity. Features translucent glass blur panels, custom zsh prompts, and automated pacman deployment scripts.',
    type: 'System Tool',
    tags: ['Linux', 'Shell', 'Wayland', 'Lua'],
    features: [
      'Waybar liquid glass blur panels with system CPU/RAM sparklines',
      'Rofi / Wofi application launcher with terminal hotkeys',
      'Zsh custom prompt with git branch & execution timer badges',
      'One-command installation script for fresh Arch Linux setups',
    ],
    githubUrl: 'https://github.com/vianandreivargas',
    metrics: [
      { label: 'RAM Idle', value: '450MB' },
      { label: 'Boot Time', value: '4.2s' },
      { label: 'Stars', value: '180+' },
    ],
  },
];
