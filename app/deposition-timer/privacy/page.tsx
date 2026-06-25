import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2, CloudOff, Database, LockKeyhole, ShieldCheck } from "lucide-react";
import {
  absoluteUrl,
  depositionSeoKeywords,
  depositionSite
} from "@/app/deposition-timer/_data/site";
import { depositionPrivacyJsonLd } from "@/app/deposition-timer/_lib/schema";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const title = "Privacy Policy | Deposition Timer & Objection Log";
  const description =
    "Privacy Policy for Deposition Timer & Objection Log: 100% offline, local AES encryption, zero cloud telemetry, and attorney work product protection.";

  return {
    title,
    description,
    keywords: [
      ...depositionSeoKeywords,
      "Deposition Timer privacy",
      "offline legal app privacy",
      "attorney work product protection"
    ],
    alternates: {
      canonical: absoluteUrl(depositionSite.privacyRoute)
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(depositionSite.privacyRoute),
      title,
      description,
      siteName: "ClearlySimple"
    },
    twitter: {
      card: "summary",
      title,
      description
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

const policySections = [
  {
    title: "The app is 100% offline by design",
    body: "Deposition Timer & Objection Log does not require an account, cloud workspace, developer backend, or remote sync service to create deposition timers, objection logs, notes, or exports."
  },
  {
    title: "Local AES encryption protects app records",
    body: "Deposition records are designed to stay in local device storage and use local AES encryption for stored matter data. Users remain responsible for device passcodes, device backups, exported files, and files they intentionally share."
  },
  {
    title: "Zero cloud telemetry",
    body: "The app does not send deposition content, objection entries, notes, timers, witness names, case names, device analytics, behavioral events, or advertising identifiers to ClearlySimple cloud systems."
  },
  {
    title: "Attorney Work Product stays under user control",
    body: "Objection notes, litigation strategy notes, and deposition timeline records may contain Attorney Work Product. The app is designed so those materials remain under the user's local control unless the user exports or shares them."
  },
  {
    title: "Exports are user-directed",
    body: "PDF and CSV exports are created only when requested by the user. Once exported, those files are governed by the user's device storage, sharing destination, matter-management system, or email provider."
  },
  {
    title: "Purchases may be handled by app stores",
    body: "If the user purchases the lifetime unlock through Apple, Google, or another app store, the store may process payment and transaction information under its own privacy policies. ClearlySimple does not receive payment card numbers."
  }
];

const dataRows = [
  ["Deposition content", "Not collected by ClearlySimple."],
  ["Objection logs", "Stored locally; not transmitted to developer servers."],
  ["Timer sessions", "Stored locally when saved by the user."],
  ["Usage analytics", "No developer analytics or telemetry collection."],
  ["Cloud accounts", "No ClearlySimple account is required."],
  ["Attorney Work Product", "Protected locally unless the user exports or shares it."]
];

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(depositionPrivacyJsonLd()) }}
    />
  );
}

export default function DepositionPrivacyPage() {
  return (
    <article className="bg-[#f7f9f6] px-5 py-16 text-[#111111] md:px-8 md:py-24">
      <JsonLd />
      <div className="mx-auto max-w-6xl">
        <a
          href={depositionSite.route}
          className="inline-flex h-11 items-center gap-2 rounded-md border border-[#111111]/12 bg-white px-4 text-sm font-black transition hover:-translate-y-0.5"
          aria-label="Back to Deposition Timer landing page"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to app
        </a>

        <header className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.66fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2f6bff]">
              Last updated June 25, 2026
            </p>
            <h1 className="mt-5 max-w-5xl text-balance text-5xl font-black leading-none md:text-7xl">
              Deposition Timer & Objection Log Privacy Policy
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-[#111111]/68">
              This policy explains the privacy posture for a localized legal
              tech utility built for deposition timekeeping, objection logging,
              and exportable records.
            </p>
          </div>
          <aside className="rounded-md bg-[#111111] p-6 text-white">
            <ShieldCheck className="size-8 text-[#2f9e72]" aria-hidden="true" />
            <p className="mt-8 text-4xl font-black">Offline</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-white/60">
              local records by default
            </p>
            <p className="mt-5 text-sm font-semibold leading-6 text-white/68">
              No ClearlySimple cloud telemetry, no developer analytics, no
              account workspace, and no collection of deposition work product.
            </p>
          </aside>
        </header>

        <section aria-labelledby="privacy-summary" className="mt-12 rounded-md border border-[#111111]/10 bg-white p-6 md:p-8">
          <div className="flex items-start gap-4">
            <CloudOff className="mt-1 size-7 shrink-0 text-[#2f6bff]" aria-hidden="true" />
            <div>
              <h2 id="privacy-summary" className="text-3xl font-black leading-tight">
                Summary: no cloud collection of deposition records
              </h2>
              <p className="mt-4 text-base font-semibold leading-7 text-[#111111]/68">
                ClearlySimple does not collect deposition timers, witness names,
                case names, objection notes, PDF exports, CSV exports, or
                Attorney Work Product from the app.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="data-table" className="mt-8 overflow-hidden rounded-md border border-[#111111]/10 bg-white">
          <div className="border-b border-[#111111]/10 bg-[#eef3f5] p-6">
            <h2 id="data-table" className="text-3xl font-black leading-tight">
              What data does the app collect?
            </h2>
          </div>
          <div className="divide-y divide-[#111111]/10">
            {dataRows.map(([label, status]) => (
              <div key={label} className="grid gap-3 p-5 md:grid-cols-[0.34fr_0.66fr] md:p-6">
                <h3 className="text-lg font-black">{label}</h3>
                <p className="text-base font-semibold leading-7 text-[#111111]/68">{status}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 grid gap-5">
          {policySections.map((section) => (
            <section key={section.title} aria-labelledby={section.title.toLowerCase().replace(/\s+/g, "-")} className="rounded-md border border-[#111111]/10 bg-white p-6 md:p-8">
              <div className="flex items-start gap-4">
                {section.title.includes("AES") ? (
                  <LockKeyhole className="mt-1 size-6 shrink-0 text-[#2f9e72]" aria-hidden="true" />
                ) : section.title.includes("Exports") ? (
                  <Database className="mt-1 size-6 shrink-0 text-[#2f6bff]" aria-hidden="true" />
                ) : (
                  <CheckCircle2 className="mt-1 size-6 shrink-0 text-[#2f6bff]" aria-hidden="true" />
                )}
                <div>
                  <h2 id={section.title.toLowerCase().replace(/\s+/g, "-")} className="text-2xl font-black leading-tight">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base font-semibold leading-7 text-[#111111]/68">
                    {section.body}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section aria-labelledby="contact-heading" className="mt-8 rounded-md bg-[#111111] p-6 text-white md:p-8">
          <h2 id="contact-heading" className="text-3xl font-black leading-tight">
            Privacy contact
          </h2>
          <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-white/70">
            Privacy questions can be sent to{" "}
            <a className="font-black text-[#ffb84d] underline-offset-4 hover:underline" href={depositionSite.supportHref}>
              {depositionSite.supportEmail}
            </a>
            . Do not include confidential case information, deposition testimony,
            privileged strategy, or Attorney Work Product in support email.
          </p>
        </section>
      </div>
    </article>
  );
}
