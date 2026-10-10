from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field

# User Profile Model
class UserProfile(BaseModel):
    age: int = Field(default=28, ge=0, le=120, description="Age of the applicant in years")
    gender: str = Field(default="female", description="Gender: male | female | other | all")
    state: str = Field(default="Maharashtra", description="State or UT of residence")
    income: float = Field(default=140000, ge=0, description="Annual family income in INR")
    category: str = Field(default="OBC", description="Social Category: General | OBC | SC | ST | EWS")
    occupation: str = Field(default="farmer", description="Occupation of applicant")
    hasLand: bool = Field(default=True, description="Whether applicant owns cultivable land")
    isRural: Optional[bool] = Field(default=True, description="Rural or Urban residence")

# Extracted NLP Entities from Prompt
class ExtractedEntities(BaseModel):
    age: Optional[int] = None
    gender: Optional[str] = None
    state: Optional[str] = None
    income: Optional[float] = None
    category: Optional[str] = None
    occupation: Optional[str] = None
    hasLand: Optional[bool] = None
    isRural: Optional[bool] = None
    keywords: List[str] = Field(default_factory=list)

# Search & Match Request
class MatchRequest(BaseModel):
    prompt: Optional[str] = Field(
        default="I am a 28-year-old female farmer in Maharashtra with 2 acres land and family income of 1.4 Lakhs",
        description="Natural language query prompt"
    )
    profile: Optional[UserProfile] = None
    categoryFilter: Optional[str] = Field(default="All Categories", description="Sector or Ministry filter")
    language: Optional[str] = Field(default="en", description="Target language code (e.g., en, hi, mr, bn, te, ta)")

# Gradio/Bridge Compatible Prediction Request
class GradioPredictRequest(BaseModel):
    data: List[Any] = Field(
        default_factory=list,
        description="Array containing [prompt, income, state, occupation]"
    )

# Criteria Check Item
class CriteriaCheck(BaseModel):
    title: str
    requirement: str
    userVal: str
    passed: bool
    note: str

# Document Requirement Item
class SchemeDocument(BaseModel):
    name: str
    required: bool
    desc: str

# Scheme Eligibility Rules
class SchemeEligibility(BaseModel):
    minAge: int = 0
    maxAge: int = 100
    genders: List[str] = Field(default_factory=lambda: ["all"])
    occupations: List[str] = Field(default_factory=lambda: ["all"])
    maxIncome: float = 10000000
    states: List[str] = Field(default_factory=lambda: ["All"])
    categories: List[str] = Field(default_factory=lambda: ["General", "OBC", "SC", "ST", "EWS"])
    ruralOnly: Optional[bool] = False
    urbanOnly: Optional[bool] = False
    requiresLand: bool = False
    specialConditions: Optional[str] = ""

# Scheme Object
class Scheme(BaseModel):
    id: str
    name: str
    category: str
    ministry: str
    benefitAmount: str
    benefitType: str
    targetGroup: str
    targetAudience: Optional[str] = None
    summary: str
    description: str
    tags: List[str] = Field(default_factory=list)
    eligibility: SchemeEligibility
    documents: List[SchemeDocument] = Field(default_factory=list)
    applicationSteps: List[str] = Field(default_factory=list)
    officialUrl: str
    deadline: str
    matchScore: Optional[int] = None
    matchTier: Optional[str] = None
    tierColor: Optional[str] = None
    matchReasons: Optional[List[str]] = None
    warningReasons: Optional[List[str]] = None
    criteriaChecks: Optional[List[CriteriaCheck]] = None

# Match Response
class MatchResponse(BaseModel):
    success: bool = True
    totalMatches: int
    topEligibilityCount: int
    extractedEntities: ExtractedEntities
    appliedProfile: UserProfile
    schemes: List[Scheme]

# KYC Request Models
class AadhaarSendOtpRequest(BaseModel):
    aadhaarNumber: str = Field(..., description="12-digit Aadhaar number")

class AadhaarVerifyOtpRequest(BaseModel):
    aadhaarNumber: str
    otp: str = Field(..., description="6-digit OTP")

class PanVerifyRequest(BaseModel):
    panNumber: str = Field(..., description="10-character PAN number (e.g. ABCDE1234F)")

class BankVerifyRequest(BaseModel):
    bankName: str
    accountNumber: str
    ifscCode: str

# KYC Response Models
class AadhaarVerifyResponse(BaseModel):
    success: bool
    verified: bool
    name: Optional[str] = None
    dob: Optional[str] = None
    age: Optional[int] = None
    gender: Optional[str] = None
    state: Optional[str] = None
    district: Optional[str] = None
    pincode: Optional[str] = None
    message: str

class PanVerifyResponse(BaseModel):
    success: bool
    verified: bool
    name: Optional[str] = None
    pan: Optional[str] = None
    assessedIncome: Optional[float] = None
    taxBracket: Optional[str] = None
    message: str

class BankVerifyResponse(BaseModel):
    success: bool
    verified: bool
    accountHolder: Optional[str] = None
    bankName: Optional[str] = None
    accountNumber: Optional[str] = None
    ifsc: Optional[str] = None
    dbtEnabled: bool = True
    message: str

# Beneficiary Intake Record
class IntakeRecord(BaseModel):
    id: Optional[str] = None
    timestamp: Optional[str] = None
    name: str
    mobile: str
    aadhaar: str
    age: int
    gender: str
    state: str
    category: str
    occupation: str
    income: float
    hasLand: bool
    officerName: str = "Operator (CSC Kiosk)"
    officerId: str = "VLE-90412"
    notes: Optional[str] = None
