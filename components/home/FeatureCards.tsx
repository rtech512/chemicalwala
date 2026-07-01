import { BookOpen, FileText, Trophy, GraduationCap } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Free Notes",
    desc: "Chemical engineering ke important subjects ke short aur clear notes.",
  },
  {
    icon: FileText,
    title: "MCQ Practice",
    desc: "Exam-oriented MCQs with quick revision support.",
  },
  {
    icon: Trophy,
    title: "PSU Preparation",
    desc: "GATE, PSU aur semester exams ke liye focused content.",
  },
  {
    icon: GraduationCap,
    title: "Student Friendly",
    desc: "Simple language me concepts, formulas aur previous year practice.",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-[#020817] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold text-cyan-400">
            WHAT YOU GET
          </p>
          <h2 className="text-4xl font-black md:text-5xl">
            Everything for Chemical Engineering preparation
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-cyan-400/15 p-4 text-cyan-300">
                  <Icon size={32} />
                </div>

                <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
                <p className="leading-7 text-slate-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}