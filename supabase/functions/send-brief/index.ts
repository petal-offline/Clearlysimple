const projectTypes = ["mobile-app", "website", "web-app", "app-and-site", "not-sure"] as const;
const audiences = [
  "Customers or clients",
  "My internal team",
  "A community or members",
  "A specific audience I know well",
  "I am still figuring that out"
] as const;
const features = [
  "Accounts or profiles",
  "Payments or subscriptions",
  "Bookings or requests",
  "A dashboard or portal",
  "Messages or updates",
  "Photos, video, or uploads",
  "Something else essential"
] as const;
const materials = [
  "Notes or a rough brief",
  "A brand, logo, or visual direction",
  "Screens or a prototype",
  "An existing app or website",
  "Content, photos, or data",
  "I am starting fresh"
] as const;
const timelines = ["Ready to begin soon", "In the next 1–2 months", "Later this year", "I am exploring for now"] as const;
const budgetOptions = [
  { label: "Under $5k", value: 3 },
  { label: "$5k–$10k", value: 8 },
  { label: "$10k–$25k", value: 18 },
  { label: "$25k–$50k", value: 38 },
  { label: "$50k+", value: 60 }
] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const requestLog = new Map<string, number[]>();
const requestWindowMs = 10 * 60 * 1000;
const requestLimit = 5;

type Answers = {
  projectType: (typeof projectTypes)[number];
  idea: string;
  audience: (typeof audiences)[number];
  outcome: string;
  features: string[];
  materials: string[];
  timeline: (typeof timelines)[number];
  budgetIndex: number;
  fullName: string;
  email: string;
  company: string;
  contactMethod: "Email" | "WhatsApp";
};

function getCorsHeaders(origin: string | null) {
  const allowedOrigins = (Deno.env.get("ALLOWED_ORIGINS") || "https://clearlysimple.app,http://localhost:3000")
    .split(",")
    .map((value) => value.trim());
  const allowedOrigin = origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    Vary: "Origin",
    "Content-Type": "application/json"
  };
}

function response(origin: string | null, body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: getCorsHeaders(origin) });
}

function isAllowedValue(value: unknown, options: readonly string[]): value is string {
  return typeof value === "string" && options.includes(value);
}

function isStringArray(value: unknown, options: readonly string[]): value is string[] {
  return Array.isArray(value) && value.length <= options.length && value.every((item) => isAllowedValue(item, options));
}

function isSafeText(value: unknown, maximumLength: number, required = false): value is string {
  if (typeof value !== "string") return false;
  const trimmed = value.trim();
  return required ? trimmed.length > 0 && trimmed.length <= maximumLength : trimmed.length <= maximumLength;
}

function parseAnswers(value: unknown): Answers | null {
  if (value === null || typeof value !== "object" || Array.isArray(value)) return null;

  const answers = value as Record<string, unknown>;
  if (
    !isAllowedValue(answers.projectType, projectTypes) ||
    !isSafeText(answers.idea, 4_000, true) ||
    !isAllowedValue(answers.audience, audiences) ||
    !isSafeText(answers.outcome, 2_000) ||
    !isStringArray(answers.features, features) ||
    answers.features.length === 0 ||
    !isStringArray(answers.materials, materials) ||
    !isAllowedValue(answers.timeline, timelines) ||
    !Number.isInteger(answers.budgetIndex) ||
    (answers.budgetIndex as number) < 0 ||
    (answers.budgetIndex as number) >= budgetOptions.length ||
    !isSafeText(answers.fullName, 120, true) ||
    typeof answers.email !== "string" ||
    !emailPattern.test(answers.email.trim()) ||
    !isSafeText(answers.company, 160) ||
    !isAllowedValue(answers.contactMethod, ["Email", "WhatsApp"])
  ) {
    return null;
  }

  return {
    projectType: answers.projectType as Answers["projectType"],
    idea: answers.idea.trim(),
    audience: answers.audience as Answers["audience"],
    outcome: answers.outcome.trim(),
    features: [...answers.features],
    materials: [...answers.materials],
    timeline: answers.timeline as Answers["timeline"],
    budgetIndex: answers.budgetIndex as number,
    fullName: answers.fullName.trim(),
    email: answers.email.trim().toLowerCase(),
    company: answers.company.trim(),
    contactMethod: answers.contactMethod as Answers["contactMethod"]
  };
}

function isRateLimited(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const requests = (requestLog.get(ip) || []).filter((timestamp) => now - timestamp < requestWindowMs);

  if (requests.length >= requestLimit) return true;
  requests.push(now);
  requestLog.set(ip, requests);
  return false;
}

function getEstimate(answers: Answers) {
  const baseRanges: Record<Answers["projectType"], [number, number]> = {
    "mobile-app": [15, 30],
    website: [4, 9],
    "web-app": [12, 26],
    "app-and-site": [24, 48],
    "not-sure": [8, 22]
  };
  const [baseLow, baseHigh] = baseRanges[answers.projectType];
  const addition = answers.features.length >= 4 ? 10 : answers.features.length >= 2 ? 5 : 0;
  return { low: baseLow + addition, high: baseHigh + addition };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
    return entities[character];
  });
}

