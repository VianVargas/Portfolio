# Personal Portfolio

Production-ready static website for my personal portfolio, showcasing professional software engineering experience and major projects.

## Tech Stack

- **Framework:** Next.js (App Router, Static Export)[cite: 2]
- **Styling:** Tailwind CSS + clsx / tailwind-merge[cite: 2]
- **Icons:** lucide-react[cite: 2]
- **Typography:** Inter or Roboto (next/font/google)[cite: 2]
- **Package Manager:** pnpm[cite: 2]
- **Deployment:** Vercel

## Requirements

See `SPEC.md` and `AGENTS.md` for project scope and development standards.[cite: 2]

## Getting Started

````bash
pnpm install
pnpm dev       # development server
pnpm build     # static export to out/
pnpm lint      # lint check
```[cite: 2]

## Project Structure

```text
src/
├── app/                # Next.js App Router pages & layout
│   └── page.tsx        # Single-page scrolling portfolio
├── components/
│   ├── layout/         # Liquid Glass Navbar, Footer
│   ├── sections/       # Page sections (Hero, About, Experience, TechStack, Projects, Certifications, Contact)
│   └── ui/             # Reusable UI (Cards, Badges)
├── config/             # Site data (experience, projects, stack)
├── lib/                # Utilities (cn helper)
└── types/              # TypeScript interfaces
```[cite: 2]
````
