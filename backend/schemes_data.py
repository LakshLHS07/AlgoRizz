import json
from pathlib import Path

# Path to master database schemes JSON file
JSON_PATH = Path(__file__).resolve().parent.parent / "database" / "schemes.json"

def load_schemes_from_json():
    if JSON_PATH.exists():
        try:
            with open(JSON_PATH, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"Warning: Could not read {JSON_PATH}: {e}")
    return []

SCHEMES_DATABASE = load_schemes_from_json()

# Categories including NGO & International initiatives
SCHEME_CATEGORIES = [
  "All Categories",
  "Agriculture & Rural",
  "Healthcare & Insurance",
  "Education & Scholarships",
  "Business & Micro-Credit",
  "Clean Energy & Housing",
  "Housing & Infrastructure",
  "Women & Child Development",
  "Skill Development & Livelihood",
  "Social Security & Pension",
  "International NGO & Philanthropy"
]
