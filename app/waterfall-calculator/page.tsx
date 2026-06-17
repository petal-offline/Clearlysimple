import type { Metadata } from "next";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  BadgeDollarSign,
  BookOpen,
  CheckCircle2,
  CloudOff,
  Database,
  Gauge,
  Layers3,
  Lock,
  ShieldCheck,
  Smartphone,
  TableProperties
} from "lucide-react";
import { HeroReveal, Reveal } from "@/app/waterfall-calculator/_components/reveal";
import {
  ScrollProgress,
  WaterfallAnimations
} from "@/app/waterfall-calculator/_components/waterfall-animations";
import { AppPreview } from "@/app/waterfall-calculator/_components/app-preview";
import { WaterfallHeader } from "@/app/waterfall-calculator/_components/waterfall-header";
import { faqGroups } from "@/app/waterfall-calculator/_data/faq";
import {
  absoluteUrl,
  waterfallSeoKeywords,
  waterfallSite
} from "@/app/waterfall-calculator/_data/site";
import {
  softwareApplicationJsonLd,
  waterfallProductFaqJsonLd,
  waterfallProductWebPageJsonLd
} from "@/app/waterfall-calculator/_lib/schema";

export const metadata: Metadata = {
  title: "Waterfall Calculator | Private Equity Waterfall Math On iOS",
  description:
    "Waterfall Calculator is an iOS-first private equity waterfall calculator for standard whole-fund LP-first modeling, local-first privacy, and fast LP/GP distribution review.",
  keywords: waterfallSeoKeywords,
  alternates: {
    canonical: absoluteUrl(waterfallSite.route)
  },
  openGraph: {
    type: "website",
    url: absoluteUrl(waterfallSite.route),
    title: "Waterfall Calculator | Private Equity Waterfall Math On iOS",
    description: waterfallSite.description,
    siteName: "ClearlySimple",
    images: [
      {
        url: waterfallSite.image,
        width: 1600,
        height: 1067,
        alt: "Financial desk used to represent private equity waterfall modeling"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterfall Calculator",
    description: waterfallSite.tagline,
    images: [waterfallSite.image]
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
  }
};

const tierCards = [
  {
    title: "Return of capital",
    body: "Model proceeds returning contributed capital before profit sharing begins.",
    icon: Database
  },
  {
    title: "Preferred return",
    body: "Apply the LP preference tier before catch-up and residual split economics.",
    icon: Gauge
  },
  {
    title: "GP catch-up",
    body: "Show the GP catch-up tier separately so the modeled sequence is easier to explain.",
    icon: Layers3
  },
  {
    title: "Residual split",
    body: "Allocate remaining proceeds between LP and GP based on the carry assumption.",
    icon: TableProperties
  }
];

const metricCards = [
  ["Total profit", "See the modeled profit pool before split economics."],
  ["LP net", "Review LP distributions across applicable tiers."],
  ["GP net", "Review GP economics from catch-up and residual split."],
  ["Effective carry", "Scan how GP economics compare with modeled profit."],
  ["MOIC", "Compare proceeds with invested capital in one summary metric."],
  ["USA/EUR terms", "Switch between Carried Interest and Carry language."]
];

const audienceCards = [
  ["Fund managers", "Fast scenario checks during fund economics discussions."],
  ["Sponsors", "Cleaner LP/GP distribution review before preparing materials."],
  ["Analysts", "A focused model surface without workbook setup."],
  ["Investors", "Plain-language tier outputs for analytical review."]
];

const boundaryCards = [
  "For modeling and educational/analytical use.",
  "Not legal, tax, accounting, or investment advice.",
  "Not fund administration software.",
  "No claims for clawbacks or deal-by-deal waterfalls."
];

const faqPreview = faqGroups.flatMap((group) => group.items).slice(0, 6);

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          softwareApplicationJsonLd(),
          waterfallProductWebPageJsonLd(),
          waterfallProductFaqJsonLd()
        ])
      }}
    />
  );
}

