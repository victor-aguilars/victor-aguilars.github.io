# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Build static export to /out (used for GitHub Pages deployment)
npm run lint     # Run ESLint (next/core-web-vitals rules)
```

No test framework is configured.

## Architecture

**Next.js 14 App Router** — static export targeting GitHub Pages (`output: 'export'` in `next.config.js`). No server-side rendering, no API routes; all data must be available at build time.

### Routing

| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/blog` | `app/blog/page.tsx` |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` |
| `/projects` | `app/projects/page.tsx` |

### Content Sources

- **Blog posts** — MDX files in `content/blog/*.mdx` with YAML frontmatter (`title`, `date`, `description`, `tags`, `published`). Parsed by `lib/blog.ts` using gray-matter + next-mdx-remote. Only posts with `published: true` are shown.
- **Projects** — Hardcoded TypeScript array in `lib/projects.ts` (no file-based content). Helper functions: `getFeaturedProjects()`, `getProjectBySlug()`, `getProjectsByCategory()`.

### Key Directories

- `app/` — Next.js App Router pages and root layout
- `components/` — React components; `components/ui/` holds shadcn/ui primitives; `components/motion/` holds Framer Motion wrappers
- `lib/` — Data loading (`blog.ts`, `projects.ts`) and utilities (`utils.ts`)
- `hooks/` — Custom hooks (e.g., `useTypingEffect.ts`)
- `content/blog/` — MDX blog post source files

### Styling

Tailwind CSS with CSS variable-based theming (HSL variables defined in `app/globals.css` for both light and dark modes). Dark mode uses the `class` strategy via next-themes. Use `cn()` from `lib/utils.ts` (clsx + tailwind-merge) for conditional class names.

### Deployment

Push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys the `/out` directory to GitHub Pages.
