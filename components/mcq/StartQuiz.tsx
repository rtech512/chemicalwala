import { ArrowRight } from "lucide-react";

export default function StartQuiz() {
  return (
    <div className="mt-14 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-8">
      <h2 className="text-3xl font-black text-white">
        Ready to Test Your Knowledge?
      </h2>

      <p className="mt-3 max-w-2xl leading-7 text-slate-300">
        Practice hundreds of Chemical Engineering MCQs with instant results,
        explanations and exam-level questions.
      </p>

      <button className="mt-6 flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-black transition hover:bg-cyan-300">
        Start Quiz
        <ArrowRight size={18} />
      </button>
    </div>
  );
}