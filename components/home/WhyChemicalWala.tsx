import {
  CheckCircle,
  FileText,
  ClipboardList,
  Calculator,
  HelpCircle,
  Briefcase,
} from "lucide-react";

const points = [
  {
    icon: FileText,
    title: "Free Notes",
    desc: "Short, clear and exam-focused chemical engineering notes.",
  },
  {
    icon: ClipboardList,
    title: "Previous Year Questions",
    desc: "PYQ practice for semester, GATE and PSU preparation.",
  },
  {
    icon: CheckCircle,
    title: "MCQ Practice",
    desc: "Topic-wise MCQs to improve speed and accuracy.",
  },
  {
    icon: Calculator,
    title: "Formula Sheets",
    desc: "Important formulas in one place for quick revision.",
  },
  {
    icon: HelpCircle,
    title: "Doubt Support",
    desc: "Simple explanations to understand difficult concepts.",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    desc: "Guidance for interview, industry and placement preparation.",
  },
];

export default function WhyChemicalWala() {
  return (
    <section className="bg-[#020817] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold text-cyan-400">
            WHY CHEMICALWALA
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Learn Everything in One Place
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Chemical engineering preparation ko simple, structured aur
            student-friendly banane ke liye designed platform.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {points.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/15 p-4 text-cyan-300">
                  <Icon size={30} />
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