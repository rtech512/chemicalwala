"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calculator,
  CheckCircle,
  ClipboardList,
  FileText,
  HelpCircle,
} from "lucide-react";

const points = [
  {
    icon: FileText,
    title: "Free Notes",
    desc: "Short, clear and exam-focused chemical engineering notes.",
    gradient: "from-blue-600 via-blue-700 to-indigo-950",
    glow: "shadow-blue-500/20",
  },
  {
    icon: ClipboardList,
    title: "Previous Year Questions",
    desc: "PYQ practice for semester, GATE and PSU preparation.",
    gradient: "from-violet-600 via-purple-700 to-fuchsia-950",
    glow: "shadow-violet-500/20",
  },
  {
    icon: CheckCircle,
    title: "MCQ Practice",
    desc: "Topic-wise MCQs to improve speed and accuracy.",
    gradient: "from-emerald-600 via-teal-700 to-emerald-950",
    glow: "shadow-emerald-500/20",
  },
  {
    icon: Calculator,
    title: "Formula Sheets",
    desc: "Important formulas in one place for quick revision.",
    gradient: "from-orange-500 via-amber-600 to-red-950",
    glow: "shadow-orange-500/20",
  },
  {
    icon: HelpCircle,
    title: "Doubt Support",
    desc: "Simple explanations to understand difficult concepts.",
    gradient: "from-cyan-600 via-sky-700 to-blue-950",
    glow: "shadow-cyan-500/20",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    desc: "Guidance for interview, industry and placement preparation.",
    gradient: "from-pink-600 via-rose-700 to-red-950",
    glow: "shadow-pink-500/20",
  },
];

export default function WhyChemicalWala() {
  return (
    <section className="bg-[#020817] px-5 py-10 text-white sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-7 max-w-3xl text-center">
          <p className="mb-2 text-xs font-black tracking-[0.16em] text-cyan-400 sm:text-sm">
            WHY CHEMICALWALA
          </p>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Learn Everything in One Place
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-400 sm:text-lg">
            Chemical engineering preparation ko simple, structured aur
            student-friendly banane ke liye designed platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {points.map((item, index) => {
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
                className={`group relative min-h-[205px] overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br ${item.gradient} p-5 shadow-xl ${item.glow} transition duration-300`}
              >
                {/* Top-right glow */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-3xl transition duration-500 group-hover:scale-125" />

                {/* Bottom-left dark glow */}
                <div className="absolute -bottom-12 -left-10 h-28 w-28 rounded-full bg-black/25 blur-3xl" />

                {/* Shine effect */}
                <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.10)_40%,transparent_60%)] bg-[length:220%_100%] bg-[-150%_0] transition-[background-position] duration-700 group-hover:bg-[80%_0]" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-4 inline-flex w-fit rounded-xl border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition duration-300 group-hover:rotate-3 group-hover:scale-105">
                    <Icon size={26} />
                  </div>

                  <h3 className="mb-2 text-xl font-black text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-white/80 sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}