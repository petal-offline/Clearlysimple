import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { homeFaqItems } from "@/app/data/portfolio";
import { SITE_LAST_MODIFIED, SITE_URL } from "@/app/seo";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about hiring Ayush Mishra and ClearlySimple for mobile apps, AI-assisted product engineering, fintech utilities, dashboards, and launch-ready builds.",
  alternates: {
    canonical: `${SITE_URL}/faq`
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/faq`,
    title: "ClearlySimple FAQ",
    description:
      "Direct answers about ClearlySimple, Ayush Mishra, mobile app development, international work, and current products."
  },
  robots: {
    index: true,
    follow: true
  }
};

const faqPageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/faq#webpage`,
    url: `${SITE_URL}/faq`,
    name: "ClearlySimple FAQ",
    dateModified: SITE_LAST_MODIFIED,
    isPartOf: {
      "@id": `${SITE_URL}/#website`
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq#faq`,
    url: `${SITE_URL}/faq`,
    name: "ClearlySimple FAQ",
    dateModified: SITE_LAST_MODIFIED,
    mainEntity: homeFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  }
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-paper px-5 py-16 text-ink md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
      <section className="mx-auto max-w-5xl border border-ink p-6 md:p-10">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-cobalt">
          FAQPage schema included
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold uppercase leading-none md:text-7xl">
          ClearlySimple FAQ
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-ink/70">
          Direct answers for people evaluating Ayush Mishra and ClearlySimple
          for mobile apps, finance utilities, AI-assisted builds, and
          launch-ready product engineering.
        </p>

        <div className="mt-10 grid gap-4">
          {homeFaqItems.map((item, index) => (
            <article key={item.question} className="border border-ink p-5">
              <span className="font-mono text-xs font-bold text-cobalt">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold leading-8">
                {item.question}
              </h2>
              <p className="mt-4 text-base font-semibold leading-7 text-ink/68">
                {item.answer}
              </p>
            </article>
          ))}
        </div>

        <a
          href="mailto:hello@clearlysimple.app?subject=Project%20question"
          className="mt-8 inline-flex h-12 items-center gap-2 border border-ink bg-ink px-5 font-bold text-paper"
        >
          Email ClearlySimple
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
