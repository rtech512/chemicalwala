"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  FileText,
  FlaskConical,
  Gauge,
  Sparkles,
  Trophy,
} from "lucide-react";

const particles = [
  { left: "4%", top: "20%", size: 5, duration: 8, delay: 0 },
  { left: "10%", top: "65%", size: 4, duration: 10, delay: 1.1 },
  { left: "18%", top: "34%", size: 7, duration: 9, delay: 0.6 },
  { left: "27%", top: "75%", size: 5, duration: 11, delay: 1.8 },
  { left: "35%", top: "15%", size: 4, duration: 8.5, delay: 0.4 },
  { left: "46%", top: "80%", size: 6, duration: 10.5, delay: 1.3 },
  { left: "58%", top: "24%", size: 5, duration: 9.5, delay: 0.8 },
  { left: "69%", top: "72%", size: 7, duration: 11.5, delay: 2 },
  { left: "78%", top: "18%", size: 4, duration: 8.8, delay: 1.2 },
  { left: "86%", top: "62%", size: 6, duration: 10.8, delay: 0.5 },
  { left: "93%", top: "29%", size: 5, duration: 9.8, delay: 1.5 },
];

const moleculeNodes = [
  { cx: 34, cy: 42, r: 8 },
  { cx: 75, cy: 22, r: 5 },
  { cx: 93, cy: 64, r: 7 },
  { cx: 52, cy: 92, r: 5 },
];

