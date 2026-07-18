"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { auth, googleProvider } from "@/lib/firebase";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectPath = searchParams.get("redirect") || "/";

  const signupHref =
    redirectPath !== "/"
      ? `/signup?redirect=${encodeURIComponent(redirectPath)}`
      : "/signup";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const redirectAfterLogin = () => {
    router.replace(redirectPath);
    router.refresh();
  };

  const loginWithEmail = async () => {
    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setError("");
      setMessage("");
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      redirectAfterLogin();
    } catch (error) {
      console.error("Email login error:", error);
      setError("Email or password is incorrect.");
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

      setMessage(
        "Password reset link has been sent to your email."
      );
    } catch (error) {
      console.error("Password reset error:", error);

      setError(
        error instanceof Error
          ? error.message
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

      redirectAfterLogin();
    } catch (error) {
      console.error("Google login error:", error);
      setError("Google login failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && !loading) {
      loginWithEmail();
    }
  };

  return (
    <main className="min-h-screen bg-[#071521] px-6 py-20 text-white">
      <div className="mx-auto max-w-md rounded-3xl border border-cyan-400/30 bg-white/5 p-8 shadow-2xl">
        <h1 className="mb-2 text-4xl font-black">
          Login
        </h1>

        <p className="mb-8 text-slate-300">
          Login to continue ChemicalWala.
        </p>

        <label
          htmlFor="login-email"
          className="mb-2 block text-sm font-semibold text-slate-300"
        >
          Email address
        </label>

        <input
          id="login-email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          className="mb-4 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none transition focus:border-cyan-400"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onKeyDown={handleKeyDown}
        />

        <label
          htmlFor="login-password"
          className="mb-2 block text-sm font-semibold text-slate-300"
        >
          Password
        </label>

        <input
          id="login-password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          className="mb-3 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none transition focus:border-cyan-400"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
          onKeyDown={handleKeyDown}
        />

        <button
          type="button"
          onClick={resetPassword}
          disabled={loading}
          className="mb-5 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Forgot Password?
        </button>

        {error && (
          <div className="mb-4 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        {message && (
          <div className="mb-4 rounded-xl border border-green-400/30 bg-green-400/10 px-4 py-3 text-sm text-green-300">
            {message}
          </div>
        )}

        <button
          type="button"
          onClick={loginWithEmail}
          disabled={loading}
          className="mb-4 w-full rounded-xl bg-cyan-400 py-3 font-bold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Please wait..." : "Login"}
        </button>

        <button
          type="button"
          onClick={loginWithGoogle}
          disabled={loading}
          className="w-full rounded-xl border border-white/20 py-3 font-bold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-slate-400">
          Don&apos;t have an account?{" "}
          <Link
            href={signupHref}
            className="font-bold text-cyan-400 transition hover:text-cyan-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}

function LoginLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#071521]">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginLoading />}>
      <LoginContent />
    </Suspense>
  );
}