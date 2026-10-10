import re
from typing import Dict, Any, List, Tuple
from .schemas import UserProfile, ExtractedEntities, Scheme, CriteriaCheck, SchemeEligibility
from .schemes_data import SCHEMES_DATABASE
from .localization import localize_scheme_dict, get_criteria_translations

def extract_entities_from_prompt(text: str) -> ExtractedEntities:
    if not text or not isinstance(text, str):
        return ExtractedEntities()

    lower = text.lower()
    entities = ExtractedEntities()

    # 1. Age extraction
    age_match = re.search(r'(\d{1,2})\s*(?:years?\s*old|yo|yr|age\s*is|\s*age)', lower) or \
                re.search(r'age\s*(?:of|is|:)?\s*(\d{1,2})', lower)
    if age_match:
        age_val = int(age_match.group(1))
        if 0 <= age_val <= 110:
            entities.age = age_val

    # 2. Gender extraction
    if re.search(r'\b(female|woman|women|girl|mother|widow|daughter|lady)\b', lower):
        entities.gender = "female"
    elif re.search(r'\b(male|man|men|boy|father|son|husband)\b', lower):
        entities.gender = "male"

    # 3. State extraction
    states = [
        "andhra pradesh", "arunachal pradesh", "assam", "bihar", "chhattisgarh",
        "delhi", "goa", "gujarat", "haryana", "himachal pradesh", "jharkhand",
        "karnataka", "kerala", "madhya pradesh", "maharashtra", "manipur",
        "meghalaya", "mizoram", "nagaland", "odisha", "punjab", "rajasthan",
        "sikkim", "tamil nadu", "telangana", "tripura", "uttar pradesh",
        "uttarakhand", "west bengal"
    ]
    for s in states:
        if s in lower:
            entities.state = " ".join(w.capitalize() for w in s.split())
            break
    if "up" in lower.split():
        entities.state = "Uttar Pradesh"
    elif "mp" in lower.split():
        entities.state = "Madhya Pradesh"

    # 4. Income extraction
    lakh_match = re.search(r'(?:rs\.?|inr|₹)?\s*([\d.]+)\s*(?:lakhs?|lpa|l\b)', lower)
    direct_income_match = re.search(r'(?:income|earning|salary|wage)?\s*(?:rs\.?|inr|₹)?\s*(\d{4,7})', lower)
    if lakh_match:
        try:
            entities.income = float(lakh_match.group(1)) * 100000.0
        except ValueError:
            pass
    elif direct_income_match:
        try:
            inc = float(direct_income_match.group(1))
            if inc > 1000:
                entities.income = inc
        except ValueError:
            pass
    elif re.search(r'\b(bpl|below poverty line|poor|destitute|very low income)\b', lower):
        entities.income = 90000.0

    # 5. Category / Caste extraction
    if re.search(r'\b(sc|scheduled caste|dalit)\b', lower):
        entities.category = "SC"
    elif re.search(r'\b(st|scheduled tribe|tribal|adivasi)\b', lower):
        entities.category = "ST"
    elif re.search(r'\b(obc|other backward class)\b', lower):
        entities.category = "OBC"
    elif re.search(r'\b(ews|economically weaker section)\b', lower):
        entities.category = "EWS"
    elif re.search(r'\b(general|open)\b', lower):
        entities.category = "General"

    # 6. Occupation extraction
    if re.search(r'\b(farmer|kisan|agriculture|cultivator|farming|crop)\b', lower):
        entities.occupation = "farmer"
    elif re.search(r'\b(student|studying|college|school|scholarship|degree|diploma)\b', lower):
        entities.occupation = "student"
    elif re.search(r'\b(street vendor|hawker|thela|rehri|vendor|shopkeeper)\b', lower):
        entities.occupation = "street vendor"
    elif re.search(r'\b(artisan|weaver|carpenter|craftsman|blacksmith)\b', lower):
        entities.occupation = "artisan"
    elif re.search(r'\b(laborer|labourer|daily wage|mazdoor|construction worker)\b', lower):
        entities.occupation = "daily wage / laborer"
    elif re.search(r'\b(business|shop|startup|entrepreneur|micro enterprise|self employed)\b', lower):
        entities.occupation = "self-employed"
    elif re.search(r'\b(unemployed|jobless|no job)\b', lower):
        entities.occupation = "unemployed"
    elif re.search(r'\b(senior|retired|elderly|old age|pensioner|widow)\b', lower):
        entities.occupation = "senior / retired"

    # 7. Land & Area check
    if re.search(r'\b(land|acre|hectare|field|khet|cultivable)\b', lower) and not re.search(r'\b(no land|landless)\b', lower):
        entities.hasLand = True
    elif re.search(r'\b(no land|landless)\b', lower):
        entities.hasLand = False

    if re.search(r'\b(village|rural|gram|panchayat)\b', lower):
        entities.isRural = True
    elif re.search(r'\b(city|urban|town|metro|municipality)\b', lower):
        entities.isRural = False

    # Search intent keywords
    intent_keywords = [
        "loan", "pension", "scholarship", "health", "hospital", "insurance",
        "house", "housing", "home", "crop", "seeds", "fertilizer", "girl child",
        "daughter", "marriage", "medical", "treatment", "subsidy", "credit", "education"
    ]
    entities.keywords = [k for k in intent_keywords if k in lower]

    return entities


