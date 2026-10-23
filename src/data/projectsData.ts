export interface ProjectItem {
  id: string;
  name: string;
  location: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Institutional' | 'Large-Scale' | 'Interiors';
  subCategory: string;
  scopeOfWork: string;
  status: 'Completed' | 'In Progress';
  projectArea: string;
  year: string;
  image: string;
  clientRequirement: string;
  duration: string;
  highlights: string[];
  scopeBreakdown: {
    stage: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export interface ProjectCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  subTypes: string[];
  keyStrengths: string[];
  typicalScale: string;
}

export const HERO_IMAGE = '/src/assets/images/hero_construction_architecture_1791959479841.jpg';
export const VILLA_IMAGE = '/src/assets/images/project_luxury_villa_1791959479655.jpg';
export const OFFICE_IMAGE = '/src/assets/images/project_corporate_office_1791959480333.jpg';
export const INTERIOR_IMAGE = '/src/assets/images/project_interior_execution_1791959480280.jpg';
export const INDUSTRIAL_IMAGE = '/src/assets/images/project_industrial_facility_1791959480572.jpg';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: 'residential',
    name: 'Residential',
    tagline: 'Private sanctuaries built with structural permanence and bespoke finishes',
    description: 'From sprawling luxury villas and independent multi-storey bungalows to gated premium communities, we bring architectural vision into physical form with master craftsmanship.',
    iconName: 'Home',
    subTypes: [
      'Luxury Villas',
      'Independent Houses',
      'Premium Residences',
      'Multi-Storey Homes',
      'Apartment Developments'
    ],
    keyStrengths: ['Earthquake-Resistant RCC Framing', 'Custom Teak & Hardwood Joinery', 'Smart Home Automation Integration', 'Rainwater Harvesting Systems'],
    typicalScale: '3,500 – 45,000 sq.ft'
  },
  {
    id: 'commercial',
    name: 'Commercial',
    tagline: 'High-performance commercial assets optimized for business velocity',
    description: 'Corporate headquarters, high-street retail showrooms, dining venues, and mixed-use complexes engineered for heavy foot traffic, durability, and tenant satisfaction.',
    iconName: 'Building2',
    subTypes: [
      'Corporate Offices',
      'Retail & Showrooms',
      'Commercial Buildings',
      'Restaurants & Hospitality',
      'Mixed-Use Developments'
    ],
    keyStrengths: ['Structural Steel & Glazing Facades', 'High-Traffic Fire Safety Compliance', 'Acoustic Floor Isolation', 'Energy-Efficient HVAC Routing'],
    typicalScale: '15,000 – 180,000 sq.ft'
  },
  {
    id: 'industrial',
    name: 'Industrial',
    tagline: 'Precision engineered industrial facilities & logistics hubs',
    description: 'Heavy manufacturing plants, clear-span logistics warehouses, temperature-controlled facilities, and industrial civil works built for uninterrupted industrial workflows.',
    iconName: 'Factory',
    subTypes: [
      'Industrial Buildings',
      'Warehouses & Logistics Hubs',
      'Manufacturing Facilities',
      'Industrial Civil Works'
    ],
    keyStrengths: ['Laser-Screened Super-Flat Concrete Floors', 'Heavy Gantry & EOT Crane Supports', 'High-Bay Ventilation & Daylight Harvesting', 'Explosion-Proof Electrical Substations'],
    typicalScale: '25,000 – 350,000 sq.ft'
  },
  {
    id: 'institutional',
    name: 'Institutional',
    tagline: 'Enduring social infrastructure for learning, healthcare & community',
    description: 'State-of-the-art schools, university wings, clinical healthcare centers, and civic community centers executed with stringent hygiene, safety, and acoustic standards.',
    iconName: 'GraduationCap',
    subTypes: [
      'Educational Buildings',
      'Healthcare Facilities',
      'Institutional Projects',
      'Community Buildings'
    ],
    keyStrengths: ['NABH / Healthcare MEP Protocols', 'Vibration-Damped Labs', 'Universal Barrier-Free Accessibility', 'Durable High-Wear Finishes'],
    typicalScale: '20,000 – 120,000 sq.ft'
  },
  {
    id: 'large-scale',
    name: 'Large-Scale Developments',
    tagline: 'Master-planned developments & heavy infrastructure coordination',
    description: 'Integrated residential townships, tech campus developments, multi-acre civil earthworks, retaining walls, and internal arterial road & utility networks.',
    iconName: 'Landmark',
    subTypes: [
      'Residential Developments',
      'Commercial Developments',
      'Large Building Projects',
      'Infrastructure & Civil Works'
    ],
    keyStrengths: ['Heavy Deep Excavation & Piling', 'Integrated Sub-surface Utility Corridors', 'Dedicated On-Site Batching & QA Testing', 'Strict Primavera/MS Project Milestones'],
    typicalScale: '50,000 – 500,000+ sq.ft'
  },
  {
    id: 'interiors',
    name: 'Interiors',
    tagline: 'Turnkey interior execution uniting aesthetics and functional precision',
    description: 'Full-spectrum interior fit-outs for luxury residences and corporate headquarters, blending bespoke millwork, architectural lighting, acoustics, and mechanical coordination.',
    iconName: 'Layers',
    subTypes: [
      'Luxury Residential Interiors',
      'Corporate Interiors',
      'Office Fit-Outs',
      'Commercial Interiors',
      'Complete Interior Execution'
    ],
    keyStrengths: ['Factory-Finished Modular Joinery', 'Architectural Acoustic Wall Panel Systems', 'Precision Italian Marble Inlays', 'Coordinated Concealed MEP Integration'],
    typicalScale: '2,500 – 60,000 sq.ft'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'apex-residence',
    name: 'The Verve Sanctuary Villa',
    location: 'Bengaluru (Indiranagar / Koramangala)',
    category: 'Residential',
    subCategory: 'Luxury Villa',
    scopeOfWork: 'Complete Civil Construction + Turnkey Luxury Interiors + Landscaping',
    status: 'Completed',
    projectArea: '12,500 sq.ft',
    year: '2025',
    image: VILLA_IMAGE,
    clientRequirement: 'Construct a multi-generational sustainable luxury residence with exposed concrete cantilevers, double-height living spaces, integrated plunge pool, and natural timber louvers.',
    duration: '14 Months',
    highlights: [
      'Post-tensioned cantilevered concrete deck extending 4.2 meters without columns',
      'Double-glazed low-E thermal break windows reducing HVAC load by 32%',
      'Integrated solar microgrid and 10,000L rainwater conservation reservoir',
      'Custom imported teak louvers for passive sun-shading and natural ventilation'
    ],
    scopeBreakdown: [
      { stage: 'Planning', description: 'Soil bearing test, structural load simulation, architectural coordination and local authority approvals.' },
      { stage: 'Civil', description: 'Deep raft foundation, seismic zone II compliant RCC frame, AAC blockwork masonry.' },
      { stage: 'Structural', description: 'Monolithic post-tensioned slabs with exposed fair-faced concrete finish.' },
      { stage: 'MEP', description: 'Concealed CPVC/UPVC acoustic plumbing, automated central VRV air conditioning, 3-phase electrical panel.' },
      { stage: 'Interiors', description: 'Italian Botticino marble flooring, bespoke fluted oak paneling, concealed magnetic track lighting.' },
      { stage: 'Finishing', description: 'Anti-fungal exterior textured silicone coating, waterproof terrace insulation membranes.' },
      { stage: 'Handover', description: 'Defect-free snag audit, comprehensive MEP asset manual, and 5-year structural warranty documentation.' }
    ],
    specifications: [
      { label: 'Built-up Area', value: '12,500 sq.ft' },
      { label: 'Levels', value: 'G + 2 Floors + Rooftop Lounge' },
      { label: 'Structure', value: 'M30 Grade RCC Framed Structure' },
      { label: 'Finishes', value: 'Imported Marble, Burma Teak, Quartz' }
    ]
  },
  {
    id: 'novus-tech-park',
    name: 'Novus Enterprise Corporate Campus',
    location: 'Bengaluru (Outer Ring Road / Bellandur)',
    category: 'Commercial',
    subCategory: 'Corporate Offices',
    scopeOfWork: 'Turnkey Shell & Core Civil Construction + Curtain Wall Glazing + MEP',
    status: 'Completed',
    projectArea: '88,000 sq.ft',
    year: '2024',
    image: OFFICE_IMAGE,
    clientRequirement: 'Deliver an international Grade-A commercial building designed for global tech enterprises with high ceiling heights, open-span floor plates, and IGBC Gold sustainability compliance.',
    duration: '18 Months',
    highlights: [
      '14-meter clear span column grid enabling flexible open-plan enterprise desking',
      'Unitized double-glazed facade with acoustic rating of STC 42',
      'Advanced building management system (BMS) with automated energy optimization',
      'Dual multi-tier basement parking for 180 cars with electric vehicle charging stations'
    ],
    scopeBreakdown: [
      { stage: 'Planning', description: '3D BIM coordination, geotechnical survey, traffic flow modeling, and Karnataka fire safety clearance.' },
      { stage: 'Civil', description: 'Secant pile shoring wall, deep basement excavation, M35 grade high-performance concrete frame.' },
      { stage: 'Structural', description: 'Cast-in-situ composite steel and concrete beams with post-tensioned flat slabs.' },
      { stage: 'MEP', description: 'High-efficiency water-cooled chillers, dual 1000kVA DG sync sets, wet riser fire hydrant systems.' },
      { stage: 'Interiors', description: 'Triple-height reception atrium with bookmatched statuario marble and acoustic timber baffles.' },
      { stage: 'Finishing', description: 'Thermal insulated roof membrane with reflective SRI 104 solar tiles.' },
      { stage: 'Handover', description: 'Full commissioning of BMS, fire NOC handover, and tenant fit-out guidelines delivery.' }
    ],
    specifications: [
      { label: 'Total Built-up Area', value: '88,000 sq.ft' },
      { label: 'Floors', value: '2 Basements + Ground + 5 Floors' },
      { label: 'Certification', value: 'IGBC Gold Rated Specification' },
      { label: 'Facade', value: 'High Performance DGU Glass Facade' }
    ]
  },
  {
    id: 'nexus-logistics-hub',
    name: 'Apex Industrial Hub & Warehouse',
    location: 'Bengaluru Industrial Corridor (Hosur Road)',
    category: 'Industrial',
    subCategory: 'Manufacturing Facilities',
    scopeOfWork: 'PEB Structural Steel Erection + Heavy Industrial Flooring + Civil Works',
    status: 'Completed',
    projectArea: '145,000 sq.ft',
    year: '2024',
    image: INDUSTRIAL_IMAGE,
    clientRequirement: 'Engineer a modern manufacturing plant and fulfillment center with laser-screeded FM2 flooring, 12-meter clear height, and heavy trailer loading docks.',
    duration: '11 Months',
    highlights: [
      'Heavy-duty FM2 grade laser screed flooring with abrasion resistance for heavy forklifts',
      'Pre-engineered high-tensile steel portal frame with 36-meter clear span',
      '8 automated hydraulic dock levelers with insulated sectional overhead doors',
      'Integrated industrial storm-drain network handling 100mm/hr cloudburst volume'
    ],
    scopeBreakdown: [
      { stage: 'Planning', description: 'Geotechnical load testing, structural wind engineering analysis, industrial zoning permissions.' },
      { stage: 'Civil', description: 'Heavy isolated footings, reinforced grade beams, 200mm M30 grade steel-fiber reinforced floor.' },
      { stage: 'Structural', description: 'PEB steel superstructure with galvanized zinc-aluminum roof sheeting and skylight panels.' },
      { stage: 'MEP', description: 'High-bay LED lighting, HVLS industrial ceiling fans, NFPA-compliant sprinkler grid.' },
      { stage: 'Interiors', description: 'Administrative two-floor office pod with modular partition systems and meeting rooms.' },
      { stage: 'Finishing', description: 'Epoxy polyurethane perimeter sealants and heavy-duty bollard installation.' },
      { stage: 'Handover', description: 'Floor flatness TR34 compliance report, crane certification, and statutory occupancies.' }
    ],
    specifications: [
      { label: 'Floor Space', value: '145,000 sq.ft' },
      { label: 'Clear Height', value: '12.0 Meters at Eaves' },
      { label: 'Floor Capacity', value: '7.5 Metric Tons / sq.meter' },
      { label: 'Loading Docks', value: '8 Hydraulic Loading Bays' }
    ]
  },
  {
    id: 'residences-interior-fitout',
    name: 'Zenith Corporate HQ & Executive Suites',
    location: 'Bengaluru (MG Road / Central Business District)',
    category: 'Interiors',
    subCategory: 'Corporate Interiors',
    scopeOfWork: 'Complete Turnkey Corporate Interior Execution & MEP Fit-Out',
    status: 'Completed',
    projectArea: '28,000 sq.ft',
    year: '2025',
    image: INTERIOR_IMAGE,
    clientRequirement: 'Execution of a premier executive headquarters encompassing boardrooms, collaborative zones, wellness lounges, and executive private suites with bespoke acoustics.',
    duration: '6 Months',
    highlights: [
      'Architectural timber paneling with hidden flush doors and integrated LED linears',
      'Acoustic ceiling baffles achieving NRC 0.85 across boardrooms and focus pods',
      'Complete mechanical and lighting automation with preset ambient scenes',
      'Italian Statuario marble flooring in reception and executive dining pavilion'
    ],
    scopeBreakdown: [
      { stage: 'Planning', description: 'Shop drawings review, acoustic mapping, MEP clash resolution in Revit 3D.' },
      { stage: 'Civil', description: 'Drywall partitioning with double-layer gypsum and acoustic mineral wool insulation.' },
      { stage: 'Structural', description: 'Secondary ceiling unistrut grid supporting heavy custom acoustic baffles.' },
      { stage: 'MEP', description: 'VAV diffusers, addressable DALI lighting control, under-floor raceway cable management.' },
      { stage: 'Interiors', description: 'Custom architectural millwork, veneer wall cladding, and curved glass demising walls.' },
      { stage: 'Finishing', description: 'Zero-VOC micro-cement finishes, bespoke brass ironmongery, and deep-clean hand-off.' },
      { stage: 'Handover', description: 'Acoustic verification testing, operations staff training, and comprehensive warranty binder.' }
    ],
    specifications: [
      { label: 'Floor Area', value: '28,000 sq.ft' },
      { label: 'Capacity', value: '240 Workstations + 12 Conference Suites' },
      { label: 'Acoustics', value: 'STC 50 Meeting Partitions' },
      { label: 'Scope', value: 'Design Coordination & Complete Execution' }
    ]
  },
  {
    id: 'horizon-development',
    name: 'Veda Horizon Mixed-Use Development',
    location: 'North Bengaluru (Hebbal / Airport Corridor)',
    category: 'Large-Scale',
    subCategory: 'Commercial & Mixed-Use Developments',
    scopeOfWork: 'Civil Infrastructure, Superstructure RCC, Turnkey Finishing',
    status: 'In Progress',
    projectArea: '220,000 sq.ft',
    year: '2026',
    image: HERO_IMAGE,
    clientRequirement: 'Multi-tower commercial and high-end residential complex featuring retail podium, corporate offices, rooftop clubhouse, and central landscaped piazza.',
    duration: '24 Months',
    highlights: [
      'Twin 14-storey towers connected by a skybridge at Level 9',
      'Aluform monolithic aluminum formwork system accelerating casting cycles to 8 days per floor',
      'Zero-discharge green campus with on-site greywater treatment and reuse for landscaping',
      'Comprehensive project management utilizing Primavera P6 and daily drone photogrammetry'
    ],
    scopeBreakdown: [
      { stage: 'Planning', description: 'Environmental clearance, master site grading, deep shoring design, utility masterplan.' },
      { stage: 'Civil', description: 'Deep diaphragm wall shoring, mass concrete raft casting with chilled water curing.' },
      { stage: 'Structural', description: 'Rapid cycle Aluform construction with high-strength self-compacting concrete.' },
      { stage: 'MEP', description: 'Integrated central chiller plant, dual supply high-voltage substation, pressurized stairwells.' },
      { stage: 'Interiors', description: 'High-volume podium lobbies, curated elevator foyers, premium retail corridors.' },
      { stage: 'Finishing', description: 'Terrace waterproofing with polyurethane elastomeric coating and granite hardscaping.' },
      { stage: 'Handover', description: 'Phased OC handover plan with structured quality validation check-sheets.' }
    ],
    specifications: [
      { label: 'Built-up Area', value: '220,000 sq.ft' },
      { label: 'Configuration', value: '2 Towers (B+G+14 Floors) + Retail Podium' },
      { label: 'Formwork', value: 'Mivan / Monolithic Aluminum System' },
      { label: 'Timeline', value: 'Target Q3 2026 Completion' }
    ]
  },
  {
    id: 'medicare-institute',
    name: 'St. Jude Specialized Healthcare Center',
    location: 'Bengaluru (Whitefield)',
    category: 'Institutional',
    subCategory: 'Healthcare Facilities',
    scopeOfWork: 'Civil, Heavy MEP, Cleanroom Isolation, Turnkey Hospital Infrastructure',
    status: 'Completed',
    projectArea: '65,000 sq.ft',
    year: '2024',
    image: OFFICE_IMAGE,
    clientRequirement: 'Construct a 100-bed specialty surgical hospital with sterile operating suites, intensive care units, imaging suites (MRI/CT), and uninterrupted power backup.',
    duration: '16 Months',
    highlights: [
      'Modular cleanroom operating theaters with HEPA laminar air flow and anti-static vinyl flooring',
      'Vibration-damped structural slab for MRI and precision imaging diagnostics',
      'Medical gas pipeline system (MGPS) with automated digital telemetry monitoring',
      'Redundant Tier-3 electrical architecture with dual emergency generators'
    ],
    scopeBreakdown: [
      { stage: 'Planning', description: 'AERB radiation shielding approval, hospital MEP workflow design, clinical clash modeling.' },
      { stage: 'Civil', description: 'Heavy lead-lined radiation shielding walls, reinforced concrete bunkers, anti-microbial coved flooring.' },
      { stage: 'Structural', description: 'High-strength structural slabs engineered for vibration mitigation under sensitive imaging gear.' },
      { stage: 'MEP', description: '100% fresh air AHUs with HEPA filtration, medical vacuum systems, RO purified water grid.' },
      { stage: 'Interiors', description: 'Hermetically sealed doors, anti-bacterial wall cladding, nurse stations, patient recovery suites.' },
      { stage: 'Finishing', description: 'Epoxy resin coatings, seamless wall protections, impact guard rails.' },
      { stage: 'Handover', description: 'Cleanroom ISO certification, AERB sign-off, and staff facility orientation.' }
    ],
    specifications: [
      { label: 'Facility Area', value: '65,000 sq.ft' },
      { label: 'Beds', value: '100-Bed Advanced Surgical Facility' },
      { label: 'Operating Theaters', value: '4 Modular Laminar Flow OTs' },
      { label: 'Compliance', value: 'NABH and AERB Radiation Safety Standards' }
    ]
  }
];

