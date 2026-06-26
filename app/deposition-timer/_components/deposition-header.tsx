"use client";

import { Header } from "@/components/ui/site-header";
import { cn } from "@/lib/utils";
import { depositionSite } from "@/app/deposition-timer/_data/site";

const appleLogo = "/apps/deposition-timer/apple-logo-white.svg";

const depositionNavItems = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Privacy", href: depositionSite.privacyRoute }
] as const;

function DepositionBrand() {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <span
        aria-hidden="true"
        className="flex size-9 shrink-0 items-center justify-center border border-ink bg-primary text-sm font-black text-ink"
      >
        D
      </span>
      <span className="max-w-[11rem] truncate text-sm font-bold uppercase tracking-[0.18em] sm:max-w-none">
        Deposition Timer
      </span>
    </span>
  );
}

function AppStoreButton({ className }: { className?: string }) {
  return (
    <a
      href={depositionSite.iosDownloadUrl}
      className={cn(
        "group relative inline-flex h-10 items-center justify-center gap-2 overflow-hidden whitespace-nowrap border border-ink bg-ink px-3 text-sm font-bold text-paper transition-colors duration-150 md:px-4 md:hover:bg-primary md:hover:text-ink",
        className
      )}
      aria-label={`Open ${depositionSite.name} App Store link`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={appleLogo} alt="" className="relative z-10 size-5 shrink-0 object-contain" aria-hidden="true" />
      <span className="relative z-10">App Store</span>
    </a>
  );
}

export function DepositionHeader() {
  return (
    <Header
      brand={<DepositionBrand />}
      homeHref="#top"
      links={[...depositionNavItems]}
      actions={<AppStoreButton />}
      mobileActions={<AppStoreButton className="w-full" />}
    />
  );
}
