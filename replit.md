# Replit Agent Guide

## Overview

This is a personal portfolio website for Aravind Anbalagan, a Senior Backend & DevOps Engineer. It's a full-stack application with a React frontend and Express backend, using PostgreSQL for data storage. The site displays professional information across sections: About, Experience, Education, Skills, Projects, and Contact. Currently, the portfolio data is hardcoded in the frontend (`Home.tsx`) rather than fetched from the API, but the backend schema and storage layer are fully set up to serve this data.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, built with Vite
- **Styling**: Tailwind CSS with CSS variables for theming, using a sophisticated academic/professional color palette (deep navy/charcoal primary)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives — extensive component library already installed
- **Animations**: Framer Motion for page transitions and element animations
- **Data Fetching**: TanStack React Query (configured with `staleTime: Infinity` and no auto-refetching)
- **Fonts**: Inter (sans-serif body), Playfair Display (serif headings), plus Fira Code and Geist Mono
- **Routing**: wouter (lightweight router, used for 404 page)
- **Layout**: Sidebar navigation on desktop (fixed 256px width), collapsible sheet menu on mobile (breakpoint at 768px)
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (run via `tsx`)
- **Architecture**: Single HTTP server serving both API routes and the Vite dev server (development) or static files (production)
- **API Pattern**: RESTful endpoints under `/api/` prefix. Routes are registered in `server/routes.ts` — currently empty (returns httpServer as-is)
- **Storage Layer**: `server/storage.ts` defines an `IStorage` interface and `DatabaseStorage` class with methods for CRUD operations on all entities (profile, experiences, education, skills, projects, messages)
- **Logging**: Custom middleware logs all `/api/` requests with method, path, status code, and duration

### Database
- **Database**: PostgreSQL (required via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema validation
- **Schema** (`shared/schema.ts`): Six tables:
  - `profile` — name, title, bio, URLs (image, resume, github, nuget, linkedin), email, location
  - `experiences` — company, position, period, description
  - `education` — institution, degree, period
  - `skills` — name, category
  - `projects` — title, description, technologies, link
  - `messages` — name (plus likely email, subject, message fields — file truncated)
- **Migrations**: Managed via `drizzle-kit push` (`npm run db:push`)
- **Connection**: `pg.Pool` with connection string from `DATABASE_URL`

### Build System
- **Development**: `tsx server/index.ts` with Vite dev server middleware (HMR via `/vite-hmr`)
- **Production Build**: Custom `script/build.ts` — Vite builds the client to `dist/public`, esbuild bundles the server to `dist/index.cjs`. Key dependencies are bundled (not externalized) to reduce cold start times.
- **Scripts**: `dev`, `build`, `start`, `check` (tsc), `db:push`

### Shared Code
- `shared/schema.ts` — Drizzle table definitions and Zod insert schemas, shared between frontend and backend
- `shared/routes.ts` — API route contracts with Zod response schemas (typed API definition pattern)

## External Dependencies

- **PostgreSQL** — Primary database, connected via `DATABASE_URL` environment variable (required)
- **Google Fonts** — Inter, Playfair Display, DM Sans, Fira Code, Geist Mono, Architects Daughter
- **Radix UI** — Full suite of accessible UI primitives (dialog, popover, tabs, accordion, etc.)
- **Recharts** — Chart library (available via shadcn chart component)
- **Embla Carousel** — Carousel component
- **Replit Plugins** — `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` (dev only)
- **connect-pg-simple** — PostgreSQL session store (available but not currently wired up)