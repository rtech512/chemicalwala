import SearchBar from "./SearchBar";

export default function NotesHero() {
  return (
    <>
      <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
        STUDY MATERIAL
      </p>

      <h1 className="mt-3 text-5xl font-black md:text-6xl">
        Chemical Engineering Notes
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
        Download high-quality Chemical Engineering Notes, Formula Sheets,
        Previous Year Questions and Semester-wise study material from one place.
      </p>

      <SearchBar />
    </>
  );
}