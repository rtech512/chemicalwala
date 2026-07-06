export const advancedTest2 = [
  {
    id: 1,
    question:
      "Kelvin's circulation theorem states that circulation around a closed material curve remains constant for:",
    options: [
      "Inviscid barotropic flow with conservative body forces",
      "All viscous turbulent flows",
      "Only hydrostatic fluids",
      "All compressible flows regardless of forces",
    ],
    answer: "Inviscid barotropic flow with conservative body forces",
    explanation:
      "Kelvin's theorem states that circulation is conserved for inviscid barotropic flow when body forces are conservative.",
  },
  {
    id: 2,
    question:
      "The Helmholtz vortex theorem implies that a vortex tube in an ideal fluid:",
    options: [
      "Can terminate inside the fluid",
      "Cannot terminate inside the fluid",
      "Always has zero circulation",
      "Must remain straight",
    ],
    answer: "Cannot terminate inside the fluid",
    explanation:
      "A vortex tube cannot end within the fluid; it must form a closed loop or terminate at a boundary.",
  },
  {
    id: 3,
    question:
      "For a two-dimensional incompressible potential flow, lines of constant velocity potential and constant stream function are:",
    options: [
      "Parallel",
      "Orthogonal",
      "Always coincident",
      "Unrelated",
    ],
    answer: "Orthogonal",
    explanation:
      "Equipotential lines and streamlines intersect at right angles in two-dimensional potential flow.",
  },
  {
    id: 4,
    question:
      "The complex potential for a two-dimensional ideal flow is commonly written as:",
    options: [
      "W = φ + iψ",
      "W = p + iρ",
      "W = u + iv only",
      "W = φψ",
    ],
    answer: "W = φ + iψ",
    explanation:
      "The complex potential combines velocity potential φ and stream function ψ as W = φ + iψ.",
  },
  {
    id: 5,
    question:
      "For a two-dimensional source flow of strength Q, radial velocity varies with radius r as:",
    options: [
      "Directly proportional to r",
      "Inversely proportional to r",
      "Inversely proportional to r²",
      "Independent of r",
    ],
    answer: "Inversely proportional to r",
    explanation:
      "For a two-dimensional source, radial velocity is proportional to 1/r.",
  },
  {
    id: 6,
    question:
      "A source and sink of equal strength separated by a very small distance form a:",
    options: [
      "Doublet",
      "Forced vortex",
      "Uniform stream",
      "Stagnation flow only",
    ],
    answer: "Doublet",
    explanation:
      "A doublet is obtained as the limiting combination of an equal source and sink brought very close together.",
  },
  {
    id: 7,
    question:
      "Superposition of a uniform flow and a doublet represents ideal flow around a:",
    options: [
      "Circular cylinder",
      "Flat plate only",
      "Sphere only",
      "Sharp-crested weir",
    ],
    answer: "Circular cylinder",
    explanation:
      "Uniform flow combined with a properly oriented doublet produces potential flow around a circular cylinder.",
  },
  {
    id: 8,
    question:
      "In ideal flow around a circular cylinder without circulation, the stagnation points occur at:",
    options: [
      "Front and rear points on the cylinder",
      "Top and bottom points only",
      "Cylinder centre",
      "Infinity only",
    ],
    answer: "Front and rear points on the cylinder",
    explanation:
      "Without circulation, stagnation points occur where the cylinder surface intersects the uniform-flow axis.",
  },
  {
    id: 9,
    question:
      "According to the Kutta-Joukowski theorem, lift per unit span on a cylinder is proportional to:",
    options: [
      "Circulation",
      "Viscosity squared",
      "Surface tension only",
      "Pipe roughness",
    ],
    answer: "Circulation",
    explanation:
      "The lift per unit span is proportional to fluid density, free-stream velocity, and circulation.",
  },
  {
    id: 10,
    question:
      "The Magnus effect is associated with:",
    options: [
      "Lift on a rotating body in a fluid stream",
      "Capillary depression",
      "Laminar pipe friction",
      "Hydraulic jump only",
    ],
    answer: "Lift on a rotating body in a fluid stream",
    explanation:
      "Rotation creates circulation around the body, producing asymmetric pressure distribution and lift.",
  },
  {
    id: 11,
    question:
      "For one-dimensional isentropic flow of a perfect gas through a variable-area duct, sonic conditions occur at:",
    options: [
      "A critical area",
      "Maximum pressure only",
      "Zero velocity",
      "Infinite area",
    ],
    answer: "A critical area",
    explanation:
      "In isentropic compressible flow, Mach number becomes unity at the critical area A*.",
  },
  {
    id: 12,
    question:
      "For subsonic isentropic flow through a converging duct, velocity generally:",
    options: [
      "Increases",
      "Decreases",
      "Remains zero",
      "Becomes independent of area",
    ],
    answer: "Increases",
    explanation:
      "A decrease in area accelerates subsonic compressible flow.",
  },
  {
    id: 13,
    question:
      "For supersonic isentropic flow through a diverging duct, velocity generally:",
    options: [
      "Increases",
      "Decreases",
      "Remains constant",
      "Becomes zero",
    ],
    answer: "Increases",
    explanation:
      "Supersonic flow accelerates in a diverging passage.",
  },
  {
    id: 14,
    question:
      "A converging-diverging nozzle is required to produce:",
    options: [
      "Sustained supersonic flow from a subsonic reservoir",
      "Hydrostatic equilibrium",
      "Pure Couette flow",
      "Capillary rise",
    ],
    answer: "Sustained supersonic flow from a subsonic reservoir",
    explanation:
      "The converging section accelerates flow toward Mach 1 at the throat, and the diverging section can accelerate it to supersonic speed.",
  },
  {
    id: 15,
    question:
      "Choked flow through a nozzle occurs when:",
    options: [
      "Mass flow rate reaches its maximum for given upstream stagnation conditions",
      "Velocity becomes zero at throat",
      "Downstream pressure equals upstream pressure",
      "Density becomes zero",
    ],
    answer:
      "Mass flow rate reaches its maximum for given upstream stagnation conditions",
    explanation:
      "Once the throat reaches sonic conditions, mass flow rate attains its maximum for fixed upstream stagnation conditions.",
  },
  {
    id: 16,
    question:
      "Across a normal shock wave in a perfect gas, the Mach number changes from:",
    options: [
      "Supersonic to subsonic",
      "Subsonic to supersonic",
      "Sonic to infinite",
      "Zero to sonic",
    ],
    answer: "Supersonic to subsonic",
    explanation:
      "A normal shock causes an abrupt transition from supersonic upstream flow to subsonic downstream flow.",
  },
  {
    id: 17,
    question:
      "Across an adiabatic normal shock wave, stagnation temperature for a perfect gas:",
    options: [
      "Remains constant",
      "Always decreases",
      "Always increases",
      "Becomes zero",
    ],
    answer: "Remains constant",
    explanation:
      "For an adiabatic shock with no shaft work, total enthalpy and hence stagnation temperature remain constant.",
  },
  {
    id: 18,
    question:
      "Across a normal shock wave, stagnation pressure:",
    options: [
      "Decreases",
      "Increases",
      "Remains constant",
      "Becomes equal to static pressure",
    ],
    answer: "Decreases",
    explanation:
      "A shock is irreversible and generates entropy, causing stagnation pressure to decrease.",
  },
  {
    id: 19,
    question:
      "Across a normal shock wave, entropy:",
    options: [
      "Increases",
      "Decreases",
      "Remains constant",
      "Becomes zero",
    ],
    answer: "Increases",
    explanation:
      "A physically admissible normal shock is irreversible, so entropy increases across it.",
  },
  {
    id: 20,
    question:
      "Fanno flow refers to one-dimensional flow in a constant-area duct with:",
    options: [
      "Wall friction and no heat transfer",
      "Heat transfer and no friction",
      "No friction and no heat transfer",
      "Area variation only",
    ],
    answer: "Wall friction and no heat transfer",
    explanation:
      "Fanno flow models adiabatic compressible flow through a constant-area duct with friction.",
  },
  {
    id: 21,
    question:
      "Rayleigh flow refers to one-dimensional constant-area flow with:",
    options: [
      "Heat transfer and negligible friction",
      "Friction and no heat transfer",
      "Area change only",
      "Zero density variation",
    ],
    answer: "Heat transfer and negligible friction",
    explanation:
      "Rayleigh flow models compressible constant-area flow with heat addition or rejection and negligible friction.",
  },
  {
    id: 22,
    question:
      "In Fanno flow, both subsonic and supersonic states tend toward:",
    options: [
      "Mach number 1",
      "Mach number 0",
      "Infinite Mach number",
      "Constant Mach number 2",
    ],
    answer: "Mach number 1",
    explanation:
      "Friction drives subsonic and supersonic Fanno flows toward the sonic condition.",
  },
  {
    id: 23,
    question:
      "Water hammer in a pipeline is primarily caused by:",
    options: [
      "Rapid change in flow velocity",
      "Steady uniform flow",
      "Surface tension only",
      "Constant valve opening",
    ],
    answer: "Rapid change in flow velocity",
    explanation:
      "Rapid valve closure or another sudden velocity change generates a pressure wave known as water hammer.",
  },
  {
    id: 24,
    question:
      "For instantaneous valve closure in an elastic pipeline, the Joukowsky pressure rise is:",
    options: [
      "Δp = ρaΔV",
      "Δp = μΔV/D",
      "Δp = ρgD",
      "Δp = σ/D",
    ],
    answer: "Δp = ρaΔV",
    explanation:
      "The Joukowsky relation gives pressure change as Δp = ρaΔV, where a is pressure-wave speed.",
  },
  {
    id: 25,
    question:
      "The speed of a pressure wave in a real liquid-filled elastic pipe is generally:",
    options: [
      "Lower than the acoustic speed in the same liquid inside a perfectly rigid pipe",
      "Always higher than the speed of light",
      "Independent of pipe elasticity",
      "Zero for all liquids",
    ],
    answer:
      "Lower than the acoustic speed in the same liquid inside a perfectly rigid pipe",
    explanation:
      "Pipe-wall elasticity adds compliance to the system and reduces pressure-wave speed compared with a perfectly rigid pipe.",
  },
];