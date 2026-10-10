"""
Database Seeder: Loads government schemes from schemes.json into the DB tables.
Run with: python -m database.seed_data
"""
import sys
import json
from pathlib import Path

# Ensure root workspace is in sys.path
WORKSPACE_DIR = Path(__file__).resolve().parent.parent
if str(WORKSPACE_DIR) not in sys.path:
    sys.path.insert(0, str(WORKSPACE_DIR))

from database.db import engine, init_db, SessionLocal
from database.models import Scheme

def seed_schemes():
    init_db()
    json_path = Path(__file__).resolve().parent / "schemes.json"
    
    if not json_path.exists():
        print(f"[Error] {json_path} does not exist!")
        return

    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    db = SessionLocal()
    inserted_count = 0
    updated_count = 0

    try:
        for item in data:
            elig = item.get("eligibility", {})
            existing = db.query(Scheme).filter(Scheme.id == item["id"]).first()
            
            scheme_payload = {
                "id": item["id"],
                "name": item["name"],
                "category": item.get("category", "General"),
                "ministry": item.get("ministry", ""),
                "benefit_amount": item.get("benefitAmount", ""),
                "benefit_type": item.get("benefitType", ""),
                "target_group": item.get("targetGroup", ""),
                "summary": item.get("summary", ""),
                "description": item.get("description", ""),
                "tags": item.get("tags", []),
                "min_age": elig.get("minAge", 0),
                "max_age": elig.get("maxAge", 120),
                "genders": elig.get("genders", ["all"]),
                "occupations": elig.get("occupations", ["all"]),
                "max_income": elig.get("maxIncome"),
                "states": elig.get("states", ["All"]),
                "categories": elig.get("categories", ["General", "OBC", "SC", "ST", "EWS"]),
                "rural_only": elig.get("ruralOnly", False),
                "urban_only": elig.get("urbanOnly", False),
                "requires_land": elig.get("requiresLand", False),
                "special_conditions": elig.get("specialConditions", ""),
                "documents": item.get("documents", []),
                "application_steps": item.get("applicationSteps", []),
                "official_url": item.get("officialUrl", ""),
                "deadline": item.get("deadline", "Open All Year"),
            }

            if existing:
                for k, v in scheme_payload.items():
                    setattr(existing, k, v)
                updated_count += 1
            else:
                new_scheme = Scheme(**scheme_payload)
                db.add(new_scheme)
                inserted_count += 1

        db.commit()
        print(f"[Success] Seeding finished! Inserted: {inserted_count}, Updated: {updated_count}, Total in file: {len(data)}")
    except Exception as e:
        db.rollback()
        print(f"[Error] Failed to seed database: {e}")
        raise
    finally:
        db.close()

if __name__ == "__main__":
    seed_schemes()
