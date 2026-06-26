import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Clock3,
  CloudOff,
  FileCheck2,
  FileDown,
  FileLock2,
  Gavel,
  KeyRound,
  LockKeyhole,
  MessageSquareWarning,
  Scale,
  ShieldCheck,
  TimerReset,
  WifiOff
} from "lucide-react";
import { AppPreview } from "@/app/deposition-timer/_components/app-preview";
import {
  DepositionAnimations,
  ScrollProgress
} from "@/app/deposition-timer/_components/deposition-animations";
import { DepositionHeader } from "@/app/deposition-timer/_components/deposition-header";
import { HeroReveal, Reveal } from "@/app/deposition-timer/_components/reveal";
import {
  absoluteUrl,
  depositionFaqItems,
  depositionSeoKeywords,
  depositionSite
} from "@/app/deposition-timer/_data/site";
import {
  depositionFaqJsonLd,
  depositionSoftwareApplicationJsonLd,
  depositionWebPageJsonLd
} from "@/app/deposition-timer/_lib/schema";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const title =
    "Deposition Timer App | FRCP 30 7-Hour Rule Tracker & Objection Log";
  const description =
    "Deposition Timer & Objection Log helps litigators track FRCP 30 seven-hour deposition time, log objections, and export protected PDF/CSV records offline.";

  return {
    title,
    description,
    applicationName: depositionSite.name,
    keywords: depositionSeoKeywords,
    alternates: {
      canonical: absoluteUrl(depositionSite.route)
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(depositionSite.route),
      title,
      description,
      siteName: "ClearlySimple",
      locale: "en_US"
    },
    twitter: {
      card: "summary",
      title,
      description
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    category: "legal technology"
  };
}

const featureCards: Array<{
  title: string;
  body: string;
  icon: LucideIcon;
}> = [
  {
    title: "Triple-Clock Tracking",
    body: "Track elapsed, remaining, and on-record time in one Litigation Stopwatch designed around the FRCP 30 7-Hour Rule.",
    icon: Clock3
  },
  {
    title: "Instant Objection Logging",
    body: "Add time-stamped form, privilege, scope, foundation, and custom objections without losing the rhythm of testimony.",
    icon: MessageSquareWarning
  },
  {
    title: "Immutable PDF/CSV Exports",
    body: "Generate export-ready deposition records that preserve the session timeline, objections, pauses, and notes for review.",
    icon: FileLock2
  }
];

const clockStack = [
  ["Testimony clock", "Only on-record time contributes to the seven-hour deposition limit."],
  ["Pause ledger", "Breaks and off-record conferences stay visible without contaminating the active clock."],
  ["Matter summary", "Witness, party role, case caption, session date, and operator notes remain attached to the record."],
  ["Review export", "PDF and CSV outputs keep time, notes, and objection categories aligned for litigation support."]
];

const trustCards: Array<{
  title: string;
  body: string;
  icon: LucideIcon;
}> = [
  {
    title: "100% offline",
    body: "No account, backend workspace, cloud sync, or remote matter database is required.",
    icon: WifiOff
  },
  {
    title: "Local AES encryption",
    body: "Saved deposition records are designed to remain encrypted in local device storage.",
    icon: KeyRound
  },
  {
    title: "Zero cloud telemetry",
    body: "No developer analytics pipeline receives deposition content, notes, timers, or objection logs.",
    icon: CloudOff
  },
  {
    title: "Attorney Work Product aware",
    body: "Objection notes and case strategy stay under user control unless intentionally exported.",
    icon: ShieldCheck
  }
];

const pricingPerks: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Rule 30 clock", icon: TimerReset },
  { label: "Objection log", icon: Gavel },
  { label: "Protected export", icon: FileCheck2 }
];

const exportRows = [
  ["Timestamped event chain", "Every objection, pause, resume, and off-record event is tied to session time."],
  ["PDF review packet", "Create a clean deposition summary for case teams, partners, and trial preparation."],
  ["CSV litigation support", "Export structured log data for matter databases, support teams, or internal analysis."]
];

const appleLogo = "/apps/deposition-timer/apple-logo-white.svg";

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          depositionSoftwareApplicationJsonLd(),
          depositionWebPageJsonLd(),
          depositionFaqJsonLd()
        ])
      }}
    />
  );
}

