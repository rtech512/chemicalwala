"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MockTestEnrollPage() {
  const router = useRouter();

  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(false);
  const [error, setError] = useState("");

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "CHEMICAL100") {
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
      "chemicalwala_mocktest_enrolled",
      "true"
    );

    router.push("/mock-test");
  };

  return (
    <main className="min-h-screen bg-[#071521] px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-cyan-400/30 bg-white/5 p-8 text-center shadow-2xl">
        
        <p className="mb-3 text-sm font-semibold text-cyan-300">
          ChemicalWala Mock Test
        </p>

        <h1 className="mb-4 text-4xl font-bold">
          Enroll in Mock Test Series
        </h1>

        <p className="mb-8 text-gray-300">
          PSU level Chemical Engineering mock tests with result and solutions.
        </p>
        <div className="mb-8">
  <p className="text-sm text-gray-400">
    Mock Test Series Price
  </p>

  {applied ? (
    <div className="mt-2 flex items-center justify-center gap-4">
      <span className="text-3xl font-bold text-gray-400 line-through">
        ₹999
      </span>

      <span className="text-5xl font-extrabold text-green-400">
        ₹0
      </span>
    </div>
  ) : (
    <p className="mt-2 text-4xl font-extrabold text-white">
      ₹999
    </p>
  )}
</div>


        <div className="mx-auto mb-4 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter coupon code"
            className="flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-gray-400"
          />

          <button
            onClick={applyCoupon}
            className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
          >
            Apply
          </button>
        </div>

        <p className="mb-6 text-sm text-cyan-300">
          Coupon Code:{" "}
          <span className="font-bold">
            CHEMICAL100
          </span>
        </p>

        {applied && (
          <p className="mb-5 font-semibold text-green-400">
            Coupon applied successfully
          </p>
        )}

        {error && (
          <p className="mb-5 text-sm text-red-400">
            {error}
          </p>
        )}

        <button
          onClick={handleEnroll}
          className={`rounded-full px-10 py-4 text-lg font-bold transition ${
            applied
              ? "bg-cyan-400 text-[#071521] hover:bg-cyan-300"
              : "cursor-not-allowed bg-gray-600 text-gray-300"
          }`}
        >
          Enroll
        </button>
      </div>
    </main>
  );
}