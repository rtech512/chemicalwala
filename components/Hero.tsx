export default function Hero() {
  return (
    <section className="relative flex min-h-[430px] flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0ea5e933,transparent_35%),radial-gradient(circle_at_top_right,#2563eb33,transparent_35%)]" />

      <div className="relative z-10">
        <p className="font-bold tracking-widest text-cyan-400">
          CHEMICAL ENGINEERING LEARNING PLATFORM
        </p>

        <h1 className="mt-4 text-5xl font-extrabold md:text-7xl">
          Chemical<span className="text-cyan-400">Wala</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
          Notes, MCQ Practice, PSU Mock Tests and Free PDF Notes for Chemical
          Engineering students.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-cyan-400 px-7 py-3 font-bold text-black">
            📖 Start MCQ
          </button>

          <button className="rounded-xl border border-cyan-400 px-7 py-3 font-bold text-white">
            📄 PDF Notes
          </button>
        </div>
      </div>
    </section>
  );
}