"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleDollarSign,
  Clock3,
  FileText,
  Layers3,
  Monitor,
  Smartphone,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  audienceOptions,
  budgetOptions,
  contactMethods,
  featureOptions,
  getPlanningEstimate,
  initialAnswers,
  materialOptions,
  projectTypes,
  QUESTION_COUNT,
  timelineOptions,
  type ProjectType,
  type QuestionnaireAnswers
} from "@/app/build-with-me/_data/questionnaire";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const projectIcon: Record<ProjectType, typeof Smartphone> = {
  "mobile-app": Smartphone,
  website: Monitor,
  "web-app": Layers3,
  "app-and-site": Sparkles,
  "not-sure": FileText
};

const fieldClassName =
  "w-full border border-ink/25 bg-paper px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-ink/40 focus:border-cobalt focus:ring-2 focus:ring-cobalt/15";
// These are deliberately public values: they identify the Supabase project and
// let the browser invoke the protected Edge Function. No privileged key is used
// here; saving records and sending email happen exclusively in that function.
const briefDelivery = {
  enabled: process.env.NEXT_PUBLIC_BRIEF_DELIVERY_ENABLED !== "false",
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || "https://taquqmrrygkqftwievkz.supabase.co",
  supabaseAnonKey:
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_oi0SXurptpLPS6_EYlAH7Q_A7zOKdvh"
};

type QuestionFrameProps = {
  number: number;
  eyebrow: string;
  title: string;
  detail: string;
  children: React.ReactNode;
};

function QuestionFrame({ number, eyebrow, title, detail, children }: QuestionFrameProps) {
  return (
    <motion.section
      key={number}
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -18 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-3xl"
    >
      <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-cobalt">
        {String(number).padStart(2, "0")} / {eyebrow}
      </p>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.055em] text-ink sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-ink/65 sm:text-lg">{detail}</p>
      <div className="mt-9">{children}</div>
    </motion.section>
  );
}

function ToggleCard({
  active,
  onClick,
  label,
  description,
  icon: Icon
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  description?: string;
  icon?: typeof Smartphone;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative flex min-h-20 w-full items-center gap-4 border px-4 py-4 text-left transition duration-150 sm:px-5",
        active
          ? "border-ink bg-ink text-paper shadow-hard-sm"
          : "border-ink/20 bg-paper text-ink hover:border-ink hover:bg-signal/25"
      )}
    >
      {Icon ? (
        <span
          className={cn(
            "grid size-10 shrink-0 place-items-center border",
            active ? "border-paper/25 bg-paper/10" : "border-ink/15 bg-signal/35"
          )}
        >
          <Icon className="size-5" aria-hidden="true" />
        </span>
      ) : null}
      <span className="min-w-0 flex-1">
        <span className="block text-base font-bold leading-tight">{label}</span>
        {description ? (
          <span className={cn("mt-1 block text-sm leading-5", active ? "text-paper/65" : "text-ink/55")}>
            {description}
          </span>
        ) : null}
      </span>
      <span
        className={cn(
          "grid size-5 shrink-0 place-items-center border",
          active ? "border-signal bg-signal text-ink" : "border-ink/25 bg-paper"
        )}
        aria-hidden="true"
      >
        {active ? <Check className="size-3.5 stroke-[3]" /> : null}
      </span>
    </button>
  );
}

function ChoicePill({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-12 border px-4 py-2.5 text-left text-sm font-bold leading-5 transition duration-150",
        active ? "border-ink bg-ink text-paper" : "border-ink/20 bg-paper text-ink hover:border-ink hover:bg-signal/30"
      )}
    >
      {active ? <Check className="mr-2 inline size-3.5 align-[-2px]" aria-hidden="true" /> : null}
      {label}
    </button>
  );
}

