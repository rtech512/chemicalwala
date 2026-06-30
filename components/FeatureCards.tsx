const features = [
  {
    icon: "📚",
    title: "Subject Notes",
    text: "Topic-wise Chemical Engineering Notes.",
  },
  {
    icon: "📝",
    title: "MCQ Practice",
    text: "Thousands of Practice Questions.",
  },
  {
    icon: "🏆",
    title: "PSU Mock Test",
    text: "IOCL, ONGC, BPCL & HPCL Preparation.",
  },
  {
    icon: "📄",
    title: "PDF Notes",
    text: "Download free study material.",
  },
];

export default function FeatureCards() {
  return (
    <section id="courses" className="bg-slate-900 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-7 text-center shadow-lg transition hover:-translate-y-2 hover:border-cyan-400"
          >
            <div className="text-5xl">{item.icon}</div>
            <h3 className="mt-5 text-2xl font-bold text-white">
              {item.title}
            </h3>
            <div className="mx-auto mt-3 h-1 w-14 bg-cyan-400" />
            <p className="mt-5 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}