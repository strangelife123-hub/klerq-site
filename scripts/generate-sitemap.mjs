import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const origin = "https://klerq-site.vercel.app";
const pageEntries = [
  { path: "/", source: "app/page.tsx", changeFrequency: "monthly" },
  { path: "/about", source: "app/about/page.tsx", changeFrequency: "monthly" },
  {
    path: "/product",
    source: "app/product/page.tsx",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/docs",
    source: "app/docs/page.tsx",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  { path: "/contact", source: "app/contact/page.tsx", changeFrequency: "monthly" },
];

const blogEntries = [
  { path: "/blog", source: "app/blog/page.tsx", changeFrequency: "weekly" },
  {
    path: "/blog/how-we-parse-invoices",
    source: "app/blog/how-we-parse-invoices/page.tsx",
    published: "2023-09-02",
    changeFrequency: "weekly",
  },
  {
    path: "/blog/introducing-klerq",
    source: "app/blog/introducing-klerq/page.tsx",
    published: "2022-03-14",
    changeFrequency: "weekly",
  },
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

function urlset(entries) {
  const urls = entries
    .map((entry) => {
      const changeFrequency = entry.changeFrequency
        ? `    <changefreq>${entry.changeFrequency}</changefreq>\n`
        : "";
      const priority = entry.priority
        ? `    <priority>${entry.priority.toFixed(1)}</priority>\n`
        : "";
      const loc = entry.path === "/" ? `${origin}/` : `${origin}${entry.path}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastModified(entry)}</lastmod>\n${changeFrequency}${priority}  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function generateSitemap() {
  writeFileSync(new URL("../public/sitemap-pages.xml", import.meta.url), urlset(pageEntries));
  writeFileSync(new URL("../public/sitemap-blog.xml", import.meta.url), urlset(blogEntries));

  const children = ["sitemap-pages.xml", "sitemap-blog.xml"]
    .map((file) => `  <sitemap>\n    <loc>${origin}/${file}</loc>\n  </sitemap>`)
    .join("\n");

  writeFileSync(
    new URL("../public/sitemap.xml", import.meta.url),
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${children}\n</sitemapindex>\n`,
  );
}
