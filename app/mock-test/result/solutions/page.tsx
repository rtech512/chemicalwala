"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Solution = {
  id: number;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
};

export default function SolutionsPage() {
  const [solutions, setSolutions] = useState<Solution[]>([]);

  useEffect(() => {
    const savedResult = localStorage.getItem("chemicalwala-result");

    if (savedResult) {
      const result = JSON.parse(savedResult);
      setSolutions(result.solutions || []);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#06121f] px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/mock-test/result"
          className="text-cyan-400 hover:underline"
        >
          ← Back to Result
        </Link>

        <h1 className="mt-6 text-4xl font-black">
          View Solutions
        </h1>

        <div className="mt-8 space-y-6">
          {solutions.map((q, index) => {
            const isCorrect =
              q.userAnswer === q.correctAnswer;

            return (
              <div
                key={q.id}
                className="rounded-2xl bg-slate-800 p-6"
              >
                <h2 className="text-xl font-bold">
                  Q{index + 1}. {q.question}
                </h2>

                <p className="mt-4">
                  Your Answer:{" "}
                  <span
                    className={
                      isCorrect
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >
                    {q.userAnswer}
                  </span>
                </p>

                <p className="mt-2">
                  Correct Answer:{" "}
                  <span className="text-green-400">
                    {q.correctAnswer}
                  </span>
                </p>

                <p className="mt-4 rounded-xl bg-slate-900 p-4 text-slate-300">
                  {q.explanation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}