import {
  AlertTriangle,
  Clock3,
  FileLock2,
  Mic2,
  Pause,
  Play,
  ShieldCheck,
  TimerReset
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const objectionRows = [
  ["10:14:22", "Form", "Leading foundation sequence"],
  ["10:31:08", "Privilege", "Attorney-client work product"],
  ["11:02:44", "Scope", "Outside noticed topics"]
];

const clockRows = [
  ["Elapsed", "02:18:43"],
  ["Remaining", "04:41:17"],
  ["Off record", "00:11:02"]
];

const controls: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Record", icon: Play },
  { label: "Pause", icon: Pause },
  { label: "Reset", icon: TimerReset }
];

export function AppPreview() {
  return (
    <figure
      className="relative mx-auto w-full max-w-[42rem]"
      aria-label="Deposition Timer app interface preview"
    >
      <div aria-hidden="true" className="absolute -inset-6 rounded-full bg-[#2f6bff]/20 blur-3xl" />
      <div className="relative rounded-[2rem] border border-white/12 bg-[#05070b] p-3 shadow-[0_48px_140px_rgba(0,0,0,0.52)]">
        <div className="overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#0a0f16]">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#f2b84b]">
                FRCP 30 session
              </p>
              <p className="mt-1 text-lg font-black text-white">
                Smith v. Alton Dynamics
              </p>
            </div>
            <div className="rounded-md border border-[#34d399]/30 bg-[#34d399]/10 px-3 py-2 text-right">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#34d399]">
                On record
              </p>
              <p className="text-base font-black text-white">02:18:43</p>
            </div>
          </div>

          <div className="grid gap-3 p-4 md:grid-cols-[0.92fr_1.08fr]">
            <div className="grid gap-3">
              <div className="rounded-md border border-white/10 bg-[#101722] p-4 text-white">
                <div className="flex items-center gap-3">
                  <Clock3 className="size-5 text-[#f2b84b]" aria-hidden="true" />
                  <p className="text-[11px] font-black uppercase tracking-[0.14em] text-white/58">
                    Remaining Rule 30 time
                  </p>
                </div>
                <p className="mt-5 text-5xl font-black tracking-normal">04:41:17</p>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/12">
                  <div className="h-full w-[33%] rounded-full bg-[#34d399]" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {clockRows.map(([label, value]) => (
                  <div key={label} className="rounded-md border border-white/10 bg-white/[0.04] p-3">
                    <p className="text-[9px] font-black uppercase tracking-[0.12em] text-white/42">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-black text-white md:text-base">{value}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2">
                {controls.map(({ icon: ControlIcon, label }) => {
                  return (
                    <div
                      key={label}
                      className="flex h-12 items-center justify-center gap-2 rounded-md bg-[#2f6bff] text-sm font-black text-white"
                    >
                      <ControlIcon className="size-4" aria-hidden="true" />
                      <span className="hidden sm:inline">{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#f85959]">
                    Objection log
                  </p>
                  <p className="mt-1 text-xl font-black text-white">
                    17 protected entries
                  </p>
                </div>
                <FileLock2 className="size-6 text-[#f2b84b]" aria-hidden="true" />
              </div>

              <div className="mt-5 grid gap-2">
                {objectionRows.map(([time, type, note]) => (
                  <div
                    key={`${time}-${type}`}
                    className="grid grid-cols-[4.75rem_5.25rem_1fr] items-center gap-2 rounded-md border border-white/8 bg-[#0a0f16] p-2 text-xs"
                  >
                    <p className="font-black text-white">{time}</p>
                    <p className="rounded bg-[#f2b84b]/16 px-2 py-1 text-center text-[10px] font-black uppercase tracking-[0.08em] text-[#f2b84b]">
                      {type}
                    </p>
                    <p className="truncate font-semibold text-white/58">{note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <div className="rounded-md border border-white/10 bg-[#101722] p-3">
                  <AlertTriangle className="size-4 text-[#f85959]" aria-hidden="true" />
                  <p className="mt-3 text-xs font-black text-white">
                    Live record flags
                  </p>
                </div>
                <div className="rounded-md border border-white/10 bg-[#101722] p-3">
                  <ShieldCheck className="size-4 text-[#34d399]" aria-hidden="true" />
                  <p className="mt-3 text-xs font-black text-white">
                    Local AES vault
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 border-t border-white/10 bg-white/[0.03] text-center text-[10px] font-black uppercase tracking-[0.14em] text-white/45">
            <div className="border-r border-white/10 p-3">Clock</div>
            <div className="border-r border-white/10 p-3">Objections</div>
            <div className="p-3">Exports</div>
          </div>
        </div>
      </div>
      <figcaption className="sr-only">
        Technical preview of a deposition timer, Rule 30 remaining time, objection log, and local export controls.
      </figcaption>
      <div
        aria-hidden="true"
        className="absolute -bottom-4 left-8 hidden items-center gap-2 rounded-md border border-white/12 bg-[#070a0f]/90 px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-white/70 shadow-2xl backdrop-blur md:flex"
      >
        <Mic2 className="size-4 text-[#34d399]" />
        Live record capture
      </div>
    </figure>
  );
}
