"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  FileText,
  GraduationCap,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Free Notes",
    desc: "Chemical engineering ke important subjects ke short aur clear notes.",
    gradient: "from-blue-600 via-blue-700 to-indigo-950",
    glow: "shadow-blue-500/20",
  },
  {
    icon: FileText,
    title: "MCQ Practice",
    desc: "Exam-oriented MCQs with quick revision support.",
    gradient: "from-violet-600 via-purple-700 to-fuchsia-950",
    glow: "shadow-violet-500/20",
  },
  {
    icon: Trophy,
    title: "PSU Preparation",
    desc: "GATE, PSU aur semester exams ke liye focused content.",
    gradient: "from-emerald-600 via-teal-700 to-emerald-950",
    glow: "shadow-emerald-500/20",
  },
  {
    icon: GraduationCap,
    title: "Student Friendly",
    desc: "Simple language me concepts, formulas aur previous year practice.",
    gradient: "from-orange-500 via-amber-600 to-red-950",
    glow: "shadow-orange-500/20",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-[#020817] px-5 py-10 text-white sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-7 max-w-3xl">
          <p className="mb-2 text-xs font-black tracking-[0.16em] text-cyan-400 sm:text-sm">
            WHAT YOU GET
          </p>

          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Everything for Chemical Engineering preparation
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.01,
                }}
                className={`group relative min-h-[220px] overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br ${item.gradient} p-5 shadow-xl ${item.glow} transition duration-300`}
              >
                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-3xl transition duration-500 group-hover:scale-125" />

                <div className="absolute -bottom-12 -left-10 h-28 w-28 rounded-full bg-black/25 blur-3xl" />

                {/* Shine */}
                <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.10)_40%,transparent_60%)] bg-[length:220%_100%] bg-[-150%_0] transition-[background-position] duration-700 group-hover:bg-[80%_0]" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-4 inline-flex w-fit rounded-xl border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition duration-300 group-hover:rotate-3 group-hover:scale-105">
                    <Icon size={26} />
                  </div>

                  <h3 className="mb-2 text-xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-white/80">
                    {item.desc}
                  </p>

                  <button
                    type="button"
                    className="mt-auto flex w-fit items-center gap-2 pt-4 text-sm font-black text-white"
                  >
                    Explore

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}