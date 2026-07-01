import { ArrowRight, HelpCircle } from "lucide-react";

type CategoryCardProps = {
  icon: React.ElementType;
  title: string;
  questions: string;
  desc: string;
};

export default function CategoryCard({
  icon: Icon,
  title,
  questions,
  desc,
}: CategoryCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-cyan-400/40 hover:bg-white/[0.06]">
      <div className="mb-6 flex items-center justify-between">
        <div className="rounded-2xl bg-cyan-400/15 p-4 text-cyan-300">
          <Icon size={32} />
        </div>

        <span className="flex items-center gap-2 rounded-full border border-cyan-400/30 px-4 py-2 text-xs font-bold text-cyan-300">
          <HelpCircle size={14} />
          {questions}
        </span>
      </div>

      <h2 className="text-2xl font-black">{title}</h2>

      <p className="mt-3 min-h-[56px] leading-7 text-slate-400">{desc}</p>

      <button className="mt-6 flex items-center gap-2 font-bold text-cyan-400">
        Start Practice
        <ArrowRight size={17} className="transition group-hover:translate-x-1" />
      </button>
    </div>
  );
}