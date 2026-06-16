export const SITE_URL = "https://clearlysimple.apps";

export const SITE_LAST_MODIFIED =
  process.env.NEXT_PUBLIC_SITE_LAST_MODIFIED ?? new Date().toISOString();

export const sitemapRoutes = [
  { path: "/", priority: 1 },
  { path: "/faq", priority: 0.82 },
  { path: "/privacy", priority: 0.35 },
  { path: "/terms", priority: 0.35 },
  { path: "/waterfall-calculator", priority: 0.92 },
  { path: "/waterfall-calculator/faq", priority: 0.78 },
  { path: "/waterfall-calculator/privacy-policy", priority: 0.5 }
] as const;

export const absoluteSiteUrl = (path: string) => {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
};