const stats = [
  {
    icon: BookOpen,
    number: "500+",
    title: "Study Notes",
    description: "Exam-focused resources",
  },
  {
    icon: FileText,
    number: "5,000+",
    title: "Practice MCQs",
    description: "Detailed explanations",
  },
  {
    icon: Trophy,
    number: "100+",
    title: "Mock Tests",
    description: "GATE and PSU pattern",
  },
  {
    icon: Award,
    number: "6×",
    title: "GATE Qualified",
    description: "Built from experience",
  },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);
  return (
    <section 
    suppressHydrationWarning
    className="relative isolate overflow-hidden bg-[#020817] text-white">
      {/* Base background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(14,165,233,0.12),transparent_32%),radial-gradient(circle_at_15%_70%,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_85%_65%,rgba(6,182,212,0.12),transparent_30%),linear-gradient(to_bottom,#020817_0%,#03101d_52%,#020817_100%)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.045)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

      {/* Moving scan line */}
      {mounted && (
      <motion.div
        animate={{ y: ["-10%", "110%"] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-cyan-300/[0.035] to-transparent"
      />
      )}

      {/* Large ambient glows */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.16, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 top-20 h-[430px] w-[430px] rounded-full bg-cyan-500/10 blur-[125px]"
      />

      <motion.div
        animate={{
          x: [0, -90, 0],
          y: [0, 55, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-36 bottom-10 h-[480px] w-[480px] rounded-full bg-blue-600/10 blur-[145px]"
      />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -34, 0],
              x: [0, 8, 0],
              opacity: [0.18, 0.85, 0.18],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]"
          />
        ))}
      </div>

      {/* Animated pipeline across hero */}
      <div className="pointer-events-none absolute left-0 right-0 top-[73%] hidden h-20 lg:block">
        <div className="absolute left-0 right-0 top-9 h-[3px] bg-cyan-400/10" />

        <motion.div
          animate={{ x: ["-10vw", "110vw"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[31px] h-4 w-28 rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent blur-[1px]"
        />

        {[18, 38, 58, 78].map((position) => (
          <div
            key={position}
            style={{ left: `${position}%` }}
            className="absolute top-[25px] h-8 w-8 -translate-x-1/2 rounded-lg border border-cyan-400/20 bg-[#041427]/90"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="m-auto mt-[7px] h-4 w-4 rounded-full border border-cyan-300/50"
            />
          </div>
        ))}
      </div>

      {/* Main hero */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-5 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:min-h-[calc(100vh-73px)] lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72 }}
          className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-400/[0.08] px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.13em] text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.08)] backdrop-blur-xl sm:px-5 sm:text-xs"
          >
            <Sparkles className="h-4 w-4 shrink-0" />
            India&apos;s Chemical Engineering Learning Platform
          </motion.div>

          <h1 className="text-balance text-5xl font-black leading-[0.96] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.35rem]">
            Master Chemical
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Engineering
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0 lg:text-xl">
            Prepare with subject-wise notes, MCQ practice, PSU mock tests,
            previous-year questions and formula sheets—all in one focused
            learning platform.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/mock-test"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-4 font-black text-[#03101b] shadow-xl shadow-cyan-950/30 transition duration-300 hover:-translate-y-1 hover:from-cyan-300 hover:to-blue-500"
            >
              <BookOpen className="h-5 w-5" />
              Start Learning
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/notes"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-cyan-400/40 bg-white/[0.055] px-7 py-4 font-black text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-white/[0.1]"
            >
              <FileText className="h-5 w-5 text-cyan-300" />
              Free Notes
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-300 lg:justify-start">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.85)]" />
              100+ Students
            </span>

            <span className="inline-flex items-center gap-2">
              <Award className="h-4 w-4 text-cyan-300" />
              6× GATE Qualified
            </span>

            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.85)]" />
              GATE & PSU Focused
            </span>
          </div>
        </motion.div>

        {/* Code-generated industrial visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.08 }}
          className="relative mx-auto hidden min-h-[580px] w-full max-w-[650px] lg:block"
        >
          {/* Background glass panel */}
          <div className="absolute inset-4 rounded-[2.6rem] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.035] via-[#03101d]/60 to-blue-500/[0.035] backdrop-blur-sm" />

          {/* Molecular structure */}
          <motion.svg
            viewBox="0 0 120 120"
            animate={{ rotate: 360 }}
            transition={{
              duration: 34,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-10 top-14 h-52 w-52 opacity-65"
          >
            <line
              x1="34"
              y1="42"
              x2="75"
              y2="22"
              stroke="rgba(34,211,238,0.38)"
              strokeWidth="1"
            />
            <line
              x1="75"
              y1="22"
              x2="93"
              y2="64"
              stroke="rgba(34,211,238,0.38)"
              strokeWidth="1"
            />
            <line
              x1="93"
              y1="64"
              x2="52"
              y2="92"
              stroke="rgba(34,211,238,0.38)"
              strokeWidth="1"
            />
            <line
              x1="52"
              y1="92"
              x2="34"
              y2="42"
              stroke="rgba(34,211,238,0.38)"
              strokeWidth="1"
            />
            <line
              x1="34"
              y1="42"
              x2="93"
              y2="64"
              stroke="rgba(59,130,246,0.28)"
              strokeWidth="1"
            />

            {moleculeNodes.map((node, index) => (
              <circle
                key={index}
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                fill={
                  index % 2 === 0
                    ? "rgba(34,211,238,0.28)"
                    : "rgba(96,165,250,0.28)"
                }
                stroke="rgba(103,232,249,0.65)"
                strokeWidth="1"
              />
            ))}
          </motion.svg>

          {/* Industrial plant SVG */}
          <motion.svg
            viewBox="0 0 620 520"
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-4 right-1 h-[510px] w-[610px]"
          >
            <defs>
              <linearGradient id="towerFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(34,211,238,0.24)" />
                <stop offset="55%" stopColor="rgba(15,23,42,0.76)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0.19)" />
              </linearGradient>

              <linearGradient id="pipeFill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(34,211,238,0.45)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0.18)" />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Ground */}
            <path
              d="M25 470 H595"
              stroke="rgba(34,211,238,0.32)"
              strokeWidth="2"
            />

            {/* Main distillation tower */}
            <rect
              x="355"
              y="95"
              width="72"
              height="365"
              rx="24"
              fill="url(#towerFill)"
              stroke="rgba(103,232,249,0.55)"
              strokeWidth="2"
            />

            <rect
              x="372"
              y="52"
              width="38"
              height="52"
              rx="8"
              fill="rgba(34,211,238,0.1)"
              stroke="rgba(103,232,249,0.5)"
            />

            <path
              d="M380 52 L391 26 L402 52"
              fill="none"
              stroke="rgba(103,232,249,0.65)"
              strokeWidth="2"
            />

            {[145, 205, 265, 325, 385].map((y) => (
              <g key={y}>
                <rect
                  x="342"
                  y={y}
                  width="98"
                  height="10"
                  rx="5"
                  fill="rgba(34,211,238,0.16)"
                  stroke="rgba(103,232,249,0.42)"
                />
                <line
                  x1="348"
                  y1={y + 10}
                  x2="348"
                  y2={y + 29}
                  stroke="rgba(103,232,249,0.35)"
                />
                <line
                  x1="434"
                  y1={y + 10}
                  x2="434"
                  y2={y + 29}
                  stroke="rgba(103,232,249,0.35)"
                />
              </g>
            ))}

            {/* Reactor vessel */}
            <rect
              x="120"
              y="270"
              width="125"
              height="165"
              rx="48"
              fill="url(#towerFill)"
              stroke="rgba(103,232,249,0.48)"
              strokeWidth="2"
            />

            <rect
              x="155"
              y="238"
              width="55"
              height="40"
              rx="10"
              fill="rgba(34,211,238,0.1)"
              stroke="rgba(103,232,249,0.45)"
            />

            <line
              x1="182"
              y1="238"
              x2="182"
              y2="205"
              stroke="rgba(103,232,249,0.45)"
              strokeWidth="5"
            />

            {/* Secondary tank */}
            <rect
              x="470"
              y="330"
              width="105"
              height="105"
              rx="28"
              fill="url(#towerFill)"
              stroke="rgba(96,165,250,0.45)"
              strokeWidth="2"
            />

            {/* Pipe network */}
            <path
              d="M245 315 H310 V175 H355"
              fill="none"
              stroke="url(#pipeFill)"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M427 295 H500 V330"
              fill="none"
              stroke="url(#pipeFill)"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M182 435 V465 H500 V435"
              fill="none"
              stroke="rgba(34,211,238,0.24)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Valves */}
            <g transform="translate(290 310)">
              <circle
                cx="0"
                cy="0"
                r="15"
                fill="#03101d"
                stroke="rgba(103,232,249,0.65)"
                strokeWidth="2"
              />
              <path
                d="M-8 -8 L8 8 M8 -8 L-8 8"
                stroke="rgba(103,232,249,0.65)"
                strokeWidth="2"
              />
            </g>

            <g transform="translate(480 295)">
              <circle
                cx="0"
                cy="0"
                r="14"
                fill="#03101d"
                stroke="rgba(96,165,250,0.65)"
                strokeWidth="2"
              />
              <path
                d="M-7 -7 L7 7 M7 -7 L-7 7"
                stroke="rgba(96,165,250,0.65)"
                strokeWidth="2"
              />
            </g>

            {/* Liquid levels */}
            <motion.rect
              animate={{
                height: [55, 100, 55],
                y: [365, 320, 365],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              x="131"
              y="365"
              width="103"
              height="55"
              rx="24"
              fill="rgba(34,211,238,0.11)"
            />

            {/* Flow indicators */}
            <motion.circle
              animate={{ cx: [250, 350] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "linear",
              }}
              cx="250"
              cy="315"
              r="5"
              fill="rgb(103,232,249)"
              filter="url(#glow)"
            />

            <motion.circle
              animate={{ cx: [435, 492] }}
              transition={{
                duration: 2.3,
                repeat: Infinity,
                ease: "linear",
              }}
              cx="435"
              cy="295"
              r="5"
              fill="rgb(96,165,250)"
              filter="url(#glow)"
            />
          </motion.svg>

          {/* Steam */}
          {[0, 1, 2].map((item) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                scale: 0.7,
                x: item * 16,
              }}
              animate={{
                opacity: [0, 0.35, 0],
                y: [0, -90],
                x: [item * 16, item * 16 + 20],
                scale: [0.7, 1.5],
              }}
              transition={{
                duration: 4.5,
                delay: item * 1.3,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute right-[31%] top-[5%] h-16 w-16 rounded-full bg-cyan-100/10 blur-xl"
            />
          ))}

          {/* Process status card */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-7 top-24 rounded-2xl border border-cyan-400/20 bg-[#041326]/80 px-5 py-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-3 w-3 rounded-full bg-emerald-400" />
              </span>

              <div>
                <p className="text-xs font-semibold text-slate-400">
                  Platform Status
                </p>
                <p className="mt-0.5 font-black text-white">Learning Online</p>
              </div>
            </div>
          </motion.div>

          {/* Process parameter card */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-28 left-6 rounded-2xl border border-blue-400/20 bg-[#041326]/80 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-500/10 p-2.5">
                <Gauge className="h-5 w-5 text-blue-300" />
              </div>

              <div>
                <p className="text-xs text-slate-400">Preparation Mode</p>
                <p className="font-black text-white">GATE + PSU</p>
              </div>
            </div>
          </motion.div>

          {/* Flask card */}
          <motion.div
            animate={{
              rotate: [-2, 2, -2],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[34%] top-12 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.055] p-3 text-cyan-300 backdrop-blur-xl"
          >
            <FlaskConical className="h-7 w-7" />
          </motion.div>

          {/* Left edge fade */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020817] via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Stats */}
      <div className="relative z-20 mx-auto mt-10 max-w-7xl px-5 pb-16 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#030b1a]/80 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Stat
              key={stat.title}
              icon={<stat.icon className="h-6 w-6" />}
              number={stat.number}
              title={stat.title}
              description={stat.description}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020817] to-transparent" />
    </section>
  );
}

function Stat({
  icon,
  number,
  title,
  description,
  index,
}: {
  icon: ReactNode;
  number: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: index * 0.07 }}
      className={`group flex items-center gap-4 p-5 transition duration-300 hover:bg-cyan-400/[0.04] sm:p-6 ${
        index < 3
          ? "border-b border-cyan-400/15 sm:border-r lg:border-b-0"
          : ""
      }`}
    >
      <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-3.5 text-cyan-300 transition duration-300 group-hover:scale-105 group-hover:bg-cyan-400/15">
        {icon}
      </div>

      <div>
        <h3 className="text-3xl font-black text-cyan-300 sm:text-4xl">
          {number}
        </h3>
        <p className="mt-1 font-black text-white">{title}</p>
        <p className="mt-1 text-xs text-slate-400">{description}</p>
      </div>
    </motion.div>
  );
}