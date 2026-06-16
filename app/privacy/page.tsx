export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-paper px-5 py-16 text-ink md:px-8">
      <section className="mx-auto max-w-4xl border border-ink p-6 md:p-10">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-cobalt">
          Privacy
        </p>
        <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-none md:text-7xl">
          Privacy policy
        </h1>
        <div className="mt-8 space-y-5 text-base font-semibold leading-7 text-ink/70">
          <p>
            ClearlySimple collects only the information a visitor chooses to
            send through email, WhatsApp, or linked social platforms.
          </p>
          <p>
            Contact details are used to reply to project inquiries and are not
            sold or shared for advertising.
          </p>
          <p>
            External links such as Petal Chan, Instagram, Reddit, and WhatsApp
            are governed by their own privacy practices.
          </p>
        </div>
      </section>
    </main>
  );
}
