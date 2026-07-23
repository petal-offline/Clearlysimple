"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type StickyScrollItem = {
  title: string;
  description: string;
  kicker?: string;
  content?: ReactNode;
};

type StickyScrollProps = {
  content: StickyScrollItem[];
  className?: string;
  contentClassName?: string;
};

const panelGradients = [
  "linear-gradient(135deg, #a8dcff 0%, #2457ff 100%)",
  "linear-gradient(135deg, #f6f1e8 0%, #a8dcff 48%, #ff6b35 100%)",
  "linear-gradient(135deg, #a8dcff 0%, #080806 100%)"
];

// Adapted from 21st.dev Aceternity Sticky Scroll Reveal, MIT licensed.
export function StickyScroll({
  content,
  className,
  contentClassName
}: StickyScrollProps) {
  const [activeCard, setActiveCard] = useState(0);
  const reduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  if (!content.length) return null;

  const updateActiveCard = () => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    const maxScroll = scroller.scrollHeight - scroller.clientHeight;
    const progress = maxScroll > 0 ? scroller.scrollTop / maxScroll : 0;
    const nextCard = Math.min(
      content.length - 1,
      Math.floor(progress * content.length)
    );

    setActiveCard((currentCard) =>
      currentCard === nextCard ? currentCard : nextCard
    );
  };

  const activeItem = content[Math.min(activeCard, content.length - 1)];
  const activeGradient = panelGradients[activeCard % panelGradients.length];

  return (
    <motion.div
      data-work-stage="true"
      onWheel={(event) => {
        const scroller = scrollRef.current;
        if (!scroller) return;

        const maxScroll = scroller.scrollHeight - scroller.clientHeight;
        const canScrollDown = event.deltaY > 0 && scroller.scrollTop < maxScroll;
        const canScrollUp = event.deltaY < 0 && scroller.scrollTop > 0;

        if (canScrollDown || canScrollUp) {
          event.preventDefault();
          scroller.scrollTop = Math.min(
            maxScroll,
            Math.max(0, scroller.scrollTop + event.deltaY)
          );
          updateActiveCard();
        }
      }}
      className={cn(
        "relative flex h-[36rem] justify-center overflow-hidden border border-paper/15 p-5 text-paper shadow-hard-lg md:p-6",
        className
      )}
    >
      <div className="relative flex h-full w-full max-w-6xl items-center gap-8">
        <div
          data-work-timeline="true"
          ref={scrollRef}
          onScroll={updateActiveCard}
          className="h-full w-full max-w-xl overflow-y-auto overscroll-contain px-1 no-scrollbar md:px-4"
        >
          {content.map((item, index) => {
            const isActive = activeCard === index;

            return (
              <div
                key={`${item.title}-${index}`}
                className="my-16 min-h-40 border-l border-paper/15 pl-5"
              >
                {item.kicker ? (
                  <motion.p
                    animate={{ opacity: isActive ? 1 : 0.35 }}
                    className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-signal"
                  >
                    {item.kicker}
                  </motion.p>
                ) : null}
                <motion.h3
                  animate={{ opacity: isActive ? 1 : 0.28, x: isActive ? 0 : -8 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-3xl font-bold leading-none text-paper md:text-5xl"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  animate={{ opacity: isActive ? 0.82 : 0.25 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-7 max-w-xl text-base leading-7 text-paper/80 md:text-lg"
                >
                  {item.description}
                </motion.p>
              </div>
            );
          })}
          <div className="h-24" />
        </div>

        <motion.div
          data-work-preview="true"
          animate={reduceMotion ? undefined : { background: activeGradient }}
          style={reduceMotion ? { background: activeGradient } : undefined}
          className={cn(
            "hidden h-[30rem] w-[28rem] shrink-0 overflow-hidden border border-paper/20 lg:block",
            contentClassName
          )}
          layout
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            key={activeItem.title}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full"
          >
            {activeItem.content ?? null}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
