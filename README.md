# Personal Portfolio

Production-ready static website for my personal portfolio, showcasing professional software engineering experience and major projects.

## Tech Stack

- **Framework:** Next.js (App Router, Static Export)
- **Styling:** Tailwind CSS + clsx / tailwind-merge
- **Animations:** motion (Framer Motion)
- **Icons:** lucide-react
- **Typography:** Inter + JetBrains Mono (next/font/google)
- **Package Manager:** pnpm
- **Deployment:** Vercel

## Requirements

See `SPEC.md` and `AGENTS.md` for project scope and development standards.

## Getting Started

```bash
pnpm install
pnpm dev       # development server
pnpm build     # static export to out/
pnpm lint      # lint check
```

## Project Structure

```text
src/
├── app/                # Next.js App Router pages & layout
│   └── page.tsx        # Single-page scrolling portfolio (client component)
├── components/
│   ├── layout/         # LinuxTopBar (Liquid Glass navbar)
│   ├── sections/       # Page sections (Hero, Experience, TechStack, Projects, Certifications, Contact)
│   └── ui/             # Reusable UI (LiquidBackground, CommandPalette, DesktopWindowMode, ResumeModal)
├── config/             # Site data (site, experience, tech-stack, projects, certifications)
├── lib/                # Utilities (cn helper)
└── types/              # TypeScript interfaces
```

## Reference Draft

The `src-reference/` directory contains the original design draft (raw React app). It is excluded from TypeScript compilation and builds via `tsconfig.json`.

## Contact Form

The contact section uses Web3form for static-compatible form submissions. Configure your access key in `src/components/sections/Contact.tsx`.
