import { ArrowRight } from "lucide-react";

export default function RequestSection() {
  return (
    <div className="mt-14 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-8">
      <h2 className="text-3xl font-black text-white">
        Need More Notes?
      </h2>

      <p className="mt-3 max-w-2xl leading-7 text-slate-300">
        We are continuously adding new Chemical Engineering notes,
        MCQs, Formula Sheets and Previous Year Questions.
      </p>

      <button className="mt-6 flex items-center gap-2 font-bold text-cyan-300">
        Request Notes
        <ArrowRight size={18} />
      </button>
    </div>
  );
}