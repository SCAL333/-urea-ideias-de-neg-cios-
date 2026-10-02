# 1000 Ideias de Negócios

## Overview
A Vite + React app (Portuguese) that displays 1000 business ideas with search and category filtering.

## Tech Stack
- Vite 6 + React 18
- Node 22 (via docker compose)
- No backend, no database, no external credentials needed

## Running
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
App is served on host port 3000 (mapped to container port 5173).

## Structure
- `src/data/ideas.js` — programmatic generator producing 1000 unique ideas across 20 categories
- `src/App.jsx` — main UI with search, category filters, and paginated card grid
- `src/index.css` — all styling

## Notes
- Dependencies install on container startup via `npm install` (no lockfile initially; first run generates one)
- Vite dev server with hot reload; `allowedHosts: true` for the preview proxy
- No secrets or external services required
