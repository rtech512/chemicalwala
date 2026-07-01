import Link from "next/link";
import { notFound } from "next/navigation";
import { mockSubjects } from "@/data/mockTests";

const levels = [
  {
    title: "Basic",
    color: "border-green-500",
    emoji: "🟢",
  },
  {
    title: "Intermediate",
    color: "border-yellow-500",
    emoji: "🟡",
  },
  {
    title: "Advanced",
    color: "border-red-500",
    emoji: "🔴",
  },
];

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;

  const currentSubject = mockSubjects.find(
    (item) => item.slug === subject
  );

  if (!currentSubject) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#071521] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/mock-test"
          className="text-cyan-400 hover:underline"
        >
          ← Back
        </Link>

        <h1 className="text-5xl font-black mt-6">
          {currentSubject.icon} {currentSubject.name}
        </h1>

        <p className="text-slate-300 mt-3">
          Select your difficulty level.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {levels.map((level) => (
            <div
              key={level.title}
              className={`rounded-3xl border ${level.color} p-6 bg-slate-900`}
            >
              <h2 className="text-2xl font-bold mb-5">
                {level.emoji} {level.title}
              </h2>

              {[1, 2, 3].map((test) => (
                <button
                  key={test}
                  className="w-full mb-3 rounded-xl bg-cyan-500 py-3 font-semibold text-black hover:bg-cyan-400"
                >
                  Test {test}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}