function DownloadButtons({ surface }: { surface: "hero" | "pricing" }) {
  const baseClass =
    "inline-flex h-12 items-center justify-center gap-3 rounded-md px-5 text-sm font-black transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2b84b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a0f] md:h-14 md:px-6 md:text-base";

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={depositionSite.iosDownloadUrl}
        className={`${baseClass} bg-[#f2b84b] text-[#070a0f] hover:bg-white`}
        aria-label={`Download ${depositionSite.name} on iOS from the ${surface} section`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={appleLogo} alt="" className="size-5 object-contain" aria-hidden="true" />
        Download on iOS
      </a>
    </div>
  );
}

export default function DepositionTimerPage() {
  return (
    <article id="top" className="overflow-x-hidden bg-[#070a0f] text-white">
      <JsonLd />
      <ScrollProgress />
      <DepositionAnimations />
      <DepositionHeader />

      <section
        aria-label="Deposition Timer & Objection Log hero"
        className="relative isolate overflow-hidden px-5 pb-8 pt-8 md:px-8 md:pb-10"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[#070a0f]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />
        <div className="pointer-events-none absolute bottom-[-4rem] right-[-20rem] z-0 hidden w-[46rem] max-w-[54vw] opacity-90 lg:block xl:right-[-13rem]">
          <AppPreview />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-7xl flex-col justify-between">
          <div className="max-w-3xl pt-5 md:pt-10">
            <HeroReveal>
              <p className="inline-flex rounded-md border border-white/14 bg-white/[0.08] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#f2b84b] backdrop-blur">
                Tactical deposition timekeeping for litigators
              </p>
            </HeroReveal>
            <HeroReveal>
              <h1 className="mt-6 max-w-3xl text-balance text-5xl font-black leading-[0.92] tracking-normal sm:text-6xl md:text-7xl lg:text-8xl">
                Deposition Timer App for every Rule 30 minute.
              </h1>
            </HeroReveal>
            <HeroReveal>
              <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white/76 md:text-2xl md:leading-9">
                Deposition Timer & Objection Log is a litigation stopwatch, FRCP
                30 7-Hour Rule Tracker, and Legal Objection Log for counsel who
                cannot afford a fuzzy record.
              </p>
              <p className="mt-4 max-w-2xl text-sm font-semibold leading-6 text-white/58 md:text-base md:leading-7">
                Track on-record testimony, pause off-record conferences, log
                objections in seconds, and export protected PDF/CSV records from
                a 100% offline iPad workflow.
              </p>
            </HeroReveal>
          </div>

          <HeroReveal>
            <div className="grid max-w-3xl gap-6 border-t border-white/12 pt-5 lg:items-center">
              <DownloadButtons surface="hero" />
            </div>
          </HeroReveal>
        </div>

        <div className="relative z-10 mx-auto mt-8 max-w-3xl lg:hidden">
          <AppPreview />
        </div>
      </section>

      <section id="value" aria-labelledby="value-prop" className="border-y border-white/10 bg-[#0d131c] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#34d399]">
              Timekeeping with consequences
            </p>
            <h2 id="value-prop" className="mt-5 max-w-4xl text-balance text-4xl font-black leading-none md:text-6xl">
              Stop guessing your elapsed time. Protect your trial record.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="grid gap-4 text-base font-semibold leading-7 text-white/64">
              <p>
                The seven-hour deposition limit is simple until breaks,
                off-record conferences, instructions not to answer, and repeated
                objections start competing for attention.
              </p>
              <p>
                This FRCP 30 7-Hour Rule Tracker gives counsel a clean
                deposition clock, a fast Legal Objection Log, and exportable
                records that make the timeline easier to review after the
                witness leaves.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="features" aria-labelledby="features-heading" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f85959]">
                Core deposition workflow
              </p>
              <h2 id="features-heading" className="mt-5 text-balance text-4xl font-black leading-none md:text-6xl">
                A Litigation Stopwatch that understands the record.
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {featureCards.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={index * 0.04}>
                  <article className="h-full rounded-md border border-white/10 bg-white/[0.055] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur">
                    <Icon className="size-7 text-[#f2b84b]" aria-hidden="true" />
                    <h3 className="mt-8 text-2xl font-black leading-tight">{feature.title}</h3>
                    <p className="mt-4 text-sm font-semibold leading-6 text-white/62">
                      {feature.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="rule-heading" className="border-y border-white/10 bg-[#101722] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f2b84b]">
              FRCP 30 command center
            </p>
            <h2 id="rule-heading" className="mt-5 text-balance text-4xl font-black leading-none md:text-6xl">
              Built around the seven-hour deposition limit.
            </h2>
            <p className="mt-6 text-base font-semibold leading-7 text-white/64">
              Counsel should not have to reconstruct the deposition clock from
              memory. The app separates active testimony from pauses and breaks
              so elapsed time stays visible throughout the session.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {clockStack.map(([title, body], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <article className="rounded-md border border-white/10 bg-[#070a0f] p-6">
                  <p className="text-sm font-black text-[#34d399]">0{index + 1}</p>
                  <h3 className="mt-5 text-2xl font-black">{title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/60">
                    {body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="exports-heading" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f85959]">
              Export-ready records
            </p>
            <h2 id="exports-heading" className="mt-5 text-balance text-4xl font-black leading-none md:text-6xl">
              Preserve what happened, when it happened.
            </h2>
            <p className="mt-6 text-base font-semibold leading-7 text-white/64">
              Objection events, time-control actions, and matter notes are kept
              in a structured event chain so the record can be reviewed without
              reverse-engineering the deposition.
            </p>
          </Reveal>
          <div className="grid gap-4">
            {exportRows.map(([title, body], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <article className="grid gap-4 rounded-md border border-white/10 bg-white/[0.055] p-6 sm:grid-cols-[auto_1fr] sm:items-start">
                  <FileDown className="size-6 text-[#f2b84b]" aria-hidden="true" />
                  <div>
                    <h3 className="text-2xl font-black">{title}</h3>
                    <p className="mt-3 text-sm font-semibold leading-6 text-white/62">{body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="privacy-heading" className="border-y border-white/10 bg-[#0d131c] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#34d399]">
              Attorney work product posture
            </p>
            <h2 id="privacy-heading" className="mt-5 text-balance text-4xl font-black leading-none md:text-6xl">
              Confidential deposition notes stay local.
            </h2>
            <p className="mt-6 text-base font-semibold leading-7 text-white/64">
              Deposition Timer & Objection Log is designed as a localized legal
              tech utility. No cloud telemetry, no developer analytics, and no
              account workspace are required for deposition records.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={index * 0.04}>
                  <article className="rounded-md border border-white/10 bg-[#070a0f] p-6">
                    <Icon className="size-6 text-[#34d399]" aria-hidden="true" />
                    <h3 className="mt-6 text-xl font-black">{card.title}</h3>
                    <p className="mt-3 text-sm font-semibold leading-6 text-white/60">{card.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pricing" aria-labelledby="pricing-heading" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f2b84b]">
              Lifetime unlock
            </p>
            <h2 id="pricing-heading" className="mt-5 text-balance text-4xl font-black leading-none md:text-6xl">
              Lifetime unlock. No SaaS fees.
            </h2>
            <p className="mt-6 text-base font-semibold leading-7 text-white/64">
              Unlock the deposition timer, objection log, protected exports, and
              local case records with a one-time purchase instead of recurring
              seat licenses.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <aside className="rounded-md border border-[#f2b84b]/28 bg-[#f2b84b] p-6 text-[#070a0f] shadow-[0_28px_100px_rgba(242,184,75,0.16)] md:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#070a0f]/58">
                    Lifetime Unlock
                  </p>
                  <p className="mt-4 text-6xl font-black tracking-normal">$49.99</p>
                  <p className="mt-3 max-w-xl text-sm font-bold leading-6 text-[#070a0f]/68">
                    No subscriptions, no SaaS invoices, no per-matter cloud
                    workspace, and no recurring litigation support platform fee.
                  </p>
                </div>
                <Scale className="size-10 text-[#070a0f]" aria-hidden="true" />
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {pricingPerks.map(({ label, icon: Icon }) => (
                  <div key={label} className="rounded-md border border-[#070a0f]/18 bg-[#070a0f]/8 p-4">
                    <Icon className="size-5 text-[#070a0f]" aria-hidden="true" />
                    <p className="mt-4 text-sm font-black">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-md bg-[#070a0f] p-4">
                <DownloadButtons surface="pricing" />
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="border-t border-white/10 bg-[#101722] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#34d399]">
                Questions litigators ask
              </p>
              <h2 id="faq-heading" className="mt-5 text-balance text-4xl font-black leading-none md:text-6xl">
                Deposition timer questions, answered plainly.
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {depositionFaqItems.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.035}>
                <article className="rounded-md border border-white/10 bg-[#070a0f] p-6">
                  <LockKeyhole className="size-5 text-[#34d399]" aria-hidden="true" />
                  <h3 className="mt-6 text-xl font-black leading-7">{item.question}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/60">
                    {item.answer}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <a
              href={depositionSite.privacyRoute}
              className="mt-8 inline-flex h-12 items-center justify-center gap-3 rounded-md border border-white/12 bg-white/[0.08] px-5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2b84b]"
              aria-label="Read the Deposition Timer privacy policy"
            >
              Read the offline privacy posture
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