export const CAPABILITIES = [
  {
    number: '01',
    title: 'Civil Construction',
    summary: 'Foundation, masonry, RCC, plastering and structural works.',
    details: 'Comprehensive civil execution from soil excavation, deep piling, and retaining shoring to grade beams, brick masonry, AAC blockwork, and precision cement plastering. We uphold stringent mix designs and curing disciplines to ensure structural integrity.',
    deliverables: ['Excavation & Shoring', 'Raft & Pile Foundations', 'AAC & Solid Block Masonry', 'Engineered Plastering & Screeding']
  },
  {
    number: '02',
    title: 'Structural Works',
    summary: 'RCC structures, structural coordination and execution.',
    details: 'Specialized structural framing in reinforced cement concrete (RCC), post-tensioned (PT) flat slabs, structural steel trusses, and composite framing. Coordinated rigorously with licensed structural consultants.',
    deliverables: ['M30–M45 Grade RCC Framing', 'Post-Tensioned Slabs', 'Structural Steel Fabrication', 'Seismic Zone Compliance']
  },
  {
    number: '03',
    title: 'MEP Services',
    summary: 'Electrical, plumbing, HVAC and associated services.',
    details: 'End-to-end building services engineered for longevity and fault-free operation. Covering 3-phase high-voltage power distribution, low-voltage data networks, acoustic drainage, hydropneumatic pumping, VRV air conditioning, and fire safety systems.',
    deliverables: ['HV & LV Electrical Substations', 'Acoustic Drainage & Water Treatment', 'VRV / Chilled Water HVAC Systems', 'Fire Hydrant & Sprinkler Networks']
  },
  {
    number: '04',
    title: 'Interior Execution',
    summary: 'Complete residential and commercial interior execution.',
    details: 'Precision interior fit-outs integrating bespoke architectural joinery, modular factory cabinetry, acoustic wall systems, Italian marble and hardwood installations, and smart ambient lighting automation.',
    deliverables: ['Custom Millwork & Veneer Paneling', 'Acoustic Ceilings & Partitions', 'Natural Stone & Wood Inlays', 'Bespoke Lighting & Automation']
  },
  {
    number: '05',
    title: 'Turnkey Projects',
    summary: 'Single-point responsibility from planning to handover.',
    details: 'Clients avoid the headache of managing 15 different subcontractors. We assume complete statutory, architectural, civil, mechanical, and finishing accountability under a unified contract with clear budgets and timelines.',
    deliverables: ['Unified Contract Management', 'Fixed-Cost Budget Guarantee', 'Milestone-Based Scheduling', 'Turnkey Key Handover Guarantee']
  },
  {
    number: '06',
    title: 'Project Management',
    summary: 'Planning, scheduling, coordination, monitoring and execution.',
    details: 'Professional PMO (Project Management Office) governance deploying Primavera and MS Project schedules, daily digital site progress monitoring, material supply chain logistics, and transparent weekly client dashboards.',
    deliverables: ['Critical Path Method (CPM) Schedules', 'Procurement & Vendor Logistics', 'Transparent Weekly Progress Reports', 'Dedicated On-Site Project Managers']
  },
  {
    number: '07',
    title: 'Renovation & Remodeling',
    summary: 'Upgrades, refurbishment and transformation of existing spaces.',
    details: 'Structural retrofitting, MEP overhaul, space reconfiguration, facade modernization, and contemporary interior revamp for dated residential, corporate, and heritage structures.',
    deliverables: ['Structural Strengthening & Retrofitting', 'Live-Site Phased Execution', 'Facade & Fenestration Modernization', 'Spatial Reconfiguration']
  },
  {
    number: '08',
    title: 'Large-Scale Projects',
    summary: 'Coordinated execution for complex commercial, institutional and development projects.',
    details: 'Multi-acre master-planned developments, tech campuses, high-rise residential towers, and civic facilities demanding synchronized heavy machinery, on-site batching, and high-volume workforce management.',
    deliverables: ['Multi-Tower Logistics Management', 'On-Site Quality Testing Labs', 'High-Volume Mechanized Pouring', 'Statutory Occupancy Facilitation']
  }
];

