"use client";

import { Header } from "@/components/ui/header-2";
import { cn } from "@/lib/utils";
import { waterfallNavItems, waterfallSite } from "@/app/waterfall-calculator/_data/site";

const appleLogo = "/apps/waterfall-calculator/apple-logo-white.svg";

function WaterfallBrand() {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <span
        aria-hidden="true"
        className="flex size-9 shrink-0 items-center justify-center border border-ink bg-primary text-sm font-black text-ink"
      >
        W
      </span>
      <span className="max-w-[8.5rem] truncate text-sm font-bold uppercase tracking-[0.18em] sm:max-w-none">
        Waterfall Calculator
      </span>
    </span>
  );
}

function AppStoreButton({ className }: { className?: string }) {
  return (
    <a
      href={waterfallSite.appStoreUrl}
      className={cn(
        "group relative inline-flex h-10 items-center justify-center gap-2 overflow-hidden whitespace-nowrap border border-ink bg-ink px-3 text-sm font-bold text-paper transition-colors duration-150 md:px-4 md:hover:bg-primary md:hover:text-ink",
        className
      )}
      aria-label="Open Waterfall Calculator App Store link"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={appleLogo} alt="" className="relative z-10 size-5 shrink-0 object-contain" aria-hidden="true" />
      <span className="relative z-10">App Store</span>
    </a>
  );
}

export function WaterfallHeader() {
  return (
    <Header
      brand={<WaterfallBrand />}
      homeHref="#top"
      links={[...waterfallNavItems]}
      actions={<AppStoreButton />}
      mobileActions={<AppStoreButton className="w-full" />}
    />
  );
}
