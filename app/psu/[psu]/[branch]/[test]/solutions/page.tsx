"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { hpclMechanicalTest1 } from "@/data/psu/hpcl/mechanical/test-1";
import { hpclMechanicalTest2 } from "@/data/psu/hpcl/mechanical/test-2";
import { hpclMechanicalTest3 } from "@/data/psu/hpcl/mechanical/test-3";
import { hpclMechanicalTest4 } from "@/data/psu/hpcl/mechanical/test-4";
import { hpclMechanicalTest5 } from "@/data/psu/hpcl/mechanical/test-5";
import { hpclChemicalTest1 } from "@/data/psu/hpcl/chemical/test-1";
import { hpclChemicalTest2 } from "@/data/psu/hpcl/chemical/test-2";
import { hpclChemicalTest3 } from "@/data/psu/hpcl/chemical/test-3";
import { hpclChemicalTest4 } from "@/data/psu/hpcl/chemical/test-4";
import { hpclChemicalTest5 } from "@/data/psu/hpcl/chemical/test-5";

type ResultData = {
  total: number;
  correct: number;
  wrong: number;
  skipped: number;
  attempted: number;
  timeTaken: number;
  answers: Record<number, string>;
};

export default function SolutionsPage() {
  const params = useParams();

  const psu = params.psu as string;
  const branch = params.branch as string;
  const test = params.test as string;

const testTitle = test.replace("test-", "Test ");
const resultKey =
  branch === "chemical"
    ? `hpclChemical${test}Result`
    : `hpclMechanical${test}Result`;

  const mechanicalTestDataMap: Record<string, any[]> = {
  "test-1": hpclMechanicalTest1,
  "test-2": hpclMechanicalTest2,
  "test-3": hpclMechanicalTest3,
  "test-4": hpclMechanicalTest4,
  "test-5": hpclMechanicalTest5,
};

const chemicalTestDataMap: Record<string, any[]> = {
  "test-1": hpclChemicalTest1,
  "test-2": hpclChemicalTest2,
  "test-3": hpclChemicalTest3,
  "test-4": hpclChemicalTest4,
  "test-5": hpclChemicalTest5,
};
  

  const questions =
  branch === "chemical"
    ? chemicalTestDataMap[test] || hpclChemicalTest1
    : mechanicalTestDataMap[test] || hpclMechanicalTest1;

  const [result, setResult] = useState<ResultData | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem(resultKey);

    if (saved) {
      setResult(JSON.parse(saved));
    }
  }, [resultKey]);

  if (!result) {
    return (
      <main className="min-h-screen bg-[#071521] px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold">No Result Found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#071521] px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              HPCL {branch === "chemical" ? "Chemical" : "Mechanical"} {testTitle} Solutions
            </h1>

            <p className="mt-2 text-gray-400">
              Review your answers with correct answers and explanations.
            </p>
          </div>

          <Link
            href={`/psu/${psu}/${branch}/${test}/result`}
            className="rounded-xl bg-blue-500 px-5 py-3 text-center font-semibold transition hover:bg-blue-400"
          >
            Back to Result
          </Link>
        </div>

        <div className="space-y-6">
          {questions.map((question, index) => {
            const userAnswer = result.answers[question.id];
            const isCorrect = userAnswer === question.correctAnswer;
            const isSkipped = !userAnswer;

            return (
              <div
                key={question.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 flex items-start gap-3">
                  <span className="rounded-lg bg-blue-500/20 px-3 py-1 font-bold text-blue-400">
                    Q{index + 1}
                  </span>

                  <h2 className="text-lg font-semibold leading-relaxed">
                    {question.question}
                  </h2>
                </div>

                <div className="space-y-3">
                  {question.options.map((option: string) => {
                    const isCorrectOption =
                      option === question.correctAnswer;

                    const isUserOption = option === userAnswer;

                    let optionStyle =
                      "border-white/10 bg-[#0b2033] text-gray-200";

                    if (isCorrectOption) {
                      optionStyle =
                        "border-green-500 bg-green-500/20 text-green-300";
                    } else if (isUserOption && !isCorrect) {
                      optionStyle =
                        "border-red-500 bg-red-500/20 text-red-300";
                    }

                    return (
                      <div
                        key={option}
                        className={`rounded-xl border p-4 ${optionStyle}`}
                      >
                        {option}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-white/5 p-4">
                    <p className="text-sm text-gray-400">Your Answer</p>

                    <p
                      className={`mt-1 font-semibold ${
                        isSkipped
                          ? "text-yellow-400"
                          : isCorrect
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {isSkipped ? "Not Attempted" : userAnswer}
                    </p>
                  </div>

                  <div className="rounded-xl bg-green-500/10 p-4">
                    <p className="text-sm text-gray-400">Correct Answer</p>

                    <p className="mt-1 font-semibold text-green-400">
                      {question.correctAnswer}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
                  <p className="font-semibold text-blue-400">Explanation</p>

                  <p className="mt-2 leading-relaxed text-gray-300">
                    {question.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}