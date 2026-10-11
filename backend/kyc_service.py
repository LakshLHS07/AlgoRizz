import re
from typing import Dict, Any
from .schemas import (
    AadhaarVerifyResponse,
    PanVerifyResponse,
    BankVerifyResponse
)

MOCK_AADHAAR_REGISTRY = {
    "981888699812": {
        "name": "Lakshya Sharma",
        "dob": "1998-07-15",
        "age": 28,
        "gender": "male",
        "state": "Maharashtra",
        "district": "Pune",
        "pincode": "411001",
        "phone": "9818886998",
        "pan": "ABCDE9818F",
        "assessedIncome": 140000.0
    },
    "987654321012": {
        "name": "Sunita Devi Sharma",
        "dob": "1996-04-12",
        "age": 28,
        "gender": "female",
        "state": "Maharashtra",
        "district": "Pune",
        "pincode": "411001",
        "assessedIncome": 140000.0
    },
    "123456789012": {
        "name": "Ramesh Kumar Patel",
        "dob": "1984-08-20",
        "age": 40,
        "gender": "male",
        "state": "Gujarat",
        "district": "Ahmedabad",
        "pincode": "380001",
        "assessedIncome": 220000.0
    },
    "555566667777": {
        "name": "Priya Ananth",
        "dob": "2003-11-05",
        "age": 21,
        "gender": "female",
        "state": "Tamil Nadu",
        "district": "Chennai",
        "pincode": "600001",
        "assessedIncome": 95000.0
    }
}

MOCK_PAN_REGISTRY = {
    "ABCDE9818F": {
        "pan": "ABCDE9818F",
        "name": "Lakshya Sharma",
        "taxBracket": "Below Basic Exemption Threshold (Eligible for Subsidies)",
        "assessedIncome": 140000.0,
        "status": "Active & Aadhaar Linked (NSDL Verified)"
    }
}

MOCK_ACTIVE_OTPS = {
    "9818886998": "482916"
}

def clean_digits(val: str) -> str:
    return re.sub(r'\D', '', val or '')

def send_mobile_otp(phone: str) -> Dict[str, Any]:
    digits = clean_digits(phone)
    if len(digits) != 10:
        return {"success": False, "message": "Please enter a valid 10-digit mobile number."}
    
    otp = "482916" if digits == "9818886998" else "1234"
    MOCK_ACTIVE_OTPS[digits] = otp
    print(f"[SMS DISPATCH] Sent OTP {otp} to registered number +91 {digits}")
    return {
        "success": True,
        "phone": digits,
        "otp": otp,
        "message": f"Demo verification OTP {otp} has been dispatched to +91 {digits}.",
        "expiresInSeconds": 600
    }

def verify_mobile_otp(phone: str, otp: str) -> Dict[str, Any]:
    digits = clean_digits(phone)
    clean_otp = (otp or "").strip()
    expected = MOCK_ACTIVE_OTPS.get(digits, "482916" if digits == "9818886998" else "1234")
    
    if clean_otp != expected and clean_otp not in ["482916", "1234", "0000"]:
        return {
            "success": False, 
            "message": f"Incorrect OTP. For demo verification with {digits}, use OTP {expected}."
        }
    
    # Return linked profile for demo phone
    if digits == "9818886998":
        profile = {
            "name": "Lakshya Sharma",
            "phone": "9818886998",
            "age": 28,
            "gender": "male",
            "state": "Maharashtra",
            "district": "Pune",
            "occupation": "farmer",
            "annualIncome": 140000,
            "aadhaar": "9818 8869 9812",
            "aadhaarMasked": "XXXXXXXX9812",
            "pan": "ABCDE9818F",
            "bankName": "State Bank of India (SBI)",
            "accountMasked": "XXXXXX9818",
            "ifsc": "SBIN0004521",
            "isAadhaarVerified": True,
            "isPanVerified": True,
            "isBankVerified": True
        }
    else:
        profile = {
            "name": "Citizen Applicant",
            "phone": digits,
            "age": 28,
            "gender": "male",
            "state": "Maharashtra",
            "district": "Pune Rural",
            "occupation": "farmer",
            "annualIncome": 140000,
            "aadhaar": "Unverified",
            "isAadhaarVerified": False,
            "isPanVerified": False,
            "isBankVerified": False
        }
    
    return {
        "success": True,
        "message": "Mobile number and OTP authenticated successfully.",
        "profile": profile
    }

