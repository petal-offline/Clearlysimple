import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      data-waterfall-reveal="true"
      className={cn("will-change-transform", className)}
      style={{ "--waterfall-reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function HeroReveal({
  children,
  className
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
