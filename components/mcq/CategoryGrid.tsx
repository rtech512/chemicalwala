import {
  Calculator,
  Wind,
  Flame,
  Droplets,
  FlaskConical,
  Factory,
} from "lucide-react";

import CategoryCard from "./CategoryCard";

const categories = [
  {
    icon: Calculator,
    title: "Process Calculations",
    questions: "250+ MCQs",
    desc: "Units, material balance and process calculation practice.",
  },
  {
    icon: Wind,
    title: "Fluid Mechanics",
    questions: "300+ MCQs",
    desc: "Flow, pressure drop, pumps and piping-based questions.",
  },
  {
    icon: Flame,
    title: "Heat Transfer",
    questions: "280+ MCQs",
    desc: "Conduction, convection, radiation and heat exchanger MCQs.",
  },
  {
    icon: Droplets,
    title: "Mass Transfer",
    questions: "260+ MCQs",
    desc: "Distillation, absorption and separation process practice.",
  },
  {
    icon: FlaskConical,
    title: "Reaction Engineering",
    questions: "240+ MCQs",
    desc: "Kinetics, reactors, conversion and design equation MCQs.",
  },
  {
    icon: Factory,
    title: "Process Equipment",
    questions: "200+ MCQs",
    desc: "Industrial equipment and plant operation-based questions.",
  },
];

export default function CategoryGrid() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((item) => (
        <CategoryCard key={item.title} {...item} />
      ))}
    </div>
  );
}