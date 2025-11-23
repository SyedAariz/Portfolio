# Copilot instructions for this repository

Keep guidance short and actionable. This repo is a small React + Vite portfolio site with Tailwind and Framer Motion. Use the notes below to make safe, repository-specific edits.

- Project root: `package.json` defines scripts: `dev` (vite), `build` (vite build), `preview` (vite preview), and `lint` (eslint).
- Entry points: `index.html` -> `/src/main.jsx` renders the `<App />` component into the DOM element with id "root".
- Primary UI: `src/App.jsx` composes `Navigation`, `Hero`, and `WritingText` components. Treat `src` components as the canonical place for UI changes.

- Styling: Tailwind is used. Tailwind is wired via `@tailwindcss/vite` plugin in `vite.config.js` and `index.css`/`App.css`. Prefer editing `.css` and Tailwind classes in JSX rather than adding global styles.

- Build/runtime notes:
  - Development: `npm run dev` (Vite with HMR).
  - Production build: `npm run build`.
  - Preview build: `npm run preview`.
  - Linting: `npm run lint` (ESLint configured via `eslint.config.js`).

- Libraries and notable config:
  - React 19 with React Compiler enabled via `babel-plugin-react-compiler` (see `vite.config.js` — keep Babel plugin usage unless performance reasons to change).
  - `framer-motion` is used for animations in components like `WritingText` (inspect `src/WritingText.jsx`).

- Component & file conventions to follow:
  - Components use `.jsx` in `src/` and are exported as default. When adding components, follow the same file-extension and export style.
  - Keep presentational logic in components (e.g., `Hero.jsx`, `Navigation.jsx`), stateful logic in `App.jsx` or dedicated hooks if needed.
  - Props patterns: `WritingText` accepts `text`, `inView`, and `transition` (see `src/App.jsx` for usage). Use the same prop shape when reusing this component.

- When editing UI behavior or animation, search for `framer-motion` usage and `transition` objects to keep timing/feel consistent.

- Tests: no test framework is configured. Avoid adding heavy infra without asking — prefer small, self-contained changes.

- CI / GitHub: there is no existing `.github` workflow in this repo. If you add CI, include scripts above and keep linting as part of checks.

- File references/examples (use these as anchors in suggestions/PRs):
  - Composition example: `src/App.jsx` — shows how `Navigation`, `Hero`, `WritingText` are assembled.
  - Startup: `index.html`, `src/main.jsx`.
  - Build config: `vite.config.js` and `package.json` scripts.
  - Lint rules: `eslint.config.js` (project-wide linting expectations).

- Safety & style:
  - Keep changes small and component-scoped. This is a personal portfolio — avoid large refactors without a clear benefit.
  - Preserve existing JSX/JS style (ES modules, default exports, JSX in `.jsx`).

If any of these files are unclear or you want me to expand the instructions with examples of common edits (e.g., add new section to Hero, update Tailwind config), tell me which area to expand.
