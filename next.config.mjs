import { generateSitemap } from "./scripts/generate-sitemap.mjs";

generateSitemap();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
