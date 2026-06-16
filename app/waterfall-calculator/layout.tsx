import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { absoluteUrl, waterfallSite } from "@/app/waterfall-calculator/_data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-waterfall",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Waterfall Calculator",
    template: "%s | Waterfall Calculator"
  },
  alternates: {
    canonical: absoluteUrl(waterfallSite.route)
  }
};

export default function WaterfallCalculatorLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${inter.variable} waterfall-theme relative min-h-screen w-full overflow-x-hidden bg-background font-sans text-foreground selection:bg-primary/30`}
    >
      <main className="relative z-10 min-h-[120vh] w-full rounded-b-[2rem] border-b border-border bg-background text-foreground shadow-[0_28px_80px_rgba(14,15,12,0.14)]">
        {children}
      </main>
      <CinematicFooter
        downloadHref={waterfallSite.appStoreUrl}
        faqHref={waterfallSite.faqRoute}
        privacyHref={waterfallSite.privacyRoute}
        supportHref={waterfallSite.supportHref}
      />
    </div>
  );
}
