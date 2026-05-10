---
name: project_starterkit_scope
description: This is a starter kit / template — mock data and demo content are intentional
type: project
---

`claude-nextjs-starterkit` is a Next.js 16 + shadcn/ui starter template, not a production app. The dashboard contains hardcoded demo data: stats arrays, fake "recent activity" entries, chart data, "John Doe" defaults in the Settings form. Pages are mostly server components with no real data layer (no Prisma, no API routes yet).

**Why:** Templates exist to be cloned and customized. Flagging "missing input validation on Settings form" or "hardcoded data" as Blocking issues would be noise — those are placeholders by design.

**How to apply:** Treat demo/mock data as Non-blocking unless it leaks something dangerous (real credentials, PII). Focus reviews on: structural correctness (App Router conventions, Server/Client boundaries), reusable primitives (UI components, utils, i18n setup), and anything a downstream user would inherit as a bug.
