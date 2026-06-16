import type { MetadataRoute } from "next";
import { absoluteSiteUrl, sitemapRoutes, SITE_LAST_MODIFIED } from "@/app/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE_LAST_MODIFIED);

  return sitemapRoutes.map((route) => ({
    url: absoluteSiteUrl(route.path),
    lastModified,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.priority
  }));
}
