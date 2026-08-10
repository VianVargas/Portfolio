# Agent Instructions

Read this file, `SPEC.md`, and `README.md` before any planning or coding.[cite: 1] The repository structure is scaffolded and the project is in active development.[cite: 1]

## Primary Directives

- **Read `SPEC.md` first.**[cite: 1] Scope is strictly focused on a production-ready, fully responsive single-page static portfolio. Ensure all code is compatible with static export (`output: 'export'`).[cite: 1]
- **Package manager is `pnpm`.**[cite: 1] Do not use `npm`, `yarn`, or `bun`.[cite: 1] Use `pnpm install` and `pnpm <script>`.[cite: 1]
- **Verify before assuming structure.**[cite: 1] The project layout (`src/app/`, `src/components/`, `src/config/`) is present.[cite: 1] If a file conflicts with these instructions, trust the executable source and update this file.[cite: 1]

## Planned Repository Layout

/src/app Next.js App Router pages, layout, and global styles[cite: 1]
/src/components UI components (sections/, ui/, layout/)[cite: 1]
/src/config Static site data, navigation, and text copy[cite: 1]
/src/lib Shared utility functions (e.g., cn helper)[cite: 1]
/src/types TypeScript interface and type definitions[cite: 1]

Run scripts directly via `pnpm dev`, `pnpm build`, or `pnpm lint`.[cite: 1] Verify scripts in `package.json` before execution.[cite: 1]

## Frontend & Styling Standards

- **TypeScript Only:** Strict mode enabled.[cite: 1] No `any` or `@ts-ignore`.[cite: 1]
- **Next.js & Server Components:** Use Next.js App Router with React Server Components by default.[cite: 1] Only add `'use client'` when state, event handlers, or browser APIs are strictly required.[cite: 1]
- **Tailwind CSS:** Use utility-first Tailwind CSS with `clsx` and `tailwind-merge` (`cn` helper).[cite: 1] Avoid writing custom CSS files outside of `globals.css`.[cite: 1] Implement the Dark Chrome theme and Liquid Glass navbar using specific Tailwind configuration and `backdrop-blur`.
- **Data & UI Separation:** Keep text content, links, and card data inside configuration files in `src/config/` so copy can be updated without touching UI component logic.[cite: 1]

## Static Export & Deployment Standards

- Always maintain compatibility with Next.js static HTML export (`output: 'export'` in `next.config.js`).[cite: 1]
- Do NOT use dynamic server features like `headers()`, `cookies()`, or server-side API routes without static fallback strategies.[cite: 1]
- Use static-compatible strategies (like a simple `mailto:` link) for the contact section.[cite: 1]

## Execution Workflow

1. Read `SPEC.md`, `README.md`, and this file.[cite: 1]
2. State a brief plan before writing large code blocks.[cite: 1]
3. Keep page files lean by delegating layout blocks to `src/components/sections/`.[cite: 1]
4. Verify by running `pnpm lint` and `pnpm build` to confirm static export builds without errors.[cite: 1]

## Trust

If this file conflicts with the actual repo config, scripts, or lockfiles, trust the executable source and update this file.[cite: 1]
