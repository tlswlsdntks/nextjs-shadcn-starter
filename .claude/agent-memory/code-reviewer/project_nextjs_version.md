---
name: project_nextjs_version
description: This project uses Next.js 16 with breaking changes vs training-data assumptions
type: project
---

This starter kit runs Next.js 16.2.6 (see package.json) with React 19.2.4. AGENTS.md explicitly warns that APIs, conventions, and file structure differ from training data.

Key Next.js 16 differences observed in this codebase:
- Middleware was renamed to **Proxy**. The file is `src/proxy.ts` (not `src/middleware.ts`). Same functionality, new naming convention. Reference: `node_modules/next/dist/docs/01-app/01-getting-started/16-proxy.md`.

**Why:** AGENTS.md instructs always reading `node_modules/next/dist/docs/` before flagging an "incorrect" Next.js API — what looks wrong may be a v16 rename.

**How to apply:** When reviewing this repo, do NOT flag `proxy.ts` as a misplaced/misnamed middleware. Verify any Next.js API claim against the local docs before calling it out.