def verify_aadhaar_via_digilocker(aadhaar_raw: str) -> AadhaarVerifyResponse:
    """
    Direct verification of Aadhaar validity via DigiLocker National Repository without webpage OTP.
    """
    digits = clean_digits(aadhaar_raw)
    if len(digits) != 12:
        return AadhaarVerifyResponse(
            success=False,
            verified=False,
            message="Invalid Aadhaar number format. Aadhaar must contain exactly 12 numeric digits."
        )

    profile = MOCK_AADHAAR_REGISTRY.get(digits)
    if not profile:
        profile = {
            "name": "Verified Beneficiary",
            "dob": "1996-04-12",
            "age": 28,
            "gender": "female" if int(digits[-1]) % 2 == 0 else "male",
            "state": "Maharashtra",
            "district": "Pune Rural",
            "pincode": "412207",
            "assessedIncome": 140000.0
        }

    return AadhaarVerifyResponse(
        success=True,
        verified=True,
        name=profile["name"],
        dob=profile["dob"],
        age=profile["age"],
        gender=profile["gender"],
        state=profile["state"],
        district=profile["district"],
        pincode=profile["pincode"],
        message=f"Aadhaar successfully validated via DigiLocker National Identity Repository (Doc Ref: in.gov.uidai-adhr-{digits[-4:]}). Verified authentic without webpage OTP."
    )

def send_aadhaar_otp(aadhaar_raw: str) -> Dict[str, Any]:
    digits = clean_digits(aadhaar_raw)
    if len(digits) != 12:
        return {"success": False, "message": "Invalid Aadhaar number. Must be 12 digits."}
    return {
        "success": True,
        "message": f"OTP successfully sent to UIDAI registered mobile number for Aadhaar ending in ...{digits[-4:]}",
        "otpSent": True
    }

def verify_aadhaar_otp(aadhaar_raw: str, otp: str) -> AadhaarVerifyResponse:
    digits = clean_digits(aadhaar_raw)
    if len(digits) != 12:
        return AadhaarVerifyResponse(
            success=False,
            verified=False,
            message="Invalid Aadhaar number format."
        )

    if not otp or len(otp.strip()) != 6:
        return AadhaarVerifyResponse(
            success=False,
            verified=False,
            message="Invalid OTP format. Please provide a 6-digit OTP."
        )

    profile = MOCK_AADHAAR_REGISTRY.get(digits)
    if not profile:
        profile = {
            "name": "Verified Citizen Beneficiary",
            "dob": "1994-06-15",
            "age": 30,
            "gender": "female" if int(digits[-1]) % 2 == 0 else "male",
            "state": "Maharashtra",
            "district": "Pune Rural",
            "pincode": "412207",
            "assessedIncome": 160000.0
        }

    return AadhaarVerifyResponse(
        success=True,
        verified=True,
        name=profile["name"],
        dob=profile["dob"],
        age=profile["age"],
        gender=profile["gender"],
        state=profile["state"],
        district=profile["district"],
        pincode=profile["pincode"],
        message="Aadhaar e-KYC verified successfully via UIDAI Biometric/OTP Authentication."
    )

def verify_pan_card(pan_raw: str) -> PanVerifyResponse:
    pan = (pan_raw or "").strip().upper()
    if not re.match(r'^[A-Z]{5}[0-9]{4}[A-Z]{1}$', pan):
        return PanVerifyResponse(
            success=False,
            verified=False,
            message="Invalid PAN format. Must be 10 characters (e.g. ABCDE1234F)."
        )

    if pan in MOCK_PAN_REGISTRY:
        record = MOCK_PAN_REGISTRY[pan]
        return PanVerifyResponse(
            success=True,
            verified=True,
            name=record.get("name", "Assessed Taxpayer Record"),
            pan=pan,
            assessedIncome=record.get("assessedIncome", 140000.0),
            taxBracket=record.get("taxBracket", "Below Basic Exemption Threshold (Eligible for Welfare Subsidies)"),
            message="Income Tax Assessment & PAN record verified successfully with NSDL/CBDT database."
        )

    assessed_income = 140000.0
    return PanVerifyResponse(
        success=True,
        verified=True,
        name="Assessed Taxpayer Record",
        pan=pan,
        assessedIncome=assessed_income,
        taxBracket="Below Basic Exemption Threshold (Eligible for Welfare Subsidies)",
        message="Income Tax Assessment & PAN record verified successfully with NSDL/CBDT database."
    )

def verify_bank_account(bank_name: str, account_number: str, ifsc_code: str) -> BankVerifyResponse:
    acc = clean_digits(account_number)
    ifsc = (ifsc_code or "").strip().upper()

    if len(acc) < 9 or len(acc) > 18:
        return BankVerifyResponse(
            success=False,
            verified=False,
            message="Invalid bank account number length (must be 9-18 digits)."
        )

    if not re.match(r'^[A-Z]{4}0[A-Z0-9]{6}$', ifsc):
        return BankVerifyResponse(
            success=False,
            verified=False,
            message="Invalid IFSC code format (e.g. SBIN0004521)."
        )

    return BankVerifyResponse(
        success=True,
        verified=True,
        accountHolder="Beneficiary Name Matches Aadhaar",
        bankName=bank_name,
        accountNumber=f"••••••••{acc[-4:]}",
        ifsc=ifsc,
        dbtEnabled=True,
        message="NPCI DBT Aadhaar-Bank Mapper link is ACTIVE. Direct benefit transfer ready."
    )
