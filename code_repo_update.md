# Code Repo Update

This file is the rolling repo-update index for contributor-facing changes. Update it in the same task whenever code or docs change the repo's structure, architecture, workflow, or debugging contract.

## Update Rule

- Update this file when you change routes, top-level file ownership, shared UI contracts, homepage scene contracts, data contracts, verification flow, or contributor docs.
- Keep linked docs in sync in the same task when needed:
  - `AGENTS.md`
  - `codex_repo_index.md`
  - `README.md`
  - `docs/architecture.md`
  - `docs/debugging-runbook.md`
  - `docs/change-checklist.md`
- Keep entries additive and dated for Sai's portfolio history.

## Current Snapshot

### 2026-06-27

- App shell:
  - `src/App.tsx` owns the React Router profile routes, route-transition shell, root redirect to `/ai-ml`, and legacy `/project/:id` redirect into the default AI/ML profile.
  - `ScrollToTop` stays at the app shell level while profile-scoped case-study return state is handled through `src/utils/homeScrollState.ts`.
- Content source:
  - `src/data/portfolioData.ts` is the source of truth for Sai's two active profiles: `/ai-ml` and `/datascientist`.
  - Public identity is privacy-light: email, LinkedIn, GitHub, and `Boston, MA`; phone and street address are intentionally omitted.
  - Education proof uses Northeastern University and Kalinga Institute of Industrial Technology.
- Public assets:
  - `public/Resume_AI_ML.pdf` serves the AI/ML profile resume.
  - `public/Resume_Data_Scientist.pdf` serves the data scientist profile resume.
  - `public/profile.jpg` uses Sai's public GitHub avatar until a custom headshot is supplied.
- 3D layer:
  - `src/components/3d/StoryScene.tsx` combines the hero scene with `HomeLowerScene`.
  - `src/components/3d/HomeLowerScene.tsx` uses profile-safe project, experience, education, and contact scenes with Northeastern/KIIT-safe education naming.
  - `src/data/homeSceneData.ts` owns measured scene ranges, lower-scene geometry, and responsive tuning constants.
- Deployment:
  - Production base path is `/` for the GitHub Pages user site at `https://SaiCharan85.github.io/`.
  - `.github/workflows/deploy.yml` deploys only from `SaiCharan85/SaiCharan85.github.io`.
  - `npm run build:pages` builds Vite output and generates static entries for `/ai-ml`, `/datascientist`, profile project routes, legacy project routes, `404.html`, and `.nojekyll`.
- Verification contract:
  - `npm run lint`
  - `npm run test`
  - `npm run build:pages`
  - Browser smoke for affected profile routes, hash navigation, project detail navigation, resume links, and desktop/mobile scroll behavior.

## Recent Updates

### 2026-06-27

- Migrated the portfolio source and deployment target for Sri Sai Charan Yarlagadda:
  - hydrated the static-only working directory into a clean React/Vite/Three source repo
  - removed tracked generated output, dependency folders, old archive assets, and old resume/profile assets from the publish commit
  - replaced profile routing with `/ai-ml` and `/datascientist`, with `/` redirecting to `/ai-ml`
  - replaced the content model with Sai's resume-backed identity, education, experience, skills, metrics, section copy, and project case studies
  - added AI/ML projects for InnovateAI, TheraBot, and MultiMedAI
  - added data scientist projects for Pneumonia Detection, Credit Card Fraud Detection, Customer Churn on Azure, and Walmart Sales Forecasting
  - copied Sai's profile-specific resume PDFs into `public/`
  - added Sai's GitHub avatar as `public/profile.jpg`
  - updated `index.html`, `metadata.json`, README, contributor docs, validation scripts, and GitHub Actions deployment metadata for `SaiCharan85/SaiCharan85.github.io`
  - refreshed regression tests to validate Sai routes, identity links, education proof, resume links, project sets, generated route entries, and rendered homepage geometry