function SuggestionChips({
  items,
  onSelect
}: {
  items: string[];
  onSelect: (item: string) => void;
}) {
  return (
    <div className="mt-4">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/45">Need a starting point?</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onSelect(item)}
            className="border border-ink/15 bg-white/35 px-3 py-2 text-xs font-bold text-ink/65 transition hover:border-ink hover:bg-signal"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export function BuildQuestionnaire() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>(initialAnswers);
  const contentScrollRef = useRef<HTMLDivElement>(null);
  const [website, setWebsite] = useState("");
  const [submissionState, setSubmissionState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

  useLayoutEffect(() => {
    contentScrollRef.current?.scrollTo({ top: 0 });
  }, [step]);

  const planningEstimate = getPlanningEstimate(answers);
  const budget = budgetOptions[answers.budgetIndex];
  const estimate = {
    label: planningEstimate.label,
    scopeNote:
      budget.value < planningEstimate.low
        ? "Your selected budget points to a lean first release. We would help you identify the strongest essentials."
        : "Your selected budget is a promising starting point for a focused first release."
  };

  const setValue = <Key extends keyof QuestionnaireAnswers>(key: Key, value: QuestionnaireAnswers[Key]) => {
    setAnswers((current) => ({ ...current, [key]: value }));
  };

  const toggleFromList = (key: "features" | "materials", item: string) => {
    setAnswers((current) => {
      const values = current[key];
      return {
        ...current,
        [key]: values.includes(item) ? values.filter((value) => value !== item) : [...values, item]
      };
    });
  };

  const canContinue = () => {
    switch (step) {
      case 0:
        return Boolean(answers.projectType);
      case 1:
        return answers.idea.trim().length >= 12;
      case 2:
        return Boolean(answers.audience);
      case 4:
        return answers.features.length > 0;
      case 6:
        return Boolean(answers.timeline);
      case 8:
        return Boolean(answers.fullName.trim()) && emailPattern.test(answers.email) && answers.consent;
      default:
        return true;
    }
  };

  const next = () => {
    if (!canContinue()) return;
    setStep((current) => Math.min(current + 1, QUESTION_COUNT));
  };

  const back = () => setStep((current) => Math.max(current - 1, 0));

  const updateIdeaFromSuggestion = (suggestion: string) => {
    setValue("idea", answers.idea.trim() ? `${answers.idea.trim()} ${suggestion}` : suggestion);
  };

  const updateOutcomeFromSuggestion = (suggestion: string) => {
    setValue("outcome", answers.outcome.trim() ? `${answers.outcome.trim()} ${suggestion}` : suggestion);
  };

  const submitBrief = async () => {
    if (submissionState === "sending" || !briefDelivery.enabled) return;

    setSubmissionState("sending");
    setSubmissionMessage("");

    try {
      const response = await fetch(`${briefDelivery.supabaseUrl.replace(/\/$/, "")}/functions/v1/send-brief`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: briefDelivery.supabaseAnonKey,
          Authorization: `Bearer ${briefDelivery.supabaseAnonKey}`
        },
        body: JSON.stringify({ answers, website })
      });
      const payload = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.message || "We could not save your brief. Please try again.");
      }

      setSubmissionState("sent");
      setSubmissionMessage(payload?.message || "Your brief has been received. We will be in touch soon.");
    } catch (error) {
      setSubmissionState("error");
      setSubmissionMessage(error instanceof Error ? error.message : "We could not save your brief. Please try again.");
    }
  };

  const isComplete = step === QUESTION_COUNT;

  return (
    <main className="min-h-svh bg-paper px-3 py-3 text-ink sm:px-5 sm:py-5">
      <div className="mx-auto flex h-[calc(100svh-1.5rem)] max-w-6xl flex-col overflow-hidden border border-ink/20 bg-paper shadow-hard-lg sm:h-[calc(100svh-2.5rem)]">
        <div className="z-20 bg-paper/95 backdrop-blur">
          <header className="flex items-center justify-between border-b border-ink/15 px-5 py-4 sm:px-7">
            <Link href="/" className="text-sm font-bold uppercase tracking-[0.19em]" aria-label="Return to ClearlySimple home">
              ClearlySimple
            </Link>
            <span className="hidden text-sm text-ink/55 sm:block">A short, useful project brief</span>
            <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink/50">
              {isComplete ? "Brief ready" : `${step + 1} of ${QUESTION_COUNT}`}
            </span>
          </header>

          {!isComplete ? (
            <div className="h-1 bg-ink/10" aria-hidden="true">
              <motion.div
                className="h-full bg-cobalt"
                animate={{ width: `${((step + 1) / QUESTION_COUNT) * 100}%` }}
                transition={{ duration: 0.25 }}
              />
            </div>
          ) : null}
        </div>

        <div className="flex min-h-0 flex-1 flex-col bg-[radial-gradient(circle_at_92%_5%,rgba(168,220,255,0.72),transparent_22rem),linear-gradient(135deg,rgba(255,255,255,0.3),rgba(255,255,255,0))]">
          <div ref={contentScrollRef} className="flex min-h-0 flex-1 items-start overflow-y-auto px-5 py-11 sm:px-10 sm:py-14 lg:px-16">
            <AnimatePresence mode="wait">
              {isComplete ? (
                <motion.section
                  key="complete"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mx-auto w-full max-w-4xl"
                >
                  <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-cobalt">Your planning snapshot</p>
                  <div className="mt-5 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
                    <div className="border border-ink bg-ink p-6 text-paper shadow-hard-sm sm:p-8">
                      <p className="text-sm font-bold uppercase tracking-[0.15em] text-signal">A useful first conversation</p>
                      <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[0.88] tracking-[-0.055em] sm:text-6xl">
                        A preliminary planning range
                      </h1>
                      <div className="mt-8 border-y border-paper/20 py-5">
                        <p className="font-mono text-xs uppercase tracking-[0.17em] text-paper/55">For the first release</p>
                        <p className="mt-2 text-5xl font-bold tracking-[-0.06em] text-signal sm:text-6xl">{estimate.label}</p>
                        <p className="mt-1 text-sm font-bold text-paper/65">USD · not a fixed quote</p>
                      </div>
                      <p className="mt-6 max-w-xl text-base leading-7 text-paper/78">{estimate.scopeNote}</p>
                    </div>

                    <aside className="border border-ink/20 bg-paper p-5 sm:p-6">
                      <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink/45">What shaped it</p>
                      <dl className="mt-5 space-y-4 text-sm">
                        <div className="border-b border-ink/10 pb-4">
                          <dt className="text-ink/50">Project</dt>
                          <dd className="mt-1 font-bold">
                            {projectTypes.find((item) => item.value === answers.projectType)?.label || "Still to define"}
                          </dd>
                        </div>
                        <div className="border-b border-ink/10 pb-4">
                          <dt className="text-ink/50">Essential needs</dt>
                          <dd className="mt-1 font-bold">{answers.features.length} selected</dd>
                        </div>
                        <div>
                          <dt className="text-ink/50">Your budget signal</dt>
                          <dd className="mt-1 font-bold">{budgetOptions[answers.budgetIndex].label}</dd>
                        </div>
                      </dl>
                    </aside>
                  </div>

                  <section className="mt-8 border border-ink/20 bg-signal/35 p-5 sm:p-6" aria-label="Send your project brief" aria-live="polite">
                    <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cobalt">
                      {submissionState === "sent" ? "Brief received" : briefDelivery.enabled ? "Ready when you are" : "Secure delivery in setup"}
                    </p>
                    <h2 className="mt-3 text-2xl font-bold tracking-[-0.035em]">
                      {submissionState === "sent"
                        ? "Your brief is safely with us."
                        : briefDelivery.enabled
                          ? "Send this brief to ClearlySimple."
                          : "Your brief will be ready to send shortly."}
                    </h2>
                    <p className="mt-2 max-w-2xl leading-6 text-ink/65">
                      {submissionState === "sent"
                        ? submissionMessage
                        : briefDelivery.enabled
                          ? "We will save your answers securely and follow up using the contact method you selected."
                          : "The secure delivery connection is being completed. Your answers remain only in this browser until it is live."}
                    </p>
                    {submissionState === "error" ? (
                      <p className="mt-4 border border-ember/40 bg-paper px-4 py-3 text-sm font-bold text-ember">{submissionMessage}</p>
                    ) : null}
                    <label className="sr-only">
                      Website
                      <input
                        tabIndex={-1}
                        autoComplete="off"
                        value={website}
                        onChange={(event) => setWebsite(event.target.value)}
                      />
                    </label>
                    {submissionState !== "sent" && briefDelivery.enabled ? (
                      <button
                        type="button"
                        onClick={() => void submitBrief()}
                        disabled={submissionState === "sending"}
                        className="mt-6 inline-flex min-h-12 items-center gap-2 border border-ink bg-ink px-5 text-sm font-bold text-paper transition hover:bg-cobalt disabled:cursor-wait disabled:bg-ink/60"
                      >
                        {submissionState === "sending" ? "Sending your brief…" : "Send brief"}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </button>
                    ) : submissionState !== "sent" ? (
                      <span className="mt-6 inline-flex min-h-12 items-center border border-ink/20 bg-paper px-5 text-sm font-bold text-ink/45">
                        Brief delivery coming online
                      </span>
                    ) : null}
                  </section>

                  <button
                    type="button"
                    onClick={back}
                    className="mt-8 inline-flex min-h-12 items-center gap-2 border border-ink bg-paper px-4 text-sm font-bold transition hover:bg-ink hover:text-paper"
                  >
                    <ArrowLeft className="size-4" aria-hidden="true" />
                    Adjust my brief
                  </button>
                </motion.section>
              ) : (
                <>
                  {step === 0 ? (
                    <QuestionFrame
                      number={1}
                      eyebrow="The starting point"
                      title="What are we making together?"
                      detail="Choose the closest fit. You do not need the perfect label—we will use this to make the next questions useful."
                    >
                      <div className="grid gap-3 sm:grid-cols-2">
                        {projectTypes.map((project) => {
                          const Icon = projectIcon[project.value];
                          return (
                            <ToggleCard
                              key={project.value}
                              active={answers.projectType === project.value}
                              onClick={() => setValue("projectType", project.value)}
                              label={project.label}
                              description={project.description}
                              icon={Icon}
                            />
                          );
                        })}
                      </div>
                    </QuestionFrame>
                  ) : null}

                  {step === 1 ? (
                    <QuestionFrame
                      number={2}
                      eyebrow="The idea"
                      title="Tell us the idea in your own words."
                      detail="A few sentences are enough. Share the problem, the moment it matters, or the version you can already picture."
                    >
                      <textarea
                        value={answers.idea}
                        onChange={(event) => setValue("idea", event.target.value)}
                        rows={6}
                        autoFocus
                        placeholder="For example: I want to make it simpler for…"
                        className={cn(fieldClassName, "resize-y leading-6")}
                      />
                      <p className="mt-2 text-sm text-ink/45">{answers.idea.trim().length}/12 characters minimum</p>
                      <SuggestionChips
                        items={["It helps people do this faster.", "It replaces a messy manual process.", "I want an easier first experience for customers."]}
                        onSelect={updateIdeaFromSuggestion}
                      />
                    </QuestionFrame>
                  ) : null}

                  {step === 2 ? (
                    <QuestionFrame
                      number={3}
                      eyebrow="The people"
                      title="Who needs this most?"
                      detail="The clearest products begin with a person or group, not a feature list."
                    >
                      <div className="grid gap-3 sm:grid-cols-2">
                        {audienceOptions.map((option) => (
                          <ToggleCard
                            key={option}
                            active={answers.audience === option}
                            onClick={() => setValue("audience", option)}
                            label={option}
                          />
                        ))}
                      </div>
                    </QuestionFrame>
                  ) : null}

                  {step === 3 ? (
                    <QuestionFrame
                      number={4}
                      eyebrow="The result"
                      title="What would make this feel like a win?"
                      detail="Optional, but helpful. Tell us what you hope becomes easier, clearer, faster, or more valuable."
                    >
                      <textarea
                        value={answers.outcome}
                        onChange={(event) => setValue("outcome", event.target.value)}
                        rows={5}
                        autoFocus
                        placeholder="For example: Customers can finish a task without needing to email us…"
                        className={cn(fieldClassName, "resize-y leading-6")}
                      />
                      <SuggestionChips
                        items={["People can complete the task without extra help.", "The experience feels credible and easy to use.", "We can finally launch and learn from real users."]}
                        onSelect={updateOutcomeFromSuggestion}
                      />
                    </QuestionFrame>
                  ) : null}

                  {step === 4 ? (
                    <QuestionFrame
                      number={5}
                      eyebrow="The essentials"
                      title="What must the first version help people do?"
                      detail="Pick only the things you already know matter. We can decide what belongs in a first release together."
                    >
                      <div className="flex flex-wrap gap-2.5">
                        {featureOptions.map((option) => (
                          <ChoicePill
                            key={option}
                            active={answers.features.includes(option)}
                            label={option}
                            onClick={() => toggleFromList("features", option)}
                          />
                        ))}
                      </div>
                      <p className="mt-4 text-sm text-ink/45">Select at least one. More can be added after the first conversation.</p>
                    </QuestionFrame>
                  ) : null}

                  {step === 5 ? (
                    <QuestionFrame
                      number={6}
                      eyebrow="What exists"
                      title="What can we build from?"
                      detail="Optional. Even a screenshot folder or a few notes are useful places to start."
                    >
                      <div className="flex flex-wrap gap-2.5">
                        {materialOptions.map((option) => (
                          <ChoicePill
                            key={option}
                            active={answers.materials.includes(option)}
                            label={option}
                            onClick={() => toggleFromList("materials", option)}
                          />
                        ))}
                      </div>
                    </QuestionFrame>
                  ) : null}

                  {step === 6 ? (
                    <QuestionFrame
                      number={7}
                      eyebrow="Timing"
                      title="When would you like to begin?"
                      detail="An honest timeline helps us recommend a pace that protects the work."
                    >
                      <div className="grid gap-3 sm:grid-cols-2">
                        {timelineOptions.map((option) => (
                          <ToggleCard
                            key={option}
                            active={answers.timeline === option}
                            onClick={() => setValue("timeline", option)}
                            label={option}
                            icon={Clock3}
                          />
                        ))}
                      </div>
                    </QuestionFrame>
                  ) : null}

                  {step === 7 ? (
                    <QuestionFrame
                      number={8}
                      eyebrow="Investment"
                      title="What range feels sensible for a strong first release?"
                      detail="This is simply a planning signal, not a commitment. It lets us recommend a scope that respects your budget."
                    >
                      <div className="border border-ink/20 bg-paper p-5 sm:p-7">
                        <div className="flex items-center justify-between gap-5">
                          <div>
                            <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-ink/45">Your range</p>
                            <p className="mt-2 text-4xl font-bold tracking-[-0.055em] text-cobalt">{budgetOptions[answers.budgetIndex].label}</p>
                          </div>
                          <span className="grid size-12 place-items-center border border-ink bg-signal">
                            <CircleDollarSign className="size-6" aria-hidden="true" />
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max={budgetOptions.length - 1}
                          step="1"
                          value={answers.budgetIndex}
                          onChange={(event) => setValue("budgetIndex", Number(event.target.value))}
                          className="mt-8 h-3 w-full cursor-pointer accent-cobalt"
                          aria-label="Project budget range"
                        />
                        <div className="mt-3 grid grid-cols-5 gap-1 text-center text-[0.62rem] font-bold leading-3 text-ink/45 sm:text-xs">
                          {budgetOptions.map((option, index) => (
                            <button
                              type="button"
                              key={option.label}
                              onClick={() => setValue("budgetIndex", index)}
                              className={cn("p-1 transition hover:text-ink", index === answers.budgetIndex && "text-cobalt")}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </QuestionFrame>
                  ) : null}

                  {step === 8 ? (
                    <QuestionFrame
                      number={9}
                      eyebrow="The person behind it"
                      title="Where should the next conversation begin?"
                      detail="Share enough for a thoughtful follow-up. We will never sell or share your details."
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block text-sm font-bold">
                          Your name <span className="text-cobalt">*</span>
                          <input
                            value={answers.fullName}
                            onChange={(event) => setValue("fullName", event.target.value)}
                            autoComplete="name"
                            autoFocus
                            placeholder="Your name"
                            className={cn(fieldClassName, "mt-2")}
                          />
                        </label>
                        <label className="block text-sm font-bold">
                          Email <span className="text-cobalt">*</span>
                          <input
                            type="email"
                            value={answers.email}
                            onChange={(event) => setValue("email", event.target.value)}
                            autoComplete="email"
                            placeholder="you@company.com"
                            className={cn(fieldClassName, "mt-2")}
                          />
                        </label>
                        <label className="block text-sm font-bold sm:col-span-2">
                          Company or project name <span className="font-normal text-ink/40">(optional)</span>
                          <input
                            value={answers.company}
                            onChange={(event) => setValue("company", event.target.value)}
                            autoComplete="organization"
                            placeholder="Company, studio, or project name"
                            className={cn(fieldClassName, "mt-2")}
                          />
                        </label>
                      </div>
                      <fieldset className="mt-6">
                        <legend className="text-sm font-bold">Preferred follow-up</legend>
                        <div className="mt-2 flex flex-wrap gap-2.5">
                          {contactMethods.map((method) => (
                            <ChoicePill
                              key={method}
                              active={answers.contactMethod === method}
                              label={method}
                              onClick={() => setValue("contactMethod", method)}
                            />
                          ))}
                        </div>
                      </fieldset>
                      <label className="mt-6 flex cursor-pointer gap-3 border border-ink/15 bg-white/35 p-4 text-sm leading-5">
                        <input
                          type="checkbox"
                          checked={answers.consent}
                          onChange={(event) => setValue("consent", event.target.checked)}
                          className="mt-0.5 size-4 shrink-0 accent-cobalt"
                        />
                        <span>I am happy for ClearlySimple to use these details to respond to this project enquiry.</span>
                      </label>
                    </QuestionFrame>
                  ) : null}
                </>
              )}
            </AnimatePresence>
          </div>

          {!isComplete ? (
            <div className="z-20 border-t border-ink/15 bg-paper/95 px-5 py-4 backdrop-blur sm:px-10 lg:px-16">
              <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={back}
                  disabled={step === 0}
                  className="inline-flex min-h-12 items-center gap-2 px-1 text-sm font-bold text-ink transition disabled:pointer-events-none disabled:opacity-30"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={!canContinue()}
                  data-testid="questionnaire-next"
                  className="inline-flex min-h-12 items-center gap-2 border border-ink bg-ink px-5 text-sm font-bold text-paper transition hover:bg-cobalt disabled:cursor-not-allowed disabled:border-ink/20 disabled:bg-ink/20 disabled:text-ink/45"
                >
                  {step === QUESTION_COUNT - 1 ? "See my planning range" : "Continue"}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
