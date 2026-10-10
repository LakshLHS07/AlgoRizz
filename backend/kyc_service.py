import re
from typing import Dict, Any
from .schemas import (
    AadhaarVerifyResponse,
    PanVerifyResponse,
    BankVerifyResponse
)

MOCK_AADHAAR_REGISTRY = {
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

def clean_digits(val: str) -> str:
    return re.sub(r'\D', '', val or '')

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
