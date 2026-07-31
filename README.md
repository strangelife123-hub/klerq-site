# Klerq — Far & Wide Platform Zoo (GitHub / Next.js)

Fictional developer-focused document-processing API company. This is a **test
fixture** for the Far & Wide platform: a real, deployed Next.js site on Vercel,
built with deliberate AI-visibility, SEO, entity and content problems so that a
real Far & Wide audit produces real, gradeable fix recommendations — and so the
GitHub connector's fix → pull-request → merge → rollback flow can be exercised
end to end.

- **Zoo ID:** `ZOO-GITHUB-001`
- **Platform:** GitHub → Vercel (Next.js 15, App Router)
- **Brand:** Klerq — "Turn documents into structured data with one API call."
- **Every planted problem is catalogued in [`FLAW_MANIFEST.md`](./FLAW_MANIFEST.md)**,
  mapped to the exact Far & Wide fix type and GitHub dispatcher path it should trigger.

Nothing here is real. All companies, customers, metrics and testimonials are fictional.

## Stack shape (why it's built this way)

Shaped to match what the Far & Wide GitHub dispatcher can read and fix:
`next.config.mjs` for stack detection, `app/layout.tsx` with a literal `<body>`
and a plain-literal `metadata` object, page files with unique verbatim copy for
find-and-replace fixes, absent slugs (`/pricing`, `/security`, `/faq`) for
new-page creation, and `public/` slots for `robots.txt` / `llms.txt` /
`sitemap.xml`.

## Run locally

```bash
npm install
npm run dev
```
