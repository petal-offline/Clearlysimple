export default function FaqPage() {
  return (
    <main className="min-h-screen bg-paper px-5 py-16 text-ink md:px-8">
      <section className="mx-auto max-w-4xl border border-ink p-6 md:p-10">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-cobalt">
          FAQ
        </p>
        <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-none md:text-7xl">
          Project questions
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-ink/70">
          This page will be expanded in the dedicated SEO and AEO pass. For now,
          the fastest way to discuss a build is to contact Ayush directly.
        </p>
        <a
          href="mailto:hello@clearlysimple.apps?subject=Project%20question"
          className="mt-8 inline-flex h-12 items-center border border-ink bg-ink px-5 font-bold text-paper"
        >
          Email ClearlySimple
        </a>
      </section>
    </main>
  );
}
