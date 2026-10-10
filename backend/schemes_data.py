# Schemes Database for UDYAMA Welfare Discovery

SCHEMES_DATABASE = [
  {
    "id": "pm-kisan",
    "name": "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Agriculture and Farmers Welfare",
    "benefitAmount": "₹6,000 per year (in 3 equal installments)",
    "benefitType": "Direct Bank Transfer (DBT)",
    "targetGroup": "Small & Marginal Landholding Farmers",
    "summary": "Financial support scheme to help farmers procure agricultural inputs and manage domestic needs.",
    "description": "PM Kisan is a Central Sector scheme with 100% funding from Government of India. Under the scheme an income support of ₹6,000/- per year in three equal installments is provided to all land-holding farmer families.",
    "tags": ["farmer", "agriculture", "land", "rural", "income support", "crop", "seeds", "fertilizer"],
    "eligibility": {
      "minAge": 18,
      "maxAge": 75,
      "genders": ["all", "male", "female", "other"],
      "occupations": ["farmer", "agricultural laborer"],
      "maxIncome": 300000,
      "states": ["All"],
      "categories": ["General", "OBC", "SC", "ST", "EWS"],
      "ruralOnly": True,
      "requiresLand": True,
      "specialConditions": "Must own cultivable agricultural land. Institutional landholders and income tax payers are excluded."
    },
    "documents": [
      { "name": "Aadhaar Card", "required": True, "desc": "Linked to active bank account" },
      { "name": "Land Ownership Records (7/12, Khatauni)", "required": True, "desc": "Proof of cultivable landholding" },
      { "name": "Bank Account Passbook", "required": True, "desc": "With IFSC code and active DBT enablement" },
      { "name": "Citizenship / Domicile Certificate", "required": False, "desc": "State residence verification" }
    ],
    "applicationSteps": [
      "Visit the official PM-KISAN portal (pmkisan.gov.in) or your local Common Service Center (CSC).",
      "Click on 'New Farmer Registration' under Farmers Corner.",
      "Enter Aadhaar number, state, and captcha to proceed.",
      "Fill in land record details (Khata number, Khasra number, area in Hectares).",
      "Upload scanned copy of land document and submit e-KYC via Aadhaar OTP."
    ],
    "officialUrl": "https://pmkisan.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pm-svanidhi",
    "name": "PM SVANidhi (Street Vendor's AtmaNirbhar Nidhi)",
    "category": "Business & Micro-Credit",
    "ministry": "Ministry of Housing and Urban Affairs",
    "benefitAmount": "Working Capital Collateral-free Loan up to ₹50,000",
    "benefitType": "Subsidized Loan & Digital Cashback",
    "targetGroup": "Urban & Peri-Urban Street Vendors and Hawkers",
    "summary": "Affordable working capital loans to street vendors to resume their livelihoods post-disruptions.",
    "description": "A special micro-credit facility for street vendors providing initial working capital loan of ₹10,000, progressing to ₹20,000 and ₹50,000 with 7% interest subsidy on timely repayment.",
    "tags": ["street vendor", "hawker", "loan", "working capital", "shopkeeper", "self employed", "urban", "micro business"],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "genders": ["all", "male", "female", "other"],
      "occupations": ["street vendor", "artisan", "self-employed", "daily wage / laborer"],
      "maxIncome": 250000,
      "states": ["All"],
      "categories": ["General", "OBC", "SC", "ST", "EWS"],
      "urbanOnly": True,
      "requiresLand": False,
      "specialConditions": "Engaged in vending in urban areas on or before the qualifying date with Vending Certificate or Recommendation Letter."
    },
    "documents": [
      { "name": "Aadhaar Card / Voter ID", "required": True, "desc": "Identity proof" },
      { "name": "Certificate of Vending / ID Card", "required": True, "desc": "Issued by Urban Local Body (ULB) / Town Vending Committee" },
      { "name": "Bank Account Details", "required": True, "desc": "Active savings account" },
      { "name": "Letter of Recommendation (LoR)", "required": False, "desc": "If identity card is not yet issued by ULB" }
    ],
    "applicationSteps": [
      "Check vending validation status on the PMSVANidhi portal.",
      "Approach nearest Lending Institution or Banking Correspondent (BC) / CSC.",
      "Submit application with Aadhaar and ULB reference number.",
      "Get collateral-free loan disbursed directly into bank account in 7-10 days."
    ],
    "officialUrl": "https://pmsvanidhi.mohua.gov.in",
    "deadline": "Ongoing Scheme"
  },
  {
    "id": "ayushman-bharat",
    "name": "Ayushman Bharat - PM-JAY (Jan Arogya Yojana)",
    "category": "Healthcare & Insurance",
    "ministry": "Ministry of Health and Family Welfare / NHA",
    "benefitAmount": "Cashless Health Cover up to ₹5,00,000 per family/year",
    "benefitType": "Secondary & Tertiary Hospitalization Cover",
    "targetGroup": "Bottom 40% Vulnerable & Low-Income Families",
    "summary": "World's largest government-funded health assurance scheme providing free inpatient healthcare.",
    "description": "Ayushman Bharat PM-JAY provides a cover of ₹5 lakh per family per year for secondary and tertiary care hospitalization across public and empaneled private hospitals in India.",
    "tags": ["health", "hospital", "medical", "insurance", "treatment", "medicine", "low income", "bpl", "surgery"],
    "eligibility": {
      "minAge": 0,
      "maxAge": 100,
      "genders": ["all", "male", "female", "other"],
      "occupations": ["all", "farmer", "daily wage / laborer", "unemployed", "street vendor", "senior / retired"],
      "maxIncome": 250000,
      "states": ["All"],
      "categories": ["General", "OBC", "SC", "ST", "EWS"],
      "requiresLand": False,
      "specialConditions": "Deprivation and occupational criteria based on SECC 2011 data, NFSA ration card holders, and seniors aged 70+ (new universal cover)."
    },
    "documents": [
      { "name": "Aadhaar Card", "required": True, "desc": "Biometric e-KYC verification" },
      { "name": "Ration Card / Family ID", "required": True, "desc": "Proof of family membership" },
      { "name": "Active Mobile Number", "required": True, "desc": "For OTP verification" }
    ],
    "applicationSteps": [
      "Check eligibility online at beneficiary.nha.gov.in or download the Ayushman App.",
      "Login with mobile number and verify with OTP.",
      "Search by Ration Card, Aadhaar Number, or Family ID.",
      "Complete e-KYC with Aadhaar Face/OTP/Fingerprint auth.",
      "Download the digital Ayushman Golden Card for instant hospital admission."
    ],
    "officialUrl": "https://beneficiary.nha.gov.in",
    "deadline": "Universal for Eligible Groups"
  },
  {
    "id": "post-matric-sc-st-scholarship",
    "name": "Post-Matric Scholarship for SC/ST/OBC Students",
    "category": "Education & Youth",
    "ministry": "Ministry of Social Justice and Empowerment / Tribal Affairs",
    "benefitAmount": "100% Tuition Fee Waiver + Annual Maintenance Allowance up to ₹13,500",
    "benefitType": "Direct DBT Educational Grant",
    "targetGroup": "Post-Secondary Students from SC/ST/OBC/EWS Categories",
    "summary": "Financial support to backward class students studying at post-matriculation or post-secondary stage.",
    "description": "Centrally sponsored scholarship scheme enabling students from disadvantaged socio-economic backgrounds to pursue higher education from Class 11 up to PhD without financial hardship.",
    "tags": ["scholarship", "education", "student", "college", "fees", "degree", "sc", "st", "obc", "youth"],
    "eligibility": {
      "minAge": 15,
      "maxAge": 35,
      "genders": ["all", "male", "female", "other"],
      "occupations": ["student", "unemployed"],
      "maxIncome": 250000,
      "states": ["All"],
      "categories": ["SC", "ST", "OBC", "EWS"],
      "requiresLand": False,
      "specialConditions": "Must be enrolled in a recognized post-matric course in a government or UGC/AICTE approved institution."
    },
    "documents": [
      { "name": "Caste / Category Certificate", "required": True, "desc": "Issued by competent revenue authority (Tehsildar/SDM)" },
      { "name": "Income Certificate", "required": True, "desc": "Showing annual family income under ₹2.5 Lakhs" },
      { "name": "Previous Year Marksheet", "required": True, "desc": "Proof of passing qualifying exam" },
      { "name": "College Fee Receipt & Bonafide", "required": True, "desc": "Current academic year admission proof" },
      { "name": "Aadhaar Linked Bank Account", "required": True, "desc": "For direct scholarship credit" }
    ],
    "applicationSteps": [
      "Register on the National Scholarship Portal (scholarships.gov.in) using OTR (One Time Registration).",
      "Fill application details and select Post-Matric Scheme.",
      "Upload institutional verification and fee receipts.",
      "Submit for online verification by Institute Nodal Officer (INO) and District Nodal Officer (DNO)."
    ],
    "officialUrl": "https://scholarships.gov.in",
    "deadline": "Academic Year Cycle (Oct - Dec)"
  },
  {
    "id": "pm-awas-yojana-gramin",
    "name": "PMAY-G (Pradhan Mantri Awas Yojana - Gramin)",
    "category": "Housing & Infrastructure",
    "ministry": "Ministry of Rural Development",
    "benefitAmount": "Financial Grant of ₹1,20,000 (Plain) / ₹1,30,000 (Hilly) + 90 days MGNREGA wages",
    "benefitType": "Direct Housing Construction Grant",
    "targetGroup": "Homeless & Families living in Kutcha / Dilapidated Houses",
    "summary": "Financial assistance for construction of pucca house with basic amenities including sanitation.",
    "description": "PMAY-G aims to provide a pucca house with basic amenities to all rural houseless households and those households living in kutcha and dilapidated houses.",
    "tags": ["housing", "house", "pucca house", "rural", "construction", "home", "shelter", "gramin"],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": ["all", "female", "male"],
      "occupations": ["all", "farmer", "daily wage / laborer", "artisan", "unemployed"],
      "maxIncome": 180000,
      "states": ["All"],
      "categories": ["General", "OBC", "SC", "ST", "EWS"],
      "ruralOnly": True,
      "requiresLand": False,
      "specialConditions": "Must not own a pucca house anywhere in India. Selection prioritized via SECC 2011 deprivation scores and Gram Sabha validation."
    },
    "documents": [
      { "name": "Aadhaar Card", "required": True, "desc": "Identity & family member linkage" },
      { "name": "MGNREGA Job Card", "required": True, "desc": "For additional 90/95 days unskilled labor wages" },
      { "name": "Bank Account Details", "required": True, "desc": "DBT linked for direct installment release" },
      { "name": "Affidavit / Land Document", "required": False, "desc": "Proof of ownership or allotment of home site" }
    ],
    "applicationSteps": [
      "Contact Gram Panchayat or Block Development Office (BDO).",
      "Geo-tagging of existing kutcha house done by village officer using AwaasApp.",
      "Gram Sabha approves eligible beneficiary list.",
      "Funds disbursed directly in 3 Geo-tagged construction stages."
    ],
    "officialUrl": "https://pmayg.nic.in",
    "deadline": "Ongoing Mission Mode"
  },
  {
    "id": "pm-matru-vandana-yojana",
    "name": "PMMVY (Pradhan Mantri Matru Vandana Yojana)",
    "category": "Women & Child Development",
    "ministry": "Ministry of Women and Child Development",
    "benefitAmount": "₹5,000 for 1st child + ₹6,000 for 2nd girl child",
    "benefitType": "Direct Cash Maternity Benefit",
    "targetGroup": "Pregnant Women and Lactating Mothers (PW&LM)",
    "summary": "Maternity benefit cash incentive for partial wage loss and adequate nutrition during pregnancy.",
    "description": "A centrally sponsored maternity benefit scheme providing conditional cash transfer directly to the bank accounts of pregnant women and lactating mothers for improved health and nutrition.",
    "tags": ["women", "maternity", "pregnancy", "mother", "child", "nutrition", "baby", "girl child", "hospital"],
    "eligibility": {
      "minAge": 19,
      "maxAge": 45,
      "genders": ["female"],
      "occupations": ["all", "homemaker", "daily wage / laborer", "farmer", "artisan"],
      "maxIncome": 800000,
      "states": ["All"],
      "categories": ["General", "OBC", "SC", "ST", "EWS"],
      "requiresLand": False,
      "specialConditions": "Applicable to socially and economically disadvantaged women (BPL card, e-Shram card, MGNREGA job card, or annual income below ₹8 Lakhs)."
    },
    "documents": [
      { "name": "Mother and Child Protection (MCP) Card", "required": True, "desc": "Showing ANC registration details" },
      { "name": "Aadhaar Card of Mother & Husband", "required": True, "desc": "Identity verification" },
      { "name": "Bank Passbook of Mother", "required": True, "desc": "Must be single account of the beneficiary with active DBT" },
      { "name": "Child Birth Certificate", "required": False, "desc": "Required for post-delivery installment" }
    ],
    "applicationSteps": [
      "Register at nearest Anganwadi Centre (AWC) or approved Government Health Facility within 150 days of LMP.",
      "Submit Form 1A along with MCP card and Aadhaar copies.",
      "Anganwadi Worker / ASHA registers the beneficiary on the PMMVY-CAS portal.",
      "Direct Benefit Transfer credited upon completing mandatory antenatal check-up (ANC) and institutional birth."
    ],
    "officialUrl": "https://pmmvy.wcd.gov.in",
    "deadline": "Open All Year (Within qualifying pregnancy window)"
  },
  {
    "id": "sukanya-samriddhi-yojana",
    "name": "SSY (Sukanya Samriddhi Yojana)",
    "category": "Women & Child Development",
    "ministry": "Ministry of Finance / Department of Posts",
    "benefitAmount": "High Interest (8.2% p.a.) + 100% Tax Exemption (EEE) on Girl Child Savings",
    "benefitType": "Guaranteed Sovereign Small Savings Scheme",
    "targetGroup": "Parents of Girl Child below 10 years of age",
    "summary": "Government-backed savings scheme aimed at securing the future higher education and marriage of girl children.",
    "description": "Part of Beti Bachao Beti Padhao initiative. Offers highest guaranteed government interest rate with Section 80C tax deduction and completely tax-free maturity proceeds.",
    "tags": ["girl child", "daughter", "savings", "education", "marriage", "tax free", "post office", "child welfare"],
    "eligibility": {
      "minAge": 0,
      "maxAge": 10,
      "genders": ["female"],
      "occupations": ["all", "student"],
      "maxIncome": 10000000,
      "states": ["All"],
      "categories": ["General", "OBC", "SC", "ST", "EWS"],
      "requiresLand": False,
      "specialConditions": "Account can be opened by natural or legal guardian in the name of a girl child from birth up to 10 years age. Max 2 accounts per family."
    },
    "documents": [
      { "name": "Girl Child Birth Certificate", "required": True, "desc": "Issued by municipal corporation or registrar of births" },
      { "name": "Aadhaar Card / PAN of Parent/Guardian", "required": True, "desc": "KYC of the account operator" },
      { "name": "Address Proof", "required": True, "desc": "Electricity bill / Ration card / Passport" }
    ],
    "applicationSteps": [
      "Visit nearest India Post Office or authorized commercial bank branch.",
      "Fill the SSY account opening form.",
      "Submit child birth certificate and guardian KYC documents with initial deposit (min ₹250).",
      "Receive official Sukanya Samriddhi passbook."
    ],
    "officialUrl": "https://www.indiapost.gov.in",
    "deadline": "Until Child reaches 10 years"
  },
  {
    "id": "atal-pension-yojana",
    "name": "APY (Atal Pension Yojana)",
    "category": "Social Security & Pension",
    "ministry": "Ministry of Finance / PFRDA",
    "benefitAmount": "Guaranteed Monthly Pension of ₹1,000 to ₹5,000 after 60 years",
    "benefitType": "Guaranteed Old-Age Social Security Pension",
    "targetGroup": "Unorganized Sector Workers and Self-Employed Citizens",
    "summary": "Universal social security pension scheme providing guaranteed financial independence in retirement.",
    "description": "Atal Pension Yojana is a periodic contribution pension scheme where subscribers receive a minimum guaranteed monthly pension of ₹1,000/2,000/3,000/4,000/5,000 at age 60, depending on contributions.",
    "tags": ["pension", "old age", "retirement", "unorganized worker", "senior citizen", "social security", "monthly income"],
    "eligibility": {
      "minAge": 18,
      "maxAge": 40,
      "genders": ["all", "male", "female", "other"],
      "occupations": ["all", "daily wage / laborer", "farmer", "street vendor", "artisan", "self-employed", "unemployed"],
      "maxIncome": 600000,
      "states": ["All"],
      "categories": ["General", "OBC", "SC", "ST", "EWS"],
      "requiresLand": False,
      "specialConditions": "Must hold an active savings bank account. Must not be an income tax payer."
    },
    "documents": [
      { "name": "Aadhaar Card", "required": True, "desc": "Identity & e-KYC" },
      { "name": "Bank Savings Account", "required": True, "desc": "Enabled for auto-debit of monthly pension premium" },
      { "name": "Nominee Details", "required": True, "desc": "Spouse or dependent for continuing pension benefit" }
    ],
    "applicationSteps": [
      "Visit the bank or post office branch where you have a savings account.",
      "Fill APY subscriber registration form and choose desired pension slab (₹1k to ₹5k/mo).",
      "Provide nominee details and authorize monthly auto-debit.",
      "Receive APY PRAN acknowledgement receipt."
    ],
    "officialUrl": "https://www.npscra.nsdl.co.in",
    "deadline": "Available up to 40 Years of Age"
  },
  {
    "id": "pm-fasal-bima-yojana",
    "name": "PMFBY (Pradhan Mantri Fasal Bima Yojana)",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Agriculture and Farmers Welfare",
    "benefitAmount": "Comprehensive Crop Loss Insurance with up to 100% Claim Settlement",
    "benefitType": "Agricultural Risk & Calamity Protection",
    "targetGroup": "All Farmers growing notified crops in notified areas",
    "summary": "Comprehensive crop insurance shield against non-preventable natural risks, drought, floods, and pests.",
    "description": "Provides financial support to farmers suffering crop loss/damage arising out of unforeseen natural calamities. Very low premium rate (1.5% for Rabi, 2% for Kharif, 5% for commercial/horticultural crops).",
    "tags": ["crop insurance", "farmer", "drought", "flood", "agriculture", "pest attack", "harvest", "compensation"],
    "eligibility": {
      "minAge": 18,
      "maxAge": 75,
      "genders": ["all", "male", "female", "other"],
      "occupations": ["farmer"],
      "maxIncome": 1000000,
      "states": ["All"],
      "categories": ["General", "OBC", "SC", "ST", "EWS"],
      "ruralOnly": True,
      "requiresLand": True,
      "specialConditions": "Applicable to both loanee and non-loanee farmers growing notified crops."
    },
    "documents": [
      { "name": "Land Possession Certificate / Sowing Certificate", "required": True, "desc": "Proof of crop sown in current season" },
      { "name": "Aadhaar Card", "required": True, "desc": "Farmer identity" },
      { "name": "Bank Passbook with IFSC", "required": True, "desc": "Claim settlement account" }
    ],
    "applicationSteps": [
      "Visit PMFBY national portal (pmfby.gov.in) or nearest CSC / Bank branch.",
      "Register before cut-off date for Kharif/Rabi seasons.",
      "Pay nominal subsidized premium (1.5% - 2%).",
      "Report crop damage within 72 hours via Crop Insurance Mobile App in case of localized calamity."
    ],
    "officialUrl": "https://pmfby.gov.in",
    "deadline": "Seasonal (Kharif: July 31, Rabi: Dec 31)"
  },
  {
    "id": "mission-shakti-shg",
    "name": "Mission Shakti (National Rural Livelihoods - SHG)",
    "category": "Women & Child Development",
    "ministry": "Ministry of Women and Child Development",
    "benefitAmount": "Collateral-Free SHG Bank Linkage Loans up to ₹10 Lakh + Revolving Fund",
    "benefitType": "Subsidized Group Credit & Livelihood Grants",
    "targetGroup": "Rural and Semi-Urban Women in Self Help Groups (SHGs)",
    "summary": "Empowerment, skill development, and financial inclusion for women-led micro-enterprises.",
    "description": "Unifies safety, security, and economic empowerment of women. Facilitates community investment funds, capacity building, and interest subvention for women self-help collectives.",
    "tags": ["women", "shg", "self help group", "empowerment", "handicraft", "micro loan", "rural women", "livelihood"],
    "eligibility": {
      "minAge": 18,
      "maxAge": 60,
      "genders": ["female"],
      "occupations": ["all", "homemaker", "artisan", "farmer", "self-employed"],
      "maxIncome": 250000,
      "states": ["All"],
      "categories": ["General", "OBC", "SC", "ST", "EWS"],
      "requiresLand": False,
      "specialConditions": "Must be an active member of a registered Women Self Help Group (SHG)."
    },
    "documents": [
      { "name": "SHG Member Passbook & ID", "required": True, "desc": "Proof of SHG membership" },
      { "name": "Aadhaar Card", "required": True, "desc": "Identity proof" },
      { "name": "SHG Resolution Copy", "required": True, "desc": "Signed group consent for loan" }
    ],
    "applicationSteps": [
      "Join or form a 10-20 member Women Self Help Group in your village/ward.",
      "Connect with local Village Organization / Community Resource Person (CRP).",
      "Apply for Community Investment Fund (CIF) and subsidized bank credit."
    ],
    "officialUrl": "https://wcd.nic.in",
    "deadline": "Continuous Collective Formation"
  }
]

SCHEME_CATEGORIES = [
  "All Categories",
  "Agriculture & Rural",
  "Education & Youth",
  "Healthcare & Insurance",
  "Business & Micro-Credit",
  "Housing & Infrastructure",
  "Women & Child Development",
  "Social Security & Pension"
]

INDIAN_STATES = [
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
]

OCCUPATIONS = [
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
]
