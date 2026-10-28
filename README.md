# CAZSS Frontend

Web client for CAZSS (Customer AutoZone Self Service): configure endpoints, invoke them, and review request history, with role-based views.

## Stack

SvelteKit (Svelte 5), TypeScript, Tailwind CSS 4, Vite, Vitest and Playwright.

## Run

```bash
npm install
npm run dev
npm run test:unit -- --run
```

Integration tests that hit a real backend read `E2E_EMAIL` and `E2E_PASSWORD` from the environment (see `.env.example`). The backend lives in `cazss-backend`.
