import type { Metadata } from "next";
import { faqItems, helpBullets, steps, valueBullets } from "@/lib/7fragen";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "7-Fragen-Eignungs-Quiz zum Selber-Dachdecken",
  description:
    "Finde in 3 Minuten heraus, ob Du Dein Dach selbst decken kannst - inklusive Fahrplan, Sicherheits-Hinweisen und Material-Pre-Check.",
};

export default function SevenFragenPage() {
  return (
    <Container>
      <main className="min-h-screen w-full bg-slate-50 px-4 py-12 text-slate-900 font-sans">
        <div className="mx-auto max-w-4xl space-y-10">
          <section className="overflow-hidden rounded-3xl bg-linear-to-r from-slate-900 to-slate-800 px-8 py-12 text-white shadow-md">
            <div className="relative space-y-4 text-center">
              <p className="inline-flex items-center justify-center rounded-full bg-slate-700/60 px-3 py-1 text-xs font-semibold tracking-wide">
                7 Fragen · 3 Minuten · Sofort-Ergebnis
              </p>
              <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                Bist Du bereit, Dein Dach selbst zu decken?
              </h1>
              <p className="text-base text-slate-200 sm:text-lg max-w-2xl mx-auto">
                Klare Einschätzung, konkrete nächste Schritte und Praxis-Tipps — von Profis, verständlich erklärt.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center items-center">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-amber-400 px-6 py-3 text-lg font-semibold text-slate-900 shadow hover:bg-amber-400 transition-colors"
                  href="/7-fragen/quiz"
                  aria-label="Quiz starten"
                >
                  Quiz starten - kostenlos
                </a>
                <p className="text-sm text-slate-300">Keine Vorbereitung nötig · DSGVO-konform</p>
              </div>
            </div>
          </section>

          <section className="grid gap-4 rounded-3xl bg-white p-4 sm:p-6 shadow-sm sm:grid-cols-3">
            {valueBullets.map((item) => (
              <div key={item} className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-100 text-amber-700 font-semibold">✓</span>
                  <p className="text-sm font-semibold text-slate-800">{item.split(':')[0] || item}</p>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{item.split(':')[1] || item}</p>
              </div>
            ))}
          </section>

          <section className="rounded-3xl bg-white/80 px-6 py-5 text-sm text-slate-800 shadow-inner sm:flex sm:items-center sm:justify-between">
            <span className="text-base font-semibold">Vertrauenselemente</span>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wide text-slate-600">
              <span className="rounded-full bg-slate-100 px-3 py-1">Dach-Profis</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">100 % DSGVO</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">Kein Spam</span>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-slate-900">So hilft Dir das Quiz</h3>
              <p className="text-sm text-slate-600">Erhalte sofort Klarheit, wo Du stehst und welche nächsten Schritte sinnvoll sind.</p>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {helpBullets.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl border border-slate-100 p-4">
                  <span className="mt-1 h-3 w-3 rounded-full bg-amber-400" />
                  <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-slate-50 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">So funktioniert’s</h3>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 items-center rounded-2xl border border-slate-100 bg-white p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-white text-lg font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-base leading-relaxed text-slate-800">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-slate-900">FAQ</h3>
              <p className="text-sm text-slate-600">Die wichtigsten Antworten auf einen Blick.</p>
            </div>
            <div className="mt-6 space-y-4">
              {faqItems.map(({ question, answer }) => (
                <div key={question} className="rounded-2xl border border-slate-100 p-5 hover:shadow-md transition-shadow">
                  <p className="text-base font-semibold text-slate-900">{question}</p>
                  <p className="mt-2 text-sm text-slate-600">{answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-slate-100 px-4 py-8 sm:px-8 sm:py-10 text-center shadow-md">
            <a
              className="w-full sm:inline-flex sm:w-auto items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-lg font-semibold text-white shadow hover:opacity-95 block text-center"
              href="/7-fragen/quiz"
              aria-label="Jetzt Quiz starten"
            >
              Jetzt Quiz starten und Eignung prüfen
            </a>
            <p className="mt-4 text-sm text-slate-900">100 % DSGVO-konform. Kein Spam. Jederzeit abmeldbar.</p>
          </section>
        </div>
      </main>
    </Container>
  );
}
