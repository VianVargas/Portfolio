# Agent Instructions

Read this file, `SPEC.md`, and `README.md` before any planning or coding. The repository structure is scaffolded and the project is in active development.

## Primary Directives

- **Read `SPEC.md` first.** Scope is strictly focused on a production-ready, fully responsive single-page static portfolio. Ensure all code is compatible with static export (`output: 'export'`).
- **Package manager is `pnpm`.** Do not use `npm`, `yarn`, or `bun`. Use `pnpm install` and `pnpm <script>`.
- **Verify before assuming structure.** The project layout (`src/app/`, `src/components/`, `src/config/`) is present. If a file conflicts with these instructions, trust the executable source and update this file.

## Planned Repository Layout

/src/app Next.js App Router pages, layout, and global styles
/src/components UI components (sections/, ui/, layout/)
/src/config Static site data, navigation, and text copy
/src/lib Shared utility functions (e.g., cn helper)
/src/types TypeScript interface and type definitions
/src-reference Original design draft (raw React app, excluded from builds)

Run scripts directly via `pnpm dev`, `pnpm build`, or `pnpm lint`. Verify scripts in `package.json` before execution.

## Frontend & Styling Standards

- **TypeScript Only:** Strict mode enabled. No `any` or `@ts-ignore`.
- **Next.js & Server Components:** Use Next.js App Router with React Server Components by default. Only add `'use client'` when state, event handlers, or browser APIs are strictly required.
- **Animations:** Use `motion` (Framer Motion) for scroll-triggered and interactive animations across all sections.
- **Tailwind CSS:** Use utility-first Tailwind CSS with `clsx` and `tailwind-merge` (`cn` helper). Avoid writing custom CSS files outside of `globals.css`. Implement the Liquid Glass Blue theme using `backdrop-blur`, semi-transparent borders, and blue accent glow effects.
- **Data & UI Separation:** Keep text content, links, and card data inside configuration files in `src/config/` so copy can be updated without touching UI component logic.

## Static Export & Deployment Standards

- Always maintain compatibility with Next.js static HTML export (`output: 'export'` in `next.config.ts`).
- Do NOT use dynamic server features like `headers()`, `cookies()`, or server-side API routes without static fallback strategies.
- Use static-compatible strategies for the contact section (Web3form with mailto fallback).
- The `src-reference/` directory is excluded from TypeScript compilation via `tsconfig.json`. Do not import from it.

## Execution Workflow

1. Read `SPEC.md`, `README.md`, and this file.
2. State a brief plan before writing large code blocks.
3. Keep page files lean by delegating layout blocks to `src/components/sections/`.
4. Verify by running `pnpm lint` and `pnpm build` to confirm static export builds without errors.

## Trust

If this file conflicts with the actual repo config, scripts, or lockfiles, trust the executable source and update this file.