export const TURNKEY_STEPS = [
  {
    step: '01',
    name: 'Consultation',
    headline: 'Understand your vision, requirements and objectives.',
    desc: 'We conduct comprehensive site visits, evaluate spatial needs, review client briefs, assess budgetary expectations, and establish project milestones.',
    outcomes: ['Feasibility Analysis', 'Preliminary Budget Estimate', 'Site Survey & Soil Evaluation']
  },
  {
    step: '02',
    name: 'Planning & Design Coordination',
    headline: 'Coordinate architectural, structural and technical requirements.',
    desc: 'Synchronizing architectural layouts with structural engineering calculations, 3D BIM clash detection, MEP schematics, and municipal approval dossiers.',
    outcomes: ['Clash-Free Working Drawings', 'Bill of Quantities (BOQ)', 'Statutory Sanctions Dossier']
  },
  {
    step: '03',
    name: 'Construction',
    headline: 'Execute civil and structural works.',
    desc: 'Mobilizing on-site engineers, batching concrete, erecting reinforced steel skeletons, masonry, and envelope structures with unyielding quality control.',
    outcomes: ['Robust Foundation & RCC Frame', 'Earthquake-Resistant Masonry', 'Daily Quality Cube Tests']
  },
  {
    step: '04',
    name: 'MEP Services',
    headline: 'Coordinate electrical, plumbing and other building services.',
    desc: 'Concealed conduit routing, distribution panels, acoustic plumbing lines, HVAC ductwork, fire suppression grids, and smart building wiring.',
    outcomes: ['Pressure-Tested Plumbing Lines', 'Fault-Free Electrical Distribution', 'Certifiable Fire Safety Infrastructure']
  },
  {
    step: '05',
    name: 'Interiors',
    headline: 'Complete interior execution and finishing.',
    desc: 'Executing custom joinery, drywall acoustic partitions, premium stone and tile installations, false ceiling profiles, and bespoke paint finishes.',
    outcomes: ['Precision Wall Paneling & Millwork', 'Polished Natural Stone Floors', 'Architectural Lighting Integration']
  },
  {
    step: '06',
    name: 'Quality & Inspection',
    headline: 'Monitor workmanship and project standards.',
    desc: 'A 240-point quality audit covering alignment, water tightness, electrical continuity, acoustic damping, and paint consistency across every room.',
    outcomes: ['Comprehensive Snag Resolution', 'Third-Party Material Test Reports', 'Pre-Handover Clean & Polish']
  },
  {
    step: '07',
    name: 'Handover',
    headline: 'Deliver the completed project.',
    desc: 'Final walkthrough with client, delivery of physical and digital warranty documentation, as-built CAD drawings, and formal key handover ceremony.',
    outcomes: ['As-Built Drawings & MEP Asset Guide', '5-Year Structural Warranty', 'Official Key Handover Ceremony']
  }
];

