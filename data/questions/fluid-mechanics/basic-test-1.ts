import { Question } from "@/types/question";

export const basicTest1: Question[] = [
  {
    id: 1,
    question: "Reynolds Number is used to determine:",
    options: [
      "Type of fluid flow",
      "Pressure",
      "Density",
      "Temperature",
    ],
    answer: "Type of fluid flow",
    explanation:
      "Reynolds Number predicts whether the flow is laminar or turbulent.",
  },
  {
    id: 2,
    question: "SI unit of viscosity is:",
    options: [
      "Pa·s",
      "N",
      "J",
      "kg",
    ],
    answer: "Pa·s",
    explanation:
      "Dynamic viscosity is measured in Pascal-second (Pa·s).",
  },
];