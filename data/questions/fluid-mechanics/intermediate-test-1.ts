export const intermediateTest1 = [
  {
    id: 1,
    question:
      "For a two-dimensional incompressible flow, the continuity equation is:",
    options: [
      "∂u/∂x + ∂v/∂y = 0",
      "∂u/∂x - ∂v/∂y = 0",
      "∂u/∂y + ∂v/∂x = 0",
      "∂u/∂x + ∂v/∂y = 1",
    ],
    answer: "∂u/∂x + ∂v/∂y = 0",
    explanation:
      "For two-dimensional incompressible flow, conservation of mass gives ∂u/∂x + ∂v/∂y = 0.",
  },
  {
    id: 2,
    question:
      "The velocity potential function exists only for:",
    options: [
      "Rotational flow",
      "Irrotational flow",
      "Turbulent flow",
      "Compressible flow",
    ],
    answer: "Irrotational flow",
    explanation:
      "A velocity potential function exists when the flow is irrotational.",
  },
  {
    id: 3,
    question:
      "For a two-dimensional flow, the stream function automatically satisfies:",
    options: [
      "Momentum equation",
      "Continuity equation",
      "Bernoulli equation",
      "Energy equation",
    ],
    answer: "Continuity equation",
    explanation:
      "The definition of stream function ensures that the two-dimensional incompressible continuity equation is automatically satisfied.",
  },
  {
    id: 4,
    question:
      "The Laplace equation for velocity potential in incompressible flow is:",
    options: [
      "∂²φ/∂x² + ∂²φ/∂y² = 0",
      "∂φ/∂x + ∂φ/∂y = 0",
      "∂²φ/∂x² - ∂²φ/∂y² = 0",
      "∂φ/∂x - ∂φ/∂y = 1",
    ],
    answer: "∂²φ/∂x² + ∂²φ/∂y² = 0",
    explanation:
      "For incompressible irrotational flow, the velocity potential satisfies Laplace's equation.",
  },
  {
    id: 5,
    question:
      "The Reynolds number represents the ratio of:",
    options: [
      "Pressure force to viscous force",
      "Inertia force to viscous force",
      "Gravity force to inertia force",
      "Elastic force to inertia force",
    ],
    answer: "Inertia force to viscous force",
    explanation:
      "Reynolds number Re = ρVD/μ represents the ratio of inertia forces to viscous forces.",
  },
  {
    id: 6,
    question:
      "The Froude number represents the ratio of:",
    options: [
      "Inertia force to gravity force",
      "Inertia force to viscous force",
      "Pressure force to inertia force",
      "Elastic force to inertia force",
    ],
    answer: "Inertia force to gravity force",
    explanation:
      "Froude number is associated with the ratio of inertia effects to gravity effects.",
  },
  {
    id: 7,
    question:
      "The Mach number is defined as the ratio of:",
    options: [
      "Flow velocity to speed of sound",
      "Speed of sound to flow velocity",
      "Inertia force to viscous force",
      "Pressure force to elastic force",
    ],
    answer: "Flow velocity to speed of sound",
    explanation:
      "Mach number M = V/a, where V is flow velocity and a is the local speed of sound.",
  },
  {
    id: 8,
    question:
      "The Euler number represents the ratio of:",
    options: [
      "Pressure force to inertia force",
      "Inertia force to viscous force",
      "Gravity force to inertia force",
      "Surface tension force to inertia force",
    ],
    answer: "Pressure force to inertia force",
    explanation:
      "Euler number characterizes the ratio of pressure forces to inertia forces.",
  },
  {
    id: 9,
    question:
      "For dynamically similar flows, which condition must be satisfied?",
    options: [
      "Relevant dimensionless numbers must be equal",
      "Velocities must always be equal",
      "Pipe diameters must always be equal",
      "Fluid densities must always be equal",
    ],
    answer: "Relevant dimensionless numbers must be equal",
    explanation:
      "Dynamic similarity requires equality of the relevant force ratios represented by dimensionless numbers.",
  },
  {
    id: 10,
    question:
      "Buckingham π theorem states that if a phenomenon involves n variables and m fundamental dimensions, the number of dimensionless groups is:",
    options: ["n + m", "n - m", "m - n", "n × m"],
    answer: "n - m",
    explanation:
      "According to Buckingham π theorem, the number of independent dimensionless groups is n - m.",
  },
  {
    id: 11,
    question:
      "The hydraulic diameter of a non-circular duct is defined as:",
    options: [
      "4 × flow area / wetted perimeter",
      "Flow area / wetted perimeter",
      "2 × flow area / wetted perimeter",
      "Wetted perimeter / flow area",
    ],
    answer: "4 × flow area / wetted perimeter",
    explanation:
      "Hydraulic diameter is defined as Dh = 4A/P, where A is flow area and P is wetted perimeter.",
  },
  {
    id: 12,
    question:
      "For fully developed laminar flow through a circular pipe, the maximum velocity is:",
    options: [
      "Equal to average velocity",
      "1.5 times average velocity",
      "2 times average velocity",
      "3 times average velocity",
    ],
    answer: "2 times average velocity",
    explanation:
      "The laminar pipe velocity profile is parabolic, giving Vmax = 2Vavg.",
  },
  {
    id: 13,
    question:
      "For fully developed laminar flow in a circular pipe, the Darcy friction factor is:",
    options: ["16/Re", "32/Re", "64/Re", "0.316/Re"],
    answer: "64/Re",
    explanation:
      "For laminar flow in a circular pipe, the Darcy friction factor is f = 64/Re.",
  },
  {
    id: 14,
    question:
      "The pressure drop in fully developed laminar pipe flow is directly proportional to:",
    options: [
      "Velocity",
      "Square of velocity",
      "Cube of velocity",
      "Inverse of velocity",
    ],
    answer: "Velocity",
    explanation:
      "According to the Hagen-Poiseuille relation, pressure drop in laminar flow is directly proportional to average velocity.",
  },
  {
    id: 15,
    question:
      "The entrance length for laminar flow in a circular pipe is approximately proportional to:",
    options: ["Re D", "D/Re", "Re²D", "√Re D"],
    answer: "Re D",
    explanation:
      "The hydrodynamic entrance length for laminar pipe flow is approximately Le ≈ 0.05 Re D.",
  },
  {
    id: 16,
    question:
      "Boundary layer separation is primarily caused by:",
    options: [
      "Favourable pressure gradient",
      "Adverse pressure gradient",
      "Zero viscosity",
      "High surface tension",
    ],
    answer: "Adverse pressure gradient",
    explanation:
      "An adverse pressure gradient slows the fluid near the wall and can cause flow reversal and boundary layer separation.",
  },
  {
    id: 17,
    question:
      "A favourable pressure gradient means that pressure:",
    options: [
      "Increases in flow direction",
      "Decreases in flow direction",
      "Remains constant",
      "Becomes zero",
    ],
    answer: "Decreases in flow direction",
    explanation:
      "A favourable pressure gradient occurs when pressure decreases along the direction of flow.",
  },
  {
    id: 18,
    question:
      "The displacement thickness of a boundary layer represents:",
    options: [
      "Actual physical thickness of the boundary layer",
      "Equivalent outward displacement of the external flow",
      "Thickness where velocity is zero",
      "Momentum loss only",
    ],
    answer: "Equivalent outward displacement of the external flow",
    explanation:
      "Displacement thickness measures the equivalent outward shift of the external stream caused by the velocity deficit in the boundary layer.",
  },
  {
    id: 19,
    question:
      "Momentum thickness is associated with:",
    options: [
      "Mass flow deficit",
      "Momentum flux deficit",
      "Pressure rise",
      "Potential energy loss",
    ],
    answer: "Momentum flux deficit",
    explanation:
      "Momentum thickness quantifies the loss of momentum flux due to the boundary layer.",
  },
  {
    id: 20,
    question:
      "The shape factor of a boundary layer is defined as:",
    options: [
      "Momentum thickness / displacement thickness",
      "Displacement thickness / momentum thickness",
      "Boundary layer thickness / momentum thickness",
      "Displacement thickness / boundary layer thickness",
    ],
    answer: "Displacement thickness / momentum thickness",
    explanation:
      "Boundary layer shape factor is H = δ*/θ.",
  },
  {
    id: 21,
    question:
      "For laminar boundary layer flow over a flat plate, the local boundary layer thickness varies approximately as:",
    options: [
      "x",
      "x²",
      "√x",
      "1/x",
    ],
    answer: "√x",
    explanation:
      "For a laminar flat-plate boundary layer, δ ≈ 5x/√Rex, so δ varies approximately as √x for constant free-stream conditions.",
  },
  {
    id: 22,
    question:
      "The drag force caused by viscous shear stress on a body surface is called:",
    options: [
      "Pressure drag",
      "Wave drag",
      "Skin friction drag",
      "Induced drag",
    ],
    answer: "Skin friction drag",
    explanation:
      "Skin friction drag results from tangential viscous shear stresses acting along the body surface.",
  },
  {
    id: 23,
    question:
      "The phenomenon of cavitation occurs when local fluid pressure falls below:",
    options: [
      "Atmospheric pressure",
      "Critical pressure",
      "Vapour pressure",
      "Stagnation pressure",
    ],
    answer: "Vapour pressure",
    explanation:
      "Cavitation begins when local absolute pressure falls below the liquid's vapour pressure.",
  },
  {
    id: 24,
    question:
      "The coefficient of discharge of an orifice is defined as:",
    options: [
      "Theoretical discharge / actual discharge",
      "Actual discharge / theoretical discharge",
      "Actual velocity / theoretical velocity",
      "Jet area / orifice area",
    ],
    answer: "Actual discharge / theoretical discharge",
    explanation:
      "Coefficient of discharge Cd is the ratio of actual discharge to theoretical discharge.",
  },
  {
    id: 25,
    question:
      "In a Venturimeter, the minimum pressure generally occurs at the:",
    options: [
      "Inlet section",
      "Converging section entrance",
      "Throat",
      "Diverging section exit",
    ],
    answer: "Throat",
    explanation:
      "Velocity is maximum at the throat, so static pressure is minimum there according to Bernoulli's principle.",
  },
];