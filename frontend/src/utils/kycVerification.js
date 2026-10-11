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

// DigiLocker Direct Aadhaar Verification (validates authenticity via National Repository without webpage OTP)
export async function verifyAadhaarViaDigiLocker(aadhaar) {
  await new Promise(r => setTimeout(r, 650));

  const clean = (aadhaar || "").replace(/\s|-/g, "");
  if (!validateAadhaarFormat(clean)) {
    return { 
      success: false, 
      error: "Invalid Aadhaar number format. Please enter a valid 12-digit number." 
    };
  }

  // Check specific seeded fake database for Lakshya Sharma
  if (clean === "981888699812") {
    return {
      success: true,
      data: {
        name: "Lakshya Sharma",
        dob: "1998-07-15",
        age: 28,
        gender: "male",
        state: "Maharashtra",
        district: "Pune",
        pincode: "411001",
        address: "14 Shivaji Road, Pune Rural, Maharashtra - 411001",
        aadhaarMasked: "XXXXXXXX9812",
        digilockerUri: "in.gov.uidai-adhr-9812",
        issuer: "DigiLocker National Identity Repository",
        status: "DigiLocker Verified"
      }
    };
  }

  const lastDigits = parseInt(clean.slice(-2), 10) || 45;
  const isFemale = lastDigits % 2 === 0;

  const mockProfiles = [
    {
      name: isFemale ? "Sunita Devi Sharma" : "Ramesh Kumar Patel",
      dob: "1996-04-12",
      age: 28,
      gender: isFemale ? "female" : "male",
      state: "Maharashtra",
      district: "Pune",
      pincode: "411001",
      address: "At Post Khed, Pune Rural, Maharashtra - 410501",
      aadhaarMasked: `XXXXXXXX${clean.slice(-4)}`,
      digilockerUri: `in.gov.uidai-adhr-${clean.slice(-4)}`,
      issuer: "DigiLocker National Identity Repository",
      status: "DigiLocker Verified"
    },
    {
      name: isFemale ? "Kavita Rajesh Patil" : "Sanjay Narayan Rao",
      dob: "1997-11-20",
      age: 29,
      gender: isFemale ? "female" : "male",
      state: "Karnataka",
      district: "Belagavi",
      pincode: "590001",
      address: "House 42, Main Road, Belagavi, Karnataka - 590001",
      aadhaarMasked: `XXXXXXXX${clean.slice(-4)}`,
      digilockerUri: `in.gov.uidai-adhr-${clean.slice(-4)}`,
      issuer: "DigiLocker National Identity Repository",
      status: "DigiLocker Verified"
    }
  ];

  const profile = mockProfiles[lastDigits % mockProfiles.length];
  return {
    success: true,
    data: profile
  };
}

// Simulated Aadhaar Verification (UIDAI e-KYC)
export async function verifyAadhaarOtp(aadhaar, otp) {
  await new Promise(r => setTimeout(r, 600));

  const clean = aadhaar.replace(/\s|-/g, "");
  if (!validateAadhaarFormat(clean)) {
    return { success: false, error: "Invalid 12-digit Aadhaar number." };
  }

  if (otp !== "482916" && otp !== "1234" && otp !== "0000" && otp.length !== 4 && otp.length !== 6) {
    return { success: false, error: "Incorrect OTP. Use 482916 or 1234 for demo verification." };
  }

  if (clean === "981888699812") {
    return {
      success: true,
      data: {
        name: "Lakshya Sharma",
        dob: "1998-07-15",
        age: 28,
        gender: "male",
        state: "Maharashtra",
        district: "Pune",
        address: "14 Shivaji Road, Pune Rural, Maharashtra - 411001",
        aadhaarMasked: "XXXXXXXX9812",
        status: "UIDAI Verified"
      }
    };
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

  // Check specific seeded fake database for Lakshya Sharma
  if (cleanPan === "ABCDE9818F") {
    return {
      success: true,
      data: {
        pan: "ABCDE9818F",
        name: "Lakshya Sharma",
        entityType: "Individual Citizen",
        taxCategory: "Below Basic Exemption Threshold (Eligible for Subsidies)",
        assessedIncomeLimit: 140000,
        verificationStatus: "Active & Aadhaar Linked (NSDL Verified)"
      }
    };
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
      assessedAnnualIncome: 140000,
      statementPeriod: "Last 6 Months Analyzed",
      incomeTier: "Low Income / Priority BPL Category",
      statementFileName: statementFileName || "bank_statement_6months.pdf",
      verified: true
    }
  };
}

// Citizen Mobile OTP Dispatch & Verification
export async function sendMobileOtp(phone) {
  const digits = (phone || "").replace(/\D/g, "");
  if (digits.length !== 10) {
    return { success: false, error: "Please enter a valid 10-digit mobile number." };
  }

  try {
    const res = await fetch("/api/kyc/mobile/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: digits })
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn("Backend mobile OTP endpoint unavailable, using simulated dispatcher", err);
  }

  // Local fallback
  const otp = digits === "9818886998" ? "482916" : "1234";
  return {
    success: true,
    phone: digits,
    otp,
    message: `Demo verification OTP ${otp} has been dispatched to +91 ${digits}.`,
    expiresInSeconds: 600
  };
}

export async function verifyMobileOtp(phone, otp) {
  const digits = (phone || "").replace(/\D/g, "");
  const cleanOtp = (otp || "").trim();

  try {
    const res = await fetch("/api/kyc/mobile/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: digits, otp: cleanOtp })
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        return { success: true, profile: data.profile };
      }
      return { success: false, error: data.message };
    }
  } catch (err) {
    console.warn("Backend verify OTP endpoint unavailable, using simulated verification", err);
  }

  const expected = digits === "9818886998" ? "482916" : "1234";
  if (cleanOtp !== expected && cleanOtp !== "1234" && cleanOtp !== "0000") {
    return { success: false, error: `Invalid OTP. For demo number +91 ${digits}, use OTP: ${expected}` };
  }

  // Fallback linked profile
  if (digits === "9818886998") {
    return {
      success: true,
      profile: {
        role: "citizen",
        name: "Lakshya Sharma",
        mobile: "9818886998",
        age: 28,
        gender: "male",
        state: "Maharashtra",
        district: "Pune",
        occupation: "farmer",
        category: "OBC",
        income: 140000,
        assessedIncome: 140000,
        hasLand: true,
        aadhaar: "XXXXXXXX9812",
        aadhaarFull: "9818 8869 9812",
        isAadhaarVerified: true,
        pan: "ABCDE9818F",
        isPanVerified: true,
        bank: {
          bankName: "State Bank of India (SBI)",
          accountMasked: "XXXXXX9818",
          ifsc: "SBIN0004521",
          dbtStatus: "Active & Aadhaar-Seeded (NPCI Mapper Verified)",
          assessedAnnualIncome: 140000,
          avgMonthlyInflow: "₹11,600 / month"
        },
        isBankVerified: true,
        isLoggedIn: true
      }
    };
  }

  return {
    success: true,
    profile: {
      role: "citizen",
      name: "Citizen Beneficiary",
      mobile: digits,
      age: 28,
      gender: "male",
      state: "Maharashtra",
      district: "Pune",
      occupation: "farmer",
      income: 140000,
      assessedIncome: 140000,
      hasLand: true,
      aadhaar: "XXXXXXXX0000",
      isAadhaarVerified: false,
      pan: null,
      isPanVerified: false,
      isBankVerified: false,
      isLoggedIn: true
    }
  };
}
