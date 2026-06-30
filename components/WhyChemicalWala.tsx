const reasons = [
  {
    icon: "🎯",
    title: "Exam Focused",
    text: "GATE, PSU aur semester exams ke liye focused content.",
  },
  {
    icon: "👨‍🎓",
    title: "Student Friendly",
    text: "Simple language me notes, MCQ aur concepts.",
  },
  {
    icon: "✅",
    title: "Quality Content",
    text: "Important topics ko short aur clear format me.",
  },
  {
    icon: "📥",
    title: "100% Free",
    text: "Students ke liye notes aur resources free.",
  },
];

export default function WhyChemicalWala() {
  return (
    <section className="bg-slate-950 px-6 py-16">
      <div className="mx-auto max-w-7xl rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-8">
        <h2 className="text-center text-3xl font-extrabold text-white">
          Why <span className="text-cyan-400">ChemicalWala?</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => (
            <div key={item.title} className="text-center">
              <div className="text-5xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}