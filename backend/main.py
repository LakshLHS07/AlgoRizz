import time
from typing import Optional, List, Dict, Any
from fastapi import FastAPI, HTTPException, Query, status
from fastapi.middleware.cors import CORSMiddleware

from .schemas import (
    UserProfile,
    MatchRequest,
    MatchResponse,
    ExtractedEntities,
    Scheme,
    GradioPredictRequest,
    AadhaarSendOtpRequest,
    AadhaarVerifyOtpRequest,
    AadhaarVerifyResponse,
    PanVerifyRequest,
    PanVerifyResponse,
    BankVerifyRequest,
    BankVerifyResponse,
    IntakeRecord
)
from .schemes_data import SCHEMES_DATABASE, SCHEME_CATEGORIES, INDIAN_STATES, OCCUPATIONS
from .nlp_matcher import extract_entities_from_prompt, match_all_schemes
from .kyc_service import send_aadhaar_otp, verify_aadhaar_otp, verify_pan_card, verify_bank_account
from .localization import localize_scheme_dict

app = FastAPI(
    title="UDYAMA Welfare Scheme Matching API",
    description="Backend API for Semantic Welfare Scheme Discovery, Criteria Evaluation, and Citizen Intake",
    version="1.0.0"
)

# Enable CORS for Frontend React Dev and Production environments
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", tags=["Health"])
@app.get("/info", tags=["Health"])
@app.get("/health", tags=["Health"])
def health_check():
    """
    Health check and backend information endpoint.
    Compatible with frontend pingBackend service.
    """
    return {
        "status": "online",
        "service": "UDYAMA Semantic Welfare Schemes API",
        "version": "1.0.0",
        "totalSchemes": len(SCHEMES_DATABASE),
        "supportedCategories": len(SCHEME_CATEGORIES) - 1,
        "languages": ["en", "hi", "mr", "bn", "te", "ta", "gu", "kn", "ml", "pa", "or", "ur"],
        "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    }

@app.post("/api/match", response_model=MatchResponse, tags=["Scheme Matching"])
def match_schemes_endpoint(req: MatchRequest):
    """
    Evaluates applicant profile and NLP prompt query to return ranked, criteria-evaluated schemes.
    """
    profile = req.profile or UserProfile()
    prompt = req.prompt or ""
    category_filter = req.categoryFilter or "All Categories"
    lang = req.language or "en"

    extracted = extract_entities_from_prompt(prompt)
    matched_schemes = match_all_schemes(profile, prompt, category_filter, lang)

    top_count = len([s for s in matched_schemes if (s.matchScore or 0) >= 80])

    return MatchResponse(
        success=True,
        totalMatches=len(matched_schemes),
        topEligibilityCount=top_count,
        extractedEntities=extracted,
        appliedProfile=profile,
        schemes=matched_schemes
    )

@app.post("/api/predict", tags=["Compatibility"])
def gradio_predict_endpoint(req: GradioPredictRequest):
    """
    Bridge endpoint supporting the Gradio /api/predict array format [prompt, income, state, occupation].
    """
    data = req.data or []
    prompt = data[0] if len(data) > 0 and isinstance(data[0], str) else ""
    income = float(data[1]) if len(data) > 1 and isinstance(data[1], (int, float)) else 140000.0
    state = str(data[2]) if len(data) > 2 and data[2] else "Maharashtra"
    occupation = str(data[3]) if len(data) > 3 and data[3] else "farmer"

    profile = UserProfile(
        income=income,
        state=state,
        occupation=occupation
    )

    matched = match_all_schemes(profile, prompt, "All Categories", "en")
    return {
        "data": [
            [s.model_dump() for s in matched]
        ]
    }

@app.post("/api/extract-entities", response_model=ExtractedEntities, tags=["NLP Extraction"])
def extract_entities_endpoint(prompt: str = Query(..., description="Natural language prompt text")):
    """
    Extracts age, income, state, occupation, category, land, and keywords from natural language text.
    """
    return extract_entities_from_prompt(prompt)

@app.get("/api/schemes", response_model=List[Scheme], tags=["Schemes Catalog"])
def get_all_schemes(
    category: Optional[str] = Query(None, description="Optional Sector/Category filter"),
    lang: str = Query("en", description="Language code")
):
    """
    Retrieves all government welfare schemes with optional category filtering and localization.
    """
    results = []
    for s in SCHEMES_DATABASE:
        if category and category != "All Categories" and s.get("category") != category:
            continue
        localized = localize_scheme_dict(s, lang)
        results.append(Scheme(**localized))
    return results

@app.get("/api/schemes/{scheme_id}", response_model=Scheme, tags=["Schemes Catalog"])
def get_scheme_by_id(scheme_id: str, lang: str = Query("en")):
    """
    Retrieves detailed metadata, eligibility, and documents checklist for a specific scheme.
    """
    for s in SCHEMES_DATABASE:
        if s["id"] == scheme_id:
            localized = localize_scheme_dict(s, lang)
            return Scheme(**localized)
    raise HTTPException(status_code=404, detail="Scheme not found")

@app.get("/api/meta/parameters", tags=["Metadata"])
def get_metadata_parameters():
    """
    Returns dropdown parameter values: categories, states, occupations, genders, social categories.
    """
    return {
        "categories": SCHEME_CATEGORIES,
        "states": INDIAN_STATES,
        "occupations": OCCUPATIONS,
        "genders": ["all", "female", "male", "other"],
        "socialCategories": ["All", "General", "OBC", "SC", "ST", "EWS"]
    }

# KYC Endpoints
@app.post("/api/kyc/aadhaar/send-otp", tags=["e-KYC Verification"])
def send_aadhaar_otp_endpoint(req: AadhaarSendOtpRequest):
    return send_aadhaar_otp(req.aadhaarNumber)

@app.post("/api/kyc/aadhaar/verify", response_model=AadhaarVerifyResponse, tags=["e-KYC Verification"])
def verify_aadhaar_otp_endpoint(req: AadhaarVerifyOtpRequest):
    return verify_aadhaar_otp(req.aadhaarNumber, req.otp)

@app.post("/api/kyc/pan/verify", response_model=PanVerifyResponse, tags=["e-KYC Verification"])
def verify_pan_endpoint(req: PanVerifyRequest):
    return verify_pan_card(req.panNumber)

@app.post("/api/kyc/bank/verify", response_model=BankVerifyResponse, tags=["e-KYC Verification"])
def verify_bank_endpoint(req: BankVerifyRequest):
    return verify_bank_account(req.bankName, req.accountNumber, req.ifscCode)

# Official Intake Docket
@app.post("/api/intake/match", tags=["CSC Official Intake"])
def process_official_intake(record: IntakeRecord, lang: str = Query("en")):
    """
    Official CSC intake processing for assisted citizen onboarding and instant receipt docket creation.
    """
    profile = UserProfile(
        age=record.age,
        gender=record.gender,
        state=record.state,
        income=record.income,
        category=record.category,
        occupation=record.occupation,
        hasLand=record.hasLand,
        isRural=True
    )
    prompt = f"{record.occupation} in {record.state} with annual income {record.income}. {record.notes or ''}"
    matched = match_all_schemes(profile, prompt, "All Categories", lang)

    docket_id = f"CSC-MAH-{int(time.time()) % 100000:05d}"
    timestamp = time.strftime("%d %b %Y, %I:%M %p IST")

    return {
        "success": True,
        "docketId": docket_id,
        "timestamp": timestamp,
        "record": {
            **record.model_dump(),
            "id": docket_id,
            "timestamp": timestamp
        },
        "matchedSchemes": matched[:5]
    }
