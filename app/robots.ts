/**
 * `robots.txt` — generated automatically by Next.js at `/robots.txt`.
 * Allows all crawlers and points them at the sitemap. The sitemap URL
 * comes from `siteConfig.url`, so update that when the domain changes.
 */
import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}