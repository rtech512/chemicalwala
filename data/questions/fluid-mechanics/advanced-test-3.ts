export const advancedTest3 = [
  {
    id: 1,
    question:
      "Reynolds transport theorem provides a relationship between:",
    options: [
      "System formulation and control-volume formulation",
      "Pressure and surface tension only",
      "Velocity potential and stream function only",
      "Laminar and turbulent friction factors only",
    ],
    answer: "System formulation and control-volume formulation",
    explanation:
      "Reynolds transport theorem converts conservation laws written for a system into equivalent control-volume form.",
  },
  {
    id: 2,
    question:
      "For a steady-flow control volume, the net rate of mass accumulation inside the control volume is:",
    options: ["Zero", "Maximum", "Equal to inlet mass flow only", "Always negative"],
    answer: "Zero",
    explanation:
      "Under steady conditions, properties within the control volume do not change with time, so there is no net mass accumulation.",
  },
  {
    id: 3,
    question:
      "The linear momentum equation for a control volume is fundamentally based on:",
    options: [
      "Newton's second law",
      "Newton's law of cooling",
      "Fourier's law",
      "Hooke's law",
    ],
    answer: "Newton's second law",
    explanation:
      "The control-volume momentum equation follows from Newton's second law applied through Reynolds transport theorem.",
  },
  {
    id: 4,
    question:
      "The force exerted by a jet striking a stationary flat plate normally is proportional to:",
    options: [
      "Mass flow rate × jet velocity",
      "Mass flow rate / jet velocity",
      "Jet velocity only",
      "Fluid viscosity only",
    ],
    answer: "Mass flow rate × jet velocity",
    explanation:
      "For a normal stationary plate that removes the jet's normal velocity component, force follows from momentum change and is proportional to ṁV.",
  },
  {
    id: 5,
    question:
      "For maximum power transfer from a free jet to a single flat plate moving in the jet direction, the plate speed is:",
    options: ["V/2", "V", "V/3", "2V"],
    answer: "V/2",
    explanation:
      "For an ideal moving flat plate, maximizing power with respect to plate speed gives u = V/2.",
  },
  {
    id: 6,
    question:
      "The moment-of-momentum equation is especially useful in the analysis of:",
    options: [
      "Turbomachinery",
      "Hydrostatic manometers only",
      "Capillary tubes only",
      "Static reservoirs only",
    ],
    answer: "Turbomachinery",
    explanation:
      "The angular momentum principle directly relates torque to change in angular momentum of flowing fluid and is central to turbomachinery analysis.",
  },
  {
    id: 7,
    question:
      "Euler's turbomachinery equation relates specific work transfer primarily to the change in:",
    options: [
      "Tangential component of angular momentum",
      "Static pressure only",
      "Axial momentum only",
      "Fluid viscosity",
    ],
    answer: "Tangential component of angular momentum",
    explanation:
      "Euler's turbomachinery equation is based on the change in whirl velocity and angular momentum across the rotor.",
  },
  {
    id: 8,
    question:
      "For zero theoretical energy transfer in a turbomachine rotor, the quantity U₂Vw₂ - U₁Vw₁ must be:",
    options: ["Zero", "Maximum", "Equal to g", "Infinite"],
    answer: "Zero",
    explanation:
      "Euler specific work is U₂Vw₂ - U₁Vw₁, so zero value means zero theoretical rotor work transfer.",
  },
  {
    id: 9,
    question:
      "NPSH is primarily used in pump analysis to assess the risk of:",
    options: ["Cavitation", "Water hammer only", "Boundary layer transition", "Compressible choking"],
    answer: "Cavitation",
    explanation:
      "Net Positive Suction Head measures the pressure margin above vaporization conditions at the pump suction.",
  },
  {
    id: 10,
    question:
      "To avoid cavitation in a centrifugal pump, the available NPSH should generally be:",
    options: [
      "Greater than required NPSH",
      "Less than required NPSH",
      "Exactly zero",
      "Negative",
    ],
    answer: "Greater than required NPSH",
    explanation:
      "Safe pump operation requires NPSH available to exceed NPSH required, usually with an appropriate margin.",
  },
  {
    id: 11,
    question:
      "The specific speed of a pump is mainly used to:",
    options: [
      "Compare and select geometrically similar pump types",
      "Measure liquid viscosity directly",
      "Calculate surface tension",
      "Determine atmospheric pressure",
    ],
    answer: "Compare and select geometrically similar pump types",
    explanation:
      "Specific speed is a similarity parameter useful for pump classification, comparison, and preliminary selection.",
  },
  {
    id: 12,
    question:
      "For geometrically similar pumps operating at corresponding conditions, discharge scales approximately as:",
    options: ["ND³", "N²D", "ND²", "N²D³"],
    answer: "ND³",
    explanation:
      "Pump affinity laws give Q proportional to rotational speed N times impeller diameter cubed D³.",
  },
  {
    id: 13,
    question:
      "For geometrically similar pumps operating at corresponding conditions, head scales approximately as:",
    options: ["N²D²", "ND³", "N³D²", "ND"],
    answer: "N²D²",
    explanation:
      "The pump similarity relation gives H proportional to N²D².",
  },
  {
    id: 14,
    question:
      "For geometrically similar pumps operating at corresponding conditions, power scales approximately as:",
    options: ["N³D⁵", "ND³", "N²D²", "N⁵D³"],
    answer: "N³D⁵",
    explanation:
      "Under dynamically similar operation, pump power scales as P proportional to N³D⁵.",
  },
  {
    id: 15,
    question:
      "A centrifugal pump operating point is determined by the intersection of:",
    options: [
      "Pump characteristic curve and system curve",
      "Two constant-pressure lines",
      "Viscosity and density curves",
      "Mach and Weber number curves",
    ],
    answer: "Pump characteristic curve and system curve",
    explanation:
      "The actual operating discharge and head occur where the pump head curve intersects the system resistance curve.",
  },
  {
    id: 16,
    question:
      "Pumps connected in series are primarily used to increase:",
    options: ["Head", "Discharge at identical head only", "Fluid density", "Pipe diameter"],
    answer: "Head",
    explanation:
      "For pumps in series, heads approximately add at a common discharge.",
  },
  {
    id: 17,
    question:
      "Pumps connected in parallel are primarily used to increase:",
    options: ["Discharge capacity", "Static head only", "Fluid viscosity", "Vapour pressure"],
    answer: "Discharge capacity",
    explanation:
      "For parallel pumps, flow rates approximately add at a common head.",
  },
  {
    id: 18,
    question:
      "Priming is generally necessary before starting a conventional centrifugal pump because:",
    options: [
      "The casing and suction line must be filled with liquid",
      "The impeller must be filled with air",
      "Fluid viscosity must become zero",
      "The delivery valve must always be removed",
    ],
    answer: "The casing and suction line must be filled with liquid",
    explanation:
      "A conventional centrifugal pump cannot effectively create the required suction when its casing contains air, so it is primed with liquid.",
  },
  {
    id: 19,
    question:
      "The degree of reaction in a turbomachine stage is defined as the ratio of:",
    options: [
      "Static enthalpy change in rotor to static enthalpy change in stage",
      "Rotor speed to fluid velocity",
      "Discharge to head",
      "Pressure to density",
    ],
    answer:
      "Static enthalpy change in rotor to static enthalpy change in stage",
    explanation:
      "Degree of reaction measures the fraction of the stage static enthalpy change occurring in the rotor.",
  },
  {
    id: 20,
    question:
      "In an impulse turbine stage, the ideal degree of reaction is:",
    options: ["0", "0.5", "1", "2"],
    answer: "0",
    explanation:
      "In an ideal impulse stage, the static pressure drop occurs in the stator or nozzle, with no ideal static enthalpy drop in the rotor.",
  },
  {
    id: 21,
    question:
      "The dimensionless pressure coefficient Cp is commonly defined as:",
    options: [
      "(p - p∞)/(0.5ρV∞²)",
      "p/(ρgD)",
      "ρV/p",
      "μV/σ",
    ],
    answer: "(p - p∞)/(0.5ρV∞²)",
    explanation:
      "Pressure coefficient normalizes local pressure difference by the free-stream dynamic pressure.",
  },
  {
    id: 22,
    question:
      "At an ideal stagnation point in incompressible inviscid flow, the pressure coefficient Cp is:",
    options: ["1", "0", "-1", "Infinite"],
    answer: "1",
    explanation:
      "At a stagnation point, local velocity is zero and Bernoulli's equation gives Cp = 1 under standard incompressible normalization.",
  },
  {
    id: 23,
    question:
      "The Strouhal number is commonly defined as:",
    options: ["fL/V", "ρVL/μ", "V/√(gL)", "ρV²L/σ"],
    answer: "fL/V",
    explanation:
      "Strouhal number St = fL/V characterizes dimensionless oscillation or vortex-shedding frequency.",
  },
  {
    id: 24,
    question:
      "Vortex shedding behind a bluff body can produce:",
    options: [
      "Periodic fluctuating forces",
      "Only steady hydrostatic force",
      "Zero wake",
      "No pressure variation",
    ],
    answer: "Periodic fluctuating forces",
    explanation:
      "Alternating vortex shedding creates unsteady lift and drag forces that can excite structural vibration.",
  },
  {
    id: 25,
    question:
      "When vortex-shedding frequency approaches a structure's natural frequency, the major concern is:",
    options: [
      "Resonant vibration",
      "Capillary rise",
      "Hydrostatic stability only",
      "Reduction of gravity",
    ],
    answer: "Resonant vibration",
    explanation:
      "Near frequency matching, flow-induced forcing can cause large-amplitude resonant structural vibration.",
  },
];