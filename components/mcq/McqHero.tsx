import SearchBar from "./SearchBar";

export default function McqHero() {
  return (
    <>
      <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
        PRACTICE MCQs
      </p>

      <h1 className="mt-3 text-5xl font-black md:text-6xl">
        Chemical Engineering MCQs
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
        Practice topic-wise MCQs for Semester Exams, GATE, PSU and placement
        preparation with detailed explanations.
      </p>

      <SearchBar />
    </>
  );
}