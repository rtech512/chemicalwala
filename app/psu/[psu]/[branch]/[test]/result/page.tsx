"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type ResultData = {
  total: number;
  correct: number;
  wrong: number;
  skipped: number;
  attempted: number;
  timeTaken: number;
  answers: Record<number, string>;
};

export default function HpclMechanicalResultPage() {
  const router = useRouter();
  const params = useParams();
const branch = params.branch as string;
  const test = params.test as string;
  const testTitle = test.replace("test-", "Test ");
const resultKey =
  branch === "chemical"
    ? `hpclChemical${test}Result`
    : `hpclMechanical${test}Result`;

  const [result, setResult] = useState<ResultData | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem(resultKey);
    if (saved) {
      setResult(JSON.parse(saved));
    }
  }, [resultKey]);

  const handleRetakeTest = () => {
    sessionStorage.removeItem(resultKey);
router.push(`/psu/hpcl/${branch}/${test}/quiz`);
  };

  if (!result) {
    return (
      <main className="min-h-screen bg-[#071521] px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h1 className="text-3xl font-bold">No Result Found</h1>
        </div>
      </main>
    );
  }

  const percentage = Math.round((result.correct / result.total) * 100);

  const hours = Math.floor(result.timeTaken / 3600);
  const minutes = Math.floor((result.timeTaken % 3600) / 60);
  const seconds = result.timeTaken % 60;

  const formattedTimeTaken = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <main className="min-h-screen bg-[#071521] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <h1 className="text-3xl font-bold">
          HPCL {branch === "chemical" ? "Chemical" : "Mechanical"} {testTitle} Result
        </h1>

        <div className="mt-8 text-6xl font-bold text-green-400">
          {percentage}%
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          <div className="rounded-xl bg-green-500/20 p-4">
            <p>Correct</p>
            <h2 className="text-3xl font-bold">{result.correct}</h2>
          </div>

          <div className="rounded-xl bg-red-500/20 p-4">
            <p>Wrong</p>
            <h2 className="text-3xl font-bold">{result.wrong}</h2>
          </div>

          <div className="rounded-xl bg-yellow-500/20 p-4">
            <p>Skipped</p>
            <h2 className="text-3xl font-bold">{result.skipped}</h2>
          </div>

          <div className="rounded-xl bg-blue-500/20 p-4">
            <p>Attempted</p>
            <h2 className="text-3xl font-bold">{result.attempted}</h2>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-[#0b2033] p-4">
          <p className="text-sm text-gray-300">Time Taken</p>

          <h2 className="mt-1 text-2xl font-bold text-blue-400">
            {formattedTimeTaken}
          </h2>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
          href={`/psu/hpcl/${branch}/${test}/solutions`}
            className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
          >
            Review Solutions
          </Link>

          <button
            onClick={handleRetakeTest}
            className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            Retake Test
          </button>

          <Link
            href={`/psu/hpcl/${branch}`}
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Back to {branch === "chemical" ? "Chemical" : "Mechanical"} Tests
          </Link>
        </div>
      </div>
    </main>
  );
}