function renderEmail(brief: Answers & { id: string }) {
  const estimate = getEstimate(brief);
  const fields = [
    ["Client", brief.fullName],
    ["Email", brief.email],
    ["Company", brief.company || "Not provided"],
    ["Preferred follow-up", brief.contactMethod],
    ["Project", brief.projectType],
    ["Audience", brief.audience],
    ["Timeline", brief.timeline],
    ["Budget signal", budgetOptions[brief.budgetIndex].label],
    ["Planning range", `$${estimate.low}k–$${estimate.high}k USD`],
    ["Essential needs", brief.features.join(", ")],
    ["Existing material", brief.materials.join(", ") || "Not provided"],
    ["Desired outcome", brief.outcome || "Not provided"],
    ["Idea", brief.idea]
  ];
  const rows = fields
    .map(([label, value]) => `<tr><td style="padding:8px 12px;border:1px solid #d8d2c8;font-weight:700">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #d8d2c8">${escapeHtml(value)}</td></tr>`)
    .join("");

  return `<main style="font-family:Arial,sans-serif;color:#080806"><h1>New ClearlySimple project brief</h1><p>Brief ID: ${escapeHtml(brief.id)}</p><table style="border-collapse:collapse">${rows}</table></main>`;
}

async function updateNotificationStatus(supabaseUrl: string, serviceRoleKey: string, id: string, status: "sent" | "pending" | "failed") {
  await fetch(`${supabaseUrl}/rest/v1/project_briefs?id=eq.${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ notification_status: status })
  }).catch(() => undefined);
}

Deno.serve(async (request) => {
  const origin = request.headers.get("origin");
  if (request.method === "OPTIONS") return new Response("ok", { headers: getCorsHeaders(origin) });
  if (request.method !== "POST") return response(origin, { message: "Method not allowed." }, 405);

  const allowedOrigins = (Deno.env.get("ALLOWED_ORIGINS") || "https://clearlysimple.app,http://localhost:3000")
    .split(",")
    .map((value) => value.trim());
  if (origin && !allowedOrigins.includes(origin)) return response(origin, { message: "This submission came from an unexpected site." }, 403);
  if (isRateLimited(request)) return response(origin, { message: "Please wait a moment before trying again." }, 429);

  let body: { answers?: unknown; website?: unknown };
  try {
    body = await request.json();
  } catch {
    return response(origin, { message: "We could not read this brief. Please try again." }, 400);
  }

  if (typeof body.website === "string" && body.website.trim()) return response(origin, { message: "Your brief has been received." });

  const answers = parseAnswers(body.answers);
  if (!answers) return response(origin, { message: "Please complete the required details before sending your brief." }, 400);

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) return response(origin, { message: "Brief delivery is not configured yet." }, 503);

  const estimate = getEstimate(answers);
  const storeResponse = await fetch(`${supabaseUrl}/rest/v1/project_briefs`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation"
    },
    body: JSON.stringify({
      full_name: answers.fullName,
      email: answers.email,
      company: answers.company || null,
      contact_method: answers.contactMethod,
      project_type: answers.projectType,
      idea: answers.idea,
      audience: answers.audience,
      outcome: answers.outcome || null,
      features: answers.features,
      materials: answers.materials,
      timeline: answers.timeline,
      budget_index: answers.budgetIndex,
      budget_label: budgetOptions[answers.budgetIndex].label,
      estimate_low_k: estimate.low,
      estimate_high_k: estimate.high,
      consented_at: new Date().toISOString(),
      notification_status: "pending"
    })
  });

  if (!storeResponse.ok) return response(origin, { message: "We could not save your brief right now. Please try again in a moment." }, 503);

  const stored = (await storeResponse.json()) as Array<{ id: string }>;
  const id = stored[0]?.id;
  if (!id) return response(origin, { message: "We could not save your brief right now. Please try again in a moment." }, 503);

  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  const from = Deno.env.get("RESEND_FROM_EMAIL");
  const to = Deno.env.get("BRIEF_NOTIFICATION_EMAIL") || "clearlysimple.apps@gmail.com";
  let notificationStatus: "sent" | "pending" | "failed" = "pending";

  if (resendApiKey && from) {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `project-brief/${id}`
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: answers.email,
        subject: `New brief: ${answers.fullName} - ${answers.projectType}`,
        html: renderEmail({ ...answers, id })
      })
    });
    notificationStatus = emailResponse.ok ? "sent" : "failed";
  }

  await updateNotificationStatus(supabaseUrl, serviceRoleKey, id, notificationStatus);
  return response(origin, { message: "Your brief has been safely received. We will be in touch soon." });
});
