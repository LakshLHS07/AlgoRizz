export const SCHEMES_DATABASE = [
  {
    id: "pm-kisan",
    name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    category: "Agriculture & Rural",
    ministry: "Ministry of Agriculture and Farmers Welfare",
    benefitAmount: "₹6,000 per year (in 3 equal installments)",
    benefitType: "Direct Bank Transfer (DBT)",
    targetGroup: "Small & Marginal Landholding Farmers",
    summary: "Financial support scheme to help farmers procure agricultural inputs and manage domestic needs.",
    description: "PM Kisan is a Central Sector scheme with 100% funding from Government of India. Under the scheme an income support of ₹6,000/- per year in three equal installments is provided to all land-holding farmer families.",
    tags: ["farmer", "agriculture", "land", "rural", "income support", "crop", "seeds", "fertilizer"],
    eligibility: {
      minAge: 18,
      maxAge: 75,
      genders: ["all", "male", "female", "other"],
      occupations: ["farmer", "agricultural laborer"],
      maxIncome: 300000,
      states: ["All"],
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      ruralOnly: true,
      requiresLand: true,
      specialConditions: "Must own cultivable agricultural land. Institutional landholders and income tax payers are excluded."
    },
    documents: [
      { name: "Aadhaar Card", required: true, desc: "Linked to active bank account" },
      { name: "Land Ownership Records (7/12, Khatauni)", required: true, desc: "Proof of cultivable landholding" },
      { name: "Bank Account Passbook", required: true, desc: "With IFSC code and active DBT enablement" },
      { name: "Citizenship / Domicile Certificate", required: false, desc: "State residence verification" }
    ],
    applicationSteps: [
      "Visit the official PM-KISAN portal (pmkisan.gov.in) or your local Common Service Center (CSC).",
      "Click on 'New Farmer Registration' under Farmers Corner.",
      "Enter Aadhaar number, state, and captcha to proceed.",
      "Fill in land record details (Khata number, Khasra number, area in Hectares).",
      "Upload scanned copy of land document and submit e-KYC via Aadhaar OTP."
    ],
    officialUrl: "https://pmkisan.gov.in",
    deadline: "Open All Year"
  },
  {
    id: "pm-svanidhi",
    name: "PM SVANidhi (Street Vendor's AtmaNirbhar Nidhi)",
    category: "Business & Micro-Credit",
    ministry: "Ministry of Housing and Urban Affairs",
    benefitAmount: "Working Capital Collateral-free Loan up to ₹50,000",
    benefitType: "Subsidized Loan & Digital Cashback",
    targetGroup: "Urban & Peri-Urban Street Vendors and Hawkers",
    summary: "Affordable working capital loans to street vendors to resume their livelihoods post-disruptions.",
    description: "A special micro-credit facility for street vendors providing initial working capital loan of ₹10,000, progressing to ₹20,000 and ₹50,000 with 7% interest subsidy on timely repayment.",
    tags: ["street vendor", "hawker", "loan", "working capital", "shopkeeper", "self employed", "urban", "micro business"],
    eligibility: {
      minAge: 18,
      maxAge: 65,
      genders: ["all", "male", "female", "other"],
      occupations: ["street vendor", "artisan", "self-employed", "daily wage"],
      maxIncome: 250000,
      states: ["All"],
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      urbanOnly: true,
      requiresLand: false,
      specialConditions: "Engaged in vending in urban areas on or before the qualifying date with Vending Certificate or Recommendation Letter."
    },
    documents: [
      { name: "Aadhaar Card / Voter ID", required: true, desc: "Identity proof" },
      { name: "Certificate of Vending / ID Card", required: true, desc: "Issued by Urban Local Body (ULB) / Town Vending Committee" },
      { name: "Bank Account Details", required: true, desc: "Active savings account" },
      { name: "Letter of Recommendation (LoR)", required: false, desc: "If identity card is not yet issued by ULB" }
    ],
    applicationSteps: [
      "Check vending validation status on the PMSVANidhi portal.",
      "Approach nearest Lending Institution or Banking Correspondent (BC) / CSC.",
      "Submit application with Aadhaar and ULB reference number.",
      "Get collateral-free loan disbursed directly into bank account in 7-10 days."
    ],
    officialUrl: "https://pmsvanidhi.mohua.gov.in",
    deadline: "Ongoing Scheme"
  },
  {
    id: "ayushman-bharat",
    name: "Ayushman Bharat - PM-JAY (Jan Arogya Yojana)",
    category: "Healthcare & Insurance",
    ministry: "Ministry of Health and Family Welfare / NHA",
    benefitAmount: "Cashless Health Cover up to ₹5,00,000 per family/year",
    benefitType: "Secondary & Tertiary Hospitalization Cover",
    targetGroup: "Bottom 40% Vulnerable & Low-Income Families",
    summary: "World's largest government-funded health assurance scheme providing free inpatient healthcare.",
    description: "Ayushman Bharat PM-JAY provides a cover of ₹5 lakh per family per year for secondary and tertiary care hospitalization across public and empaneled private hospitals in India.",
    tags: ["health", "hospital", "medical", "insurance", "treatment", "medicine", "low income", "bpl", "surgery"],
    eligibility: {
      minAge: 0,
      maxAge: 100,
      genders: ["all", "male", "female", "other"],
      occupations: ["all", "farmer", "laborer", "domestic worker", "unemployed", "street vendor"],
      maxIncome: 200000,
      states: ["All"],
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      requiresLand: false,
      specialConditions: "Deprivation and occupational criteria based on SECC 2011 data, NFSA ration card holders, and seniors aged 70+ (new universal cover)."
    },
    documents: [
      { name: "Aadhaar Card", required: true, desc: "Biometric e-KYC verification" },
      { name: "Ration Card / Family ID", required: true, desc: "Proof of family membership" },
      { name: "Active Mobile Number", required: true, desc: "For OTP verification" }
    ],
    applicationSteps: [
      "Check eligibility online at beneficiary.nha.gov.in or download the Ayushman App.",
      "Login with mobile number and verify with OTP.",
      "Search by Ration Card, Aadhaar Number, or Family ID.",
      "Complete e-KYC with Aadhaar Face/OTP/Fingerprint auth.",
      "Download the digital Ayushman Golden Card for instant hospital admission."
    ],
    officialUrl: "https://beneficiary.nha.gov.in",
    deadline: "Universal for Eligible Groups"
  },
  {
    id: "post-matric-sc-st-scholarship",
    name: "Post-Matric Scholarship for SC/ST/OBC Students",
    category: "Education & Youth",
    ministry: "Ministry of Social Justice and Empowerment / Tribal Affairs",
    benefitAmount: "Full Tuition Fee Waiver + ₹1,200 to ₹4,000/month Maintenance",
    benefitType: "Direct Education Grant",
    targetGroup: "Undergraduate, Diploma & Postgraduate Students from Reserved Categories",
    summary: "Financial assistance to underprivileged students to pursue higher and professional education.",
    description: "Complete fee reimbursement and living allowance for post-secondary education in recognized universities, medical, engineering, and ITI colleges.",
    tags: ["student", "education", "scholarship", "college", "tuition", "degree", "sc", "st", "obc", "youth"],
    eligibility: {
      minAge: 15,
      maxAge: 32,
      genders: ["all", "male", "female", "other"],
      occupations: ["student"],
      maxIncome: 250000,
      states: ["All"],
      categories: ["SC", "ST", "OBC", "EWS"],
      requiresLand: false,
      specialConditions: "Must have passed Class 10/12 and enrolled in an accredited higher educational institution."
    },
    documents: [
      { name: "Caste Certificate", required: true, desc: "Digitally verified certificate from Tehsildar/SDM" },
      { name: "Income Certificate", required: true, desc: "Annual family income less than ₹2.5 Lakh" },
      { name: "College Admission Fee Receipt", required: true, desc: "Current academic year verification" },
      { name: "Mark Sheets of Previous Exams", required: true, desc: "Class 10th/12th/Diploma" },
      { name: "Bank Passbook Linked to Aadhaar", required: true, desc: "For DBT scholarship transfer" }
    ],
    applicationSteps: [
      "Register on the National Scholarship Portal (scholarships.gov.in).",
      "Select 'Post Matric Scholarships Scheme for SC/ST Students'.",
      "Fill in student academic credentials, college institute code, and caste/income certificate numbers.",
      "Upload documents and submit to institute verification officer.",
      "Track DBT release of maintenance allowance and fee refund."
    ],
    officialUrl: "https://scholarships.gov.in",
    deadline: "Academic Cycle (Usually Oct - Jan)"
  },
  {
    id: "pm-awas-yojana-gramin",
    name: "PMAY-G (Pradhan Mantri Awaas Yojana - Gramin)",
    category: "Housing & Infrastructure",
    ministry: "Ministry of Rural Development",
    benefitAmount: "₹1,20,000 (Plains) to ₹1,30,000 (Hilly/NE) + 90 Days MGNREGA Labor",
    benefitType: "Direct Financial Grant for Pucca House Construction",
    targetGroup: "Houseless & Living in Kutcha/Dilapidated Houses in Rural Areas",
    summary: "Financial grant for building a safe, durable pucca house with toilet and electricity connection.",
    description: "Assistance to rural homeless families to construct disaster-resilient houses with basic amenities in convergence with Swachh Bharat and PM Ujjwala Yojana.",
    tags: ["house", "housing", "construction", "home", "rural", "shelter", "pucca house", "bpl", "poor"],
    eligibility: {
      minAge: 21,
      maxAge: 70,
      genders: ["all", "female", "male", "other"],
      occupations: ["all", "laborer", "farmer", "daily wage", "unemployed"],
      maxIncome: 180000,
      states: ["All"],
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      ruralOnly: true,
      requiresLand: false,
      specialConditions: "Family must not own a pucca house anywhere in India. Selection prioritized for female-headed and SC/ST households."
    },
    documents: [
      { name: "Aadhaar Card of All Adult Members", required: true, desc: "Identity & biometric verification" },
      { name: "MGNREGA Job Card Number", required: true, desc: "For 90/95 days labor wage component" },
      { name: "Bank Account Details", required: true, desc: "Single/Joint account with spouse" },
      { name: "Affidavit of No Pucca House", required: true, desc: "Self-declaration certified by Gram Panchayat" }
    ],
    applicationSteps: [
      "Beneficiary list is drafted through Gram Sabha and SECC deprivation mapping.",
      "Gram Rozgar Sevak or Panchayat Secretary registers data on AwaasSoft portal.",
      "Geo-tagging of current kutcha dwelling is captured via mobile app.",
      "Grant is released in 3 geo-tagged construction stages (Foundation, Lintel, Completion)."
    ],
    officialUrl: "https://pmayg.nic.in",
    deadline: "Continuous Target Allotment"
  },
  {
    id: "sukanya-samriddhi-yojana",
    name: "Sukanya Samriddhi Yojana (SSY)",
    category: "Women & Child Development",
    ministry: "Ministry of Finance / Department of Posts",
    benefitAmount: "High 8.2% Compound Interest + Tax-free Maturity Corpus",
    benefitType: "Government Small Savings Scheme",
    targetGroup: "Girl Children under 10 Years of Age",
    summary: "High-yield government-backed savings scheme for girl child education and marriage.",
    description: "A small deposit scheme for a girl child launched under the 'Beti Bachao Beti Padhao' campaign. Offers the highest sovereign interest rates and triple tax exemption (EEE under Section 80C).",
    tags: ["girl child", "daughter", "child", "women", "savings", "education", "marriage", "investment", "tax free"],
    eligibility: {
      minAge: 0,
      maxAge: 10,
      genders: ["female"],
      occupations: ["all", "child", "student"],
      maxIncome: 10000000,
      states: ["All"],
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      requiresLand: false,
      specialConditions: "Account can be opened by biological parents or legal guardians for a girl child before she turns 10 (maximum 2 daughters per family)."
    },
    documents: [
      { name: "Birth Certificate of Girl Child", required: true, desc: "Issued by Municipal / Panchayat authority" },
      { name: "Identity & Address Proof of Guardian", required: true, desc: "Aadhaar, PAN Card, or Passport" },
      { name: "Passport-size Photographs", required: true, desc: "Child and parent" }
    ],
    applicationSteps: [
      "Collect Form SSA-1 from any Post Office or authorized commercial bank branch.",
      "Fill in guardian and girl child details.",
      "Deposit initial opening amount (minimum ₹250).",
      "Receive SSY Passbook to track deposits and accrued annual interest."
    ],
    officialUrl: "https://www.indiapost.gov.in",
    deadline: "Before Child Turns 10"
  },
  {
    id: "pm-mudra-yojana",
    name: "PMMY (Pradhan Mantri Mudra Yojana)",
    category: "Business & Micro-Credit",
    ministry: "Ministry of Finance",
    benefitAmount: "Collateral-Free Business Loans up to ₹20,00,000",
    benefitType: "Micro & Small Enterprise Credit",
    targetGroup: "Entrepreneurs, Small Business Owners, Artisans & Shopkeepers",
    summary: "Accessible business funding across Shishu (up to ₹50k), Kishore (₹50k-₹5L), and Tarun (₹5L-₹20L) tiers.",
    description: "Enables non-corporate, non-farm small/micro enterprises to access institutional financing without the burden of providing collateral security.",
    tags: ["business", "loan", "startup", "shop", "manufacturing", "trade", "credit", "entrepreneur", "artisan"],
    eligibility: {
      minAge: 18,
      maxAge: 65,
      genders: ["all", "male", "female", "other"],
      occupations: ["self-employed", "artisan", "business owner", "street vendor", "unemployed"],
      maxIncome: 1500000,
      states: ["All"],
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      requiresLand: false,
      specialConditions: "For new or existing non-farm micro enterprise in manufacturing, trading, or service sectors."
    },
    documents: [
      { name: "Business Project Report / Proposal", required: true, desc: "Details of machinery, stock, or working capital needs" },
      { name: "KYC Documents (Aadhaar & PAN)", required: true, desc: "Identity and address proof" },
      { name: "Bank Statement (Last 6 Months)", required: true, desc: "For existing businesses or personal account" },
      { name: "Proof of Business Establishment (Udyam Registration)", required: false, desc: "MSME registration certificate" }
    ],
    applicationSteps: [
      "Prepare a simple business project plan detailing required capital.",
      "Apply online on the Udyamimitra portal (udyamimitra.in) or visit any nationalized bank.",
      "Select loan tier: Shishu, Kishore, or Tarun.",
      "Complete documentation and loan appraisal with no processing fee for Shishu."
    ],
    officialUrl: "https://www.mudra.org.in",
    deadline: "Always Open"
  },
  {
    id: "atal-pension-yojana",
    name: "Atal Pension Yojana (APY)",
    category: "Social Security & Pension",
    ministry: "Ministry of Finance / PFRDA",
    benefitAmount: "Guaranteed Monthly Pension of ₹1,000 to ₹5,000 for Life",
    benefitType: "Government Guaranteed Social Security Pension",
    targetGroup: "Unorganized Sector Workers aged 18 to 40",
    summary: "Guaranteed old-age financial security with fixed lifelong monthly income starting at age 60.",
    description: "A pension scheme focused on workers in the unorganized sector. The subscriber receives a guaranteed monthly pension after the age of 60 based on nominal monthly contributions.",
    tags: ["pension", "old age", "senior", "retirement", "unorganized worker", "monthly income", "social security"],
    eligibility: {
      minAge: 18,
      maxAge: 40,
      genders: ["all", "male", "female", "other"],
      occupations: ["all", "laborer", "driver", "farmer", "domestic worker", "artisan", "self-employed"],
      maxIncome: 400000,
      states: ["All"],
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      requiresLand: false,
      specialConditions: "Applicant must not be an income taxpayer or member of statutory social security schemes (EPFO/NPS)."
    },
    documents: [
      { name: "Aadhaar Card", required: true, desc: "Identity & e-KYC" },
      { name: "Bank Savings Account", required: true, desc: "Enabled for auto-debit of monthly pension premium" },
      { name: "Nominee Details", required: true, desc: "Spouse or dependent for continuing pension benefit" }
    ],
    applicationSteps: [
      "Visit the bank or post office branch where you have a savings account.",
      "Fill APY subscriber registration form and choose desired pension slab (₹1k to ₹5k/mo).",
      "Provide nominee details and authorize monthly auto-debit.",
      "Receive APY PRAN acknowledgement receipt."
    ],
    officialUrl: "https://www.npscra.nsdl.co.in",
    deadline: "Available up to 40 Years of Age"
  },
  {
    id: "national-widow-senior-pension",
    name: "NSAP - Indira Gandhi National Old Age & Widow Pension",
    category: "Social Security & Pension",
    ministry: "Ministry of Rural Development",
    benefitAmount: "₹1,000 to ₹3,000 per month (Central + State Top-Up)",
    benefitType: "Direct Monthly Welfare Pension",
    targetGroup: "BPL Senior Citizens (60+) and Destitute Widows (40-79)",
    summary: "Direct monthly financial assistance to destitute elderly persons, widows, and persons with disabilities.",
    description: "Component of National Social Assistance Programme providing crucial subsistence assistance to senior citizens and widows living below the poverty line.",
    tags: ["widow", "elderly", "senior citizen", "pension", "destitute", "bpl", "disability", "women", "monthly support"],
    eligibility: {
      minAge: 40,
      maxAge: 100,
      genders: ["all", "female", "male"],
      occupations: ["unemployed", "homemaker", "senior", "daily wage"],
      maxIncome: 120000,
      states: ["All"],
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      requiresLand: false,
      specialConditions: "Must belong to a household living Below Poverty Line (BPL) or possessing valid BPL/Antyodaya Ration Card."
    },
    documents: [
      { name: "BPL Ration Card / Antyodaya Card", required: true, desc: "Proof of poverty threshold" },
      { name: "Age Proof / Aadhaar", required: true, desc: "Proof of age 60+ for old-age, or 40+ for widow pension" },
      { name: "Death Certificate of Husband", required: false, desc: "Mandatory for widow pension category" },
      { name: "Bank / Post Office Passbook", required: true, desc: "For direct monthly pension credit" }
    ],
    applicationSteps: [
      "Submit application to District Social Welfare Officer, Block Development Officer (BDO), or Gram Panchayat.",
      "Verification conducted by local revenue officer / Patwari.",
      "Sanction order issued and monthly pension disbursed directly into bank account."
    ],
    officialUrl: "https://nsap.nic.in",
    deadline: "Continuous Open Enrollment"
  },
  {
    id: "pm-fasal-bima-yojana",
    name: "PMFBY (Pradhan Mantri Fasal Bima Yojana)",
    category: "Agriculture & Rural",
    ministry: "Ministry of Agriculture and Farmers Welfare",
    benefitAmount: "Comprehensive Crop Loss Insurance with up to 100% Claim Settlement",
    benefitType: "Agricultural Risk & Calamity Protection",
    targetGroup: "All Farmers growing notified crops in notified areas",
    summary: "Comprehensive crop insurance shield against non-preventable natural risks, drought, floods, and pests.",
    description: "Provides financial support to farmers suffering crop loss/damage arising out of unforeseen natural calamities. Very low premium rate (1.5% for Rabi, 2% for Kharif, 5% for commercial/horticultural crops).",
    tags: ["crop insurance", "farmer", "drought", "flood", "agriculture", "pest attack", "harvest", "compensation"],
    eligibility: {
      minAge: 18,
      maxAge: 75,
      genders: ["all", "male", "female", "other"],
      occupations: ["farmer", "tenant farmer", "sharecropper"],
      maxIncome: 1000000,
      states: ["All"],
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      ruralOnly: true,
      requiresLand: true,
      specialConditions: "Applicable to both loanee and non-loanee farmers growing notified crops."
    },
    documents: [
      { name: "Land Possession Certificate / Sowing Certificate", required: true, desc: "Proof of crop sown in current season" },
      { name: "Aadhaar Card", required: true, desc: "Farmer identity" },
      { name: "Bank Passbook with IFSC", required: true, desc: "Claim settlement account" },
      { name: "Tenancy Agreement", required: false, desc: "For tenant farmers / sharecroppers" }
    ],
    applicationSteps: [
      "Visit PMFBY national portal (pmfby.gov.in) or nearest CSC / Bank branch.",
      "Register before cut-off date for Kharif/Rabi seasons.",
      "Pay nominal subsidized premium (1.5% - 2%).",
      "Report crop damage within 72 hours via Crop Insurance Mobile App in case of localized calamity."
    ],
    officialUrl: "https://pmfby.gov.in",
    deadline: "Seasonal (Kharif: July 31, Rabi: Dec 31)"
  },
  {
    id: "mission-shakti-shg",
    name: "Mission Shakti (National Rural Livelihoods - SHG)",
    category: "Women & Child Development",
    ministry: "Ministry of Women and Child Development",
    benefitAmount: "Collateral-Free SHG Bank Linkage Loans up to ₹10 Lakh + Revolving Fund",
    benefitType: "Subsidized Group Credit & Livelihood Grants",
    targetGroup: "Rural and Semi-Urban Women in Self Help Groups (SHGs)",
    summary: "Empowerment, skill development, and financial inclusion for women-led micro-enterprises.",
    description: "Unifies safety, security, and economic empowerment of women. Facilitates community investment funds, capacity building, and interest subvention for women self-help collectives.",
    tags: ["women", "shg", "self help group", "empowerment", "handicraft", "micro loan", "rural women", "livelihood"],
    eligibility: {
      minAge: 18,
      maxAge: 60,
      genders: ["female"],
      occupations: ["all", "homemaker", "artisan", "farmer", "self-employed"],
      maxIncome: 250000,
      states: ["All"],
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      requiresLand: false,
      specialConditions: "Must be an active member of a registered Women Self Help Group (SHG)."
    },
    documents: [
      { name: "SHG Member Passbook & ID", required: true, desc: "Proof of SHG membership" },
      { name: "Aadhaar Card", required: true, desc: "Identity proof" },
      { name: "SHG Resolution Copy", required: true, desc: "Signed group consent for loan" }
    ],
    applicationSteps: [
      "Join or form a 10-20 member Women Self Help Group in your village/ward.",
      "Connect with local Village Organization / Community Resource Person (CRP).",
      "Apply for Community Investment Fund (CIF) and subsidized bank credit."
    ],
    officialUrl: "https://wcd.nic.in",
    deadline: "Continuous Collective Formation"
  }
];

export const SCHEME_CATEGORIES = [
  "All Categories",
  "Agriculture & Rural",
  "Education & Youth",
  "Healthcare & Insurance",
  "Business & Micro-Credit",
  "Housing & Infrastructure",
  "Women & Child Development",
  "Social Security & Pension"
];

export const INDIAN_STATES = [
  "All States & UTs",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

export const OCCUPATIONS = [
  "All Occupations",
  "farmer",
  "student",
  "street vendor",
  "artisan",
  "daily wage / laborer",
  "self-employed",
  "salaried / private employee",
  "homemaker",
  "unemployed",
  "senior / retired"
];
