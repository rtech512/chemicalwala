import {
  Calculator,
  Droplets,
  Flame,
  Wind,
  FlaskConical,
  Factory,
  Gauge,
  BarChart3,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const subjects = [
  { icon: Calculator, title: "Process Calculations", desc: "Basic calculations, units and material balance." },
  { icon: Wind, title: "Fluid Mechanics", desc: "Pumps, flow, pressure drop and piping basics." },
  { icon: Flame, title: "Heat Transfer", desc: "Conduction, convection, radiation and exchangers." },
  { icon: Droplets, title: "Mass Transfer", desc: "Distillation, absorption and separation concepts." },
  { icon: FlaskConical, title: "Reaction Engineering", desc: "Reactors, kinetics and conversion problems." },
  { icon: Factory, title: "Process Equipment", desc: "Industrial equipment and plant fundamentals." },
  { icon: Gauge, title: "Instrumentation", desc: "Sensors, control valves and process measurement." },
  { icon: BarChart3, title: "Process Control", desc: "Control loops, stability and controllers." },
  { icon: BookOpen, title: "Previous Year Questions", desc: "PYQs for quick revision and exam practice." },
];

export default function Subjects() {
  return (
    <section className="bg-[#020817] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold text-cyan-400">EXPLORE SUBJECTS</p>
          <h2 className="text-4xl font-black md:text-5xl">
            Learn Chemical Engineering Step-by-Step
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            Important subjects ko simple cards me organize kiya gaya hai, taki
            students easily notes, MCQs aur practice start kar saken.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subjects.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-cyan-400/15 p-4 text-cyan-300">
                  <Icon size={32} />
                </div>

                <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
                <p className="mb-6 min-h-[56px] leading-7 text-slate-400">{item.desc}</p>

                <button className="flex items-center gap-2 font-bold text-cyan-400">
                  Explore
                  <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}