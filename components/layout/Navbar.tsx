"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Notes", href: "/notes" },
  { name: "MCQ", href: "/mcq" },
 { name: "Mock Test", href: "/mock-test/enroll" },
  { name: "PSU", href: "/psu" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020817]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-2xl font-extrabold text-white">
          Chemical<span className="text-cyan-400">Wala</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold transition ${
                  active ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-xl border border-cyan-400 px-5 py-2 font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-black md:block"
        >
          Contact Us
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-cyan-400 p-2 text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#020817] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-semibold text-slate-300 hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-cyan-400 px-5 py-3 text-center font-bold text-cyan-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}