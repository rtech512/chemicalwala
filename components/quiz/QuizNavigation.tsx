type QuizNavigationProps = {
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onReview: () => void;
  onClear: () => void;
  onSubmit: () => void;
};

export default function QuizNavigation({
  isFirstQuestion,
  isLastQuestion,
  onPrevious,
  onNext,
  onReview,
  onClear,
}: QuizNavigationProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className="rounded-xl bg-slate-700 px-6 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        ⬅ Previous
      </button>

      <button
        onClick={onClear}
        className="rounded-xl bg-red-500 px-6 py-3 font-bold text-white"
      >
        ❌ Clear Response
      </button>

      <button
        onClick={onReview}
        className="rounded-xl bg-yellow-500 px-6 py-3 font-bold text-black"
      >
        🟨 Mark for Review
      </button>

      <button
        onClick={onNext}
        disabled={isLastQuestion}
        className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black disabled:cursor-not-allowed disabled:opacity-40"
      >
        ➡ Save & Next
      </button>
    </div>
  );
}