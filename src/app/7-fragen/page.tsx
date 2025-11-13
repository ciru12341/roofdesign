import type { Metadata } from "next";

const valueBullets = [
  "Mehr Geld für anderes: Spare 3–5 Tsd. € durch Eigenleistung und triff fundierte Entscheidungen.",
  "Keine Angst vor Fremdfehlern: Verstehe jeden Schritt – Du hast die Kontrolle über die Ausführung.",
  "Reparaturen ab jetzt selbst: Lerne die Grundlagen, um spätere Schäden eigenständig zu beheben.",
];

const helpBullets = [
  "Realistische Selbsteinschätzung (Du weißt sofort, ob Eigenleistung für Dich sicher und wirtschaftlich ist).",
  "Klarer Fahrplan (Du bekommst konkrete To-dos und Reihenfolge der Arbeitsschritte).",
  "Material-Pre-Check (Empfehlungen für Dachaufbau, Werkzeuge und Bezugsquellen).",
  "Sicherheitsfokus (Hinweise zu Arbeitssicherheit, Wetterfenster und Risiken).",
  "Clever sparen (Erkenne, wo Eigenleistung sinnvoll ist – und wo Profi-Support nötig bleibt).",
];

const steps = [
  "Quiz starten: Beantworte 7 kurze Fragen zu Erfahrung, Zeit, Höhe, Werkzeug und Team.",
  "Ergebnis erhalten: Du bekommst Deine Einstufung plus konkrete Nächste-Schritte und Material-Pre-Check.",
  "Plan sicher machen: Auf Wunsch kurzes 15-Minuten-Projekt-Check-Gespräch für Deine Fragen.",
];

const faqItems = [
  {
    question: "Wie lange dauert das Quiz?",
    answer: "3–5 Minuten. Direkt im Anschluss erhältst Du Dein Ergebnis.",
  },
  {
    question: "Ist das sicher?",
    answer:
      "Das Quiz zeigt Dir, ob Eigenleistung für Dich realistisch und sicher ist – inkl. Sicherheits- und Qualitäts-Hinweisen.",
  },
  {
    question: "Wie genau ist das Ergebnis?",
    answer:
      "Es basiert auf Deinen Angaben und unserer Erfahrung aus echten Projekten – für die Detailplanung empfehlen wir einen kurzen Projekt-Check.",
  },
  {
    question: "Lohnt sich Eigenleistung wirklich?",
    answer:
      "Je nach Dachgröße sparst Du oft 3–5 Tsd. € oder mehr – bei fachgerechter Ausführung und guter Planung.",
  },
  {
    question: "Was ist mit Datenschutz?",
    answer: "100 % DSGVO-konform. Kein Spam. Du kannst Dich jederzeit mit einem Klick abmelden.",
  },
];

export const metadata: Metadata = {
  title: "7-Fragen-Eignungs-Quiz zum Selber-Dachdecken",
  description:
    "Finde in 3 Minuten heraus, ob Du Dein Dach selbst decken kannst – inklusive Fahrplan, Sicherheits-Hinweisen und Material-Pre-Check.",
};

export default function SevenFragenPage() {
  return (
    <main
      className="min-h-screen w-full bg-gradient-to-b from-slate-100 via-white to-slate-100 px-4 py-12 text-[#1f2933]"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="mx-auto max-w-4xl space-y-10">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 px-8 py-12 text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="mx-auto h-full w-full scale-110 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative space-y-6 text-center">
            <p className="inline-flex items-center justify-center rounded-full bg-white/15 px-4 py-1 text-sm font-semibold tracking-wide">
              7 Fragen · 3 Minuten · Sofort-Ergebnis
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Bist Du bereit, Dein Dach selbst zu decken?
            </h1>
            <p className="text-lg text-white/90 sm:text-xl">
              Erhalte eine klare Einschätzung, konkrete nächste Schritte und Profi-Tipps – ohne Risiko.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                className="inline-flex items-center justify-center rounded-2xl bg-green-400 px-6 py-3 text-lg font-semibold text-slate-900 transition hover:bg-green-300"
                href="#"
              >
                Quiz starten – kostenlos
              </a>
              <p className="text-sm text-white/80">Keine Vorbereitung nötig · DSGVO-konform</p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl bg-white p-6 shadow-lg sm:grid-cols-3">
          {valueBullets.map((item) => (
            <div key={item} className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm leading-relaxed">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                ✓
              </span>
              <p>{item}</p>
            </div>
          ))}
        </section>

        <section className="rounded-3xl bg-slate-900 px-6 py-5 text-sm text-slate-100 shadow-lg sm:flex sm:items-center sm:justify-between">
          <span className="text-base font-semibold">Vertrauenselemente</span>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wide text-slate-300">
            <span className="rounded-full bg-white/10 px-3 py-1">Dach-Profis</span>
            <span className="rounded-full bg-white/10 px-3 py-1">100 % DSGVO</span>
            <span className="rounded-full bg-white/10 px-3 py-1">Kein Spam</span>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-slate-900">So hilft Dir das Quiz</h3>
            <p className="text-sm text-slate-500">Erhalte sofort Klarheit, wo Du stehst und welche Schritte als Nächstes kommen.</p>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {helpBullets.map((item) => (
              <div key={item} className="flex items-start gap-4 rounded-2xl border border-slate-100 p-4">
                <span className="mt-1 h-3 w-3 rounded-full bg-blue-500" />
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-900/95 p-8 text-slate-50 shadow-2xl">
          <h3 className="text-2xl font-semibold">So funktioniert’s</h3>
          <div className="mt-6 space-y-6">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl font-semibold">
                  {index + 1}
                </div>
                <p className="text-base leading-relaxed text-white/90">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-slate-900">FAQ</h3>
            <p className="text-sm text-slate-500">Die wichtigsten Antworten auf einen Blick.</p>
          </div>
          <div className="mt-6 space-y-4">
            {faqItems.map(({ question, answer }) => (
              <div key={question} className="rounded-2xl border border-slate-100 p-5 transition hover:shadow-md">
                <p className="text-base font-semibold text-slate-900">{question}</p>
                <p className="mt-2 text-sm text-slate-600">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-r from-green-400 via-green-300 to-lime-200 px-8 py-10 text-center shadow-xl">
          <a
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-slate-800"
            href="#"
          >
            Jetzt Quiz starten und Eignung prüfen
          </a>
          <p className="mt-4 text-sm text-slate-700">100 % DSGVO-konform. Kein Spam. Jederzeit abmeldbar.</p>
        </section>
      </div>
    </main>
  );
}
