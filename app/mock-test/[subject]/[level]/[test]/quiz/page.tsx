"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

import { basicTest1 } from "@/data/questions/fluid-mechanics/basic-test-1";
import { basicTest2 } from "@/data/questions/fluid-mechanics/basic-test-2";
import { basicTest3 } from "@/data/questions/fluid-mechanics/basic-test-3";
import QuizHeader from "@/components/quiz/QuizHeader";
import QuestionCard from "@/components/quiz/QuestionCard";
import QuestionPalette from "@/components/quiz/QuestionPalette";
import QuizNavigation from "@/components/quiz/QuizNavigation";
import SubmitDialog from "@/components/quiz/SubmitDialog";



export default function QuizPage() {
  const params = useParams();

const test = params.test as string;

const questions =
  test === "test-3"
    ? basicTest3
    : test === "test-2"
    ? basicTest2
    : basicTest1;

  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [reviewQuestions, setReviewQuestions] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [submitOpen, setSubmitOpen] = useState(false);

  const current = questions[currentQuestion];

  useEffect(() => {
    if (timeLeft <= 0) {
      setSubmitOpen(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const selectAnswer = (option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [current.id]: option,
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const clearResponse = () => {
    setAnswers((prev) => {
      const updated = { ...prev };
      delete updated[current.id];
      return updated;
    });

    setReviewQuestions((prev) =>
      prev.filter((id) => id !== current.id)
    );
  };

  const markForReview = () => {
    if (!reviewQuestions.includes(current.id)) {
      setReviewQuestions((prev) => [...prev, current.id]);
    }

    nextQuestion();
  };

 const submitTest = () => {
  let correctCount = 0;

  questions.forEach((question) => {
    if (answers[question.id] === question.answer) {
      correctCount++;
    }
  });

  const answeredCount = Object.keys(answers).length;
  const solutions = questions.map((question) => ({
  id: question.id,
  question: question.question,
  userAnswer: answers[question.id] || "Not Answered",
  correctAnswer: question.answer,
  explanation: question.explanation,
}));

  const resultData = {
    totalQuestions: questions.length,
    answeredCount: answeredCount,
    correctCount: correctCount,
    wrongCount: answeredCount - correctCount,
    skippedCount: questions.length - answeredCount,
    timeTaken: 25 * 60 - timeLeft,
    answers,
    solutions,
  };

  localStorage.setItem("chemicalwala-result", JSON.stringify(resultData));

  router.push("/mock-test/result");
};

  return (
    <main className="min-h-screen bg-[#06121f] text-white">
      <QuizHeader
        subject="Fluid Mechanics"
        level="Basic"
      test={
  test === "test-3"
    ? "Test 3"
    : test === "test-2"
    ? "Test 2"
    : "Test 1"
}
        timeLeft={timeLeft}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 p-6">
        <div className="col-span-12 lg:col-span-9">
          <QuestionCard
            question={current}
            questionNumber={currentQuestion + 1}
            totalQuestions={questions.length}
            selectedAnswer={answers[current.id]}
            onSelectAnswer={selectAnswer}
          />

          <QuizNavigation
            isFirstQuestion={currentQuestion === 0}
            isLastQuestion={currentQuestion === questions.length - 1}
            onPrevious={previousQuestion}
            onNext={nextQuestion}
            onReview={markForReview}
            onClear={clearResponse}
            onSubmit={() => setSubmitOpen(true)}
          />
        </div>

        <div className="col-span-12 lg:col-span-3">
          <QuestionPalette
  totalQuestions={questions.length}
  currentQuestion={currentQuestion}
  answers={answers}
  reviewQuestions={reviewQuestions}
  onQuestionChange={setCurrentQuestion}
  onSubmit={() => setSubmitOpen(true)}
/>
        </div>
      </div>

      <SubmitDialog
        open={submitOpen}
        totalQuestions={questions.length}
        answeredCount={Object.keys(answers).length}
        reviewCount={reviewQuestions.length}
        onCancel={() => setSubmitOpen(false)}
        onConfirm={submitTest}
      />
    </main>
  );
}