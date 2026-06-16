import type { Metadata } from "next";
import { ArrowLeft, Search } from "lucide-react";
import { faqGroups, faqItems } from "@/app/waterfall-calculator/_data/faq";
import { absoluteUrl, waterfallSite } from "@/app/waterfall-calculator/_data/site";
import { faqJsonLd } from "@/app/waterfall-calculator/_lib/schema";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Read 110 frequently asked questions about Waterfall Calculator, including whole-fund LP-first waterfall math, privacy, pricing, iOS, terminology, and product boundaries.",
  alternates: {
    canonical: absoluteUrl(waterfallSite.faqRoute)
  },
  openGraph: {
    type: "website",
    url: absoluteUrl(waterfallSite.faqRoute),
    title: "Waterfall Calculator FAQ",
    description:
      "A 110-question FAQ for Waterfall Calculator covering LP/GP waterfall math, local-first privacy, pricing, and supported use cases."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1
    }
  }
};

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
    />
  );
}

export default function WaterfallFaqPage() {
  return (
    <article className="bg-background px-5 py-24 text-foreground md:px-8">
      <JsonLd />
      <div className="mx-auto max-w-7xl">
        <a
          href={waterfallSite.route}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-black transition hover:-translate-y-0.5"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to Waterfall Calculator
        </a>

        <header className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2f7d32]">
              FAQPage schema included
            </p>
            <h1 className="mt-5 max-w-5xl text-balance text-5xl font-black leading-none md:text-7xl">
              Waterfall Calculator FAQ
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-foreground/70">
              Exactly {faqItems.length} questions written for analysts, sponsors,
              fund managers, and investors researching Waterfall Calculator for
              standard whole-fund LP-first waterfall modeling.
            </p>
          </div>
          <aside className="rounded-[2rem] bg-[#163300] p-6 text-white">
            <Search className="size-7 text-primary" aria-hidden="true" />
            <p className="mt-8 text-4xl font-black">{faqItems.length}</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-white/64">
              distinct questions
            </p>
            <p className="mt-5 text-sm font-semibold leading-6 text-white/70">
              Every question includes the exact phrase Waterfall Calculator for
              direct search and AI answer retrieval.
            </p>
          </aside>
        </header>

        <nav
          aria-label="Waterfall Calculator FAQ categories"
          className="mt-10 flex flex-wrap gap-2"
        >
          {faqGroups.map((group) => (
            <a
              key={group.category}
              href={`#${group.category.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-black transition hover:border-[#2f7d32] hover:text-[#2f7d32]"
            >
              {group.category}
            </a>
          ))}
        </nav>

        <div className="mt-14 grid gap-14">
          {faqGroups.map((group) => (
            <section
              key={group.category}
              id={group.category.toLowerCase().replace(/\s+/g, "-")}
              aria-labelledby={`${group.category}-heading`}
              className="scroll-mt-24"
            >
              <div className="mb-6 max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2f7d32]">
                  {group.items.length} questions
                </p>
                <h2
                  id={`${group.category}-heading`}
                  className="mt-3 text-3xl font-black leading-none md:text-5xl"
                >
                  {group.category}
                </h2>
                <p className="mt-4 text-base font-semibold leading-7 text-foreground/64">
                  {group.intro}
                </p>
              </div>

              <div className="grid gap-4">
                {group.items.map((item, index) => (
                  <details
                    key={item.question}
                    className="group rounded-[1.5rem] border border-border bg-white p-5 shadow-[0_16px_40px_rgba(14,15,12,0.04)] open:bg-[#f8faf2]"
                    open={index === 0}
                  >
                    <summary className="cursor-pointer list-none text-lg font-black leading-7 marker:hidden">
                      <span className="grid grid-cols-[auto_1fr] gap-4">
                        <span className="mt-1 flex size-7 items-center justify-center rounded-full bg-[#e8f8dc] text-xs font-black text-[#163300]">
                          {index + 1}
                        </span>
                        <span>{item.question}</span>
                      </span>
                    </summary>
                    <p className="mt-5 pl-11 text-base font-semibold leading-7 text-foreground/68">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
