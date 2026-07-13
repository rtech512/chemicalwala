export const intermediateTest2 = [
  {
    id: 1,
    question:
      "For steady incompressible flow through a variable-area duct, if the cross-sectional area decreases, the average velocity:",
    options: [
      "Decreases",
      "Increases",
      "Remains constant",
      "Becomes zero",
    ],
    answer: "Increases",
    explanation:
      "For steady incompressible flow, continuity gives A₁V₁ = A₂V₂. Therefore, a decrease in area causes an increase in average velocity.",
  },
  {
    id: 2,
    question:
      "The material derivative of velocity represents:",
    options: [
      "Only local acceleration",
      "Only convective acceleration",
      "Total acceleration of a fluid particle",
      "Pressure acceleration only",
    ],
    answer: "Total acceleration of a fluid particle",
    explanation:
      "The material derivative combines local and convective acceleration and gives the total acceleration experienced by a moving fluid particle.",
  },
  {
    id: 3,
    question:
      "In a steady flow field, which acceleration component is necessarily zero?",
    options: [
      "Convective acceleration",
      "Local acceleration",
      "Centripetal acceleration",
      "Tangential acceleration",
    ],
    answer: "Local acceleration",
    explanation:
      "In steady flow, velocity at a fixed point does not change with time, so the local acceleration term ∂V/∂t is zero.",
  },
  {
    id: 4,
    question:
      "A flow can have non-zero acceleration even when it is steady because of:",
    options: [
      "Local acceleration",
      "Convective acceleration",
      "Zero velocity gradient",
      "Constant density only",
    ],
    answer: "Convective acceleration",
    explanation:
      "In steady non-uniform flow, velocity changes from one position to another, producing convective acceleration.",
  },
  {
    id: 5,
    question:
      "The substantial derivative of a scalar property T in a flow field is:",
    options: [
      "∂T/∂t only",
      "V · ∇T only",
      "∂T/∂t + V · ∇T",
      "∂T/∂t - V · ∇T",
    ],
    answer: "∂T/∂t + V · ∇T",
    explanation:
      "The substantial derivative DT/Dt includes both local change and convective transport of the scalar property.",
  },
  {
    id: 6,
    question:
      "For a fluid element undergoing pure translation, the angular deformation is:",
    options: [
      "Maximum",
      "Zero",
      "Infinite",
      "Equal to normal strain",
    ],
    answer: "Zero",
    explanation:
      "Pure translation changes only the position of a fluid element without rotation or deformation.",
  },
  {
    id: 7,
    question:
      "The vorticity vector is mathematically equal to:",
    options: [
      "Gradient of velocity",
      "Divergence of velocity",
      "Curl of velocity",
      "Laplacian of pressure",
    ],
    answer: "Curl of velocity",
    explanation:
      "Vorticity is defined as ω = ∇ × V, the curl of the velocity field.",
  },
  {
    id: 8,
    question:
      "The angular velocity of a fluid element is related to vorticity by:",
    options: [
      "Angular velocity = vorticity",
      "Angular velocity = 2 × vorticity",
      "Angular velocity = vorticity / 2",
      "Angular velocity = square of vorticity",
    ],
    answer: "Angular velocity = vorticity / 2",
    explanation:
      "The local angular velocity vector of a fluid element is one-half of the vorticity vector.",
  },
  {
    id: 9,
    question:
      "For a forced vortex, the tangential velocity varies with radial distance r as:",
    options: [
      "Vθ ∝ 1/r",
      "Vθ ∝ r",
      "Vθ ∝ 1/r²",
      "Vθ is independent of r",
    ],
    answer: "Vθ ∝ r",
    explanation:
      "A forced vortex rotates like a solid body, so Vθ = ωr and tangential velocity increases linearly with radius.",
  },
  {
    id: 10,
    question:
      "For a free vortex, the tangential velocity varies with radius as:",
    options: [
      "Vθ ∝ r",
      "Vθ ∝ r²",
      "Vθ ∝ 1/r",
      "Vθ is constant",
    ],
    answer: "Vθ ∝ 1/r",
    explanation:
      "In an ideal free vortex, circulation is constant, giving Vθr = constant and therefore Vθ ∝ 1/r.",
  },
  {
    id: 11,
    question:
      "The free surface of a liquid in rigid-body rotation takes the shape of a:",
    options: [
      "Horizontal plane",
      "Vertical plane",
      "Paraboloid of revolution",
      "Hyperboloid",
    ],
    answer: "Paraboloid of revolution",
    explanation:
      "During rigid-body rotation, the free surface satisfies z = ω²r²/(2g) + constant, which is a paraboloid of revolution.",
  },
  {
    id: 12,
    question:
      "The kinetic energy correction factor α is introduced because:",
    options: [
      "Pressure is non-uniform",
      "Velocity distribution across a section is non-uniform",
      "Density is always variable",
      "Gravity changes along the pipe",
    ],
    answer: "Velocity distribution across a section is non-uniform",
    explanation:
      "The kinetic energy correction factor accounts for the difference between actual kinetic energy flux and that calculated using average velocity.",
  },
  {
    id: 13,
    question:
      "For fully developed laminar flow in a circular pipe, the kinetic energy correction factor α is:",
    options: ["1", "4/3", "2", "3"],
    answer: "2",
    explanation:
      "For the parabolic velocity profile of fully developed laminar pipe flow, the kinetic energy correction factor is α = 2.",
  },
  {
    id: 14,
    question:
      "For fully developed laminar flow in a circular pipe, the momentum correction factor β is:",
    options: ["1", "4/3", "2", "8/3"],
    answer: "4/3",
    explanation:
      "For a parabolic laminar velocity profile in a circular pipe, the momentum correction factor is β = 4/3.",
  },
  {
    id: 15,
    question:
      "The hydraulic grade line represents the variation of:",
    options: [
      "z + p/ρg",
      "V²/2g only",
      "z + V²/2g",
      "p/ρg + V²/2g only",
    ],
    answer: "z + p/ρg",
    explanation:
      "The hydraulic grade line is the locus of piezometric head, equal to elevation head plus pressure head.",
  },
  {
    id: 16,
    question:
      "The vertical separation between the energy grade line and hydraulic grade line is equal to:",
    options: [
      "Pressure head",
      "Elevation head",
      "Velocity head",
      "Head loss",
    ],
    answer: "Velocity head",
    explanation:
      "The energy grade line includes velocity head while the hydraulic grade line does not, so their separation is V²/(2g).",
  },
  {
    id: 17,
    question:
      "In a constant-diameter horizontal pipe carrying real fluid, the energy grade line generally:",
    options: [
      "Rises in the flow direction",
      "Falls in the flow direction",
      "Remains horizontal",
      "Coincides with pipe centerline",
    ],
    answer: "Falls in the flow direction",
    explanation:
      "Mechanical energy decreases along the direction of real fluid flow because of frictional losses.",
  },
  {
    id: 18,
    question:
      "The Darcy-Weisbach equation expresses major head loss as:",
    options: [
      "f(L/D)(V²/2g)",
      "f(D/L)(V²/2g)",
      "(L/D)(V/g)",
      "f(L/D)(V/g)",
    ],
    answer: "f(L/D)(V²/2g)",
    explanation:
      "The Darcy-Weisbach equation is hf = f(L/D)(V²/2g), where f is the Darcy friction factor.",
  },
  {
    id: 19,
    question:
      "For turbulent flow in a hydraulically smooth pipe, the friction factor primarily depends on:",
    options: [
      "Reynolds number",
      "Pipe length only",
      "Fluid pressure only",
      "Elevation only",
    ],
    answer: "Reynolds number",
    explanation:
      "For a hydraulically smooth pipe, roughness effects are negligible and the friction factor is primarily governed by Reynolds number.",
  },
  {
    id: 20,
    question:
      "In the fully rough turbulent regime, the Darcy friction factor becomes approximately independent of:",
    options: [
      "Relative roughness",
      "Reynolds number",
      "Pipe diameter",
      "Wall roughness",
    ],
    answer: "Reynolds number",
    explanation:
      "At sufficiently high Reynolds number in the fully rough regime, friction factor depends mainly on relative roughness and is nearly independent of Reynolds number.",
  },
  {
    id: 21,
    question:
      "The Colebrook equation is commonly used to determine:",
    options: [
      "Discharge coefficient of an orifice",
      "Turbulent pipe friction factor",
      "Surface tension",
      "Bulk modulus",
    ],
    answer: "Turbulent pipe friction factor",
    explanation:
      "The Colebrook equation relates Darcy friction factor to Reynolds number and relative roughness for turbulent pipe flow.",
  },
  {
    id: 22,
    question:
      "A sudden expansion in a pipe causes a head loss equal to:",
    options: [
      "(V₁ + V₂)²/(2g)",
      "(V₁ - V₂)²/(2g)",
      "V₁V₂/(2g)",
      "(V₁² - V₂²)/g",
    ],
    answer: "(V₁ - V₂)²/(2g)",
    explanation:
      "The Borda-Carnot relation gives the head loss due to sudden expansion as hL = (V₁ - V₂)²/(2g).",
  },
  {
    id: 23,
    question:
      "For pipes connected in series, which quantity is the same through each pipe under steady incompressible flow?",
    options: [
      "Velocity",
      "Discharge",
      "Head loss",
      "Diameter",
    ],
    answer: "Discharge",
    explanation:
      "For steady incompressible flow through pipes in series without branching, the same discharge passes through every pipe.",
  },
  {
    id: 24,
    question:
      "For parallel pipes connecting the same two junctions, the head loss between the junctions is:",
    options: [
      "Different for every branch",
      "Zero in every branch",
      "The same for every branch",
      "Proportional only to pipe diameter",
    ],
    answer: "The same for every branch",
    explanation:
      "All parallel branches share the same upstream and downstream junctions, so the head loss between those junctions is equal for each branch.",
  },
  {
    id: 25,
    question:
      "The equivalent length method for minor losses replaces a fitting by:",
    options: [
      "An equivalent pressure source",
      "A straight pipe length producing the same head loss",
      "A larger reservoir",
      "A smaller fluid density",
    ],
    answer: "A straight pipe length producing the same head loss",
    explanation:
      "The equivalent length method represents a fitting or valve by a length of straight pipe having the same frictional head loss.",
  },
];