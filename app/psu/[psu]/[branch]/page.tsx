import Link from "next/link";
import { notFound } from "next/navigation";

const psuNames: Record<string, string> = {
  hpcl: "HPCL",
  iocl: "IOCL",
  nfl: "NFL",
};

const branchNames: Record<string, string> = {
  chemical: "Chemical Engineering",
  mechanical: "Mechanical Engineering",
  electrical: "Electrical Engineering",
  civil: "Civil Engineering",
};

const validBranches: Record<string, string[]> = {
  hpcl: ["chemical", "mechanical", "electrical", "civil"],
  iocl: ["chemical", "mechanical", "electrical"],
  nfl: ["chemical", "mechanical"],
};

export default async function PSUTestSeriesPage({
  params,
}: {
  params: Promise<{
    psu: string;
    branch: string;
  }>;
}) {
  const { psu, branch } = await params;

  const psuName = psuNames[psu];
  const branchName = branchNames[branch];

  const isValid =
    psuName &&
    branchName &&
    validBranches[psu]?.includes(branch);

  if (!isValid) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#071521] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
          >
            🏠 Home
          </Link>

          <Link
            href="/psu"
            className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-2 font-semibold text-slate-200 transition hover:bg-slate-700"
          >
            ← Back
          </Link>
        </div>

        <div className="mt-10">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
            {psuName} Test Series
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            {branchName}
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            Select a mock test and start your exam preparation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map((test) => (
            <Link
              key={test}
              href={`/psu/${psu}/${branch}/test-${test}/quiz`}
              className="group rounded-3xl border border-cyan-500/30 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                {psuName}
              </div>

              <h2 className="mt-3 text-2xl font-black text-white">
                Test {test}
              </h2>

              {psu === "hpcl" ? (
  <div className="mt-6 grid grid-cols-3 gap-3">
    <div className="rounded-xl bg-white/5 p-3">
      <div className="text-2xl font-black text-white">
        170
      </div>
      <div className="mt-1 text-sm text-slate-400">
        Questions
      </div>
    </div>

    <div className="rounded-xl bg-white/5 p-3">
      <div className="text-2xl font-black text-white">
        170
      </div>
      <div className="mt-1 text-sm text-slate-400">
        Marks
      </div>
    </div>

    <div className="rounded-xl bg-white/5 p-3">
      <div className="text-2xl font-black text-white">
        150
      </div>
      <div className="mt-1 text-sm text-slate-400">
        Minutes
      </div>
    </div>
  </div>
) : (
  <p className="mt-3 text-slate-400">
    Full-length mock test with result and solutions.
  </p>
)}

              <div className="mt-6 rounded-xl bg-cyan-500 py-3 text-center font-bold text-black transition group-hover:bg-cyan-400">
                Start Test →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}