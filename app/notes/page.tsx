import NotesHero from "@/components/notes/NotesHero";
import NotesGrid from "@/components/notes/NotesGrid";
import RequestSection from "@/components/notes/RequestSection";

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <NotesHero />

        <NotesGrid />

        <RequestSection />
      </section>
    </main>
  );
}