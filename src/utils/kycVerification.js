/**
 * KYC & Financial Verification Utility:
 * - Aadhaar (UIDAI e-KYC)
 * - PAN Card (Income Tax / NSDL)
 * - Bank Account & Statement Analysis (Account Aggregator / Statement Parser)
 */

export const MAJOR_BANKS = [
  "State Bank of India (SBI)",
  "Punjab National Bank (PNB)",
  "Bank of Baroda (BOB)",
  "Canara Bank",
  "Union Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Indian Bank",
  "Central Bank of India"
];

// Format and validate 12-digit Aadhaar Number
export function validateAadhaarFormat(aadhaar) {
  const clean = (aadhaar || "").replace(/\s|-/g, "");
  return /^\d{12}$/.test(clean);
}

// Format and validate 10-character PAN Number (e.g. ABCDE1234F)
export function validatePanFormat(pan) {
  const clean = (pan || "").trim().toUpperCase();
  return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(clean);
}

// Format and validate IFSC Code (4 letters + 0 + 6 alphanumeric characters)
export function validateIfscFormat(ifsc) {
  const clean = (ifsc || "").trim().toUpperCase();
  return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(clean);
}

// Simulated Aadhaar Verification (UIDAI e-KYC)
export async function verifyAadhaarOtp(aadhaar, otp) {
  await new Promise(r => setTimeout(r, 600));

  const clean = aadhaar.replace(/\s|-/g, "");
  if (!validateAadhaarFormat(clean)) {
    return { success: false, error: "Invalid 12-digit Aadhaar number." };
  }

  if (otp !== "1234" && otp !== "0000" && otp.length !== 4 && otp.length !== 6) {
    return { success: false, error: "Incorrect OTP. Use 1234 for demo verification." };
  }

  const lastDigits = parseInt(clean.slice(-2), 10) || 45;
  const isFemale = lastDigits % 2 === 0;

  const mockProfiles = [
    {
      name: isFemale ? "Sunita Devi" : "Ramesh Kumar Sharma",
      dob: "1994-06-15",
      age: 32,
      gender: isFemale ? "female" : "male",
      state: "Maharashtra",
      district: "Pune",
      address: "At Post Khed, Pune Rural, Maharashtra - 410501",
      aadhaarMasked: `XXXXXXXX${clean.slice(-4)}`,
      status: "UIDAI Verified"
    },
    {
      name: isFemale ? "Kavita Rajesh Patil" : "Sanjay Narayan Rao",
      dob: "1997-11-20",
      age: 29,
      gender: isFemale ? "female" : "male",
      state: "Karnataka",
      district: "Belagavi",
      address: "House 42, Main Road, Belagavi, Karnataka - 590001",
      aadhaarMasked: `XXXXXXXX${clean.slice(-4)}`,
      status: "UIDAI Verified"
    }
  ];

  const profile = mockProfiles[lastDigits % mockProfiles.length];
  return {
    success: true,
    data: profile
  };
}

// Simulated PAN Card Verification (NSDL / Income Tax Department)
export async function verifyPanCard(panNumber, registeredName) {
  await new Promise(r => setTimeout(r, 500));

  const cleanPan = panNumber.trim().toUpperCase();
  if (!validatePanFormat(cleanPan)) {
    return { success: false, error: "Invalid PAN format. Standard format: ABCDE1234F" };
  }

  const isIndividual = cleanPan.charAt(3) === 'P';

  return {
    success: true,
    data: {
      pan: cleanPan,
      entityType: isIndividual ? "Individual Citizen" : "Entity / Association",
      taxCategory: "Non-Taxpayer / Low Income Assessment (< ₹2.5L)",
      assessedIncomeLimit: 140000,
      verificationStatus: "Active & Aadhaar Linked (NSDL Verified)"
    }
  };
}

// Simulated Bank Statement & Account Verification
export async function verifyBankStatement({
  bankName,
  accountNumber,
  ifscCode,
  statementFileName = "bank_statement_6months.pdf"
}) {
  await new Promise(r => setTimeout(r, 700));

  if (!accountNumber || accountNumber.length < 8) {
    return { success: false, error: "Please enter a valid Bank Account Number (8 to 18 digits)." };
  }

  const cleanIfsc = (ifscCode || "").trim().toUpperCase();
  if (cleanIfsc && !validateIfscFormat(cleanIfsc)) {
    return { success: false, error: "Invalid IFSC Code. Example format: SBIN0001234" };
  }

  // Simulated cashflow analysis derived from statement
  return {
    success: true,
    data: {
      bankName: bankName || "State Bank of India (SBI)",
      accountMasked: `XXXXXX${accountNumber.slice(-4)}`,
      ifsc: cleanIfsc || "SBIN0004521",
      dbtStatus: "Active & Aadhaar-Seeded (NPCI Mapper Verified)",
      avgMonthlyInflow: "₹11,500 / month",
      assessedAnnualIncome: 138000,
      statementPeriod: "Last 6 Months Analyzed",
      incomeTier: "Low Income / Priority BPL Category",
      statementFileName: statementFileName || "bank_statement_6months.pdf",
      verified: true
    }
  };
}
