# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AD-Mont is a business website for a metal fabrication and welding company (Krupanj, Serbia). It's a React SPA with service detail pages and a contact form.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` (runs `tsc -b && vite build`)
- **Lint:** `npm run lint`
- **Preview production build:** `npm run preview`

## Tech Stack

- React 19 + TypeScript + Vite
- Tailwind CSS 4 with OKLCH color tokens (defined in `src/index.css`)
- Radix UI primitives wrapped in `src/components/ui/` with class-variance-authority
- Zustand for sidebar state (`src/hooks/useSideBar.ts`)
- EmailJS for contact form (`src/config/emailjs.ts`, env vars: `VITE_SERVICE_ID`, `VITE_TEMPLATE_ID`, `VITE_PUBLIC_KEY`)
- React Router 7 for routing

## Architecture

**Routing** (`src/App.tsx`): All routes use a shared `Layout` (Header + Footer via Outlet). Routes: `/`, `/metalni-namestaj`, `/celicne-konstrukcije`, `/tig-zavarivanje`.

**Path alias:** `@` maps to `./src` (configured in both `vite.config.ts` and `tsconfig.app.json`).

**Key directories:**
- `src/pages/` — Route-level page components. Service pages use the shared `Service` component.
- `src/components/sections/` — Composable page sections (Hero, About, Services, Contact, Gallery, Cards)
- `src/components/ui/` — Radix UI wrappers styled with CVA variants
- `src/hooks/` — Custom hooks for sidebar, contact form, and image modal state
- `src/assets/` — Images organized by service type (gallery, namestaj, konstrukcije, zavarivanje)

**Navigation pattern:** The Header uses smooth scroll-to-section (`#about`, `#services`, `#contact`) on the home page and React Router links for service detail pages. Mobile nav uses a Sheet sidebar controlled by the Zustand store.

## Styling

- Utility-first Tailwind with custom CSS variables in `src/index.css`
- Primary color: blue (#256eb6), grays (#4f5050)
- OKLCH color space for design tokens
- Responsive breakpoint at md (768px) for mobile/desktop
- `cn()` utility in `src/lib/utils.ts` (clsx + tailwind-merge)
