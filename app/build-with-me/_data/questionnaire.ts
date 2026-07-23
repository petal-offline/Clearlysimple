export const projectTypes = [
  {
    value: "mobile-app",
    label: "A mobile app",
    description: "A focused iPhone or Android experience."
  },
  {
    value: "website",
    label: "A website",
    description: "A strong marketing or launch presence."
  },
  {
    value: "web-app",
    label: "A web app or portal",
    description: "A useful workspace for customers or teams."
  },
  {
    value: "app-and-site",
    label: "An app and a website",
    description: "A connected product and launch surface."
  },
  {
    value: "not-sure",
    label: "I am not sure yet",
    description: "We can help shape the right first move."
  }
] as const;

export const audienceOptions = [
  "Customers or clients",
  "My internal team",
  "A community or members",
  "A specific audience I know well",
  "I am still figuring that out"
] as const;

export const featureOptions = [
  "Accounts or profiles",
  "Payments or subscriptions",
  "Bookings or requests",
  "A dashboard or portal",
  "Messages or updates",
  "Photos, video, or uploads",
  "Something else essential"
] as const;

export const materialOptions = [
  "Notes or a rough brief",
  "A brand, logo, or visual direction",
  "Screens or a prototype",
  "An existing app or website",
  "Content, photos, or data",
  "I am starting fresh"
] as const;

export const timelineOptions = [
  "Ready to begin soon",
  "In the next 1–2 months",
  "Later this year",
  "I am exploring for now"
] as const;

export const budgetOptions = [
  { label: "Under $5k", value: 3 },
  { label: "$5k–$10k", value: 8 },
  { label: "$10k–$25k", value: 18 },
  { label: "$25k–$50k", value: 38 },
  { label: "$50k+", value: 60 }
] as const;

export const contactMethods = ["Email", "WhatsApp"] as const;

export type ProjectType = (typeof projectTypes)[number]["value"];

export type QuestionnaireAnswers = {
  projectType: ProjectType | "";
  idea: string;
  audience: string;
  outcome: string;
  features: string[];
  materials: string[];
  timeline: string;
  budgetIndex: number;
  fullName: string;
  email: string;
  company: string;
  contactMethod: (typeof contactMethods)[number];
  consent: boolean;
};

export const initialAnswers: QuestionnaireAnswers = {
  projectType: "",
  idea: "",
  audience: "",
  outcome: "",
  features: [],
  materials: [],
  timeline: "",
  budgetIndex: 2,
  fullName: "",
  email: "",
  company: "",
  contactMethod: "Email",
  consent: false
};

const planningRanges: Record<ProjectType | "not-sure", [number, number]> = {
  "mobile-app": [15, 30],
  website: [4, 9],
  "web-app": [12, 26],
  "app-and-site": [24, 48],
  "not-sure": [8, 22]
};

export function getPlanningEstimate(answers: Pick<QuestionnaireAnswers, "projectType" | "features">) {
  const [baseLow, baseHigh] = planningRanges[answers.projectType || "not-sure"];
  const featureAddition = answers.features.length >= 4 ? 10 : answers.features.length >= 2 ? 5 : 0;
  const low = baseLow + featureAddition;
  const high = baseHigh + featureAddition;

  return {
    low,
    high,
    label: `$${low}k–$${high}k`
  };
}

export const QUESTION_COUNT = 9;
