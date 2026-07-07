const stats = [
  {
    number: "500+",
    title: "Study Notes",
  },
  {
    number: "5K+",
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
    <section className="w-full overflow-hidden bg-slate-950 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="w-full rounded-2xl border border-cyan-400/20 bg-slate-900 p-6 text-center transition hover:-translate-y-2 hover:border-cyan-400 sm:p-8"
            >
              <h2 className="break-words text-4xl font-extrabold text-cyan-400 sm:text-5xl">
                {item.number}
              </h2>

              <p className="mt-4 text-base text-slate-300 sm:text-lg">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}