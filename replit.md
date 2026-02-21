# Replit Agent Guide

## Overview

This is a personal portfolio website for Aravind Anbalagan, a Senior Backend & DevOps Engineer. It is a **pure static HTML site** — a single `index.html` file with inline CSS and minimal JavaScript, plus a profile image (`profile.jpg`) and favicon (`favicon.png`). No React, no build step, no database. Ready for GitHub Pages deployment.

## User Preferences

Preferred communication style: Simple, everyday language.
Site type preference: Pure static HTML, no backend or build process needed.

## System Architecture

### Static HTML Site
- **Main file**: `index.html` at the project root — self-contained with inline CSS and JS
- **Assets**: `profile.jpg` (profile photo), `favicon.png` (favicon)
- **Fonts**: Google Fonts (Inter for body, Playfair Display for headings) loaded via CDN
- **Icons**: Inline SVGs (from Lucide icon set)
- **Layout**: Fixed sidebar navigation on desktop (256px width), hamburger mobile menu with slide-out nav (breakpoint at 768px)
- **Sections**: About, Experience, Education, Skills, Projects, Contact
- **No build step**: Can be deployed directly to GitHub Pages or any static hosting

### Dev Server (Replit only)
- **Server**: Minimal Express static file server in `server/index.ts`
- **Purpose**: Only used to preview the site within Replit
- **Command**: `npm run dev` runs `tsx server/index.ts`

### GitHub Pages Deployment
To deploy, copy these files to a GitHub repo:
1. `index.html`
2. `profile.jpg`
3. `favicon.png`

## External Dependencies

- **Google Fonts** — Inter, Playfair Display (loaded via CDN in index.html)
- No npm packages required for the static site itself
