import type { CSSProperties } from "react";
import { Inter } from "next/font/google";
import { CinematicFooter } from "@/components/ui/motion-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-deposition",
  display: "swap"
});

const depositionTheme = {
  "--background-rgb": "7 10 15",
  "--foreground-rgb": "240 245 248",
  "--border-rgb": "70 82 96",
  "--input-rgb": "70 82 96",
  "--ring-rgb": "242 184 75",
  "--accent-rgb": "17 24 34",
  "--accent-foreground-rgb": "240 245 248",
  "--primary-rgb": "242 184 75",
  "--primary-foreground-rgb": "7 10 15",
  "--secondary-rgb": "52 211 153",
  "--secondary-foreground-rgb": "7 10 15",
  "--destructive-rgb": "248 89 89",
  "--destructive-foreground-rgb": "255 255 255",
  "--muted-foreground-rgb": "150 163 176",
  fontFamily: "var(--font-deposition), Inter, system-ui, sans-serif"
} as CSSProperties;

export default function DepositionTimerLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${inter.variable} relative min-h-screen w-full overflow-x-hidden bg-[#070a0f] font-sans text-[#f0f5f8] selection:bg-[#f2b84b]/35`}
      style={depositionTheme}
    >
      <main className="relative z-10 min-h-[120vh] w-full rounded-b-[2rem] border-b border-white/10 bg-[#070a0f] shadow-[0_28px_80px_rgba(0,0,0,0.38)]">
        {children}
      </main>
      <CinematicFooter />
    </div>
  );
}
