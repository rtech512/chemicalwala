"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  FileText,
  Gauge,
  Sparkles,
} from "lucide-react";

const particles = [
  { left: "7%", top: "18%", size: 4, duration: 8, delay: 0 },
  { left: "18%", top: "72%", size: 3, duration: 10, delay: 1.1 },
  { left: "36%", top: "30%", size: 5, duration: 9, delay: 0.6 },
  { left: "58%", top: "78%", size: 4, duration: 11, delay: 1.8 },
  { left: "78%", top: "20%", size: 4, duration: 8.5, delay: 0.4 },
  { left: "92%", top: "64%", size: 4, duration: 10.5, delay: 1.3 },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020817] px-4 py-5 text-white sm:px-6 lg:px-8 lg:py-7">
      {/* Page background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_12%,rgba(186,230,253,0.16),transparent_26%),radial-gradient(circle_at_12%_72%,rgba(37,99,235,0.12),transparent_34%),linear-gradient(to_bottom,#020817_0%,#041426_54%,#020817_100%)]" />

      {/* Moving grid */}
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "120px 120px"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:60px_60px]"
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
              y: [0, -26, 0],
              x: [0, 6, 0],
              opacity: [0.1, 0.55, 0.1],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.75)]"
          />
        ))}
      </div>

      {/* Main glass hero */}
      <div className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] shadow-[0_30px_90px_rgba(0,0,0,0.46)]">
        {/* Background plant */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.svg
            viewBox="0 0 620 520"
            animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[-220px] top-1/2 h-[720px] w-[900px] -translate-y-1/2 opacity-30 sm:right-[-120px] sm:opacity-42 lg:right-[-20px] lg:opacity-68"
          >
            <defs>
              <linearGradient
                id="towerFillBalanced"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="rgba(34,211,238,0.34)" />
                <stop offset="55%" stopColor="rgba(15,23,42,0.72)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0.28)" />
              </linearGradient>

              <linearGradient
                id="pipeFillBalanced"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="rgba(34,211,238,0.62)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0.30)" />
              </linearGradient>

              <filter id="glowBalanced">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M25 470 H595"
              stroke="rgba(34,211,238,0.36)"
              strokeWidth="2"
            />

            <rect
              x="355"
              y="95"
              width="72"
              height="365"
              rx="24"
              fill="url(#towerFillBalanced)"
              stroke="rgba(103,232,249,0.72)"
              strokeWidth="2"
            />

            <rect
              x="372"
              y="52"
              width="38"
              height="52"
              rx="8"
              fill="rgba(34,211,238,0.12)"
              stroke="rgba(103,232,249,0.62)"
            />

            <path
              d="M380 52 L391 26 L402 52"
              fill="none"
              stroke="rgba(103,232,249,0.76)"
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
                  fill="rgba(34,211,238,0.20)"
                  stroke="rgba(103,232,249,0.50)"
                />

                <line
                  x1="348"
                  y1={y + 10}
                  x2="348"
                  y2={y + 29}
                  stroke="rgba(103,232,249,0.40)"
                />

                <line
                  x1="434"
                  y1={y + 10}
                  x2="434"
                  y2={y + 29}
                  stroke="rgba(103,232,249,0.40)"
                />
              </g>
            ))}

            <rect
              x="120"
              y="270"
              width="125"
              height="165"
              rx="48"
              fill="url(#towerFillBalanced)"
              stroke="rgba(103,232,249,0.60)"
              strokeWidth="2"
            />

            <rect
              x="155"
              y="238"
              width="55"
              height="40"
              rx="10"
              fill="rgba(34,211,238,0.12)"
              stroke="rgba(103,232,249,0.52)"
            />

            <line
              x1="182"
              y1="238"
              x2="182"
              y2="205"
              stroke="rgba(103,232,249,0.52)"
              strokeWidth="5"
            />

            <rect
              x="470"
              y="330"
              width="105"
              height="105"
              rx="28"
              fill="url(#towerFillBalanced)"
              stroke="rgba(96,165,250,0.55)"
              strokeWidth="2"
            />

            <path
              d="M245 315 H310 V175 H355"
              fill="none"
              stroke="url(#pipeFillBalanced)"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M427 295 H500 V330"
              fill="none"
              stroke="url(#pipeFillBalanced)"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M182 435 V465 H500 V435"
              fill="none"
              stroke="rgba(34,211,238,0.30)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g transform="translate(290 310)">
              <circle
                cx="0"
                cy="0"
                r="15"
                fill="#03101d"
                stroke="rgba(103,232,249,0.74)"
                strokeWidth="2"
              />
              <path
                d="M-8 -8 L8 8 M8 -8 L-8 8"
                stroke="rgba(103,232,249,0.74)"
                strokeWidth="2"
              />
            </g>

            <g transform="translate(480 295)">
              <circle
                cx="0"
                cy="0"
                r="14"
                fill="#03101d"
                stroke="rgba(96,165,250,0.74)"
                strokeWidth="2"
              />
              <path
                d="M-7 -7 L7 7 M7 -7 L-7 7"
                stroke="rgba(96,165,250,0.74)"
                strokeWidth="2"
              />
            </g>

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
              fill="rgba(34,211,238,0.15)"
            />

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
              filter="url(#glowBalanced)"
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
              filter="url(#glowBalanced)"
            />
          </motion.svg>

          {/* Balanced cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-[#020817]/48 to-[#020817]/5" />

          {/* Soft glass highlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(255,255,255,0.18),transparent_28%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[560px] items-center px-6 py-10 sm:px-10 lg:min-h-[590px] lg:px-14">
          <div className="max-w-[760px]">
            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="-mt-3 mb-7 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-[10px] font-black uppercase tracking-[0.17em] text-[#03101b] shadow-[0_14px_40px_rgba(34,211,238,0.35)] transition duration-300 hover:bg-cyan-300 hover:shadow-[0_18px_48px_rgba(34,211,238,0.48)] sm:text-xs"
            >
              <Sparkles className="h-4 w-4 text-[#03101b]" />
              India&apos;s Chemical Engineering Learning Platform
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72 }}
              className="text-balance text-5xl font-extrabold leading-[0.95] tracking-[-0.035em] text-white sm:text-6xl md:text-7xl lg:text-[5rem]"
            >
              Master Chemical

              <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 bg-clip-text font-black text-transparent">
                Engineering
              </span>
            </motion.h1>

            {/* Accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "15rem" }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 h-[3px] max-w-full bg-gradient-to-r from-cyan-300 via-sky-300 to-transparent"
            />

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Prepare with subject-wise notes, MCQ practice, PSU mock tests,
              previous-year questions and formula sheets—all in one focused
              learning platform.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/mock-test"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-7 py-4 font-black text-[#03101b] shadow-[0_18px_50px_rgba(34,211,238,0.34)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <BookOpen className="h-5 w-5" />

                Start Learning

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/notes"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-cyan-300/35 bg-gradient-to-r from-cyan-400/18 via-sky-400/12 to-blue-500/18 px-7 py-4 font-black text-cyan-50 shadow-[0_14px_35px_rgba(34,211,238,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-cyan-300/20"
              >
                <FileText className="h-5 w-5" />

                Free Notes

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Small stats */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/72">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.85)]" />
                100+ Students
              </span>

              <span className="inline-flex items-center gap-2">
                <Award className="h-4 w-4 text-cyan-200" />
                6× GATE Qualified
              </span>

              <span className="inline-flex items-center gap-2">
                <Gauge className="h-4 w-4 text-blue-300" />
                GATE & PSU Focused
              </span>
            </div>
          </div>
        </div>

        {/* Platform status */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-6 top-6 hidden rounded-2xl border border-cyan-300/30 bg-gradient-to-r from-cyan-400/20 via-sky-400/15 to-blue-500/20 px-5 py-4 shadow-[0_16px_40px_rgba(34,211,238,0.16)] backdrop-blur-xl md:block"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative h-3 w-3 rounded-full bg-emerald-400" />
            </span>

            <div>
              <p className="text-xs text-cyan-50/60">Platform Status</p>
              <p className="font-black text-white">Learning Online</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}