"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
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
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  Clock3,
  Home,
  RotateCcw,
  Target,
  XCircle,
} from "lucide-react";

type ResultData = {
  total: number;
  correct: number;
  wrong: number;
  skipped: number;
  attempted: number;
  timeTaken: number;
  answers: Record<number, string>;
};
type Question = {
  id: number;
  section: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};
const mechanicalTestDataMap: Record<string, Question[]> = {
  "test-1": hpclMechanicalTest1,
  "test-2": hpclMechanicalTest2,
  "test-3": hpclMechanicalTest3,
  "test-4": hpclMechanicalTest4,
  "test-5": hpclMechanicalTest5,
};

const chemicalTestDataMap: Record<string, Question[]> = {
  "test-1": hpclChemicalTest1,
  "test-2": hpclChemicalTest2,
  "test-3": hpclChemicalTest3,
  "test-4": hpclChemicalTest4,
  "test-5": hpclChemicalTest5,
};


function capitalize(value: string) {
  if (!value) return "";

  return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatTestName(test: string) {
  const testNumber = test.replace("test-", "");

  return `Test ${testNumber}`;
}

function formatTime(totalSeconds: number) {
  const safeSeconds = Math.max(0, totalSeconds || 0);

  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;

  return {
    hours,
    minutes,
    seconds,
    formatted: [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":"),
  };
}

function getPerformanceDetails(scorePercentage: number) {
  if (scorePercentage >= 90) {
    return {
      label: "Outstanding",
      message: "Excellent performance! You have mastered this test.",
      scoreClass: "text-emerald-400",
      strokeClass: "stroke-emerald-400",
      badgeClass:
        "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
    };
  }

  if (scorePercentage >= 75) {
    return {
      label: "Excellent",
      message: "Very good performance. Keep practising for an even better score.",
      scoreClass: "text-blue-400",
      strokeClass: "stroke-blue-400",
      badgeClass: "border-blue-400/30 bg-blue-500/10 text-blue-300",
    };
  }

  if (scorePercentage >= 60) {
    return {
      label: "Good",
      message: "Good attempt. Review the incorrect questions to improve further.",
      scoreClass: "text-amber-400",
      strokeClass: "stroke-amber-400",
      badgeClass: "border-amber-400/30 bg-amber-500/10 text-amber-300",
    };
  }

  if (scorePercentage >= 40) {
    return {
      label: "Average",
      message: "You are progressing. Focus on weak concepts and attempt again.",
      scoreClass: "text-orange-400",
      strokeClass: "stroke-orange-400",
      badgeClass:
        "border-orange-400/30 bg-orange-500/10 text-orange-300",
    };
  }

  return {
    label: "Needs Improvement",
    message: "Review the detailed solutions and strengthen your fundamentals.",
    scoreClass: "text-rose-400",
    strokeClass: "stroke-rose-400",
    badgeClass: "border-rose-400/30 bg-rose-500/10 text-rose-300",
  };
}

type SummaryCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  className: string;
};

function SummaryCard({
  title,
  value,
  subtitle,
  icon,
  className,
}: SummaryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className={`rounded-xl border p-3.5 shadow-lg backdrop-blur-sm sm:rounded-2xl sm:p-5 ${className}`}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-slate-300 sm:text-base">
          {title}
        </p>

        <div className="rounded-xl bg-black/20 p-2.5">{icon}</div>
      </div>

     <p className="text-2xl font-bold text-white sm:text-4xl">{value}</p>

      {subtitle && (
        <p className="mt-2 text-xs text-slate-400 sm:text-sm">{subtitle}</p>
      )}
    </motion.div>
  );
}

