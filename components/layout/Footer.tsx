import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020817] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-black">
            Chemical<span className="text-cyan-400">Wala</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            India's trusted Chemical Engineering learning platform for Notes,
            MCQs, Previous Year Questions, GATE and PSU preparation.
          </p>
        </div>

       {/* Quick Links */}
<div>
  <h3 className="mb-5 text-xl font-bold">Quick Links</h3>

  <ul className="space-y-4">
    <li>
      <Link
        href="/"
        className="text-slate-400 transition hover:pl-1 hover:text-cyan-400"
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        href="/coming-soon"
        className="flex w-fit items-center gap-2 text-slate-400 transition hover:pl-1 hover:text-cyan-400"
      >
        <span>Process Engineering</span>

        <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-300">
          Coming Soon
        </span>
      </Link>
    </li>

    <li>
      <Link
        href="/notes"
        className="flex w-fit items-center gap-2 text-slate-400 transition hover:pl-1 hover:text-cyan-400"
      >
        <span>GATE Notes</span>

        <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-300">
          Coming Soon
        </span>
      </Link>
    </li>

    <li>
      <Link
        href="/mcq"
        className="text-slate-400 transition hover:pl-1 hover:text-cyan-400"
      >
        MCQ
      </Link>
    </li>

    <li>
      <Link
        href="/mock-test/enroll"
        className="text-slate-400 transition hover:pl-1 hover:text-cyan-400"
      >
        Mock Test
      </Link>
    </li>

    <li>
      <Link
        href="/psu"
        className="text-slate-400 transition hover:pl-1 hover:text-cyan-400"
      >
        PSU
      </Link>
    </li>
  </ul>
</div>

        {/* Resources */}
        <div>
          <h3 className="mb-5 text-xl font-bold">Resources</h3>

          <ul className="space-y-3 text-slate-400">
            <li>GATE Preparation</li>
            <li>Semester Notes</li>
            <li>Mock Tests</li>
            <li>Formula Sheets</li>
            <li>Previous Year Questions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-xl font-bold">Contact</h3>

          <div className="space-y-4 text-slate-400">
            <p className="flex items-center gap-3">
              <Mail size={18} className="text-cyan-400" />
              info@chemicalwala.com
            </p>

            <p className="flex items-center gap-3">
              <Phone size={18} className="text-cyan-400" />
              +91 XXXXX XXXXX
            </p>

            <p className="flex items-center gap-3">
              <MapPin size={18} className="text-cyan-400" />
              India
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-slate-500">
        © 2026 <span className="font-semibold text-cyan-400">ChemicalWala</span>.
        All Rights Reserved.
      </div>
    </footer>
  );
}