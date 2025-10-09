# Control-Tower — Project Context

## Purpose
A reusable, agentic software org that plans, builds, tests, and deploys apps.
FE on Vercel (Next.js), BE on Fly.io (FastAPI), CI on GitHub Actions, planning on Jira.

## Current stack
- Frontend: Next.js (apps/web) — Vercel
- Backend: FastAPI (apps/api) — Fly.io app: `control-tower-api`
- Orchestrator: LangGraph + Claude SDK (`.orchestrator/`)
- CI: GitHub Actions (build-test, deploy-api)
- Planning: Jira project `KAN` at `https://control-tower-ai.atlassian.net/`

## Env & secrets (names only)
- Vercel: `NEXT_PUBLIC_API_BASE` → `https://control-tower-api.fly.dev`
- GitHub Actions: `GHUB_APP_ID`, `GHUB_APP_PRIVATE_KEY`, `FLY_API_TOKEN`, `FLY_APP_NAME`,
  `ANTHROPIC_API_KEY`, `JIRA_BASE_URL`, `JIRA_EMAIL`, `JIRA_API_TOKEN`, `JIRA_PROJECT_KEY`

## Live URLs
- API: `https://control-tower-api.fly.dev`
- Web (prod): `https://control-tower.vercel.app`
- Web (preview): Created per-PR by Vercel

## Definition of Done (DoD)
- Tests pass (build-test), security/a11y checks pass (as configured)
- Docs updated (this file + ADR if architectural)
- Jira story in “Done”
- If user-facing: preview link posted in PR description

## Contacts / Ownership
- PM: you (`@murrad23`)
- Repos: `murrad23/Control-Tower`