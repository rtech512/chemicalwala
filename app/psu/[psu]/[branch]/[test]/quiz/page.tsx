"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { hpclMechanicalTest1 } from "@/data/psu/hpcl/mechanical/test-1";

export default function HpclMechanicalQuizPage() {
  const router = useRouter();
  const questions = hpclMechanicalTest1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [review, setReview] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(150 * 60);
  const [submitOpen, setSubmitOpen] = useState(false);

useEffect(() => {
  if (timeLeft <= 0) return;

  const timer = setInterval(() => {
    setTimeLeft((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [timeLeft]);

const hours = Math.floor(timeLeft / 3600);
const minutes = Math.floor((timeLeft % 3600) / 60);
const seconds = timeLeft % 60;

const formattedTime = `${String(hours).padStart(2, "0")}:${String(
  minutes
).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const current = questions[currentIndex];

  const answeredCount = Object.keys(answers).length;
  const reviewCount = review.length;
  const notAnsweredCount = questions.length - answeredCount;

  function selectAnswer(option: string) {
    setAnswers((prev) => ({
      ...prev,
      [current.id]: option,
    }));
  }

  function toggleReview() {
    setReview((prev) =>
      prev.includes(current.id)
        ? prev.filter((id) => id !== current.id)
        : [...prev, current.id]
    );
  }

  function clearAnswer() {
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[current.id];
      return copy;
    });
  }
function handleFinalSubmit() {
  let correct = 0;

  questions.forEach((q) => {
    if (answers[q.id] === q.correctAnswer) {
      correct++;
    }
  });

  const attempted = Object.keys(answers).length;
  const wrong = attempted - correct;
  const skipped = questions.length - attempted;
  const timeTaken = 150 * 60 - timeLeft;

  const result = {
    total: questions.length,
    correct,
    wrong,
    skipped,
    attempted,
    timeTaken,
    answers,
  };

  sessionStorage.setItem(
    "hpclMechanicalTest1Result",
    JSON.stringify(result)
  );

  router.push("/psu/hpcl/mechanical/test-1/result");
}
  return (
    <main className="min-h-screen bg-[#071521] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">
                HPCL Mechanical Test 1
              </h1>
              <p className="text-sm text-gray-300">
                170 Questions • 150 Minutes • Previous Paper Similar Level
              </p>
            </div>

            <div className="rounded-xl bg-red-500 px-5 py-3 text-lg font-bold">
              {formattedTime}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_330px]">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-blue-500/20 px-4 py-1 text-sm text-blue-300">
                {current.section}
              </span>
              <span className="text-sm text-gray-300">
                Question {currentIndex + 1} of {questions.length}
              </span>
            </div>

            <h2 className="mb-6 text-xl font-semibold leading-relaxed">
              {current.question}
            </h2>

            <div className="space-y-3">
              {current.options.map((option) => (
                <button
                  key={option}
                  onClick={() => selectAnswer(option)}
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    answers[current.id] === option
                      ? "border-green-400 bg-green-500/20"
                      : "border-white/10 bg-[#0b2033] hover:border-blue-400"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                className="rounded-xl bg-gray-700 px-5 py-3 font-semibold"
              >
                Previous
              </button>

              <button
                onClick={clearAnswer}
                className="rounded-xl bg-orange-600 px-5 py-3 font-semibold"
              >
                Clear Response
              </button>

              <button
                onClick={toggleReview}
                className="rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-black"
              >
                Mark for Review
              </button>

              <button
                onClick={() =>
                  setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))
                }
                className="ml-auto rounded-xl bg-blue-600 px-6 py-3 font-semibold"
              >
                Next
              </button>
            </div>
          </section>

          <aside className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-green-500/20 p-3">
                Answered: {answeredCount}
              </div>
              <div className="rounded-xl bg-yellow-500/20 p-3">
                Review: {reviewCount}
              </div>
            </div>

            <h3 className="mb-3 font-bold">Question Palette</h3>

            <div className="grid max-h-[520px] grid-cols-5 gap-2 overflow-y-auto pr-1">
              {questions.map((q, index) => {
                const isAnswered = answers[q.id];
                const isReview = review.includes(q.id);
                const isCurrent = currentIndex === index;

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-10 rounded-lg text-sm font-bold ${
                      isCurrent
                        ? "bg-blue-600"
                        : isReview
                        ? "bg-yellow-500 text-black"
                        : isAnswered
                        ? "bg-green-600"
                        : "bg-gray-700"
                    }`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>

            <button
  onClick={() => setSubmitOpen(true)}
  className="mt-6 w-full rounded-xl bg-red-600 py-3 font-bold hover:bg-red-500"
>
  Submit Test
</button>
          </aside>
        </div>
      </div>
      {submitOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b2033] p-6 shadow-2xl">
      <h2 className="text-2xl font-bold text-white">
        Submit Test?
      </h2>

      <p className="mt-2 text-sm text-gray-300">
        Please review your attempt summary before final submission.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-blue-500/20 p-4">
          <p className="text-sm text-gray-300">Total</p>
          <p className="mt-1 text-2xl font-bold text-white">
            {questions.length}
          </p>
        </div>

        <div className="rounded-xl bg-green-500/20 p-4">
          <p className="text-sm text-gray-300">Answered</p>
          <p className="mt-1 text-2xl font-bold text-green-400">
            {answeredCount}
          </p>
        </div>

        <div className="rounded-xl bg-red-500/20 p-4">
          <p className="text-sm text-gray-300">Not Answered</p>
          <p className="mt-1 text-2xl font-bold text-red-400">
            {notAnsweredCount}
          </p>
        </div>

        <div className="rounded-xl bg-yellow-500/20 p-4">
          <p className="text-sm text-gray-300">Marked Review</p>
          <p className="mt-1 text-2xl font-bold text-yellow-400">
            {reviewCount}
          </p>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => setSubmitOpen(false)}
          className="flex-1 rounded-xl bg-gray-700 py-3 font-semibold text-white hover:bg-gray-600"
        >
          Continue Test
        </button>

       <button
  onClick={handleFinalSubmit}
  className="flex-1 rounded-xl bg-red-600 py-3 font-bold text-white hover:bg-red-500"
>
  Final Submit
</button>
      </div>
    </div>
  </div>
)}
    </main>
  );
}