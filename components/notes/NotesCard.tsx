import { Download, FileText } from "lucide-react";

type NotesCardProps = {
  icon: React.ElementType;
  title: string;
  semester: string;
  files: string;
  desc: string;
};

export default function NotesCard({
  icon: Icon,
  title,
  semester,
  files,
  desc,
}: NotesCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-cyan-400/40 hover:bg-white/[0.06]">
      <div className="mb-6 flex items-center justify-between">
        <div className="rounded-2xl bg-cyan-400/15 p-4 text-cyan-300">
          <Icon size={32} />
        </div>

        <span className="rounded-full border border-cyan-400/30 px-4 py-2 text-xs font-bold text-cyan-300">
          {semester}
        </span>
      </div>

      <h2 className="text-2xl font-black">{title}</h2>

      <p className="mt-3 min-h-[56px] leading-7 text-slate-400">{desc}</p>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="flex items-center gap-2 text-sm text-slate-400">
          <FileText size={17} />
          {files}
        </span>

        <button className="flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-black text-black">
          <Download size={16} />
          Download
        </button>
      </div>
    </div>
  );
}