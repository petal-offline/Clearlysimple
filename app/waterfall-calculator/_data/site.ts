export const waterfallSite = {
  name: "Waterfall Calculator",
  slug: "waterfall-calculator",
  siteUrl: "https://clearlysimple.app",
  route: "/waterfall-calculator",
  faqRoute: "/waterfall-calculator/faq",
  privacyRoute: "/waterfall-calculator/privacy-policy",
  appStoreUrl: "/waterfall-calculator/#download",
  supportEmail: "support@clearlysimple.app",
  supportHref:
    "mailto:support@clearlysimple.app?subject=Waterfall%20Calculator%20support",
  developerName: "clearlysimple.app",
  developerUrl: "https://clearlysimple.app",
  petalChanName: "petalchan.com",
  petalChanUrl: "https://petalchan.com",
  tagline: "Private equity waterfall math, without the spreadsheet drag.",
  description:
    "Waterfall Calculator is an iOS-first private equity waterfall calculator for standard whole-fund LP-first waterfall modeling, built for local-first scenario work without spreadsheets or cloud tools.",
  image: "/apps/waterfall-calculator/finance-desk.webp"
} as const;

export const waterfallSeoKeywords = [
  "Waterfall Calculator",
  "private equity waterfall calculator",
  "LP GP waterfall calculator",
  "whole-fund waterfall calculator",
  "LP-first waterfall",
  "preferred return calculator",
  "GP catch-up calculator",
  "carried interest calculator",
  "carry calculator",
  "private equity distribution model",
  "fund economics iOS app"
];

export const waterfallNavItems = [
  { label: "App", href: "#app" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Privacy", href: "#privacy" },
  { label: "FAQ", href: waterfallSite.faqRoute }
] as const;

export const absoluteUrl = (path: string) => {
  if (path.startsWith("http")) return path;
  return `${waterfallSite.siteUrl}${path}`;
};
