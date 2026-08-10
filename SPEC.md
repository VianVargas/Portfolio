# SPEC.md — Personal Portfolio Static Website

## Executive Overview

This project requires a high-converting, modern, and lightweight static website to showcase my professional background as a Software Engineer. It serves as a comprehensive digital resume highlighting my technical stack, professional experience, and key academic and personal projects.

## Key Performance Objectives

- **Build Target:** Pure static HTML/CSS/JS export (`output: 'export'`).
- **Performance:** Target 95+ score on Google Lighthouse across Performance, Accessibility, Best Practices, and SEO.
- **Conversion Focus:** Clean, focused page layout guiding visitors from value proposition to project inquiry or resume download.

## Architecture & Tech Stack

- **Framework:** Next.js (App Router, Static Export)
- **Styling:** Tailwind CSS + `clsx` / `tailwind-merge` (`cn` helper)
- **Animations:** `motion` (Framer Motion)
- **Icons:** `lucide-react`
- **Typography:** Inter + JetBrains Mono via `next/font/google`
- **Language:** TypeScript (Strict Mode)
- **Package Manager:** `pnpm`

---

## Page Architecture & Layout Breakdown

The static site consists of a single scrollable webpage with seven core sections:

### 1. Home / Hero Section

- **Navbar:** Linux-themed Liquid Glass top bar (backdrop-blur, sticky) with workspace tabs, theme toggle, command palette launcher, and desktop mode switch.
- **Headline:** High-impact introductory hook and professional title.
- **Visuals:** Neofetch-style terminal card with tab switching (neofetch / spec.ts), animated floating blob background with mouse tracking.
- **CTAs:** Button linking to the Contact section and a formatted resume modal.

### 2. About Section (merged into Hero)

- **Content:** Concise overview of academic background (BS in Computer Science with a specialization in Software Engineering), displayed within the hero's neofetch/terminal card.

### 3. Experience Section

- **Content:** Professional timeline with git commit-style layout, tech filter tags, and liquid glass cards emphasizing direct contributions as an individual contributor.
- **Layout:** Git timeline tree with dot nodes and liquid glass cards showing role, company, period, location, accomplishments, and tech chips.

### 4. Tech Stack Section

- **Layout:** Visually organized grid with category filter pills and skill progress bars.
- **Categories:**
  - Frontend: TypeScript, React, Next.js, Zustand, Tailwind CSS
  - Backend & Frameworks: Java, Spring Boot, Vaadin, Node.js/Express
  - Databases & Tools: PostgreSQL, MongoDB, AWS Cloud, Linux/Docker

### 5. Projects Section

- **Layout:** Showcase grid for featured work with metric badges.
- **Content:** Highlight cards for major builds (e.g., full-scale POS system, Trello-style task management app, Hyprland dotfiles) detailing architecture, stack, and problem solved.

### 6. Certifications Section

- **Layout:** Clean card layout with badge icons, skill tags, and credential IDs.

### 7. Contact Section

- **Content:** Message form (Web3form), direct email copy button, GitHub and LinkedIn link pills, and a simulated ping terminal card.

### Interactive Features

- **Command Palette:** Ctrl+K quick menu for keyboard navigation between sections.
- **Desktop Window Mode:** Draggable floating windows mimicking a Linux desktop environment.
- **Resume Modal:** Formatted resume viewer with copy raw text and print/save PDF.
- **Light/Dark Mode Toggle:** Persistent theme switching.

### Static Export Constraints & Rules

1. **Contact Form:** Uses Web3form for static-compatible form submissions (placeholder).
2. **No Server-Side Operations:** Avoid dynamic server APIs, cookies, or header-based request handling.
3. **Optimized Assets:** Pre-optimize all static images in `/public` or configure Next.js unoptimized static images in `next.config.ts`.

---

## Design System Guidelines

### Color Palette (Liquid Glass Blue Theme)

- **Primary Dark / Background:** Deep blacks (`#030712`).
- **Surface / Cards:** Translucent glass with rgba white overlays (`rgba(255, 255, 255, 0.04)`).
- **Primary Accent / CTA:** Electric blue (`#3b82f6`) with glow effects.
- **Text:** White (`#f1f5f9`) for headings, muted slate (`#94a3b8`) for body text.
- **Light Mode:** Soft blue-white (`#f0f5ff`) background with darker blue accents (`#2563eb`).

### Typography

- **Primary Font:** Inter (`next/font/google`), styled for clean readability against dark backgrounds.
- **Mono Font:** JetBrains Mono for terminal, code, and tech labels.
