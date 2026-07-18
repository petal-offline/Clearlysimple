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
    name: "Deposition Timer",
    status: "Live",
    href: "https://apps.apple.com/us/app/deposition-timer/id6784677621",
    description:
      "Offline legal timer for deposition timekeeping, objection logging, and export-ready session records.",
    summary:
      "A legal timekeeping utility for clear Rule 30 timing, fast objection capture, and local-first records.",
    role: "Legal workflow utility",
    stage: "Live product",
    stack: ["Legal tech", "Mobile UI/UX", "Offline-first", "PDF + CSV export"],
    signal: "Rule 30 workflow",
    accent: "cobalt"
  },
  {
    name: "KeepDM",
    status: "Live",
    href: "https://apps.apple.com/us/app/keepdm-locally-save-chats/id6767604258",
    description:
      "Private, offline access to Instagram message exports, photos, videos, and searchable chat history.",
    summary:
      "A local-first archive viewer that keeps Instagram export data encrypted, searchable, and entirely on-device.",
    role: "Private chat archive",
    stage: "Live product",
    stack: ["Social utility", "Offline-first", "Smart search", "Face ID + Touch ID"],
    signal: "Private archive",
    accent: "ember"
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

export const homeFaqItems = [
  {
    question: "What kind of apps does ClearlySimple build?",
    answer:
      "ClearlySimple builds mobile apps, fintech utilities, consumer products, launch websites, dashboards, automations, and AI-assisted product systems with a focus on fast execution and polished user experience."
  },
  {
    question: "Can I hire Ayush Mishra for mobile app development?",
    answer:
      "Yes. Ayush Mishra is available for app development work through ClearlySimple, especially projects that need React Native, Expo, Next.js, native Kotlin, Swift, Firebase, RevenueCat, and launch-ready product engineering."
  },
  {
    question: "Does ClearlySimple work with international clients?",
    answer:
      "Yes. ClearlySimple supports international projects across time zones with clear scopes, direct communication, fast iterations, and delivery habits suited for founders, operators, and premium clients."
  },
  {
    question: "What makes ClearlySimple different from a typical freelance developer?",
    answer:
      "ClearlySimple combines product strategy, interface design, AI-assisted development workflows, mobile engineering, monetization systems, and launch execution instead of treating development as isolated code delivery."
  },
  {
    question: "Which products has ClearlySimple built?",
    answer:
      "The portfolio currently includes Petal Chan, an offline period tracker, Deposition Timer, a legal timekeeping utility for litigators, and KeepDM, a private offline viewer for Instagram data exports. I have also worked with separate clients on business and SaaS apps."
  }
] as const;

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
