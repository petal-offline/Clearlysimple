import { homeFaqItems } from "@/app/data/portfolio";
import HomeClient from "@/app/home-client";
import { SITE_LAST_MODIFIED, SITE_URL } from "@/app/seo";

const homepageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#homepage`,
    url: SITE_URL,
    name: "Ayush Mishra | ClearlySimple",
    description:
      "Personal portfolio and ClearlySimple studio page for Ayush Mishra, focused on app development, mobile product engineering, AI-assisted workflows, and international project execution.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`
    },
    about: {
      "@id": `${SITE_URL}/#ayush-mishra`
    },
    publisher: {
      "@id": `${SITE_URL}/#clearlysimple`
    },
    dateModified: SITE_LAST_MODIFIED,
    inLanguage: "en"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#homepage-faq`,
    url: SITE_URL,
    name: "ClearlySimple homepage FAQ",
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
