"""
SQLAlchemy ORM Models for AlgoRizz Scheme Database
"""
import uuid
from datetime import datetime
from sqlalchemy import (
    Column,
    String,
    Integer,
    Boolean,
    Text,
    DateTime,
    JSON,
    ForeignKey,
    Float,
)
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()

class Scheme(Base):
    __tablename__ = "schemes"

    id = Column(String(64), primary_key=True, index=True)
    name = Column(String(255), nullable=False, index=True)
    category = Column(String(128), nullable=False, index=True)
    ministry = Column(String(255), nullable=True)
    benefit_amount = Column(String(255), nullable=True)
    benefit_type = Column(String(128), nullable=True)
    target_group = Column(String(255), nullable=True)
    summary = Column(Text, nullable=True)
    description = Column(Text, nullable=True)
    tags = Column(JSON, default=list)
    
    # Eligibility rules
    min_age = Column(Integer, default=0)
    max_age = Column(Integer, default=120)
    genders = Column(JSON, default=lambda: ["all"])
    occupations = Column(JSON, default=lambda: ["all"])
    max_income = Column(Integer, nullable=True)
    states = Column(JSON, default=lambda: ["All"])
    categories = Column(JSON, default=lambda: ["General", "OBC", "SC", "ST", "EWS"])
    rural_only = Column(Boolean, default=False)
    urban_only = Column(Boolean, default=False)
    requires_land = Column(Boolean, default=False)
    special_conditions = Column(Text, nullable=True)

    # Documents & Steps
    documents = Column(JSON, default=list)
    application_steps = Column(JSON, default=list)
    official_url = Column(String(512), nullable=True)
    deadline = Column(String(128), default="Open All Year")
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    applications = relationship("Application", back_populates="scheme", cascade="all, delete-orphan")


class CitizenProfile(Base):
    __tablename__ = "citizen_profiles"

    id = Column(String(64), primary_key=True, default=lambda: str(uuid.uuid4()))
    full_name = Column(String(255), nullable=False)
    age = Column(Integer, nullable=False)
    gender = Column(String(32), nullable=False)
    occupation = Column(String(128), nullable=False)
    annual_income = Column(Integer, nullable=False)
    state = Column(String(128), nullable=False)
    district = Column(String(128), nullable=True)
    area_type = Column(String(32), default="rural")  # rural / urban
    social_category = Column(String(64), default="General")
    has_land = Column(Boolean, default=False)
    is_student = Column(Boolean, default=False)
    is_differently_abled = Column(Boolean, default=False)
    phone = Column(String(20), nullable=True)
    aadhaar_last4 = Column(String(4), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    applications = relationship("Application", back_populates="citizen", cascade="all, delete-orphan")
    kyc_records = relationship("KYCRecord", back_populates="citizen", cascade="all, delete-orphan")


class Application(Base):
    __tablename__ = "applications"

    id = Column(String(64), primary_key=True, default=lambda: f"ARZ-{uuid.uuid4().hex[:8].upper()}")
    citizen_id = Column(String(64), ForeignKey("citizen_profiles.id"), nullable=False)
    scheme_id = Column(String(64), ForeignKey("schemes.id"), nullable=False)
    status = Column(String(64), default="submitted")  # submitted, under_review, approved, rejected, disbursed
    match_score = Column(Float, default=1.0)
    eligibility_notes = Column(JSON, default=list)
    submitted_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    citizen = relationship("CitizenProfile", back_populates="applications")
    scheme = relationship("Scheme", back_populates="applications")


class KYCRecord(Base):
    __tablename__ = "kyc_records"

    id = Column(String(64), primary_key=True, default=lambda: str(uuid.uuid4()))
    citizen_id = Column(String(64), ForeignKey("citizen_profiles.id"), nullable=True)
    document_type = Column(String(64), nullable=False)  # aadhaar, pan, ration_card, voter_id, income_cert
    document_hash = Column(String(255), nullable=True)
    is_verified = Column(Boolean, default=False)
    verification_source = Column(String(128), default="mock_uidai")
    extracted_fields = Column(JSON, default=dict)
    verified_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    citizen = relationship("CitizenProfile", back_populates="kyc_records")
