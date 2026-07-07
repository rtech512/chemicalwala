"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const loginWithEmail = async () => {
    try {
      setError("");
      setMessage("");
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch {
      setError("Email or password is incorrect");
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async () => {
    if (!email.trim()) {
      setError("Please enter your email first.");
      return;
    }

    try {
      setError("");
      setMessage("");

      await sendPasswordResetEmail(auth, email.trim());
      setMessage("Password reset link sent to your email.");
        } catch (err) {
      console.error("Password reset error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to send reset link."
      );
    }
  };

  const loginWithGoogle = async () => {
    try {
      setError("");
      setMessage("");
      setLoading(true);

      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch {
      setError("Google login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#071521] px-6 py-20 text-white">
      <div className="mx-auto max-w-md rounded-3xl border border-cyan-400/30 bg-white/5 p-8 shadow-2xl">
        <h1 className="mb-2 text-4xl font-black">Login</h1>

        <p className="mb-8 text-slate-300">
          Login to continue ChemicalWala.
        </p>

        <input
          type="email"
          placeholder="Email address"
          className="mb-4 w-full rounded-xl bg-white/10 px-4 py-3 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-3 w-full rounded-xl bg-white/10 px-4 py-3 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="button"
          onClick={resetPassword}
          className="mb-5 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          Forgot Password?
        </button>

        {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

        {message && <p className="mb-4 text-sm text-green-400">{message}</p>}

        <button
          onClick={loginWithEmail}
          disabled={loading}
          className="mb-4 w-full rounded-xl bg-cyan-400 py-3 font-bold text-black disabled:opacity-60"
        >
          {loading ? "Please wait..." : "Login"}
        </button>

        <button
          onClick={loginWithGoogle}
          disabled={loading}
          className="w-full rounded-xl border border-white/20 py-3 font-bold text-white disabled:opacity-60"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-slate-400">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-bold text-cyan-400">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}