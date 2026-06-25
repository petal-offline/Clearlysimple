import type { Metadata } from "next";
import { ArrowLeft, FileText, Gavel, ShieldAlert } from "lucide-react";
import {
  absoluteUrl,
  depositionSeoKeywords,
  depositionSite
} from "@/app/deposition-timer/_data/site";
import { depositionTermsJsonLd } from "@/app/deposition-timer/_lib/schema";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const title = "Terms of Service | Deposition Timer & Objection Log";
  const description =
    "Terms of Service for Deposition Timer & Objection Log, a localized legal tech utility for deposition timing, objection logging, and exportable records.";

  return {
    title,
    description,
    keywords: [
      ...depositionSeoKeywords,
      "Deposition Timer terms",
      "legal tech software terms",
      "localized legal utility terms"
    ],
    alternates: {
      canonical: absoluteUrl(depositionSite.termsRoute)
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(depositionSite.termsRoute),
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

const termSections = [
  {
    title: "Software purpose",
    body: "Deposition Timer & Objection Log is a localized software utility for deposition timekeeping, objection logging, break tracking, and export creation. It is a tool for record organization and does not replace professional legal judgment."
  },
  {
    title: "No legal advice",
    body: "The app, website, timers, labels, exports, and documentation are not legal advice and do not create an attorney-client relationship. Users are responsible for applying court rules, jurisdictional requirements, court orders, stipulations, and professional obligations."
  },
  {
    title: "User responsibility for records",
    body: "Users are responsible for the accuracy of case names, witness names, notes, objection entries, timer controls, exported files, backups, filing choices, and any record shared outside the app."
  },
  {
    title: "Local device security",
    body: "The app is designed for local storage and local AES encryption. Users remain responsible for device access controls, operating system updates, device backups, file-sharing destinations, and any third-party storage chosen after export."
  },
  {
    title: "Lifetime unlock",
    body: "The advertised $49.99 lifetime unlock is a one-time app unlock for supported features. App store payment providers may apply taxes, regional pricing, refund rules, family sharing rules, or purchase policies under their own terms."
  },
  {
    title: "Availability and changes",
    body: "ClearlySimple may update, improve, rename, reprice, suspend, or discontinue features where necessary for maintenance, platform changes, legal compliance, security, or product quality."
  },
  {
    title: "No warranty",
    body: "The software is provided as-is and as-available to the maximum extent permitted by law. ClearlySimple does not warrant uninterrupted operation, perfect accuracy, admissibility of exports, or suitability for a particular matter."
  },
  {
    title: "Limitation of liability",
    body: "To the maximum extent permitted by law, ClearlySimple is not liable for indirect, incidental, special, consequential, exemplary, or punitive damages, including lost claims, lost data, lost profits, or litigation outcomes."
  }
];

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(depositionTermsJsonLd()) }}
    />
  );
}

export default function DepositionTermsPage() {
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
              Deposition Timer & Objection Log Terms of Service
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-[#111111]/68">
              These terms govern use of Deposition Timer & Objection Log, a
              localized legal tech utility for deposition timing, objection
              logging, and exportable session records.
            </p>
          </div>
          <aside className="rounded-md bg-[#111111] p-6 text-white">
            <Gavel className="size-8 text-[#ffb84d]" aria-hidden="true" />
            <p className="mt-8 text-4xl font-black">Utility</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-white/60">
              not legal advice
            </p>
            <p className="mt-5 text-sm font-semibold leading-6 text-white/68">
              The app helps organize deposition timing and objection records.
              Counsel remains responsible for legal judgment and rule compliance.
            </p>
          </aside>
        </header>

        <section aria-labelledby="terms-summary" className="mt-12 rounded-md border border-[#111111]/10 bg-white p-6 md:p-8">
          <div className="flex items-start gap-4">
            <FileText className="mt-1 size-7 shrink-0 text-[#2f6bff]" aria-hidden="true" />
            <div>
              <h2 id="terms-summary" className="text-3xl font-black leading-tight">
                Standard localized software terms
              </h2>
              <p className="mt-4 text-base font-semibold leading-7 text-[#111111]/68">
                Deposition Timer & Objection Log is provided as a local software
                utility. Users control their records, exports, sharing choices,
                and compliance with applicable legal and professional rules.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-5">
          {termSections.map((section) => (
            <section key={section.title} aria-labelledby={section.title.toLowerCase().replace(/\s+/g, "-")} className="rounded-md border border-[#111111]/10 bg-white p-6 md:p-8">
              <div className="flex items-start gap-4">
                {section.title.includes("No ") || section.title.includes("Limitation") ? (
                  <ShieldAlert className="mt-1 size-6 shrink-0 text-[#d33f49]" aria-hidden="true" />
                ) : (
                  <FileText className="mt-1 size-6 shrink-0 text-[#2f6bff]" aria-hidden="true" />
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

        <section aria-labelledby="terms-contact" className="mt-8 rounded-md bg-[#111111] p-6 text-white md:p-8">
          <h2 id="terms-contact" className="text-3xl font-black leading-tight">
            Terms contact
          </h2>
          <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-white/70">
            Questions about these terms can be sent to{" "}
            <a className="font-black text-[#ffb84d] underline-offset-4 hover:underline" href={depositionSite.supportHref}>
              {depositionSite.supportEmail}
            </a>
            . Do not send confidential deposition content, case strategy, or
            privileged materials through support email.
          </p>
        </section>
      </div>
    </article>
  );
}
