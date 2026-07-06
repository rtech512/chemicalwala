type QuizHeaderProps = {
  subject: string;
  level: string;
  test: string;
  timeLeft: number;
};

export default function QuizHeader({
  subject,
  level,
  test,
  timeLeft,
}: QuizHeaderProps) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081726]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-black text-white">
            🧪 ChemicalWala Mock Test
          </h1>

          <p className="mt-1 text-sm capitalize text-slate-400">
            {subject} • {level} • {test}
          </p>
        </div>

        <div className="rounded-xl bg-red-500 px-6 py-3 text-xl font-black text-white">
          ⏱️ {minutes}:{seconds.toString().padStart(2, "0")}
        </div>
      </div>
    </header>
  );
}