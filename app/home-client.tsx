"use client";

import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  Code2,
  ExternalLink,
  Instagram,
  Layers3,
  Mail,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Workflow
} from "lucide-react";
import {
  type HTMLMotionProps,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { StickyScroll, type StickyScrollItem } from "@/components/ui/sticky-scroll-reveal";
import {
  landingFaqItems,
  portfolioApps,
  serviceSignals,
  type PortfolioApp
} from "@/app/data/portfolio";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const springHover = {
  type: "spring",
  stiffness: 720,
  damping: 24,
  mass: 0.48
} as const;

const buttonHover = {
  type: "tween",
  duration: 0.08,
  ease: "easeOut"
} as const;

const wordReveal = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
};

const appGradientMap: Record<PortfolioApp["accent"], string> = {
  signal: "linear-gradient(135deg, #a8dcff 0%, #2457ff 100%)",
  cobalt: "linear-gradient(135deg, #a8dcff 0%, #63c7ff 48%, #2457ff 100%)",
  ember: "linear-gradient(135deg, #f6f1e8 0%, #a8dcff 48%, #ff6b35 100%)"
};

const nativePlatforms = [
  {
    name: "React Native / Expo",
    logos: [
      { src: "https://cdn.simpleicons.org/react/087EA4", alt: "React Native" }
    ]
  },
  {
    name: "Native Kotlin",
    logos: [
      { src: "/android-studio.svg", alt: "Android Studio" }
    ]
  },
  {
    name: "Swift",
    logos: [
      { src: "/swift.png", alt: "Swift" }
    ]
  },
  {
    name: "Next.js",
    logos: [
      { src: "/nextjs.png", alt: "Next.js" }
    ]
  }
];

function MotionSection({
  id,
  children,
  className,
  ariaLabel
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease }}
      className={cn("relative mx-auto w-full max-w-7xl px-5 md:px-8", className)}
    >
      {children}
    </motion.section>
  );
}

function MotionLink({
  children,
  className,
  ...props
}: HTMLMotionProps<"a"> & {
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.015 }}
      whileTap={reduceMotion ? undefined : { y: -1, scale: 0.985 }}
      transition={buttonHover}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}

function StaggeredWords({
  text,
  className,
  delay = 0,
  stagger = 0.045,
  viewport = false
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  viewport?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");
  const motionProps = viewport
    ? {
        initial: reduceMotion ? false : "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-80px" }
      }
    : {
        initial: reduceMotion ? false : "hidden",
        animate: "visible"
      };

  return (
    <motion.span
      className={cn("inline", className)}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger
          }
        }
      }}
      {...motionProps}
    >
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <motion.span
            className="inline-block will-change-transform"
            variants={wordReveal}
            transition={{ duration: 0.7, ease }}
          >
            {word}
          </motion.span>{" "}
        </Fragment>
      ))}
    </motion.span>
  );
}

function Wordmark() {
  return (
    <a
      href="#top"
      aria-label="ClearlySimple home"
      className="group flex min-w-0 items-center"
    >
      <span className="font-display text-sm font-bold uppercase tracking-[0.24em]">
        ClearlySimple
      </span>
    </a>
  );
}