export default function HpclResultPage() {
  const router = useRouter();
  const params = useParams();

  const psu = String(params.psu || "hpcl");
  const branch = String(params.branch || "chemical");
  const test = String(params.test || "test-1");
  const questions =
  branch === "chemical"
    ? chemicalTestDataMap[test] || hpclChemicalTest1
    : mechanicalTestDataMap[test] || hpclMechanicalTest1;

  const [result, setResult] = useState<ResultData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
 const sectionPerformance = useMemo(() => {
  if (!result) {
    return [];
  }
  const sectionMap: Record<
    string,
    {
      total: number;
      correct: number;
      wrong: number;
      skipped: number;
      attempted: number;
      accuracy: number;
    }
  > = {};

  questions.forEach((question) => {
    const sectionName = question.section || "Other";
    const userAnswer = result.answers[question.id];

    if (!sectionMap[sectionName]) {
      sectionMap[sectionName] = {
        total: 0,
        correct: 0,
        wrong: 0,
        skipped: 0,
        attempted: 0,
        accuracy: 0,
      };
    }

    sectionMap[sectionName].total += 1;

    if (!userAnswer) {
      sectionMap[sectionName].skipped += 1;
    } else if (userAnswer === question.correctAnswer) {
      sectionMap[sectionName].correct += 1;
      sectionMap[sectionName].attempted += 1;
    } else {
      sectionMap[sectionName].wrong += 1;
      sectionMap[sectionName].attempted += 1;
    }
  });

  return Object.entries(sectionMap).map(([section, data]) => ({
    section,
    ...data,
    accuracy:
      data.attempted > 0
        ? Math.round((data.correct / data.attempted) * 100)
        : 0,
  }));
}, [questions, result]);

  const branchName = capitalize(branch);
  const psuName = psu.toUpperCase();
  const testName = formatTestName(test);

  const storageKey =
  branch === "chemical"
    ? `hpclChemical${test}Result`
    : `hpclMechanical${test}Result`;

  useEffect(() => {
    try {
      const savedResult = sessionStorage.getItem(storageKey);

      if (savedResult) {
        const parsedResult = JSON.parse(savedResult) as ResultData;
        setResult(parsedResult);
      }
    } catch (error) {
      console.error("Unable to read test result:", error);
    } finally {
      setIsLoading(false);
    }
  }, [storageKey]);

  const handleRetakeTest = () => {
    sessionStorage.removeItem(storageKey);
    router.push(`/psu/${psu}/${branch}/${test}/quiz`);
  };

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#06111d] px-4 text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500/20 border-t-blue-500" />

          <p className="text-slate-300">Loading your result...</p>
        </div>
      </main>
    );
  }

  if (!result) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#06111d] px-4 py-10 text-white">
        <div className="w-full max-w-lg rounded-3xl border border-slate-700 bg-[#101e2c] p-8 text-center shadow-2xl">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10">
            <Award className="h-8 w-8 text-amber-400" />
          </div>

          <h1 className="text-2xl font-bold sm:text-3xl">
            Result Not Found
          </h1>

          <p className="mt-3 leading-7 text-slate-400">
            Please complete and submit the test before opening the result page.
          </p>

          <Link
            href={`/psu/${psu}/${branch}/${test}/quiz`}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
          >
            <ArrowLeft className="h-5 w-5" />
            Go to Test
          </Link>
        </div>
      </main>
    );
  }

  const total = result.total || 0;
  const correct = result.correct || 0;
  const wrong = result.wrong || 0;
  const skipped = result.skipped || 0;
  const attempted =
    result.attempted ?? Math.max(0, correct + wrong);

  const scorePercentage =
    total > 0 ? Math.round((correct / total) * 100) : 0;

  const accuracyPercentage =
    attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

  const attemptPercentage =
    total > 0 ? Math.round((attempted / total) * 100) : 0;

  const time = formatTime(result.timeTaken);

  const allowedTimeSeconds = 150 * 60;
  const remainingTimeSeconds = Math.max(
    0,
    allowedTimeSeconds - result.timeTaken
  );
  const remainingTime = formatTime(remainingTimeSeconds);

  const performance = getPerformanceDetails(scorePercentage);
  

  const radius = 74;
  const circumference = 2 * Math.PI * radius;
  const progressOffset =
    circumference - (scorePercentage / 100) * circumference;

  return (
  <main className="min-h-screen bg-[#06111d] px-2 py-3 text-white pb-[env(safe-area-inset-bottom)] sm:px-6 sm:py-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-7xl overflow-hidden rounded-2xl border border-slate-700/80 bg-[#111f2d] shadow-2xl sm:rounded-3xl"
      >
        <div className="border-b border-slate-700/70 bg-gradient-to-r from-blue-600/10 via-transparent to-emerald-500/10 px-4 py-6 text-center sm:px-8 sm:py-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
            Test completed successfully
            <p className="mt-2 text-emerald-400 font-semibold">
🎉 Congratulations! Your test has been evaluated successfully.
</p>
          </p>

          <h1 className="text-xl font-bold leading-tight sm:text-4xl">
            {psuName} {branchName} {testName} Result
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Analyse your performance, review detailed solutions and identify
            the areas that need improvement.
          </p>
        </div>

        <div className="space-y-8 p-4 sm:p-7 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center rounded-3xl border border-slate-700 bg-[#0b1a28] p-6 shadow-xl"
            >
              <div className="relative flex h-52 w-52 items-center justify-center">
                <svg
                  className="-rotate-90"
                  width="190"
                  height="190"
                  viewBox="0 0 190 190"
                  aria-label={`Score ${scorePercentage}%`}
                >
                  <circle
                    cx="95"
                    cy="95"
                    r={radius}
                    fill="none"
                    strokeWidth="14"
                    className="stroke-slate-800"
                  />

                  <motion.circle
                    cx="95"
                    cy="95"
                    r={radius}
                    fill="none"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: progressOffset }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: 0.2,
                    }}
                    className={performance.strokeClass}
                  />
                </svg>

                <div className="absolute text-center">
                  <p
                    className={`text-5xl font-extrabold ${performance.scoreClass}`}
                  >
                    {scorePercentage}%
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Overall Score
                  </p>
                </div>
              </div>

              <div
                className={`mt-3 rounded-full border px-4 py-2 text-sm font-semibold ${performance.badgeClass}`}
              >
                {performance.label}
              </div>

              <p className="mt-4 max-w-xs text-center text-sm leading-6 text-slate-400">
                {performance.message}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-5">
              <SummaryCard
                title="Correct Answers"
                value={correct}
                subtitle={`${scorePercentage}% of total questions`}
                icon={
                  <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                }
                className="border-emerald-500/20 bg-emerald-500/10"
              />

              <SummaryCard
                title="Wrong Answers"
                value={wrong}
                subtitle="Review these questions carefully"
                icon={<XCircle className="h-6 w-6 text-rose-400" />}
                className="border-rose-500/20 bg-rose-500/10"
              />

              <SummaryCard
                title="Skipped"
                value={skipped}
                subtitle="Questions not attempted"
                icon={<ArrowLeft className="h-6 w-6 text-amber-400" />}
                className="border-amber-500/20 bg-amber-500/10"
              />

              <SummaryCard
                title="Attempted"
                value={`${attempted}/${total}`}
                subtitle={`${attemptPercentage}% completion rate`}
                icon={<Target className="h-6 w-6 text-blue-400" />}
                className="border-blue-500/20 bg-blue-500/10"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-500/15 p-3">
                  <Target className="h-6 w-6 text-violet-400" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Accuracy</p>
                  <p className="text-2xl font-bold">
                    {accuracyPercentage}%
                  </p>
                </div>
              </div>

              <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${Math.min(accuracyPercentage, 100)}%`,
                  }}
                  transition={{ duration: 1, delay: 0.35 }}
                  className="h-full rounded-full bg-violet-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-500/15 p-3">
                  <Clock3 className="h-6 w-6 text-blue-400" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Time Taken</p>
                  <p className="font-mono text-2xl font-bold text-blue-300">
                    {time.formatted}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-400">
                Remaining time:{" "}
                <span className="font-semibold text-slate-200">
                  {remainingTime.formatted}
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.39 }}
              className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/15 p-3">
                  <Award className="h-6 w-6 text-emerald-400" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Final Score</p>
                  <p className="text-2xl font-bold">
                    {correct}/{total}
                  </p>
                </div>
              </div>
              

              <p className="mt-5 text-sm text-slate-400">
                Performance:{" "}
                <span className="font-semibold text-slate-200">
                  {performance.label}
                </span>
              </p>
            </motion.div>
          </div>
          <motion.div
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.44 }}
  className="rounded-3xl border border-slate-700 bg-[#0b1a28] p-5 sm:p-7"
>
  <div className="mb-6">
    <h2 className="text-xl font-bold sm:text-2xl">
      Section-wise Performance
    </h2>

    <p className="mt-1 text-sm text-slate-400">
      Analyse your score and accuracy in every section.
    </p>
  </div>

  <div className="grid gap-4 md:grid-cols-2">
    {sectionPerformance.map((section) => {
      const sectionScore =
        section.total > 0
          ? Math.round((section.correct / section.total) * 100)
          : 0;

      return (
        <div
          key={section.section}
          className="rounded-2xl border border-slate-700/80 bg-slate-900/50 p-4 sm:p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-bold text-white">
                {section.section}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                {section.correct} correct out of {section.total}
              </p>
            </div>

            <div className="rounded-xl bg-blue-500/10 px-3 py-2 text-sm font-bold text-blue-300">
              {sectionScore}%
            </div>
          </div>

          <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${sectionScore}%` }}
              transition={{ duration: 0.8 }}
              className="h-full rounded-full bg-blue-500"
            />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <div className="rounded-xl bg-emerald-500/10 p-3 text-center">
              <p className="text-lg font-bold text-emerald-400">
                {section.correct}
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Correct
              </p>
            </div>

            <div className="rounded-xl bg-rose-500/10 p-3 text-center">
              <p className="text-lg font-bold text-rose-400">
                {section.wrong}
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Wrong
              </p>
            </div>

            <div className="rounded-xl bg-amber-500/10 p-3 text-center">
              <p className="text-lg font-bold text-amber-400">
                {section.skipped}
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Skipped
              </p>
            </div>

            <div className="rounded-xl bg-violet-500/10 p-3 text-center">
              <p className="text-lg font-bold text-violet-400">
                {section.accuracy}%
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Accuracy
              </p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48 }}
            className="rounded-3xl border border-slate-700 bg-[#0b1a28] p-5 sm:p-7"
          >
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold sm:text-2xl">
                  Performance Summary
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  A quick overview of your test attempt.
                </p>
              </div>

              <div
                className={`w-fit rounded-full border px-4 py-2 text-sm font-semibold ${performance.badgeClass}`}
              >
                {performance.label}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-slate-900/60 p-4">
                <p className="text-sm text-slate-400">Completion Rate</p>
                <p className="mt-2 text-2xl font-bold">
                  {attemptPercentage}%
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900/60 p-4">
                <p className="text-sm text-slate-400">
                  Correct Attempt Rate
                </p>
                <p className="mt-2 text-2xl font-bold">
                  {accuracyPercentage}%
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900/60 p-4">
                <p className="text-sm text-slate-400">Total Questions</p>
                <p className="mt-2 text-2xl font-bold">{total}</p>
              </div>

              <div className="rounded-2xl bg-slate-900/60 p-4">
                <p className="text-sm text-slate-400">Allowed Duration</p>
                <p className="mt-2 text-2xl font-bold">150 min</p>
              </div>
            </div>
          </motion.div>

          <div className="sticky bottom-2 z-20 grid gap-2 rounded-2xl border border-slate-700/70 bg-[#0b1a28]/95 p-2 backdrop-blur-xl sm:static sm:grid-cols-3 sm:border-0 sm:bg-transparent sm:p-0">
            <Link
              href={`/psu/${psu}/${branch}/${test}/solutions`}
              className="inline-flex min-h-12 sm:min-h-14 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-bold text-slate-950 shadow-lg shadow-emerald-500/15 transition hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              <CheckCircle2 className="h-5 w-5" />
              Review Solutions
            </Link>

            <button
              type="button"
              onClick={handleRetakeTest}
              className="inline-flex min-h-12 sm:min-h-14 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white shadow-lg shadow-blue-600/15 transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              <RotateCcw className="h-5 w-5" />
              Retake Test
            </button>

            <Link
              href={`/psu/${psu}/${branch}`}
              className="inline-flex min-h-12 sm:min-h-14 items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-800/40 px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800"
            >
              <Home className="h-5 w-5" />
              Back to {branchName} Tests
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}