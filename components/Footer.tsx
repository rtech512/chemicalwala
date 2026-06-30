export default function Footer() {
  return (
    <footer id="contact" className="border-t border-cyan-400/20 bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold">
            Chemical<span className="text-cyan-400">Wala</span>
          </h2>
          <p className="mt-3 text-slate-400">
            Empowering Chemical Engineering students with quality resources.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-cyan-400">Quick Links</h3>
          <p className="mt-3 text-slate-300">Home</p>
          <p className="text-slate-300">Courses</p>
          <p className="text-slate-300">Notes</p>
          <p className="text-slate-300">MCQ</p>
        </div>

        <div>
          <h3 className="font-bold text-cyan-400">Resources</h3>
          <p className="mt-3 text-slate-300">PDF Notes</p>
          <p className="text-slate-300">PSU Mock Test</p>
          <p className="text-slate-300">Subject Notes</p>
        </div>

        <div>
          <h3 className="font-bold text-cyan-400">Contact Us</h3>
          <p className="mt-3 text-slate-300">
            chemicalwalaofficial@gmail.com
          </p>
          <p className="text-slate-300">Founder: Rohit Kumar Yadav</p>
        </div>
      </div>

      <p className="mt-10 text-center text-slate-500">
        © 2025 ChemicalWala. All rights reserved.
      </p>
    </footer>
  );
}