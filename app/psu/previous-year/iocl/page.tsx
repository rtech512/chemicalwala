import Link from "next/link";

const papers = [
  {
    year: "2025",
    title: "IOCL Previous Year Paper 2025",
    description: "IOCL recruitment exam previous year question paper.",
  },
  {
    year: "2024",
    title: "IOCL Previous Year Paper 2024",
    description: "IOCL recruitment exam previous year question paper.",
  },
  {
    year: "2023",
    title: "IOCL Previous Year Paper 2023",
    description: "IOCL recruitment exam previous year question paper.",
  },
  {
    year: "2022",
    title: "IOCL Previous Year Paper 2022",
    description: "IOCL recruitment exam previous year question paper.",
  },
];

export default function IOCLPreviousYearPage() {
  return (
    <main className="min-h-screen bg-[#071521] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
          >
            🏠 Home
          </Link>

          <Link
            href="/psu/iocl/chemical"
            className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-2 font-semibold text-slate-200 transition hover:bg-slate-700"
          >
            ← Back
          </Link>
        </div>

        <div className="mt-10">
          <p className="text-sm font-bold uppercase tracking-wider text-yellow-300">
            Previous Year Papers
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            IOCL Previous Year Papers
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            IOCL previous year question papers will be available soon.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper) => (
            <div
              key={paper.year}
              className="rounded-3xl border border-yellow-400/30 bg-slate-900 p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-4xl">📄</div>

                <span className="rounded-full bg-slate-700 px-3 py-1 text-xs font-bold text-slate-300">
                  Coming Soon
                </span>
              </div>

              <div className="mt-5 text-sm font-bold uppercase tracking-wider text-yellow-300">
                IOCL {paper.year}
              </div>

              <h2 className="mt-3 text-2xl font-black text-white">
                {paper.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                {paper.description}
              </p>

              <div className="mt-6 w-full cursor-not-allowed rounded-xl bg-slate-700 py-3 text-center font-bold text-slate-400">
                Coming Soon
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}