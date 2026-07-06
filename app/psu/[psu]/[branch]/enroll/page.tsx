"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const psuNames: Record<string, string> = {
  hpcl: "HPCL",
  iocl: "IOCL",
  nfl: "NFL",
};

const branchNames: Record<string, string> = {
  chemical: "Chemical Engineering",
  mechanical: "Mechanical Engineering",
  electrical: "Electrical Engineering",
  civil: "Civil Engineering",
};

export default function PSUEnrollPage() {
  const router = useRouter();
  const params = useParams();

  const psu = String(params.psu);
  const branch = String(params.branch);

  const psuName = psuNames[psu] || psu.toUpperCase();
  const branchName = branchNames[branch] || branch;

  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(false);
  const [error, setError] = useState("");

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "PSU100") {
      setApplied(true);
      setError("");
    } else {
      setApplied(false);
      setError("Invalid coupon code");
    }
  };

  const handleEnroll = () => {
    if (!applied) {
      setError("Please apply coupon code first");
      return;
    }

    localStorage.setItem(
      `chemicalwala_${psu}_${branch}_enrolled`,
      "true"
    );

    router.push(`/psu/${psu}/${branch}`);
  };

  return (
    <main className="min-h-screen bg-[#071521] px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 font-semibold text-cyan-400"
          >
            🏠 Home
          </Link>

          <Link
            href="/psu"
            className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-2 font-semibold text-slate-200"
          >
            ← Back
          </Link>
        </div>

        <div className="rounded-3xl border border-cyan-400/30 bg-white/5 p-8 text-center shadow-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-cyan-300">
            {psuName} Test Series
          </p>

          <h1 className="text-3xl font-black md:text-5xl">
            Enroll in {branchName}
          </h1>

          <p className="mt-4 text-slate-300">
            Exam-focused mock tests with result and detailed solutions.
          </p>

          <div className="my-10">
            <p className="text-sm text-slate-400">
              Test Series Price
            </p>

            {applied ? (
              <div className="mt-3 flex items-center justify-center gap-4">
                <span className="text-3xl font-bold text-slate-400 line-through">
                  ₹999
                </span>

                <span className="text-5xl font-black text-green-400">
                  ₹0
                </span>
              </div>
            ) : (
              <p className="mt-3 text-5xl font-black text-white">
                ₹999
              </p>
            )}
          </div>

          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter coupon code"
              className="flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400"
            />

            <button
              onClick={applyCoupon}
              className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              Apply
            </button>
          </div>

          <p className="mt-4 text-sm text-cyan-300">
            Coupon Code:{" "}
            <span className="font-bold">
              PSU100
            </span>
          </p>

          {applied && (
            <p className="mt-6 font-semibold text-green-400">
              Coupon applied successfully
            </p>
          )}

          {error && (
            <p className="mt-6 text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            onClick={handleEnroll}
            className={`mt-8 rounded-full px-12 py-4 text-lg font-bold transition ${
              applied
                ? "bg-cyan-400 text-[#071521] hover:bg-cyan-300"
                : "cursor-not-allowed bg-slate-600 text-slate-300"
            }`}
          >
            Enroll
          </button>
        </div>
      </div>
    </main>
  );
}