export default function WaterfallCalculatorPage() {
  return (
    <article id="top" className="overflow-x-hidden bg-background text-foreground">
      <JsonLd />
      <link rel="preload" as="image" href={waterfallSite.image} fetchPriority="high" />
      <ScrollProgress />
      <WaterfallAnimations />
      <WaterfallHeader />

      <section
        aria-label="Waterfall Calculator hero"
        className="waterfall-hero-bg relative isolate min-h-[82svh] overflow-hidden bg-[#163300] text-white"
        style={{ "--waterfall-hero-image": `url(${waterfallSite.image})` } as CSSProperties}
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(22,51,0,0.95),rgba(22,51,0,0.78)_45%,rgba(22,51,0,0.36))]" />
        <div className="mx-auto grid min-h-[calc(82svh-4rem)] max-w-7xl content-between px-5 pb-6 md:px-8">
          <div className="max-w-5xl pt-6 md:pt-10">
            <HeroReveal>
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary backdrop-blur-md">
                iOS-first private equity modeling
              </p>
            </HeroReveal>
            <HeroReveal delay={0.1}>
              <h1 className="mt-6 max-w-5xl text-balance text-5xl font-black leading-[0.92] tracking-normal sm:text-6xl md:text-[5.8rem]">
                Waterfall Calculator
              </h1>
            </HeroReveal>
            <HeroReveal delay={0.18}>
              <p className="mt-5 max-w-3xl text-balance text-xl font-bold leading-8 text-white/84 md:text-2xl md:leading-9">
                Private equity waterfall math, without the spreadsheet drag.
              </p>
              <p className="mt-4 max-w-3xl text-sm font-semibold leading-6 text-white/72 md:text-base md:leading-7">
                Model a standard whole-fund LP-first waterfall with return of capital,
                preferred return, GP catch-up, residual split, summary metrics, and
                USA/EUR terminology. Built for modeling and educational/analytical use.
              </p>
            </HeroReveal>
          </div>

          <HeroReveal delay={0.28}>
            <div className="flex flex-col gap-4 border-t border-white/20 pt-5 sm:flex-row sm:items-center">
              <a
                href={waterfallSite.appStoreUrl}
                className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-primary px-6 text-base font-black text-[#163300] transition hover:-translate-y-1 hover:bg-white"
              >
                Download for iOS
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
              <a
                href="#capabilities"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/24 bg-white/10 px-6 text-base font-black text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/16"
              >
                Capabilities
              </a>
            </div>
          </HeroReveal>
        </div>
      </section>

      <section id="app" aria-labelledby="app-heading" className="px-5 py-14 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2f7d32]">
              App promotion preview
            </p>
            <h2 id="app-heading" className="mt-5 text-balance text-4xl font-black leading-none md:text-6xl">
              What does the Waterfall Calculator iOS app help users review?
            </h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-foreground/70">
              The website is here to promote the app, not duplicate the
              calculator in a browser. Waterfall Calculator gives users an iOS
              surface for standard whole-fund LP-first scenario review, saved
              cases, local-first privacy, and quick LP/GP economics scanning.
            </p>
            <p className="mt-6 max-w-xl text-sm font-black uppercase tracking-[0.14em] text-foreground/50">
              From the developers of{" "}
              <a
                href={waterfallSite.petalChanUrl}
                className="text-[#2f7d32] underline-offset-4 hover:underline"
              >
                {waterfallSite.petalChanName}
              </a>
              {" "}and developed by{" "}
              <a
                href={waterfallSite.developerUrl}
                className="text-[#2f7d32] underline-offset-4 hover:underline"
              >
                {waterfallSite.developerName}
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <AppPreview />
          </Reveal>
        </div>
      </section>

      <section id="math" aria-labelledby="waterfall-heading" className="bg-[#163300] px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">
              LP-first sequence
            </p>
            <h2 id="waterfall-heading" className="mt-5 max-w-4xl text-balance text-4xl font-black leading-none md:text-6xl">
              What is an LP-first whole-fund waterfall?
            </h2>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white/72">
              It is a fund-level distribution model where capital is returned and
              the LP preference is addressed before GP catch-up and residual split
              economics are modeled. Waterfall Calculator keeps that sequence visible.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {tierCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={index * 0.04}>
                  <article className="h-full rounded-[2rem] border border-white/12 bg-white/[0.07] p-6 backdrop-blur">
                    <Icon className="size-7 text-primary" aria-hidden="true" />
                    <h3 className="mt-8 text-2xl font-black leading-none">{card.title}</h3>
                    <p className="mt-4 text-sm font-semibold leading-6 text-white/68">{card.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="capabilities" aria-labelledby="metrics-heading" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 id="metrics-heading" className="max-w-4xl text-balance text-4xl font-black leading-none md:text-6xl">
              What can Waterfall Calculator calculate?
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metricCards.map(([title, body], index) => (
              <Reveal key={title} delay={index * 0.035}>
                <article className="h-full rounded-[1.75rem] border border-border bg-white p-6 shadow-[0_18px_45px_rgba(14,15,12,0.06)]">
                  <CheckCircle2 className="size-6 text-[#2f7d32]" aria-hidden="true" />
                  <h3 className="mt-7 text-2xl font-black">{title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-foreground/64">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="privacy" aria-labelledby="privacy-heading" className="bg-white px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2f7d32]">
              Local-first privacy
            </p>
            <h2 id="privacy-heading" className="mt-5 text-balance text-4xl font-black leading-none md:text-6xl">
              How does Waterfall Calculator protect private fund inputs?
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-foreground/70">
              The app is designed with no backend, no accounts, no analytics, and
              no tracking. Inputs, scenarios, and waterfall models stay local to
              the device rather than being transmitted to external servers.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <aside className="grid gap-4 rounded-[2rem] border border-border bg-[#f8faf2] p-5">
              {[
                ["No accounts", "No sign-in, no user profile, no cloud workspace."],
                ["No analytics", "No event tracking or behavioral analytics collection."],
                ["No backend", "No developer server receives model inputs or scenarios."],
                ["Local scenarios", "Saved cases are designed to remain on the iPhone."]
              ].map(([title, body]) => (
                <div key={title} className="flex gap-4 rounded-3xl bg-white p-5">
                  <ShieldCheck className="mt-1 size-6 shrink-0 text-[#2f7d32]" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-black">{title}</h3>
                    <p className="mt-1 text-sm font-semibold leading-6 text-foreground/64">{body}</p>
                  </div>
                </div>
              ))}
            </aside>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="audience-heading" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 id="audience-heading" className="max-w-4xl text-balance text-4xl font-black leading-none md:text-6xl">
              Who is Waterfall Calculator for?
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {audienceCards.map(([title, body], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <article className="h-full rounded-[1.75rem] border border-border bg-white p-6">
                  <Smartphone className="size-6 text-[#2f7d32]" aria-hidden="true" />
                  <h3 className="mt-8 text-2xl font-black">{title}</h3>
                  <p className="mt-4 text-sm font-semibold leading-6 text-foreground/64">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="pricing-heading" className="bg-[#e8f8dc] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2f7d32]">
              No subscription
            </p>
            <h2 id="pricing-heading" className="mt-5 text-balance text-4xl font-black leading-none md:text-6xl">
              What pricing model does Waterfall Calculator use?
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-foreground/70">
              Free users can save up to 20 scenarios. The 7-day trial starts only
              when the user explicitly taps to begin it, followed by an optional
              lifetime unlock purchase.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <aside className="grid h-full gap-4 rounded-[2rem] bg-[#163300] p-5 text-white sm:grid-cols-3">
              {[
                ["20", "free saved scenarios"],
                ["7 days", "explicit-tap trial"],
                ["Lifetime", "unlock purchase"]
              ].map(([value, label]) => (
                <div key={value} className="rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-6">
                  <BadgeDollarSign className="size-6 text-primary" aria-hidden="true" />
                  <p className="mt-8 text-4xl font-black">{value}</p>
                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-white/62">
                    {label}
                  </p>
                </div>
              ))}
            </aside>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="boundaries-heading" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2f7d32]">
              Accuracy boundaries
            </p>
            <h2 id="boundaries-heading" className="mt-5 text-balance text-4xl font-black leading-none md:text-6xl">
              What Waterfall Calculator does not claim to do
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {boundaryCards.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <aside className="h-full rounded-[1.5rem] border border-border bg-white p-6">
                  {index === 0 ? (
                    <BookOpen className="size-6 text-[#2f7d32]" aria-hidden="true" />
                  ) : index === 1 ? (
                    <Lock className="size-6 text-[#2f7d32]" aria-hidden="true" />
                  ) : (
                    <CloudOff className="size-6 text-[#2f7d32]" aria-hidden="true" />
                  )}
                  <p className="mt-8 text-lg font-black leading-7">{item}</p>
                </aside>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="bg-white px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2f7d32]">
              110-question FAQ
            </p>
            <h2 id="faq-heading" className="max-w-4xl text-balance text-4xl font-black leading-none md:text-6xl">
              What do analysts ask about Waterfall Calculator?
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {faqPreview.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.035}>
                <article className="h-full rounded-[1.5rem] border border-border bg-[#f8faf2] p-6">
                  <h3 className="text-lg font-black leading-7">{item.question}</h3>
                  <p className="mt-4 text-sm font-semibold leading-6 text-foreground/64">{item.answer}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <a
              href={waterfallSite.faqRoute}
              className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#163300] px-6 font-black text-white transition hover:-translate-y-1 hover:bg-foreground"
            >
              Read all 110 questions
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
