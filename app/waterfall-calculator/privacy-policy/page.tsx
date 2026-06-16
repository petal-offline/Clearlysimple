import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2, Lock, ShieldCheck } from "lucide-react";
import { absoluteUrl, waterfallSite } from "@/app/waterfall-calculator/_data/site";
import { privacyPolicyJsonLd } from "@/app/waterfall-calculator/_lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Waterfall Calculator Privacy Policy: local-first iOS app, zero developer data collection, no analytics, no tracking, no accounts, no backend, and no financial model transmission.",
  alternates: {
    canonical: absoluteUrl(waterfallSite.privacyRoute)
  },
  openGraph: {
    type: "website",
    url: absoluteUrl(waterfallSite.privacyRoute),
    title: "Waterfall Calculator Privacy Policy",
    description:
      "Waterfall Calculator is a local-first iOS app. The developer does not collect app data, inputs, financial models, saved scenarios, analytics, or tracking data."
  },
  robots: {
    index: true,
    follow: true
  }
};

const collectionRows = [
  ["Contact information", "Not collected by Waterfall Calculator."],
  ["Financial model inputs", "Not collected, not transmitted, and not stored on developer servers."],
  ["Saved scenarios", "Stored locally on the user's device, not collected by the developer."],
  ["Usage analytics", "Not collected. Waterfall Calculator uses no developer analytics."],
  ["Tracking data", "Not collected. Waterfall Calculator does not track users across apps or websites."],
  ["Identifiers", "Not collected by the developer for app analytics or advertising."]
];

const policySections = [
  {
    title: "Waterfall Calculator is 100% local-first",
    body: "Waterfall Calculator is designed so user inputs, waterfall assumptions, saved scenarios, and financial models remain on the user's iPhone. The app does not use a developer-operated backend for calculations, accounts, analytics, or scenario storage."
  },
  {
    title: "Waterfall Calculator collects zero app data",
    body: "The developer does not collect personal information, financial model inputs, saved scenarios, device identifiers, usage analytics, advertising identifiers, or tracking data through Waterfall Calculator."
  },
  {
    title: "Waterfall Calculator transmits no model data to external servers",
    body: "Waterfall Calculator does not transmit user inputs, financial models, waterfall assumptions, saved scenarios, LP/GP outputs, or analytical notes to any external server, including the developer's servers."
  },
  {
    title: "Waterfall Calculator has no accounts, analytics, or tracking",
    body: "Waterfall Calculator does not require user accounts, login profiles, cloud workspaces, analytics SDKs, ad SDKs, tracking SDKs, or cross-app tracking technologies."
  },
  {
    title: "Waterfall Calculator stores scenarios locally",
    body: "Saved scenarios are intended to remain in local app storage on the user's device. Users are responsible for their own device security, backups, sharing choices, and access controls."
  },
  {
    title: "Apple may process App Store purchase information",
    body: "If a user starts a trial or purchases the lifetime unlock, Apple's App Store systems may process transaction information under Apple's own privacy practices. The developer does not receive payment card numbers or Waterfall Calculator model inputs from Apple."
  }
];

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPolicyJsonLd()) }}
    />
  );
}

export default function WaterfallPrivacyPolicyPage() {
  return (
    <article className="bg-background px-5 py-24 text-foreground md:px-8">
      <JsonLd />
      <div className="mx-auto max-w-6xl">
        <a
          href={waterfallSite.route}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-black transition hover:-translate-y-0.5"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to Waterfall Calculator
        </a>

        <header className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.66fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2f7d32]">
              Last updated June 14, 2026
            </p>
            <h1 className="mt-5 max-w-5xl text-balance text-5xl font-black leading-none md:text-7xl">
              Waterfall Calculator Privacy Policy
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-foreground/70">
              This policy explains the privacy posture for Waterfall Calculator,
              an iOS-first private equity waterfall calculator for modeling and
              educational/analytical use.
            </p>
          </div>
          <aside className="rounded-[2rem] bg-[#163300] p-6 text-white">
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
            <p className="mt-8 text-4xl font-black">Zero</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-white/64">
              developer data collection
            </p>
            <p className="mt-5 text-sm font-semibold leading-6 text-white/70">
              No analytics, no tracking, no accounts, no backend, and no
              transmission of Waterfall Calculator model inputs.
            </p>
          </aside>
        </header>

        <section aria-labelledby="app-store-summary" className="mt-12 rounded-[2rem] border border-border bg-white p-6 md:p-8">
          <div className="flex items-start gap-4">
            <Lock className="mt-1 size-7 shrink-0 text-[#2f7d32]" aria-hidden="true" />
            <div>
              <h2 id="app-store-summary" className="text-3xl font-black leading-none">
                Apple App Store privacy summary
              </h2>
              <p className="mt-4 text-base font-semibold leading-7 text-foreground/68">
                For Waterfall Calculator, the developer&apos;s App Store privacy
                declaration is zero data collection. Data Used to Track You:
                none. Data Linked to You: none. Data Not Linked to You: none.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="data-table" className="mt-8 overflow-hidden rounded-[2rem] border border-border bg-white">
          <div className="border-b border-border bg-[#e8f8dc] p-6">
            <h2 id="data-table" className="text-3xl font-black leading-none">
              What data does Waterfall Calculator collect?
            </h2>
          </div>
          <div className="divide-y divide-border">
            {collectionRows.map(([label, status]) => (
              <div key={label} className="grid gap-3 p-5 md:grid-cols-[0.34fr_0.66fr] md:p-6">
                <h3 className="text-lg font-black">{label}</h3>
                <p className="text-base font-semibold leading-7 text-foreground/68">{status}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 grid gap-5">
          {policySections.map((section) => (
            <section key={section.title} aria-labelledby={section.title.toLowerCase().replace(/\s+/g, "-")} className="rounded-[2rem] border border-border bg-white p-6 md:p-8">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 size-6 shrink-0 text-[#2f7d32]" aria-hidden="true" />
                <div>
                  <h2 id={section.title.toLowerCase().replace(/\s+/g, "-")} className="text-2xl font-black leading-tight">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base font-semibold leading-7 text-foreground/68">
                    {section.body}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section aria-labelledby="contact-heading" className="mt-8 rounded-[2rem] bg-[#163300] p-6 text-white md:p-8">
          <h2 id="contact-heading" className="text-3xl font-black leading-none">
            Contact about Waterfall Calculator privacy
          </h2>
          <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-white/72">
            For privacy questions about Waterfall Calculator, contact the developer
            at{" "}
            <a className="font-black text-primary underline-offset-4 hover:underline" href={waterfallSite.supportHref}>
              {waterfallSite.supportEmail}
            </a>
            . Do not send confidential fund data, model inputs, or sensitive
            scenario details by email.
          </p>
        </section>
      </div>
    </article>
  );
}
