import { ArrowUpRight } from "lucide-react";
import { depositionSite } from "@/app/deposition-timer/_data/site";

const footerLinks = [
  { label: "Features", href: `${depositionSite.route}#features` },
  { label: "Pricing", href: `${depositionSite.route}#pricing` },
  { label: "Privacy", href: depositionSite.privacyRoute },
  { label: "Terms", href: depositionSite.termsRoute },
  { label: "Support", href: depositionSite.supportHref }
];

export function DepositionFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#111111] px-5 py-10 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffb84d]">
            ClearlySimple legal tech
          </p>
          <p className="mt-3 max-w-xl text-2xl font-black leading-tight">
            Deposition Timer & Objection Log
          </p>
          <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-white/64">
            Offline deposition time tracking, objection logging, and export-ready
            records for litigation teams. Not legal advice.
          </p>
        </div>
        <nav aria-label="Deposition Timer footer navigation" className="flex flex-wrap gap-2">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex h-10 items-center gap-2 rounded-md border border-white/12 px-3 text-sm font-bold text-white/74 transition hover:border-white/28 hover:text-white"
              aria-label={`${link.label} for Deposition Timer & Objection Log`}
            >
              {link.label}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-5 text-xs font-semibold text-white/46 sm:flex-row sm:items-center sm:justify-between">
        <p>(c) 2026 Deposition Timer & Objection Log. All rights reserved.</p>
        <p>Built by clearlysimple.app</p>
      </div>
    </footer>
  );
}
