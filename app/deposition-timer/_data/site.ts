import { SITE_URL } from "@/app/seo";

export const depositionSite = {
  name: "Deposition Timer & Objection Log",
  shortName: "Deposition Timer",
  slug: "deposition-timer",
  route: "/deposition-timer",
  privacyRoute: "/deposition-timer/privacy",
  termsRoute: "/deposition-timer/terms",
  siteUrl: SITE_URL,
  supportEmail: "support@clearlysimple.app",
  supportHref:
    "mailto:support@clearlysimple.app?subject=Deposition%20Timer%20support",
  iosDownloadUrl: "/deposition-timer/#pricing",
  androidDownloadUrl: "/deposition-timer/#pricing",
  price: "49.99",
  priceCurrency: "USD",
  tagline:
    "Track FRCP 30 deposition time, objections, breaks, and exports without a cloud account.",
  description:
    "Deposition Timer & Objection Log is an offline iPad legal tech utility for litigators who need a Deposition Timer App, FRCP 30 7-Hour Rule Tracker, Litigation Stopwatch, and Legal Objection Log in one clean workflow."
} as const;

export const depositionSeoKeywords = [
  "Deposition Timer App",
  "FRCP 30 7-Hour Rule Tracker",
  "Litigation Stopwatch",
  "Legal Objection Log",
  "deposition timer",
  "deposition stopwatch app",
  "Rule 30 deposition timer",
  "deposition objection log",
  "trial record app",
  "iPad deposition timer",
  "legal timer app",
  "attorney work product app"
];

export const depositionFaqItems = [
  {
    question: "What is a Deposition Timer App?",
    answer:
      "A Deposition Timer App helps litigators track on-record deposition time, pauses, breaks, objections, and exportable session records from one focused legal timer."
  },
  {
    question: "How does it support the FRCP 30 7-Hour Rule?",
    answer:
      "The app is built around tracking elapsed and remaining deposition time against the seven-hour Rule 30 limit so counsel can monitor the record without mental math."
  },
  {
    question: "Can objections be logged during testimony?",
    answer:
      "Yes. The Legal Objection Log is designed for fast issue tagging, time-stamped entries, and exportable notes for later trial preparation."
  },
  {
    question: "Does the app send attorney work product to the cloud?",
    answer:
      "No. The privacy posture is offline-first, with local storage and no developer cloud telemetry for deposition records."
  }
];

export const absoluteUrl = (path: string) => {
  if (path.startsWith("http")) return path;
  return `${depositionSite.siteUrl}${path}`;
};
