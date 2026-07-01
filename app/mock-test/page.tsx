import Link from "next/link";
import { mockSubjects } from "@/data/mockTests";

export default function MockTestPage() {
  return (
    <main className="min-h-screen bg-[#06121f] px-5 py-24 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold text-cyan-300">
            🏆 ChemicalWala Practice Zone
          </p>

          <h1 className="text-4xl font-black md:text-5xl">Mock Tests</h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Subject-wise mock tests with Basic, Intermediate and Advanced levels.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockSubjects.map((subject) => (
            <div
              key={subject.slug}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl transition hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/15 text-3xl">
                  {subject.icon}
                </div>

                <h2 className="text-xl font-bold">{subject.name}</h2>
              </div>

              <div className="space-y-3 text-gray-300">
                <p>📝 {subject.questions} Questions</p>
                <p>🧪 {subject.levels} Levels</p>
                <p>📚 {subject.tests} Mock Tests</p>
              </div>

              <Link
                href={`/mock-test/${subject.slug}`}
                className="mt-6 block rounded-2xl bg-cyan-400 px-5 py-3 text-center font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Start Practice
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}