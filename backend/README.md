# UDYAMA Welfare Scheme Matching API (FastAPI Backend)

Semantic Welfare Scheme Discovery, Criteria Evaluation, e-KYC Verification, and CSC Citizen Intake Backend.

---

## Features

- **Semantic Scheme Discovery (`/api/match`)**: Evaluates citizen demographics and NLP query text against scheme eligibility rules (age, income, landholding, occupation, gender/category).
- **Gradio Bridge Compatibility (`/api/predict` & `/info`)**: Seamless zero-config bridge with React frontend.
- **Criteria Evaluation Engine (`evaluate_scheme_criteria`)**: Generates pass/fail evaluation matrices with contextual notes for every criterion.
- **e-KYC Verification Service (`/api/kyc/*`)**: Aadhaar OTP verification, PAN card assessment, and Bank DBT linking checks.
- **CSC Operator Intake (`/api/intake/match`)**: Official docket generation with receipt references and timestamps.
- **Multi-Language Localization**: Supports Indian Regional Languages (Hindi, Marathi, Bengali, Telugu, Tamil, Gujarati, etc.).

---

## Installation & Setup

1. **Navigate to the backend directory and install dependencies:**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Start the FastAPI Server:**
   ```bash
   # From root:
   python backend/run.py

   # Or using uvicorn directly:
   uvicorn backend.main:app --host 127.0.0.1 --port 7860 --reload
   ```

3. **Access Interactive API Docs:**
   - Swagger UI: [http://127.0.0.1:7860/docs](http://127.0.0.1:7860/docs)
   - ReDoc: [http://127.0.0.1:7860/redoc](http://127.0.0.1:7860/redoc)

---

## Sample API Requests

### 1. Match Schemes from Profile & Natural Language Prompt
```bash
curl -X POST "http://127.0.0.1:7860/api/match" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "I am a 28-year-old female farmer in Maharashtra with 2 acres land and family income of 1.4 Lakhs",
    "profile": {
      "age": 28,
      "gender": "female",
      "state": "Maharashtra",
      "income": 140000,
      "category": "OBC",
      "occupation": "farmer",
      "hasLand": true,
      "isRural": true
    },
    "categoryFilter": "All Categories",
    "language": "en"
  }'
```

### 2. Extract Entities from Query Text
```bash
curl -X POST "http://127.0.0.1:7860/api/extract-entities?prompt=I+am+a+28+year+old+farmer+in+Maharashtra+earning+1.4+lakh"
```

### 3. Verify Aadhaar OTP (e-KYC)
```bash
curl -X POST "http://127.0.0.1:7860/api/kyc/aadhaar/verify" \
  -H "Content-Type: application/json" \
  -d '{
    "aadhaarNumber": "987654321012",
    "otp": "123456"
  }'
```
