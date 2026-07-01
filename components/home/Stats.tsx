const stats = [
  {
    number: "500+",
    title: "Study Notes",
  },
  {
    number: "5,000+",
    title: "MCQs",
  },
  {
    number: "100+",
    title: "Mock Tests",
  },
  {
    number: "24×7",
    title: "Learning Support",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-950 py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-8 text-center transition hover:-translate-y-2 hover:border-cyan-400"
            >
              <h2 className="text-5xl font-extrabold text-cyan-400">
                {item.number}
              </h2>

              <p className="mt-4 text-lg text-slate-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}