def evaluate_scheme_criteria(scheme_data: dict, user: UserProfile, lang: str = "en") -> Tuple[int, List[str], List[str], List[CriteriaCheck]]:
    elig = scheme_data.get("eligibility", {})
    t = get_criteria_translations(lang)

    min_age = elig.get("minAge", 0)
    max_age = elig.get("maxAge", 100)
    genders = [g.lower() for g in elig.get("genders", ["all"])]
    occupations = [o.lower() for o in elig.get("occupations", ["all"])]
    max_income = elig.get("maxIncome", 10000000)
    categories = elig.get("categories", ["General", "OBC", "SC", "ST", "EWS"])
    requires_land = elig.get("requiresLand", False)
    rural_only = elig.get("ruralOnly", False)
    urban_only = elig.get("urbanOnly", False)

    score = 50
    match_reasons = []
    warning_reasons = []
    checks = []

    # 1. Age Check
    age_valid = min_age <= user.age <= max_age
    if age_valid:
        score += 10
        match_reasons.append(f"Age {user.age} is within eligible bracket ({min_age}-{max_age} yrs)")
    else:
        score -= 20
        warning_reasons.append(f"Age {user.age} outside standard bracket ({min_age}-{max_age} yrs)")

    checks.append(CriteriaCheck(
        title=t["critAge"],
        requirement=f"{min_age} {t['to']} {max_age} {t['years']}",
        userVal=f"{user.age} {t['years']}",
        passed=age_valid,
        note=t["ageBelow"] if user.age < min_age else t["ageExceeds"] if user.age > max_age else t["ageMet"]
    ))

    # 2. Income Check
    income_valid = user.income <= max_income
    if income_valid:
        score += 15
        match_reasons.append(f"Annual income ₹{user.income/100000:.2f}L is below threshold ₹{max_income/100000:.1f}L")
    else:
        score -= 25
        warning_reasons.append(f"Income ₹{user.income/100000:.2f}L exceeds limit of ₹{max_income/100000:.1f}L")

    checks.append(CriteriaCheck(
        title=t["critIncome"],
        requirement=f"{t['upTo']} ₹{max_income/100000:.1f} {t['lakhs']} / {t['perYear']}",
        userVal=f"₹{user.income/100000:.2f} {t['lakhs']}",
        passed=income_valid,
        note=t["incomeWithin"] if income_valid else t["incomeExceeds"]
    ))

    # 3. Occupation Check
    occ_lower = user.occupation.lower()
    occ_valid = "all" in occupations or any(occ_lower in o or o in occ_lower for o in occupations)
    if occ_valid:
        score += 15
        match_reasons.append(f"Targeted for {', '.join(occupations)}")
    else:
        score -= 15
        warning_reasons.append(f"Targeted primarily for {', '.join(occupations)}")

    checks.append(CriteriaCheck(
        title=t["critOccupation"],
        requirement=t["openToAllOcc"] if "all" in occupations else ", ".join(occupations),
        userVal=user.occupation,
        passed=occ_valid,
        note=t["openToAllOcc"] if "all" in occupations else f"{t['designedFor']} {', '.join(occupations)}"
    ))

    # 4. Gender and Category
    gen_lower = user.gender.lower()
    gen_valid = "all" in genders or gen_lower in genders
    cat_valid = user.category in categories or "General" in categories
    gen_cat_valid = gen_valid and cat_valid

    if gen_cat_valid:
        score += 10
    else:
        score -= 15
        warning_reasons.append(f"Requires gender: {'/'.join(genders)} and social category: {', '.join(categories)}")

    checks.append(CriteriaCheck(
        title=t["critGenderCategory"],
        requirement=f"Gender: {'/'.join(genders)} | Category: {', '.join(categories)}",
        userVal=f"Gender: {user.gender} | Category: {user.category}",
        passed=gen_cat_valid,
        note=t["demographicReqs"]
    ))

    # 5. Land Requirement
    if requires_land:
        land_valid = user.hasLand
        if land_valid:
            score += 15
            match_reasons.append("Landholding verified for agricultural benefits")
        else:
            score -= 30
            warning_reasons.append("Requires cultivable land ownership")

        checks.append(CriteriaCheck(
            title=t["critLand"],
            requirement=t["landReq"],
            userVal=t["ownsLand"] if user.hasLand else t["noLand"],
            passed=land_valid,
            note=t["landConfirmed"] if land_valid else t["requiresLandRecords"]
        ))

    # Rural/Urban filter
    if rural_only and user.isRural is False:
        score -= 15
        warning_reasons.append("Scheme is specifically for rural residents")
    if urban_only and user.isRural is True:
        score -= 15
        warning_reasons.append("Scheme is specifically for urban residents")

    # Clamp score
    final_score = max(20, min(99, score))
    return final_score, match_reasons, warning_reasons, checks


