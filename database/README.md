# AlgoRizz Database Module

This folder contains all the database schemas, seed data, and connection helpers for the AlgoRizz Scheme Recommendation System.

## Directory Structure

- `schemes.json`: Master JSON dataset containing comprehensive welfare schemes with eligibility rules, benefits, document checklists, and application workflows.
- `models.py`: SQLAlchemy ORM models defining:
  - `Scheme`: Scheme metadata, eligibility thresholds, quotas, and document requirements.
  - `CitizenProfile`: Citizen demographics, socioeconomic factors, and identification.
  - `Application`: Application submissions, status tracking, and eligibility match scores.
  - `KYCRecord`: Document hashes, verification statuses, and extracted fields.
- `db.py`: Database engine & session generator (defaults to local SQLite `algorizz.sqlite3`, or configurable via `DATABASE_URL` for PostgreSQL).
- `init_db.sql`: Raw DDL SQL script compatible with SQLite and PostgreSQL.
- `seed_data.py`: CLI script to seed the database with all schemes from `schemes.json`.

## Quick Start / Seeding

To create tables and seed scheme data:
```bash
python3 -m database.seed_data
```
