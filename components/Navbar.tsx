"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "#courses" },
    { name: "Notes", href: "#notes" },
    { name: "MCQ", href: "#mcq" },
    { name: "PSU", href: "#psu" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/20 bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-2xl font-extrabold text-white">
          Chemical<span className="text-cyan-300">Wala</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-semibold text-white transition hover:text-cyan-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden rounded-xl border border-cyan-300 px-5 py-2 font-bold text-cyan-300 transition hover:bg-cyan-300 hover:text-black md:block"
        >
          Contact Us
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-cyan-300 px-3 py-2 text-xl text-white md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cyan-400/20 bg-blue-950 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-semibold text-white hover:text-cyan-300"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-cyan-300 px-5 py-2 text-center font-bold text-cyan-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}