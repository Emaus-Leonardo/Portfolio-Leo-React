# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server |
| `npm run build` | Production build (also emits the Markdown exports into `dist/`) |
| `npm run typecheck` | `tsc --noEmit` (strict) |
| `npm run lint` | ESLint on the TypeScript sources |

## Content and Markdown exports

All content about the owner lives in `src/content/profile.ts`. The site, the i18n dictionary and the Markdown
exports derive from it. At build time (and in dev) a Vite plugin publishes:

- `/cv.md`, `/cv.pt.md`: résumé
- `/portfolio.md`, `/portfolio.pt.md`: the whole portfolio, written for people and LLMs
- `/llms.txt`: index following <https://llmstxt.org>

Set `SITE_URL` (for example `https://example.com`) at build time to get absolute links inside those files.
