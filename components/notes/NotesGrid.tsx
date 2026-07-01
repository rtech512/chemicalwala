import {
  BookOpen,
  FlaskConical,
  Flame,
  Droplets,
  Wind,
  Calculator,
} from "lucide-react";

import NotesCard from "./NotesCard";

const notes = [
  {
    icon: Calculator,
    title: "Process Calculations",
    semester: "Semester 3",
    files: "12 Notes",
    desc: "Units, material balance and basic process calculations.",
  },
  {
    icon: Wind,
    title: "Fluid Mechanics",
    semester: "Semester 4",
    files: "15 Notes",
    desc: "Flow, pressure drop, pumps and piping fundamentals.",
  },
  {
    icon: Flame,
    title: "Heat Transfer",
    semester: "Semester 5",
    files: "18 Notes",
    desc: "Conduction, convection, radiation and heat exchangers.",
  },
  {
    icon: Droplets,
    title: "Mass Transfer",
    semester: "Semester 5",
    files: "16 Notes",
    desc: "Distillation, absorption, extraction and separation processes.",
  },
  {
    icon: FlaskConical,
    title: "Reaction Engineering",
    semester: "Semester 6",
    files: "14 Notes",
    desc: "Kinetics, reactors, conversion and design equations.",
  },
  {
    icon: BookOpen,
    title: "Formula Sheets",
    semester: "Quick Revision",
    files: "20 PDFs",
    desc: "Important formulas for semester, GATE and PSU preparation.",
  },
];

export default function NotesGrid() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((item) => (
        <NotesCard key={item.title} {...item} />
      ))}
    </div>
  );
}