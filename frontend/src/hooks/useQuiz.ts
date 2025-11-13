
import { useState } from "react";
import { questions as quizQuestions } from "@/lib/quiz";

type AnswerMap = Record<number, string | string[]>;

export function useQuiz() {
  const [step, setStep] = useState<number>(0); // 0 = intro, 1..7 questions, 8 = final
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  const startQuiz = () => setStep(1);

  const selectOption = (qId: number, value: string, multi?: boolean) => {
    setAnswers(prev => {
      const copy = { ...prev };
      if (multi) {
        const arr = new Set<string>(Array.isArray(copy[qId]) ? (copy[qId] as string[]) : []);
        if (arr.has(value)) arr.delete(value); else arr.add(value);
        copy[qId] = Array.from(arr);
      } else {
        copy[qId] = value;
      }
      return copy;
    });
  };

  const currentQuestion = quizQuestions[step - 1];

  const answered = currentQuestion
    ? (currentQuestion.multi
      ? Array.isArray(answers[currentQuestion.id]) && (answers[currentQuestion.id] as string[]).length > 0
      : !!answers[currentQuestion.id])
    : false;

  const next = () => {
    // require answer before continuing (except when moving from intro)
    if (step >= 1 && step <= quizQuestions.length && !answered) return;

    // if current is question 5 and answer is "nein" -> skip to final
    if (step >= 1 && step <= quizQuestions.length) {
      const q = quizQuestions[step - 1];
      const ans = answers[q.id];
      if (q.id === 5 && ans === "nein") {
        setStep(8);
        return;
      }
    }

    if (step < quizQuestions.length) setStep(step + 1);
    else setStep(8);
  };

  const prev = () => {
    if (step > 1) setStep(step - 1);
    else setStep(0);
  };

  const submit = () => {
    if (!email) {
      return false;
    }
    // simulate submission -> later link to API of newsletter service
    setSubmitted(true);
    console.log("Quiz submission", { answers, email });
    return true;
  };

  return {
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
    questions: quizQuestions,
    answers,
    consent,
    setConsent,
  };
}

export default useQuiz;
