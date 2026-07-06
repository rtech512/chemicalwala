type QuestionPaletteProps = {
  totalQuestions: number;
  currentQuestion: number;
  answers: Record<number, string>;
  reviewQuestions: number[];
  onQuestionChange: (index: number) => void;
  onSubmit: () => void;
};

export default function QuestionPalette({
  totalQuestions,
  currentQuestion,
  answers,
  reviewQuestions,
  onQuestionChange,
  onSubmit,
}: QuestionPaletteProps) {
  return (
    <div className="rounded-3xl bg-slate-800 p-6">
      <h3 className="mb-5 text-xl font-bold text-white">
        Questions
      </h3>

      <div className="grid grid-cols-5 gap-3">
        {Array.from({ length: totalQuestions }).map((_, index) => {
          const questionId = index + 1;

          return (
            <button
              key={questionId}
              onClick={() => onQuestionChange(index)}
              className={`h-12 rounded-lg font-bold transition ${
                currentQuestion === index
                  ? "bg-cyan-500 text-black"
                  : reviewQuestions.includes(questionId)
                  ? "bg-yellow-500 text-black"
                  : answers[questionId]
                  ? "bg-green-500 text-black"
                  : "bg-slate-700 text-white hover:bg-slate-600"
              }`}
            >
              {questionId}
            </button>
          );
        })}
      </div>

      <div className="mt-6 space-y-2 text-sm text-slate-300">
        <p>🟦 Current</p>
        <p>🟩 Answered</p>
        <p>🟨 Review</p>
        <p>⬛ Not Answered</p>
      </div>

      <button
        onClick={onSubmit}
        className="mt-8 w-full rounded-xl bg-red-500 py-4 text-lg font-black text-white transition hover:bg-red-600"
      >
        ✅ Submit Test
      </button>
    </div>
  );
}