function useWindowScrolled(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

function useHeaderVisibility() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let previousY = window.scrollY;

    const onScroll = () => {
      if (window.innerWidth >= 768) {
        setVisible(true);
        previousY = window.scrollY;
        return;
      }

      const currentY = window.scrollY;
      const scrollingDown = currentY > previousY;

      setVisible(!scrollingDown || currentY < 24);
      previousY = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible;
}

function Header() {
  const scrolled = useWindowScrolled(10);
  const headerVisible = useHeaderVisibility();
  const links = [
    ["Work", "#work"],
    ["Services", "#services"],
    ["About", "#portrait"],
    ["Contact", "#contact"]
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: headerVisible ? 0 : -92, opacity: headerVisible ? 1 : 0 }}
      transition={{ duration: 0.65, ease }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 mx-auto w-full border-b border-ink/10 bg-paper/85 backdrop-blur-xl transition-all duration-300 ease-out",
        scrolled
          ? "md:top-4 md:max-w-5xl md:rounded-[2px] md:border md:border-ink/15 md:bg-paper/65"
          : "md:max-w-full",
      )}
    >
      <nav
        aria-label="Primary navigation"
        className={cn(
          "mx-auto flex h-14 max-w-7xl items-center justify-between px-5 transition-all duration-300 ease-out md:h-16 md:px-8",
          scrolled && !open && "md:h-12 md:px-4"
        )}
      >
        <Wordmark />
        <div className="hidden items-center gap-2 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="inline-flex h-9 items-center justify-center px-3 text-sm font-bold text-ink/70 transition-colors duration-75 hover:bg-ink/5 hover:text-ink"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="/build-with-me"
          aria-label="Start a project questionnaire"
          className="group relative hidden h-10 min-w-12 items-center justify-center gap-2 overflow-hidden border border-ink bg-ink px-4 text-sm font-bold text-paper transition-colors duration-150 md:inline-flex"
        >
          <span className="absolute inset-0 -translate-x-[102%] bg-signal transition-transform duration-100 ease-out group-hover:translate-x-0" aria-hidden="true" />
          <span className="relative z-10 transition-colors duration-75 group-hover:text-ink">Build with me</span>
          <ArrowUpRight className="relative z-10 size-4 transition-colors duration-75 group-hover:text-ink" aria-hidden="true" />
        </a>
      </nav>
    </motion.header>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 22,
    restDelta: 0.001
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-signal"
    />
  );
}

function HashScrollHandler() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      const target = document.getElementById(decodeURIComponent(id));
      if (!target) return;

      const headerOffset = window.innerWidth < 768 ? 64 : 88;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: reduceMotion ? "auto" : "smooth"
      });
    };

    const timeout = window.setTimeout(scrollToHash, 80);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [reduceMotion]);

  return null;
}

function SplitHeadline({ text }: { text: string }) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <h1
      aria-label={text}
      className="text-balance font-display text-[clamp(3rem,15.5vw,11.4rem)] font-bold uppercase leading-[0.86] tracking-normal md:leading-[0.84]"
    >
      <motion.span
        aria-hidden="true"
        className="block motion-preserve-3d"
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: 0.12,
              staggerChildren: 0.022
            }
          }
        }}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
      >
        {words.map((word, wordIndex) => (
          <Fragment key={`${word}-${wordIndex}`}>
            <span className="inline-block whitespace-nowrap">
              {Array.from(word).map((character, characterIndex) => (
                <motion.span
                  key={`${character}-${characterIndex}`}
                  className="inline-block will-change-transform [backface-visibility:hidden]"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: "0.8em",
                      rotateX: -72,
                      filter: "blur(12px)"
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      filter: "blur(0px)"
                    }
                  }}
                  transition={{ duration: 0.78, ease }}
                >
                  {character}
                </motion.span>
              ))}
            </span>
            {wordIndex < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </motion.span>
    </h1>
  );
}

function NativePlatformGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.32, ease }}
      className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-5"
      aria-label="Supported mobile app development stacks"
    >
      {nativePlatforms.map((platform, index) => (
        <motion.div
          key={platform.name}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 + index * 0.08, ease }}
          className="group inline-flex items-center gap-2.5"
        >
          <span className="inline-flex items-center gap-2">
            {platform.logos.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="size-7 object-contain transition-transform duration-300 group-hover:-translate-y-0.5"
                loading="eager"
              />
            ))}
          </span>
          <span className="font-display text-sm font-bold leading-none text-ink/78 md:text-base">
            {platform.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

function MobileHeroProof() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.58, ease }}
      className="mt-7 grid grid-cols-3 border border-ink/20 bg-paper/80 text-center md:hidden"
      aria-label="Build availability and product focus"
    >
      {[
        ["Fast", "builds"],
        ["Native", "apps"],
        ["Open", "to hire"]
      ].map(([title, label]) => (
        <div key={title} className="border-r border-ink/15 px-2 py-3 last:border-r-0">
          <p className="font-display text-lg font-bold leading-none">{title}</p>
          <p className="mt-1 font-mono text-[0.56rem] uppercase tracking-[0.16em] text-ink/45">
            {label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 900], [0, reduceMotion ? 0 : -80]);
  const railY = useTransform(scrollY, [0, 900], [0, reduceMotion ? 0 : -135]);

  return (
    <section
      id="top"
      aria-label="Ayush Mishra app developer portfolio hero"
      className="relative min-h-[88svh] overflow-hidden border-b border-ink/10 bg-paper pt-16 md:min-h-[92svh] md:pt-20"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: gridY }}
        className="absolute inset-0 bg-grid-lines bg-[length:72px_72px] opacity-80"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: railY }}
        className="pointer-events-none absolute left-[8%] top-28 hidden h-72 w-7 border-x border-ink/10 bg-[linear-gradient(180deg,rgba(36,87,255,0.28),rgba(255,107,53,0.16),transparent)] will-change-transform lg:block"
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-ink/20" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(88svh-4rem)] max-w-7xl content-between px-5 pb-6 md:min-h-[calc(92svh-5rem)] md:px-8">
        <div className="grid gap-8">
          <div className="pt-10 md:pt-16">
            <SplitHeadline text="Built to ship." />
            <p className="mt-6 max-w-3xl text-balance text-lg font-semibold leading-7 text-ink/78 sm:text-xl sm:leading-8 md:mt-8 md:text-3xl md:leading-10">
              <StaggeredWords
                text="Launch-ready apps, websites, and product systems—designed with clarity and engineered to last."
                delay={0.28}
                stagger={0.012}
              />
            </p>
            <NativePlatformGrid />
            <MobileHeroProof />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          className="grid grid-cols-2 gap-3 border-t border-ink/20 pt-5 md:flex md:flex-wrap md:justify-end"
        >
          <MotionLink
            href="#work"
            className="inline-flex h-12 items-center justify-center gap-2 border border-ink bg-signal px-5 font-bold text-ink transition-transform duration-75 hover:-translate-y-0.5"
          >
            <Blocks className="size-5" aria-hidden="true" />
            Work
          </MotionLink>
          <MotionLink
            href="#portrait"
            className="inline-flex h-12 items-center justify-center gap-2 border border-ink bg-paper px-5 font-bold text-ink transition-transform duration-75 hover:-translate-y-0.5"
          >
            About me
          </MotionLink>
          <MotionLink
            href="/build-with-me"
            aria-label="Start a project questionnaire"
            className="group relative col-span-2 inline-flex h-12 items-center justify-center gap-2 overflow-hidden border border-ink bg-ink px-5 font-bold text-paper transition-colors duration-150 md:col-span-1 md:shadow-hard-sm"
          >
            <span className="absolute inset-0 -translate-x-full bg-signal transition-transform duration-100 ease-out group-hover:translate-x-0" aria-hidden="true" />
            <span className="relative z-10 transition-colors duration-75 group-hover:text-ink">Let&apos;s build</span>
            <ArrowUpRight className="relative z-10 size-4 transition-colors duration-75 group-hover:text-ink" aria-hidden="true" />
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <MotionSection
      ariaLabel="Product delivery principles"
      className="py-10 md:py-16"
    >
      <div className="grid border border-ink bg-paper md:grid-cols-3">
        {[
          ["01", "Clear product focus", "Each engagement starts with the user problem, the core flow, and the work required to make it useful."],
          ["02", "Reliable delivery", "Architecture, data, and launch details are considered early so the product has room to grow."],
          ["03", "Polished experience", "Interfaces are built to feel clear, responsive, and trustworthy across the moments that matter."]
        ].map(([number, title, body]) => (
          <article key={title} className="border-b border-ink p-6 md:border-b-0 md:border-r md:last:border-r-0">
            <span className="font-mono text-xs font-bold text-cobalt">{number}</span>
            <h2 className="mt-7 font-display text-2xl font-bold leading-none sm:text-3xl md:mt-8 md:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-7 text-ink/68">{body}</p>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}

function PortraitFeature() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <MotionSection
      id="portrait"
      ariaLabel="Portrait of Ayush Mishra, founder of ClearlySimple"
      className="py-12 md:py-24"
    >
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
        <div className="relative min-h-[25rem] border border-ink bg-ink p-3 text-paper shadow-hard-lg sm:min-h-[30rem] md:p-4 lg:min-h-[34rem]">
          <div className="absolute left-4 top-4 z-10 border border-paper/30 bg-ink px-3 py-2 font-mono text-xs uppercase tracking-[0.18em]">
            Ayush Mishra
          </div>
          <div className="mask-diagonal relative h-full min-h-[23rem] overflow-hidden border border-paper/20 bg-[radial-gradient(circle_at_68%_20%,rgba(168,220,255,0.72),transparent_32%),radial-gradient(circle_at_30%_80%,rgba(255,107,53,0.24),transparent_34%),linear-gradient(135deg,#080806_0%,#101d42_46%,#2457ff_100%)] sm:min-h-[28rem] lg:min-h-[31rem]">
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-display text-6xl font-bold text-paper/35 sm:text-8xl">
                AM
              </span>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent,rgba(8,8,6,0.74))]"
            />
            <motion.img
              src="/ayush-portrait.webp"
              alt="Portrait of Ayush Mishra, mobile app developer and digital engineer"
              className={cn(
                "relative z-10 mx-auto h-full max-h-full w-full max-w-full object-contain object-bottom text-transparent saturate-110 drop-shadow-[0_28px_48px_rgba(0,0,0,0.5)]",
                imageFailed && "hidden"
              )}
              loading="lazy"
              decoding="async"
              initial={{ scale: 1.08, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease }}
              onError={(event) => {
                event.currentTarget.style.display = "none";
                setImageFailed(true);
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(115deg,rgba(168,220,255,0.16),transparent_42%,rgba(246,241,232,0.14)_72%,transparent)] mix-blend-soft-light"
            />
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 z-30 border-[18px] border-paper/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </div>

        <div className="grid border border-ink bg-paper">
          <div className="border-b border-ink p-6 md:p-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-ember">
              Operator profile
            </p>
            <h2 className="mt-7 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.92] sm:text-5xl md:mt-8 md:text-7xl md:leading-[0.9]">
              Move fast. Ship clean.
            </h2>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="border-b border-ink p-6 md:border-b-0 md:border-r md:p-8">
              <p className="text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
                Every project is shaped around a clear scope, thoughtful
                implementation, and testing that earns confidence before launch.
              </p>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-2 border border-ink">
                {["Strategy", "Build", "Mobile", "Launch"].map((item) => (
                  <div
                    key={item}
                    className="grid aspect-square place-items-center border-b border-r border-ink text-center font-display text-xl font-bold last:border-r-0 even:border-r-0 [&:nth-last-child(-n+2)]:border-b-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function AppVisual({ app, compact = false }: { app: PortfolioApp; compact?: boolean }) {
  const reduceMotion = useReducedMotion();
  const accentMap = {
    signal: "bg-signal text-ink",
    cobalt: "bg-cobalt text-paper",
    ember: "bg-ember text-paper"
  };

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -6, rotate: compact ? 0 : -0.35, scale: 1.012 }}
      whileTap={reduceMotion ? undefined : { scale: 0.992 }}
      transition={springHover}
      className={cn("grid h-full w-full place-items-center will-change-transform", compact ? "p-2" : "p-3 sm:p-5")}
    >
      <div
        className={cn(
          "grid h-full w-full border border-ink/30 bg-paper text-ink shadow-hard-sm",
          compact ? "min-h-[18rem] sm:min-h-[22rem]" : "min-h-[23rem] sm:min-h-[25rem] lg:min-h-0"
        )}
      >
        <div className={cn("flex flex-wrap items-center justify-between gap-3 border-b border-ink", compact ? "p-3" : "p-3 sm:p-4")}>
          <span className="font-mono text-xs uppercase tracking-[0.2em]">{app.stage}</span>
          <span className={cn("px-2 py-1 text-right font-mono text-[0.62rem] uppercase sm:text-[0.68rem]", accentMap[app.accent])}>
            {app.status}
          </span>
        </div>
        <div className={cn("grid flex-1 content-between", compact ? "p-4" : "p-4 sm:p-5")}>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink/45">
              {app.signal}
            </p>
            <h3
              className={cn(
                "mt-4 break-words font-display font-bold uppercase leading-[0.88]",
                compact
                  ? "text-[clamp(2.1rem,9vw,3.15rem)]"
                  : "text-[clamp(2.35rem,10vw,3.6rem)] sm:mt-5 md:text-5xl md:leading-[0.85]"
              )}
            >
              {app.name}
            </h3>
            <p className={cn("mt-4 max-w-xl font-semibold text-ink/62", compact ? "text-sm leading-6" : "text-sm leading-6 sm:text-base sm:leading-7")}>
              {app.description}
            </p>
          </div>
          <div className={cn("grid grid-cols-1 border border-ink min-[360px]:grid-cols-2", compact ? "mt-5" : "mt-7 sm:mt-8")}>
            {app.stack.map((item) => (
              <span
                key={item}
                className={cn(
                  "border-b border-r border-ink text-[0.7rem] font-bold uppercase last:border-r-0 even:border-r-0 min-[360px]:[&:nth-last-child(-n+2)]:border-b-0",
                  compact ? "p-2.5" : "p-3"
                )}
              >
                {item}
              </span>
            ))}
          </div>
          {app.href ? (
            <MotionLink
              href={app.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${app.name}`}
              className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 border border-ink bg-ink px-4 text-sm font-bold text-paper transition-transform duration-75 hover:-translate-y-0.5 sm:w-auto"
            >
              {app.name === "Petal Chan" ? "Open product" : "App Store"}
              <ExternalLink className="size-4" aria-hidden="true" />
            </MotionLink>
          ) : (
            <span className="mt-4 inline-flex h-11 w-full items-center justify-center border border-ink/30 bg-paper px-4 text-sm font-bold uppercase tracking-[0.12em] text-ink/55 sm:w-auto">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function MobileAppCarousel() {
  const reduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    let rafId = 0;

    const measureActiveCard = () => {
      const cards = Array.from(scroller.querySelectorAll<HTMLElement>("[data-mobile-app-card]"));
      if (!cards.length) return;

      const scrollerCenter = scroller.getBoundingClientRect().left + scroller.clientWidth / 2;
      const closestIndex = cards.reduce((closest, card, index) => {
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - scrollerCenter);
        return distance < closest.distance ? { index, distance } : closest;
      }, { index: 0, distance: Number.POSITIVE_INFINITY }).index;

      setActiveIndex(closestIndex);
    };

    const updateActiveCard = () => {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(measureActiveCard);
    };

    measureActiveCard();
    scroller.addEventListener("scroll", updateActiveCard, { passive: true });
    window.addEventListener("resize", updateActiveCard);

    return () => {
      window.cancelAnimationFrame(rafId);
      scroller.removeEventListener("scroll", updateActiveCard);
      window.removeEventListener("resize", updateActiveCard);
    };
  }, []);

  return (
    <div className="bg-ink px-0 pb-16 pt-7 text-paper md:px-8 lg:hidden">
      <div className="mx-auto max-w-7xl">
        <div
          ref={scrollRef}
          aria-label="Portfolio app carousel"
          className="no-scrollbar flex snap-x snap-mandatory gap-10 overflow-x-auto overscroll-x-contain px-[max(1.5rem,calc((100vw-31rem)/2))] pb-8 pt-4 scroll-smooth sm:gap-12 md:px-8"
        >
          {portfolioApps.map((app, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.article
                data-mobile-app-card="true"
                key={app.name}
                initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.96 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                animate={reduceMotion ? undefined : {
                  opacity: isActive ? 1 : 0.72,
                  scale: isActive ? 1 : 0.94,
                  y: isActive ? 0 : 10
                }}
                whileHover={reduceMotion ? undefined : { y: isActive ? -8 : 2, scale: isActive ? 1.015 : 0.955 }}
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                transition={springHover}
                className="min-w-[78vw] max-w-[78vw] shrink-0 snap-center overflow-hidden border border-paper/20 p-4 shadow-[12px_12px_0_rgba(246,241,232,0.08)] will-change-transform sm:min-w-[28rem] sm:max-w-[28rem]"
                style={{ background: appGradientMap[app.accent] }}
              >
                <AppVisual app={app} compact />
              </motion.article>
            );
          })}
        </div>
        <div className="flex justify-center gap-2" aria-hidden="true">
          {portfolioApps.map((app, index) => (
            <span
              key={app.name}
              className={cn(
                "h-1.5 transition-all duration-500",
                activeIndex === index ? "w-8 bg-signal" : "w-3 bg-paper/25"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AppShowcase() {
  const stickyContent: StickyScrollItem[] = useMemo(
    () =>
      portfolioApps.map((app) => ({
        title: app.name,
        kicker: app.status,
        description: `${app.summary} ${app.role}.`,
        content: <AppVisual app={app} compact />
      })),
    []
  );

  return (
    <motion.section
      id="work"
      aria-label="Portfolio apps by Ayush Mishra"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease }}
      className="relative w-full bg-paper text-ink"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-24">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-ember">
              Portfolio
            </p>
            <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[0.92] text-ink sm:text-5xl md:text-8xl md:leading-[0.9]">
              Built to ship.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
            Three live products across wellness, legal workflows, and private
            chat archives.
          </p>
        </div>
      </div>

      <div className="bg-ink text-paper">
        <div className="mx-auto hidden max-w-7xl px-5 py-16 md:px-8 lg:block">
          <StickyScroll
            content={stickyContent}
            className="border-paper/15 bg-ink text-paper"
            contentClassName="border-paper/30"
          />
        </div>
      </div>

      <MobileAppCarousel />
    </motion.section>
  );
}

function ServiceSection() {
  const icons = [Rocket, Code2, Workflow, ShieldCheck, Layers3, BadgeCheck];

  return (
    <MotionSection
      id="services"
      ariaLabel="Services offered by ClearlySimple"
      className="py-12 md:py-16"
    >
      <div className="border border-paper/20 bg-ink text-paper shadow-hard-lg">
        <div className="grid gap-8 border-b border-paper/15 p-6 md:p-8 lg:grid-cols-[1fr_1.2fr]">
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] sm:text-5xl md:text-8xl md:leading-[0.9]">
            What clients hire me for.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-paper/72 sm:text-lg sm:leading-8">
            From an initial idea to a product ready for release: clear
            priorities, working software, and thoughtful details.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {serviceSignals.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                key={service}
                className="min-h-44 border-b border-r border-paper/15 p-6 last:border-r-0 md:min-h-56 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <Icon className="size-7 text-signal" aria-hidden="true" />
                <h3 className="mt-8 font-display text-2xl font-bold leading-none md:mt-10 md:text-3xl">
                  {service}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}

function HomeFaqSection() {
  return (
    <MotionSection
      id="overview"
      ariaLabel="ClearlySimple overview and frequently asked questions"
      className="py-12 text-paper md:py-16"
    >
      <div className="grid gap-8 border border-paper/20 p-5 md:p-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-signal">
            Overview
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold uppercase leading-[0.92] sm:text-5xl md:text-7xl">
            Frequently asked questions?
          </h2>
          <p className="mt-6 max-w-xl text-base font-medium leading-7 text-paper/70 sm:text-lg sm:leading-8">
            Direct answers for hiring managers, founders, and clients checking
            whether ClearlySimple is the right build partner.
          </p>
        </div>

        <div className="grid gap-3">
          {landingFaqItems.map((item, index) => (
            <article
              key={item.question}
              className="border border-paper/15 bg-paper/[0.03] p-5"
            >
              <span className="font-mono text-xs font-bold text-signal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold leading-7 text-paper md:text-2xl">
                {item.question}
              </h3>
              <p className="mt-4 text-sm font-semibold leading-6 text-paper/62 md:text-base md:leading-7">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function ClosingCta() {
  return (
    <section
      id="contact"
      aria-label="Contact Ayush Mishra about app development"
      className="bg-ink px-5 py-20 text-paper md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border border-paper/20 p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-signal">
              ClearlySimple
            </p>
            <h2 className="mt-6 max-w-5xl font-display text-4xl font-bold uppercase leading-[0.9] sm:text-5xl md:text-8xl md:leading-[0.86]">
              Have a product worth shipping?
            </h2>
          </div>
          <MotionLink
            href="/build-with-me"
            aria-label="Start a project questionnaire"
            className="inline-flex h-14 w-full items-center justify-center gap-3 border border-paper bg-paper px-6 font-bold text-ink transition-transform duration-75 hover:-translate-y-1 sm:w-auto"
          >
            Start a build
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </MotionLink>
        </div>
      </div>
    </section>
  );
}

const footerGroups = [
  {
    label: "Contact",
    links: [
      {
        title: "WhatsApp",
        href: "https://wa.me/917827599839",
        icon: MessageCircle
      },
      {
        title: "Email",
        href: "mailto:hello@clearlysimple.app",
        icon: Mail
      }
    ]
  },
  {
    label: "Products",
    links: [
      {
        title: "Petal Chan",
        href: "https://petalchan.com",
        icon: ExternalLink
      },
      {
        title: "Deposition Timer",
        href: "https://apps.apple.com/us/app/deposition-timer/id6784677621",
        icon: ExternalLink
      },
      {
        title: "KeepDM",
        href: "https://apps.apple.com/us/app/keepdm-locally-save-chats/id6767604258",
        icon: ExternalLink
      }
    ]
  },
  {
    label: "Socials",
    links: [
      {
        title: "Instagram @ayushmishraog",
        href: "https://instagram.com/ayushmishraog",
        icon: Instagram
      },
    ]
  },
  {
    label: "Company",
    links: [
      { title: "About", href: "#portrait" },
      { title: "FAQ", href: "/faq" },
      { title: "Privacy", href: "/privacy" },
      { title: "Terms", href: "/terms" }
    ]
  }
];

function FooterSection() {
  return (
    <footer className="border-t border-paper/15 bg-ink px-5 pb-10 text-paper md:px-8 md:pb-14">
      <div className="mx-auto max-w-7xl border-x border-paper/10">
        <div className="grid gap-8 border-b border-paper/10 px-5 py-8 md:grid-cols-[0.95fr_2fr] md:px-8 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-signal">
              ClearlySimple
            </p>
            <h2 className="mt-4 max-w-md font-display text-3xl font-bold uppercase leading-none sm:text-4xl">
              Build sharp. Ship clean.
            </h2>
            <p className="mt-5 max-w-sm text-sm font-semibold leading-6 text-paper/55">
              Personal portfolio and studio surface of Ayush Mishra.
            </p>
          </motion.div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group, groupIndex) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: groupIndex * 0.05, ease }}
              >
                <h3 className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-paper/40">
                  {group.label}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => {
                    const Icon = "icon" in link ? link.icon : undefined;

                    return (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                          className="group inline-flex items-center gap-2 text-sm font-semibold leading-5 text-paper/68 transition-colors duration-75 hover:text-paper"
                        >
                          {Icon ? (
                            <Icon className="size-4 shrink-0 text-signal transition-transform duration-75 group-hover:-translate-y-0.5" aria-hidden="true" />
                          ) : null}
                          {link.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 px-5 pt-5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-paper/35 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Ayush Mishra. ClearlySimple.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <HashScrollHandler />
      <ScrollProgress />
      <Header />
      <Hero />
      <TrustStrip />
      <AppShowcase />
      <ServiceSection />
      <PortraitFeature />
      <HomeFaqSection />
      <ClosingCta />
      <FooterSection />
    </main>
  );
}

