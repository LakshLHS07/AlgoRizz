-- ===================================================================
-- AlgoRizz Database Schema (PostgreSQL / SQLite Compatible)
-- ===================================================================

-- 1. Schemes Table
CREATE TABLE IF NOT EXISTS schemes (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(128) NOT NULL,
    ministry VARCHAR(255),
    benefit_amount VARCHAR(255),
    benefit_type VARCHAR(128),
    target_group VARCHAR(255),
    summary TEXT,
    description TEXT,
    tags JSON,
    min_age INTEGER DEFAULT 0,
    max_age INTEGER DEFAULT 120,
    genders JSON,
    occupations JSON,
    max_income INTEGER,
    states JSON,
    categories JSON,
    rural_only BOOLEAN DEFAULT 0,
    urban_only BOOLEAN DEFAULT 0,
    requires_land BOOLEAN DEFAULT 0,
    special_conditions TEXT,
    documents JSON,
    application_steps JSON,
    official_url VARCHAR(512),
    deadline VARCHAR(128) DEFAULT 'Open All Year',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_schemes_category ON schemes(category);
CREATE INDEX IF NOT EXISTS idx_schemes_name ON schemes(name);

-- 2. Citizen Profiles Table
CREATE TABLE IF NOT EXISTS citizen_profiles (
    id VARCHAR(64) PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    age INTEGER NOT NULL,
    gender VARCHAR(32) NOT NULL,
    occupation VARCHAR(128) NOT NULL,
    annual_income INTEGER NOT NULL,
    state VARCHAR(128) NOT NULL,
    district VARCHAR(128),
    area_type VARCHAR(32) DEFAULT 'rural',
    social_category VARCHAR(64) DEFAULT 'General',
    has_land BOOLEAN DEFAULT 0,
    is_student BOOLEAN DEFAULT 0,
    is_differently_abled BOOLEAN DEFAULT 0,
    phone VARCHAR(20),
    aadhaar_last4 VARCHAR(4),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Applications Table
CREATE TABLE IF NOT EXISTS applications (
    id VARCHAR(64) PRIMARY KEY,
    citizen_id VARCHAR(64) NOT NULL,
    scheme_id VARCHAR(64) NOT NULL,
    status VARCHAR(64) DEFAULT 'submitted',
    match_score REAL DEFAULT 1.0,
    eligibility_notes JSON,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (citizen_id) REFERENCES citizen_profiles(id) ON DELETE CASCADE,
    FOREIGN KEY (scheme_id) REFERENCES schemes(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_applications_citizen ON applications(citizen_id);
CREATE INDEX IF NOT EXISTS idx_applications_scheme ON applications(scheme_id);

-- 4. KYC Records Table
CREATE TABLE IF NOT EXISTS kyc_records (
    id VARCHAR(64) PRIMARY KEY,
    citizen_id VARCHAR(64),
    document_type VARCHAR(64) NOT NULL,
    document_hash VARCHAR(255),
    is_verified BOOLEAN DEFAULT 0,
    verification_source VARCHAR(128) DEFAULT 'mock_uidai',
    extracted_fields JSON,
    verified_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (citizen_id) REFERENCES citizen_profiles(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_kyc_citizen ON kyc_records(citizen_id);
