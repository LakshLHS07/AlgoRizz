export const SCHEMES_DATABASE = [
  {
    "id": "pm-kisan",
    "name": "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Agriculture and Farmers Welfare, Govt of India",
    "benefitAmount": "₹6,000 per year (3 equal installments of ₹2,000)",
    "benefitType": "Direct Bank Transfer (DBT)",
    "targetGroup": "Small & Marginal Landholding Farmer Families",
    "summary": "Direct income support to landholding farmer families across India for purchasing agricultural inputs and crop care.",
    "description": "Central sector scheme providing ₹6,000 annually in three 4-monthly installments directly into the Aadhaar-seeded bank accounts of landholding farmer families.",
    "tags": [
      "farmer",
      "agriculture",
      "land",
      "rural",
      "income support",
      "crop",
      "seeds",
      "fertilizer",
      "kisan"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 85,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "agricultural laborer"
      ],
      "maxIncome": 350000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": true,
      "specialConditions": "Must own cultivable agricultural land. Institutional landholders and high income tax payees excluded."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Linked to active bank account"
      },
      {
        "name": "Land Record (7/12, RoR, Khatauni)",
        "required": true,
        "desc": "Proof of agricultural landholding"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "DBT-enabled account details"
      }
    ],
    "applicationSteps": [
      "Visit pmkisan.gov.in or nearest Common Service Center (CSC).",
      "Click New Farmer Registration and enter Aadhaar number.",
      "Input land parcel details (Khasra/Khatauni/Survey numbers) and upload document.",
      "Complete e-KYC via Aadhaar OTP or biometric scan."
    ],
    "officialUrl": "https://pmkisan.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pmfby",
    "name": "PMFBY (Pradhan Mantri Fasal Bima Yojana)",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Agriculture and Farmers Welfare, Govt of India",
    "benefitAmount": "Comprehensive Insurance Claim against Crop Failure & Post-Harvest Losses",
    "benefitType": "Crop Loss Damage Insurance",
    "targetGroup": "Farmers Cultivating Notified Food, Oilseeds & Horticultural Crops",
    "summary": "Low-cost crop insurance (1.5% - 2% farmer premium) ensuring full financial safety against droughts, floods, and pests.",
    "description": "Subsidized comprehensive crop insurance from pre-sowing to post-harvest stages. Covers localized calamities, unseasonal rainfall, and mid-season adversity.",
    "tags": [
      "farmer",
      "crop",
      "insurance",
      "agriculture",
      "flood",
      "drought",
      "harvest",
      "compensation"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "agricultural laborer"
      ],
      "maxIncome": 600000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": true,
      "specialConditions": "Must be growing notified crops in notified insurance areas (loanee and non-loanee farmers both eligible)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Land Record / Tenancy Agreement",
        "required": true,
        "desc": "Proof of land cultivation"
      },
      {
        "name": "Sowing Certificate / Patwari Report",
        "required": true,
        "desc": "Proof of sown crop"
      }
    ],
    "applicationSteps": [
      "Apply on pmfby.gov.in, via bank branch or CSC before the cutoff deadline.",
      "Submit crop sowing declaration and pay nominal farmer premium share.",
      "In case of calamity, notify loss within 72 hours via Crop Insurance App."
    ],
    "officialUrl": "https://pmfby.gov.in",
    "deadline": "Kharif: July 31 | Rabi: Dec 31"
  },
  {
    "id": "pm-kusum",
    "name": "PM-KUSUM (Solar Agricultural Pumps & Rural Grid Power)",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of New and Renewable Energy & Agriculture",
    "benefitAmount": "Up to 60% Subsidy for Standalone Solar Agricultural Pumps + 30% Bank Loan Support",
    "benefitType": "Direct Capital Subsidy for Solar Irrigation",
    "targetGroup": "Farmers, Farmer Producer Organizations (FPOs) & Water User Associations",
    "summary": "Massive clean energy scheme replacing diesel agricultural pumps with subsidized standalone solar pumps and grid feeding.",
    "description": "De-dieselizes the farm sector by providing 60% combined Central and State capital subsidy on 3HP to 10HP solar water pumping systems with surplus power generation earnings.",
    "tags": [
      "solar",
      "pump",
      "irrigation",
      "farmer",
      "agriculture",
      "clean energy",
      "electricity",
      "subsidy"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 75,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer"
      ],
      "maxIncome": 800000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": true,
      "specialConditions": "Must own agricultural land with an existing ground/surface water source requiring irrigation power."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Farmer identity"
      },
      {
        "name": "Land 7/12 & Ground Water Certificate",
        "required": true,
        "desc": "Landholding and water availability verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account for subsidy linkage"
      }
    ],
    "applicationSteps": [
      "Register on State Renewable Energy Development Agency (SREDA) portal.",
      "Select desired pump capacity (3HP/5HP/7.5HP/10HP) and vendor.",
      "Pay 10% farmer contribution; State & Central subsidy covers 60%.",
      "Field installation and solar pump commissioning."
    ],
    "officialUrl": "https://pmkusum.mnre.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "kisan-credit-card",
    "name": "Kisan Credit Card (KCC) Scheme",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Agriculture and NABARD",
    "benefitAmount": "Collateral-Free Concessional Credit up to ₹3,00,000 at 4% Effective Interest Rate",
    "benefitType": "Subsidized Working Capital Credit",
    "targetGroup": "Owner Cultivators, Tenant Farmers, Animal Husbandry & Fishery Farmers",
    "summary": "Flexible credit line for purchasing seeds, fertilizers, tractor fuel, crop maintenance, and animal husbandry.",
    "description": "Provides short-term credit limits at 7% normal rate with 3% prompt repayment incentive, bringing effective interest rate down to just 4% per annum with RuPay debit card access.",
    "tags": [
      "kcc",
      "credit card",
      "loan",
      "farmer",
      "agriculture",
      "livestock",
      "dairy",
      "low interest"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 75,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "agricultural laborer",
        "self-employed"
      ],
      "maxIncome": 800000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": true,
      "specialConditions": "All farmers including individual cultivators, joint liability groups (JLGs), and oral lessees are eligible."
    },
    "documents": [
      {
        "name": "Aadhaar & Voter Card",
        "required": true,
        "desc": "Identity & residential proof"
      },
      {
        "name": "Land Record / Patta Copy",
        "required": true,
        "desc": "Land cultivation records"
      },
      {
        "name": "Cropping Pattern Declaration",
        "required": true,
        "desc": "Details of crops or animal husbandry units"
      }
    ],
    "applicationSteps": [
      "Download KCC form from bank website or visit nearest public sector bank / cooperative society.",
      "Fill one-page simplified KCC form along with land records.",
      "Bank processes and issues KCC RuPay Smart Card within 14 days."
    ],
    "officialUrl": "https://www.nabard.org",
    "deadline": "Open All Year"
  },
  {
    "id": "soil-health-card",
    "name": "National Soil Health Card Scheme",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Agriculture and Farmers Welfare, Govt of India",
    "benefitAmount": "100% Free Scientific Soil Lab Testing & Customized Fertilizer Dosage Report",
    "benefitType": "Free Technical Advisory & Soil Nutrient Testing",
    "targetGroup": "All Agricultural Landholders across India",
    "summary": "Free scientific soil testing report delivered every 2 years indicating exact macro and micro nutrient requirements.",
    "description": "Assesses 12 soil health parameters (N, P, K, S, Zn, Fe, Cu, Mn, Bo, pH, EC, OC) to advise farmers on balanced fertilizer use, reducing input costs and boosting harvest yield.",
    "tags": [
      "soil",
      "farmer",
      "agriculture",
      "fertilizer",
      "testing",
      "crop",
      "nutrients"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 85,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": true,
      "specialConditions": "Must be an active cultivator of agricultural land."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Farmer ID"
      },
      {
        "name": "Khasra / Survey Number",
        "required": true,
        "desc": "Location of farm plot"
      }
    ],
    "applicationSteps": [
      "Agriculture department officials collect geo-tagged soil sample from your farm.",
      "Sample tested at district Soil Testing Laboratory.",
      "Soil Health Card issued with exact fertilizer recommendations."
    ],
    "officialUrl": "https://soilhealth.dac.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pm-matsya-sampada",
    "name": "PMMSY (Pradhan Mantri Matsya Sampada Yojana)",
    "category": "Agriculture & Rural",
    "ministry": "Department of Fisheries, Ministry of Fisheries, Animal Husbandry & Dairying",
    "benefitAmount": "Up to 60% Financial Subsidy for Aquaculture Ponds, Biofloc, RAS & Fishing Boats",
    "benefitType": "Capital Investment Subsidy",
    "targetGroup": "Fishers, Fish Farmers, Fish Workers, SHGs & Fisheries Cooperatives",
    "summary": "Flagship scheme for ecological development of marine and inland fisheries with massive capital subsidies.",
    "description": "Provides 40% (General) to 60% (Women, SC, ST) subsidy for constructing new fish ponds, recirculatory aquaculture systems (RAS), biofloc units, ice plants, and refrigerated fish transport vans.",
    "tags": [
      "fish",
      "fisheries",
      "aquaculture",
      "boat",
      "subsidy",
      "farmer",
      "animal husbandry",
      "cooperative"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "self-employed",
        "daily wage / laborer"
      ],
      "maxIncome": 600000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be engaged in fisheries or own/lease suitable land/water body for aquaculture."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Water Body / Land Lease Document",
        "required": true,
        "desc": "Proof of pond/site availability"
      },
      {
        "name": "Project Estimate / DPR",
        "required": true,
        "desc": "Detailed project report prepared by fisheries officer"
      }
    ],
    "applicationSteps": [
      "Submit DPR to District Fisheries Officer (DFO) or apply on pmmsy.dof.gov.in.",
      "District Level Committee reviews and recommends project for state approval.",
      "Subsidy released in phases directly linked to construction milestones."
    ],
    "officialUrl": "https://pmmsy.dof.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "paramparagat-krishi-vikas",
    "name": "PKVY (Paramparagat Krishi Vikas Yojana - Organic Farming)",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Agriculture and Farmers Welfare, Govt of India",
    "benefitAmount": "₹50,000 per Hectare for 3 Years (₹31,000 directly for Organic Inputs)",
    "benefitType": "Direct Input Incentive & Free PGS Organic Certification",
    "targetGroup": "Farmers Forming Organic Farming Clusters (50+ Acres)",
    "summary": "Promotes chemical-free traditional natural and organic farming with direct financial assistance and organic certification.",
    "description": "Supports cluster formation of farmers for adoption of organic farming. Provides ₹31,000/ha directly for biological fertilizers, vermicompost, and biopesticides, plus free Participatory Guarantee System (PGS) certification.",
    "tags": [
      "organic",
      "farming",
      "bio fertilizer",
      "natural",
      "cluster",
      "farmer",
      "agriculture",
      "subsidy"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 75,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer"
      ],
      "maxIncome": 400000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": true,
      "specialConditions": "Must be part of an organic farming cluster group of 20 or more farmers."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Farmer identity"
      },
      {
        "name": "Land Record (7/12)",
        "required": true,
        "desc": "Proof of cultivable land"
      },
      {
        "name": "Cluster Member Resolution",
        "required": true,
        "desc": "Group formation agreement"
      }
    ],
    "applicationSteps": [
      "Form an organic farmer cluster group with local Block Agriculture Officer.",
      "Register cluster on PGS-India portal (pgsindia-ncof.gov.in).",
      "Direct DBT transfer of input funds into individual farmer accounts."
    ],
    "officialUrl": "https://pgsindia-ncof.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "rashtriya-gokul-mission",
    "name": "Rashtriya Gokul Mission (Dairy & Indigenous Bovine Breeding)",
    "category": "Agriculture & Rural",
    "ministry": "Department of Animal Husbandry and Dairying",
    "benefitAmount": "50% Capital Subsidy up to ₹2 Crores for Breed Multiplication Farm & Free Sexed Semen Support",
    "benefitType": "Capital Subsidy & Cattle Breeding Incentives",
    "targetGroup": "Dairy Farmers, Cattle Breeders, SHGs & Private Entrepreneurs",
    "summary": "Development and conservation of indigenous bovine breeds and establishment of high-tech dairy breeding farms.",
    "description": "Promotes high milk yield indigenous cattle (Gir, Sahiwal, Red Sindhi, Murrah) through 50% capital subsidies for establishing dairy breeding units of minimum 200 cattle.",
    "tags": [
      "dairy",
      "cow",
      "cattle",
      "milk",
      "livestock",
      "animal husbandry",
      "farmer",
      "subsidy"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 65,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "self-employed"
      ],
      "maxIncome": 1200000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": true,
      "specialConditions": "Must possess land or infrastructure suitable for maintaining dairy cattle."
    },
    "documents": [
      {
        "name": "Aadhaar & PAN",
        "required": true,
        "desc": "Applicant KYC"
      },
      {
        "name": "Land Ownership / Lease Records",
        "required": true,
        "desc": "Proof of cattle farm land"
      },
      {
        "name": "Bank Sanction Letter / DPR",
        "required": true,
        "desc": "Bank approved project report"
      }
    ],
    "applicationSteps": [
      "Submit DPR on National Dairy Development Board portal (dahd.nic.in).",
      "State Livestock Development Board evaluation and bank loan tie-up.",
      "Subsidy released in two installments directly into loan escrow account."
    ],
    "officialUrl": "https://dahd.nic.in",
    "deadline": "Open All Year"
  },
  {
    "id": "ayushman-bharat",
    "name": "Ayushman Bharat PM-JAY (Pradhan Mantri Jan Arogya Yojana)",
    "category": "Healthcare & Insurance",
    "ministry": "National Health Authority, Ministry of Health and Family Welfare",
    "benefitAmount": "₹5,00,000 Cashless Health Coverage per Family per Year (Universal for Seniors 70+)",
    "benefitType": "100% Cashless Hospitalization Assurance",
    "targetGroup": "Bottom 40% Deprived Families & All Senior Citizens Aged 70+",
    "summary": "World's largest government healthcare assurance scheme covering 1,949 treatments across 28,000+ hospitals.",
    "description": "Cashless in-patient secondary and tertiary healthcare coverage across public and private empaneled hospitals. Covers oncology, cardiology, neurosurgery, orthopedics, ICU, pre & post hospitalization costs.",
    "tags": [
      "health",
      "hospital",
      "insurance",
      "medical",
      "cashless",
      "surgery",
      "poor",
      "senior",
      "medicine"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 120,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 300000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Listed in SECC 2011/NFSA ration database or any citizen aged 70+ regardless of family income (Universal Senior Wing)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity and biometric authentication"
      },
      {
        "name": "Ration Card (BPL/NFSA/Antyodaya)",
        "required": true,
        "desc": "Family membership record"
      }
    ],
    "applicationSteps": [
      "Check eligibility on beneficiary.nha.gov.in or via the Ayushman App.",
      "Visit any empaneled hospital Arogya Mitra desk or local CSC with Aadhaar.",
      "Instant face/fingerprint e-KYC approval and download PVC Ayushman Card with ABHA ID."
    ],
    "officialUrl": "https://pmjay.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pm-matru-vandana",
    "name": "PMMVY (Pradhan Mantri Matru Vandana Yojana)",
    "category": "Healthcare & Insurance",
    "ministry": "Ministry of Women and Child Development, Govt of India",
    "benefitAmount": "₹5,000 (1st Child) & ₹6,000 (2nd Child if Girl) Direct Maternity Cash Incentive",
    "benefitType": "Direct Cash Maternity Benefit (DBT)",
    "targetGroup": "Pregnant Women and Lactating Mothers",
    "summary": "Direct cash incentive for pregnant mothers to compensate for wage loss and ensure adequate nutrition during pregnancy.",
    "description": "Transferred directly into the mother's bank account upon early registration of pregnancy, antenatal check-ups (ANC), and institutional childbirth with child immunization.",
    "tags": [
      "pregnant",
      "mother",
      "maternity",
      "baby",
      "infant",
      "women",
      "cash incentive",
      "dbt",
      "nutrition"
    ],
    "eligibility": {
      "minAge": 19,
      "maxAge": 45,
      "genders": [
        "female"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 800000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be pregnant woman or lactating mother (regular government employees with paid maternity leave are excluded)."
    },
    "documents": [
      {
        "name": "Aadhaar Card of Mother",
        "required": true,
        "desc": "Identity and bank link verification"
      },
      {
        "name": "Mother and Child Protection (MCP) Card",
        "required": true,
        "desc": "Issued by Anganwadi / ANM worker"
      },
      {
        "name": "Child Birth Certificate",
        "required": true,
        "desc": "Institutional birth verification"
      }
    ],
    "applicationSteps": [
      "Register at nearest Anganwadi Center (AWC) or apply online at pmmvy.wcd.gov.in.",
      "Submit MCP card showing mandatory antenatal checkups.",
      "Direct DBT payment credited in installments to mother's account."
    ],
    "officialUrl": "https://pmmvy.wcd.gov.in",
    "deadline": "Within 270 days of LMP"
  },
  {
    "id": "nikshay-poshan-yojana",
    "name": "Ni-Kshay Poshan Yojana (National TB Elimination Program)",
    "category": "Healthcare & Insurance",
    "ministry": "Ministry of Health and Family Welfare, Govt of India",
    "benefitAmount": "₹1,000 per month (Increased from ₹500) Direct DBT Nutrition Support for Treatment Duration",
    "benefitType": "Direct Nutritional Support Grant (DBT)",
    "targetGroup": "All Notified Tuberculosis (TB) Patients in India",
    "summary": "Monthly direct cash transfer to TB patients across India to ensure proper nutritional intake throughout treatment.",
    "description": "Central sector scheme under the National Tuberculosis Elimination Program (NTEP) providing nutritional monetary support to every diagnosed TB patient in both public and private clinics.",
    "tags": [
      "tb",
      "tuberculosis",
      "medical",
      "treatment",
      "health",
      "nutrition",
      "monthly cash",
      "dbt"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 120,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be diagnosed with TB and notified on the central Ni-kshay portal."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity proof"
      },
      {
        "name": "Ni-Kshay Registration ID",
        "required": true,
        "desc": "Generated by health center"
      },
      {
        "name": "Bank Account Details",
        "required": true,
        "desc": "Aadhaar seeded bank account"
      }
    ],
    "applicationSteps": [
      "Visit any Primary Health Centre (PHC), Government Hospital, or private DOTS provider.",
      "Doctor registers diagnosis on Nikshay portal.",
      "Monthly DBT credited directly into patient bank account until treatment completion."
    ],
    "officialUrl": "https://nikshay.in",
    "deadline": "Open All Year"
  },
  {
    "id": "mission-indradhanush",
    "name": "Intensified Mission Indradhanush (Universal Child Immunization)",
    "category": "Healthcare & Insurance",
    "ministry": "Ministry of Health and Family Welfare, Govt of India",
    "benefitAmount": "100% Free Life-Saving Vaccines against 12 Preventable Childhood Diseases",
    "benefitType": "Free Preventive Vaccine & Healthcare Delivery",
    "targetGroup": "Children Aged 0-5 Years and Unvaccinated Pregnant Women",
    "summary": "Doorstep universal immunization drive providing free protection against 12 deadly childhood diseases.",
    "description": "Protects against Diphtheria, Whooping Cough, Tetanus, Polio, Measles, Rubella, Severe TB, Hepatitis B, Meningitis, Pneumonia, Rotavirus, and Japanese Encephalitis.",
    "tags": [
      "vaccine",
      "immunization",
      "child",
      "infant",
      "pregnant",
      "health",
      "free",
      "baby"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 5,
      "genders": [
        "all",
        "female",
        "male"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Available for every child under 5 and pregnant women across India."
    },
    "documents": [
      {
        "name": "Immunization Card / MCP Card",
        "required": false,
        "desc": "To track vaccine doses (if available)"
      }
    ],
    "applicationSteps": [
      "Visit nearest Anganwadi center, Primary Health Center (PHC), or community immunization camp.",
      "ANM/ASHA worker administers age-appropriate vaccines free of cost.",
      "Receive digital vaccination certificate via U-WIN portal."
    ],
    "officialUrl": "https://uwin.mohfw.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pm-bjp-jan-aushadhi",
    "name": "Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)",
    "category": "Healthcare & Insurance",
    "ministry": "Department of Pharmaceuticals, Ministry of Chemicals and Fertilizers",
    "benefitAmount": "50% to 90% Discounted Generic Medicines across 2,046 High-Quality Formulations",
    "benefitType": "Subsidized Quality Generic Medicine Access",
    "targetGroup": "All Citizens Seeking Affordable Chronic & Acute Medicines",
    "summary": "Nationwide network of 10,000+ Jan Aushadhi Kendras selling top-quality WHO-GMP certified generic medicines at 50-90% lower prices.",
    "description": "Drastically slashes out-of-pocket medical expenses by offering generic drugs for diabetes, hypertension, cancer, cardiac care, antibiotics, and ₹1 biodegradable sanitary pads.",
    "tags": [
      "medicine",
      "pharmacy",
      "generic",
      "discount",
      "health",
      "diabetes",
      "cardiac",
      "sanitary pad"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 120,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Open to all citizens with a valid doctor's prescription."
    },
    "documents": [
      {
        "name": "Doctor Prescription",
        "required": true,
        "desc": "Valid medical prescription"
      }
    ],
    "applicationSteps": [
      "Locate nearest Jan Aushadhi Kendra using the Jan Aushadhi Sugam App.",
      "Present medical prescription at the counter.",
      "Purchase quality generic medicines at 50-90% lower prices compared to branded equivalents."
    ],
    "officialUrl": "https://janaushadhi.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pm-svanidhi",
    "name": "PM SVANidhi (Street Vendor's AtmaNirbhar Nidhi)",
    "category": "Business & Micro-Credit",
    "ministry": "Ministry of Housing and Urban Affairs, Govt of India",
    "benefitAmount": "Collateral-Free Micro-Credit up to ₹50,000 + 7% Interest Subsidy + ₹1,200/yr Digital Cashback",
    "benefitType": "Subsidized Collateral-Free Working Capital Loan",
    "targetGroup": "Street Vendors, Hawkers, Thela-Walas & Peri-Urban Micro-Retailers",
    "summary": "Affordable working capital loans of ₹10,000, ₹20,000, and ₹50,000 with 7% interest subsidy to street vendors.",
    "description": "Graduated working capital loan facility: 1st tranche ₹10,000, 2nd tranche ₹20,000, and 3rd tranche ₹50,000. Timely repayment earns 7% interest subsidy credited directly to bank account.",
    "tags": [
      "street vendor",
      "hawker",
      "loan",
      "working capital",
      "shopkeeper",
      "self employed",
      "urban",
      "micro business"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "street vendor",
        "artisan",
        "self-employed",
        "daily wage / laborer"
      ],
      "maxIncome": 300000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "urbanOnly": true,
      "requiresLand": false,
      "specialConditions": "Must possess Vending Certificate / Urban Local Body Survey ID or Letter of Recommendation (LoR)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Vending Certificate / ULB Letter",
        "required": true,
        "desc": "Proof of street vending activity"
      },
      {
        "name": "Bank Account Details",
        "required": true,
        "desc": "Account for loan credit"
      }
    ],
    "applicationSteps": [
      "Apply on pmsvanidhi.mohua.gov.in, via banking correspondent or nearest CSC.",
      "Select preferred scheduled bank or Microfinance Institution (MFI).",
      "Bank processes loan within 7-10 days with zero collateral."
    ],
    "officialUrl": "https://pmsvanidhi.mohua.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pm-mudra-yojana",
    "name": "Pradhan Mantri MUDRA Yojana (PMMY)",
    "category": "Business & Micro-Credit",
    "ministry": "Department of Financial Services, Ministry of Finance, Govt of India",
    "benefitAmount": "Collateral-Free Institutional Enterprise Loans up to ₹20,00,000",
    "benefitType": "Collateral-Free Institutional Enterprise Credit",
    "targetGroup": "Small Business Owners, Shopkeepers, Artisans, Food Processors & Micro-Manufacturers",
    "summary": "Funding small enterprises across Shishu (up to ₹50k), Kishore (₹50k-₹5L), Tarun (₹5L-₹10L), and Tarun Plus (up to ₹20L).",
    "description": "Provides formal institutional credit without collateral to micro and small non-farm enterprises. Loans are backed by the National Credit Guarantee Trustee Company (NCGTC).",
    "tags": [
      "business",
      "loan",
      "startup",
      "shop",
      "micro finance",
      "mudra",
      "working capital",
      "self employed"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "self-employed",
        "street vendor",
        "artisan",
        "daily wage / laborer",
        "unemployed"
      ],
      "maxIncome": 1000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must have a viable business proposal and no prior defaults with commercial or cooperative banks."
    },
    "documents": [
      {
        "name": "Aadhaar & PAN Card",
        "required": true,
        "desc": "Identity & tax validation"
      },
      {
        "name": "Business Address Proof",
        "required": true,
        "desc": "Shop agreement / Udyam Registration"
      },
      {
        "name": "6-Month Bank Statement",
        "required": true,
        "desc": "Financial statement"
      }
    ],
    "applicationSteps": [
      "Apply online via UdyamiMitra portal (udyamimitra.in) or visit any public/private bank.",
      "Select tier (Shishu, Kishore, Tarun) and submit brief business plan.",
      "Bank sanctions MUDRA Card with working capital overdraft limit."
    ],
    "officialUrl": "https://www.mudra.org.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pm-egp-subsidy",
    "name": "PMEGP (Prime Minister's Employment Generation Programme)",
    "category": "Business & Micro-Credit",
    "ministry": "Ministry of Micro, Small and Medium Enterprises & KVIC",
    "benefitAmount": "Bank Loan up to ₹50 Lakhs (Mfg) / ₹20 Lakhs (Service) + Up to 35% Govt Capital Subsidy",
    "benefitType": "Credit-Linked Government Capital Subsidy",
    "targetGroup": "Unemployed Youth, First-Generation Entrepreneurs, Women & SHGs",
    "summary": "Major credit-linked government subsidy offering 15% to 35% non-repayable grant to establish new manufacturing or service units.",
    "description": "Central government subsidy program administered by KVIC. 25% subsidy for urban and 35% for rural projects for special category beneficiaries (women, SC/ST, OBC, differently abled).",
    "tags": [
      "entrepreneur",
      "business",
      "subsidy",
      "startup",
      "manufacturing",
      "service",
      "pmegp",
      "loan",
      "unemployed"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "unemployed",
        "self-employed",
        "artisan",
        "all"
      ],
      "maxIncome": 1200000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be Class 8 pass for manufacturing projects above ₹10L and service projects above ₹5L. Only new units eligible."
    },
    "documents": [
      {
        "name": "Aadhaar & PAN Card",
        "required": true,
        "desc": "Identity proof"
      },
      {
        "name": "Educational Certificate",
        "required": true,
        "desc": "Class 8/10/Degree marksheet"
      },
      {
        "name": "Detailed Project Report (DPR)",
        "required": true,
        "desc": "Machinery list, project costs & revenue model"
      },
      {
        "name": "Caste / Category Certificate",
        "required": false,
        "desc": "To claim higher 25%-35% subsidy"
      }
    ],
    "applicationSteps": [
      "Apply online at kviconline.gov.in/pmegpeportal.",
      "Upload DPR, photo, Aadhaar, and education proof.",
      "District Task Force Committee forwards approved file to bank.",
      "Bank disburses loan and KVIC deposits margin money subsidy in 3-year TDR."
    ],
    "officialUrl": "https://www.kviconline.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "stand-up-india",
    "name": "Stand-Up India Scheme",
    "category": "Business & Micro-Credit",
    "ministry": "Department of Financial Services, Ministry of Finance, Govt of India",
    "benefitAmount": "Bank Composite Loans from ₹10 Lakhs to ₹1 Crore for Greenfield Enterprises",
    "benefitType": "Composite Bank Loan (Term Loan + Working Capital)",
    "targetGroup": "Women Entrepreneurs & Scheduled Caste (SC) / Scheduled Tribe (ST) Borrowers",
    "summary": "Encouraging entrepreneurship among SC/ST and women by providing bank loans between ₹10 Lakhs and ₹1 Crore.",
    "description": "Facilitates bank loans between ₹10 Lakhs and ₹1 Crore to at least one SC or ST borrower and at least one woman borrower per bank branch for setting up greenfield manufacturing, service, agri-allied, or trading enterprises.",
    "tags": [
      "women",
      "sc",
      "st",
      "entrepreneur",
      "business",
      "loan",
      "startup",
      "greenfield"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "genders": [
        "female",
        "male",
        "all"
      ],
      "occupations": [
        "self-employed",
        "unemployed",
        "all"
      ],
      "maxIncome": 2500000,
      "states": [
        "All"
      ],
      "categories": [
        "SC",
        "ST",
        "General",
        "OBC",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be an SC/ST individual OR a Woman entrepreneur. For non-individual enterprises, 51% shareholding must be held by SC/ST or woman."
    },
    "documents": [
      {
        "name": "Aadhaar & PAN Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Caste Certificate (if SC/ST)",
        "required": false,
        "desc": "SC/ST verification"
      },
      {
        "name": "Project Proposal & DPR",
        "required": true,
        "desc": "Greenfield project report"
      },
      {
        "name": "Incorporation / Partnership Deed",
        "required": false,
        "desc": "For companies/LLPs"
      }
    ],
    "applicationSteps": [
      "Apply through Stand-Up India Portal (standupmitra.in) or visit any commercial bank branch.",
      "Receive handholding support from SIDBI/NABARD lead agencies.",
      "Bank sanctions composite loan with 15% margin money assistance."
    ],
    "officialUrl": "https://www.standupmitra.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pm-vishwakarma",
    "name": "PM Vishwakarma Scheme",
    "category": "Skill Development & Livelihood",
    "ministry": "Ministry of Micro, Small and Medium Enterprises, Govt of India",
    "benefitAmount": "Free Skill Certification + ₹15,000 Tool Kit Grant + ₹3,00,000 Loan at 5% Concessional Rate",
    "benefitType": "Training Stipend, Toolkit Grant & Low-Interest Loan",
    "targetGroup": "Traditional Artisans & Craftspeople across 18 Recognized Trades",
    "summary": "End-to-end holistic support for traditional craftspeople (carpenters, potters, cobblers, weavers, blacksmiths, tailors).",
    "description": "Provides formal skill recognition, modern toolkit incentive of ₹15,000, daily stipend of ₹500 during 5-7 days training, and collateral-free enterprise loans up to ₹3 Lakhs at 5% interest.",
    "tags": [
      "artisan",
      "carpenter",
      "weaver",
      "craftsman",
      "tailor",
      "blacksmith",
      "tools",
      "skills",
      "loan",
      "subsidy"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 60,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "artisan",
        "daily wage / laborer",
        "self-employed"
      ],
      "maxIncome": 300000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be actively engaged in one of the 18 recognized traditional family trades using hands and tools. Limited to one member per family."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Account for receiving toolkit grant and daily stipend"
      },
      {
        "name": "Self-Declaration of Trade",
        "required": true,
        "desc": "Declaration of traditional artisanal trade"
      }
    ],
    "applicationSteps": [
      "Register via CSC operator on the PM Vishwakarma Portal (pmvishwakarma.gov.in).",
      "Gram Panchayat / Urban Local Body verification of traditional trade.",
      "Receive PM Vishwakarma Certificate & ID.",
      "Attend 5-day basic skill training with ₹500/day stipend.",
      "Receive ₹15,000 digital voucher for toolkits and apply for 5% enterprise loan."
    ],
    "officialUrl": "https://pmvishwakarma.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "nsp-post-matric-scholarship",
    "name": "National Post-Matric Scholarship Scheme (SC/ST/OBC)",
    "category": "Education & Scholarships",
    "ministry": "Ministry of Social Justice and Empowerment, Govt of India",
    "benefitAmount": "100% Full College Tuition Fee Reimbursement + Up to ₹13,500/year Living Maintenance Allowance",
    "benefitType": "Direct Bank Transfer Scholarship",
    "targetGroup": "Students Pursuing Post-Class 10 Studies (Diploma, Degree, Engineering, Medicine, PG)",
    "summary": "Complete financial support to underprivileged students to pursue higher college and university education.",
    "description": "Centrally sponsored scheme with 60:40 fund sharing between Centre and States. Covers compulsory non-refundable fees, study tours, thesis typing charges, and monthly maintenance allowance.",
    "tags": [
      "student",
      "scholarship",
      "college",
      "degree",
      "education",
      "fees",
      "sc",
      "st",
      "obc",
      "higher education"
    ],
    "eligibility": {
      "minAge": 15,
      "maxAge": 35,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "student"
      ],
      "maxIncome": 250000,
      "states": [
        "All"
      ],
      "categories": [
        "SC",
        "ST",
        "OBC",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must have passed Class 10/12 and enrolled in recognized institution/university. Family income must not exceed ₹2.5 LPA."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Student identity"
      },
      {
        "name": "Caste Certificate",
        "required": true,
        "desc": "Government authorized SC/ST/OBC certificate"
      },
      {
        "name": "Income Certificate",
        "required": true,
        "desc": "Tehsildar issued income certificate"
      },
      {
        "name": "College Fee Receipt & Marksheets",
        "required": true,
        "desc": "Admission & academic proof"
      }
    ],
    "applicationSteps": [
      "Register on National Scholarship Portal (scholarships.gov.in) with Aadhaar OTR.",
      "Submit application and upload caste, income, and marksheets.",
      "Institute and State Nodal Officer verify credentials.",
      "DBT scholarship funds credited directly via PFMS."
    ],
    "officialUrl": "https://scholarships.gov.in",
    "deadline": "November 30 (Annual)"
  },
  {
    "id": "nmms-scholarship",
    "name": "National Means-cum-Merit Scholarship Scheme (NMMSS)",
    "category": "Education & Scholarships",
    "ministry": "Department of School Education and Literacy, Ministry of Education",
    "benefitAmount": "₹12,000 per year (₹1,000/month) from Class 9 to Class 12",
    "benefitType": "Direct Bank Transfer Scholarship",
    "targetGroup": "Meritorious Students from Economically Weaker Sections in Class 8",
    "summary": "Prevents school dropouts after Class 8 by providing ₹12,000/year to continue secondary education.",
    "description": "Awarded to 1 lakh meritorious students every year through a state-level selection exam. Ensures students from low-income families continue their education up to higher secondary stage (Class 12).",
    "tags": [
      "student",
      "school",
      "scholarship",
      "class 8",
      "class 10",
      "class 12",
      "merit",
      "education"
    ],
    "eligibility": {
      "minAge": 12,
      "maxAge": 18,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "student"
      ],
      "maxIncome": 350000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be studying in Government or Local Body school with at least 55% marks in Class 7/8. Family income below ₹3.5 LPA."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Student ID"
      },
      {
        "name": "Class 7/8 Marksheet",
        "required": true,
        "desc": "Academic eligibility proof"
      },
      {
        "name": "Income Certificate",
        "required": true,
        "desc": "Family income proof"
      }
    ],
    "applicationSteps": [
      "Appear in State Level NMMS Selection Exam in Class 8.",
      "Qualifying candidates apply on National Scholarship Portal (scholarships.gov.in).",
      "₹12,000 per annum disbursed directly into student bank account from Class 9 to 12."
    ],
    "officialUrl": "https://scholarships.gov.in",
    "deadline": "October 31"
  },
  {
    "id": "pragati-scholarship-girls",
    "name": "AICTE Pragati Scholarship for Girl Students",
    "category": "Education & Scholarships",
    "ministry": "All India Council for Technical Education (AICTE), Ministry of Education",
    "benefitAmount": "₹50,000 per Year for Technical Degree / Diploma Studies (Tuition, Laptop, Books)",
    "benefitType": "Direct Bank Transfer Scholarship",
    "targetGroup": "Girl Students Admitted to AICTE Approved Technical Degree / Diploma Programs",
    "summary": "Empowers female students pursuing engineering, technical degrees, and polytechnic diplomas.",
    "description": "Provides ₹50,000 per annum for every year of technical study (up to 4 years for Degree, 3 years for Diploma) to support college fees, laptops, books, and competitive exam fees.",
    "tags": [
      "girl",
      "women",
      "scholarship",
      "engineering",
      "technical",
      "college",
      "degree",
      "diploma",
      "aicte"
    ],
    "eligibility": {
      "minAge": 17,
      "maxAge": 25,
      "genders": [
        "female"
      ],
      "occupations": [
        "student"
      ],
      "maxIncome": 800000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be a girl student admitted into 1st year or 2nd year (lateral entry) of AICTE approved technical institution. Max 2 girls per family."
    },
    "documents": [
      {
        "name": "Aadhaar Card of Student",
        "required": true,
        "desc": "Identity proof"
      },
      {
        "name": "Class 10 & 12 Marksheets",
        "required": true,
        "desc": "Academic records"
      },
      {
        "name": "College Admission Allotment Letter",
        "required": true,
        "desc": "Centralized admission proof"
      },
      {
        "name": "Family Income Certificate",
        "required": true,
        "desc": "Income below ₹8 Lakhs"
      }
    ],
    "applicationSteps": [
      "Apply through National Scholarship Portal (scholarships.gov.in) under AICTE section.",
      "College verifies admission records and fee receipts.",
      "₹50,000 credited annually into student's Aadhaar linked bank account."
    ],
    "officialUrl": "https://www.aicte-india.org",
    "deadline": "December 31"
  },
  {
    "id": "pmkvy-skill-india",
    "name": "PMKVY (Pradhan Mantri Kaushal Vikas Yojana 4.0)",
    "category": "Skill Development & Livelihood",
    "ministry": "Ministry of Skill Development and Entrepreneurship (MSDE)",
    "benefitAmount": "100% Free Industry Skill Training + ₹8,000 Reward + Government Skill Certificate & Job Placement",
    "benefitType": "Free Vocational Training & Certification Monetary Reward",
    "targetGroup": "School/College Dropouts & Unemployed Youth Seeking Industry-Ready Jobs",
    "summary": "Free industry-recognized vocational certification in AI, Robotics, Green Energy, Drone tech, Healthcare & IT.",
    "description": "Flagship skill certification scheme training millions in futuristic industrial trades (Industry 4.0, solar technicians, EV maintenance, healthcare assistants) with placement assistance.",
    "tags": [
      "skill",
      "training",
      "youth",
      "job",
      "unemployed",
      "placement",
      "free",
      "course",
      "pmkvy"
    ],
    "eligibility": {
      "minAge": 15,
      "maxAge": 45,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "unemployed",
        "student",
        "daily wage / laborer",
        "self-employed"
      ],
      "maxIncome": 800000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be an Indian citizen with basic literacy seeking formal job-ready vocational skills."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity proof"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "For receiving monetary reward upon passing assessment"
      }
    ],
    "applicationSteps": [
      "Register on Skill India Digital Portal (skillindiadigital.gov.in) or visit nearest Pradhan Mantri Kaushal Kendra (PMKK).",
      "Enroll in preferred 3 to 6-month skill course.",
      "Appear for independent Sector Skill Council assessment.",
      "Receive Government Skill Certificate, monetary reward, and job interview calls."
    ],
    "officialUrl": "https://www.pmkvyofficial.org",
    "deadline": "Open All Year"
  },
  {
    "id": "begum-hazrat-mahal-scholarship",
    "name": "Begum Hazrat Mahal National Scholarship",
    "category": "Education & Scholarships",
    "ministry": "Ministry of Minority Affairs, Govt of India",
    "benefitAmount": "₹10,000/yr (Class 9-10) & ₹12,000/yr (Class 11-12) for Meritorious Minority Girl Students",
    "benefitType": "Direct Bank Transfer Scholarship",
    "targetGroup": "Meritorious Girl Students Belonging to Minority Communities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi)",
    "summary": "Financial support to minority girl students studying in Classes 9 to 12 to eliminate financial barriers to schooling.",
    "description": "Direct financial scholarship to minority girl students who have secured at least 50% marks in the previous class and whose parental annual income does not exceed ₹2 Lakhs.",
    "tags": [
      "girl",
      "minority",
      "scholarship",
      "school",
      "education",
      "muslim",
      "christian",
      "sikh",
      "jain",
      "buddhist"
    ],
    "eligibility": {
      "minAge": 13,
      "maxAge": 19,
      "genders": [
        "female"
      ],
      "occupations": [
        "student"
      ],
      "maxIncome": 200000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must belong to notified minority communities (Muslims, Christians, Sikhs, Buddhists, Jains, Parsis) and have at least 50% marks in previous exam."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Student identity"
      },
      {
        "name": "Self-Declaration of Minority Community",
        "required": true,
        "desc": "Minority status certificate"
      },
      {
        "name": "Income Certificate",
        "required": true,
        "desc": "Annual income below ₹2 Lakhs"
      },
      {
        "name": "Previous Year Marksheet",
        "required": true,
        "desc": "Marksheet showing 50%+ score"
      }
    ],
    "applicationSteps": [
      "Apply through National Scholarship Portal (scholarships.gov.in).",
      "School verification and document authentication.",
      "Scholarship amount credited directly via DBT."
    ],
    "officialUrl": "https://scholarships.gov.in",
    "deadline": "November 15"
  },
  {
    "id": "sukanya-samriddhi",
    "name": "Sukanya Samriddhi Yojana (SSY)",
    "category": "Women & Child Development",
    "ministry": "Ministry of Finance & Women and Child Development, Govt of India",
    "benefitAmount": "8.2% Sovereign Guaranteed Compound Interest + 100% Tax-Free Corpus (Section 80C)",
    "benefitType": "Government Guaranteed Savings & Wealth Fund",
    "targetGroup": "Parents / Guardians of Girl Children Aged 0 to 10 Years",
    "summary": "Highest return sovereign savings scheme for girl child higher education and marriage security.",
    "description": "Backed by Government of India with sovereign guarantee. Minimum annual deposit is just ₹250 (max ₹1.5L/yr). Complete tax exemption on investment, interest earned, and maturity payout (EEE status).",
    "tags": [
      "girl child",
      "daughter",
      "education",
      "savings",
      "tax free",
      "child",
      "women",
      "investment",
      "marriage"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 10,
      "genders": [
        "female"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Beneficiary girl child must be under 10 years at account opening. Max 2 girl children per family."
    },
    "documents": [
      {
        "name": "Birth Certificate of Girl Child",
        "required": true,
        "desc": "Age and parentage proof"
      },
      {
        "name": "Parent / Guardian Aadhaar & PAN",
        "required": true,
        "desc": "KYC of operating guardian"
      },
      {
        "name": "Address Proof",
        "required": true,
        "desc": "Residential proof"
      }
    ],
    "applicationSteps": [
      "Visit any Post Office branch or authorized public/private commercial bank.",
      "Submit Form SSA-1 with birth certificate and guardian KYC.",
      "Deposit initial opening amount (minimum ₹250).",
      "Receive passbook with account number; manage online via IPPB or net banking."
    ],
    "officialUrl": "https://www.indiapost.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "mahila-samman-savings",
    "name": "Mahila Samman Savings Certificate (MSSC)",
    "category": "Women & Child Development",
    "ministry": "Department of Economic Affairs, Ministry of Finance, Govt of India",
    "benefitAmount": "7.5% Fixed Annual Return for 2-Year Deposit up to ₹2,00,000",
    "benefitType": "Government Guaranteed Small Savings Instrument",
    "targetGroup": "All Women and Girls of Any Age",
    "summary": "Special sovereign 2-year deposit scheme for women offering high 7.5% interest rate with partial withdrawal.",
    "description": "Encourages women's financial autonomy with guaranteed 7.5% compound quarterly interest. Account can be opened with minimum ₹1,000 up to ₹2,00,000 with 40% partial withdrawal facility after 1 year.",
    "tags": [
      "women",
      "savings",
      "deposit",
      "finance",
      "interest",
      "investment",
      "mahila"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 100,
      "genders": [
        "female"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Account must be in the name of a female citizen (or girl child by guardian)."
    },
    "documents": [
      {
        "name": "Aadhaar Card of Woman",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "PAN Card",
        "required": true,
        "desc": "Financial verification"
      }
    ],
    "applicationSteps": [
      "Visit any Post Office or authorized bank branch.",
      "Fill Application Form 1 for Mahila Samman Certificate.",
      "Deposit investment amount and receive official deposit certificate."
    ],
    "officialUrl": "https://www.indiapost.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "beti-bachao-beti-padhao",
    "name": "Beti Bachao Beti Padhao (BBBP)",
    "category": "Women & Child Development",
    "ministry": "Ministry of Women and Child Development, Health, and Education",
    "benefitAmount": "Free Secondary School Admission + Career Mentorship & Community Scholarships",
    "benefitType": "Educational & Social Empowerment Intervention",
    "targetGroup": "Girl Children in High Sex-Ratio Imbalance Districts",
    "summary": "Comprehensive national campaign to ensure girl child survival, protection, and complete 12 years of education.",
    "description": "Multi-sectoral initiative preventing gender-biased sex selection, enabling girl child school enrollments, establishing sanitation in schools, and providing skill mentorship.",
    "tags": [
      "girl",
      "child",
      "women",
      "education",
      "school",
      "empowerment",
      "bbbp"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 18,
      "genders": [
        "female"
      ],
      "occupations": [
        "student",
        "all"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Available for all girl children across India."
    },
    "documents": [
      {
        "name": "Child Birth Certificate / Aadhaar",
        "required": true,
        "desc": "Proof of age and parentage"
      }
    ],
    "applicationSteps": [
      "Connect with local Anganwadi / District Women Welfare Cell.",
      "Enroll in school and link with Sukanya Samriddhi and Kasturba Gandhi Balika Vidyalaya (KGBV) programs."
    ],
    "officialUrl": "https://wcd.nic.in/bbbp-schemes",
    "deadline": "Open All Year"
  },
  {
    "id": "working-women-hostel",
    "name": "Sakhi Niwas (Working Women Hostel Scheme)",
    "category": "Women & Child Development",
    "ministry": "Ministry of Women and Child Development, Govt of India",
    "benefitAmount": "Safe, Highly Subsidized Urban Accommodation with Daycare Creche for Children",
    "benefitType": "Subsidized Safe Housing & Daycare Facility",
    "targetGroup": "Employed Women, Trainees, Interns, and Job Seekers Away from Home",
    "summary": "Safe, affordable hostel accommodation and creche support for working women in urban centers.",
    "description": "Provides secure, hygienic, and affordable hostel rooms with daycare facilities for children up to 18 years (girls) and 5 years (boys) for working women living away from home.",
    "tags": [
      "hostel",
      "women",
      "working women",
      "accommodation",
      "creche",
      "safety",
      "housing"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 60,
      "genders": [
        "female"
      ],
      "occupations": [
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 600000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be an employed woman, intern, or pursuing professional job training away from family residence."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Employment Letter / Salary Slip",
        "required": true,
        "desc": "Proof of active employment/internship"
      }
    ],
    "applicationSteps": [
      "Apply through the local Sakhi Niwas management committee or state WCD portal.",
      "Room allotment based on verified employment details."
    ],
    "officialUrl": "https://wcd.nic.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pm-awas-gramin",
    "name": "PMAY-G (Pradhan Mantri Awaas Yojana - Gramin)",
    "category": "Housing & Infrastructure",
    "ministry": "Ministry of Rural Development, Govt of India",
    "benefitAmount": "₹1,20,000 (Plains) / ₹1,30,000 (Hilly States) + 90 Days Labor Wages + ₹12,000 Toilet Grant",
    "benefitType": "Direct Cash Grant for Pucca House Construction",
    "targetGroup": "Houseless Rural Families and Those Living in Kutcha Dilapidated Dwellings",
    "summary": "Central housing assistance to build durable 25 sq. meter pucca houses with hygienic toilet, LPG, and tap water.",
    "description": "Direct financial assistance transferred in transparent installments based on geotagged construction milestones (foundation, plinth, lintel, roof) with MGNREGA wages.",
    "tags": [
      "housing",
      "house",
      "home",
      "rural",
      "pucca house",
      "construction",
      "bpl",
      "shelter",
      "gramin"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 90,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 180000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": false,
      "specialConditions": "Must not own any pucca house anywhere in India. Selected via Awaas+ and SECC priority lists."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Biometric verification"
      },
      {
        "name": "MGNREGA Job Card",
        "required": true,
        "desc": "For claiming 90-95 days unskilled labor component"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "For direct installment transfers"
      }
    ],
    "applicationSteps": [
      "Gram Sabha verification and registration on AwaasSoft by Gram Panchayat Officer.",
      "Geotagged inspection of existing kutcha structure.",
      "1st installment (₹25,000) released for foundation.",
      "Subsequent installments released automatically upon geo-tagged photo verification via AwaasApp."
    ],
    "officialUrl": "https://pmayg.nic.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pm-awas-urban",
    "name": "PMAY-U 2.0 (Pradhan Mantri Awas Yojana - Urban)",
    "category": "Housing & Infrastructure",
    "ministry": "Ministry of Housing and Urban Affairs, Govt of India",
    "benefitAmount": "Interest Subsidy up to ₹1,80,000 OR Direct ₹2,50,000 Construction / Purchase Grant",
    "benefitType": "Interest Subsidy & Direct Housing Grant",
    "targetGroup": "Urban Poor, EWS, LIG & Middle-Income Families (MIG)",
    "summary": "Affordable housing subsidy for purchasing or constructing pucca flats and houses in urban towns and cities.",
    "description": "Covers Beneficiary-Led Construction (BLC), Affordable Housing in Partnership (AHP), and Interest Subsidy Scheme (ISS) for home loans up to ₹35 Lakhs.",
    "tags": [
      "housing",
      "house",
      "flat",
      "urban",
      "loan",
      "interest subsidy",
      "home loan",
      "pmay"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 70,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 900000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "urbanOnly": true,
      "requiresLand": false,
      "specialConditions": "The beneficiary family must not own a pucca house in their name anywhere in India."
    },
    "documents": [
      {
        "name": "Aadhaar Card of Family",
        "required": true,
        "desc": "Identity proof"
      },
      {
        "name": "Income Certificate / Salary Slip",
        "required": true,
        "desc": "Income proof (EWS/LIG/MIG)"
      },
      {
        "name": "Property / Land Deed or Home Loan Letter",
        "required": true,
        "desc": "Proof of property/loan sanction"
      }
    ],
    "applicationSteps": [
      "Apply through the PMAY(U) portal (pmaymis.gov.in) or via municipal corporation counter.",
      "Submit Aadhaar e-KYC and property details.",
      "Approved interest subsidy adjusted directly upfront against home loan principal."
    ],
    "officialUrl": "https://pmaymis.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "swachh-bharat-ihhl",
    "name": "Swachh Bharat Mission: Individual Household Latrine (IHHL)",
    "category": "Housing & Infrastructure",
    "ministry": "Department of Drinking Water and Sanitation, Ministry of Jal Shakti",
    "benefitAmount": "₹12,000 Direct Cash Incentive for Constructing Twin-Pit Sanitary Household Toilet",
    "benefitType": "Direct Bank Transfer Incentive",
    "targetGroup": "Rural & Urban Households without Access to Safe Sanitary Toilets",
    "summary": "Direct financial assistance of ₹12,000 to construct a private household toilet to eliminate open defecation.",
    "description": "Centrally sponsored scheme providing ₹12,000 per household to construct twin-pit pour-flush toilets, ensuring dignity, health, and safety for families.",
    "tags": [
      "toilet",
      "sanitation",
      "clean",
      "swachh bharat",
      "rural",
      "health",
      "subsidy",
      "dbt"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 90,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 250000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Household must not have received prior financial assistance for toilet construction."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity proof"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Account for direct transfer"
      },
      {
        "name": "Geotagged Photo of Completed Toilet",
        "required": true,
        "desc": "Uploaded via app for verification"
      }
    ],
    "applicationSteps": [
      "Apply on sbm.gov.in or register with Gram Panchayat Secretary.",
      "Construct twin-pit toilet.",
      "Upload geotagged photograph with applicant; ₹12,000 deposited in bank."
    ],
    "officialUrl": "https://sbm.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "jal-jeevan-mission",
    "name": "Jal Jeevan Mission (Har Ghar Jal)",
    "category": "Housing & Infrastructure",
    "ministry": "Department of Drinking Water and Sanitation, Ministry of Jal Shakti",
    "benefitAmount": "100% Free Functional Household Tap Connection (FHTC) with 55 Litres/Capita Clean Potable Water Daily",
    "benefitType": "Free Piped Drinking Water Infrastructure",
    "targetGroup": "Every Rural Household in India",
    "summary": "Providing clean, safe, and regular tap water connection directly to every rural household and school.",
    "description": "Massive infrastructure project delivering 55 litres of prescribed quality drinking water per person per day directly through tap connections in rural kitchens.",
    "tags": [
      "water",
      "tap water",
      "drinking water",
      "jal jeevan",
      "clean water",
      "rural",
      "health"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 120,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": false,
      "specialConditions": "Available for all rural residents in villages under Har Ghar Jal rollout."
    },
    "documents": [
      {
        "name": "Aadhaar Card / Ration Card",
        "required": false,
        "desc": "Household verification by Village Water and Sanitation Committee"
      }
    ],
    "applicationSteps": [
      "Village Water and Sanitation Committee (VWSC) prepares village action plan.",
      "Piped water pipeline laid and functional tap connection fitted in house with zero connection fees."
    ],
    "officialUrl": "https://jaljeevanmission.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pm-surya-ghar",
    "name": "PM Surya Ghar: Muft Bijli Yojana (Rooftop Solar)",
    "category": "Clean Energy & Housing",
    "ministry": "Ministry of New and Renewable Energy, Govt of India",
    "benefitAmount": "Direct Capital Subsidy up to ₹78,000 + Up to 300 Units Free Solar Electricity/month",
    "benefitType": "Direct Subsidy & Electricity Savings",
    "targetGroup": "Residential Homeowners and Rural/Urban Households",
    "summary": "Massive national rooftop solarization initiative providing 300 units of free clean electricity every month to 1 crore households.",
    "description": "Central government provides ₹30,000 per kW subsidy for up to 2 kW, and ₹18,000 for the 3rd kW (Total ₹78,000) for installing grid-connected rooftop solar panels with surplus power buyback.",
    "tags": [
      "solar",
      "electricity",
      "energy",
      "power",
      "subsidy",
      "rooftop",
      "housing",
      "utility",
      "savings"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 100,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 800000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must possess residential house with suitable unshaded roof space and active grid electricity connection."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity proof of householder"
      },
      {
        "name": "Electricity Bill (Latest)",
        "required": true,
        "desc": "Consumer connection CA number verification"
      },
      {
        "name": "Bank Account Details",
        "required": true,
        "desc": "For direct central subsidy disbursement"
      }
    ],
    "applicationSteps": [
      "Register on the National Portal (pmsuryaghar.gov.in) with DISCOM details and consumer account number.",
      "Select registered local solar vendor and submit rooftop feasibility request.",
      "DISCOM inspection and net meter installation upon panel setup.",
      "Upload commissioning report; central subsidy of ₹78,000 deposited directly in bank within 30 days."
    ],
    "officialUrl": "https://pmsuryaghar.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pm-ujjwala-yojana",
    "name": "Pradhan Mantri Ujjwala Yojana (PMUY 2.0)",
    "category": "Clean Energy & Housing",
    "ministry": "Ministry of Petroleum and Natural Gas, Govt of India",
    "benefitAmount": "Free LPG Gas Connection + First Cylinder Free + Stove & ₹300 Targeted Subsidy per Refill",
    "benefitType": "Free Clean Energy Asset & Targeted Cylinder Subsidy",
    "targetGroup": "Adult Women from Deprived Rural & Urban BPL Households",
    "summary": "Clean cooking fuel initiative replacing health-hazardous firewood and biomass with free LPG connections.",
    "description": "Provides deposit-free LPG connection in the name of an adult woman of the family, free first 14.2 kg LPG cylinder, hotplate (stove), and continuous ₹300 targeted DBT subsidy for up to 12 refills per year.",
    "tags": [
      "gas",
      "lpg",
      "cooking",
      "women",
      "rural",
      "clean energy",
      "subsidy",
      "bpl",
      "ujjwala"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 85,
      "genders": [
        "female"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 180000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be an adult woman. Household must not have any existing LPG connection from any OMC (IOCL, BPCL, HPCL)."
    },
    "documents": [
      {
        "name": "Aadhaar Card of Applicant",
        "required": true,
        "desc": "Woman applicant identity and age verification"
      },
      {
        "name": "Ration Card",
        "required": true,
        "desc": "Proof of family composition"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Linked to Aadhaar for receiving cylinder subsidy"
      }
    ],
    "applicationSteps": [
      "Apply online on pmuy.gov.in or visit nearest LPG distributor (Indane, Bharatgas, HP Gas).",
      "Submit KYC form with family Aadhaar and Ration Card copies.",
      "Distributor performs de-duplication check.",
      "Collect new LPG cylinder, regulator, safety hose, and stove with zero upfront deposit."
    ],
    "officialUrl": "https://www.pmuy.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "satat-cbj-biogas",
    "name": "SATAT (Sustainable Alternative Towards Affordable Transportation)",
    "category": "Clean Energy & Housing",
    "ministry": "Ministry of Petroleum and Natural Gas & MNRE",
    "benefitAmount": "Capital Subsidy up to ₹4 Crores for Setting up Compressed Bio-Gas (CBG) Plants + Assured Oil PSU Buyback",
    "benefitType": "Clean Energy Capital Grant & Assured Offtake Agreement",
    "targetGroup": "Entrepreneurs, Rural Cooperatives, Sugar Mills & Waste Processors",
    "summary": "Setting up commercial biogas plants from agricultural residue, cattle dung, and municipal organic waste.",
    "description": "Promotes green fuel production from paddy straw (stubble) and agricultural waste with commercial off-take agreements from Indian Oil, BPCL, and HPCL at fixed tariffs.",
    "tags": [
      "biogas",
      "cbg",
      "energy",
      "clean",
      "stubble",
      "green",
      "startup",
      "subsidy"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 70,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "self-employed",
        "farmer"
      ],
      "maxIncome": 5000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": true,
      "specialConditions": "Must have access to adequate agricultural biomass/cattle waste and land for plant setup."
    },
    "documents": [
      {
        "name": "Aadhaar & PAN",
        "required": true,
        "desc": "Promoter KYC"
      },
      {
        "name": "DPR & Land Title",
        "required": true,
        "desc": "Project feasibility and site ownership"
      },
      {
        "name": "Biomass Tie-Up Agreement",
        "required": true,
        "desc": "Proof of raw material supply"
      }
    ],
    "applicationSteps": [
      "Submit Expression of Interest (EoI) on oil company portal (e.g. iocl.com/SATAT).",
      "Letter of Intent (LoI) issued by Oil Marketing Company.",
      "Financial closure with bank and commissioning of CBG plant."
    ],
    "officialUrl": "https://mopng.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "atal-pension-yojana",
    "name": "Atal Pension Yojana (APY)",
    "category": "Social Security & Pension",
    "ministry": "Pension Fund Regulatory and Development Authority (PFRDA), Govt of India",
    "benefitAmount": "Guaranteed Monthly Pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 for Life from Age 60",
    "benefitType": "Government Guaranteed Monthly Pension & Spouse Return of Corpus",
    "targetGroup": "Unorganized Sector Workers, Daily Wagers, Laborers, and Self-Employed Citizens",
    "summary": "Sovereign guaranteed monthly retirement pension scheme ensuring life-long income security in old age.",
    "description": "Citizens contribute small monthly amounts from age 18-40. Upon reaching 60, guaranteed monthly pension is paid for life. After death, pension continues to spouse; upon spouse demise, entire corpus is returned to nominee.",
    "tags": [
      "pension",
      "old age",
      "retirement",
      "senior",
      "monthly income",
      "unorganized worker",
      "social security"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 40,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "daily wage / laborer",
        "farmer",
        "street vendor",
        "artisan",
        "self-employed",
        "unemployed",
        "all"
      ],
      "maxIncome": 400000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be an Indian citizen aged 18-40 years and not an income tax payer."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Proof of identity and age"
      },
      {
        "name": "Bank / Post Office Savings Account",
        "required": true,
        "desc": "For automated monthly auto-debit contribution"
      }
    ],
    "applicationSteps": [
      "Visit your bank branch or Post office, or register through your net banking app.",
      "Choose desired pension amount (₹1,000 to ₹5,000/month).",
      "Set auto-debit mandate on your savings bank account.",
      "Receive Permanent Retirement Account Number (PRAN) confirmation slip."
    ],
    "officialUrl": "https://www.npscra.nsdl.co.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pm-jeevan-jyoti-bima",
    "name": "PMJJBY (Pradhan Mantri Jeevan Jyoti Bima Yojana)",
    "category": "Social Security & Pension",
    "ministry": "Department of Financial Services, Ministry of Finance, Govt of India",
    "benefitAmount": "₹2,00,000 Life Insurance Payout to Nominee on Death due to Any Cause (Premium ₹436/year)",
    "benefitType": "Life Insurance Direct Claim Settlement",
    "targetGroup": "All Bank Account Holders Aged 18 to 50 Years",
    "summary": "Affordable life insurance of ₹2 Lakhs for just ₹436 per year (approx ₹1.20 per day).",
    "description": "Renewable one-year term life insurance scheme offering ₹2 Lakhs coverage in case of death of the insured person due to any reason (illness, accident, or natural causes).",
    "tags": [
      "life insurance",
      "insurance",
      "death benefit",
      "family protection",
      "affordable",
      "low cost"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 50,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must hold an active savings bank account and provide auto-debit consent."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity and age verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Account for auto-debit of ₹436/yr"
      }
    ],
    "applicationSteps": [
      "Enable auto-debit online through net banking/mobile banking or submit simple enrollment slip at bank branch.",
      "₹436 annual premium deducted annually in May.",
      "In case of demise, nominee submits death certificate and claim form to branch for fast settlement."
    ],
    "officialUrl": "https://www.jansuraksha.gov.in",
    "deadline": "Annual Renewal in May"
  },
  {
    "id": "pm-suraksha-bima",
    "name": "PMSBY (Pradhan Mantri Suraksha Bima Yojana)",
    "category": "Social Security & Pension",
    "ministry": "Department of Financial Services, Ministry of Finance, Govt of India",
    "benefitAmount": "₹2,00,000 Accidental Death / Total Permanent Disability Cover for ₹20 per Year",
    "benefitType": "Accidental Death & Disability Insurance",
    "targetGroup": "All Citizens and Bank Account Holders Aged 18 to 70 Years",
    "summary": "India's lowest-cost accidental death and permanent disability insurance at just ₹20 per year.",
    "description": "Offers ₹2 Lakhs for accidental death or total permanent disability (loss of both eyes or limbs) and ₹1 Lakh for partial permanent disability.",
    "tags": [
      "accident",
      "disability",
      "insurance",
      "pmsby",
      "death benefit",
      "cheap",
      "safety"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 70,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must hold a savings bank account with automated ₹20 annual premium deduction."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity proof"
      },
      {
        "name": "Savings Bank Account",
        "required": true,
        "desc": "Bank account for annual auto-debit"
      }
    ],
    "applicationSteps": [
      "Enable auto-debit of ₹20/year via net banking or at your bank/post office branch.",
      "Instant policy activation with annual cover from June 1 to May 31."
    ],
    "officialUrl": "https://www.jansuraksha.gov.in",
    "deadline": "Annual Renewal in May"
  },
  {
    "id": "ignoaps-old-age-pension",
    "name": "IGNOAPS (Indira Gandhi National Old Age Pension Scheme)",
    "category": "Social Security & Pension",
    "ministry": "Ministry of Rural Development, Govt of India",
    "benefitAmount": "Monthly Cash Pension (₹1,000 to ₹3,000/month combined with State top-up)",
    "benefitType": "Direct Cash Monthly Social Welfare Pension",
    "targetGroup": "Destitute Senior Citizens Aged 60+ Living Below the Poverty Line (BPL)",
    "summary": "National monthly pension for elderly destitute citizens without adequate family support.",
    "description": "Part of the National Social Assistance Programme (NSAP) providing non-contributory monthly cash assistance directly into the bank or post office accounts of elderly BPL citizens.",
    "tags": [
      "senior",
      "old age",
      "pension",
      "destitute",
      "bpl",
      "elderly",
      "monthly cash"
    ],
    "eligibility": {
      "minAge": 60,
      "maxAge": 120,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "senior / retired",
        "unemployed",
        "all"
      ],
      "maxIncome": 120000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Applicant must belong to a household living below the poverty line (BPL)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Proof of age (60+ years)"
      },
      {
        "name": "BPL Ration Card",
        "required": true,
        "desc": "Proof of below poverty line status"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "For receiving monthly pension"
      }
    ],
    "applicationSteps": [
      "Apply through Gram Panchayat Officer, Block Development Officer (BDO), or municipal office.",
      "Verification by social welfare committee.",
      "Monthly pension credited directly via DBT."
    ],
    "officialUrl": "https://nsap.nic.in",
    "deadline": "Open All Year"
  },
  {
    "id": "igndps-disability-pension",
    "name": "IGNDPS (National Disability Pension Scheme)",
    "category": "Social Security & Pension",
    "ministry": "Department of Empowerment of Persons with Disabilities & NSAP",
    "benefitAmount": "Monthly Cash Disability Pension (₹1,000 to ₹3,500/month with State top-up) + Free Assistive Aids",
    "benefitType": "Direct Cash Monthly Disability Pension",
    "targetGroup": "Persons with Severe / Profound Disabilities (80%+ or Multiple Disabilities) from BPL Families",
    "summary": "Financial security and monthly income support for differently abled individuals living in poor households.",
    "description": "Provides non-contributory direct monthly pension support and assistive equipment (motorized tricycles, prosthetics, braille kits, hearing aids) via ALIMCO.",
    "tags": [
      "disability",
      "disabled",
      "pension",
      "bpl",
      "assistive aids",
      "wheelchair",
      "special needs"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 85,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "all",
        "unemployed"
      ],
      "maxIncome": 150000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must possess Unique Disability ID (UDID) or medical disability certificate of 80% or more."
    },
    "documents": [
      {
        "name": "Unique Disability ID (UDID) / Disability Certificate",
        "required": true,
        "desc": "Medical board issued 80%+ disability proof"
      },
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity proof"
      },
      {
        "name": "BPL Card / Income Certificate",
        "required": true,
        "desc": "Economic status proof"
      }
    ],
    "applicationSteps": [
      "Submit application on nsap.nic.in or at District Social Welfare Officer desk.",
      "Verification of UDID disability certificate.",
      "Monthly pension credited directly into bank account."
    ],
    "officialUrl": "https://nsap.nic.in",
    "deadline": "Open All Year"
  },
  {
    "id": "ladli-behna-mp",
    "name": "Mukhyamantri Ladli Behna Yojana (Madhya Pradesh)",
    "category": "Women & Child Development",
    "ministry": "Government of Madhya Pradesh (Department of Women & Child Development)",
    "benefitAmount": "₹1,250 per Month (₹15,000/year) Direct Cash Assistance into Bank Account",
    "benefitType": "Direct Monthly Cash Support (DBT)",
    "targetGroup": "Married, Divorced, and Widowed Women in Madhya Pradesh",
    "summary": "Direct monthly financial assistance of ₹1,250 to empowered women of MP for health, nutrition, and self-reliance.",
    "description": "State welfare initiative transferring ₹1,250 monthly on the 10th of every month directly to female beneficiaries aged 21-60 years.",
    "tags": [
      "women",
      "madhya pradesh",
      "ladli behna",
      "monthly cash",
      "dbt",
      "mother",
      "financial aid"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 60,
      "genders": [
        "female"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 250000,
      "states": [
        "Madhya Pradesh",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be a resident of Madhya Pradesh. Family landholding must not exceed 5 acres; income below ₹2.5L."
    },
    "documents": [
      {
        "name": "Samagra ID (MP)",
        "required": true,
        "desc": "Family and member Samagra ID"
      },
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Linked to DBT bank account"
      }
    ],
    "applicationSteps": [
      "Attend special Gram Panchayat / Ward camps with Samagra ID and Aadhaar.",
      "Instant photo and biometric verification.",
      "₹1,250 credited on the 10th of every month."
    ],
    "officialUrl": "https://cmladlibehna.mp.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "rythu-bandhu-telangana",
    "name": "Rythu Bandhu / Rythu Bharosa (Telangana)",
    "category": "Agriculture & Rural",
    "ministry": "Department of Agriculture, Government of Telangana",
    "benefitAmount": "₹10,000 to ₹15,000 per Acre per Year (₹7,500/acre each season)",
    "benefitType": "Direct Agricultural Investment Support",
    "targetGroup": "All Landholding Farmers in Telangana State",
    "summary": "Farmer investment support scheme providing direct per-acre cash for purchasing seeds, fertilizers, and farm labor.",
    "description": "First direct investment support scheme in India transferring funds before Kharif and Rabi seasons to eliminate farmer debt.",
    "tags": [
      "farmer",
      "telangana",
      "agriculture",
      "investment",
      "per acre",
      "crop",
      "seeds",
      "rythu bandhu"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 85,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer"
      ],
      "maxIncome": 1000000,
      "states": [
        "Telangana",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": true,
      "specialConditions": "Must possess Dharani portal Pattadar Passbook in Telangana."
    },
    "documents": [
      {
        "name": "Pattadar Passbook (Dharani Portal)",
        "required": true,
        "desc": "Proof of land title in Telangana"
      },
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Aadhaar seeded bank account"
      }
    ],
    "applicationSteps": [
      "Land verified automatically through Dharani land database.",
      "Funds credited directly per acre into bank account before each crop season."
    ],
    "officialUrl": "https://dharani.telangana.gov.in",
    "deadline": "Pre-Season Cycle"
  },
  {
    "id": "kanyashree-prakalpa-wb",
    "name": "Kanyashree Prakalpa (West Bengal)",
    "category": "Women & Child Development",
    "ministry": "Department of Women Development & Social Welfare, Govt of West Bengal",
    "benefitAmount": "Annual Scholarship ₹1,000 (K1) + One-Time ₹25,000 Grant on Turning 18 (K2)",
    "benefitType": "Direct Bank Transfer Educational Grant",
    "targetGroup": "Unmarried Adolescent Girl Students Aged 13-19 in West Bengal",
    "summary": "United Nations awarded scheme preventing child marriage and promoting secondary and higher education for girls.",
    "description": "K1 provides ₹1,000 annual scholarship for girls in Class 8-12; K2 provides a one-time lump-sum grant of ₹25,000 upon reaching 18 years while continuing education unmarried.",
    "tags": [
      "girl",
      "west bengal",
      "kanyashree",
      "scholarship",
      "unmarried",
      "school",
      "college",
      "grant"
    ],
    "eligibility": {
      "minAge": 13,
      "maxAge": 19,
      "genders": [
        "female"
      ],
      "occupations": [
        "student"
      ],
      "maxIncome": 120000,
      "states": [
        "West Bengal",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be studying in a recognized school/college in West Bengal and unmarried."
    },
    "documents": [
      {
        "name": "Aadhaar & Birth Certificate",
        "required": true,
        "desc": "Age and identity proof"
      },
      {
        "name": "School Headmaster Bonafide",
        "required": true,
        "desc": "Proof of active schooling"
      },
      {
        "name": "Unmarried Declaration",
        "required": true,
        "desc": "Declaration signed by parent and student"
      }
    ],
    "applicationSteps": [
      "Collect and submit Kanyashree form at your school/institution.",
      "Headmaster verifies on the Kanyashree portal.",
      "Direct DBT credit into girl student's personal bank account."
    ],
    "officialUrl": "https://www.wbkanyashree.gov.in",
    "deadline": "Academic Year Cycle"
  },
  {
    "id": "yuva-nidhi-karnataka",
    "name": "Yuva Nidhi Scheme (Karnataka)",
    "category": "Education & Scholarships",
    "ministry": "Government of Karnataka (Skill Development & Livelihood)",
    "benefitAmount": "₹3,000/month (Graduates) & ₹1,500/month (Diploma Holders) Unemployment Stipend for 2 Years",
    "benefitType": "Direct Monthly Unemployment Stipend",
    "targetGroup": "Fresh Unemployed Graduates and Diploma Holders in Karnataka",
    "summary": "Monthly financial assistance to educated unemployed youth while they search for jobs and acquire vocational skills.",
    "description": "Direct financial safety net of ₹3,000/month for degree holders and ₹1,500/month for diploma holders who have not secured employment within 6 months of graduation.",
    "tags": [
      "unemployed",
      "karnataka",
      "stipend",
      "graduate",
      "diploma",
      "youth",
      "yuva nidhi",
      "job search"
    ],
    "eligibility": {
      "minAge": 19,
      "maxAge": 30,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "unemployed",
        "student"
      ],
      "maxIncome": 400000,
      "states": [
        "Karnataka",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must have graduated in the state of Karnataka and remained unemployed after 180 days of course completion."
    },
    "documents": [
      {
        "name": "Degree / Diploma Certificate",
        "required": true,
        "desc": "Passing certificate with marksheet"
      },
      {
        "name": "Karnataka Domicile / Aadhaar",
        "required": true,
        "desc": "State residence proof"
      }
    ],
    "applicationSteps": [
      "Apply on Seva Sindhu portal (sevasindhuservices.karnataka.gov.in) or Karnataka One center.",
      "Self-declare unemployment status.",
      "Monthly DBT stipend credited for up to 24 months or until employment."
    ],
    "officialUrl": "https://sevasindhuservices.karnataka.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "kalaignar-magalir-urimai-tn",
    "name": "Kalaignar Magalir Urimai Thittam (Tamil Nadu)",
    "category": "Women & Child Development",
    "ministry": "Government of Tamil Nadu (Social Welfare Department)",
    "benefitAmount": "₹1,000 per Month (₹12,000/year) Rights Grant for Female Heads of Household",
    "benefitType": "Direct Monthly Cash Rights Grant (DBT)",
    "targetGroup": "Women Heads of Families in Tamil Nadu",
    "summary": "Monthly basic income grant recognizing the unpaid domestic labor of female homemakers across Tamil Nadu.",
    "description": "Monthly economic entitlement of ₹1,000 transferred on the 15th of every month to over 1.15 crore women heads of families across Tamil Nadu.",
    "tags": [
      "women",
      "tamil nadu",
      "monthly cash",
      "dbt",
      "homemaker",
      "family head",
      "urimai thittam"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 65,
      "genders": [
        "female"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 250000,
      "states": [
        "Tamil Nadu",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be listed as woman head of family on Smart Ration Card in Tamil Nadu."
    },
    "documents": [
      {
        "name": "Smart Ration Card (Tamil Nadu)",
        "required": true,
        "desc": "Family card"
      },
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Biometric verification"
      },
      {
        "name": "Electricity Consumer Number",
        "required": true,
        "desc": "Annual consumption under 3,600 units"
      }
    ],
    "applicationSteps": [
      "Enroll through special ration shop volunteer camps.",
      "Biometric e-KYC authentication.",
      "₹1,000 credited on the 15th of every month."
    ],
    "officialUrl": "https://kmut.tn.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "gates-rural-fintech-grant",
    "name": "Bill & Melinda Gates Foundation: Rural Micro-Enterprise Innovation Grant",
    "category": "International NGO & Philanthropy",
    "ministry": "Bill & Melinda Gates Foundation (Global Development Division)",
    "benefitAmount": "$3,000 to $10,000 (Approx ₹2.5L to ₹8.5L) Non-Repayable Direct Grant",
    "benefitType": "Philanthropic Non-Repayable Seed Capital",
    "targetGroup": "Women-Led Smallholder Farming Collectives & Rural Micro-Enterprises",
    "summary": "International philanthropic grant enabling smallholder women farmers and rural collectives to adopt digital finance and clean post-harvest tools.",
    "description": "Supports small grassroots enterprises in emerging markets with catalytic non-repayable seed funding for digital supply chains, solar cold storage, and women-led agricultural value chains.",
    "tags": [
      "ngo",
      "grant",
      "gates foundation",
      "international",
      "women entrepreneur",
      "agriculture",
      "digital",
      "subsidy"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 60,
      "genders": [
        "female",
        "all"
      ],
      "occupations": [
        "farmer",
        "self-employed",
        "artisan"
      ],
      "maxIncome": 350000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": false,
      "specialConditions": "Must be a women-led micro-business, self-help group (SHG) federation, or grassroots cooperative with active community members."
    },
    "documents": [
      {
        "name": "Aadhaar & Voter ID",
        "required": true,
        "desc": "Lead applicant identification"
      },
      {
        "name": "SHG / Enterprise Bank Account",
        "required": true,
        "desc": "Group or individual registered bank details"
      },
      {
        "name": "Project Proposal / Activity Plan",
        "required": true,
        "desc": "Brief 1-2 page plan explaining proposed tools or business expansion"
      }
    ],
    "applicationSteps": [
      "Access the Gates Foundation Partner Portal or submit via accredited local NGO partner (e.g. PRADAN, BAIF).",
      "Submit application outlining rural business activity and expected community impact.",
      "Review by Regional Evaluation Panel.",
      "Direct milestone-based grant disbursement to approved enterprise bank account."
    ],
    "officialUrl": "https://www.gatesfoundation.org",
    "deadline": "Rolling Quarterly Review"
  },
  {
    "id": "sewa-women-microfund",
    "name": "SEWA (Self Employed Women's Association) Livelihood Resilience Fund",
    "category": "International NGO & Philanthropy",
    "ministry": "Self-Employed Women's Association (SEWA Bharat)",
    "benefitAmount": "₹25,000 to ₹75,000 Low-Cost Micro-Credit + Full Digital Marketing & Tool Training",
    "benefitType": "Cooperative Micro-Credit & Equipment Subsidy",
    "targetGroup": "Women Informal Workers, Domestic Laborers, Hawkers, and Home-Based Producers",
    "summary": "Empowers informal women workers with cooperative banking, equipment upgrading, and fair trade market linkages.",
    "description": "SEWA provides tailored working capital, sewing machines, solar dryers, and collective bargaining tools with nominal peer-supported interest rates and zero collateral.",
    "tags": [
      "women",
      "sewa",
      "micro finance",
      "loan",
      "ngo",
      "artisan",
      "informal worker",
      "empowerment"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "genders": [
        "female"
      ],
      "occupations": [
        "self-employed",
        "street vendor",
        "artisan",
        "daily wage / laborer",
        "farmer"
      ],
      "maxIncome": 200000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be an informal female earner or producer seeking livelihood asset upgrades."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity proof"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank or SEWA Bank account copy"
      },
      {
        "name": "Self-Declaration of Trade",
        "required": true,
        "desc": "Description of trade (tailoring, food vending, weaving, etc.)"
      }
    ],
    "applicationSteps": [
      "Connect with local SEWA Field Coordinator or regional facilitation center.",
      "Complete peer-group orientation and needs assessment.",
      "Approval by community credit committee.",
      "Disbursement and onboarding onto collective e-commerce marketplace."
    ],
    "officialUrl": "https://www.sewabharat.org",
    "deadline": "Open All Year"
  },
  {
    "id": "rotary-global-scholarship",
    "name": "Rotary Foundation Global Grant & Community Fellowship",
    "category": "Education & Scholarships",
    "ministry": "The Rotary Foundation (International Philanthropy)",
    "benefitAmount": "$5,000 to $30,000 (Approx ₹4L to ₹25L) Full Education Grant",
    "benefitType": "International Philanthropic Scholarship",
    "targetGroup": "Meritorious Graduate and Postgraduate Students with Demonstrated Community Leadership",
    "summary": "Global educational fellowship supporting studies in sustainable agriculture, healthcare, water sanitation, and basic education.",
    "description": "Rotary Foundation Global Grants support students pursuing high-impact graduate studies aligned with Rotary's areas of focus (peace, disease prevention, clean water, maternal child health, economic development).",
    "tags": [
      "scholarship",
      "rotary",
      "international",
      "fellowship",
      "higher education",
      "degree",
      "postgraduate",
      "ngo"
    ],
    "eligibility": {
      "minAge": 20,
      "maxAge": 38,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "student",
        "unemployed",
        "self-employed"
      ],
      "maxIncome": 600000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must have confirmed admission offer for graduate/postgraduate degree and endorsement from local Rotary District club."
    },
    "documents": [
      {
        "name": "Passport / Aadhaar",
        "required": true,
        "desc": "Nationality and identity proof"
      },
      {
        "name": "University Admission Letter",
        "required": true,
        "desc": "Proof of enrollment in recognized Master/Doctorate program"
      },
      {
        "name": "Academic Transcripts & Resume",
        "required": true,
        "desc": "Undergraduate degree records and statement of purpose"
      }
    ],
    "applicationSteps": [
      "Submit preliminary application to local Rotary Club / District Grants Committee.",
      "Attend interview and present community impact study plan.",
      "Rotary District endorses and submits candidate to The Rotary Foundation international portal.",
      "Grant approved; funds transferred directly to host university and scholar living stipend account."
    ],
    "officialUrl": "https://www.rotary.org",
    "deadline": "June 30 & December 15"
  },
  {
    "id": "cry-child-health-grant",
    "name": "CRY (Child Rights and You) Healthcare & Nutrition Support Fund",
    "category": "Healthcare & Insurance",
    "ministry": "CRY - Child Rights and You (National NGO)",
    "benefitAmount": "100% Free Nutritional Rations + Up to ₹50,000 Critical Child Healthcare Emergency Support",
    "benefitType": "Direct Nutrition & Emergency Medical Aid",
    "targetGroup": "Infants, Malnourished Children & Lactating Mothers in Slums and Remote Tribal Belts",
    "summary": "Non-profit emergency healthcare, early childhood education kits, and therapeutic nutrition for vulnerable children.",
    "description": "CRY partners with grassroots Anganwadis and health centers to provide immediate medical emergency assistance, specialized pediatric treatments, and supplementary nutrition packages.",
    "tags": [
      "child",
      "health",
      "nutrition",
      "ngo",
      "cry",
      "medical",
      "infant",
      "mother",
      "aid"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 14,
      "genders": [
        "all",
        "female",
        "male"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 150000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be a child from vulnerable or low-income household requiring immediate nutritional or pediatric medical support."
    },
    "documents": [
      {
        "name": "Child Birth Certificate / Anganwadi Card",
        "required": true,
        "desc": "Child age and registration record"
      },
      {
        "name": "Parent / Guardian Aadhaar",
        "required": true,
        "desc": "Guardian identity proof"
      },
      {
        "name": "Medical Prescription / Health Report",
        "required": false,
        "desc": "Hospital report in case of critical illness"
      }
    ],
    "applicationSteps": [
      "Register with local CRY outreach volunteer or community healthcare worker.",
      "Child health & nutrition assessment conducted at nearest community center.",
      "Immediate distribution of monthly Poshan nutritional package and pediatric consultation voucher."
    ],
    "officialUrl": "https://www.cry.org",
    "deadline": "Open All Year"
  },
  {
    "id": "un-women-microgrant",
    "name": "UN Women: Grassroots Women Entrepreneurship Innovation Fund",
    "category": "Women & Child Development",
    "ministry": "UN Women (United Nations Entity for Gender Equality)",
    "benefitAmount": "$2,000 to $5,000 (Approx ₹1.6L to ₹4.2L) Non-Repayable Innovation Grant",
    "benefitType": "International Multilateral Seed Grant",
    "targetGroup": "Grassroots Female Entrepreneurs & Women-Led Artisan Collectives",
    "summary": "United Nations seed financing and mentoring for women starting green businesses, artisanal co-ops, and tech-enabled micro-enterprises.",
    "description": "Promotes economic autonomy for marginalized women by providing catalytic funding for equipment purchase, branding, eco-friendly packaging, and access to fair-trade global export channels.",
    "tags": [
      "women",
      "un women",
      "united nations",
      "grant",
      "entrepreneur",
      "international",
      "artisan",
      "self-employed"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "genders": [
        "female"
      ],
      "occupations": [
        "self-employed",
        "artisan",
        "farmer",
        "daily wage / laborer",
        "unemployed"
      ],
      "maxIncome": 300000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Enterprise must be at least 51% owned and actively operated by women."
    },
    "documents": [
      {
        "name": "Aadhaar / Government Photo ID",
        "required": true,
        "desc": "Proof of age and female citizenship"
      },
      {
        "name": "Enterprise / Bank Account",
        "required": true,
        "desc": "Bank details for direct grant transfer"
      },
      {
        "name": "Simple Activity Summary",
        "required": true,
        "desc": "Brief 1-page description of enterprise and grant utilization"
      }
    ],
    "applicationSteps": [
      "Submit application through UN Women regional partner portal (asiapacific.unwomen.org).",
      "Participate in virtual / regional orientation workshop.",
      "Independent jury selection and grant award agreement signing.",
      "Receive direct fund transfer with 6 months peer mentoring."
    ],
    "officialUrl": "https://www.unwomen.org",
    "deadline": "Bi-Annual Call for Applications"
  },
  {
    "id": "pradan-livelihood-grant",
    "name": "PRADAN: Smallholder Irrigation & Agro-Ecological Farming Grant",
    "category": "Agriculture & Rural",
    "ministry": "Professional Assistance for Development Action (PRADAN National NGO)",
    "benefitAmount": "₹45,000 Material Grant (Solar Drip Irrigation, Native Seeds, Organic Inputs) + Field Expert Coaching",
    "benefitType": "In-Kind Asset & Capacity Building Grant",
    "targetGroup": "Marginal Tribal & Forest Dwelling Farmers (Especially Women Land Cultivators)",
    "summary": "Non-profit agricultural transformation program equipping marginal farmers with solar drip irrigation, seed banks, and climate-resilient farming techniques.",
    "description": "PRADAN partners with rural communities to build community-managed water harvesting, provide high-yield indigenous seeds, and establish organic farm-to-fork value chains.",
    "tags": [
      "farmer",
      "tribal",
      "pradan",
      "ngo",
      "agriculture",
      "irrigation",
      "organic",
      "rural",
      "seeds"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 70,
      "genders": [
        "all",
        "female",
        "male"
      ],
      "occupations": [
        "farmer",
        "agricultural laborer"
      ],
      "maxIncome": 180000,
      "states": [
        "All"
      ],
      "categories": [
        "ST",
        "SC",
        "OBC",
        "General",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": true,
      "specialConditions": "Must be smallholder or marginal farmer cultivating less than 2.5 acres of land."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Farmer identity"
      },
      {
        "name": "Land Possession Proof / RoR",
        "required": true,
        "desc": "Patta or community land possession certificate"
      },
      {
        "name": "Gram Panchayat Residence Certificate",
        "required": true,
        "desc": "Village domicile verification"
      }
    ],
    "applicationSteps": [
      "Contact PRADAN Village Resource Person or local Self-Help Group collective.",
      "Farm soil and water availability survey conducted by agricultural engineers.",
      "Approval and delivery of solar drip kit and organic input pack.",
      "Weekly hands-on training by agronomists throughout the cropping season."
    ],
    "officialUrl": "https://www.pradan.net",
    "deadline": "Open All Year"
  },
  {
    "id": "helpage-senior-care-fund",
    "name": "HelpAge India: Destitute Senior Citizen Healthcare & Mobile Clinic Support",
    "category": "Social Security & Pension",
    "ministry": "HelpAge India (Leading National Senior Care NGO)",
    "benefitAmount": "100% Free Chronic Disease Medicines (Diabetes, Hypertension) + Free Cataract Surgeries + Assistive Devices (Wheelchairs/Hearing Aids)",
    "benefitType": "Free Healthcare, Medicines & Assistive Devices",
    "targetGroup": "Elders Aged 60+ from Economically Disadvantaged Backgrounds",
    "summary": "Free geriatric medical care, chronic medicines delivered to doorstep, and vision-restoring cataract surgeries for destitute seniors.",
    "description": "HelpAge operates over 180 Mobile Healthcare Units (MHUs) visiting rural villages and urban slums, providing free diagnostic tests, doctor consultations, and life-saving chronic medicines.",
    "tags": [
      "senior",
      "elderly",
      "old age",
      "helpage",
      "ngo",
      "medicines",
      "cataract",
      "wheelchair",
      "healthcare"
    ],
    "eligibility": {
      "minAge": 60,
      "maxAge": 110,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "senior / retired",
        "unemployed",
        "all"
      ],
      "maxIncome": 180000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be an elderly citizen aged 60 or above without adequate family financial support."
    },
    "documents": [
      {
        "name": "Aadhaar Card / Voter ID",
        "required": true,
        "desc": "Age verification proof (60+ years)"
      },
      {
        "name": "Existing Medical Prescriptions",
        "required": false,
        "desc": "For ongoing medicine refill authorization"
      }
    ],
    "applicationSteps": [
      "Visit any HelpAge Mobile Healthcare Unit (MHU) schedule in your locality or call the National Elderline (14567).",
      "Doctor consultation, basic diagnostic checks (blood sugar, BP, hemoglobin).",
      "Free dispensing of monthly medicines and referral for cataract or specialized surgeries."
    ],
    "officialUrl": "https://www.helpageindia.org",
    "deadline": "Open All Year"
  },
  {
    "id": "akshaya-patra-poshan",
    "name": "The Akshaya Patra Foundation: Mid-Day Meal & Student Nutritional Security",
    "category": "International NGO & Philanthropy",
    "ministry": "The Akshaya Patra Foundation & Ministry of Education (PM POSHAN)",
    "benefitAmount": "100% Free Fresh Hot Nutritious Lunch Every School Day for 2.2+ Million Children",
    "benefitType": "Free Daily School Meals & Nutrition Rations",
    "targetGroup": "School Children in Government & Government-Aided Schools",
    "summary": "World's largest NGO school meal program providing freshly cooked, hygienic, nutritious hot lunches to eliminate classroom hunger.",
    "description": "Serves over 2.2 million children daily across 24,000+ schools in 16 states, ensuring children stay in school and receive essential calories, protein, and micronutrients.",
    "tags": [
      "ngo",
      "school",
      "meal",
      "food",
      "child",
      "nutrition",
      "akshaya patra",
      "mid day meal",
      "education"
    ],
    "eligibility": {
      "minAge": 5,
      "maxAge": 16,
      "genders": [
        "all",
        "female",
        "male"
      ],
      "occupations": [
        "student"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be enrolled in any Government or Government-Aided primary/upper-primary school."
    },
    "documents": [
      {
        "name": "School Admission Record",
        "required": true,
        "desc": "Proof of student enrollment"
      }
    ],
    "applicationSteps": [
      "Automatic inclusion for all students enrolled in partner government and local body schools."
    ],
    "officialUrl": "https://www.akshayapatra.org",
    "deadline": "Open All Year"
  },
  {
    "id": "smile-foundation-smile-twin",
    "name": "Smile Foundation: Smile Twin e-Learning & Youth Livelihood Scholarship",
    "category": "International NGO & Philanthropy",
    "ministry": "Smile Foundation (National NGO)",
    "benefitAmount": "100% Free Certified Training in Retail, BFSI, Digital Skills & Spoken English + Job Placement",
    "benefitType": "Free Vocational Training & Corporate Job Placement",
    "targetGroup": "Underprivileged Youth (18-29 Years) from Urban Slums and Rural Communities",
    "summary": "Employability skill training and placement for underprivileged youth in retail, banking, customer service, and digital tech.",
    "description": "Comprehensive 3-month certification program equipping youths with market-aligned job skills, interview training, and corporate placement in organized sector jobs.",
    "tags": [
      "ngo",
      "youth",
      "job",
      "training",
      "smile foundation",
      "skills",
      "placement",
      "unemployed"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 29,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "unemployed",
        "student",
        "daily wage / laborer"
      ],
      "maxIncome": 250000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must be Class 10 or 12 pass from economically weaker families seeking white-collar job employment."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Age and identity proof"
      },
      {
        "name": "Class 10 / 12 Marksheet",
        "required": true,
        "desc": "Basic academic qualification"
      }
    ],
    "applicationSteps": [
      "Enroll at nearest Smile Foundation Livelihood Center or apply on smilefoundationindia.org.",
      "Attend 3-month intensive skill and soft-skills boot camp.",
      "Participate in direct campus recruitment with corporate partners."
    ],
    "officialUrl": "https://www.smilefoundationindia.org",
    "deadline": "Monthly Batch Intakes"
  },
  {
    "id": "tata-trusts-community-health",
    "name": "Tata Trusts: Community Health & Cancer Care Support Fund",
    "category": "International NGO & Philanthropy",
    "ministry": "Tata Trusts (Philanthropic Endowment)",
    "benefitAmount": "Financial Assistance up to ₹2,50,000 for Tertiary Cancer Care & Chemotherapy in Network Hospitals",
    "benefitType": "Philanthropic Medical Treatment Grant",
    "targetGroup": "Low-Income Patients Diagnosed with Cancer and Critical Illnesses",
    "summary": "Philanthropic medical grant providing subsidized oncology care, advanced radiotherapy, and surgery for poor patients.",
    "description": "Tata Trusts operates specialized state-of-the-art cancer hospital networks across Assam, Jharkhand, Maharashtra, Andhra Pradesh, and UP, ensuring world-class affordable treatment.",
    "tags": [
      "cancer",
      "tata trusts",
      "ngo",
      "medical",
      "hospital",
      "chemotherapy",
      "grant",
      "health"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 100,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 300000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must have confirmed cancer biopsy/pathology report and family income below ₹3 Lakhs."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Patient identity"
      },
      {
        "name": "Medical Pathology & Biopsy Report",
        "required": true,
        "desc": "Proof of medical diagnosis"
      },
      {
        "name": "Family Income Certificate",
        "required": true,
        "desc": "Income proof"
      }
    ],
    "applicationSteps": [
      "Submit medical file to Medical Social Worker (MSW) desk at Tata Memorial / Tata network hospital.",
      "Trust medical committee approves treatment grant.",
      "Direct cashless adjustment against hospital bill."
    ],
    "officialUrl": "https://www.tatatrusts.org",
    "deadline": "Open All Year"
  },
  {
    "id": "dr-ysr-rythu-bharosa",
    "name": "YSR Rythu Bharosa (Andhra Pradesh)",
    "category": "Agriculture & Rural",
    "ministry": "Govt of Andhra Pradesh",
    "benefitAmount": "₹13,500 per year per farmer family",
    "benefitType": "Direct Bank Transfer",
    "targetGroup": "Small & Marginal Farmers in AP",
    "summary": "Income support for tenant and landowning farmers in Andhra Pradesh.",
    "description": "YSR Rythu Bharosa (Andhra Pradesh) is a dedicated initiative under Govt of Andhra Pradesh providing ₹13,500 per year per farmer family to Small & Marginal Farmers in AP. Income support for tenant and landowning farmers in Andhra Pradesh.",
    "tags": [
      "andhra pradesh",
      "farmer",
      "agriculture",
      "dbt"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all"
      ],
      "occupations": [
        "farmer"
      ],
      "maxIncome": 400000,
      "states": [
        "Andhra Pradesh",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": true,
      "specialConditions": "Must satisfy eligibility requirements under YSR Rythu Bharosa (Andhra Pradesh)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for YSR Rythu Bharosa (Andhra Pradesh).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "krushak-assistance-kalia",
    "name": "KALIA Scheme (Odisha)",
    "category": "Agriculture & Rural",
    "ministry": "Govt of Odisha",
    "benefitAmount": "₹10,000 per family/year + ₹12,500 Livelihood Grant",
    "benefitType": "Direct Cash Transfer",
    "targetGroup": "Small, Marginal & Landless Agricultural Households in Odisha",
    "summary": "Comprehensive financial assistance for cultivation, landless agricultural workers, and vulnerable farmers.",
    "description": "KALIA Scheme (Odisha) is a dedicated initiative under Govt of Odisha providing ₹10,000 per family/year + ₹12,500 Livelihood Grant to Small, Marginal & Landless Agricultural Households in Odisha. Comprehensive financial assistance for cultivation, landless agricultural workers, and vulnerable farmers.",
    "tags": [
      "odisha",
      "farmer",
      "landless",
      "agriculture",
      "kalia"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 75,
      "genders": [
        "all"
      ],
      "occupations": [
        "farmer",
        "agricultural laborer"
      ],
      "maxIncome": 300000,
      "states": [
        "Odisha",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under KALIA Scheme (Odisha)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for KALIA Scheme (Odisha).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "mukhyamantri-krishi-ashirwad",
    "name": "Mukhyamantri Krishi Ashirwad Yojana (Jharkhand)",
    "category": "Agriculture & Rural",
    "ministry": "Govt of Jharkhand",
    "benefitAmount": "₹5,000 to ₹25,000 per year based on land acreage",
    "benefitType": "Direct Bank Transfer",
    "targetGroup": "Small & Marginal Farmers of Jharkhand",
    "summary": "Financial support per acre for procurement of seeds, fertilizers, and farm equipment.",
    "description": "Mukhyamantri Krishi Ashirwad Yojana (Jharkhand) is a dedicated initiative under Govt of Jharkhand providing ₹5,000 to ₹25,000 per year based on land acreage to Small & Marginal Farmers of Jharkhand. Financial support per acre for procurement of seeds, fertilizers, and farm equipment.",
    "tags": [
      "jharkhand",
      "farmer",
      "agriculture",
      "crop"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 75,
      "genders": [
        "all"
      ],
      "occupations": [
        "farmer"
      ],
      "maxIncome": 300000,
      "states": [
        "Jharkhand",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": true,
      "specialConditions": "Must satisfy eligibility requirements under Mukhyamantri Krishi Ashirwad Yojana (Jharkhand)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Mukhyamantri Krishi Ashirwad Yojana (Jharkhand).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "bhavantar-bhugtan-yojana",
    "name": "Bhavantar Bhugtan Yojana (Price Deficit Scheme)",
    "category": "Agriculture & Rural",
    "ministry": "Govt of Madhya Pradesh & Haryana",
    "benefitAmount": "Direct Compensation for Difference between MSP and Market Selling Price",
    "benefitType": "Direct DBT Compensation",
    "targetGroup": "Oilseed & Pulse Farmers Selling in APMC Mandis",
    "summary": "Protects farmers from distress sales by directly depositing the price deficit between MSP and mandi price.",
    "description": "Bhavantar Bhugtan Yojana (Price Deficit Scheme) is a dedicated initiative under Govt of Madhya Pradesh & Haryana providing Direct Compensation for Difference between MSP and Market Selling Price to Oilseed & Pulse Farmers Selling in APMC Mandis. Protects farmers from distress sales by directly depositing the price deficit between MSP and mandi price.",
    "tags": [
      "msp",
      "crop price",
      "farmer",
      "agriculture",
      "compensation"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all"
      ],
      "occupations": [
        "farmer"
      ],
      "maxIncome": 500000,
      "states": [
        "Madhya Pradesh",
        "Haryana",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": true,
      "specialConditions": "Must satisfy eligibility requirements under Bhavantar Bhugtan Yojana (Price Deficit Scheme)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Bhavantar Bhugtan Yojana (Price Deficit Scheme).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "punjab-crop-diversification",
    "name": "Punjab Crop Diversification & Water Conservation Incentive",
    "category": "Agriculture & Rural",
    "ministry": "Department of Agriculture, Govt of Punjab",
    "benefitAmount": "₹7,000 per Acre Incentive for Shifting from Paddy to Maize/Pulses",
    "benefitType": "Direct Incentive DBT",
    "targetGroup": "Farmers in Over-Exploited Ground Water Blocks in Punjab",
    "summary": "Incentive to conserve groundwater by diversifying from water-guzzling paddy to cotton, maize, and pulses.",
    "description": "Punjab Crop Diversification & Water Conservation Incentive is a dedicated initiative under Department of Agriculture, Govt of Punjab providing ₹7,000 per Acre Incentive for Shifting from Paddy to Maize/Pulses to Farmers in Over-Exploited Ground Water Blocks in Punjab. Incentive to conserve groundwater by diversifying from water-guzzling paddy to cotton, maize, and pulses.",
    "tags": [
      "punjab",
      "groundwater",
      "farmer",
      "maize",
      "pulses",
      "diversification"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all"
      ],
      "occupations": [
        "farmer"
      ],
      "maxIncome": 600000,
      "states": [
        "Punjab",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": true,
      "specialConditions": "Must satisfy eligibility requirements under Punjab Crop Diversification & Water Conservation Incentive."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Punjab Crop Diversification & Water Conservation Incentive.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "kerala-subhiksha-keralam",
    "name": "Subhiksha Keralam (Integrated Food Security Scheme)",
    "category": "Agriculture & Rural",
    "ministry": "Govt of Kerala",
    "benefitAmount": "Up to ₹30,000 per Hectare for Fallow Land Cultivation",
    "benefitType": "Input Subsidy & Technical Assistance",
    "targetGroup": "Farmers, SHGs & Kudumbashree Units in Kerala",
    "summary": "Converts fallow lands into productive organic vegetable and tuber cultivation units.",
    "description": "Subhiksha Keralam (Integrated Food Security Scheme) is a dedicated initiative under Govt of Kerala providing Up to ₹30,000 per Hectare for Fallow Land Cultivation to Farmers, SHGs & Kudumbashree Units in Kerala. Converts fallow lands into productive organic vegetable and tuber cultivation units.",
    "tags": [
      "kerala",
      "fallow land",
      "kudumbashree",
      "organic",
      "vegetables"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 75,
      "genders": [
        "all"
      ],
      "occupations": [
        "farmer",
        "self-employed"
      ],
      "maxIncome": 400000,
      "states": [
        "Kerala",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": true,
      "specialConditions": "Must satisfy eligibility requirements under Subhiksha Keralam (Integrated Food Security Scheme)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Subhiksha Keralam (Integrated Food Security Scheme).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "bihar-diesel-anudan",
    "name": "Bihar Diesel Anudan & Irrigation Subsidy",
    "category": "Agriculture & Rural",
    "ministry": "Govt of Bihar (Agriculture Department)",
    "benefitAmount": "₹75 per Litre Diesel Subsidy up to ₹1,500/Acre for Irrigation",
    "benefitType": "Direct Cash Subsidy (DBT)",
    "targetGroup": "Farmers Facing Drought & Deficit Rainfall in Bihar",
    "summary": "Immediate irrigation fuel subsidy to save standing crops during dry spells and rainfall deficits.",
    "description": "Bihar Diesel Anudan & Irrigation Subsidy is a dedicated initiative under Govt of Bihar (Agriculture Department) providing ₹75 per Litre Diesel Subsidy up to ₹1,500/Acre for Irrigation to Farmers Facing Drought & Deficit Rainfall in Bihar. Immediate irrigation fuel subsidy to save standing crops during dry spells and rainfall deficits.",
    "tags": [
      "bihar",
      "diesel",
      "irrigation",
      "drought",
      "farmer"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 75,
      "genders": [
        "all"
      ],
      "occupations": [
        "farmer"
      ],
      "maxIncome": 300000,
      "states": [
        "Bihar",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": true,
      "specialConditions": "Must satisfy eligibility requirements under Bihar Diesel Anudan & Irrigation Subsidy."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Bihar Diesel Anudan & Irrigation Subsidy.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "assam-tractor-scheme-cmsgu",
    "name": "Chief Minister Samagra Gramya Unnayan Yojana (Assam)",
    "category": "Agriculture & Rural",
    "ministry": "Govt of Assam",
    "benefitAmount": "70% Government Subsidy on Agricultural Tractors & Implements",
    "benefitType": "Capital Machinery Subsidy",
    "targetGroup": "Village Farmer Groups in Assam (8-10 Members)",
    "summary": "Provides one high-power tractor and farm accessories unit to a farmer group in every revenue village of Assam.",
    "description": "Chief Minister Samagra Gramya Unnayan Yojana (Assam) is a dedicated initiative under Govt of Assam providing 70% Government Subsidy on Agricultural Tractors & Implements to Village Farmer Groups in Assam (8-10 Members). Provides one high-power tractor and farm accessories unit to a farmer group in every revenue village of Assam.",
    "tags": [
      "assam",
      "tractor",
      "farm machinery",
      "mechanization",
      "subsidy"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 65,
      "genders": [
        "all"
      ],
      "occupations": [
        "farmer"
      ],
      "maxIncome": 500000,
      "states": [
        "Assam",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": true,
      "specialConditions": "Must satisfy eligibility requirements under Chief Minister Samagra Gramya Unnayan Yojana (Assam)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Chief Minister Samagra Gramya Unnayan Yojana (Assam).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "rajasthan-krishi-sathi",
    "name": "Mukhyamantri Krishi Sathi Yojana (Rajasthan)",
    "category": "Agriculture & Rural",
    "ministry": "Govt of Rajasthan",
    "benefitAmount": "Up to ₹5,00,000 Compensation for Fatal Accidents during Farm Work",
    "benefitType": "Accident Compensation Claim",
    "targetGroup": "Farmers & Agricultural Laborers in Rajasthan",
    "summary": "Financial assistance to families in case of death or permanent disability while operating farm machinery.",
    "description": "Mukhyamantri Krishi Sathi Yojana (Rajasthan) is a dedicated initiative under Govt of Rajasthan providing Up to ₹5,00,000 Compensation for Fatal Accidents during Farm Work to Farmers & Agricultural Laborers in Rajasthan. Financial assistance to families in case of death or permanent disability while operating farm machinery.",
    "tags": [
      "rajasthan",
      "accident",
      "farmer",
      "laborer",
      "compensation"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 70,
      "genders": [
        "all"
      ],
      "occupations": [
        "farmer",
        "agricultural laborer"
      ],
      "maxIncome": 400000,
      "states": [
        "Rajasthan",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Mukhyamantri Krishi Sathi Yojana (Rajasthan)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Mukhyamantri Krishi Sathi Yojana (Rajasthan).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "maharashtra-nanaji-deshmukh-pokhra",
    "name": "POCRA (Nanaji Deshmukh Krishi Sanjivani Prakalp - Maharashtra)",
    "category": "Agriculture & Rural",
    "ministry": "Govt of Maharashtra & World Bank",
    "benefitAmount": "Up to 75% Subsidy for Farm Ponds, Shade Nets, Drip & Goat Rearing",
    "benefitType": "Direct Capital Grant",
    "targetGroup": "Small & Marginal Farmers in 15 Drought-Prone Districts of Maharashtra",
    "summary": "Climate-resilient agriculture project co-funded by World Bank across Vidarbha and Marathwada.",
    "description": "POCRA (Nanaji Deshmukh Krishi Sanjivani Prakalp - Maharashtra) is a dedicated initiative under Govt of Maharashtra & World Bank providing Up to 75% Subsidy for Farm Ponds, Shade Nets, Drip & Goat Rearing to Small & Marginal Farmers in 15 Drought-Prone Districts of Maharashtra. Climate-resilient agriculture project co-funded by World Bank across Vidarbha and Marathwada.",
    "tags": [
      "maharashtra",
      "drip irrigation",
      "farm pond",
      "shade net",
      "goat",
      "farmer"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 75,
      "genders": [
        "all"
      ],
      "occupations": [
        "farmer"
      ],
      "maxIncome": 350000,
      "states": [
        "Maharashtra",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": true,
      "specialConditions": "Must satisfy eligibility requirements under POCRA (Nanaji Deshmukh Krishi Sanjivani Prakalp - Maharashtra)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for POCRA (Nanaji Deshmukh Krishi Sanjivani Prakalp - Maharashtra).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "chiranjeevi-health-rajasthan",
    "name": "Mukhyamantri Ayushman Arogya (Chiranjeevi) Yojana (Rajasthan)",
    "category": "Healthcare & Insurance",
    "ministry": "Govt of Rajasthan",
    "benefitAmount": "₹25,00,000 Universal Cashless Health Insurance per Family/Year",
    "benefitType": "100% Cashless Medical Hospitalization",
    "targetGroup": "All Families in Rajasthan",
    "summary": "State-wide universal health insurance covering organ transplants, open heart surgery, and oncology up to ₹25 Lakhs.",
    "description": "Mukhyamantri Ayushman Arogya (Chiranjeevi) Yojana (Rajasthan) is a dedicated initiative under Govt of Rajasthan providing ₹25,00,000 Universal Cashless Health Insurance per Family/Year to All Families in Rajasthan. State-wide universal health insurance covering organ transplants, open heart surgery, and oncology up to ₹25 Lakhs.",
    "tags": [
      "rajasthan",
      "health",
      "hospital",
      "surgery",
      "cashless"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 120,
      "genders": [
        "all"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 800000,
      "states": [
        "Rajasthan",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Mukhyamantri Ayushman Arogya (Chiranjeevi) Yojana (Rajasthan)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Mukhyamantri Ayushman Arogya (Chiranjeevi) Yojana (Rajasthan).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "aarogyasri-ap",
    "name": "Dr. YSR Aarogyasri Health Scheme (Andhra Pradesh)",
    "category": "Healthcare & Insurance",
    "ministry": "Govt of Andhra Pradesh",
    "benefitAmount": "₹25,00,000 Universal Hospitalization Coverage for 3,257 Medical Procedures",
    "benefitType": "Cashless Secondary & Tertiary Medical Care",
    "targetGroup": "BPL & Low-Income Families in Andhra Pradesh",
    "summary": "Flagship cashless healthcare scheme covering cancer, heart surgery, nephrology, and trauma care.",
    "description": "Dr. YSR Aarogyasri Health Scheme (Andhra Pradesh) is a dedicated initiative under Govt of Andhra Pradesh providing ₹25,00,000 Universal Hospitalization Coverage for 3,257 Medical Procedures to BPL & Low-Income Families in Andhra Pradesh. Flagship cashless healthcare scheme covering cancer, heart surgery, nephrology, and trauma care.",
    "tags": [
      "andhra pradesh",
      "aarogyasri",
      "hospital",
      "health",
      "cashless"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 120,
      "genders": [
        "all"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "Andhra Pradesh",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Dr. YSR Aarogyasri Health Scheme (Andhra Pradesh)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Dr. YSR Aarogyasri Health Scheme (Andhra Pradesh).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "swasthya-sathi-wb",
    "name": "Swasthya Sathi Scheme (West Bengal)",
    "category": "Healthcare & Insurance",
    "ministry": "Govt of West Bengal",
    "benefitAmount": "₹5,00,000 Cashless Health Cover per Family Issued in Name of Female Head",
    "benefitType": "Cashless Smart Card Health Insurance",
    "targetGroup": "All Residents of West Bengal",
    "summary": "Universal cashless health card issued in the name of the eldest woman of the household.",
    "description": "Swasthya Sathi Scheme (West Bengal) is a dedicated initiative under Govt of West Bengal providing ₹5,00,000 Cashless Health Cover per Family Issued in Name of Female Head to All Residents of West Bengal. Universal cashless health card issued in the name of the eldest woman of the household.",
    "tags": [
      "west bengal",
      "swasthya sathi",
      "smart card",
      "women",
      "hospital"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 120,
      "genders": [
        "all"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 10000000,
      "states": [
        "West Bengal",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Swasthya Sathi Scheme (West Bengal)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Swasthya Sathi Scheme (West Bengal).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "mahatma-jyotirao-phule-mh",
    "name": "MJPJAY (Mahatma Jyotirao Phule Jan Arogya Yojana - Maharashtra)",
    "category": "Healthcare & Insurance",
    "ministry": "Govt of Maharashtra",
    "benefitAmount": "₹5,00,000 Cashless Treatment per Family across 1,356 Surgeries & Procedures",
    "benefitType": "Cashless Medical Insurance",
    "targetGroup": "Yellow, Orange Ration Card Holders & White Card Holders in Maharashtra",
    "summary": "Universalized state health assurance scheme for specialized hospital operations and ICU treatments in Maharashtra.",
    "description": "MJPJAY (Mahatma Jyotirao Phule Jan Arogya Yojana - Maharashtra) is a dedicated initiative under Govt of Maharashtra providing ₹5,00,000 Cashless Treatment per Family across 1,356 Surgeries & Procedures to Yellow, Orange Ration Card Holders & White Card Holders in Maharashtra. Universalized state health assurance scheme for specialized hospital operations and ICU treatments in Maharashtra.",
    "tags": [
      "maharashtra",
      "mjpjay",
      "hospital",
      "surgery",
      "ration card"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 120,
      "genders": [
        "all"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 800000,
      "states": [
        "Maharashtra",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under MJPJAY (Mahatma Jyotirao Phule Jan Arogya Yojana - Maharashtra)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for MJPJAY (Mahatma Jyotirao Phule Jan Arogya Yojana - Maharashtra).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "chief-minister-comprehensive-health-tn",
    "name": "CMCHIS (Chief Minister's Comprehensive Health Insurance - Tamil Nadu)",
    "category": "Healthcare & Insurance",
    "ministry": "Govt of Tamil Nadu & United India Insurance",
    "benefitAmount": "₹5,00,000 Cashless Cover for 1,513 Medical Procedures & 52 Diagnostic Tests",
    "benefitType": "Cashless Hospital Treatment",
    "targetGroup": "Families in Tamil Nadu with Income below ₹1.2 Lakhs",
    "summary": "Free medical surgeries, diagnostic evaluations, and cochlear implants across Tamil Nadu.",
    "description": "CMCHIS (Chief Minister's Comprehensive Health Insurance - Tamil Nadu) is a dedicated initiative under Govt of Tamil Nadu & United India Insurance providing ₹5,00,000 Cashless Cover for 1,513 Medical Procedures & 52 Diagnostic Tests to Families in Tamil Nadu with Income below ₹1.2 Lakhs. Free medical surgeries, diagnostic evaluations, and cochlear implants across Tamil Nadu.",
    "tags": [
      "tamil nadu",
      "health",
      "insurance",
      "hospital",
      "surgery"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 120,
      "genders": [
        "all"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 120000,
      "states": [
        "Tamil Nadu",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under CMCHIS (Chief Minister's Comprehensive Health Insurance - Tamil Nadu)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for CMCHIS (Chief Minister's Comprehensive Health Insurance - Tamil Nadu).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "karunya-health-kerala",
    "name": "Karunya Arogya Suraksha Padhathi (KASP - Kerala)",
    "category": "Healthcare & Insurance",
    "ministry": "Govt of Kerala",
    "benefitAmount": "₹5,00,000 Cashless Treatment for High-Cost Chronic Diseases",
    "benefitType": "Cashless Medical Aid",
    "targetGroup": "Poor & Vulnerable Families in Kerala",
    "summary": "Covers renal failure dialysis, cancer, heart surgery, and neurological care in empaneled hospitals.",
    "description": "Karunya Arogya Suraksha Padhathi (KASP - Kerala) is a dedicated initiative under Govt of Kerala providing ₹5,00,000 Cashless Treatment for High-Cost Chronic Diseases to Poor & Vulnerable Families in Kerala. Covers renal failure dialysis, cancer, heart surgery, and neurological care in empaneled hospitals.",
    "tags": [
      "kerala",
      "karunya",
      "dialysis",
      "cancer",
      "health"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 120,
      "genders": [
        "all"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 300000,
      "states": [
        "Kerala",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Karunya Arogya Suraksha Padhathi (KASP - Kerala)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Karunya Arogya Suraksha Padhathi (KASP - Kerala).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "biju-swasthya-kalyan-odisha",
    "name": "BSKY (Biju Swasthya Kalyan Yojana - Odisha)",
    "category": "Healthcare & Insurance",
    "ministry": "Govt of Odisha",
    "benefitAmount": "₹5,00,000 (Male) / ₹10,00,000 (Female) Cashless Healthcare Cover",
    "benefitType": "Cashless Smart Health Card",
    "targetGroup": "All Rural & Urban Poor Families in Odisha",
    "summary": "Specialized higher cashless limit of ₹10 Lakhs for women for critical illnesses and surgical treatments.",
    "description": "BSKY (Biju Swasthya Kalyan Yojana - Odisha) is a dedicated initiative under Govt of Odisha providing ₹5,00,000 (Male) / ₹10,00,000 (Female) Cashless Healthcare Cover to All Rural & Urban Poor Families in Odisha. Specialized higher cashless limit of ₹10 Lakhs for women for critical illnesses and surgical treatments.",
    "tags": [
      "odisha",
      "bsky",
      "smart card",
      "women",
      "hospital"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 120,
      "genders": [
        "all"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 300000,
      "states": [
        "Odisha",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under BSKY (Biju Swasthya Kalyan Yojana - Odisha)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for BSKY (Biju Swasthya Kalyan Yojana - Odisha).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "delhi-arogya-kosh",
    "name": "Delhi Arogya Kosh & Free Diagnostic Scheme",
    "category": "Healthcare & Insurance",
    "ministry": "Govt of NCT of Delhi",
    "benefitAmount": "100% Free Surgeries, MRI, CT Scans, PET Scans & Cash Assistance up to ₹5 Lakhs",
    "benefitType": "Direct Hospital Bill Waiver & Free Diagnostics",
    "targetGroup": "All Residents of Delhi with Voter ID",
    "summary": "Provides free MRI, CT scans, and 450+ surgical procedures in top private hospitals if waiting time in govt hospital exceeds 30 days.",
    "description": "Delhi Arogya Kosh & Free Diagnostic Scheme is a dedicated initiative under Govt of NCT of Delhi providing 100% Free Surgeries, MRI, CT Scans, PET Scans & Cash Assistance up to ₹5 Lakhs to All Residents of Delhi with Voter ID. Provides free MRI, CT scans, and 450+ surgical procedures in top private hospitals if waiting time in govt hospital exceeds 30 days.",
    "tags": [
      "delhi",
      "mri",
      "ct scan",
      "surgery",
      "free",
      "hospital"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 120,
      "genders": [
        "all"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 10000000,
      "states": [
        "Delhi (NCT)",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Delhi Arogya Kosh & Free Diagnostic Scheme."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Delhi Arogya Kosh & Free Diagnostic Scheme.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "himcare-himachal",
    "name": "HIMCARE (Himachal Health Care Scheme)",
    "category": "Healthcare & Insurance",
    "ministry": "Govt of Himachal Pradesh",
    "benefitAmount": "₹5,00,000 Cashless Hospitalization for Families not covered by PM-JAY",
    "benefitType": "Cashless Health Insurance Card",
    "targetGroup": "Citizens of Himachal Pradesh",
    "summary": "State-funded health assurance card ensuring zero out-of-pocket hospital costs for mountain families.",
    "description": "HIMCARE (Himachal Health Care Scheme) is a dedicated initiative under Govt of Himachal Pradesh providing ₹5,00,000 Cashless Hospitalization for Families not covered by PM-JAY to Citizens of Himachal Pradesh. State-funded health assurance card ensuring zero out-of-pocket hospital costs for mountain families.",
    "tags": [
      "himachal pradesh",
      "himcare",
      "health",
      "hospital",
      "insurance"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 120,
      "genders": [
        "all"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "Himachal Pradesh",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under HIMCARE (Himachal Health Care Scheme)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for HIMCARE (Himachal Health Care Scheme).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "gujarat-ma-amrutam",
    "name": "Mukhyamantri Amrutam (MA & MA Vatsalya - Gujarat)",
    "category": "Healthcare & Insurance",
    "ministry": "Govt of Gujarat",
    "benefitAmount": "₹10,00,000 Cashless Coverage for Critical Catastrophic Illnesses",
    "benefitType": "Cashless Hospitalization Card",
    "targetGroup": "BPL & Middle-Class Families in Gujarat (Income up to ₹4 Lakhs)",
    "summary": "Specialized critical care for cardiovascular diseases, burns, poly-trauma, kidney transplants, and pediatric surgery.",
    "description": "Mukhyamantri Amrutam (MA & MA Vatsalya - Gujarat) is a dedicated initiative under Govt of Gujarat providing ₹10,00,000 Cashless Coverage for Critical Catastrophic Illnesses to BPL & Middle-Class Families in Gujarat (Income up to ₹4 Lakhs). Specialized critical care for cardiovascular diseases, burns, poly-trauma, kidney transplants, and pediatric surgery.",
    "tags": [
      "gujarat",
      "ma amrutam",
      "surgery",
      "hospital",
      "health"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 120,
      "genders": [
        "all"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 400000,
      "states": [
        "Gujarat",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Mukhyamantri Amrutam (MA & MA Vatsalya - Gujarat)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Mukhyamantri Amrutam (MA & MA Vatsalya - Gujarat).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "karnataka-elevate-startup",
    "name": "ELEVATE 100 Karnataka Startup Innovation Grant",
    "category": "Business & Micro-Credit",
    "ministry": "Department of IT & BT, Govt of Karnataka",
    "benefitAmount": "Up to ₹50,00,000 Non-Equity Idea-to-PoC Seed Funding",
    "benefitType": "Non-Equity Cash Grant",
    "targetGroup": "Tech & DeepTech Startups Registered in Karnataka",
    "summary": "Selects top 100 innovative early-stage startups in Karnataka and provides equity-free seed grants and mentorship.",
    "description": "ELEVATE 100 Karnataka Startup Innovation Grant is a dedicated initiative under Department of IT & BT, Govt of Karnataka providing Up to ₹50,00,000 Non-Equity Idea-to-PoC Seed Funding to Tech & DeepTech Startups Registered in Karnataka. Selects top 100 innovative early-stage startups in Karnataka and provides equity-free seed grants and mentorship.",
    "tags": [
      "karnataka",
      "startup",
      "grant",
      "tech",
      "innovation",
      "seed fund"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 55,
      "genders": [
        "all"
      ],
      "occupations": [
        "self-employed",
        "student"
      ],
      "maxIncome": 2500000,
      "states": [
        "Karnataka",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under ELEVATE 100 Karnataka Startup Innovation Grant."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for ELEVATE 100 Karnataka Startup Innovation Grant.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "tamil-nadu-tanseed",
    "name": "TANSEED (Tamil Nadu Startup Seed Grant Fund)",
    "category": "Business & Micro-Credit",
    "ministry": "StartupTN, Govt of Tamil Nadu",
    "benefitAmount": "₹10,00,000 Non-Equity Seed Grant for Early Stage Startups",
    "benefitType": "Direct Seed Capital Grant",
    "targetGroup": "Early Stage Startups with Working Prototypes in Tamil Nadu",
    "summary": "Provides ₹10 Lakhs seed capital to green-tech, rural impact, healthcare, and female-led startups in Tamil Nadu.",
    "description": "TANSEED (Tamil Nadu Startup Seed Grant Fund) is a dedicated initiative under StartupTN, Govt of Tamil Nadu providing ₹10,00,000 Non-Equity Seed Grant for Early Stage Startups to Early Stage Startups with Working Prototypes in Tamil Nadu. Provides ₹10 Lakhs seed capital to green-tech, rural impact, healthcare, and female-led startups in Tamil Nadu.",
    "tags": [
      "tamil nadu",
      "tanseed",
      "startup",
      "grant",
      "seed money"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 55,
      "genders": [
        "all"
      ],
      "occupations": [
        "self-employed",
        "student"
      ],
      "maxIncome": 2000000,
      "states": [
        "Tamil Nadu",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under TANSEED (Tamil Nadu Startup Seed Grant Fund)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for TANSEED (Tamil Nadu Startup Seed Grant Fund).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "kerala-ksum-seed-loan",
    "name": "Kerala Startup Mission (KSUM) Idea Grant & Scaleup Loan",
    "category": "Business & Micro-Credit",
    "ministry": "Kerala Startup Mission, Govt of Kerala",
    "benefitAmount": "₹2,00,000 (Idea Grant) to ₹15,00,000 (Product Grant) + Soft Loans",
    "benefitType": "Innovation Grant & Low-Interest Loan",
    "targetGroup": "Innovators, Students, and Technology Entrepreneurs in Kerala",
    "summary": "Supports student innovators and technology entrepreneurs from ideation to prototype and commercialization.",
    "description": "Kerala Startup Mission (KSUM) Idea Grant & Scaleup Loan is a dedicated initiative under Kerala Startup Mission, Govt of Kerala providing ₹2,00,000 (Idea Grant) to ₹15,00,000 (Product Grant) + Soft Loans to Innovators, Students, and Technology Entrepreneurs in Kerala. Supports student innovators and technology entrepreneurs from ideation to prototype and commercialization.",
    "tags": [
      "kerala",
      "ksum",
      "startup",
      "grant",
      "technology"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 50,
      "genders": [
        "all"
      ],
      "occupations": [
        "student",
        "self-employed"
      ],
      "maxIncome": 1500000,
      "states": [
        "Kerala",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Kerala Startup Mission (KSUM) Idea Grant & Scaleup Loan."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Kerala Startup Mission (KSUM) Idea Grant & Scaleup Loan.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "up-odop-toolkit-finance",
    "name": "ODOP (One District One Product) Margin Money & Toolkit Scheme (UP)",
    "category": "Business & Micro-Credit",
    "ministry": "Department of MSME & Export Promotion, Govt of Uttar Pradesh",
    "benefitAmount": "Up to ₹20,00,000 Loan with 25% Margin Money Subsidy + Free Toolkits",
    "benefitType": "Capital Subsidy & Tool Kit Grant",
    "targetGroup": "Traditional Artisans & Manufacturers in 75 Districts of Uttar Pradesh",
    "summary": "Revitalizes indigenous craft clusters (Varanasi Silk, Moradabad Brass, Bhadohi Carpets, Aligarh Locks).",
    "description": "ODOP (One District One Product) Margin Money & Toolkit Scheme (UP) is a dedicated initiative under Department of MSME & Export Promotion, Govt of Uttar Pradesh providing Up to ₹20,00,000 Loan with 25% Margin Money Subsidy + Free Toolkits to Traditional Artisans & Manufacturers in 75 Districts of Uttar Pradesh. Revitalizes indigenous craft clusters (Varanasi Silk, Moradabad Brass, Bhadohi Carpets, Aligarh Locks).",
    "tags": [
      "uttar pradesh",
      "odop",
      "artisan",
      "silk",
      "brass",
      "handicraft",
      "subsidy"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "genders": [
        "all"
      ],
      "occupations": [
        "artisan",
        "self-employed"
      ],
      "maxIncome": 500000,
      "states": [
        "Uttar Pradesh",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under ODOP (One District One Product) Margin Money & Toolkit Scheme (UP)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for ODOP (One District One Product) Margin Money & Toolkit Scheme (UP).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "mukhyamantri-udyami-bihar",
    "name": "Mukhyamantri Udyami Yojana (Bihar - SC/ST/EBC/Women/Youth)",
    "category": "Business & Micro-Credit",
    "ministry": "Department of Industries, Govt of Bihar",
    "benefitAmount": "₹10,00,000 Financial Assistance (₹5 Lakhs 100% Grant + ₹5 Lakhs Interest-Free Loan)",
    "benefitType": "50% Direct Grant + 50% Interest-Free Loan",
    "targetGroup": "Unemployed Youth, Women, SC, ST & EBC in Bihar",
    "summary": "Transformational industrial scheme providing ₹5 Lakhs grant and ₹5 Lakhs interest-free loan to start small manufacturing units.",
    "description": "Mukhyamantri Udyami Yojana (Bihar - SC/ST/EBC/Women/Youth) is a dedicated initiative under Department of Industries, Govt of Bihar providing ₹10,00,000 Financial Assistance (₹5 Lakhs 100% Grant + ₹5 Lakhs Interest-Free Loan) to Unemployed Youth, Women, SC, ST & EBC in Bihar. Transformational industrial scheme providing ₹5 Lakhs grant and ₹5 Lakhs interest-free loan to start small manufacturing units.",
    "tags": [
      "bihar",
      "udyami",
      "startup",
      "manufacturing",
      "loan",
      "grant",
      "sc",
      "st",
      "women"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 50,
      "genders": [
        "all"
      ],
      "occupations": [
        "unemployed",
        "self-employed"
      ],
      "maxIncome": 600000,
      "states": [
        "Bihar",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Mukhyamantri Udyami Yojana (Bihar - SC/ST/EBC/Women/Youth)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Mukhyamantri Udyami Yojana (Bihar - SC/ST/EBC/Women/Youth).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "cm-employment-generation-mh",
    "name": "CMEGP (Chief Minister Employment Generation Programme - Maharashtra)",
    "category": "Business & Micro-Credit",
    "ministry": "Industries Department, Govt of Maharashtra",
    "benefitAmount": "Project Loan up to ₹50 Lakhs with 15% to 35% State Capital Subsidy",
    "benefitType": "Credit-Linked Capital Subsidy",
    "targetGroup": "Micro-Entrepreneurs & Unemployed Youth in Maharashtra",
    "summary": "State-level capital subsidy scheme for setting up service units, food processing, and small industries in Maharashtra.",
    "description": "CMEGP (Chief Minister Employment Generation Programme - Maharashtra) is a dedicated initiative under Industries Department, Govt of Maharashtra providing Project Loan up to ₹50 Lakhs with 15% to 35% State Capital Subsidy to Micro-Entrepreneurs & Unemployed Youth in Maharashtra. State-level capital subsidy scheme for setting up service units, food processing, and small industries in Maharashtra.",
    "tags": [
      "maharashtra",
      "cmegp",
      "subsidy",
      "business",
      "startup",
      "loan"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 55,
      "genders": [
        "all"
      ],
      "occupations": [
        "unemployed",
        "self-employed"
      ],
      "maxIncome": 800000,
      "states": [
        "Maharashtra",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under CMEGP (Chief Minister Employment Generation Programme - Maharashtra)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for CMEGP (Chief Minister Employment Generation Programme - Maharashtra).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "asire-skill-incubation-grant",
    "name": "ASPIRE Scheme (Promotion of Innovation & Rural Industry)",
    "category": "Business & Micro-Credit",
    "ministry": "Ministry of Micro, Small and Medium Enterprises, Govt of India",
    "benefitAmount": "Up to ₹1 Crore Grant for Livelihood Business Incubators (LBI)",
    "benefitType": "Incubation Infrastructure Grant",
    "targetGroup": "Agro-Rural Entrepreneurs, Training Institutes & Rural Startups",
    "summary": "Creates local rural livelihood incubation centers to train rural youths in honey processing, bakery, packaging, and coir.",
    "description": "ASPIRE Scheme (Promotion of Innovation & Rural Industry) is a dedicated initiative under Ministry of Micro, Small and Medium Enterprises, Govt of India providing Up to ₹1 Crore Grant for Livelihood Business Incubators (LBI) to Agro-Rural Entrepreneurs, Training Institutes & Rural Startups. Creates local rural livelihood incubation centers to train rural youths in honey processing, bakery, packaging, and coir.",
    "tags": [
      "aspire",
      "rural",
      "incubation",
      "agro industry",
      "msme",
      "grant"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 65,
      "genders": [
        "all"
      ],
      "occupations": [
        "self-employed",
        "farmer"
      ],
      "maxIncome": 1000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under ASPIRE Scheme (Promotion of Innovation & Rural Industry)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for ASPIRE Scheme (Promotion of Innovation & Rural Industry).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "msme-credit-guarantee-cgtmse",
    "name": "CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises)",
    "category": "Business & Micro-Credit",
    "ministry": "Ministry of MSME & SIDBI",
    "benefitAmount": "100% Collateral-Free Bank Loans up to ₹5 Crores with 85% Sovereign Guarantee",
    "benefitType": "Credit Guarantee for Institutional Bank Borrowing",
    "targetGroup": "Micro and Small Manufacturing and Service Enterprises",
    "summary": "Eliminates collateral mortgage requirement for bank business loans by providing sovereign guarantee to lending institutions.",
    "description": "CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) is a dedicated initiative under Ministry of MSME & SIDBI providing 100% Collateral-Free Bank Loans up to ₹5 Crores with 85% Sovereign Guarantee to Micro and Small Manufacturing and Service Enterprises. Eliminates collateral mortgage requirement for bank business loans by providing sovereign guarantee to lending institutions.",
    "tags": [
      "cgtmse",
      "collateral free",
      "loan",
      "msme",
      "business",
      "sidbi"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 70,
      "genders": [
        "all"
      ],
      "occupations": [
        "self-employed",
        "artisan"
      ],
      "maxIncome": 5000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pm-formalisation-micro-food",
    "name": "PMFME (PM Formalisation of Micro Food Processing Enterprises)",
    "category": "Business & Micro-Credit",
    "ministry": "Ministry of Food Processing Industries, Govt of India",
    "benefitAmount": "35% Credit-Linked Capital Subsidy up to ₹10,00,000 + ₹40,000 Seed Capital per SHG Member",
    "benefitType": "Capital Subsidy & SHG Seed Fund",
    "targetGroup": "Individual Micro Food Processors, SHGs & Farmer Producer Organizations",
    "summary": "Upgrades unorganized food processing businesses (pickles, spices, papad, fruit juices, flour mills) with modern machinery.",
    "description": "PMFME (PM Formalisation of Micro Food Processing Enterprises) is a dedicated initiative under Ministry of Food Processing Industries, Govt of India providing 35% Credit-Linked Capital Subsidy up to ₹10,00,000 + ₹40,000 Seed Capital per SHG Member to Individual Micro Food Processors, SHGs & Farmer Producer Organizations. Upgrades unorganized food processing businesses (pickles, spices, papad, fruit juices, flour mills) with modern machinery.",
    "tags": [
      "food processing",
      "pickle",
      "spices",
      "flour mill",
      "shg",
      "subsidy",
      "loan"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "genders": [
        "all"
      ],
      "occupations": [
        "self-employed",
        "farmer"
      ],
      "maxIncome": 600000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under PMFME (PM Formalisation of Micro Food Processing Enterprises)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for PMFME (PM Formalisation of Micro Food Processing Enterprises).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "samarth-textile-skilling",
    "name": "SAMARTH Scheme (Capacity Building in Textile Sector)",
    "category": "Skill Development & Livelihood",
    "ministry": "Ministry of Textiles, Govt of India",
    "benefitAmount": "Free Certified Skilling + Wage Compensation + Placement in Organized Textile Mills",
    "benefitType": "Free Advanced Technical Skilling & Wage Support",
    "targetGroup": "Weavers, Handloom Workers & Rural Youth Seeking Garmenting Careers",
    "summary": "Trains workers in modern spinning, weaving, technical textiles, and computer-aided apparel design with guaranteed placement.",
    "description": "SAMARTH Scheme (Capacity Building in Textile Sector) is a dedicated initiative under Ministry of Textiles, Govt of India providing Free Certified Skilling + Wage Compensation + Placement in Organized Textile Mills to Weavers, Handloom Workers & Rural Youth Seeking Garmenting Careers. Trains workers in modern spinning, weaving, technical textiles, and computer-aided apparel design with guaranteed placement.",
    "tags": [
      "textile",
      "weaving",
      "garment",
      "apparel",
      "handloom",
      "skill",
      "training"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 50,
      "genders": [
        "all"
      ],
      "occupations": [
        "artisan",
        "daily wage / laborer",
        "unemployed"
      ],
      "maxIncome": 300000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under SAMARTH Scheme (Capacity Building in Textile Sector)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for SAMARTH Scheme (Capacity Building in Textile Sector).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pm-research-fellowship-pmrf",
    "name": "PMRF (Prime Minister's Research Fellowship)",
    "category": "Education & Scholarships",
    "ministry": "Ministry of Education, Govt of India",
    "benefitAmount": "₹70,000 to ₹80,000 Monthly Fellowship + ₹2,00,000 Annual Research Contingency Grant",
    "benefitType": "Direct High-Value Monthly Research Fellowship",
    "targetGroup": "Meritorious PhD Scholars in IITs, IISc, IISERs, and Top Central Universities",
    "summary": "Attracts best talent into doctoral research in Science, Technology, and Engineering with premium monthly stipend.",
    "description": "PMRF (Prime Minister's Research Fellowship) is a dedicated initiative under Ministry of Education, Govt of India providing ₹70,000 to ₹80,000 Monthly Fellowship + ₹2,00,000 Annual Research Contingency Grant to Meritorious PhD Scholars in IITs, IISc, IISERs, and Top Central Universities. Attracts best talent into doctoral research in Science, Technology, and Engineering with premium monthly stipend.",
    "tags": [
      "phd",
      "research",
      "fellowship",
      "iit",
      "iisc",
      "engineering",
      "science",
      "stipend"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 35,
      "genders": [
        "all"
      ],
      "occupations": [
        "student"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under PMRF (Prime Minister's Research Fellowship)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for PMRF (Prime Minister's Research Fellowship).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "inspire-scholarship-dst",
    "name": "INSPIRE Scholarship for Higher Education (SHE)",
    "category": "Education & Scholarships",
    "ministry": "Department of Science and Technology (DST), Govt of India",
    "benefitAmount": "₹80,000 per Year (₹5,000/month stipend + ₹20,000 annual summer project mentorship)",
    "benefitType": "Direct Scholarship & Mentorship Grant",
    "targetGroup": "Top 1% Class 12 Rankers Enrolling in B.Sc, B.S., and Integrated M.Sc Courses",
    "summary": "Encourages brilliant young minds to pursue pure and natural sciences (Physics, Chemistry, Maths, Biology).",
    "description": "INSPIRE Scholarship for Higher Education (SHE) is a dedicated initiative under Department of Science and Technology (DST), Govt of India providing ₹80,000 per Year (₹5,000/month stipend + ₹20,000 annual summer project mentorship) to Top 1% Class 12 Rankers Enrolling in B.Sc, B.S., and Integrated M.Sc Courses. Encourages brilliant young minds to pursue pure and natural sciences (Physics, Chemistry, Maths, Biology).",
    "tags": [
      "inspire",
      "science",
      "bsc",
      "msc",
      "physics",
      "chemistry",
      "maths",
      "scholarship"
    ],
    "eligibility": {
      "minAge": 17,
      "maxAge": 22,
      "genders": [
        "all"
      ],
      "occupations": [
        "student"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under INSPIRE Scholarship for Higher Education (SHE)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for INSPIRE Scholarship for Higher Education (SHE).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "manoj-das-translation-grant",
    "name": "National Translation Mission Fellowship",
    "category": "Education & Scholarships",
    "ministry": "Central Institute of Indian Languages, Ministry of Education",
    "benefitAmount": "Up to ₹1,50,000 per Book Translation Project into Scheduled Indian Languages",
    "benefitType": "Direct Literary Translation Grant",
    "targetGroup": "Translators, Linguists, Researchers & Bilingual Scholars",
    "summary": "Supports translation of major academic textbooks, science literature, and social sciences into all 22 scheduled Indian languages.",
    "description": "National Translation Mission Fellowship is a dedicated initiative under Central Institute of Indian Languages, Ministry of Education providing Up to ₹1,50,000 per Book Translation Project into Scheduled Indian Languages to Translators, Linguists, Researchers & Bilingual Scholars. Supports translation of major academic textbooks, science literature, and social sciences into all 22 scheduled Indian languages.",
    "tags": [
      "translation",
      "languages",
      "fellowship",
      "books",
      "linguistics",
      "education"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 65,
      "genders": [
        "all"
      ],
      "occupations": [
        "student",
        "self-employed"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under National Translation Mission Fellowship."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for National Translation Mission Fellowship.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "svagp-single-girl-child-fellowship",
    "name": "Savtribai Jyotirao Phule Fellowship for Single Girl Child",
    "category": "Education & Scholarships",
    "ministry": "University Grants Commission (UGC)",
    "benefitAmount": "₹38,800 to ₹46,500 Monthly Fellowship for Full-Time PhD Studies",
    "benefitType": "Monthly Research Stipend & Contingency Grant",
    "targetGroup": "Single Girl Children Pursuing Doctoral Research in Indian Universities",
    "summary": "Promotes higher academic research among families with an only girl child to foster advanced educational equity.",
    "description": "Savtribai Jyotirao Phule Fellowship for Single Girl Child is a dedicated initiative under University Grants Commission (UGC) providing ₹38,800 to ₹46,500 Monthly Fellowship for Full-Time PhD Studies to Single Girl Children Pursuing Doctoral Research in Indian Universities. Promotes higher academic research among families with an only girl child to foster advanced educational equity.",
    "tags": [
      "girl",
      "single child",
      "phd",
      "ugc",
      "fellowship",
      "research",
      "doctorate"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 40,
      "genders": [
        "female"
      ],
      "occupations": [
        "student"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Savtribai Jyotirao Phule Fellowship for Single Girl Child."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Savtribai Jyotirao Phule Fellowship for Single Girl Child.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "central-sector-college-university",
    "name": "Central Sector Scheme of Scholarship for College and University Students",
    "category": "Education & Scholarships",
    "ministry": "Department of Higher Education, Ministry of Education",
    "benefitAmount": "₹12,000/yr (Graduation) & ₹20,000/yr (Post Graduation) for 82,000 Students Annually",
    "benefitType": "Direct Bank Transfer Scholarship",
    "targetGroup": "Top 80th Percentile Students in Class 12 State & Central Boards",
    "summary": "Provides financial support to brilliant low-income students to meet day-to-day college expenses.",
    "description": "Central Sector Scheme of Scholarship for College and University Students is a dedicated initiative under Department of Higher Education, Ministry of Education providing ₹12,000/yr (Graduation) & ₹20,000/yr (Post Graduation) for 82,000 Students Annually to Top 80th Percentile Students in Class 12 State & Central Boards. Provides financial support to brilliant low-income students to meet day-to-day college expenses.",
    "tags": [
      "scholarship",
      "college",
      "degree",
      "class 12",
      "university",
      "merit"
    ],
    "eligibility": {
      "minAge": 17,
      "maxAge": 25,
      "genders": [
        "all"
      ],
      "occupations": [
        "student"
      ],
      "maxIncome": 450000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Central Sector Scheme of Scholarship for College and University Students."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Central Sector Scheme of Scholarship for College and University Students.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "maulana-azad-minority-fellowship",
    "name": "MANF (National Fellowship for Minority Students)",
    "category": "Education & Scholarships",
    "ministry": "Ministry of Minority Affairs, Govt of India",
    "benefitAmount": "Junior Research Fellowship (JRF) ₹37,000/mo & SRF ₹42,000/mo for M.Phil & Ph.D",
    "benefitType": "Monthly Research Stipend (DBT)",
    "targetGroup": "Minority Students (Muslim, Christian, Sikh, Buddhist, Jain, Parsi) Enrolled in Ph.D",
    "summary": "Empowers minority research scholars pursuing regular full-time higher studies in Indian universities.",
    "description": "MANF (National Fellowship for Minority Students) is a dedicated initiative under Ministry of Minority Affairs, Govt of India providing Junior Research Fellowship (JRF) ₹37,000/mo & SRF ₹42,000/mo for M.Phil & Ph.D to Minority Students (Muslim, Christian, Sikh, Buddhist, Jain, Parsi) Enrolled in Ph.D. Empowers minority research scholars pursuing regular full-time higher studies in Indian universities.",
    "tags": [
      "minority",
      "phd",
      "fellowship",
      "research",
      "muslim",
      "christian",
      "sikh",
      "jain"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 38,
      "genders": [
        "all"
      ],
      "occupations": [
        "student"
      ],
      "maxIncome": 600000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under MANF (National Fellowship for Minority Students)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for MANF (National Fellowship for Minority Students).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "top-class-education-sc-students",
    "name": "National Fellowship & Top Class Education for Scheduled Caste (SC) Students",
    "category": "Education & Scholarships",
    "ministry": "Ministry of Social Justice and Empowerment, Govt of India",
    "benefitAmount": "Full Tuition Fee + ₹86,000 Living Expense + ₹57,000 Computer Grant in IITs/IIMs/AIIMS",
    "benefitType": "Full Institutional Fee Waiver & Living Maintenance",
    "targetGroup": "SC Students Securing Admission in Top 260 Notified Elite Premier Institutions",
    "summary": "Covers complete academic fees, hostel boarding charges, books, and laptop costs in premier institutes (IIT, IIM, NLU, AIIMS).",
    "description": "National Fellowship & Top Class Education for Scheduled Caste (SC) Students is a dedicated initiative under Ministry of Social Justice and Empowerment, Govt of India providing Full Tuition Fee + ₹86,000 Living Expense + ₹57,000 Computer Grant in IITs/IIMs/AIIMS to SC Students Securing Admission in Top 260 Notified Elite Premier Institutions. Covers complete academic fees, hostel boarding charges, books, and laptop costs in premier institutes (IIT, IIM, NLU, AIIMS).",
    "tags": [
      "sc",
      "iit",
      "iim",
      "aiims",
      "nlu",
      "scholarship",
      "premier institute",
      "top class"
    ],
    "eligibility": {
      "minAge": 17,
      "maxAge": 30,
      "genders": [
        "all"
      ],
      "occupations": [
        "student"
      ],
      "maxIncome": 800000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under National Fellowship & Top Class Education for Scheduled Caste (SC) Students."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for National Fellowship & Top Class Education for Scheduled Caste (SC) Students.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "national-overseas-scholarship-sc-st",
    "name": "National Overseas Scholarship (NOS for SC, ST & Landless Agricultural Laborers)",
    "category": "Education & Scholarships",
    "ministry": "Ministry of Social Justice and Ministry of Tribal Affairs",
    "benefitAmount": "100% Full Tuition Fees + $15,400 Annual Living Allowance + Airfare in Top 500 Global Universities",
    "benefitType": "Full International Study Fellowship",
    "targetGroup": "Low-Income SC, ST, Nomadic Tribes and Landless Farm Laborer Students",
    "summary": "Full financial funding to pursue Masters and Ph.D. degrees in prestigious universities abroad (Oxford, Harvard, MIT, Stanford, Cambridge).",
    "description": "National Overseas Scholarship (NOS for SC, ST & Landless Agricultural Laborers) is a dedicated initiative under Ministry of Social Justice and Ministry of Tribal Affairs providing 100% Full Tuition Fees + $15,400 Annual Living Allowance + Airfare in Top 500 Global Universities to Low-Income SC, ST, Nomadic Tribes and Landless Farm Laborer Students. Full financial funding to pursue Masters and Ph.D. degrees in prestigious universities abroad (Oxford, Harvard, MIT, Stanford, Cambridge).",
    "tags": [
      "overseas",
      "foreign study",
      "masters",
      "phd",
      "sc",
      "st",
      "international",
      "scholarship"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 35,
      "genders": [
        "all"
      ],
      "occupations": [
        "student"
      ],
      "maxIncome": 800000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under National Overseas Scholarship (NOS for SC, ST & Landless Agricultural Laborers)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for National Overseas Scholarship (NOS for SC, ST & Landless Agricultural Laborers).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "ishan-uday-scholarship-ner",
    "name": "Ishan Uday Special Scholarship Scheme for North Eastern Region (NER)",
    "category": "Education & Scholarships",
    "ministry": "University Grants Commission (UGC) & Ministry of DoNER",
    "benefitAmount": "₹5,400/month (General Degree) & ₹7,800/month (Technical/Medical Degree) for 10,000 Students",
    "benefitType": "Direct Monthly Educational Stipend",
    "targetGroup": "Students Having Domicile in 8 North Eastern States",
    "summary": "Promotes higher education enrollment among youth from Assam, Arunachal, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, and Tripura.",
    "description": "Ishan Uday Special Scholarship Scheme for North Eastern Region (NER) is a dedicated initiative under University Grants Commission (UGC) & Ministry of DoNER providing ₹5,400/month (General Degree) & ₹7,800/month (Technical/Medical Degree) for 10,000 Students to Students Having Domicile in 8 North Eastern States. Promotes higher education enrollment among youth from Assam, Arunachal, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, and Tripura.",
    "tags": [
      "north east",
      "assam",
      "manipur",
      "meghalaya",
      "ugc",
      "scholarship",
      "college"
    ],
    "eligibility": {
      "minAge": 17,
      "maxAge": 25,
      "genders": [
        "all"
      ],
      "occupations": [
        "student"
      ],
      "maxIncome": 450000,
      "states": [
        "Assam",
        "Arunachal Pradesh",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Sikkim",
        "Tripura",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Ishan Uday Special Scholarship Scheme for North Eastern Region (NER)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Ishan Uday Special Scholarship Scheme for North Eastern Region (NER).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "ai-for-all-india-skills",
    "name": "FutureSkills PRIME (MeitY & NASSCOM DeepTech Upskilling)",
    "category": "Skill Development & Livelihood",
    "ministry": "Ministry of Electronics and Information Technology (MeitY)",
    "benefitAmount": "Up to ₹12,000 Government Course Fee Reimbursement on Passing AI/Cloud/Cybersecurity Certification",
    "benefitType": "Govt Direct Upskilling Incentive",
    "targetGroup": "College Students, IT Professionals & Unemployed Youth",
    "summary": "Reimburses 50% course fee upon successfully passing certified assessments in Artificial Intelligence, Big Data, Blockchain, Cloud, and Cybersecurity.",
    "description": "FutureSkills PRIME (MeitY & NASSCOM DeepTech Upskilling) is a dedicated initiative under Ministry of Electronics and Information Technology (MeitY) providing Up to ₹12,000 Government Course Fee Reimbursement on Passing AI/Cloud/Cybersecurity Certification to College Students, IT Professionals & Unemployed Youth. Reimburses 50% course fee upon successfully passing certified assessments in Artificial Intelligence, Big Data, Blockchain, Cloud, and Cybersecurity.",
    "tags": [
      "ai",
      "cloud",
      "cybersecurity",
      "software",
      "tech",
      "nasscom",
      "upskilling",
      "free"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 45,
      "genders": [
        "all"
      ],
      "occupations": [
        "student",
        "unemployed",
        "self-employed"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under FutureSkills PRIME (MeitY & NASSCOM DeepTech Upskilling)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for FutureSkills PRIME (MeitY & NASSCOM DeepTech Upskilling).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "mukhyamantri-kanya-sumangala-up",
    "name": "Mukhyamantri Kanya Sumangala Yojana (Uttar Pradesh)",
    "category": "Women & Child Development",
    "ministry": "Govt of Uttar Pradesh (Department of Women & Child Development)",
    "benefitAmount": "₹25,000 Direct Cash Transfer in 6 Milestone Stages from Birth to Graduation",
    "benefitType": "Direct Conditional Cash Transfer (DBT)",
    "targetGroup": "Girl Children from Families in Uttar Pradesh with Income below ₹3 Lakhs",
    "summary": "Provides structured cash gifts at birth, vaccination, Class 1, Class 6, Class 9, and college degree admission.",
    "description": "Mukhyamantri Kanya Sumangala Yojana (Uttar Pradesh) is a dedicated initiative under Govt of Uttar Pradesh (Department of Women & Child Development) providing ₹25,000 Direct Cash Transfer in 6 Milestone Stages from Birth to Graduation to Girl Children from Families in Uttar Pradesh with Income below ₹3 Lakhs. Provides structured cash gifts at birth, vaccination, Class 1, Class 6, Class 9, and college degree admission.",
    "tags": [
      "uttar pradesh",
      "girl child",
      "kanya sumangala",
      "school",
      "college",
      "birth"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 22,
      "genders": [
        "female"
      ],
      "occupations": [
        "student",
        "all"
      ],
      "maxIncome": 300000,
      "states": [
        "Uttar Pradesh",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Mukhyamantri Kanya Sumangala Yojana (Uttar Pradesh)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Mukhyamantri Kanya Sumangala Yojana (Uttar Pradesh).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "bhagyalakshmi-karnataka",
    "name": "Bhagyalakshmi Scheme (Karnataka)",
    "category": "Women & Child Development",
    "ministry": "Govt of Karnataka",
    "benefitAmount": "Maturity Value of ₹1,00,000 + Annual Educational Scholarships & Health Insurance",
    "benefitType": "Fixed Deposit Guarantee & Scholarship",
    "targetGroup": "Girl Children Born in BPL Families in Karnataka",
    "summary": "Deposits a fixed maturity fund for newly born girl children in BPL families along with annual educational stipends.",
    "description": "Bhagyalakshmi Scheme (Karnataka) is a dedicated initiative under Govt of Karnataka providing Maturity Value of ₹1,00,000 + Annual Educational Scholarships & Health Insurance to Girl Children Born in BPL Families in Karnataka. Deposits a fixed maturity fund for newly born girl children in BPL families along with annual educational stipends.",
    "tags": [
      "karnataka",
      "girl child",
      "bhagyalakshmi",
      "bpl",
      "savings",
      "marriage"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 18,
      "genders": [
        "female"
      ],
      "occupations": [
        "student",
        "all"
      ],
      "maxIncome": 200000,
      "states": [
        "Karnataka",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Bhagyalakshmi Scheme (Karnataka)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Bhagyalakshmi Scheme (Karnataka).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "indira-gandhi-matritva-poshan-raj",
    "name": "Indira Gandhi Matritva Poshan Yojana (Rajasthan)",
    "category": "Healthcare & Insurance",
    "ministry": "Govt of Rajasthan",
    "benefitAmount": "₹6,000 Direct Cash Benefit on Birth of Second Child",
    "benefitType": "Direct Cash Transfer in 5 Tranches",
    "targetGroup": "Pregnant & Lactating Mothers Delivering Second Child in Rajasthan",
    "summary": "Improves nutrition indicators and reduces child anemia by incentivizing institutional check-ups on birth of second child.",
    "description": "Indira Gandhi Matritva Poshan Yojana (Rajasthan) is a dedicated initiative under Govt of Rajasthan providing ₹6,000 Direct Cash Benefit on Birth of Second Child to Pregnant & Lactating Mothers Delivering Second Child in Rajasthan. Improves nutrition indicators and reduces child anemia by incentivizing institutional check-ups on birth of second child.",
    "tags": [
      "rajasthan",
      "maternity",
      "pregnant",
      "mother",
      "nutrition",
      "cash"
    ],
    "eligibility": {
      "minAge": 19,
      "maxAge": 45,
      "genders": [
        "female"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "Rajasthan",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Indira Gandhi Matritva Poshan Yojana (Rajasthan)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Indira Gandhi Matritva Poshan Yojana (Rajasthan).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "manjhi-ladli-bahin-mh",
    "name": "Majhi Ladki Bahin Yojana (Maharashtra)",
    "category": "Women & Child Development",
    "ministry": "Govt of Maharashtra",
    "benefitAmount": "₹1,500 per Month (₹18,000/year) Direct Bank Transfer",
    "benefitType": "Direct Monthly Basic Income Support",
    "targetGroup": "Women Aged 21 to 65 in Maharashtra",
    "summary": "Direct financial independence grant credited into bank accounts of eligible women in Maharashtra.",
    "description": "Majhi Ladki Bahin Yojana (Maharashtra) is a dedicated initiative under Govt of Maharashtra providing ₹1,500 per Month (₹18,000/year) Direct Bank Transfer to Women Aged 21 to 65 in Maharashtra. Direct financial independence grant credited into bank accounts of eligible women in Maharashtra.",
    "tags": [
      "maharashtra",
      "women",
      "ladki bahin",
      "monthly cash",
      "dbt",
      "homemaker"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 65,
      "genders": [
        "female"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 250000,
      "states": [
        "Maharashtra",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Majhi Ladki Bahin Yojana (Maharashtra)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Majhi Ladki Bahin Yojana (Maharashtra).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "mission-shakti-shg-odisha",
    "name": "Mission Shakti SHG Zero Interest Loan Scheme (Odisha)",
    "category": "Women & Child Development",
    "ministry": "Department of Mission Shakti, Govt of Odisha",
    "benefitAmount": "0% Interest Loans up to ₹10,00,000 for Women Self-Help Groups (SHGs)",
    "benefitType": "100% Interest Subvention on Bank Credit",
    "targetGroup": "Women Self-Help Groups (SHGs) and Federations in Odisha",
    "summary": "Enables 70 lakh women across Odisha to establish micro-enterprises, poultry units, and food processing businesses with zero interest.",
    "description": "Mission Shakti SHG Zero Interest Loan Scheme (Odisha) is a dedicated initiative under Department of Mission Shakti, Govt of Odisha providing 0% Interest Loans up to ₹10,00,000 for Women Self-Help Groups (SHGs) to Women Self-Help Groups (SHGs) and Federations in Odisha. Enables 70 lakh women across Odisha to establish micro-enterprises, poultry units, and food processing businesses with zero interest.",
    "tags": [
      "odisha",
      "mission shakti",
      "shg",
      "women",
      "zero interest",
      "loan"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "genders": [
        "female"
      ],
      "occupations": [
        "self-employed",
        "farmer",
        "artisan"
      ],
      "maxIncome": 300000,
      "states": [
        "Odisha",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Mission Shakti SHG Zero Interest Loan Scheme (Odisha)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Mission Shakti SHG Zero Interest Loan Scheme (Odisha).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "kudumbashree-micro-enterprise-kerala",
    "name": "Kudumbashree Community Livelihood Fund (Kerala)",
    "category": "Women & Child Development",
    "ministry": "State Poverty Eradication Mission (Kudumbashree), Govt of Kerala",
    "benefitAmount": "Up to ₹5,00,000 Subsidized Enterprise Loan + Free Marketing Stalls & Tech Support",
    "benefitType": "Revolving Micro-Credit & Marketing Infrastructure",
    "targetGroup": "Women Members of Kudumbashree Neighborhood Groups in Kerala",
    "summary": "Empowers women neighborhood groups to manage collective catering, apparel units, e-rickshaws, and IT data processing centers.",
    "description": "Kudumbashree Community Livelihood Fund (Kerala) is a dedicated initiative under State Poverty Eradication Mission (Kudumbashree), Govt of Kerala providing Up to ₹5,00,000 Subsidized Enterprise Loan + Free Marketing Stalls & Tech Support to Women Members of Kudumbashree Neighborhood Groups in Kerala. Empowers women neighborhood groups to manage collective catering, apparel units, e-rickshaws, and IT data processing centers.",
    "tags": [
      "kerala",
      "kudumbashree",
      "women",
      "micro enterprise",
      "shg",
      "cooperative"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "genders": [
        "female"
      ],
      "occupations": [
        "self-employed",
        "artisan",
        "daily wage / laborer"
      ],
      "maxIncome": 300000,
      "states": [
        "Kerala",
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Kudumbashree Community Livelihood Fund (Kerala)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Kudumbashree Community Livelihood Fund (Kerala).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "poshan-abhiyaan-national",
    "name": "POSHAN Abhiyaan (National Nutrition Mission)",
    "category": "Healthcare & Insurance",
    "ministry": "Ministry of Women and Child Development, Govt of India",
    "benefitAmount": "Comprehensive Supplementary Nutrition + Growth Monitoring + Fortified Rations",
    "benefitType": "Free Supplementary Food & Micronutrient Supplements",
    "targetGroup": "Stunted/Underweight Children (0-6 Yrs), Adolescent Girls & Lactating Mothers",
    "summary": "Holistic national mission fighting malnutrition, stunting, wasting, and anemia through Anganwadi network.",
    "description": "POSHAN Abhiyaan (National Nutrition Mission) is a dedicated initiative under Ministry of Women and Child Development, Govt of India providing Comprehensive Supplementary Nutrition + Growth Monitoring + Fortified Rations to Stunted/Underweight Children (0-6 Yrs), Adolescent Girls & Lactating Mothers. Holistic national mission fighting malnutrition, stunting, wasting, and anemia through Anganwadi network.",
    "tags": [
      "nutrition",
      "poshan",
      "child",
      "anganwadi",
      "stunting",
      "anemia",
      "food"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 18,
      "genders": [
        "all"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under POSHAN Abhiyaan (National Nutrition Mission)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for POSHAN Abhiyaan (National Nutrition Mission).",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pradhan-mantri-matru-sahayata",
    "name": "Maternity Benefit Relief for Building & Construction Workers",
    "category": "Social Security & Pension",
    "ministry": "State Building and Other Construction Workers (BOCW) Welfare Boards",
    "benefitAmount": "₹20,000 to ₹35,000 Cash Maternity Grant + Paid Leave Compensation",
    "benefitType": "Direct Welfare Board Benefit",
    "targetGroup": "Registered Female Construction Workers & Laborers",
    "summary": "Provides paid maternity compensation and nutritional cash grant to registered women construction laborers.",
    "description": "Maternity Benefit Relief for Building & Construction Workers is a dedicated initiative under State Building and Other Construction Workers (BOCW) Welfare Boards providing ₹20,000 to ₹35,000 Cash Maternity Grant + Paid Leave Compensation to Registered Female Construction Workers & Laborers. Provides paid maternity compensation and nutritional cash grant to registered women construction laborers.",
    "tags": [
      "construction",
      "worker",
      "laborer",
      "maternity",
      "bocw",
      "daily wage"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 50,
      "genders": [
        "female"
      ],
      "occupations": [
        "daily wage / laborer"
      ],
      "maxIncome": 250000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Maternity Benefit Relief for Building & Construction Workers."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Maternity Benefit Relief for Building & Construction Workers.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "didi-vahan-sewa-mp",
    "name": "Rural Livelihood Mission: Didi Vahan Sewa",
    "category": "Women & Child Development",
    "ministry": "State Rural Livelihood Mission (SRLM)",
    "benefitAmount": "Free Emergency Vehicle Transport for Pregnant Rural Women to Hospitals",
    "benefitType": "Free Emergency Rural Transport Service",
    "targetGroup": "Rural Pregnant Women & Emergency Patients",
    "summary": "Community-managed free emergency vehicle transport operated by women SHGs in tribal blocks for safe institutional deliveries.",
    "description": "Rural Livelihood Mission: Didi Vahan Sewa is a dedicated initiative under State Rural Livelihood Mission (SRLM) providing Free Emergency Vehicle Transport for Pregnant Rural Women to Hospitals to Rural Pregnant Women & Emergency Patients. Community-managed free emergency vehicle transport operated by women SHGs in tribal blocks for safe institutional deliveries.",
    "tags": [
      "emergency",
      "pregnant",
      "transport",
      "shg",
      "tribal",
      "rural",
      "hospital"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 100,
      "genders": [
        "female",
        "all"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 200000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Rural Livelihood Mission: Didi Vahan Sewa."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Rural Livelihood Mission: Didi Vahan Sewa.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "one-stop-centre-sakhi",
    "name": "One Stop Centre (Sakhi) Scheme for Women in Distress",
    "category": "Women & Child Development",
    "ministry": "Ministry of Women and Child Development, Govt of India",
    "benefitAmount": "100% Free Integrated Emergency Medical, Legal, Police & Psychological Counseling Support",
    "benefitType": "Free Emergency Shelter & Legal Aid Services",
    "targetGroup": "Women Affected by Domestic, Workplace, or Community Violence",
    "summary": "Provides immediate shelter, medical examination, police FIR facilitation, legal counsel, and trauma therapy under one roof.",
    "description": "One Stop Centre (Sakhi) Scheme for Women in Distress is a dedicated initiative under Ministry of Women and Child Development, Govt of India providing 100% Free Integrated Emergency Medical, Legal, Police & Psychological Counseling Support to Women Affected by Domestic, Workplace, or Community Violence. Provides immediate shelter, medical examination, police FIR facilitation, legal counsel, and trauma therapy under one roof.",
    "tags": [
      "women",
      "safety",
      "emergency",
      "legal aid",
      "counseling",
      "shelter",
      "sakhi"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 100,
      "genders": [
        "female"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under One Stop Centre (Sakhi) Scheme for Women in Distress."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for One Stop Centre (Sakhi) Scheme for Women in Distress.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "ford-foundation-social-justice",
    "name": "Ford Foundation: Global Social Justice & Climate Fellowship",
    "category": "International NGO & Philanthropy",
    "ministry": "Ford Foundation (International Philanthropy)",
    "benefitAmount": "$10,000 to $40,000 (Approx ₹8L to ₹33L) Project Grant",
    "benefitType": "International Philanthropic Leadership Grant",
    "targetGroup": "Grassroots Community Leaders, Activists & Tribal Rights Researchers",
    "summary": "Supports emerging leaders fighting poverty, climate vulnerability, and defending natural resource access for indigenous communities.",
    "description": "Ford Foundation: Global Social Justice & Climate Fellowship is a dedicated initiative under Ford Foundation (International Philanthropy) providing $10,000 to $40,000 (Approx ₹8L to ₹33L) Project Grant to Grassroots Community Leaders, Activists & Tribal Rights Researchers. Supports emerging leaders fighting poverty, climate vulnerability, and defending natural resource access for indigenous communities.",
    "tags": [
      "ngo",
      "ford foundation",
      "fellowship",
      "international",
      "climate",
      "tribal",
      "grant"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 55,
      "genders": [
        "all"
      ],
      "occupations": [
        "self-employed",
        "unemployed",
        "all"
      ],
      "maxIncome": 600000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Ford Foundation: Global Social Justice & Climate Fellowship."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Ford Foundation: Global Social Justice & Climate Fellowship.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "rockefeller-climate-smart-agri",
    "name": "Rockefeller Foundation: Climate-Smart Food Systems Grant",
    "category": "International NGO & Philanthropy",
    "ministry": "The Rockefeller Foundation (Global Food Initiative)",
    "benefitAmount": "$5,000 to $25,000 (Approx ₹4L to ₹20L) Innovation Capital Grant",
    "benefitType": "Direct Impact Innovation Grant",
    "targetGroup": "Smallholder Farmer Collectives, Agritech Startups & Millets Cultivators",
    "summary": "Accelerates climate-resilient indigenous crops, millets, bio-fortified foods, and solar micro-cold storage in drought-prone regions.",
    "description": "Rockefeller Foundation: Climate-Smart Food Systems Grant is a dedicated initiative under The Rockefeller Foundation (Global Food Initiative) providing $5,000 to $25,000 (Approx ₹4L to ₹20L) Innovation Capital Grant to Smallholder Farmer Collectives, Agritech Startups & Millets Cultivators. Accelerates climate-resilient indigenous crops, millets, bio-fortified foods, and solar micro-cold storage in drought-prone regions.",
    "tags": [
      "rockefeller",
      "ngo",
      "climate",
      "agriculture",
      "millets",
      "solar storage",
      "grant"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 65,
      "genders": [
        "all"
      ],
      "occupations": [
        "farmer",
        "self-employed"
      ],
      "maxIncome": 800000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Rockefeller Foundation: Climate-Smart Food Systems Grant."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Rockefeller Foundation: Climate-Smart Food Systems Grant.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "azim-premji-philanthropic-grant",
    "name": "Azim Premji Foundation: Primary Education & Vulnerable Livelihoods Grant",
    "category": "International NGO & Philanthropy",
    "ministry": "Azim Premji Philanthropic Initiatives (APPI)",
    "benefitAmount": "₹5,00,000 to ₹25,00,000 Multi-Year Institutional Grant & Teacher Capacity Building",
    "benefitType": "Direct Philanthropic Support Grant",
    "targetGroup": "Grassroots Rural Education NGOs, Government Schools & Disability Centers",
    "summary": "Supports foundational literacy, numeracy, nutrition, and inclusive education for children in the most disadvantaged rural districts.",
    "description": "Azim Premji Foundation: Primary Education & Vulnerable Livelihoods Grant is a dedicated initiative under Azim Premji Philanthropic Initiatives (APPI) providing ₹5,00,000 to ₹25,00,000 Multi-Year Institutional Grant & Teacher Capacity Building to Grassroots Rural Education NGOs, Government Schools & Disability Centers. Supports foundational literacy, numeracy, nutrition, and inclusive education for children in the most disadvantaged rural districts.",
    "tags": [
      "education",
      "azim premji",
      "ngo",
      "school",
      "literacy",
      "disability",
      "grant"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "genders": [
        "all"
      ],
      "occupations": [
        "student",
        "all"
      ],
      "maxIncome": 400000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Azim Premji Foundation: Primary Education & Vulnerable Livelihoods Grant."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Azim Premji Foundation: Primary Education & Vulnerable Livelihoods Grant.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "tata-trusts-education-scholarship",
    "name": "Tata Trusts: Means-cum-Merit Higher Education Scholarship",
    "category": "International NGO & Philanthropy",
    "ministry": "Tata Trusts (Education Grants Division)",
    "benefitAmount": "Up to ₹1,00,000 per Year College Tuition Fee Support",
    "benefitType": "Direct Education Fee Subsidy",
    "targetGroup": "Meritorious Undergraduate and Postgraduate Students in Indian Universities",
    "summary": "Provides financial relief to deserving college students from families with annual income below ₹4.5 Lakhs.",
    "description": "Tata Trusts: Means-cum-Merit Higher Education Scholarship is a dedicated initiative under Tata Trusts (Education Grants Division) providing Up to ₹1,00,000 per Year College Tuition Fee Support to Meritorious Undergraduate and Postgraduate Students in Indian Universities. Provides financial relief to deserving college students from families with annual income below ₹4.5 Lakhs.",
    "tags": [
      "tata trusts",
      "scholarship",
      "college",
      "degree",
      "education",
      "merit"
    ],
    "eligibility": {
      "minAge": 17,
      "maxAge": 30,
      "genders": [
        "all"
      ],
      "occupations": [
        "student"
      ],
      "maxIncome": 450000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Tata Trusts: Means-cum-Merit Higher Education Scholarship."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Tata Trusts: Means-cum-Merit Higher Education Scholarship.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "agastya-mobile-science-lab",
    "name": "Agastya International Foundation: Mobile Science Lab & Hands-on STEM",
    "category": "International NGO & Philanthropy",
    "ministry": "Agastya International Foundation",
    "benefitAmount": "100% Free Hands-on Science Lab Sessions, Model Building & Young Tinkerer Mentorship",
    "benefitType": "Free Experiential STEM Education Delivery",
    "targetGroup": "Rural Government School Students (Classes 5-10)",
    "summary": "Brings interactive mobile science labs with 150+ science apparatus directly to remote rural government schools.",
    "description": "Agastya International Foundation: Mobile Science Lab & Hands-on STEM is a dedicated initiative under Agastya International Foundation providing 100% Free Hands-on Science Lab Sessions, Model Building & Young Tinkerer Mentorship to Rural Government School Students (Classes 5-10). Brings interactive mobile science labs with 150+ science apparatus directly to remote rural government schools.",
    "tags": [
      "stem",
      "science",
      "school",
      "ngo",
      "agastya",
      "experiments",
      "education",
      "free"
    ],
    "eligibility": {
      "minAge": 10,
      "maxAge": 16,
      "genders": [
        "all"
      ],
      "occupations": [
        "student"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": true,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Agastya International Foundation: Mobile Science Lab & Hands-on STEM."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Agastya International Foundation: Mobile Science Lab & Hands-on STEM.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "goonj-cloth-for-work",
    "name": "Goonj: 'Cloth for Work' & 'Not Just a Piece of Cloth' Dignity Support",
    "category": "International NGO & Philanthropy",
    "ministry": "Goonj (National Social Development Organization)",
    "benefitAmount": "Community Asset Kits (Family Rations, Warm Clothes, Sanitary Kits & Dignity Packs)",
    "benefitType": "Community Action-Driven Material Exchange",
    "targetGroup": "Disaster-Affected Families, Rural Laborers & Marginalized Communities",
    "summary": "Transforms urban surplus cloth and material into a currency for development; communities repair roads/wells and receive comprehensive family kits.",
    "description": "Goonj: 'Cloth for Work' & 'Not Just a Piece of Cloth' Dignity Support is a dedicated initiative under Goonj (National Social Development Organization) providing Community Asset Kits (Family Rations, Warm Clothes, Sanitary Kits & Dignity Packs) to Disaster-Affected Families, Rural Laborers & Marginalized Communities. Transforms urban surplus cloth and material into a currency for development; communities repair roads/wells and receive comprehensive family kits.",
    "tags": [
      "goonj",
      "ngo",
      "clothes",
      "rural",
      "relief",
      "community",
      "dignity",
      "aid"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 100,
      "genders": [
        "all"
      ],
      "occupations": [
        "daily wage / laborer",
        "farmer",
        "unemployed",
        "all"
      ],
      "maxIncome": 200000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Goonj: 'Cloth for Work' & 'Not Just a Piece of Cloth' Dignity Support."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Goonj: 'Cloth for Work' & 'Not Just a Piece of Cloth' Dignity Support.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "sulabh-sanitation-scholarship",
    "name": "Sulabh International: Sanitation Workers Rehabilitation & Vocational Grant",
    "category": "International NGO & Philanthropy",
    "ministry": "Sulabh International Social Service Organisation",
    "benefitAmount": "Free Vocational Training (Computer/Tailoring/Food Craft) + ₹10,000 Startup Tool Kit",
    "benefitType": "Rehabilitation Grant & Vocational Skilling",
    "targetGroup": "Manual Scavengers, Liberated Sanitation Workers & Their Children",
    "summary": "Rehabilitates liberated manual scavengers and sanitation workers into mainstream dignified professions through skill training.",
    "description": "Sulabh International: Sanitation Workers Rehabilitation & Vocational Grant is a dedicated initiative under Sulabh International Social Service Organisation providing Free Vocational Training (Computer/Tailoring/Food Craft) + ₹10,000 Startup Tool Kit to Manual Scavengers, Liberated Sanitation Workers & Their Children. Rehabilitates liberated manual scavengers and sanitation workers into mainstream dignified professions through skill training.",
    "tags": [
      "sanitation",
      "sulabh",
      "rehabilitation",
      "vocational",
      "artisan",
      "sc",
      "ngo"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 55,
      "genders": [
        "all"
      ],
      "occupations": [
        "daily wage / laborer",
        "unemployed",
        "artisan"
      ],
      "maxIncome": 200000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under Sulabh International: Sanitation Workers Rehabilitation & Vocational Grant."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for Sulabh International: Sanitation Workers Rehabilitation & Vocational Grant.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "wwf-india-small-grants",
    "name": "WWF-India: Small Grants Innovation Program for Conservation",
    "category": "International NGO & Philanthropy",
    "ministry": "World Wide Fund for Nature - India (WWF-India)",
    "benefitAmount": "₹2,00,000 to ₹5,00,000 Research and Community Conservation Grant",
    "benefitType": "Environmental Conservation Research Grant",
    "targetGroup": "Researchers, Forest Community Collectives & Wildlife Biologists",
    "summary": "Funds grassroots innovations to reduce human-wildlife conflict, protect endangered species, and promote community forest stewardship.",
    "description": "WWF-India: Small Grants Innovation Program for Conservation is a dedicated initiative under World Wide Fund for Nature - India (WWF-India) providing ₹2,00,000 to ₹5,00,000 Research and Community Conservation Grant to Researchers, Forest Community Collectives & Wildlife Biologists. Funds grassroots innovations to reduce human-wildlife conflict, protect endangered species, and promote community forest stewardship.",
    "tags": [
      "wwf",
      "environment",
      "wildlife",
      "conservation",
      "tribal",
      "forest",
      "grant"
    ],
    "eligibility": {
      "minAge": 21,
      "maxAge": 60,
      "genders": [
        "all"
      ],
      "occupations": [
        "student",
        "self-employed",
        "farmer"
      ],
      "maxIncome": 10000000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under WWF-India: Small Grants Innovation Program for Conservation."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for WWF-India: Small Grants Innovation Program for Conservation.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "unicef-wash-emergency-aid",
    "name": "UNICEF India: Emergency Water, Sanitation & Hygiene (WASH) Support",
    "category": "International NGO & Philanthropy",
    "ministry": "UNICEF India",
    "benefitAmount": "100% Free Water Purification Kits, Portable Toilets & Child Diarrhea Prevention Packs",
    "benefitType": "Direct Humanitarian WASH Aid",
    "targetGroup": "Flood, Cyclone & Disaster-Affected Rural/Slum Families with Infants",
    "summary": "Provides rapid deployment of clean drinking water tablets, family hygiene kits, and emergency child rehydration salt packages.",
    "description": "UNICEF India: Emergency Water, Sanitation & Hygiene (WASH) Support is a dedicated initiative under UNICEF India providing 100% Free Water Purification Kits, Portable Toilets & Child Diarrhea Prevention Packs to Flood, Cyclone & Disaster-Affected Rural/Slum Families with Infants. Provides rapid deployment of clean drinking water tablets, family hygiene kits, and emergency child rehydration salt packages.",
    "tags": [
      "unicef",
      "water",
      "sanitation",
      "emergency",
      "child",
      "infant",
      "hygiene",
      "flood"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 100,
      "genders": [
        "all"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 200000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under UNICEF India: Emergency Water, Sanitation & Hygiene (WASH) Support."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for UNICEF India: Emergency Water, Sanitation & Hygiene (WASH) Support.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "giveindia-medical-emergency-fund",
    "name": "GiveIndia / Give.do: Medical Emergency Crowdfunding & Relief Grant",
    "category": "International NGO & Philanthropy",
    "ministry": "GiveIndia (Give.do Philanthropy Network)",
    "benefitAmount": "Up to ₹5,00,000 Critical Surgery & Hospital Bill Relief Grant",
    "benefitType": "Direct Hospital Bill Settlement Grant",
    "targetGroup": "Low-Income Families Facing Catastrophic ICU or Organ Transplant Bills",
    "summary": "Bridges out-of-pocket hospital costs by mobilizing direct philanthropic matching grants for critical emergency surgeries.",
    "description": "GiveIndia / Give.do: Medical Emergency Crowdfunding & Relief Grant is a dedicated initiative under GiveIndia (Give.do Philanthropy Network) providing Up to ₹5,00,000 Critical Surgery & Hospital Bill Relief Grant to Low-Income Families Facing Catastrophic ICU or Organ Transplant Bills. Bridges out-of-pocket hospital costs by mobilizing direct philanthropic matching grants for critical emergency surgeries.",
    "tags": [
      "giveindia",
      "ngo",
      "medical",
      "hospital",
      "emergency",
      "surgery",
      "grant",
      "aid"
    ],
    "eligibility": {
      "minAge": 0,
      "maxAge": 100,
      "genders": [
        "all"
      ],
      "occupations": [
        "all"
      ],
      "maxIncome": 250000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility requirements under GiveIndia / Give.do: Medical Emergency Crowdfunding & Relief Grant."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Account Passbook",
        "required": true,
        "desc": "DBT/Account disbursement details"
      },
      {
        "name": "Income / Category Proof",
        "required": false,
        "desc": "Income or resident proof as specified"
      }
    ],
    "applicationSteps": [
      "Visit the official portal or nearest facilitation counter for GiveIndia / Give.do: Medical Emergency Crowdfunding & Relief Grant.",
      "Submit Aadhaar identification and required documentation.",
      "Application verified and benefits processed via direct bank transfer or official disbursement."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "blue-revolution-fisheries-development",
    "name": "Blue Revolution Fisheries Development",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Fisheries",
    "benefitAmount": "₹2,50,000 Subsidy for Motorized Fishing Craft & GPS Beacon",
    "benefitType": "Marine Subsidy",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing ₹2,50,000 Subsidy for Motorized Fishing Craft & GPS Beacon under Ministry of Fisheries.",
    "description": "Blue Revolution Fisheries Development is an official welfare development program sponsored by Ministry of Fisheries to deliver ₹2,50,000 Subsidy for Motorized Fishing Craft & GPS Beacon with full transparency and verified eligibility matching.",
    "tags": [
      "marine",
      "fisherman",
      "boat",
      "gps",
      "sea",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Fisheries."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "national-handloom-development-programme-",
    "name": "National Handloom Development Programme (NHDP)",
    "category": "Skill Development & Livelihood",
    "ministry": "Ministry of Textiles",
    "benefitAmount": "₹30,000 Upgraded Loom Grant + ₹10,000 Solar Lighting Unit",
    "benefitType": "Asset Subsidy",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing ₹30,000 Upgraded Loom Grant + ₹10,000 Solar Lighting Unit under Ministry of Textiles.",
    "description": "National Handloom Development Programme (NHDP) is an official welfare development program sponsored by Ministry of Textiles to deliver ₹30,000 Upgraded Loom Grant + ₹10,000 Solar Lighting Unit with full transparency and verified eligibility matching.",
    "tags": [
      "weaver",
      "handloom",
      "khadi",
      "textile",
      "loom",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Textiles."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "national-dairy-plan--milk-chilling-unit-",
    "name": "National Dairy Plan & Milk Chilling Unit Subsidy",
    "category": "Agriculture & Rural",
    "ministry": "National Dairy Development Board",
    "benefitAmount": "Up to ₹8,00,000 for Setting up Bulk Milk Coolers",
    "benefitType": "Capital Grant",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing Up to ₹8,00,000 for Setting up Bulk Milk Coolers under National Dairy Development Board.",
    "description": "National Dairy Plan & Milk Chilling Unit Subsidy is an official welfare development program sponsored by National Dairy Development Board to deliver Up to ₹8,00,000 for Setting up Bulk Milk Coolers with full transparency and verified eligibility matching.",
    "tags": [
      "dairy",
      "milk",
      "chilling",
      "cow",
      "buffalo",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by National Dairy Development Board."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "silk-samagra-2-integrated-silk-developme",
    "name": "Silk Samagra 2 (Integrated Silk Development)",
    "category": "Agriculture & Rural",
    "ministry": "Central Silk Board",
    "benefitAmount": "75% Capital Grant for Mulberry Cultivation & Rearing Sheds",
    "benefitType": "Direct Asset Grant",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 75% Capital Grant for Mulberry Cultivation & Rearing Sheds under Central Silk Board.",
    "description": "Silk Samagra 2 (Integrated Silk Development) is an official welfare development program sponsored by Central Silk Board to deliver 75% Capital Grant for Mulberry Cultivation & Rearing Sheds with full transparency and verified eligibility matching.",
    "tags": [
      "silk",
      "sericulture",
      "mulberry",
      "cocoon",
      "farmer",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Central Silk Board."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "national-livestock-mission:-rural-poultr",
    "name": "National Livestock Mission: Rural Poultry Subsidy",
    "category": "Agriculture & Rural",
    "ministry": "Department of Animal Husbandry",
    "benefitAmount": "₹50,000 Capital Subsidy for 500-Bird Mother Units",
    "benefitType": "Capital Subsidy",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing ₹50,000 Capital Subsidy for 500-Bird Mother Units under Department of Animal Husbandry.",
    "description": "National Livestock Mission: Rural Poultry Subsidy is an official welfare development program sponsored by Department of Animal Husbandry to deliver ₹50,000 Capital Subsidy for 500-Bird Mother Units with full transparency and verified eligibility matching.",
    "tags": [
      "poultry",
      "chicken",
      "eggs",
      "livestock",
      "farmer",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Department of Animal Husbandry."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "national-beekeeping-and-honey-mission-nb",
    "name": "National Beekeeping and Honey Mission (NBHM)",
    "category": "Agriculture & Rural",
    "ministry": "National Bee Board",
    "benefitAmount": "80% Subsidy for Bee Boxes, Honey Extractors & Colony Multiplication",
    "benefitType": "Direct Subsidy",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 80% Subsidy for Bee Boxes, Honey Extractors & Colony Multiplication under National Bee Board.",
    "description": "National Beekeeping and Honey Mission (NBHM) is an official welfare development program sponsored by National Bee Board to deliver 80% Subsidy for Bee Boxes, Honey Extractors & Colony Multiplication with full transparency and verified eligibility matching.",
    "tags": [
      "honey",
      "bees",
      "beekeeping",
      "apiculture",
      "farmer",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by National Bee Board."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "van-dhan-vikas-karyakram-trifed",
    "name": "Van Dhan Vikas Karyakram (TRIFED)",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Tribal Affairs & TRIFED",
    "benefitAmount": "₹15,00,000 per 300-Member Van Dhan SHG for Processing Minor Forest Produce",
    "benefitType": "Community Grant",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing ₹15,00,000 per 300-Member Van Dhan SHG for Processing Minor Forest Produce under Ministry of Tribal Affairs & TRIFED.",
    "description": "Van Dhan Vikas Karyakram (TRIFED) is an official welfare development program sponsored by Ministry of Tribal Affairs & TRIFED to deliver ₹15,00,000 per 300-Member Van Dhan SHG for Processing Minor Forest Produce with full transparency and verified eligibility matching.",
    "tags": [
      "tribal",
      "forest produce",
      "mahua",
      "tendu",
      "trifed",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Tribal Affairs & TRIFED."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "nhfdc-concessional-loan-scheme-for-diffe",
    "name": "NHFDC Concessional Loan Scheme for Differently Abled",
    "category": "Social Security & Pension",
    "ministry": "National Handicapped Finance and Development Corporation",
    "benefitAmount": "Up to ₹25,00,000 Business Loans at 4% to 6% Concessional Interest",
    "benefitType": "Subsidized Low-Interest Credit",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing Up to ₹25,00,000 Business Loans at 4% to 6% Concessional Interest under National Handicapped Finance and Development Corporation.",
    "description": "NHFDC Concessional Loan Scheme for Differently Abled is an official welfare development program sponsored by National Handicapped Finance and Development Corporation to deliver Up to ₹25,00,000 Business Loans at 4% to 6% Concessional Interest with full transparency and verified eligibility matching.",
    "tags": [
      "disabled",
      "divyang",
      "loan",
      "business",
      "nhfdc",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by National Handicapped Finance and Development Corporation."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "smile-support-for-marginalized-individua",
    "name": "SMILE (Support for Marginalized Individuals for Livelihood & Enterprise)",
    "category": "Social Security & Pension",
    "ministry": "Ministry of Social Justice and Empowerment",
    "benefitAmount": "₹40,000 Skill Stipend + ₹5,00,000 Transgender Self-Employment Grant",
    "benefitType": "Skill Stipend & Enterprise Grant",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing ₹40,000 Skill Stipend + ₹5,00,000 Transgender Self-Employment Grant under Ministry of Social Justice and Empowerment.",
    "description": "SMILE (Support for Marginalized Individuals for Livelihood & Enterprise) is an official welfare development program sponsored by Ministry of Social Justice and Empowerment to deliver ₹40,000 Skill Stipend + ₹5,00,000 Transgender Self-Employment Grant with full transparency and verified eligibility matching.",
    "tags": [
      "transgender",
      "smile",
      "marginalized",
      "livelihood",
      "grant",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Social Justice and Empowerment."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "nskfdc-sanitation-workers-credit--educat",
    "name": "NSKFDC Sanitation Workers Credit & Education Loan",
    "category": "Social Security & Pension",
    "ministry": "National Safai Karamcharis Finance and Development Corporation",
    "benefitAmount": "Up to ₹15,00,000 Concessional Loan at 4% + ₹50,000 Sanitary Sanitation Grant",
    "benefitType": "Concessional Loan & Capital Grant",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing Up to ₹15,00,000 Concessional Loan at 4% + ₹50,000 Sanitary Sanitation Grant under National Safai Karamcharis Finance and Development Corporation.",
    "description": "NSKFDC Sanitation Workers Credit & Education Loan is an official welfare development program sponsored by National Safai Karamcharis Finance and Development Corporation to deliver Up to ₹15,00,000 Concessional Loan at 4% + ₹50,000 Sanitary Sanitation Grant with full transparency and verified eligibility matching.",
    "tags": [
      "safai karamchari",
      "sanitation",
      "waste",
      "loan",
      "subsidy",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by National Safai Karamcharis Finance and Development Corporation."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "mission-for-integrated-development-of-ho",
    "name": "Mission for Integrated Development of Horticulture (MIDH - Cold Chain)",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Agriculture",
    "benefitAmount": "35% to 50% Capital Subsidy for Solar Cold Storage & Packhouses",
    "benefitType": "Capital Infrastructure Grant",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 35% to 50% Capital Subsidy for Solar Cold Storage & Packhouses under Ministry of Agriculture.",
    "description": "Mission for Integrated Development of Horticulture (MIDH - Cold Chain) is an official welfare development program sponsored by Ministry of Agriculture to deliver 35% to 50% Capital Subsidy for Solar Cold Storage & Packhouses with full transparency and verified eligibility matching.",
    "tags": [
      "cold storage",
      "horticulture",
      "fruits",
      "vegetables",
      "farmer",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Agriculture."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "acabc-agri-clinics-and-agri-business-cen",
    "name": "AC&ABC (Agri-Clinics and Agri-Business Centres)",
    "category": "Business & Micro-Credit",
    "ministry": "NABARD & MANAGE",
    "benefitAmount": "Up to ₹20 Lakhs Loan with 36% to 44% Composite Capital Subsidy",
    "benefitType": "Credit Linked Capital Subsidy",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing Up to ₹20 Lakhs Loan with 36% to 44% Composite Capital Subsidy under NABARD & MANAGE.",
    "description": "AC&ABC (Agri-Clinics and Agri-Business Centres) is an official welfare development program sponsored by NABARD & MANAGE to deliver Up to ₹20 Lakhs Loan with 36% to 44% Composite Capital Subsidy with full transparency and verified eligibility matching.",
    "tags": [
      "agri clinic",
      "agriculture graduate",
      "business",
      "nabard",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by NABARD & MANAGE."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "rubber-board-re-plantation--new-planting",
    "name": "Rubber Board Re-Plantation & New Planting Subsidy",
    "category": "Agriculture & Rural",
    "ministry": "Rubber Board, Ministry of Commerce",
    "benefitAmount": "₹25,000 per Hectare for Natural Rubber Cultivation",
    "benefitType": "Direct Planting Grant",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing ₹25,000 per Hectare for Natural Rubber Cultivation under Rubber Board, Ministry of Commerce.",
    "description": "Rubber Board Re-Plantation & New Planting Subsidy is an official welfare development program sponsored by Rubber Board, Ministry of Commerce to deliver ₹25,000 per Hectare for Natural Rubber Cultivation with full transparency and verified eligibility matching.",
    "tags": [
      "rubber",
      "plantation",
      "kerala",
      "tripura",
      "farmer",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Rubber Board, Ministry of Commerce."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "tea-board-small-tea-growers-development-",
    "name": "Tea Board Small Tea Growers Development Scheme",
    "category": "Agriculture & Rural",
    "ministry": "Tea Board of India",
    "benefitAmount": "25% to 40% Subsidy for Pruning Machines, Transport Vans & Green Leaf Storage",
    "benefitType": "Capital Asset Grant",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 25% to 40% Subsidy for Pruning Machines, Transport Vans & Green Leaf Storage under Tea Board of India.",
    "description": "Tea Board Small Tea Growers Development Scheme is an official welfare development program sponsored by Tea Board of India to deliver 25% to 40% Subsidy for Pruning Machines, Transport Vans & Green Leaf Storage with full transparency and verified eligibility matching.",
    "tags": [
      "tea",
      "assam",
      "darjeeling",
      "nilgiri",
      "small tea growers",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Tea Board of India."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "coffee-board-water-augmentation--mechani",
    "name": "Coffee Board Water Augmentation & Mechanization Subsidy",
    "category": "Agriculture & Rural",
    "ministry": "Coffee Board of India",
    "benefitAmount": "Up to 50% Subsidy for Water Harvesting Ponds & Coffee Pulping Units",
    "benefitType": "Capital Subsidy",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing Up to 50% Subsidy for Water Harvesting Ponds & Coffee Pulping Units under Coffee Board of India.",
    "description": "Coffee Board Water Augmentation & Mechanization Subsidy is an official welfare development program sponsored by Coffee Board of India to deliver Up to 50% Subsidy for Water Harvesting Ponds & Coffee Pulping Units with full transparency and verified eligibility matching.",
    "tags": [
      "coffee",
      "karnataka",
      "kerala",
      "tamil nadu",
      "plantation",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Coffee Board of India."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "coconut-palm-insurance--rejuvenation-sub",
    "name": "Coconut Palm Insurance & Rejuvenation Subsidy",
    "category": "Agriculture & Rural",
    "ministry": "Coconut Development Board, Ministry of Agriculture",
    "benefitAmount": "₹1,000 per Tree Insurance Claim + ₹17,500/ha for Replanting",
    "benefitType": "Tree Insurance & Replanting Grant",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing ₹1,000 per Tree Insurance Claim + ₹17,500/ha for Replanting under Coconut Development Board, Ministry of Agriculture.",
    "description": "Coconut Palm Insurance & Rejuvenation Subsidy is an official welfare development program sponsored by Coconut Development Board, Ministry of Agriculture to deliver ₹1,000 per Tree Insurance Claim + ₹17,500/ha for Replanting with full transparency and verified eligibility matching.",
    "tags": [
      "coconut",
      "palm",
      "kerala",
      "tamil nadu",
      "andhra",
      "farmer",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Coconut Development Board, Ministry of Agriculture."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "mahila-coir-yojana-modern-spinning-rats-",
    "name": "Mahila Coir Yojana (Modern Spinning Rats for Women)",
    "category": "Women & Child Development",
    "ministry": "Coir Board, Ministry of MSME",
    "benefitAmount": "75% Subsidy for Motorized Traditional Coir Spinning Machines",
    "benefitType": "Women Asset Subsidy",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 75% Subsidy for Motorized Traditional Coir Spinning Machines under Coir Board, Ministry of MSME.",
    "description": "Mahila Coir Yojana (Modern Spinning Rats for Women) is an official welfare development program sponsored by Coir Board, Ministry of MSME to deliver 75% Subsidy for Motorized Traditional Coir Spinning Machines with full transparency and verified eligibility matching.",
    "tags": [
      "coir",
      "women",
      "spinning",
      "coastal",
      "artisan",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Coir Board, Ministry of MSME."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "jute-icare-improved-cultivation-and-adva",
    "name": "JUTE-ICARE (Improved Cultivation and Advanced Retting Exercise)",
    "category": "Agriculture & Rural",
    "ministry": "National Jute Board, Ministry of Textiles",
    "benefitAmount": "Free Certified Jute Seeds, Microbial Retting Consortia & Mechanical Weeders",
    "benefitType": "Free Input Package",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing Free Certified Jute Seeds, Microbial Retting Consortia & Mechanical Weeders under National Jute Board, Ministry of Textiles.",
    "description": "JUTE-ICARE (Improved Cultivation and Advanced Retting Exercise) is an official welfare development program sponsored by National Jute Board, Ministry of Textiles to deliver Free Certified Jute Seeds, Microbial Retting Consortia & Mechanical Weeders with full transparency and verified eligibility matching.",
    "tags": [
      "jute",
      "west bengal",
      "bihar",
      "assam",
      "farmer",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by National Jute Board, Ministry of Textiles."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "spices-board-post-harvest-quality-improv",
    "name": "Spices Board Post-Harvest Quality Improvement Grant",
    "category": "Agriculture & Rural",
    "ministry": "Spices Board, Ministry of Commerce",
    "benefitAmount": "Up to 50% Subsidy for Cardamom Dryers, Pepper Threshers & Turmeric Polishers",
    "benefitType": "Machinery Subsidy",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing Up to 50% Subsidy for Cardamom Dryers, Pepper Threshers & Turmeric Polishers under Spices Board, Ministry of Commerce.",
    "description": "Spices Board Post-Harvest Quality Improvement Grant is an official welfare development program sponsored by Spices Board, Ministry of Commerce to deliver Up to 50% Subsidy for Cardamom Dryers, Pepper Threshers & Turmeric Polishers with full transparency and verified eligibility matching.",
    "tags": [
      "spices",
      "cardamom",
      "pepper",
      "turmeric",
      "farmer",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Spices Board, Ministry of Commerce."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "national-bamboo-mission-nbm",
    "name": "National Bamboo Mission (NBM)",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Agriculture and Farmers Welfare",
    "benefitAmount": "50% Subsidy for Bamboo Plantations & Handicraft Processing Units",
    "benefitType": "Capital Plantation Grant",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 50% Subsidy for Bamboo Plantations & Handicraft Processing Units under Ministry of Agriculture and Farmers Welfare.",
    "description": "National Bamboo Mission (NBM) is an official welfare development program sponsored by Ministry of Agriculture and Farmers Welfare to deliver 50% Subsidy for Bamboo Plantations & Handicraft Processing Units with full transparency and verified eligibility matching.",
    "tags": [
      "bamboo",
      "north east",
      "handicraft",
      "farmer",
      "plantation",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Agriculture and Farmers Welfare."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "national-medicinal-plants-board-nmpb-sub",
    "name": "National Medicinal Plants Board (NMPB) Subsidy",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of AYUSH",
    "benefitAmount": "30% to 75% Capital Subsidy for Cultivating High-Value Herbal & Ayurvedic Plants",
    "benefitType": "Plantation Subsidy",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 30% to 75% Capital Subsidy for Cultivating High-Value Herbal & Ayurvedic Plants under Ministry of AYUSH.",
    "description": "National Medicinal Plants Board (NMPB) Subsidy is an official welfare development program sponsored by Ministry of AYUSH to deliver 30% to 75% Capital Subsidy for Cultivating High-Value Herbal & Ayurvedic Plants with full transparency and verified eligibility matching.",
    "tags": [
      "ayush",
      "herbal",
      "medicinal plants",
      "ayurveda",
      "farmer",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of AYUSH."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "midh-commercial-floriculture--greenhouse",
    "name": "MIDH Commercial Floriculture & Greenhouse Polyhouse Subsidy",
    "category": "Agriculture & Rural",
    "ministry": "Department of Agriculture",
    "benefitAmount": "50% Capital Subsidy for Setting up Climate-Controlled Polyhouses (Roses, Gerbera, Orchids)",
    "benefitType": "Capital Greenhouse Subsidy",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 50% Capital Subsidy for Setting up Climate-Controlled Polyhouses (Roses, Gerbera, Orchids) under Department of Agriculture.",
    "description": "MIDH Commercial Floriculture & Greenhouse Polyhouse Subsidy is an official welfare development program sponsored by Department of Agriculture to deliver 50% Capital Subsidy for Setting up Climate-Controlled Polyhouses (Roses, Gerbera, Orchids) with full transparency and verified eligibility matching.",
    "tags": [
      "flowers",
      "polyhouse",
      "greenhouse",
      "floriculture",
      "farmer",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Department of Agriculture."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "commercial-mushroom-production--spawn-la",
    "name": "Commercial Mushroom Production & Spawn Lab Grant",
    "category": "Agriculture & Rural",
    "ministry": "Directorate of Mushroom Research & ICAR",
    "benefitAmount": "40% Capital Subsidy up to ₹8,00,000 for Mushroom Cultivation Rooms",
    "benefitType": "Capital Grant",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 40% Capital Subsidy up to ₹8,00,000 for Mushroom Cultivation Rooms under Directorate of Mushroom Research & ICAR.",
    "description": "Commercial Mushroom Production & Spawn Lab Grant is an official welfare development program sponsored by Directorate of Mushroom Research & ICAR to deliver 40% Capital Subsidy up to ₹8,00,000 for Mushroom Cultivation Rooms with full transparency and verified eligibility matching.",
    "tags": [
      "mushroom",
      "spawn",
      "indoor farming",
      "farmer",
      "self-employed",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Directorate of Mushroom Research & ICAR."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "rainfed-area-development-rad---integrate",
    "name": "Rainfed Area Development (RAD - Integrated Farming System)",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Agriculture",
    "benefitAmount": "₹50,000 per Hectare for Crop + Livestock + Dairy + Fishery Integration",
    "benefitType": "Composite Farming Grant",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing ₹50,000 per Hectare for Crop + Livestock + Dairy + Fishery Integration under Ministry of Agriculture.",
    "description": "Rainfed Area Development (RAD - Integrated Farming System) is an official welfare development program sponsored by Ministry of Agriculture to deliver ₹50,000 per Hectare for Crop + Livestock + Dairy + Fishery Integration with full transparency and verified eligibility matching.",
    "tags": [
      "integrated farming",
      "rainfed",
      "dairy",
      "poultry",
      "farmer",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Agriculture."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "apeda-organic-farm-export-certification-",
    "name": "APEDA Organic Farm Export Certification Support",
    "category": "Business & Micro-Credit",
    "ministry": "Agricultural & Processed Food Products Export Development Authority (APEDA)",
    "benefitAmount": "50% Financial Assistance for NPOP & International Organic Audits",
    "benefitType": "Certification Fee Subsidy",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 50% Financial Assistance for NPOP & International Organic Audits under Agricultural & Processed Food Products Export Development Authority (APEDA).",
    "description": "APEDA Organic Farm Export Certification Support is an official welfare development program sponsored by Agricultural & Processed Food Products Export Development Authority (APEDA) to deliver 50% Financial Assistance for NPOP & International Organic Audits with full transparency and verified eligibility matching.",
    "tags": [
      "export",
      "organic",
      "apeda",
      "certification",
      "farmer",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Agricultural & Processed Food Products Export Development Authority (APEDA)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "sub-mission-on-agricultural-mechanizatio",
    "name": "Sub-Mission on Agricultural Mechanization (SMAM - Drone Shakti)",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Agriculture and Farmers Welfare",
    "benefitAmount": "100% Grant up to ₹10 Lakhs (ICAR/KVKs) & 50% Subsidy for FPOs on Agriculture Drones",
    "benefitType": "Drone Purchase Subsidy",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 100% Grant up to ₹10 Lakhs (ICAR/KVKs) & 50% Subsidy for FPOs on Agriculture Drones under Ministry of Agriculture and Farmers Welfare.",
    "description": "Sub-Mission on Agricultural Mechanization (SMAM - Drone Shakti) is an official welfare development program sponsored by Ministry of Agriculture and Farmers Welfare to deliver 100% Grant up to ₹10 Lakhs (ICAR/KVKs) & 50% Subsidy for FPOs on Agriculture Drones with full transparency and verified eligibility matching.",
    "tags": [
      "drone",
      "spray",
      "technology",
      "fpo",
      "farmer",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Agriculture and Farmers Welfare."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "smam-custom-hiring-center-farm-machinery",
    "name": "SMAM Custom Hiring Center Farm Machinery Subsidy",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Agriculture",
    "benefitAmount": "40% to 80% Capital Subsidy up to ₹24 Lakhs for Village Farm Machinery Bank",
    "benefitType": "Machinery Bank Subsidy",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 40% to 80% Capital Subsidy up to ₹24 Lakhs for Village Farm Machinery Bank under Ministry of Agriculture.",
    "description": "SMAM Custom Hiring Center Farm Machinery Subsidy is an official welfare development program sponsored by Ministry of Agriculture to deliver 40% to 80% Capital Subsidy up to ₹24 Lakhs for Village Farm Machinery Bank with full transparency and verified eligibility matching.",
    "tags": [
      "chc",
      "custom hiring",
      "machinery",
      "tractor",
      "harvester",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Agriculture."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "operation-greens:-top-to-total-kisan-rai",
    "name": "Operation Greens: TOP to TOTAL Kisan Rail Freight Subsidy",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Food Processing Industries & Indian Railways",
    "benefitAmount": "50% Rail Freight Subsidy for Transporting Fruits & Vegetables",
    "benefitType": "Direct Freight Subsidy",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 50% Rail Freight Subsidy for Transporting Fruits & Vegetables under Ministry of Food Processing Industries & Indian Railways.",
    "description": "Operation Greens: TOP to TOTAL Kisan Rail Freight Subsidy is an official welfare development program sponsored by Ministry of Food Processing Industries & Indian Railways to deliver 50% Rail Freight Subsidy for Transporting Fruits & Vegetables with full transparency and verified eligibility matching.",
    "tags": [
      "railway",
      "freight",
      "transport",
      "vegetables",
      "fruits",
      "farmer",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Food Processing Industries & Indian Railways."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "rural-godown---warehouse-capital-subsidy",
    "name": "Rural Godown / Warehouse Capital Subsidy Scheme",
    "category": "Agriculture & Rural",
    "ministry": "NABARD & Directorate of Marketing and Inspection",
    "benefitAmount": "25% to 33.33% Capital Subsidy for Constructing Rural Grain Godowns",
    "benefitType": "Warehouse Capital Subsidy",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 25% to 33.33% Capital Subsidy for Constructing Rural Grain Godowns under NABARD & Directorate of Marketing and Inspection.",
    "description": "Rural Godown / Warehouse Capital Subsidy Scheme is an official welfare development program sponsored by NABARD & Directorate of Marketing and Inspection to deliver 25% to 33.33% Capital Subsidy for Constructing Rural Grain Godowns with full transparency and verified eligibility matching.",
    "tags": [
      "warehouse",
      "godown",
      "grain storage",
      "nabard",
      "farmer",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by NABARD & Directorate of Marketing and Inspection."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "integrated-packhouse--sorting-grading-li",
    "name": "Integrated Packhouse & Sorting-Grading Line Subsidy",
    "category": "Agriculture & Rural",
    "ministry": "National Horticulture Board (NHB)",
    "benefitAmount": "Up to 50% Capital Subsidy for Automated Fruit Washing, Grading & Packing Lines",
    "benefitType": "Packhouse Subsidy",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing Up to 50% Capital Subsidy for Automated Fruit Washing, Grading & Packing Lines under National Horticulture Board (NHB).",
    "description": "Integrated Packhouse & Sorting-Grading Line Subsidy is an official welfare development program sponsored by National Horticulture Board (NHB) to deliver Up to 50% Capital Subsidy for Automated Fruit Washing, Grading & Packing Lines with full transparency and verified eligibility matching.",
    "tags": [
      "packhouse",
      "grading",
      "sorting",
      "horticulture",
      "fruits",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by National Horticulture Board (NHB)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "agriculture-infrastructure-fund-aif",
    "name": "Agriculture Infrastructure Fund (AIF)",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Agriculture and Farmers Welfare",
    "benefitAmount": "3% Interest Subvention on Loans up to ₹2 Crores for Post-Harvest Infrastructure",
    "benefitType": "Interest Subvention & Credit Guarantee",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 3% Interest Subvention on Loans up to ₹2 Crores for Post-Harvest Infrastructure under Ministry of Agriculture and Farmers Welfare.",
    "description": "Agriculture Infrastructure Fund (AIF) is an official welfare development program sponsored by Ministry of Agriculture and Farmers Welfare to deliver 3% Interest Subvention on Loans up to ₹2 Crores for Post-Harvest Infrastructure with full transparency and verified eligibility matching.",
    "tags": [
      "aif",
      "infrastructure",
      "cold chain",
      "silo",
      "nabard",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Agriculture and Farmers Welfare."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "nam-ayush-wellness-centers--medicinal-he",
    "name": "NAM Ayush Wellness Centers & Medicinal Herbs Support",
    "category": "Healthcare & Insurance",
    "ministry": "Ministry of AYUSH, Govt of India",
    "benefitAmount": "100% Free Consultation, Ayurvedic Herbal Medicines & Yoga Therapy",
    "benefitType": "Free Preventive AYUSH Health Delivery",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 100% Free Consultation, Ayurvedic Herbal Medicines & Yoga Therapy under Ministry of AYUSH, Govt of India.",
    "description": "NAM Ayush Wellness Centers & Medicinal Herbs Support is an official welfare development program sponsored by Ministry of AYUSH, Govt of India to deliver 100% Free Consultation, Ayurvedic Herbal Medicines & Yoga Therapy with full transparency and verified eligibility matching.",
    "tags": [
      "ayush",
      "ayurveda",
      "yoga",
      "homeopathy",
      "herbs",
      "health",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of AYUSH, Govt of India."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "tele-manas-national-tele-mental-health-p",
    "name": "Tele-MANAS (National Tele Mental Health Programme)",
    "category": "Healthcare & Insurance",
    "ministry": "Ministry of Health and Family Welfare (NIMHANS)",
    "benefitAmount": "24x7 Toll-Free Toll-14416 Free Mental Health & Psychiatric Counseling",
    "benefitType": "Free Telephonic Psychiatric Care",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 24x7 Toll-Free Toll-14416 Free Mental Health & Psychiatric Counseling under Ministry of Health and Family Welfare (NIMHANS).",
    "description": "Tele-MANAS (National Tele Mental Health Programme) is an official welfare development program sponsored by Ministry of Health and Family Welfare (NIMHANS) to deliver 24x7 Toll-Free Toll-14416 Free Mental Health & Psychiatric Counseling with full transparency and verified eligibility matching.",
    "tags": [
      "mental health",
      "tele-manas",
      "counseling",
      "psychology",
      "stress",
      "helpline",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Health and Family Welfare (NIMHANS)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "free-anti-rabies-vaccine--immunoglobulin",
    "name": "Free Anti-Rabies Vaccine & Immunoglobulin Prophylaxis",
    "category": "Healthcare & Insurance",
    "ministry": "National Centre for Disease Control (NCDC)",
    "benefitAmount": "100% Free Anti-Rabies Injections (ARV) & RIG in All Government Hospitals",
    "benefitType": "Free Life-Saving Animal Bite Treatment",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 100% Free Anti-Rabies Injections (ARV) & RIG in All Government Hospitals under National Centre for Disease Control (NCDC).",
    "description": "Free Anti-Rabies Vaccine & Immunoglobulin Prophylaxis is an official welfare development program sponsored by National Centre for Disease Control (NCDC) to deliver 100% Free Anti-Rabies Injections (ARV) & RIG in All Government Hospitals with full transparency and verified eligibility matching.",
    "tags": [
      "rabies",
      "dog bite",
      "vaccine",
      "emergency",
      "hospital",
      "free",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by National Centre for Disease Control (NCDC)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "national-sickle-cell-anemia-elimination-",
    "name": "National Sickle Cell Anemia Elimination Mission",
    "category": "Healthcare & Insurance",
    "ministry": "Ministry of Health & Ministry of Tribal Affairs",
    "benefitAmount": "Free Genetic Trait Screening Card + Free Hydroxyurea & Blood Transfusion Support",
    "benefitType": "Free Specialized Tribal Genetic Care",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing Free Genetic Trait Screening Card + Free Hydroxyurea & Blood Transfusion Support under Ministry of Health & Ministry of Tribal Affairs.",
    "description": "National Sickle Cell Anemia Elimination Mission is an official welfare development program sponsored by Ministry of Health & Ministry of Tribal Affairs to deliver Free Genetic Trait Screening Card + Free Hydroxyurea & Blood Transfusion Support with full transparency and verified eligibility matching.",
    "tags": [
      "sickle cell",
      "anemia",
      "tribal",
      "blood",
      "genetic",
      "health",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Health & Ministry of Tribal Affairs."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "national-policy-for-rare-diseases-nprd",
    "name": "National Policy for Rare Diseases (NPRD)",
    "category": "Healthcare & Insurance",
    "ministry": "Ministry of Health and Family Welfare",
    "benefitAmount": "One-Time Treatment Grant up to ₹50,00,000 for Rare Disease Treatment at CoEs",
    "benefitType": "Direct Super-Specialty Medical Grant",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing One-Time Treatment Grant up to ₹50,00,000 for Rare Disease Treatment at CoEs under Ministry of Health and Family Welfare.",
    "description": "National Policy for Rare Diseases (NPRD) is an official welfare development program sponsored by Ministry of Health and Family Welfare to deliver One-Time Treatment Grant up to ₹50,00,000 for Rare Disease Treatment at CoEs with full transparency and verified eligibility matching.",
    "tags": [
      "rare disease",
      "genetic",
      "treatment",
      "grant",
      "hospital",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Health and Family Welfare."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "free-acute-burn-care--skin-grafting-assi",
    "name": "Free Acute Burn Care & Skin Grafting Assistance",
    "category": "Healthcare & Insurance",
    "ministry": "Directorate General of Health Services (DGHS)",
    "benefitAmount": "100% Free Specialized Burn ICU Care & Reconstructive Surgery in District Hospitals",
    "benefitType": "Free Medical Treatment",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 100% Free Specialized Burn ICU Care & Reconstructive Surgery in District Hospitals under Directorate General of Health Services (DGHS).",
    "description": "Free Acute Burn Care & Skin Grafting Assistance is an official welfare development program sponsored by Directorate General of Health Services (DGHS) to deliver 100% Free Specialized Burn ICU Care & Reconstructive Surgery in District Hospitals with full transparency and verified eligibility matching.",
    "tags": [
      "burn",
      "icu",
      "surgery",
      "skin graft",
      "hospital",
      "free",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Directorate General of Health Services (DGHS)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "adip-scheme:-100%-free-cochlear-implant-",
    "name": "ADIP Scheme: 100% Free Cochlear Implant Surgery for Hearing Impaired Children",
    "category": "Healthcare & Insurance",
    "ministry": "Ministry of Social Justice and Empowerment (ALIMCO)",
    "benefitAmount": "₹6,00,000 per Child Free Cochlear Implant Surgery & 2-Year Speech Therapy",
    "benefitType": "Free Surgical & Device Grant",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing ₹6,00,000 per Child Free Cochlear Implant Surgery & 2-Year Speech Therapy under Ministry of Social Justice and Empowerment (ALIMCO).",
    "description": "ADIP Scheme: 100% Free Cochlear Implant Surgery for Hearing Impaired Children is an official welfare development program sponsored by Ministry of Social Justice and Empowerment (ALIMCO) to deliver ₹6,00,000 per Child Free Cochlear Implant Surgery & 2-Year Speech Therapy with full transparency and verified eligibility matching.",
    "tags": [
      "cochlear implant",
      "hearing",
      "deaf",
      "child",
      "surgery",
      "free",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Social Justice and Empowerment (ALIMCO)."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "rashtriya-vayoshri-yojana-assistive-devi",
    "name": "Rashtriya Vayoshri Yojana (Assistive Devices for Senior Citizens)",
    "category": "Social Security & Pension",
    "ministry": "Ministry of Social Justice and Empowerment & ALIMCO",
    "benefitAmount": "100% Free Hearing Aids, Wheelchairs, Walking Sticks, Dentures & Spectacles",
    "benefitType": "Free Physical Assistive Living Devices",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 100% Free Hearing Aids, Wheelchairs, Walking Sticks, Dentures & Spectacles under Ministry of Social Justice and Empowerment & ALIMCO.",
    "description": "Rashtriya Vayoshri Yojana (Assistive Devices for Senior Citizens) is an official welfare development program sponsored by Ministry of Social Justice and Empowerment & ALIMCO to deliver 100% Free Hearing Aids, Wheelchairs, Walking Sticks, Dentures & Spectacles with full transparency and verified eligibility matching.",
    "tags": [
      "senior",
      "elderly",
      "hearing aid",
      "wheelchair",
      "glasses",
      "denture",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Social Justice and Empowerment & ALIMCO."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "naps-national-apprenticeship-promotion-s",
    "name": "NAPS (National Apprenticeship Promotion Scheme)",
    "category": "Skill Development & Livelihood",
    "ministry": "Ministry of Skill Development and Entrepreneurship",
    "benefitAmount": "25% Stipend Support (up to ₹1,500/month) + On-the-Job Industrial Training",
    "benefitType": "Direct Monthly Apprenticeship Stipend",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 25% Stipend Support (up to ₹1,500/month) + On-the-Job Industrial Training under Ministry of Skill Development and Entrepreneurship.",
    "description": "NAPS (National Apprenticeship Promotion Scheme) is an official welfare development program sponsored by Ministry of Skill Development and Entrepreneurship to deliver 25% Stipend Support (up to ₹1,500/month) + On-the-Job Industrial Training with full transparency and verified eligibility matching.",
    "tags": [
      "apprentice",
      "iti",
      "diploma",
      "training",
      "stipend",
      "factory",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Skill Development and Entrepreneurship."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "kisan-call-centre-free-24x7-agro-advisor",
    "name": "Kisan Call Centre (Free 24x7 Agro-Advisory Helpline in 22 Languages)",
    "category": "Agriculture & Rural",
    "ministry": "Ministry of Agriculture and Farmers Welfare",
    "benefitAmount": "100% Free Expert Agricultural Scientist Guidance via 1800-180-1551",
    "benefitType": "Free Real-Time Technical Advisory",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 100% Free Expert Agricultural Scientist Guidance via 1800-180-1551 under Ministry of Agriculture and Farmers Welfare.",
    "description": "Kisan Call Centre (Free 24x7 Agro-Advisory Helpline in 22 Languages) is an official welfare development program sponsored by Ministry of Agriculture and Farmers Welfare to deliver 100% Free Expert Agricultural Scientist Guidance via 1800-180-1551 with full transparency and verified eligibility matching.",
    "tags": [
      "kisan call centre",
      "toll free",
      "agriculture",
      "expert",
      "crop helpline",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Agriculture and Farmers Welfare."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  },
  {
    "id": "pmgsy-all-weather-rural-road-connectivit",
    "name": "PMGSY All-Weather Rural Road Connectivity",
    "category": "Housing & Infrastructure",
    "ministry": "Ministry of Rural Development",
    "benefitAmount": "100% Free All-Weather Bituminous Road Connecting Rural Habitations",
    "benefitType": "Public Infrastructure Asset",
    "targetGroup": "Eligible Citizens, Farmers, Workers & Entrepreneurs",
    "summary": "National and state welfare program providing 100% Free All-Weather Bituminous Road Connecting Rural Habitations under Ministry of Rural Development.",
    "description": "PMGSY All-Weather Rural Road Connectivity is an official welfare development program sponsored by Ministry of Rural Development to deliver 100% Free All-Weather Bituminous Road Connecting Rural Habitations with full transparency and verified eligibility matching.",
    "tags": [
      "road",
      "connectivity",
      "village",
      "rural",
      "infrastructure",
      "welfare",
      "scheme",
      "government"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 80,
      "genders": [
        "all",
        "male",
        "female",
        "other"
      ],
      "occupations": [
        "farmer",
        "artisan",
        "self-employed",
        "daily wage / laborer",
        "all"
      ],
      "maxIncome": 500000,
      "states": [
        "All"
      ],
      "categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS"
      ],
      "ruralOnly": false,
      "requiresLand": false,
      "specialConditions": "Must satisfy eligibility parameters prescribed by Ministry of Rural Development."
    },
    "documents": [
      {
        "name": "Aadhaar Card",
        "required": true,
        "desc": "Identity verification"
      },
      {
        "name": "Bank Passbook",
        "required": true,
        "desc": "Bank account details"
      }
    ],
    "applicationSteps": [
      "Apply via the designated national/state portal or nearest CSC centre.",
      "Complete e-KYC and upload relevant records.",
      "Benefit sanction and direct bank transfer."
    ],
    "officialUrl": "https://www.india.gov.in",
    "deadline": "Open All Year"
  }
];

export const SCHEME_CATEGORIES = [
  "All Categories",
  "Agriculture & Rural",
  "Healthcare & Insurance",
  "Education & Scholarships",
  "Business & Micro-Credit",
  "Clean Energy & Housing",
  "Housing & Infrastructure",
  "Women & Child Development",
  "Skill Development & Livelihood",
  "Social Security & Pension",
  "International NGO & Philanthropy"
];

export const INDIAN_STATES = [
  "All States & UTs",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
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
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi (NCT)",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];

export const SOCIAL_CATEGORIES = [
  "All",
  "General",
  "OBC",
  "SC",
  "ST",
  "EWS"
];

export const OCCUPATIONS = [
  "All Occupations",
  "farmer",
  "agricultural laborer",
  "student",
  "street vendor",
  "artisan",
  "daily wage / laborer",
  "self-employed",
  "unemployed",
  "senior / retired"
];
