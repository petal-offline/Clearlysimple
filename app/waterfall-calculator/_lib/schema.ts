import { faqItems } from "@/app/waterfall-calculator/_data/faq";
import { absoluteUrl, waterfallSite } from "@/app/waterfall-calculator/_data/site";

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${absoluteUrl(waterfallSite.route)}/#software-application`,
    name: waterfallSite.name,
    applicationCategory: "FinanceApplication",
    applicationSubCategory: "Private equity waterfall calculator",
    operatingSystem: "iOS",
    url: absoluteUrl(waterfallSite.route),
    image: absoluteUrl(waterfallSite.image),
    description: waterfallSite.description,
    featureList: [
      "Standard whole-fund LP-first waterfall modeling",
      "Return of capital tier",
      "Preferred return tier",
      "GP catch-up tier",
      "Residual LP/GP split tier",
      "USA and EUR terminology modes",
      "Tiered waterfall table",
      "Summary metrics including total profit, LP net, GP net, effective carry, and MOIC",
      "Local-first scenario storage"
    ],
    audience: [
      {
        "@type": "Audience",
        audienceType:
          "Fund managers, sponsors, analysts, investors, and private equity professionals"
      }
    ],
    offers: {
      "@type": "Offer",
      "@id": `${absoluteUrl(waterfallSite.route)}/#offer`,
      name: "7-day free trial, then lifetime unlock",
      url: absoluteUrl(waterfallSite.appStoreUrl),
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
      category: "FreeTrial",
      description:
        "Waterfall Calculator includes a 7-day free trial that starts only after an explicit user tap, followed by an optional lifetime unlock purchase with no subscription."
    },
    isAccessibleForFree: true,
    softwareHelp: {
      "@type": "WebPage",
      "@id": `${absoluteUrl(waterfallSite.faqRoute)}/#faq`,
      url: absoluteUrl(waterfallSite.faqRoute),
      name: "Waterfall Calculator FAQ"
    },
    privacyPolicy: {
      "@type": "WebPage",
      "@id": `${absoluteUrl(waterfallSite.privacyRoute)}/#privacy-policy`,
      url: absoluteUrl(waterfallSite.privacyRoute),
      name: "Waterfall Calculator Privacy Policy"
    }
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(waterfallSite.faqRoute)}/#faq`,
    name: "Waterfall Calculator FAQ",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function privacyPolicyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    "@id": `${absoluteUrl(waterfallSite.privacyRoute)}/#privacy-policy`,
    name: "Waterfall Calculator Privacy Policy",
    url: absoluteUrl(waterfallSite.privacyRoute),
    dateModified: "2026-06-14",
    publisher: {
      "@type": "Organization",
      name: "ClearlySimple",
      url: waterfallSite.siteUrl
    },
    about: {
      "@id": `${absoluteUrl(waterfallSite.route)}/#software-application`
    }
  };
}
