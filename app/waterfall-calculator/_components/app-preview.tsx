import { BadgeCheck, Lock, Smartphone, Sparkles } from "lucide-react";

const appScreens = [
  {
    title: "Scenario shelf",
    label: "20 free saves",
    detail: "Keep local modeling cases organized on iPhone."
  },
  {
    title: "Waterfall tiers",
    label: "LP-first flow",
    detail: "Review return of capital, preferred return, catch-up, and split."
  },
  {
    title: "Summary metrics",
    label: "Fast scan",
    detail: "See total profit, LP net, GP net, effective carry, and MOIC."
  }
];

export function AppPreview() {
  return (
    <aside
      aria-label="Waterfall Calculator iOS app promotional preview"
      className="overflow-hidden rounded-[2rem] border border-border bg-[#163300] p-4 text-white shadow-[0_28px_90px_rgba(14,15,12,0.18)]"
    >
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.08] p-5">
          <div className="flex items-center justify-between gap-4">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-[#163300]">
              <Smartphone className="size-6" aria-hidden="true" />
            </span>
            <span className="rounded-full border border-white/18 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-primary">
              iOS app
            </span>
          </div>
          <h3 className="mt-10 text-balance text-4xl font-black leading-none">
            Built for fast private equity scenario review.
          </h3>
          <p className="mt-5 text-sm font-semibold leading-6 text-white/70">
            This website promotes the iOS app. The waterfall math, saved
            scenarios, terminology modes, and local-first workflow live inside
            Waterfall Calculator on the user&apos;s device.
          </p>
          <div className="mt-8 grid gap-3">
            {[
              "7-day trial starts only after an explicit tap",
              "Lifetime unlock, no subscription",
              "No backend, accounts, analytics, or tracking"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold text-white/80">
                <BadgeCheck className="size-5 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {appScreens.map((screen, index) => (
            <article
              key={screen.title}
              className="rounded-[1.5rem] border border-white/12 bg-[#f8faf2] p-5 text-[#0e0f0c]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#2f7d32]">
                    {screen.label}
                  </p>
                  <h4 className="mt-3 text-2xl font-black leading-none">{screen.title}</h4>
                </div>
                {index === 0 ? (
                  <Lock className="size-6 text-[#2f7d32]" aria-hidden="true" />
                ) : (
                  <Sparkles className="size-6 text-[#2f7d32]" aria-hidden="true" />
                )}
              </div>
              <p className="mt-5 text-sm font-semibold leading-6 text-[#0e0f0c]/68">
                {screen.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}
