import McqHero from "@/components/mcq/McqHero";
import CategoryGrid from "@/components/mcq/CategoryGrid";
import StartQuiz from "@/components/mcq/StartQuiz";

export default function McqPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <McqHero />

        <CategoryGrid />

        <StartQuiz />
      </section>
    </main>
  );
}