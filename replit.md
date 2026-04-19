# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Hope Harbor Concept Lab (`artifacts/hope-harbor-lab`)
- **Type**: react-vite, frontend-only (no backend)
- **Preview path**: `/`
- **Purpose**: Premium design concept lab for Hope Harbor Health behavioral health brand
- **Features**:
  - Five distinct homepage design concepts (Minimal Luxury, Cinematic Editorial, Hospitality Calm, Premium Clinical, Conversational)
  - Concept switcher shell with animated pill navigation
  - Split-screen Compare mode to view two concepts side by side
  - Each concept has: embedded inline chat, starter prompt chips, simulated AI responses, brand nav
  - Framer Motion animations throughout
  - Google Fonts (Playfair Display + Inter)
  - Brand palette: deep navy/near-black backgrounds, teal #1DB8C4 accents, gold #C9A84C accents
- **Key files**:
  - `src/pages/ConceptLab.tsx` — main shell with switcher + compare mode
  - `src/components/concepts/Concept1.tsx` — Minimal Luxury
  - `src/components/concepts/Concept2.tsx` — Cinematic Editorial
  - `src/components/concepts/Concept3.tsx` — Hospitality Calm
  - `src/components/concepts/Concept4.tsx` — Premium Clinical
  - `src/components/concepts/Concept5.tsx` — Conversational Product

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
