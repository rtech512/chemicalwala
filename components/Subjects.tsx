const subjects = [
  { icon: "🌡️", name: "Thermodynamics" },
  { icon: "🌊", name: "Fluid Mechanics" },
  { icon: "🔥", name: "Heat Transfer" },
  { icon: "⚗️", name: "Mass Transfer" },
  { icon: "🎛️", name: "Process Control" },
  { icon: "🏭", name: "Plant Design" },
];

export default function Subjects() {
  return (
    <section className="bg-slate-900 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-cyan-400">
            Learn Better
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-white">
            Popular Chemical Engineering Subjects
          </h2>

          <p className="mt-4 text-slate-400">
            Choose your subject and start learning with notes, MCQs and previous year questions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="group cursor-pointer rounded-2xl border border-cyan-400/20 bg-slate-950 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="text-5xl">{subject.icon}</div>

              <h3 className="mt-5 text-lg font-bold text-white group-hover:text-cyan-400">
                {subject.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-xl bg-cyan-400 px-8 py-3 font-bold text-black transition hover:bg-cyan-300">
            View All Subjects →
          </button>
        </div>
      </div>
    </section>
  );
}