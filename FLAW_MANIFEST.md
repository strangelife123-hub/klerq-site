# Klerq — Flaw Manifest (ground truth)

`ZOO-GITHUB-001` · Platform: GitHub → Vercel (Next.js 15 App Router)

Maturity level: **average, visually decent but hard for AI to read** — clean
design and real marketing copy, but no structured data, sparse metadata, AI
crawlers blocked, docs pushed off-site, and several facts that contradict each
other across pages.

Every row is a problem planted on purpose. "Expected fix" is the Far & Wide
`fix_type`; "GitHub path" is the `(kind, strategy)` the GitHub dispatcher would
use; "Auto-PR" = the dispatcher can ship it as a pull request without a human
writing anything.

| # | Planted flaw | Category | Where | Detected by | Expected fix_type | GitHub path (kind, strategy) | Auto-PR |
|---|---|---|---|---|---|---|---|
| 1 | AI crawlers (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, CCBot) blocked | Crawlability / AI access | `public/robots.txt` | robots AI-access check | `robots_txt` | (robots_txt, merge_append / replace_file) | ✅ |
| 2 | No `llms.txt` | Crawlability / AI access | absent | essentials + llms check | `fact_lock` / `robots_txt`→llms | (llms_txt, replace_file) | ✅ |
| 3 | No `sitemap.xml` | Sitemap health | absent | sitemap check + essentials | `sitemap_xml` | (sitemap_xml, replace_file) | ✅ |
| 4 | No JSON-LD anywhere (no Organization / SoftwareApplication) | Structured data | `app/layout.tsx` | schema check | `schema_jsonld` | (jsonld, add_new) | ✅ (after `<body>`) |
| 5 | Generic `<title>` "Klerq" + no meta description (site-wide) | Meta / discoverability | `app/layout.tsx` metadata | essentials title/desc | `meta_tags` | (meta_tags, add_missing + replace_existing) | ✅ |
| 6 | No canonical on any page | Meta | `app/product/page.tsx` (+ others) | essentials canonical | `canonical` | (canonical, set) | ✅ (Next.js metadata) |
| 7 | No Open Graph / Twitter card tags | Meta / social | `app/layout.tsx` | essentials OG/Twitter | `meta_tags` | (meta_tags, add_missing) | ✅ |
| 8 | Homepage `<img>` has no `alt` | Accessibility | `app/page.tsx` (`product-shot.svg`) | essentials image-alt % | `image_alt` | (image_alt, patch_items) | ✅ |
| 9 | Nav links to `/pricing`, which does not exist (404) | Internal linking / broken link | `components/Nav.tsx`, `app/product/page.tsx` | crawl 404 | `broken_link` / `content_page` | (broken_link, patch_items) | ✅ |
| 10 | Missing pricing page | Conversion clarity | absent `/pricing` | crawl + content check | `content_page` | (content_draft, create_new_page) | ✅ |
| 11 | Missing security/trust page | Trust | absent `/security` | content check | `content_page` | (content_draft, create_new_page) | ✅ |
| 12 | No dedicated FAQ page | AI readability | absent `/faq` (FAQ only on home) | content check | `faq_block` | (faq_block, create_new_page) | ✅ |
| 12b | Home FAQ lives in `data/faq.ts` as `{question, answer}` literals | AI readability (positive hook) | `data/faq.ts` | — | `faq_block` | (faq_block, extend_existing) | ✅ |
| 13 | Founding year contradicts: "building since 2023" vs "founded in 2021" | Content accuracy / entity | `app/page.tsx` vs `app/about/page.tsx` | LLM fact check | `content_edit` | (content_edit, replace_text) | ✅ |
| 14 | Latency contradicts: "50 ms" vs "under 2 seconds" vs "1–3 seconds" | Content accuracy | `page.tsx` / `product/page.tsx` / `docs/page.tsx` | LLM fact check | `content_edit` | (content_edit, replace_text) | ✅ |
| 15 | Accuracy contradicts: "99.4%" vs "over 95%" vs "near-perfect" | Content accuracy | `page.tsx` / `product/page.tsx` / `about/page.tsx` | LLM fact check | `content_edit` | (content_edit, replace_text) | ✅ |
| 16 | Pricing contradicts: implied free vs "€0.01/page" vs "€99/month flat" vs "€0.02/page" | Conversion / accuracy | home / about / contact / blog | LLM fact check | `content_edit` | (content_edit, replace_text) | ✅ |
| 17 | Brand name inconsistent: "Klerq" vs "Klerq API" vs "Clerq" (typo) | Entity clarity | `Footer.tsx`, `blog/introducing-klerq` | LLM entity check | `content_edit` | (content_edit, replace_text) | ✅ |
| 18 | Vague positioning: hero "Documents, understood." (unclear category) | Entity / AI readability | `app/page.tsx` | LLM entity check | `content_edit` / `meta_tags` | (content_edit, replace_text) | ✅ |
| 19 | Heading skip: `<h1>` → `<h3>` (skips h2) | Accessibility / structure | `app/product/page.tsx` | heading structure | `heading_level` | (heading_level, set_level) | ✅ |
| 20 | Redirect chain `/old-docs → /docs-temp → /docs` | Technical | `vercel.json` | redirect-chain check | `redirect_chain` | (redirect_chain, replace_config) | ✅ |
| 21 | Docs thin + pushed off-site to GitHub | Content depth / AI readability | `app/docs/page.tsx` | content depth check | `content_page` / `content_edit` | (content_draft, create_new_page) | ◻︎ partial |
| 22 | Weak entity info: no named founders, no address/registration | Authority / entity | `app/about/page.tsx` | entity check | `content_edit` / `content_page` | (content_edit, replace_text) | ◻︎ partial |
| 23 | Outdated blog (2022, "beta" pricing) | Content freshness | `blog/introducing-klerq` | freshness check | `content_edit` | (content_edit, replace_text) | ◻︎ partial |

## Coverage summary

- **Fully auto-deployable via PR (≥3 required):** robots_txt, llms_txt, sitemap_xml, jsonld, meta_tags, canonical, image_alt, content_edit, content_draft, faq_block, redirect_chain — **11 fix types**.
- **Categories hit:** crawlability, structured data, meta/discoverability, accessibility, internal linking, sitemap, conversion clarity, trust, entity clarity, content accuracy, content freshness, authority, technical (redirects).
- **What should score WELL (so the audit isn't uniformly negative):** clean single H1 on the homepage, real readable prose, working nav (except the one deliberate broken link), HTTPS, mobile-responsive, fast static pages.

## Deliberately NOT present (so the connector can create them)

`/pricing`, `/security`, `/faq`, `public/llms.txt`, `public/sitemap.xml`,
site-wide JSON-LD, canonical tags, Open Graph tags.
