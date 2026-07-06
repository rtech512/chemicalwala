import { Question } from "@/types/question";

export const basicTest1: Question[] = [
    {
    id: 1,
    question: "Reynolds number is used to determine:",
    options: [
      "Type of fluid flow",
      "Fluid pressure",
      "Fluid density",
      "Fluid temperature",
    ],
    answer: "Type of fluid flow",
    explanation:
      "Reynolds number helps predict whether fluid flow is laminar, transitional, or turbulent.",
  },
  {
    id: 2,
    question: "The SI unit of dynamic viscosity is:",
    options: [
      "Pa·s",
      "N/m",
      "kg/m³",
      "m²/s",
    ],
    answer: "Pa·s",
    explanation:
      "The SI unit of dynamic viscosity is Pascal-second (Pa·s), equivalent to N·s/m².",
  },
  {
    id: 3,
    question: "Which instrument is commonly used to measure fluid pressure?",
    options: [
      "Manometer",
      "Venturimeter",
      "Rotameter",
      "Hydrometer",
    ],
    answer: "Manometer",
    explanation:
      "A manometer measures fluid pressure using the height difference of a liquid column.",
  },
  {
    id: 4,
    question: "The continuity equation is based on conservation of:",
    options: [
      "Mass",
      "Energy",
      "Momentum",
      "Temperature",
    ],
    answer: "Mass",
    explanation:
      "The continuity equation is derived from the principle of conservation of mass.",
  },
  {
    id: 5,
    question: "Bernoulli's equation is based primarily on conservation of:",
    options: [
      "Energy",
      "Mass",
      "Volume",
      "Density",
    ],
    answer: "Energy",
    explanation:
      "Bernoulli's equation represents conservation of mechanical energy along a streamline under ideal assumptions.",
  },
    {
    id: 6,
    question: "The density of water at approximately 4°C is:",
    options: [
      "1000 kg/m³",
      "100 kg/m³",
      "10 kg/m³",
      "10000 kg/m³",
    ],
    answer: "1000 kg/m³",
    explanation:
      "The density of pure water is approximately 1000 kg/m³ at 4°C.",
  },
  {
    id: 7,
    question: "Specific gravity is defined as the ratio of:",
    options: [
      "Fluid density to reference fluid density",
      "Mass to volume",
      "Pressure to density",
      "Viscosity to density",
    ],
    answer: "Fluid density to reference fluid density",
    explanation:
      "Specific gravity is the ratio of the density of a substance to the density of a reference substance, usually water for liquids.",
  },
  {
    id: 8,
    question: "Which type of flow has fluid particles moving in smooth layers?",
    options: [
      "Laminar flow",
      "Turbulent flow",
      "Rotational flow",
      "Unsteady flow",
    ],
    answer: "Laminar flow",
    explanation:
      "In laminar flow, fluid particles move smoothly in parallel layers with minimal mixing.",
  },
  {
    id: 9,
    question: "The SI unit of kinematic viscosity is:",
    options: [
      "m²/s",
      "Pa·s",
      "N·s",
      "kg/m³",
    ],
    answer: "m²/s",
    explanation:
      "Kinematic viscosity is dynamic viscosity divided by density, and its SI unit is m²/s.",
  },
  {
    id: 10,
    question: "A Venturimeter is primarily used to measure:",
    options: [
      "Flow rate",
      "Temperature",
      "Density",
      "Viscosity",
    ],
    answer: "Flow rate",
    explanation:
      "A Venturimeter measures fluid flow rate through a pipe using the pressure difference created by a change in cross-sectional area.",
  },
    {
    id: 11,
    question: "Pressure at a point in a static fluid acts:",
    options: [
      "Equally in all directions",
      "Only downward",
      "Only upward",
      "Only horizontally",
    ],
    answer: "Equally in all directions",
    explanation:
      "According to Pascal's law, pressure at a point in a static fluid acts equally in all directions.",
  },
  {
    id: 12,
    question: "The pressure exerted by a static liquid column depends on:",
    options: [
      "Density, gravity, and depth",
      "Viscosity only",
      "Pipe diameter only",
      "Flow velocity only",
    ],
    answer: "Density, gravity, and depth",
    explanation:
      "Hydrostatic pressure is given by p = ρgh, so it depends on fluid density, gravitational acceleration, and depth.",
  },
  {
    id: 13,
    question: "Which device measures the velocity of fluid flow at a point?",
    options: [
      "Pitot tube",
      "Manometer",
      "Hydrometer",
      "Piezometer",
    ],
    answer: "Pitot tube",
    explanation:
      "A Pitot tube determines local fluid velocity by comparing stagnation pressure with static pressure.",
  },
  {
    id: 14,
    question: "For an incompressible fluid, density is assumed to be:",
    options: [
      "Constant",
      "Zero",
      "Infinite",
      "Always decreasing",
    ],
    answer: "Constant",
    explanation:
      "An incompressible fluid is modeled as having constant density during the flow process.",
  },
  {
    id: 15,
    question: "The buoyant force on an immersed body is equal to:",
    options: [
      "Weight of displaced fluid",
      "Weight of the body",
      "Volume of the body",
      "Density of the body",
    ],
    answer: "Weight of displaced fluid",
    explanation:
      "According to Archimedes' principle, buoyant force equals the weight of the fluid displaced by the immersed body.",
  },
    {
    id: 16,
    question: "The ratio of inertial force to viscous force is called:",
    options: [
      "Reynolds number",
      "Froude number",
      "Mach number",
      "Weber number",
    ],
    answer: "Reynolds number",
    explanation:
      "Reynolds number represents the ratio of inertial forces to viscous forces in fluid flow.",
  },
  {
    id: 17,
    question: "A fluid with zero viscosity is called:",
    options: [
      "Ideal fluid",
      "Newtonian fluid",
      "Real fluid",
      "Compressible fluid",
    ],
    answer: "Ideal fluid",
    explanation:
      "An ideal fluid is a theoretical fluid assumed to have zero viscosity and no resistance to shear deformation.",
  },
  {
    id: 18,
    question: "Which property represents a fluid's resistance to flow?",
    options: [
      "Viscosity",
      "Density",
      "Specific gravity",
      "Surface tension",
    ],
    answer: "Viscosity",
    explanation:
      "Viscosity measures the internal resistance of a fluid to relative motion between adjacent layers.",
  },
  {
    id: 19,
    question: "In steady flow, fluid properties at a fixed point:",
    options: [
      "Do not change with time",
      "Always increase with time",
      "Always decrease with time",
      "Change randomly with time",
    ],
    answer: "Do not change with time",
    explanation:
      "In steady flow, properties such as velocity, pressure, and density at a fixed point remain constant with time.",
  },
  {
    id: 20,
    question: "The equation Q = A × V represents:",
    options: [
      "Volumetric flow rate",
      "Pressure force",
      "Dynamic viscosity",
      "Surface tension",
    ],
    answer: "Volumetric flow rate",
    explanation:
      "Volumetric flow rate equals the cross-sectional area multiplied by the average fluid velocity.",
  },
    {
    id: 21,
    question: "A Newtonian fluid is one for which shear stress is:",
    options: [
      "Directly proportional to velocity gradient",
      "Independent of velocity gradient",
      "Inversely proportional to density",
      "Equal to pressure",
    ],
    answer: "Directly proportional to velocity gradient",
    explanation:
      "For a Newtonian fluid, shear stress is directly proportional to the rate of shear strain or velocity gradient.",
  },
  {
    id: 22,
    question: "The pressure measured relative to atmospheric pressure is called:",
    options: [
      "Gauge pressure",
      "Absolute pressure",
      "Vacuum pressure",
      "Vapor pressure",
    ],
    answer: "Gauge pressure",
    explanation:
      "Gauge pressure is measured relative to local atmospheric pressure.",
  },
  {
    id: 23,
    question: "Which phenomenon causes a liquid surface to behave like a stretched membrane?",
    options: [
      "Surface tension",
      "Viscosity",
      "Compressibility",
      "Buoyancy",
    ],
    answer: "Surface tension",
    explanation:
      "Surface tension arises from cohesive molecular forces and makes a liquid surface behave like a stretched membrane.",
  },
  {
    id: 24,
    question: "Cavitation occurs when local fluid pressure falls below:",
    options: [
      "Vapor pressure",
      "Atmospheric pressure",
      "Stagnation pressure",
      "Gauge pressure",
    ],
    answer: "Vapor pressure",
    explanation:
      "Cavitation begins when local pressure falls below the liquid's vapor pressure, causing vapor bubbles to form.",
  },
  {
    id: 25,
    question: "For incompressible flow through a pipe, if area decreases, velocity generally:",
    options: [
      "Increases",
      "Decreases",
      "Becomes zero",
      "Remains unchanged",
    ],
    answer: "Increases",
    explanation:
      "From the continuity equation, A₁V₁ = A₂V₂, so a decrease in flow area causes velocity to increase.",
  },
];