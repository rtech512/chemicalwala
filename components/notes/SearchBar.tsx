export default function SearchBar() {
  return (
    <div className="mt-10">
      <input
        type="text"
        placeholder="🔍 Search Notes..."
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-lg text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
      />
    </div>
  );
}