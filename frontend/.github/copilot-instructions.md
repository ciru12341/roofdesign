## Repo snapshot

- Framework: Next.js (app router) — code lives under `src/app` with nested routes (see `src/app/page.tsx`, `src/app/erfahrungen/page.tsx`).
- Language: TypeScript + React 19 (see `package.json`).
- Styling: Tailwind CSS (global styles in `src/app/globals.css`) and `postcss` configured.

## Quick dev commands

- Start dev server: `npm run dev` (runs `next dev`). Use this for local iteration.
- Build for production: `npm run build` (runs `next build`).
- Start production server: `npm run start`.
- Lint: `npm run lint` (runs `eslint` — config is `eslint.config.mjs`).

## High-level architecture & patterns (what to know)

- App router: The project uses the Next.js App Router — top-level layout is `src/app/layout.tsx` which wires `Header` + `Container`.
- Components: Presentational components are in `src/components` (lowercase filenames like `container.tsx`, `header.tsx`, `videocontainer.tsx`). Prefer small, prop-driven components.
- Static content: Small content/config objects live in `src/lib` (e.g., `courses.ts`, `referenzen.ts`, `faq.js`). These are imported directly by pages/components.
- Images & public assets: Images are under `public/`. Components sometimes import images (example: `header.tsx` uses `import logoImg from "../../public/logo2.png"` with `next/image`).
- Absolute imports: The project uses the `@/*` path alias -> `src/*` (see `tsconfig.json`). Use `@/components/...` in new files to match convention.
- Remote images: `next.config.ts` includes `images.remotePatterns` to allow external origin(s) (e.g., `dach-selber-decken.de`). If you add other remote hosts, update `next.config.ts`.

## Coding conventions & small gotchas (concrete examples)

- File names are lowercase for components (e.g. `videocontainer.tsx`). Keep that naming for consistency.
- Component props are typed inline with small object types (see `Videocontainer` signature: `({ src, className }: { src: string, className?: string })`). Follow this lightweight style unless adding larger types.
- Prefer presentational components with props rather than global state. There is no global state manager in the repo.
- Use `next/image` for images where appropriate; static imports from `public/` are used in `header.tsx`.
- Video handling: `videocontainer.tsx` distinguishes YouTube vs. direct video files by checking `src.includes('youtube.com') || src.includes('youtu.be')`. Keep similar simple checks for embeds.

## Integration points & external deps

- Next.js (v16) and React 19 are core. Tailwind and PostCSS are present for styling.
- Headless UI (`@headlessui/react`) is used for UI primitives.
- No server code in this repository — it's a frontend-only Next.js app (hosting expected on Vercel or similar).

## When editing or adding pages/components

- Add new pages under `src/app` (use nested folder with `page.tsx`). Check layout composition so the new page appears inside `Container` and `Header`.
- Keep components in `src/components`. Export default functional components; keep them small and prop-driven.
- Add static data or content fragments to `src/lib` (follow `courses.ts` example).
- If you add remote images, update `next.config.ts` `images.remotePatterns` to permit that host.

## Files to reference when performing common tasks

- Top-level layout: `src/app/layout.tsx` (how pages are composed).
- Global styles: `src/app/globals.css`.
- Component examples: `src/components/header.tsx`, `src/components/videocontainer.tsx`, `src/components/container.tsx`.
- Static content examples: `src/lib/courses.ts`.
- Build & configs: `package.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`.

## Small checklist for changes

1. Run `npm run dev` and confirm UI renders.
2. Lint with `npm run lint` and fix obvious issues.
3. If adding remote images, update `next.config.ts`.
4. Follow path alias `@/...` for imports.

---
If any section is unclear or you'd like more guidance (example PR templates, test guidance, or adding unit tests), tell me which area to expand and I'll iterate.
