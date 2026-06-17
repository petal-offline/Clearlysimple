import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { SITE_LAST_MODIFIED, SITE_URL } from "@/app/seo";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ayush Mishra | AI App Developer & Digital Engineer",
    template: "%s | ClearlySimple"
  },
  description:
    "Ayush Mishra is an AI-integrated app developer and digital engineer building fast, scalable mobile and web products through ClearlySimple.",
  keywords: [
    "Ayush Mishra",
    "ClearlySimple",
    "AI app developer for hire",
    "best AI app developer",
    "freelance mobile developer",
    "AI-integrated app developer",
    "mobile app developer for startups",
    "enterprise app developer",
    "React Native developer",
    "Firebase developer",
    "AI product engineer",
    "California AI app developer",
    "New York mobile developer",
    "Texas app developer",
    "London app developer",
    "Europe AI product developer",
    "Sydney app developer",
    "Melbourne app developer"
  ],
  authors: [{ name: "Ayush Mishra", url: siteUrl }],
  creator: "Ayush Mishra",
  publisher: "ClearlySimple",
  alternates: {
    canonical: siteUrl
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ayush Mishra | AI App Developer & Digital Engineer",
    description:
      "AI-integrated app development for enterprise teams, founders, and high-value clients who need fast execution without sacrificing product quality.",
    siteName: "ClearlySimple",
    locale: "en_US",
    images: [
      {
        url: "/ayush-portrait.webp",
        width: 1122,
        height: 1402,
        alt: "Portrait of Ayush Mishra"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Mishra | ClearlySimple",
    description:
      "AI-integrated app developer and digital engineer building scalable apps with modern AI workflows.",
    images: ["/ayush-portrait.webp"]
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
  category: "technology"
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#ayush-mishra`,
    name: "Ayush Mishra",
    url: siteUrl,
    image: `${siteUrl}/ayush-portrait.webp`,
    jobTitle: "AI-integrated app developer and digital engineer",
    description:
      "Ayush Mishra is an AI-integrated app developer and digital engineer who builds scalable mobile apps, web apps, and AI-assisted digital products through ClearlySimple.",
    brand: {
      "@id": `${siteUrl}/#clearlysimple`
    },
    worksFor: {
      "@id": `${siteUrl}/#clearlysimple`
    },
    knowsAbout: [
      "AI app development",
      "mobile app development",
      "Next.js",
      "Firebase",
      "RevenueCat",
      "Figma",
      "Codex",
      "Antigravity",
      "Google Build Studio",
      "Perplexity",
      "GitHub",
      "Stable Diffusion"
    ],
    areaServed: [
      "California",
      "New York",
      "Texas",
      "London",
      "United Kingdom",
      "Europe",
      "Sydney",
      "Melbourne",
      "Australia"
    ],
    sameAs: ["https://petalchan.com", `${siteUrl}/waterfall-calculator`]
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#clearlysimple`,
    name: "ClearlySimple",
    url: siteUrl,
    founder: {
      "@id": `${siteUrl}/#ayush-mishra`
    },
    brand: "ClearlySimple",
    slogan: "Fast, AI-integrated app development for serious products.",
    description:
      "ClearlySimple is the personal studio brand of Ayush Mishra, focused on AI-assisted app development, mobile product engineering, launch systems, and scalable digital execution for enterprise hiring managers, founders, and high-net-worth clients.",
    serviceType: [
      "AI app development",
      "mobile app development",
      "MVP engineering",
      "digital product engineering",
      "Firebase app architecture",
      "subscription app development"
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "California" },
      { "@type": "AdministrativeArea", name: "New York" },
      { "@type": "AdministrativeArea", name: "Texas" },
      { "@type": "City", name: "London" },
      { "@type": "Place", name: "Europe" },
      { "@type": "City", name: "Sydney" },
      { "@type": "City", name: "Melbourne" },
      { "@type": "Country", name: "Australia" }
    ],
    audience: [
      "enterprise hiring managers",
      "startup founders",
      "high-net-worth clients",
      "product leaders",
      "AI-first teams"
    ],
    provider: {
      "@id": `${siteUrl}/#ayush-mishra`
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "ClearlySimple",
    publisher: {
      "@id": `${siteUrl}/#clearlysimple`
    },
    author: {
      "@id": `${siteUrl}/#ayush-mishra`
    },
    inLanguage: "en",
    dateModified: SITE_LAST_MODIFIED
  }
];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={display.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
