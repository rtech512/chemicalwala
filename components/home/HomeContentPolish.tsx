"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  FileQuestion,
  GraduationCap,
  Layers3,
  Smartphone,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";

const stats = [
  {
    value: "100+",
    label: "Students",
    icon: GraduationCap,
  },
  {
    value: "6×",
    label: "GATE Qualified",
    icon: Award,
  },
  {
    value: "9+",
    label: "Core Subjects",
    icon: Layers3,
  },
  {
    value: "10",
    label: "HPCL Mock Tests",
    icon: Trophy,
  },
];

const features = [
  {
    title: "Subject-wise Notes",
    description:
      "Structured and exam-oriented notes for core Chemical Engineering subjects.",
    icon: BookOpen,
    href: "/notes",
    badge: "Study",
  },
  {
    title: "Practice MCQs",
    description:
      "Topic-wise MCQs with detailed explanations to strengthen your concepts.",
    icon: FileQuestion,
    href: "/mcq",
    badge: "Practice",
  },
  {
    title: "PSU Mock Tests",
    description:
      "Full-length HPCL mock tests designed to provide a real exam experience.",
    icon: ClipboardCheck,
    href: "/psu",
    badge: "Test",
  },
  {
    title: "Previous Year Questions",
    description:
      "Practice important GATE and PSU previous-year questions with solutions.",
    icon: Target,
    href: "/previous-year-papers",
    badge: "Revise",
  },
];

const benefits = [
  {
    title: "Structured Learning",
    description:
      "Study subject-wise content in a clear and organised learning path.",
    icon: Layers3,
  },
  {
    title: "Exam-Oriented Content",
    description:
      "Content designed specifically for GATE, HPCL, IOCL and other PSU exams.",
    icon: Target,
  },
  {
    title: "Detailed Solutions",
    description:
      "Understand every answer with clear explanations and concept-based solutions.",
    icon: CheckCircle2,
  },
  {
    title: "Mobile Friendly",
    description:
      "Learn and practise comfortably on mobile, tablet or desktop.",
    icon: Smartphone,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function HomeContentPolish() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-160px] top-[-120px] h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[120px]" />
          <div className="absolute right-[-120px] top-[80px] h-[360px] w-[360px] rounded-full bg-cyan-500/15 blur-[120px]" />
          <div className="absolute bottom-[-180px] left-1/2 h-[340px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />
        </div>

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-200"
            >
              <Sparkles className="h-4 w-4" />
              Built for GATE and PSU Aspirants
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Master Chemical Engineering with{" "}
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Smart Learning
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0"
            >
              Prepare for GATE, HPCL, IOCL and other PSU examinations with
              subject-wise notes, MCQs, previous-year questions and full-length
              mock tests—all in one platform.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center lg:justify-start"
            >
              <Link
                href="/mock-test"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-violet-950/40 transition duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-blue-500"
              >
                Start Mock Test
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/notes"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-slate-100 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/10"
              >
                <BookOpen className="h-5 w-5 text-violet-300" />
                Browse Notes
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-slate-400 lg:justify-start"
            >
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Exam-focused content
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Detailed explanations
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Mobile friendly
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-r from-violet-600/20 to-cyan-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/85 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-400">
                    ChemicalWala
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-white">
                    Learning Dashboard
                  </h2>
                </div>

                <div className="rounded-2xl bg-violet-500/15 p-3">
                  <GraduationCap className="h-7 w-7 text-violet-300" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-violet-400/30 hover:bg-white/[0.07]"
                    >
                      <div className="mb-4 inline-flex rounded-xl bg-violet-500/10 p-2.5">
                        <Icon className="h-5 w-5 text-violet-300" />
                      </div>

                      <p className="text-2xl font-black text-white sm:text-3xl">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-400/15 bg-emerald-500/10 p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-emerald-400/10 p-2">
                    <Award className="h-5 w-5 text-emerald-300" />
                  </div>

                  <div>
                    <p className="font-bold text-emerald-100">
                      Learn from real exam experience
                    </p>
                    <p className="mt-1 text-sm leading-6 text-emerald-100/65">
                      Created by a Chemical Engineer and 6× GATE Qualified
                      professional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="border-b border-white/10 bg-slate-950 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center sm:p-5"
              >
                <Icon className="mx-auto h-5 w-5 text-violet-300" />
                <p className="mt-3 text-2xl font-black text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-200">
              Everything You Need
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Prepare smarter with ChemicalWala
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
              Access structured learning resources designed to improve your
              concepts, practice and exam performance.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div key={feature.title} variants={itemVariants}>
                  <Link
                    href={feature.href}
                    className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-slate-900"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="rounded-2xl bg-violet-500/15 p-3.5">
                        <Icon className="h-6 w-6 text-violet-300" />
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-400">
                        {feature.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                      {feature.description}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-violet-300">
                      Explore now
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why ChemicalWala */}
      <section className="border-y border-white/10 bg-slate-900/40 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
              Why ChemicalWala
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Built around the needs of serious aspirants
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              ChemicalWala combines conceptual learning, exam-focused practice
              and detailed performance review in one simple platform.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Subject-wise Chemical Engineering preparation",
                "GATE and PSU-focused questions",
                "Clear explanations for every important concept",
                "Regular addition of new tests and resources",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <p className="text-sm leading-6 text-slate-300 sm:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/mock-test"
              className="group mt-9 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Explore Mock Tests
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-3xl border border-white/10 bg-slate-950/60 p-6"
                >
                  <div className="inline-flex rounded-2xl bg-blue-500/10 p-3">
                    <Icon className="h-6 w-6 text-blue-300" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/10 via-slate-900 to-blue-500/10 p-6 sm:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-[90px]" />

            <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr]">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[2rem] border border-violet-400/20 bg-violet-500/10 md:mx-0 sm:h-32 sm:w-32">
                <span className="text-4xl font-black text-violet-200 sm:text-5xl">
                  RY
                </span>
              </div>

              <div className="text-center md:text-left">
                <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-violet-200">
                  Founder
                </span>

                <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                  Rohit Kumar Yadav
                </h2>

                <p className="mt-2 font-semibold text-violet-300">
                  Chemical Engineer • 6× GATE Qualified • Creator of
                  ChemicalWala
                </p>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                  ChemicalWala was created to help Chemical Engineering students
                  prepare smarter for GATE, PSU and university examinations
                  through structured notes, high-quality MCQs, previous-year
                  questions and full-length mock tests.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}