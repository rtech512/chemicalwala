"use client";

import { useMemo, useState } from "react";
import { hpclMechanicalTest1 } from "@/data/psu/hpcl/mechanical/test-1";

export default function HpclMechanicalQuizPage() {
  const questions = hpclMechanicalTest1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [review, setReview] = useState<number[]>([]);

  const current = questions[currentIndex];

  const answeredCount = Object.keys(answers).length;
  const reviewCount = review.length;

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
              150:00
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

            <button className="mt-6 w-full rounded-xl bg-red-600 py-3 font-bold">
              Submit Test
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}