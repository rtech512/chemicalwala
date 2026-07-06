import { Question } from "@/types/question";

export const basicTest3: Question[] = [
      {
    id: 1,
    question: "The weight per unit volume of a fluid is called:",
    options: [
      "Specific weight",
      "Specific gravity",
      "Mass density",
      "Viscosity",
    ],
    answer: "Specific weight",
    explanation:
      "Specific weight is the weight of fluid per unit volume and is commonly represented by γ.",
  },
  {
    id: 2,
    question: "The volume occupied by unit mass of a fluid is called:",
    options: [
      "Specific volume",
      "Specific weight",
      "Relative density",
      "Bulk modulus",
    ],
    answer: "Specific volume",
    explanation:
      "Specific volume is defined as volume per unit mass and is the reciprocal of mass density.",
  },
  {
    id: 3,
    question: "The property that describes the change in fluid volume due to pressure is:",
    options: [
      "Bulk modulus",
      "Surface tension",
      "Vapor pressure",
      "Kinematic viscosity",
    ],
    answer: "Bulk modulus",
    explanation:
      "Bulk modulus measures a fluid's resistance to compression when pressure changes.",
  },
  {
    id: 4,
    question: "The upward curved liquid surface formed near a wetted tube wall is called:",
    options: [
      "Concave meniscus",
      "Convex meniscus",
      "Hydraulic jump",
      "Vena contracta",
    ],
    answer: "Concave meniscus",
    explanation:
      "A wetting liquid such as water generally forms a concave meniscus because adhesion to the wall exceeds cohesion.",
  },
  {
    id: 5,
    question: "Mercury in a clean glass tube generally forms a:",
    options: [
      "Convex meniscus",
      "Concave meniscus",
      "Flat jet",
      "Boundary layer",
    ],
    answer: "Convex meniscus",
    explanation:
      "Mercury forms a convex meniscus in clean glass because cohesive forces within mercury exceed adhesive forces with glass.",
  },
  {
    id: 6,
    question: "The pressure inside a liquid droplet exceeds outside pressure because of:",
    options: [
      "Surface tension",
      "Buoyancy",
      "Pipe friction",
      "Compressibility",
    ],
    answer: "Surface tension",
    explanation:
      "Surface tension creates excess pressure inside curved liquid interfaces such as droplets.",
  },
  {
    id: 7,
    question: "A differential manometer is used to measure:",
    options: [
      "Pressure difference between two points",
      "Atmospheric pressure only",
      "Fluid velocity directly",
      "Dynamic viscosity",
    ],
    answer: "Pressure difference between two points",
    explanation:
      "A differential manometer compares pressures at two locations using the difference in manometric liquid levels.",
  },
  {
    id: 8,
    question: "The vertical component of hydrostatic force on a curved submerged surface equals:",
    options: [
      "Weight of imaginary liquid above the surface",
      "Horizontal pressure force only",
      "Mass of the curved surface",
      "Atmospheric force only",
    ],
    answer: "Weight of imaginary liquid above the surface",
    explanation:
      "The vertical hydrostatic force component equals the weight of the imaginary column of liquid directly above the curved surface.",
  },
  {
    id: 9,
    question: "The point through which the resultant buoyant force acts is called:",
    options: [
      "Center of buoyancy",
      "Metacenter",
      "Center of pressure",
      "Centroid of area",
    ],
    answer: "Center of buoyancy",
    explanation:
      "The buoyant force acts through the center of buoyancy, which is the centroid of the displaced fluid volume.",
  },
  {
    id: 10,
    question: "A completely submerged body is in stable equilibrium when its center of gravity lies:",
    options: [
      "Below the center of buoyancy",
      "Above the center of buoyancy",
      "At the free surface",
      "Above the metacenter only",
    ],
    answer: "Below the center of buoyancy",
    explanation:
      "For a fully submerged body, stable equilibrium occurs when the center of gravity is below the center of buoyancy.",
  },
    {
    id: 11,
    question: "A streamline is a line whose tangent at any point gives the direction of:",
    options: [
      "Fluid velocity",
      "Fluid pressure",
      "Fluid density",
      "Surface tension",
    ],
    answer: "Fluid velocity",
    explanation:
      "At every point on a streamline, the tangent indicates the instantaneous direction of the local fluid velocity.",
  },
  {
    id: 12,
    question: "A pathline represents:",
    options: [
      "Actual path followed by a fluid particle",
      "Line of constant pressure",
      "Pipe centerline",
      "Boundary of a control volume",
    ],
    answer: "Actual path followed by a fluid particle",
    explanation:
      "A pathline traces the actual trajectory followed by an individual fluid particle over time.",
  },
  {
    id: 13,
    question: "A streakline is formed by particles that have:",
    options: [
      "Passed through the same fixed point",
      "Equal pressure",
      "Equal density",
      "Zero velocity",
    ],
    answer: "Passed through the same fixed point",
    explanation:
      "A streakline connects all fluid particles that have previously passed through a particular fixed point.",
  },
  {
    id: 14,
    question: "In uniform flow, velocity at a given instant is:",
    options: [
      "Same from point to point",
      "Zero everywhere",
      "Changing with position",
      "Always turbulent",
    ],
    answer: "Same from point to point",
    explanation:
      "Uniform flow means the velocity does not vary spatially from one location to another at a given instant.",
  },
  {
    id: 15,
    question: "Flow in which fluid particles rotate about their own axes is called:",
    options: [
      "Rotational flow",
      "Irrotational flow",
      "Uniform flow",
      "One-dimensional flow",
    ],
    answer: "Rotational flow",
    explanation:
      "In rotational flow, fluid elements possess finite angular rotation about their own axes.",
  },
  {
    id: 16,
    question: "A flow is called irrotational when the rotation of fluid elements is:",
    options: [
      "Zero",
      "Maximum",
      "Infinite",
      "Equal to pressure",
    ],
    answer: "Zero",
    explanation:
      "In irrotational flow, fluid elements have zero net angular rotation about their own centers.",
  },
  {
    id: 17,
    question: "The acceleration caused by change of velocity with position is called:",
    options: [
      "Convective acceleration",
      "Local acceleration",
      "Centripetal pressure",
      "Hydrostatic acceleration",
    ],
    answer: "Convective acceleration",
    explanation:
      "Convective acceleration occurs when a fluid particle moves through a spatially varying velocity field.",
  },
  {
    id: 18,
    question: "The acceleration caused by change of velocity with time at a fixed point is called:",
    options: [
      "Local acceleration",
      "Convective acceleration",
      "Gravitational head",
      "Friction velocity",
    ],
    answer: "Local acceleration",
    explanation:
      "Local acceleration represents the time-dependent change of velocity observed at a fixed spatial location.",
  },
  {
    id: 19,
    question: "A stream function is especially useful for analyzing:",
    options: [
      "Two-dimensional incompressible flow",
      "Static fluid pressure only",
      "Heat conduction",
      "Solid deformation",
    ],
    answer: "Two-dimensional incompressible flow",
    explanation:
      "The stream function is commonly used to represent two-dimensional incompressible flow fields and automatically satisfies continuity.",
  },
  {
    id: 20,
    question: "The velocity potential exists for a flow that is:",
    options: [
      "Irrotational",
      "Always turbulent",
      "Always compressible",
      "Hydrostatic",
    ],
    answer: "Irrotational",
    explanation:
      "A scalar velocity potential can be defined when the flow field is irrotational.",
  },
    {
    id: 21,
    question: "The locus of points having the same velocity potential is called:",
    options: [
      "Equipotential line",
      "Stream tube",
      "Pathline",
      "Streakline",
    ],
    answer: "Equipotential line",
    explanation:
      "An equipotential line connects points having the same value of velocity potential.",
  },
  {
    id: 22,
    question: "In a two-dimensional ideal flow, streamlines and equipotential lines intersect at:",
    options: [
      "Right angles",
      "45 degrees",
      "Zero degrees",
      "Random angles",
    ],
    answer: "Right angles",
    explanation:
      "For two-dimensional potential flow, streamlines and equipotential lines form an orthogonal network and intersect at right angles.",
  },
  {
    id: 23,
    question: "A stream tube is formed by a family of:",
    options: [
      "Streamlines",
      "Pathlines only",
      "Equipotential lines",
      "Pressure contours",
    ],
    answer: "Streamlines",
    explanation:
      "A stream tube is an imaginary tube whose boundary is formed by streamlines, so fluid does not cross its sides.",
  },
  {
    id: 24,
    question: "The rate of flow of mass through a section is expressed as:",
    options: [
      "ρAV",
      "AV/ρ",
      "ρA/V",
      "V/(ρA)",
    ],
    answer: "ρAV",
    explanation:
      "Mass flow rate equals density multiplied by cross-sectional area and average velocity.",
  },
  {
    id: 25,
    question: "For steady flow through a stream tube, conservation of mass requires:",
    options: [
      "Mass flow rate remains constant",
      "Pressure remains constant",
      "Velocity remains constant",
      "Area remains constant",
    ],
    answer: "Mass flow rate remains constant",
    explanation:
      "For steady flow, conservation of mass requires the mass flow rate entering and leaving a stream tube to remain equal.",
  },
];