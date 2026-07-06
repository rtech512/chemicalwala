import Link from "next/link";
import { notFound } from "next/navigation";
import { mockSubjects } from "@/data/mockTests";

const levels = [
  {
    title: "Basic",
    slug: "basic",
    color: "border-green-500",
    emoji: "🟢",
  },
  {
    title: "Intermediate",
    slug: "intermediate",
    color: "border-yellow-500",
    emoji: "🟡",
  },
  {
    title: "Advanced",
    slug: "advanced",
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
    <main className="min-h-screen bg-[#071521] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/mock-test"
          className="text-cyan-400 hover:underline"
        >
          ← Back
        </Link>

        <h1 className="mt-6 text-5xl font-black">
          {currentSubject.icon} {currentSubject.name}
        </h1>

        <p className="mt-3 text-slate-300">
          Select your difficulty level.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {levels.map((level) => (
            <div
              key={level.title}
              className={`rounded-3xl border ${level.color} bg-slate-900 p-6`}
            >
              <h2 className="mb-5 text-2xl font-bold">
                {level.emoji} {level.title}
              </h2>

              {[1, 2, 3].map((test) => (
                <Link
                  key={test}
                  href={`/mock-test/${subject}/${level.slug}/test-${test}/quiz`}
                  className="mb-3 block w-full rounded-xl bg-cyan-500 py-3 text-center font-semibold text-black transition hover:bg-cyan-400"
                >
                  Test {test}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}