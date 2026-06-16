import { faqItems } from "@/app/waterfall-calculator/_data/faq";
import { absoluteUrl, waterfallSite } from "@/app/waterfall-calculator/_data/site";
import { SITE_LAST_MODIFIED } from "@/app/seo";

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
    dateModified: SITE_LAST_MODIFIED,
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

export function waterfallProductWebPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(waterfallSite.route)}/#webpage`,
    url: absoluteUrl(waterfallSite.route),
    name: "Waterfall Calculator",
    description: waterfallSite.description,
    dateModified: SITE_LAST_MODIFIED,
    isPartOf: {
      "@id": `${waterfallSite.siteUrl}/#website`
    },
    about: {
      "@id": `${absoluteUrl(waterfallSite.route)}/#software-application`
    },
    publisher: {
      "@id": `${waterfallSite.siteUrl}/#clearlysimple`
    }
  };
}

export function waterfallProductFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(waterfallSite.route)}/#faq`,
    url: absoluteUrl(waterfallSite.route),
    name: "Waterfall Calculator product FAQ",
    dateModified: SITE_LAST_MODIFIED,
    mainEntity: faqItems.slice(0, 6).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(waterfallSite.faqRoute)}/#faq`,
    name: "Waterfall Calculator FAQ",
    dateModified: SITE_LAST_MODIFIED,
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
    dateModified: SITE_LAST_MODIFIED,
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
