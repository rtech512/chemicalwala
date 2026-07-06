"use client";

import { useEffect } from "react";
import {
  AlertTriangle,
  CheckCheck,
  CheckCircle2,
  ClipboardList,
  Flag,
  SkipForward,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

type SubmitDialogProps = {
  open: boolean;
  totalQuestions: number;
  answeredCount: number;
  reviewCount: number;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function SubmitDialog({
  open,
  totalQuestions,
  answeredCount,
  reviewCount,
  onCancel,
  onConfirm,
}: SubmitDialogProps) {
  const skippedCount = totalQuestions - answeredCount;

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCancel();
      if (event.key === "Enter") onConfirm();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onCancel, onConfirm]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="w-full max-w-[520px] overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900 text-white shadow-2xl shadow-cyan-500/10"
      >
        <div className="border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-500/15">
              <AlertTriangle className="h-7 w-7 text-yellow-400" />
            </div>

            <div>
              <h2 className="text-3xl font-extrabold">Submit Test?</h2>
              <p className="mt-1 text-slate-400">
                Review your progress before final submission.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800/60">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <ClipboardList className="h-5 w-5 text-cyan-400" />
                <span className="font-semibold">Total Questions</span>
              </div>
              <span className="font-bold">{totalQuestions}</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="font-semibold">Answered</span>
              </div>
              <span className="font-bold text-green-400">{answeredCount}</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <SkipForward className="h-5 w-5 text-orange-400" />
                <span className="font-semibold">Skipped</span>
              </div>
              <span className="font-bold text-orange-400">{skippedCount}</span>
            </div>

            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <Flag className="h-5 w-5 text-yellow-400" />
                <span className="font-semibold">Marked for Review</span>
              </div>
              <span className="font-bold text-yellow-400">{reviewCount}</span>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm font-semibold leading-6 text-yellow-200">
            Once submitted, you won&apos;t be able to change your answers.
          </div>

          <div className="mt-7 flex gap-4">
            <button
              onClick={onCancel}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-800 py-3 font-bold transition hover:bg-slate-700 active:scale-95"
            >
              <X className="h-5 w-5" />
              Cancel
            </button>

            <button
              onClick={onConfirm}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 py-3 font-bold text-slate-950 shadow-lg transition hover:scale-[1.02] hover:from-emerald-300 hover:to-green-400 active:scale-95"
            >
              <CheckCheck className="h-5 w-5" />
              Submit Test
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}