"use client";

import { useState } from "react";
import { questions } from "@/lib/quiz";

export default function QuizPage() {
  const [step, setStep] = useState<number>(0); // 0 = intro, 1..7 questions, 8 = abschluss
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const startQuiz = () => setStep(1);

  const selectOption = (qId: number, value: string, multi?: boolean) => {
    setAnswers(prev => {
      const copy = { ...prev };
      if (multi) {
        const arr = new Set<string>(Array.isArray(copy[qId]) ? copy[qId] as string[] : []);
        if (arr.has(value)) arr.delete(value); else arr.add(value);
        copy[qId] = Array.from(arr);
      } else {
        copy[qId] = value;
      }
      return copy;
    });
  };

  const currentQuestion = questions[step - 1];

  const next = () => {
    // if current is question 5 and answer is "nein" -> skip to final
    if (step >= 1 && step <= questions.length) {
      const q = questions[step - 1];
      const ans = answers[q.id];
      if (q.id === 5 && ans === "nein") {
        setStep(8);
        return;
      }
    }
    if (step < questions.length) setStep(step + 1);
    else setStep(8);
  };

  const prev = () => {
    if (step > 1) setStep(step - 1);
    else setStep(0);
  };

  const submit = () => {
    if (!email) {
      alert("Bitte gib eine gültige E-Mail-Adresse an.");
      return;
    }
    // simulate submission -> later link to API of newsletter service
    setSubmitted(true);
    console.log("Quiz submission", { answers, email });
  };

  return (
    <main className="min-h-screen w-full bg-slate-50 px-4 py-8 text-slate-900 font-sans">
      <div className="mx-auto max-w-2xl">
        {step === 0 && (
          <section className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-2xl font-bold mb-3">Finde mit nur 7 einfachen Fragen heraus, ob du dein Dach selbst decken kannst</h2>
            <p className="text-sm text-slate-700 mb-4">Wenn du mit nur 5% dieses Quiz bestehst, bist du mindestens auf dem selben Stand wie ein Dachdecker Lehrling im 1ten Jahr und bist mehr als ausreichend Qualifiziert mit unserer Hilfe dein Dach selbst zu decken.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={startQuiz} className="w-full sm:w-auto rounded-2xl bg-amber-300 px-5 py-3 font-semibold text-slate-900 shadow hover:bg-amber-400">Quiz jetzt starten</button>
              <button onClick={() => window.history.back()} className="w-full sm:w-auto rounded-2xl border border-slate-200 px-5 py-3 text-sm">Quit</button>
            </div>
          </section>
        )}

        {step >= 1 && step <= 7 && currentQuestion && (
          <section className="rounded-2xl bg-white p-6 shadow">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Frage {currentQuestion.id} von 7</h3>
                <p className="text-sm text-slate-600">{currentQuestion.question}</p>
              </div>
              <div className="text-sm text-slate-500">Fortschritt: {Math.round(((currentQuestion.id - 1) / 7) * 100)}%</div>
            </div>

            <div className="grid gap-3">
              {currentQuestion.options.map(opt => {
                const selected = currentQuestion.multi
                  ? Array.isArray(answers[currentQuestion.id]) && (answers[currentQuestion.id]).includes(opt.value)
                  : answers[currentQuestion.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => selectOption(currentQuestion.id, opt.value, currentQuestion.multi)}
                    className={`text-left rounded-md p-3 border ${selected ? 'border-amber-300 bg-amber-50' : 'border-slate-200 bg-white'} shadow-sm`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button onClick={prev} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm">Zurück</button>
              <div className="flex items-center gap-3">
                <button onClick={next} className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white">Weiter</button>
              </div>
            </div>
          </section>
        )}

        {step === 8 && (
          <section className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-2xl font-bold mb-2">Hier findest du deine Ergebnisse</h2>
            <p className="text-sm text-slate-700 mb-4">Und nimmst am Gewinnspiel teil!</p>

            <div className="rounded-md border border-slate-100 p-4 bg-slate-50 mb-4">
              <p className="text-sm text-slate-700">Bitte bestätige, dass du kein Roboter bist, um Datendiebstahl keine Möglichkeit zu geben.</p>
              <p className="text-xs text-slate-500 mt-2">Wegen Datenschutzrichtlinien wird hier kein Name abgefragt (DSGVO).</p>
            </div>

            <label className="block text-sm text-slate-700 mb-1">E-Mail</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border border-slate-200 px-3 py-2 mb-3" placeholder="deine@email.de" />

            {!submitted ? (
              <button onClick={submit} className="w-full rounded-2xl bg-amber-300 px-4 py-3 font-semibold text-slate-900 shadow hover:bg-amber-400">Ich bin kein Roboter</button>
            ) : (
              <div className="rounded-md p-4 bg-amber-50 border border-amber-100 text-amber-800">Danke! Deine Teilnahme wurde registriert. Wir schicken dir in Kürze Informationen zu.</div>
            )}

            <div className="mt-4 text-xs text-slate-500">Mit dem Absenden nimmst du an unserem Gewinnspiel teil. Es werden keine unnötigen Daten gespeichert.</div>
          </section>
        )}
      </div>
    </main>
  );
}
