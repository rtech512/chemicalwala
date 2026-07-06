import Link from "next/link";

const psus = [
  {
    name: "HPCL",
    fullName: "Hindustan Petroleum Corporation Limited",
    icon: "⛽",
    slug: "hpcl",
    branches: [
      {
        name: "Chemical Engineering",
        icon: "⚗️",
        slug: "chemical",
      },
      {
        name: "Mechanical Engineering",
        icon: "⚙️",
        slug: "mechanical",
      },
      {
        name: "Electrical Engineering",
        icon: "⚡",
        slug: "electrical",
      },
      {
        name: "Civil Engineering",
        icon: "🏗️",
        slug: "civil",
      },
    ],
  },
  {
    name: "IOCL",
    fullName: "Indian Oil Corporation Limited",
    icon: "🛢️",
    slug: "iocl",
    branches: [
      {
        name: "Chemical Engineering",
        icon: "⚗️",
        slug: "chemical",
      },
      {
        name: "Mechanical Engineering",
        icon: "⚙️",
        slug: "mechanical",
      },
      {
        name: "Electrical Engineering",
        icon: "⚡",
        slug: "electrical",
      },
    ],
  },
  {
    name: "NFL",
    fullName: "National Fertilizers Limited",
    icon: "🏭",
    slug: "nfl",
    branches: [
      {
        name: "Chemical Engineering",
        icon: "⚗️",
        slug: "chemical",
      },
      {
        name: "Mechanical Engineering",
        icon: "⚙️",
        slug: "mechanical",
      },
    ],
  },
];

export default function PSUPage() {
  return (
    <main className="min-h-screen bg-[#071521] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-block rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
        >
          🏠 Home
        </Link>

        <div className="mt-10">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
            PSU Preparation
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            PSU Test Series
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Select PSU and engineering branch to start exam-focused preparation.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {psus.map((psu) => (
            <section
              key={psu.slug}
              className="rounded-3xl border border-cyan-500/30 bg-slate-900/80 p-6 md:p-8"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-black text-white">
                  {psu.icon} {psu.name}
                </h2>

                <p className="mt-2 text-slate-400">
                  {psu.fullName}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {psu.branches.map((branch) => (
                  <Link
                    key={`${psu.slug}-${branch.slug}`}
                    href={`/psu/${psu.slug}/${branch.slug}/enroll`}
                    className="group rounded-2xl border border-white/10 bg-[#071521] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <div className="text-4xl">
                      {branch.icon}
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-white">
                      {branch.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Mock Tests + Result + Solutions
                    </p>

                    <div className="mt-5 font-bold text-cyan-400 transition group-hover:text-cyan-300">
                      View Test Series →
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}