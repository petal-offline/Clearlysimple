import { SITE_LAST_MODIFIED } from "@/app/seo";
import {
  absoluteUrl,
  depositionFaqItems,
  depositionSite
} from "@/app/deposition-timer/_data/site";

export function depositionSoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${absoluteUrl(depositionSite.route)}/#software-application`,
    name: depositionSite.name,
    alternateName: [
      "Deposition Timer App",
      "FRCP 30 7-Hour Rule Tracker",
      "Litigation Stopwatch",
      "Legal Objection Log"
    ],
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Legal technology utility",
    operatingSystem: "iPadOS, iOS, Android",
    url: absoluteUrl(depositionSite.route),
    description: depositionSite.description,
    dateModified: SITE_LAST_MODIFIED,
    featureList: [
      "Triple-clock deposition time tracking",
      "FRCP 30 seven-hour rule elapsed and remaining time",
      "Instant legal objection logging",
      "Break and off-record session controls",
      "Immutable PDF and CSV exports",
      "Offline local storage",
      "Local AES encryption",
      "No cloud telemetry"
    ],
    audience: [
      {
        "@type": "Audience",
        audienceType:
          "Trial lawyers, litigators, court reporters, paralegals, and legal teams"
      }
    ],
    offers: {
      "@type": "Offer",
      "@id": `${absoluteUrl(depositionSite.route)}/#lifetime-unlock`,
      name: "$49.99 Lifetime Unlock",
      url: `${absoluteUrl(depositionSite.route)}#pricing`,
      price: depositionSite.price,
      priceCurrency: depositionSite.priceCurrency,
      availability: "https://schema.org/InStock",
      category: "Lifetime software license",
      description:
        "One-time lifetime unlock for Deposition Timer & Objection Log with no SaaS fees."
    },
    isAccessibleForFree: true,
    privacyPolicy: {
      "@type": "WebPage",
      "@id": `${absoluteUrl(depositionSite.privacyRoute)}/#privacy-policy`,
      url: absoluteUrl(depositionSite.privacyRoute),
      name: "Deposition Timer & Objection Log Privacy Policy"
    },
    termsOfService: absoluteUrl(depositionSite.termsRoute)
  };
}

export function depositionWebPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(depositionSite.route)}/#webpage`,
    url: absoluteUrl(depositionSite.route),
    name: depositionSite.name,
    description: depositionSite.description,
    dateModified: SITE_LAST_MODIFIED,
    isPartOf: {
      "@id": `${depositionSite.siteUrl}/#website`
    },
    about: {
      "@id": `${absoluteUrl(depositionSite.route)}/#software-application`
    },
    publisher: {
      "@id": `${depositionSite.siteUrl}/#clearlysimple`
    },
    inLanguage: "en"
  };
}

export function depositionFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(depositionSite.route)}/#faq`,
    url: absoluteUrl(depositionSite.route),
    name: "Deposition Timer & Objection Log FAQ",
    dateModified: SITE_LAST_MODIFIED,
    mainEntity: depositionFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function depositionPrivacyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    "@id": `${absoluteUrl(depositionSite.privacyRoute)}/#privacy-policy`,
    name: "Deposition Timer & Objection Log Privacy Policy",
    url: absoluteUrl(depositionSite.privacyRoute),
    dateModified: SITE_LAST_MODIFIED,
    publisher: {
      "@type": "Organization",
      name: "ClearlySimple",
      url: depositionSite.siteUrl
    },
    about: {
      "@id": `${absoluteUrl(depositionSite.route)}/#software-application`
    }
  };
}

export function depositionTermsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(depositionSite.termsRoute)}/#terms`,
    name: "Deposition Timer & Objection Log Terms of Service",
    url: absoluteUrl(depositionSite.termsRoute),
    dateModified: SITE_LAST_MODIFIED,
    isPartOf: {
      "@id": `${depositionSite.siteUrl}/#website`
    },
    about: {
      "@id": `${absoluteUrl(depositionSite.route)}/#software-application`
    }
  };
}
