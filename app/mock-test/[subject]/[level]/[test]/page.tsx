"use client";

import { basicTest1 } from "@/data/questions/fluid-mechanics/basic-test-1";
import { useEffect, useState } from "react";

const questions = basicTest1;

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [reviewQuestions, setReviewQuestions] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(25 * 60);

  const q = questions[current];

  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Time Over! Test Submitted.");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const selectOption = (option: string) => {
    setAnswers({ ...answers, [q.id]: option });
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const previousQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const markForReview = () => {
    if (!reviewQuestions.includes(q.id)) {
      setReviewQuestions([...reviewQuestions, q.id]);
    }

    nextQuestion();
  };

  const clearResponse = () => {
    const updated = { ...answers };
    delete updated[q.id];

    setAnswers(updated);
    setReviewQuestions(reviewQuestions.filter((id) => id !== q.id));
  };

  return (
    <main className="min-h-screen bg-[#06121f] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081726]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-black">🧪 ChemicalWala Mock Test</h1>
            <p className="text-sm text-slate-400">
              Fluid Mechanics • Basic • Test 1
            </p>
          </div>

          <div className="rounded-xl bg-red-500 px-6 py-3 text-xl font-black">
            ⏱️ {minutes}:{seconds.toString().padStart(2, "0")}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 p-6">
        <div className="col-span-9 rounded-3xl bg-slate-800 p-8">
          <div className="mb-6">
            <span className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-black">
              Question {current + 1} / {questions.length}
            </span>
          </div>

          <h2 className="text-2xl font-bold">{q.question}</h2>

          <div className="mt-8 space-y-4">
            {q.options.map((option) => {
              const selected = answers[q.id] === option;

              return (
                <button
                  key={option}
                  onClick={() => selectOption(option)}
                  className={`w-full rounded-xl border p-5 text-left font-semibold transition ${
                    selected
                      ? "border-cyan-400 bg-cyan-500 text-black"
                      : "border-slate-600 hover:border-cyan-400 hover:bg-cyan-500/10"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={previousQuestion}
              disabled={current === 0}
              className="rounded-xl bg-slate-700 px-6 py-3 font-bold disabled:opacity-40"
            >
              Previous
            </button>

            <button
              onClick={clearResponse}
              className="rounded-xl bg-red-500 px-6 py-3 font-bold"
            >
              Clear Response
            </button>

            <button
              onClick={markForReview}
              className="rounded-xl bg-yellow-500 px-6 py-3 font-bold text-black"
            >
              Mark for Review
            </button>

            <button
              onClick={nextQuestion}
              className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black"
            >
              Save & Next
            </button>
          </div>
        </div>

        <div className="col-span-3 rounded-3xl bg-slate-800 p-6">
          <h3 className="mb-5 text-xl font-bold">Questions</h3>

          <div className="grid grid-cols-5 gap-3">
            {questions.map((question, i) => (
              <button
                key={question.id}
                onClick={() => setCurrent(i)}
                className={`h-12 rounded-lg font-bold transition ${
                  current === i
                    ? "bg-cyan-500 text-black"
                    : reviewQuestions.includes(question.id)
                    ? "bg-yellow-500 text-black"
                    : answers[question.id]
                    ? "bg-green-500 text-black"
                    : "bg-slate-700 hover:bg-slate-600"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-2 text-sm text-slate-300">
            <p>🟦 Current</p>
            <p>🟩 Answered</p>
            <p>🟨 Review</p>
            <p>⬛ Not Answered</p>
          </div>

          <button
            onClick={() => alert("Test Submitted")}
            className="mt-8 w-full rounded-xl bg-red-500 py-4 text-lg font-black"
          >
            Submit Test
          </button>
        </div>
      </div>
    </main>
  );
}