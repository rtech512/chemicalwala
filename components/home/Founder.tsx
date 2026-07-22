"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Globe,
  GraduationCap,
  Mail,
  Target,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    value: "500+",
    label: "Study Notes",
    gradient: "from-blue-600 via-blue-700 to-indigo-950",
    glow: "shadow-blue-500/20",
  },
  {
    icon: Target,
    value: "5K+",
    label: "Practice MCQs",
    gradient: "from-violet-600 via-purple-700 to-fuchsia-950",
    glow: "shadow-violet-500/20",
  },
  {
    icon: Users,
    value: "100+",
    label: "Students",
    gradient: "from-emerald-600 via-teal-700 to-emerald-950",
    glow: "shadow-emerald-500/20",
  },
];

export default function Founder() {
  return (
    <section className="relative overflow-hidden bg-[#020817] px-5 py-12 text-white sm:px-6 lg:py-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-7 lg:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-[0.64fr_1.36fr] lg:gap-10 xl:grid-cols-[0.68fr_1.32fr]">
            {/* Founder image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-[300px] sm:max-w-[330px] xl:max-w-[360px]">
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.35, 0.55, 0.35],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/35 via-blue-500/20 to-violet-500/25 blur-3xl"
                />

                <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-cyan-300/25 bg-[#071426] shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
                  <Image
                    src="/images/founder.png"
                    alt="Rohit Kumar Yadav, Founder of ChemicalWala"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 360px"
                    className="object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020817]/65 via-transparent to-cyan-300/[0.06]" />

                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-[#020817]/70 px-4 py-3 backdrop-blur-xl">
                    <p className="text-sm font-black text-white">
                      Rohit Kumar Yadav
                    </p>
                    <p className="mt-1 text-xs font-semibold text-cyan-300">
                      Founder, ChemicalWala
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
              className="min-w-0 max-w-full"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-200 backdrop-blur-xl">
                <GraduationCap className="h-4 w-4" />
                Meet the Founder
              </div>

              <h2 className="max-w-full text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl lg:text-[36px] xl:text-[40px]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Rohit Kumar Yadav
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                ChemicalWala ka mission Chemical Engineering students ko
                high-quality Notes, MCQs, Previous Year Questions aur practical
                learning resources ek hi platform par provide karna hai.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                Chahe aap Semester Exams, GATE, PSU ya Placement ki preparation
                kar rahe ho, ChemicalWala aapki learning ko simple, structured
                aur effective banata hai.
              </p>

              {/* Buttons */}
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                <Link
                  href="/about"
                  className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-5 py-3.5 text-center text-sm font-black text-[#03101b] shadow-[0_15px_40px_rgba(34,211,238,0.28)] transition duration-300 hover:-translate-y-1"
                >
                  <GraduationCap size={18} />
                  About ChemicalWala
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/[0.08] px-5 py-3.5 text-sm font-black text-cyan-100 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-cyan-300/[0.16]"
                >
                  <Globe size={18} />
                  Website
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3.5 text-sm font-black text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.09]"
                >
                  <Mail size={18} />
                  Contact
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br ${stat.gradient} p-4 text-center shadow-xl ${stat.glow} transition duration-300`}
                    >
                      <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-white/10 blur-2xl" />

                      <div className="relative z-10">
                        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md">
                          <Icon size={20} />
                        </div>

                        <h3 className="text-2xl font-black text-white">
                          {stat.value}
                        </h3>

                        <p className="mt-1 text-xs font-semibold text-white/75">
                          {stat.label}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}