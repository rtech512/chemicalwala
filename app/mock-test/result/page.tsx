"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Trophy,
  RotateCcw,
  Home,
  Eye,
  CheckCircle2,
  XCircle,
  Clock3,
  SkipForward,
} from "lucide-react";

type ResultData = {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  wrongCount: number;
  skippedCount: number;
  timeTaken: number;
};

export default function ResultPage() {
  const [result, setResult] = useState<ResultData | null>(null);

  useEffect(() => {
    const savedResult = localStorage.getItem("chemicalwala-result");

    if (savedResult) {
      setResult(JSON.parse(savedResult));
    }
  }, []);

  if (!result) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#06121f] text-white">
        Result loading...
      </main>
    );
  }

  const scorePercent = Math.round(
    (result.correctCount / result.totalQuestions) * 100
  );

  const minutes = Math.floor(result.timeTaken / 60);
  const seconds = result.timeTaken % 60;
  const timeTaken = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#06121f] px-5 py-10 text-white">
      <div className="w-full max-w-5xl rounded-3xl border border-cyan-400/20 bg-slate-900 p-8 shadow-2xl shadow-cyan-500/10">
        <div className="text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-500/10">
            <Trophy className="h-12 w-12 text-yellow-400" />
          </div>

          <h1 className="mt-6 text-4xl font-black">Test Submitted 🎉</h1>

          <p className="mt-2 text-slate-400">
            Congratulations! Your mock test has been completed successfully.
          </p>

          <div className="mx-auto mt-6 w-full max-w-md rounded-full bg-slate-800 p-2">
            <div
              className="rounded-full bg-cyan-400 py-2 text-center text-sm font-black text-slate-950"
              style={{ width: `${scorePercent}%` }}
            >
              {scorePercent}%
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-5">
          <div className="rounded-2xl bg-slate-800 p-6 text-center">
            <CheckCircle2 className="mx-auto h-8 w-8 text-green-400" />
            <p className="mt-3 text-slate-400">Correct</p>
            <h2 className="mt-2 text-3xl font-black text-green-400">
              {result.correctCount}
            </h2>
          </div>

          <div className="rounded-2xl bg-slate-800 p-6 text-center">
            <XCircle className="mx-auto h-8 w-8 text-red-400" />
            <p className="mt-3 text-slate-400">Wrong</p>
            <h2 className="mt-2 text-3xl font-black text-red-400">
              {result.wrongCount}
            </h2>
          </div>

          <div className="rounded-2xl bg-slate-800 p-6 text-center">
            <SkipForward className="mx-auto h-8 w-8 text-orange-400" />
            <p className="mt-3 text-slate-400">Skipped</p>
            <h2 className="mt-2 text-3xl font-black text-orange-400">
              {result.skippedCount}
            </h2>
          </div>

          <div className="rounded-2xl bg-slate-800 p-6 text-center">
            <Clock3 className="mx-auto h-8 w-8 text-cyan-400" />
            <p className="mt-3 text-slate-400">Time</p>
            <h2 className="mt-2 text-3xl font-black text-cyan-400">
              {timeTaken}
            </h2>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-6 text-center">
            <p className="text-white/80">Score</p>
            <h2 className="mt-2 text-5xl font-black">{scorePercent}%</h2>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
  href="/mock-test/result/solutions"
  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 py-4 font-bold text-slate-950 transition hover:bg-green-400"
>
  <Eye className="h-5 w-5" />
  View Solutions
</Link>
          <Link
            href="/mock-test/fluid-mechanics/basic/test-1/quiz"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-400 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            <RotateCcw className="h-5 w-5" />
            Retry Test
          </Link>

          <Link
            href="/mock-test"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-800 py-4 font-bold transition hover:bg-slate-700"
          >
            <Home className="h-5 w-5" />
            Back to Mock Tests
          </Link>
        </div>
      </div>
    </main>
  );
}