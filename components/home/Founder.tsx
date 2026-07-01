import Image from "next/image";
import { Globe, Mail, GraduationCap } from "lucide-react";

export default function Founder() {
  return (
    <section className="bg-[#020817] py-24 px-6 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left */}
          <div className="flex justify-center">
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl"></div>

              <div className="relative h-96 w-96 overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900">
                <Image
                  src="/images/founder.png"
                  alt="Founder"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

            </div>
          </div>

          {/* Right */}
          <div>

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-400">
              FOUNDER
            </p>

           <h2 className="text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
  Hi, I'm{" "}
  <span className="whitespace-nowrap text-cyan-400">
    Rohit Kumar Yadav
  </span>
</h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              ChemicalWala ka mission Chemical Engineering students ko
              high-quality Notes, MCQs, Previous Year Questions aur
              practical learning resources ek hi platform par provide
              karna hai.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Chahe aap Semester Exams, GATE, PSU ya Placement ki
              preparation kar rahe ho, ChemicalWala aapki learning ko
              simple, practical aur effective banata hai.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-black transition hover:bg-cyan-300">
                <GraduationCap size={20} />
                About ChemicalWala
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-cyan-400/40 px-6 py-4 font-bold transition hover:bg-cyan-400/10">
                <Globe size={18} />
                Website
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-cyan-400/40 px-6 py-4 font-bold transition hover:bg-cyan-400/10">
                <Mail size={18} />
                Contact
              </button>

            </div>

            <div className="mt-12 grid grid-cols-3 gap-5">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <h3 className="text-3xl font-black text-cyan-400">
                  500+
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Study Notes
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <h3 className="text-3xl font-black text-cyan-400">
                  5K+
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  MCQs
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <h3 className="text-3xl font-black text-cyan-400">
                  10K+
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Students
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}