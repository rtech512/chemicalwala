import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Clock3,
  Construction,
  Sparkles,
} from "lucide-react";

export default function ComingSoonPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020817] px-4 py-5 text-white sm:px-6 sm:py-7">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_15%_85%,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_90%_70%,rgba(6,182,212,0.10),transparent_30%)]" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Main card */}
      <section className="relative z-10 mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#041225]/85 px-5 py-6 text-center shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:px-8 sm:py-7 lg:px-10 lg:py-8">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="relative">
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 sm:h-20 sm:w-20">
            <Construction className="h-8 w-8 text-cyan-300 sm:h-10 sm:w-10" />
          </div>

          {/* Badge */}
          <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-cyan-200 sm:text-xs">
            <Sparkles className="h-4 w-4" />
            New Section Under Development
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Process Engineering
            <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Process Engineering concepts, industrial learning resources,
            practical knowledge and professional preparation material are
            currently being developed for ChemicalWala.
          </p>

          {/* Features */}
          <div className="mx-auto mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left">
              <div className="rounded-xl bg-cyan-400/10 p-2.5">
                <BookOpen className="h-5 w-5 text-cyan-300" />
              </div>

              <div>
                <p className="font-bold text-white">Industrial Notes</p>
                <p className="mt-0.5 text-xs text-slate-400">
                  Practical and structured content
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left">
              <div className="rounded-xl bg-cyan-400/10 p-2.5">
                <Clock3 className="h-5 w-5 text-cyan-300" />
              </div>

              <div>
                <p className="font-bold text-white">Practical Learning</p>
                <p className="mt-0.5 text-xs text-slate-400">
                  Industry-focused preparation
                </p>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-200">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Development in progress
          </div>

          {/* Back button */}
          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 font-black text-[#02101b] shadow-lg shadow-cyan-950/30 transition duration-300 hover:-translate-y-1 hover:from-cyan-300 hover:to-blue-500"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}