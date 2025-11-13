"use client";
import useQuiz from "@/hooks/useQuiz";

export default function QuizPage() {
  const {
    step,
    startQuiz,
    selectOption,
    currentQuestion,
    answered,
    next,
    prev,
    email,
    setEmail,
    submitted,
    submit,
    questions,
    answers,
    consent,
    setConsent,
  } = useQuiz();

  return (
    <main className="min-h-screen w-full bg-slate-50 px-4 py-8 text-slate-900 font-sans">
      <div className="mx-auto max-w-2xl">
        {step === 0 && (
          <section className="rounded-3xl bg-linear-to-b from-amber-50 via-white to-white p-6 shadow-lg">
            <div className="flex gap-6 items-center">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">Bist du bereit fürs Dach?</h1>
                <p className="text-slate-700 mb-4">In nur 7 Fragen zeigen wir dir, ob du mit ein bisschen Anleitung dein Dach selbst decken kannst - oder wann es besser ist, Profis hinzuzuziehen.</p>

                <ul className="text-sm text-slate-600 space-y-2 mb-4">
                  <li>• Kurz: 7 Fragen, 2 Minuten</li>
                  <li>• Praktische Tipps am Ende</li>
                  <li>• Teilnahme am Gewinnspiel mit E-Mail</li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={startQuiz} className="w-full sm:w-auto rounded-2xl bg-amber-400 px-6 py-3 font-semibold text-slate-900 shadow hover:bg-amber-500">Quiz starten - los geht&apos;s</button>
                  <button onClick={() => window.history.back()} className="w-full sm:w-auto rounded-2xl border border-slate-200 px-6 py-3 text-sm">Später</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {step >= 1 && step <= 7 && currentQuestion && (
          <section id="question-section" className="rounded-2xl bg-white p-6 shadow">
            <div id="progress-bar" className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Frage {currentQuestion.id} von {questions.length}</h3>
                  <p className="text-sm text-slate-600">{currentQuestion.question}</p>
                </div>
                <div className="text-sm text-slate-500">{Math.round(((currentQuestion.id - 1) / questions.length) * 100)}%</div>
              </div>

              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-300" style={{ width: `${Math.round(((currentQuestion.id - 1) / questions.length) * 100)}%` }} />
              </div>
            </div>

            <div className="grid gap-3">
              {currentQuestion.options.map(opt => {
                const selected = currentQuestion.multi
                  ? Array.isArray(answers[currentQuestion.id]) && (answers[currentQuestion.id]).includes(opt.label)
                  : answers[currentQuestion.id] === opt.label;
                return (
                  <button
                    key={opt.label}
                    onClick={() => selectOption(currentQuestion.id, opt.label, currentQuestion.multi)}
                    className={`text-left hover:cursor-pointer rounded-md p-3 border flex items-center justify-between ${selected ? 'border-amber-300 bg-amber-50' : 'border-slate-200 bg-white'} shadow-sm`}
                  >
                    <span>{opt.label}</span>
                    {selected && <span className="text-amber-600 font-semibold">✓</span>}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button onClick={prev} className="rounded-2xl hover:cursor-pointer border border-slate-200 px-4 py-2 text-sm">Zurück</button>
              <div className="flex items-center gap-3">
                <button
                  onClick={next}
                  disabled={!answered}
                  className={`rounded-2xl px-4 hover:cursor-pointer py-2 text-sm text-white ${answered ? 'bg-slate-900 hover:brightness-105' : 'bg-slate-400 opacity-60 cursor-not-allowed'}`}
                >
                  Weiter
                </button>
              </div>
            </div>
          </section>
        )}

        {step === 8 && (

          <section className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-2xl font-bold mb-2">Deine Ergebnisse & Teilnahme</h2>
            <p className="text-sm text-slate-700 mb-4">Hier siehst du kurz, wie du geantwortet hast. Trage deine E-Mail ein, um am Gewinnspiel teilzunehmen und die Tipps zu erhalten.</p>

            <div className="space-y-3 mb-4">
              {questions.map(q => (
                <div key={q.id} className="text-sm">
                  <div className="font-medium">{q.id}. {q.question}</div>
                  <div className="text-slate-600">{Array.isArray(answers[q.id]) ? (answers[q.id] as string[]).join(', ') : (answers[q.id]) || '-'}</div>
                </div>
              ))}
            </div>

            <div className="rounded-md border border-slate-100 p-4 bg-slate-50 mb-4">
              <p className="text-sm text-slate-700">Keine Sorge - wir fragen nur die E-Mail ab. Deine Daten werden für das Gewinnspiel und die Zusendung relevanter Infos verwendet.</p>
              <p className="text-xs text-slate-500 mt-2">DSGVO-konform. Du kannst dich jederzeit abmelden.</p>
            </div>

            <label className="block text-sm text-slate-700 mb-1">E-Mail</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border border-slate-200 px-3 py-2 mb-3" placeholder="deine@email.de" />

            <label className="flex items-center gap-2 text-sm mb-3">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="w-4 h-4" />
              <span className="text-slate-600">Ich akzeptiere die Teilnahmebedingungen und die Datenschutzerklärung</span>
            </label>

            {!submitted ? (
              <button
                onClick={() => {
                  if (!email) {
                    alert('Bitte gib eine gültige E-Mail-Adresse an.');
                    return;
                  }
                  if (!consent) {
                    alert('Bitte bestätige die Teilnahmebedingungen.');
                    return;
                  }
                  submit();
                }}
                className={`w-full rounded-2xl px-4 py-3 font-semibold text-slate-900 shadow ${email && consent ? 'bg-amber-300 hover:bg-amber-400' : 'bg-slate-400 cursor-not-allowed'}`}
              >
                Teilnahme abschicken
              </button>
            ) : (
              <div className="rounded-md p-4 bg-amber-50 border border-amber-100 text-amber-800">Danke! Deine Teilnahme wurde registriert. Wir schicken dir in Kürze Informationen zu.</div>
            )}

            <div className="mt-4 text-xs text-slate-500">Mit dem Absenden nimmst du an unserem Gewinnspiel teil. Es werden nur die notwendigsten Daten gespeichert.</div>
          </section>
        )}
      </div>
    </main>
  );
}
