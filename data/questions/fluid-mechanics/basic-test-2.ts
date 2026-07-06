import { Question } from "@/types/question";

export const basicTest2: Question[] = [
      {
    id: 1,
    question: "The dimensional formula of dynamic viscosity is:",
    options: [
      "ML⁻¹T⁻¹",
      "MLT⁻¹",
      "ML⁻²T⁻¹",
      "M⁻¹LT⁻¹",
    ],
    answer: "ML⁻¹T⁻¹",
    explanation:
      "Dynamic viscosity has dimensions of shear stress divided by velocity gradient, giving ML⁻¹T⁻¹.",
  },
  {
    id: 2,
    question: "The reciprocal of bulk modulus of elasticity is called:",
    options: [
      "Compressibility",
      "Viscosity",
      "Specific gravity",
      "Surface tension",
    ],
    answer: "Compressibility",
    explanation:
      "Compressibility is defined as the reciprocal of the bulk modulus of elasticity.",
  },
  {
    id: 3,
    question: "A fluid is a substance that:",
    options: [
      "Deforms continuously under shear stress",
      "Resists all shear deformation",
      "Has a fixed shape",
      "Cannot transmit pressure",
    ],
    answer: "Deforms continuously under shear stress",
    explanation:
      "A fluid continuously deforms when subjected to any finite shear stress.",
  },
  {
    id: 4,
    question: "The SI unit of surface tension is:",
    options: [
      "N/m",
      "N/m²",
      "Pa·s",
      "kg/m³",
    ],
    answer: "N/m",
    explanation:
      "Surface tension is force per unit length, so its SI unit is newton per metre (N/m).",
  },
  {
    id: 5,
    question: "Capillary rise is primarily caused by:",
    options: [
      "Surface tension",
      "Fluid inertia",
      "Compressibility",
      "Turbulence",
    ],
    answer: "Surface tension",
    explanation:
      "Capillary action occurs because of surface tension together with adhesive and cohesive molecular forces.",
  },
    {
    id: 6,
    question: "The pressure intensity at a depth h in a liquid of density ρ is:",
    options: [
      "ρgh",
      "ρg/h",
      "gh/ρ",
      "ρh/g",
    ],
    answer: "ρgh",
    explanation:
      "Hydrostatic pressure at depth h is given by p = ρgh.",
  },
  {
    id: 7,
    question: "Atmospheric pressure is commonly measured using a:",
    options: [
      "Barometer",
      "Venturimeter",
      "Rotameter",
      "Pitot tube",
    ],
    answer: "Barometer",
    explanation:
      "A barometer measures atmospheric pressure.",
  },
  {
    id: 8,
    question: "Absolute pressure is equal to:",
    options: [
      "Gauge pressure + Atmospheric pressure",
      "Gauge pressure - Atmospheric pressure",
      "Atmospheric pressure - Gauge pressure",
      "Gauge pressure × Atmospheric pressure",
    ],
    answer: "Gauge pressure + Atmospheric pressure",
    explanation:
      "Absolute pressure is the sum of gauge pressure and atmospheric pressure.",
  },
  {
    id: 9,
    question: "A piezometer is suitable for measuring:",
    options: [
      "Positive pressure in liquids",
      "Gas pressure",
      "Very high vacuum",
      "Fluid temperature",
    ],
    answer: "Positive pressure in liquids",
    explanation:
      "A piezometer measures moderate positive pressure in liquids using the height of a liquid column.",
  },
  {
    id: 10,
    question: "Pascal's law is the working principle of a:",
    options: [
      "Hydraulic press",
      "Venturimeter",
      "Pitot tube",
      "Rotameter",
    ],
    answer: "Hydraulic press",
    explanation:
      "A hydraulic press works on Pascal's law, which states that applied pressure is transmitted equally through a confined fluid.",
  },
    {
    id: 11,
    question: "The center of pressure on a submerged plane surface generally lies:",
    options: [
      "Below the centroid",
      "Above the centroid",
      "At the free surface",
      "Always at the centroid",
    ],
    answer: "Below the centroid",
    explanation:
      "For a submerged plane surface, pressure increases with depth, so the center of pressure generally lies below the centroid.",
  },
  {
    id: 12,
    question: "A body floats in a liquid when its weight is equal to:",
    options: [
      "Buoyant force",
      "Viscous force",
      "Surface tension force",
      "Inertial force",
    ],
    answer: "Buoyant force",
    explanation:
      "For floating equilibrium, the upward buoyant force equals the downward weight of the body.",
  },
  {
    id: 13,
    question: "Metacentric height is used to determine the stability of:",
    options: [
      "Floating bodies",
      "Pipe flow",
      "Jets",
      "Compressible flow",
    ],
    answer: "Floating bodies",
    explanation:
      "Metacentric height is an important parameter used to assess the initial stability of floating bodies.",
  },
  {
    id: 14,
    question: "For a stable floating body, the metacenter should be:",
    options: [
      "Above the center of gravity",
      "Below the center of gravity",
      "At the center of buoyancy only",
      "At the free surface",
    ],
    answer: "Above the center of gravity",
    explanation:
      "A floating body is stable when its metacenter lies above its center of gravity, giving positive metacentric height.",
  },
  {
    id: 15,
    question: "The continuity equation for steady incompressible flow is:",
    options: [
      "A₁V₁ = A₂V₂",
      "P₁V₁ = P₂V₂",
      "ρ₁A₁ = ρ₂A₂",
      "V₁/A₁ = V₂/A₂",
    ],
    answer: "A₁V₁ = A₂V₂",
    explanation:
      "For steady incompressible flow, conservation of mass reduces to A₁V₁ = A₂V₂.",
  },
    {
    id: 16,
    question: "The hydraulic gradient line represents:",
    options: [
      "Pressure head + Datum head",
      "Velocity head only",
      "Total energy head",
      "Friction factor only",
    ],
    answer: "Pressure head + Datum head",
    explanation:
      "The hydraulic gradient line represents the sum of pressure head and elevation or datum head.",
  },
  {
    id: 17,
    question: "The total energy line lies above the hydraulic gradient line by:",
    options: [
      "Velocity head",
      "Pressure head",
      "Datum head",
      "Friction head",
    ],
    answer: "Velocity head",
    explanation:
      "The total energy line exceeds the hydraulic gradient line by the velocity head V²/(2g).",
  },
  {
    id: 18,
    question: "Bernoulli's equation is generally applied along a:",
    options: [
      "Streamline",
      "Solid boundary",
      "Pipe wall only",
      "Free surface only",
    ],
    answer: "Streamline",
    explanation:
      "For steady ideal flow, Bernoulli's equation is commonly applied between points along the same streamline.",
  },
  {
    id: 19,
    question: "The coefficient of discharge is defined as:",
    options: [
      "Actual discharge / Theoretical discharge",
      "Theoretical discharge / Actual discharge",
      "Velocity / Area",
      "Pressure / Density",
    ],
    answer: "Actual discharge / Theoretical discharge",
    explanation:
      "The coefficient of discharge is the ratio of actual flow rate to theoretical flow rate.",
  },
  {
    id: 20,
    question: "A rotameter is classified as a:",
    options: [
      "Variable area flow meter",
      "Constant area flow meter",
      "Pressure measuring device",
      "Viscosity measuring device",
    ],
    answer: "Variable area flow meter",
    explanation:
      "A rotameter measures flow rate using a float that moves within a tapered tube, changing the available flow area.",
  },
      {
    id: 21,
    question: "For fully developed laminar flow in a circular pipe, the velocity profile is:",
    options: [
      "Parabolic",
      "Linear",
      "Uniform",
      "Logarithmic",
    ],
    answer: "Parabolic",
    explanation:
      "In fully developed laminar pipe flow, viscous effects produce a parabolic velocity distribution across the pipe radius.",
  },
  {
    id: 22,
    question: "The maximum velocity in fully developed laminar flow through a circular pipe is:",
    options: [
      "Twice the average velocity",
      "Equal to average velocity",
      "Half the average velocity",
      "Four times the average velocity",
    ],
    answer: "Twice the average velocity",
    explanation:
      "For fully developed laminar flow in a circular pipe, the parabolic velocity profile gives Vmax = 2Vavg.",
  },
  {
    id: 23,
    question: "The no-slip condition at a stationary solid boundary means fluid velocity is:",
    options: [
      "Zero at the wall",
      "Maximum at the wall",
      "Equal to sound velocity",
      "Independent of the wall",
    ],
    answer: "Zero at the wall",
    explanation:
      "The no-slip condition states that fluid directly in contact with a stationary solid surface has zero velocity relative to that surface.",
  },
  {
    id: 24,
    question: "The region near a solid surface where viscous effects are significant is called:",
    options: [
      "Boundary layer",
      "Free stream",
      "Potential core",
      "Stagnation zone",
    ],
    answer: "Boundary layer",
    explanation:
      "The boundary layer is the thin region adjacent to a solid surface where velocity gradients and viscous effects are important.",
  },
  {
    id: 25,
    question: "Flow separation is promoted by the presence of:",
    options: [
      "Adverse pressure gradient",
      "Favorable pressure gradient",
      "Constant zero pressure",
      "Uniform density only",
    ],
    answer: "Adverse pressure gradient",
    explanation:
      "An adverse pressure gradient causes pressure to increase in the flow direction, slowing the boundary layer and potentially causing separation.",
  },
];