"""
Database connection and session factory for AlgoRizz
"""
import os
from pathlib import Path
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .models import Base

DB_DIR = Path(__file__).resolve().parent
DEFAULT_DB_FILE = DB_DIR / "algorizz.sqlite3"
DATABASE_URL = os.getenv("DATABASE_URL", f"sqlite:///{DEFAULT_DB_FILE}")

# Connect args needed for SQLite threads
connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}

engine = create_engine(
    DATABASE_URL,
    connect_args=connect_args,
    echo=os.getenv("SQL_DEBUG", "0") == "1",
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def init_db():
    """Create all tables in the database"""
    Base.metadata.create_all(bind=engine)

def get_db():
    """FastAPI / application dependency for database session lifecycle"""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
