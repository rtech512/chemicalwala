export const advancedTest1 = [
  {
    id: 1,
    question:
      "For laminar flow between two fixed parallel plates separated by distance 2h, the maximum velocity is how many times the average velocity?",
    options: ["1.25", "1.5", "2", "3"],
    answer: "1.5",
    explanation:
      "Plane Poiseuille flow has a parabolic profile and Vmax = 1.5 Vavg.",
  },
  {
    id: 2,
    question:
      "For laminar flow between two fixed parallel plates, the velocity profile is:",
    options: ["Linear", "Parabolic", "Logarithmic", "Uniform"],
    answer: "Parabolic",
    explanation:
      "Pressure-driven laminar flow between stationary plates gives a parabolic velocity distribution.",
  },
  {
    id: 3,
    question:
      "Couette flow occurs due to:",
    options: [
      "Pressure difference only",
      "Motion of one boundary plate",
      "Gravity force only",
      "Surface tension only",
    ],
    answer: "Motion of one boundary plate",
    explanation:
      "Couette flow is generated when one plate moves relative to another, dragging the fluid by viscosity.",
  },
  {
    id: 4,
    question:
      "For simple Couette flow with no pressure gradient, the velocity profile is:",
    options: ["Linear", "Parabolic", "Exponential", "Circular"],
    answer: "Linear",
    explanation:
      "With no pressure gradient, simple Couette flow has a linear velocity profile between the plates.",
  },
  {
    id: 5,
    question:
      "Stokes law for drag on a small sphere is valid when Reynolds number is:",
    options: ["Very small", "Very large", "Exactly 2300", "Greater than 10⁵"],
    answer: "Very small",
    explanation:
      "Stokes law applies to creeping flow around a sphere, where Reynolds number is very small.",
  },
  {
    id: 6,
    question:
      "The drag force on a small sphere according to Stokes law is:",
    options: ["3πμVD", "6πμVR", "ρV²A/2", "πD²σ"],
    answer: "6πμVR",
    explanation:
      "Stokes drag on a sphere is FD = 6πμVR, where R is sphere radius.",
  },
  {
    id: 7,
    question:
      "Terminal velocity of a small spherical particle in creeping flow increases when:",
    options: [
      "Particle diameter increases",
      "Fluid viscosity increases",
      "Density difference decreases",
      "Gravity becomes zero",
    ],
    answer: "Particle diameter increases",
    explanation:
      "For Stokes settling, terminal velocity is proportional to the square of particle diameter.",
  },
  {
    id: 8,
    question:
      "In creeping flow, inertial forces are:",
    options: [
      "Dominant",
      "Negligible compared to viscous forces",
      "Equal to gravity forces always",
      "Equal to pressure forces always",
    ],
    answer: "Negligible compared to viscous forces",
    explanation:
      "Creeping flow occurs at very low Reynolds number, where viscous forces dominate inertia forces.",
  },
  {
    id: 9,
    question:
      "The Navier-Stokes equation is obtained by applying:",
    options: [
      "Mass conservation only",
      "Momentum conservation to a viscous fluid",
      "Energy conservation only",
      "Dimensional analysis only",
    ],
    answer: "Momentum conservation to a viscous fluid",
    explanation:
      "Navier-Stokes equations represent conservation of momentum for viscous fluid motion.",
  },
  {
    id: 10,
    question:
      "For an inviscid fluid, the Navier-Stokes equation reduces to:",
    options: [
      "Euler equation",
      "Continuity equation only",
      "Darcy equation",
      "Manning equation",
    ],
    answer: "Euler equation",
    explanation:
      "When viscosity is neglected, the viscous terms vanish and Navier-Stokes equation reduces to Euler equation.",
  },
  {
    id: 11,
    question:
      "The no-slip boundary condition means:",
    options: [
      "Fluid velocity at wall equals wall velocity",
      "Fluid pressure at wall is zero",
      "Fluid density at wall is zero",
      "Wall shear stress is always zero",
    ],
    answer: "Fluid velocity at wall equals wall velocity",
    explanation:
      "No-slip condition states that the fluid in contact with a solid wall has the same velocity as the wall.",
  },
  {
    id: 12,
    question:
      "The Prandtl mixing length theory is mainly used to model:",
    options: [
      "Laminar viscosity",
      "Turbulent shear stress",
      "Surface tension",
      "Capillary pressure",
    ],
    answer: "Turbulent shear stress",
    explanation:
      "Prandtl's mixing length theory estimates turbulent shear stress using velocity gradient and mixing length.",
  },
  {
    id: 13,
    question:
      "In turbulent flow near a smooth wall, the viscous sublayer is the region where:",
    options: [
      "Molecular viscosity dominates",
      "Inertia force is zero",
      "Pressure is always atmospheric",
      "Velocity is maximum",
    ],
    answer: "Molecular viscosity dominates",
    explanation:
      "The viscous sublayer is very close to the wall, where viscous effects dominate turbulent mixing.",
  },
  {
    id: 14,
    question:
      "The logarithmic velocity profile is associated with:",
    options: [
      "Laminar pipe flow",
      "Turbulent boundary layer near wall",
      "Hydrostatic pressure",
      "Capillary rise",
    ],
    answer: "Turbulent boundary layer near wall",
    explanation:
      "The log-law velocity distribution is used in turbulent wall-bounded flows.",
  },
  {
    id: 15,
    question:
      "The shear velocity u* is defined using wall shear stress τw as:",
    options: ["√(τw/ρ)", "τw/ρ", "ρ/τw", "τwρ"],
    answer: "√(τw/ρ)",
    explanation:
      "Friction or shear velocity is u* = √(τw/ρ).",
  },
  {
    id: 16,
    question:
      "For a turbulent boundary layer, momentum transfer is mainly caused by:",
    options: [
      "Molecular diffusion only",
      "Eddy motion",
      "Surface tension",
      "Static pressure only",
    ],
    answer: "Eddy motion",
    explanation:
      "In turbulent flow, eddies transport momentum much more effectively than molecular diffusion.",
  },
  {
    id: 17,
    question:
      "The wake region in a turbulent boundary layer is farthest from:",
    options: ["Free stream", "Wall", "Leading edge", "Atmosphere"],
    answer: "Wall",
    explanation:
      "The wake region lies in the outer part of the turbulent boundary layer, away from the wall.",
  },
  {
    id: 18,
    question:
      "Von Karman momentum integral equation is used for:",
    options: [
      "Boundary layer analysis",
      "Capillary tube analysis",
      "Static fluid pressure only",
      "Free vortex only",
    ],
    answer: "Boundary layer analysis",
    explanation:
      "Von Karman momentum integral equation relates boundary layer growth to wall shear and momentum deficit.",
  },
  {
    id: 19,
    question:
      "For laminar boundary layer over a flat plate, the local skin friction coefficient varies as:",
    options: ["Rex⁻¹/²", "Rex", "Rex²", "Independent of Rex"],
    answer: "Rex⁻¹/²",
    explanation:
      "For laminar flat plate boundary layer, local Cf = 0.664/√Rex.",
  },
  {
    id: 20,
    question:
      "For laminar boundary layer over a flat plate, average skin friction coefficient from leading edge to x is:",
    options: ["1.328/√Rex", "0.316/Re", "64/Re", "4f"],
    answer: "1.328/√Rex",
    explanation:
      "The average skin friction coefficient for laminar flat plate flow is 1.328/√Rex.",
  },
  {
    id: 21,
    question:
      "Transition from laminar to turbulent boundary layer on a smooth flat plate usually occurs around Rex:",
    options: ["5 × 10⁵", "2300", "64", "1"],
    answer: "5 × 10⁵",
    explanation:
      "For a smooth flat plate, transition commonly occurs near Rex ≈ 5 × 10⁵.",
  },
  {
    id: 22,
    question:
      "A turbulent boundary layer is less likely to separate than a laminar boundary layer because it has:",
    options: [
      "Higher momentum near the wall",
      "Zero wall shear stress",
      "No velocity gradient",
      "No pressure variation",
    ],
    answer: "Higher momentum near the wall",
    explanation:
      "Turbulent mixing brings high-momentum fluid closer to the wall, helping resist adverse pressure gradients.",
  },
  {
    id: 23,
    question:
      "The drag crisis for a sphere is mainly due to:",
    options: [
      "Boundary layer transition delaying separation",
      "Increase in surface tension",
      "Decrease in density to zero",
      "Complete removal of wake",
    ],
    answer: "Boundary layer transition delaying separation",
    explanation:
      "Drag crisis occurs when transition to turbulent boundary layer delays separation and reduces pressure drag.",
  },
  {
    id: 24,
    question:
      "D'Alembert's paradox states that an ideal inviscid incompressible flow past a body gives:",
    options: ["Zero drag", "Maximum drag", "Infinite lift", "Zero velocity"],
    answer: "Zero drag",
    explanation:
      "In ideal potential flow, pressure distribution predicts zero drag on a body, known as D'Alembert's paradox.",
  },
  {
    id: 25,
    question:
      "Circulation around a closed curve is defined as the line integral of:",
    options: ["Velocity along the curve", "Pressure along the curve", "Density over area", "Temperature over volume"],
    answer: "Velocity along the curve",
    explanation:
      "Circulation Γ is defined as the line integral of velocity around a closed curve.",
  },
];