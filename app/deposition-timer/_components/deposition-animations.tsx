"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            start: 0,
            end: "max",
            scrub: 0.2
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={progressRef}
      aria-hidden="true"
      className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-[#f2b84b]"
    />
  );
}

export function DepositionAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-deposition-reveal]").forEach((element) => {
        const delay = Number.parseFloat(
          element.style.getPropertyValue("--deposition-reveal-delay") || "0"
        );

        gsap.fromTo(
          element,
          { opacity: 0, y: 28, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.72,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