def match_all_schemes(profile: UserProfile, raw_prompt: str = "", category_filter: str = "All Categories", lang: str = "en") -> List[Scheme]:
    extracted = extract_entities_from_prompt(raw_prompt)

    # Merge profile with extracted NLP entities
    combined_user = UserProfile(
        age=profile.age if profile.age else (extracted.age or 28),
        gender=profile.gender if profile.gender and profile.gender != "all" else (extracted.gender or "female"),
        state=profile.state if profile.state and profile.state != "All States & UTs" else (extracted.state or "Maharashtra"),
        income=profile.income if profile.income else (extracted.income or 140000),
        category=profile.category if profile.category and profile.category != "All" else (extracted.category or "OBC"),
        occupation=profile.occupation if profile.occupation and profile.occupation != "All Occupations" else (extracted.occupation or "farmer"),
        hasLand=profile.hasLand if profile.hasLand is not None else (extracted.hasLand if extracted.hasLand is not None else True),
        isRural=profile.isRural if profile.isRural is not None else (extracted.isRural if extracted.isRural is not None else True)
    )

    prompt_lower = (raw_prompt or "").lower()
    matched_list = []

    for raw_scheme in SCHEMES_DATABASE:
        if category_filter and category_filter != "All Categories" and raw_scheme.get("category") != category_filter:
            continue

        score, match_reasons, warning_reasons, checks = evaluate_scheme_criteria(raw_scheme, combined_user, lang)

        # Boost score with query tags
        tags = raw_scheme.get("tags", [])
        matched_tags = [tag for tag in tags if tag in prompt_lower]
        if matched_tags:
            score = min(99, score + len(matched_tags) * 4)
            match_reasons.insert(0, f"Matched query keywords: {', '.join(matched_tags)}")

        tier = "High Match" if score >= 80 else "Moderate Match" if score >= 65 else "Low Match"
        tier_color = "#16a34a" if score >= 80 else "#d97706" if score >= 65 else "#dc2626"

        localized = localize_scheme_dict(raw_scheme, lang)

        scheme_obj = Scheme(
            id=localized["id"],
            name=localized["name"],
            category=localized["category"],
            ministry=localized["ministry"],
            benefitAmount=localized["benefitAmount"],
            benefitType=localized.get("benefitType", "Direct Benefit"),
            targetGroup=localized["targetGroup"],
            targetAudience=localized.get("targetAudience", localized["targetGroup"]),
            summary=localized["summary"],
            description=localized.get("description", localized["summary"]),
            tags=localized.get("tags", []),
            eligibility=SchemeEligibility(**raw_scheme["eligibility"]),
            documents=raw_scheme.get("documents", []),
            applicationSteps=raw_scheme.get("applicationSteps", []),
            officialUrl=raw_scheme.get("officialUrl", "https://india.gov.in"),
            deadline=raw_scheme.get("deadline", "Open All Year"),
            matchScore=score,
            matchTier=tier,
            tierColor=tier_color,
            matchReasons=match_reasons,
            warningReasons=warning_reasons,
            criteriaChecks=checks
        )
        matched_list.append(scheme_obj)

    # Sort by matchScore descending
    matched_list.sort(key=lambda s: s.matchScore or 0, reverse=True)
    return matched_list
