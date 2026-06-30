import Image from "next/image";

export default function Founder() {
  return (
    <section className="bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="text-lg font-semibold uppercase tracking-[5px] text-cyan-400">
            Meet the Founder
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
            Rohit Kumar Yadav
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-cyan-400"></div>
        </div>

        <div className="grid items-center gap-12 rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-lg md:grid-cols-2">

          {/* Founder Image */}
          <div className="flex justify-center">
            <div className="rounded-full border-4 border-cyan-400 p-2 shadow-2xl shadow-cyan-500/30">
              <Image
                src="/founder.jpg"
                alt="Founder Rohit Kumar Yadav"
                width={300}
                height={300}
                priority
                className="h-72 w-72 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Founder Content */}
          <div>
            <h3 className="text-3xl font-bold text-white">
              Hi, I'm{" "}
              <span className="text-cyan-400">
                Rohit Kumar Yadav
              </span>
            </h3>

            <p className="mt-6 leading-8 text-slate-300">
              I created <span className="font-semibold text-cyan-400">ChemicalWala</span>
              {" "}to help Chemical Engineering students prepare smarter for
              GATE, PSU exams, university subjects and interviews.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Our mission is to provide high-quality notes, MCQ practice,
              mock tests and completely free learning resources in one place.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-slate-800 p-5 text-center">
                <h4 className="text-3xl font-bold text-cyan-400">
                  500+
                </h4>
                <p className="mt-2 text-slate-300">
                  Study Notes
                </p>
              </div>

              <div className="rounded-xl bg-slate-800 p-5 text-center">
                <h4 className="text-3xl font-bold text-cyan-400">
                  5000+
                </h4>
                <p className="mt-2 text-slate-300">
                  MCQs
                </p>
              </div>

              <div className="rounded-xl bg-slate-800 p-5 text-center">
                <h4 className="text-3xl font-bold text-cyan-400">
                  Free
                </h4>
                <p className="mt-2 text-slate-300">
                  PDF Notes
                </p>
              </div>

              <div className="rounded-xl bg-slate-800 p-5 text-center">
                <h4 className="text-3xl font-bold text-cyan-400">
                  24×7
                </h4>
                <p className="mt-2 text-slate-300">
                  Learning
                </p>
              </div>

            </div>

            <button className="mt-10 rounded-xl bg-cyan-400 px-8 py-3 text-lg font-bold text-black transition hover:bg-cyan-300">
              Explore ChemicalWala
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}