"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginWithEmail = async () => {
    try {
      setError("");
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch {
      setError("Email or password is incorrect");
    }
  };

  const loginWithGoogle = async () => {
    try {
      setError("");
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch {
      setError("Google login failed");
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
          className="mb-5 w-full rounded-xl bg-white/10 px-4 py-3 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="mb-4 text-sm text-red-400">{error}</p>
        )}

        <button
          onClick={loginWithEmail}
          className="mb-4 w-full rounded-xl bg-cyan-400 py-3 font-bold text-black"
        >
          Login
        </button>

        <button
          onClick={loginWithGoogle}
          className="w-full rounded-xl border border-white/20 py-3 font-bold text-white"
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}