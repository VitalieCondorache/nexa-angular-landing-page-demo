# Nexa | Angular Landing Page Demo

A polished landing page demo for a fictional SaaS workspace, built with modern Angular.

This is a portfolio project focused on responsive UI, component structure, Signals, bilingual content, accessibility, testing, and GitHub Pages deployment.

## Features

- Responsive SaaS landing page
- Romanian and English language switcher
- Pricing cards and FAQ accordion
- Mobile navigation
- Angular Signals for interactive state
- SEO and Open Graph metadata
- Unit tests with Vitest
- Automated GitHub Pages deployment

## Tech stack

- Angular 22
- TypeScript
- SCSS
- Angular Signals
- Vitest
- GitHub Actions

## Development

Install dependencies and start the local server:

```bash
npm install
npm start
```

Open `http://localhost:4200/` in your browser.

## Validation

```bash
npm test -- --watch=false
npm run build
```

## Deployment

The workflow in `.github/workflows/deploy.yml` deploys the production build to GitHub Pages whenever changes are pushed to `main`.

In the repository settings, set **Pages → Source** to **GitHub Actions**.
