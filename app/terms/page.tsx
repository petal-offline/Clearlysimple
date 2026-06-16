export default function TermsPage() {
  return (
    <main className="min-h-screen bg-paper px-5 py-16 text-ink md:px-8">
      <section className="mx-auto max-w-4xl border border-ink p-6 md:p-10">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-cobalt">
          Terms
        </p>
        <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-none md:text-7xl">
          Terms of use
        </h1>
        <div className="mt-8 space-y-5 text-base font-semibold leading-7 text-ink/70">
          <p>
            This website is a portfolio and contact surface for Ayush Mishra and
            ClearlySimple.
          </p>
          <p>
            Project work, pricing, ownership, timelines, and delivery terms are
            agreed separately before any build begins.
          </p>
          <p>
            Portfolio links and third-party platforms may open external sites
            with their own terms.
          </p>
        </div>
      </section>
    </main>
  );
}
