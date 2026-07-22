"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Calculator,
  Droplets,
  Factory,
  Flame,
  FlaskConical,
  Gauge,
  Wind,
} from "lucide-react";

const subjects = [
  {
    icon: Calculator,
    title: "Process Calculations",
    desc: "Basic calculations, units and material balance.",
    gradient: "from-sky-600 via-cyan-700 to-blue-950",
    glow: "shadow-sky-500/20",
  },
  {
    icon: Wind,
    title: "Fluid Mechanics",
    desc: "Pumps, flow, pressure drop and piping basics.",
    gradient: "from-cyan-500 via-blue-700 to-indigo-950",
    glow: "shadow-cyan-500/20",
  },
  {
    icon: Flame,
    title: "Heat Transfer",
    desc: "Conduction, convection, radiation and exchangers.",
    gradient: "from-amber-500 via-orange-700 to-amber-950",
    glow: "shadow-amber-500/20",
  },
  {
    icon: Droplets,
    title: "Mass Transfer",
    desc: "Distillation, absorption and separation concepts.",
    gradient: "from-emerald-500 via-green-700 to-emerald-950",
    glow: "shadow-emerald-500/20",
  },
  {
    icon: FlaskConical,
    title: "Reaction Engineering",
    desc: "Reactors, kinetics and conversion problems.",
    gradient: "from-violet-600 via-purple-700 to-indigo-950",
    glow: "shadow-violet-500/20",
  },
  {
    icon: Factory,
    title: "Process Equipment",
    desc: "Industrial equipment and plant fundamentals.",
    gradient: "from-rose-500 via-pink-700 to-rose-950",
    glow: "shadow-rose-500/20",
  },
  {
    icon: Gauge,
    title: "Instrumentation",
    desc: "Sensors, control valves and process measurement.",
    gradient: "from-teal-500 via-cyan-700 to-teal-950",
    glow: "shadow-teal-500/20",
  },
  {
    icon: BarChart3,
    title: "Process Control",
    desc: "Control loops, stability and controllers.",
    gradient: "from-indigo-500 via-blue-700 to-indigo-950",
    glow: "shadow-indigo-500/20",
  },
  {
    icon: BookOpen,
    title: "Previous Year Questions",
    desc: "PYQs for quick revision and exam practice.",
    gradient: "from-fuchsia-500 via-purple-700 to-fuchsia-950",
    glow: "shadow-fuchsia-500/20",
  },
];

const firstRow = subjects.slice(0, 5);
const secondRow = subjects.slice(5);

export default function Subjects() {
  return (
    <section className="bg-[#020817] px-5 py-10 text-white sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 max-w-3xl">
          <p className="mb-2 text-xs font-black tracking-[0.16em] text-cyan-400 sm:text-sm">
            EXPLORE SUBJECTS
          </p>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Learn Chemical Engineering Step-by-Step
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Important subjects ko simple cards me organize kiya gaya hai, taki
            students easily notes, MCQs aur practice start kar saken.
          </p>
        </div>

        {/* First row: 5 cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {firstRow.map((item, index) => (
            <SubjectCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* Second row: 4 cards */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {secondRow.map((item, index) => (
            <SubjectCard
              key={item.title}
              item={item}
              index={index + 5}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SubjectCard({
  item,
  index,
}: {
  item: (typeof subjects)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.04,
        duration: 0.4,
      }}
      whileHover={{
        y: -5,
        scale: 1.01,
      }}
      className={`group relative min-h-[190px] overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br ${item.gradient} p-4 shadow-xl ${item.glow} transition duration-300`}
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-3xl transition duration-500 group-hover:scale-125" />

      <div className="absolute -bottom-12 -left-10 h-28 w-28 rounded-full bg-black/25 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.10)_40%,transparent_60%)] bg-[length:220%_100%] bg-[-150%_0] transition-[background-position] duration-700 group-hover:bg-[80%_0]" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-3 inline-flex w-fit rounded-xl border border-white/20 bg-white/10 p-2.5 text-white backdrop-blur-md transition duration-300 group-hover:rotate-3 group-hover:scale-105">
          <Icon size={24} />
        </div>

        <h3 className="mb-2 text-lg font-black leading-tight text-white">
          {item.title}
        </h3>

        <p className="text-sm leading-5 text-white/80">
          {item.desc}
        </p>

        <button
          type="button"
          className="mt-auto flex w-fit items-center gap-2 pt-4 text-sm font-black text-white"
        >
          Explore

          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </button>
      </div>
    </motion.article>
  );
}