export const SAFETY_QUALITY_ITEMS = {
  quality: [
    {
      title: 'Material Quality',
      desc: 'Selection and strict verification of certified construction materials (Fe550D TMT steel, 53-grade OPC/PPC cement, River/M-sand grading, lead-free low-VOC paints).'
    },
    {
      title: 'Workmanship',
      desc: 'Master craftsmen overseen by seasoned civil engineers ensuring 90-degree plumb walls, zero-hollow tile laying, and hairline joinery tolerances.'
    },
    {
      title: 'Site Monitoring',
      desc: 'Continuous on-site supervision with digital milestone logging, moisture-meter tests during curing, and non-destructive testing (NDT).'
    },
    {
      title: 'Process Control',
      desc: 'Structured execution checklists: pre-pour bar bending inspection, concrete slump tests, cube crushing tests at 7 & 28 days, and hydrostatic pipe pressure tests.'
    }
  ],
  safety: [
    {
      title: 'Safe Work Practices',
      desc: 'Promoting responsible working practices on all project sites with 100% PPE compliance (helmets, harness lanyards, steel-toe boots, eye protection).'
    },
    {
      title: 'Site Discipline',
      desc: 'Maintaining organized, debris-free, well-lit, and access-controlled work environments with designated staging and material segregation yards.'
    },
    {
      title: 'Team Awareness',
      desc: 'Conducting daily morning toolbox talks (TBT), safety induction drills for all incoming personnel, and first-responder medical readiness.'
    },
    {
      title: 'Risk Management',
      desc: 'Proactively identifying site risks, executing edge-protection barricades for deep excavations, scaffolding load certificates, and fire prevention protocols.'
    }
  ]
};

