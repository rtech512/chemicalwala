"use client";

import Image from "next/image";
import { BookOpen, FileText, Trophy, Headphones, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,200,255,0.28),transparent_35%),radial-gradient(circle_at_15%_70%,rgba(37,99,235,0.35),transparent_35%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 pb-12 pt-8 sm:pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pt-20">
        <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 px-5 py-3 text-xs font-black text-cyan-300">
            <Sparkles size={15} />
            INDIA&apos;S CHEMICAL ENGINEERING LEARNING PLATFORM
          </div>

          <h1 className="text-5xl font-black leading-[1.05] md:text-7xl">
            Master Chemical
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Engineering
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-300">
            Free notes, MCQ practice, PSU preparation, previous year questions,
            formula sheets and everything you need to crack exams.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="group flex items-center gap-3 rounded-xl bg-cyan-400 px-8 py-5 font-black text-black shadow-lg shadow-cyan-400/30 transition hover:-translate-y-1">
              <BookOpen size={20} /> Start Learning
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </button>

            <button className="flex items-center gap-3 rounded-xl border border-cyan-400/70 bg-white/5 px-8 py-5 font-black">
              <FileText size={20} /> Free Notes
            </button>
          </div>

          <p className="mt-9 max-w-xl text-base leading-7 text-slate-300">
            👨‍🎓 👩‍🎓 👨‍🎓 Join <b>10,000+</b> Chemical Engineering students
            learning with <span className="font-bold text-cyan-400">ChemicalWala</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden min-h-[640px] lg:block"
        >
          <div className="absolute right-[-80px] top-20 h-[520px] w-[720px] rounded-full bg-cyan-400/20 blur-3xl" />

          <Image
            src="/images/plant.png"
            alt="Chemical Plant"
            fill
            priority
            className="object-contain object-right-bottom scale-110 opacity-95 drop-shadow-[0_0_80px_rgba(34,211,238,0.35)]"
          />

          <div className="absolute left-14 top-28 h-40 w-40 rounded-full border border-cyan-400/30 bg-cyan-400/10" />
          <div className="absolute left-24 top-40 h-12 w-12 rounded-full bg-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.9)]" />
          <div className="absolute left-48 top-28 h-8 w-8 rounded-full bg-blue-400 shadow-[0_0_40px_rgba(96,165,250,0.9)]" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#02081766] to-transparent" />
        </motion.div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid rounded-3xl border border-cyan-400/40 bg-[#030b1a]/85 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur md:grid-cols-4">
          <Stat icon={<FileText />} number="500+" title="Study Notes" />
          <Stat icon={<BookOpen />} number="5,000+" title="MCQs" />
          <Stat icon={<Trophy />} number="100+" title="Mock Tests" />
          <Stat icon={<Headphones />} number="24×7" title="Learning Support" />
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, number, title }: { icon: React.ReactNode; number: string; title: string }) {
  return (
    <div className="flex items-center gap-5 border-cyan-400/25 p-4 md:border-r md:last:border-r-0">
      <div className="rounded-2xl bg-cyan-400/20 p-4 text-cyan-300">{icon}</div>
      <div>
        <h3 className="text-4xl font-black text-cyan-400">{number}</h3>
        <p className="text-lg font-black">{title}</p>
        <p className="text-sm text-slate-400">High Quality Content</p>
      </div>
    </div>
  );
}