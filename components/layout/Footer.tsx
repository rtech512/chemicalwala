import { Mail, Phone, MapPin } from "lucide-react";

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

          <ul className="space-y-3 text-slate-400">
            <li className="hover:text-cyan-400 cursor-pointer">Home</li>
            <li className="hover:text-cyan-400 cursor-pointer">Courses</li>
            <li className="hover:text-cyan-400 cursor-pointer">Notes</li>
            <li className="hover:text-cyan-400 cursor-pointer">MCQ</li>
            <li className="hover:text-cyan-400 cursor-pointer">PSU</li>
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