export const TEAM_STRUCTURE = [
  {
    role: 'Management',
    summary: 'Strategic direction and client relationships.',
    description: 'Executive leadership with over two decades of combined infrastructure acumen, guiding company vision, investor governance, capital allocation, and high-trust client advisory.'
  },
  {
    role: 'Project Management',
    summary: 'Planning, scheduling and project coordination.',
    description: 'PMP-certified project managers orchestrating critical path schedules, material supply chains, cross-trade synchronization, and client progress reporting.'
  },
  {
    role: 'Engineering',
    summary: 'Technical supervision and execution.',
    description: 'Structural, civil, and MEP engineers verifying shop drawings, load calculations, MEP clash resolutions, and material specifications on the active work-front.'
  },
  {
    role: 'Site Management',
    summary: 'Daily site operations and workforce coordination.',
    description: 'Seasoned resident site supervisors enforcing strict safety protocols, daily construction logs, site logistics, and trade sequencing.'
  },
  {
    role: 'Skilled Workforce',
    summary: 'Experienced teams supporting quality construction and finishing.',
    description: 'Vetted masons, steel-fixers, carpenters, MEP technicians, and master polishers dedicated to exceptional craftsmanship and structural permanence.'
  }
];

export const PARTNER_PROFILES = [
  {
    id: 'architects',
    title: 'For Architects',
    tagline: 'Have a design that needs a reliable execution partner?',
    pitch: 'Anthuvann Infra & Construction partners with architectural firms to honor their design fidelity. We execute intricate geometric details, cantilevered spans, and bespoke materials without compromising your original vision.',
    flow: 'Architecture → Construction → Completion',
    benefits: [
      'Zero deviation from architectural drawings',
      'Value engineering that preserves aesthetic intent',
      'Dedicated technical POC for shop drawing review',
      'Transparent material sampling and mock-up approvals'
    ]
  },
  {
    id: 'interior-designers',
    title: 'For Interior Designers',
    tagline: 'Focus on design. Let our team handle execution.',
    pitch: 'We take the headache of site civil modifications, MEP rerouting, and vendor wrangling off your desk. Focus on concepts, palettes, and client styling while our skilled site crews execute with millimetric precision.',
    flow: 'Concept & 3D → Precision Site Execution → Client Delight',
    benefits: [
      'Factory-finished modular joinery and on-site fit-out',
      'Full coordination for MEP, plumbing, and architectural lighting',
      'Single-source accountability for civil masonry and drywalls',
      'On-time delivery ensuring smooth client handovers'
    ]
  },
  {
    id: 'developers',
    title: 'For Developers',
    tagline: 'Looking for a construction partner for your next development?',
    pitch: 'We provide coordinated, scalable construction and project execution for residential townships, gated communities, and commercial complexes, engineered to meet strict delivery milestones and statutory compliance.',
    flow: 'Master Plan → Accelerated Construction → Commercial Handover',
    benefits: [
      'Rapid casting cycles with modern formwork systems',
      'Strict Primavera scheduling and budget containment',
      'High safety index meeting institutional developer mandates',
      'Phased occupancy certificate (OC) facilitation support'
    ]
  },
  {
    id: 'corporate-clients',
    title: 'For Corporate Clients',
    tagline: 'Planning a new office, commercial facility or expansion?',
    pitch: 'Our team delivers rapid turnkey office fit-outs, commercial facility expansions, and structural retrofitting with minimal operational disruption, backed by complete compliance and warranty documentation.',
    flow: 'Briefing → Fast-Track Fit-Out → Flawless Handover',
    benefits: [
      'Fast-track delivery with zero operational business disruption',
      'IGBC / LEED sustainability and energy-efficient systems',
      'Complete statutory fire, electrical, and safety approvals',
      'Post-handover facility maintenance and defect liability support'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'End-to-End Solutions',
    desc: 'Architecture coordination, civil construction, MEP engineering, and luxury interiors managed under one unified roof.'
  },
  {
    title: 'Professional Execution',
    desc: 'Structured planning, clash-free BIM coordination, and disciplined site protocols run by seasoned engineers.'
  },
  {
    title: 'Quality Focus',
    desc: 'Rigorous 240-point inspection checklists, lab-tested materials, and zero-compromise structural standards.'
  },
  {
    title: 'Transparent Communication',
    desc: 'Regular digitized milestone reports, itemized billing, and direct access to your dedicated Project Manager.'
  },
  {
    title: 'Project Management',
    desc: 'Critical path scheduling, proactive risk mitigation, and synchronized resource deployment for on-time delivery.'
  },
  {
    title: 'Scalable Capability',
    desc: 'Demonstrated execution capacity across bespoke independent villas, multi-storey commercial hubs, and multi-acre industrial parks.'
  },
  {
    title: 'Client-Centric Approach',
    desc: 'Every project begins with deep listening to understand your business objectives, lifestyle needs, and long-term asset value.'
  }
];


export const COMPANY_CONTACT = {
  name: 'Anthuvann Infra & Construction',
  phone: '+91 98443 92232',
  phoneSecondary: '+91 77603 84188',
  phoneDisplay: '+91 98443 92232 / +91 77603 84188',
  email: 'anthuvanninfra@gmail.com',
  address: 'Bengaluru, Karnataka, India',
  whatsappNumber: '919844392232',
  whatsappNumberSecondary: '917760384188',
  hours: 'Mon – Sat: 8:30 AM – 7:00 PM IST'
};

