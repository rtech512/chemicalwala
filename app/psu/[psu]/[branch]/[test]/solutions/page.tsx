"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Filter,
  Home,
  LayoutGrid,
  Menu,
  RotateCcw,
  X,
  XCircle,
} from "lucide-react";

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

type Question = {
  id: number;
  section: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

type FilterType = "all" | "correct" | "wrong" | "skipped";

export default function SolutionsPage() {
  const params = useParams();

  const psu = params.psu as string;
  const branch = params.branch as string;
  const test = params.test as string;

  const [result, setResult] = useState<ResultData | null>(null);
  const [currentQuestionId, setCurrentQuestionId] = useState<number | null>(
    null
  );
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const branchTitle =
    branch === "chemical" ? "Chemical Engineering" : "Mechanical Engineering";

  const testTitle = test.replace("test-", "Test ");

  const resultKey =
    branch === "chemical"
      ? `hpclChemical${test}Result`
      : `hpclMechanical${test}Result`;

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

  const questions =
    branch === "chemical"
      ? chemicalTestDataMap[test] || hpclChemicalTest1
      : mechanicalTestDataMap[test] || hpclMechanicalTest1;

  useEffect(() => {
    const savedResult = sessionStorage.getItem(resultKey);

    if (!savedResult) {
      return;
    }

    try {
      const parsedResult: ResultData = JSON.parse(savedResult);

      setResult(parsedResult);

      if (questions.length > 0) {
        setCurrentQuestionId(questions[0].id);
      }
    } catch (error) {
      console.error("Failed to load solutions result:", error);
    }
  }, [resultKey, questions]);

  const getQuestionStatus = (question: Question) => {
    if (!result) {
      return "skipped";
    }

    const userAnswer = result.answers[question.id];

    if (!userAnswer) {
      return "skipped";
    }

    if (userAnswer === question.correctAnswer) {
      return "correct";
    }

    return "wrong";
  };

  const filteredQuestions = useMemo(() => {
    if (!result) {
      return [];
    }

    if (activeFilter === "all") {
      return questions;
    }

    return questions.filter(
      (question) => getQuestionStatus(question) === activeFilter
    );
  }, [activeFilter, questions, result]);

  useEffect(() => {
    if (filteredQuestions.length === 0) {
      setCurrentQuestionId(null);
      return;
    }

    const currentQuestionExists = filteredQuestions.some(
      (question) => question.id === currentQuestionId
    );

    if (!currentQuestionExists) {
      setCurrentQuestionId(filteredQuestions[0].id);
    }
  }, [filteredQuestions, currentQuestionId]);

  const currentQuestion = questions.find(
    (question) => question.id === currentQuestionId
  );

  const currentFilteredIndex = filteredQuestions.findIndex(
    (question) => question.id === currentQuestionId
  );

  const handlePreviousQuestion = () => {
    if (currentFilteredIndex <= 0) {
      return;
    }

    setCurrentQuestionId(filteredQuestions[currentFilteredIndex - 1].id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextQuestion = () => {
    if (
      currentFilteredIndex === -1 ||
      currentFilteredIndex >= filteredQuestions.length - 1
    ) {
      return;
    }

    setCurrentQuestionId(filteredQuestions[currentFilteredIndex + 1].id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuestionSelect = (questionId: number) => {
    setCurrentQuestionId(questionId);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filterButtons: {
    value: FilterType;
    label: string;
    count: number;
    icon: typeof LayoutGrid;
  }[] = [
    {
      value: "all",
      label: "All",
      count: questions.length,
      icon: LayoutGrid,
    },
    {
      value: "correct",
      label: "Correct",
      count: result?.correct ?? 0,
      icon: CheckCircle2,
    },
    {
      value: "wrong",
      label: "Wrong",
      count: result?.wrong ?? 0,
      icon: XCircle,
    },
    {
      value: "skipped",
      label: "Skipped",
      count: result?.skipped ?? 0,
      icon: CircleHelp,
    },
  ];

  if (!result) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#06111d] px-4 text-white">
        <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
            <CircleHelp size={32} />
          </div>

          <h1 className="mt-5 text-3xl font-bold">No Result Found</h1>

          <p className="mt-3 text-gray-400">
            पहले test submit कीजिए। उसके बाद solutions यहाँ दिखाई देंगे।
          </p>

          <Link
            href={`/psu/${psu}/${branch}/${test}`}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
          >
            <ArrowLeft size={18} />
            Back to Test
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#06111d] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06111d]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-200 transition hover:bg-white/10 lg:hidden"
              aria-label="Open question palette"
            >
              <Menu size={21} />
            </button>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                HPCL Solutions
              </p>

              <h1 className="truncate text-lg font-bold sm:text-xl">
                {branchTitle} • {testTitle}
              </h1>
            </div>
          </div>

          <Link
            href={`/psu/${psu}/${branch}/${test}/result`}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-semibold transition hover:bg-white/10 sm:px-5"
          >
            <ChevronLeft size={18} />
            <span className="hidden sm:inline">Back to Result</span>
            <span className="sm:hidden">Result</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1500px] gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <QuestionSidebar
            questions={questions}
            result={result}
            currentQuestionId={currentQuestionId}
            activeFilter={activeFilter}
            filterButtons={filterButtons}
            filteredQuestions={filteredQuestions}
            onFilterChange={setActiveFilter}
            onQuestionSelect={handleQuestionSelect}
            getQuestionStatus={getQuestionStatus}
          />
        </aside>

        <section className="min-w-0">
          <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <SummaryCard
              label="Total"
              value={result.total}
              className="border-blue-500/20 bg-blue-500/10 text-blue-300"
            />

            <SummaryCard
              label="Correct"
              value={result.correct}
              className="border-green-500/20 bg-green-500/10 text-green-300"
            />

            <SummaryCard
              label="Wrong"
              value={result.wrong}
              className="border-red-500/20 bg-red-500/10 text-red-300"
            />

            <SummaryCard
              label="Skipped"
              value={result.skipped}
              className="border-yellow-500/20 bg-yellow-500/10 text-yellow-300"
            />
          </div>

          <div className="mb-5 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div>
              <p className="text-sm text-gray-400">Showing filter</p>

              <p className="font-bold capitalize">
                {activeFilter} Questions
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Filter size={17} />
              {filteredQuestions.length} question
              {filteredQuestions.length !== 1 ? "s" : ""}
            </div>
          </div>

          {filteredQuestions.length === 0 || !currentQuestion ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                <Filter size={30} />
              </div>

              <h2 className="mt-5 text-2xl font-bold">
                No questions in this filter
              </h2>

              <p className="mt-2 text-gray-400">
                कोई दूसरा filter select करके questions देखें।
              </p>

              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
              >
                Show All Questions
              </button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <QuestionSolutionCard
                  question={currentQuestion}
                  questionNumber={
                    questions.findIndex(
                      (question) => question.id === currentQuestion.id
                    ) + 1
                  }
                  userAnswer={result.answers[currentQuestion.id]}
                />
              </motion.div>
            </AnimatePresence>
          )}

          {filteredQuestions.length > 0 && currentQuestion && (
            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={handlePreviousQuestion}
                disabled={currentFilteredIndex <= 0}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft size={19} />
                Previous
              </button>

              <p className="text-center text-sm text-gray-400">
                Question{" "}
                <span className="font-bold text-white">
                  {currentFilteredIndex + 1}
                </span>{" "}
                of{" "}
                <span className="font-bold text-white">
                  {filteredQuestions.length}
                </span>
              </p>

              <button
                type="button"
                onClick={handleNextQuestion}
                disabled={
                  currentFilteredIndex >= filteredQuestions.length - 1
                }
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
                <ArrowRight size={19} />
              </button>
            </div>
          )}

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Link
              href={`/psu/${psu}/${branch}/${test}/result`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold transition hover:bg-white/10"
            >
              <ChevronLeft size={18} />
              Result Page
            </Link>

            <Link
              href={`/psu/${psu}/${branch}/${test}/quiz`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 font-semibold text-blue-300 transition hover:bg-blue-500/20"
            >
              <RotateCcw size={18} />
              Retake Test
            </Link>

            <Link
              href={`/psu/${psu}/${branch}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500"
            >
              <Home size={18} />
              All Tests
            </Link>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close question palette"
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed inset-y-0 left-0 z-[60] w-[90%] max-w-sm overflow-y-auto bg-[#081827] p-4 shadow-2xl lg:hidden"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Solutions</p>
                  <h2 className="text-xl font-bold">Question Palette</h2>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <QuestionSidebar
                questions={questions}
                result={result}
                currentQuestionId={currentQuestionId}
                activeFilter={activeFilter}
                filterButtons={filterButtons}
                filteredQuestions={filteredQuestions}
                onFilterChange={setActiveFilter}
                onQuestionSelect={handleQuestionSelect}
                getQuestionStatus={getQuestionStatus}
                isMobile
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

type QuestionSidebarProps = {
  questions: Question[];
  result: ResultData;
  currentQuestionId: number | null;
  activeFilter: FilterType;
  filteredQuestions: Question[];
  filterButtons: {
    value: FilterType;
    label: string;
    count: number;
    icon: typeof LayoutGrid;
  }[];
  onFilterChange: (filter: FilterType) => void;
  onQuestionSelect: (questionId: number) => void;
  getQuestionStatus: (
    question: Question
  ) => "correct" | "wrong" | "skipped" | string;
  isMobile?: boolean;
};

function QuestionSidebar({
  questions,
  currentQuestionId,
  activeFilter,
  filteredQuestions,
  filterButtons,
  onFilterChange,
  onQuestionSelect,
  getQuestionStatus,
  isMobile = false,
}: QuestionSidebarProps) {
  return (
    <div
      className={
        isMobile
          ? ""
          : "sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto rounded-3xl border border-white/10 bg-white/[0.04] p-5"
      }
    >
      {!isMobile && (
        <div className="mb-5">
          <p className="text-sm text-gray-400">Navigate solutions</p>
          <h2 className="text-xl font-bold">Question Palette</h2>
        </div>
      )}

      <div className="grid grid-cols-2 gap-2">
        {filterButtons.map((filter) => {
          const Icon = filter.icon;
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => onFilterChange(filter.value)}
              className={`rounded-xl border p-3 text-left transition ${
                isActive
                  ? "border-blue-500 bg-blue-500/15 text-blue-300"
                  : "border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/[0.07]"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <Icon size={17} />
                <span className="text-lg font-bold">{filter.count}</span>
              </div>

              <p className="mt-1 text-xs font-semibold">{filter.label}</p>
            </button>
          );
        })}
      </div>

      <div className="my-5 h-px bg-white/10" />

      <div className="grid grid-cols-5 gap-2 sm:grid-cols-6 lg:grid-cols-5">
        {filteredQuestions.map((question) => {
          const questionNumber =
            questions.findIndex((item) => item.id === question.id) + 1;

          const status = getQuestionStatus(question);
          const isCurrent = currentQuestionId === question.id;

          let buttonStyle =
            "border-yellow-500/40 bg-yellow-500/10 text-yellow-300";

          if (status === "correct") {
            buttonStyle =
              "border-green-500/40 bg-green-500/10 text-green-300";
          }

          if (status === "wrong") {
            buttonStyle = "border-red-500/40 bg-red-500/10 text-red-300";
          }

          if (isCurrent) {
            buttonStyle =
              "border-blue-400 bg-blue-600 text-white ring-2 ring-blue-400/30";
          }

          return (
            <button
              key={question.id}
              type="button"
              onClick={() => onQuestionSelect(question.id)}
              className={`flex aspect-square items-center justify-center rounded-xl border text-sm font-bold transition hover:scale-105 ${buttonStyle}`}
            >
              {questionNumber}
            </button>
          );
        })}
      </div>

      {filteredQuestions.length === 0 && (
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center text-sm text-gray-400">
          इस filter में कोई question नहीं है।
        </div>
      )}

      <div className="mt-5 space-y-2 rounded-xl border border-white/10 bg-black/10 p-3 text-xs text-gray-400">
        <LegendItem
          className="border-green-500 bg-green-500/20"
          label="Correct"
        />

        <LegendItem
          className="border-red-500 bg-red-500/20"
          label="Wrong"
        />

        <LegendItem
          className="border-yellow-500 bg-yellow-500/20"
          label="Skipped"
        />

        <LegendItem
          className="border-blue-400 bg-blue-600"
          label="Current"
        />
      </div>
    </div>
  );
}

type QuestionSolutionCardProps = {
  question: Question;
  questionNumber: number;
  userAnswer?: string;
};

function QuestionSolutionCard({
  question,
  questionNumber,
  userAnswer,
}: QuestionSolutionCardProps) {
  const isSkipped = !userAnswer;
  const isCorrect = userAnswer === question.correctAnswer;

  const statusLabel = isSkipped
    ? "Skipped"
    : isCorrect
      ? "Correct"
      : "Wrong";

  const statusStyle = isSkipped
    ? "border-yellow-500/30 bg-yellow-500/10 text-yellow-300"
    : isCorrect
      ? "border-green-500/30 bg-green-500/10 text-green-300"
      : "border-red-500/30 bg-red-500/10 text-red-300";

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20">
      <div className="border-b border-white/10 bg-gradient-to-r from-blue-500/10 to-transparent p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-bold text-white">
              Q{questionNumber}
            </span>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                Section
              </p>

              <p className="font-semibold text-blue-300">
                {question.section}
              </p>
            </div>
          </div>

          <span
            className={`rounded-full border px-4 py-2 text-sm font-bold ${statusStyle}`}
          >
            {statusLabel}
          </span>
        </div>

        <h2 className="mt-6 text-lg font-semibold leading-relaxed text-white sm:text-xl">
          {question.question}
        </h2>
      </div>

      <div className="p-5 sm:p-7">
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isCorrectOption = option === question.correctAnswer;
            const isUserOption = option === userAnswer;

            let optionStyle =
              "border-white/10 bg-[#0b1d2c] text-gray-200";

            let letterStyle = "bg-white/10 text-gray-300";

            if (isCorrectOption) {
              optionStyle =
                "border-green-500/50 bg-green-500/10 text-green-200";

              letterStyle = "bg-green-500 text-white";
            } else if (isUserOption && !isCorrect) {
              optionStyle =
                "border-red-500/50 bg-red-500/10 text-red-200";

              letterStyle = "bg-red-500 text-white";
            }

            return (
              <div
                key={`${question.id}-${option}`}
                className={`flex items-start gap-3 rounded-2xl border p-4 transition ${optionStyle}`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${letterStyle}`}
                >
                  {String.fromCharCode(65 + index)}
                </span>

                <p className="flex-1 pt-1 leading-relaxed">{option}</p>

                {isCorrectOption && (
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-green-400"
                  />
                )}

                {isUserOption && !isCorrect && (
                  <XCircle
                    size={21}
                    className="mt-1 shrink-0 text-red-400"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div
            className={`rounded-2xl border p-5 ${
              isSkipped
                ? "border-yellow-500/20 bg-yellow-500/10"
                : isCorrect
                  ? "border-green-500/20 bg-green-500/10"
                  : "border-red-500/20 bg-red-500/10"
            }`}
          >
            <p className="text-sm text-gray-400">Your Answer</p>

            <p
              className={`mt-2 font-bold leading-relaxed ${
                isSkipped
                  ? "text-yellow-300"
                  : isCorrect
                    ? "text-green-300"
                    : "text-red-300"
              }`}
            >
              {isSkipped ? "Not Attempted" : userAnswer}
            </p>
          </div>

          <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5">
            <p className="text-sm text-gray-400">Correct Answer</p>

            <p className="mt-2 font-bold leading-relaxed text-green-300">
              {question.correctAnswer}
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-blue-500/20 bg-blue-500/[0.08] p-5 sm:p-6">
          <div className="flex items-center gap-2 text-blue-300">
            <CircleHelp size={21} />
            <h3 className="font-bold">Detailed Explanation</h3>
          </div>

          <p className="mt-3 whitespace-pre-line leading-7 text-gray-300">
            {question.explanation}
          </p>
        </div>
      </div>
    </article>
  );
}

type SummaryCardProps = {
  label: string;
  value: number;
  className: string;
};

function SummaryCard({ label, value, className }: SummaryCardProps) {
  return (
    <div className={`rounded-2xl border p-4 ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] opacity-80">
        {label}
      </p>

      <p className="mt-1 text-2xl font-black">{value}</p>
    </div>
  );
}

type LegendItemProps = {
  className: string;
  label: string;
};

function LegendItem({ className, label }: LegendItemProps) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-3 w-3 rounded border ${className}`} />
      <span>{label}</span>
    </div>
  );
}