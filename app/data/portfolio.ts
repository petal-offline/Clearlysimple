export type PortfolioApp = {
  name: string;
  status: string;
  href?: string;
  description: string;
  summary: string;
  role: string;
  stage: string;
  stack: string[];
  signal: string;
  accent: "signal" | "cobalt" | "ember";
};

export const portfolioApps: PortfolioApp[] = [
  {
    name: "Petal Chan",
    status: "Live",
    href: "https://petalchan.com",
    description:
      "Offline period tracking for private cycle logging, clean mobile use, and fast daily check-ins.",
    summary:
      "A privacy-first period tracker built as an offline mobile utility with polished UX and subscription-ready systems.",
    role: "Offline wellness utility",
    stage: "Live product",
    stack: ["Period tracker", "Mobile UI/UX", "Antigravity + Codex", "Figma + RevenueCat"],
    signal: "Private utility",
    accent: "signal"
  },
  {
    name: "Waterfall Calculator",
    status: "In Development / Coming Soon",
    href: "/waterfall-calculator",
    description:
      "Finance calculator for clearer waterfall modeling, structured inputs, and reliable decision support.",
    summary:
      "A focused finance utility built for clean computation, high-trust interaction, and scalable release planning.",
    role: "Finance utility architecture",
    stage: "Coming soon",
    stack: ["Finance", "Mobile UI/UX", "Codex + Antigravity", "Figma + RevenueCat"],
    signal: "Build pipeline",
    accent: "cobalt"
  }
];

export const aiStack = [
  "Codex",
  "Antigravity",
  "Google Build Studio",
  "Perplexity",
  "Figma",
  "Mobbin",
  "Firebase",
  "GitHub",
  "RevenueCat",
  "Stable Diffusion"
];

export const serviceSignals = [
  "AI-integrated app development",
  "Mobile MVP execution",
  "Firebase-backed architecture",
  "Subscription app systems",
  "Launch-ready product polish",
  "Enterprise-grade delivery habits"
];

export type PriorityRegion = {
  name: string;
  mapShape:
    | "california"
    | "new-york"
    | "texas"
    | "london"
    | "europe"
    | "sydney"
    | "melbourne";
};

export const priorityRegions: PriorityRegion[] = [
  { name: "California", mapShape: "california" },
  { name: "New York", mapShape: "new-york" },
  { name: "Texas", mapShape: "texas" },
  { name: "London", mapShape: "london" },
  { name: "Europe", mapShape: "europe" },
  { name: "Sydney", mapShape: "sydney" },
  { name: "Melbourne", mapShape: "melbourne" }
];
