import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const origin = "https://klerq-site.vercel.app";
const entries = [
  { path: "/", source: "app/page.tsx" },
  { path: "/about", source: "app/about/page.tsx" },
  { path: "/blog", source: "app/blog/page.tsx" },
  {
    path: "/blog/how-we-parse-invoices",
    source: "app/blog/how-we-parse-invoices/page.tsx",
    published: "2023-09-02",
  },
  {
    path: "/blog/introducing-klerq",
    source: "app/blog/introducing-klerq/page.tsx",
    published: "2022-03-14",
  },
  { path: "/product", source: "app/product/page.tsx" },
  { path: "/docs", source: "app/docs/page.tsx" },
  { path: "/contact", source: "app/contact/page.tsx" },
];

function lastModified({ source, published }) {
  const committed = execFileSync(
    "git",
    ["log", "-1", "--format=%cI", "--", source],
    { encoding: "utf8" },
  ).trim();

  if (!committed) {
    throw new Error(`Cannot determine the last modification date for ${source}`);
  }

  if (!published) return committed;
  return new Date(committed) > new Date(published) ? committed : published;
}

export function generateSitemap() {
  const urls = entries
    .map((entry) => {
      const loc = entry.path === "/" ? `${origin}/` : `${origin}${entry.path}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastModified(entry)}</lastmod>\n  </url>`;
    })
    .join("\n");

  writeFileSync(
    new URL("../public/sitemap.xml", import.meta.url),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
}
