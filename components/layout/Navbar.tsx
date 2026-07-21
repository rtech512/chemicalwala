"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  type User,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

const links = [
  { name: "Home", href: "/", protected: false },
  {
  name: "Process Engineering",
  href: "/coming-soon",
  protected: false,
},
  {
    name: "GATE Notes",
    href: "/notes",
    protected: true,
  },
  {
    name: "MCQ",
    href: "/mcq",
    protected: true,
  },
  {
    name: "Mock Test",
    href: "/mock-test/enroll",
    protected: true,
  },
  {
    name: "PSU",
    href: "/psu",
    protected: true,
  },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleProtectedNavigation = (
    href: string,
    isProtected: boolean
  ) => {
    setOpen(false);

    if (authLoading) {
      return;
    }

    if (isProtected && !user) {
      router.push(
        `/login?redirect=${encodeURIComponent(href)}`
      );
      return;
    }

    router.push(href);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setOpen(false);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020817]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-2xl font-extrabold text-white"
        >
          Chemical<span className="text-cyan-400">Wala</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <button
                key={link.name}
                type="button"
                onClick={() =>
                  handleProtectedNavigation(
                    link.href,
                    link.protected
                  )
                }
                disabled={authLoading}
                className={`font-semibold transition ${
                  active
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                } disabled:cursor-wait disabled:opacity-70`}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {!authLoading &&
            (user ? (
              <>
                <span className="max-w-44 truncate font-semibold text-slate-300">
                  Hi, {user.displayName || user.email || "User"}
                </span>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-xl border border-red-400 px-4 py-2 font-bold text-red-300 transition hover:bg-red-400 hover:text-black"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-xl border border-cyan-400 px-4 py-2 font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="rounded-xl bg-cyan-400 px-4 py-2 font-bold text-[#071521] transition hover:bg-cyan-300"
                >
                  Sign Up
                </Link>
              </>
            ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="rounded-lg border border-cyan-400 p-2 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="max-h-[calc(100vh-73px)] overflow-y-auto border-t border-white/10 bg-[#020817] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() =>
                    handleProtectedNavigation(
                      link.href,
                      link.protected
                    )
                  }
                  disabled={authLoading}
                  className={`text-left font-semibold transition ${
                    active
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-cyan-400"
                  } disabled:cursor-wait disabled:opacity-70`}
                >
                  {link.name}
                </button>
              );
            })}

            {!authLoading &&
              (user ? (
                <div className="mt-2 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                    <p className="text-sm text-slate-400">
                      Logged in as
                    </p>

                    <p className="mt-1 break-all font-bold text-white">
                      {user.displayName ||
                        user.email ||
                        "User"}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full rounded-xl border border-red-400 px-4 py-3 text-center font-bold text-red-300 transition hover:bg-red-400 hover:text-black"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-cyan-400 px-4 py-3 text-center font-bold text-cyan-300"
                  >
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    onClick={() => setOpen(false)}
                    className="rounded-xl bg-cyan-400 px-4 py-3 text-center font-bold text-[#071521]"
                  >
                    Sign Up
                  </Link>
                </div>
              ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-white/20 px-5 py-3 text-center font-bold text-slate-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}