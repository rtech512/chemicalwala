import { Question } from "@/types/question";

type QuestionCardProps = {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer?: string;
  onSelectAnswer: (option: string) => void;
};

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
}: QuestionCardProps) {
  return (
    <div className="rounded-3xl bg-slate-800 p-8">
      <div className="mb-6">
        <span className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-black">
          Question {questionNumber} / {totalQuestions}
        </span>
      </div>

      <h2 className="text-2xl font-bold text-white">{question.question}</h2>

      <div className="mt-8 space-y-4">
        {question.options.map((option) => {
          const selected = selectedAnswer === option;

          return (
            <button
              key={option}
              onClick={() => onSelectAnswer(option)}
              className={`w-full rounded-xl border p-5 text-left font-semibold transition ${
                selected
                  ? "border-cyan-400 bg-cyan-500 text-black"
                  : "border-slate-600 text-white hover:border-cyan-400 hover:bg-cyan-500/10"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}