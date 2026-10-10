import { SCHEMES_DATABASE } from "../data/schemesData";

/**
 * Extracts entities from natural language user input
 */
export function extractEntitiesFromPrompt(text) {
  if (!text || typeof text !== "string") {
    return {
      age: null,
      gender: null,
      state: null,
      income: null,
      category: null,
      occupation: null,
      keywords: [],
      hasLand: null,
      isRural: null
    };
  }

  const lower = text.toLowerCase();
  const result = {
    age: null,
    gender: null,
    state: null,
    income: null,
    category: null,
    occupation: null,
    keywords: [],
    hasLand: null,
    isRural: null
  };

  // 1. Age extraction
  const ageMatch = lower.match(/(\d{1,2})\s*(?:years?\s*old|yo|yr|age\s*is|\s*age)/i) ||
                   lower.match(/age\s*(?:of|is|:)?\s*(\d{1,2})/i);
  if (ageMatch) {
    const parsedAge = parseInt(ageMatch[1], 10);
    if (parsedAge >= 0 && parsedAge <= 110) {
      result.age = parsedAge;
    }
  }

  // 2. Gender extraction
  if (/\b(female|woman|women|girl|mother|widow|daughter|lady)\b/i.test(lower)) {
    result.gender = "female";
  } else if (/\b(male|man|men|boy|father|son|husband)\b/i.test(lower)) {
    result.gender = "male";
  }

  // 3. State extraction
  const states = [
    "andhra pradesh", "arunachal pradesh", "assam", "bihar", "chhattisgarh",
    "delhi", "goa", "gujarat", "haryana", "himachal pradesh", "jharkhand",
    "karnataka", "kerala", "madhya pradesh", "maharashtra", "manipur",
    "meghalaya", "mizoram", "nagaland", "odisha", "punjab", "rajasthan",
    "sikkim", "tamil nadu", "telangana", "tripura", "uttar pradesh",
    "uttarakhand", "west bengal", "up", "mp"
  ];
  for (const s of states) {
    if (lower.includes(s)) {
      if (s === "up") result.state = "Uttar Pradesh";
      else if (s === "mp") result.state = "Madhya Pradesh";
      else {
        result.state = s.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      }
      break;
    }
  }

  // 4. Income extraction
  // handles "1.5L", "1.5 lakh", "150000", "2 LPA", "under 2.5 lakh"
  const lakhMatch = lower.match(/(?:rs\.?|inr|₹)?\s*([\d.]+)\s*(?:lakhs?|lpa|l\b)/i);
  const directIncomeMatch = lower.match(/(?:income|earning|salary|wage)?\s*(?:rs\.?|inr|₹)?\s*(\d{4,7})/i);

  if (lakhMatch) {
    result.income = parseFloat(lakhMatch[1]) * 100000;
  } else if (directIncomeMatch && parseInt(directIncomeMatch[1], 10) > 1000) {
    result.income = parseInt(directIncomeMatch[1], 10);
  } else if (/\b(bpl|below poverty line|poor|destitute|very low income)\b/i.test(lower)) {
    result.income = 90000;
  }

  // 5. Category / Caste extraction
  if (/\b(sc|scheduled caste|dalit)\b/i.test(lower)) {
    result.category = "SC";
  } else if (/\b(st|scheduled tribe|tribal|adivasi)\b/i.test(lower)) {
    result.category = "ST";
  } else if (/\b(obc|other backward class)\b/i.test(lower)) {
    result.category = "OBC";
  } else if (/\b(ews|economically weaker section)\b/i.test(lower)) {
    result.category = "EWS";
  } else if (/\b(general|open)\b/i.test(lower)) {
    result.category = "General";
  }

  // 6. Occupation extraction
  if (/\b(farmer|kisan|agriculture|cultivator|farming|crop)\b/i.test(lower)) {
    result.occupation = "farmer";
  } else if (/\b(student|studying|college|school|scholarship|degree|diploma)\b/i.test(lower)) {
    result.occupation = "student";
  } else if (/\b(street vendor|hawker|thela|rehri|vendor|shopkeeper)\b/i.test(lower)) {
    result.occupation = "street vendor";
  } else if (/\b(artisan|weaver|carpenter|craftsman|blacksmith)\b/i.test(lower)) {
    result.occupation = "artisan";
  } else if (/\b(laborer|labourer|daily wage|mazdoor|construction worker)\b/i.test(lower)) {
    result.occupation = "daily wage / laborer";
  } else if (/\b(business|shop|startup|entrepreneur|micro enterprise)\b/i.test(lower)) {
    result.occupation = "self-employed";
  } else if (/\b(unemployed|jobless|no job)\b/i.test(lower)) {
    result.occupation = "unemployed";
  } else if (/\b(senior|retired|elderly|old age|pensioner|widow)\b/i.test(lower)) {
    result.occupation = "senior / retired";
  }

  // 7. Land & Area check
  if (/\b(land|acre|hectare|field|khet|cultivable)\b/i.test(lower) && !/\b(no land|landless)\b/i.test(lower)) {
    result.hasLand = true;
  }
  if (/\b(village|rural|gram|panchayat)\b/i.test(lower)) {
    result.isRural = true;
  } else if (/\b(city|urban|town|metro|municipality)\b/i.test(lower)) {
    result.isRural = false;
  }

  // Extract core search intent terms
  const intentKeywords = [
    "loan", "pension", "scholarship", "health", "hospital", "insurance",
    "house", "housing", "home", "crop", "seeds", "fertilizer", "girl child",
    "daughter", "marriage", "medical", "treatment", "subsidy", "credit", "education"
  ];
  result.keywords = intentKeywords.filter(k => lower.includes(k));

  return result;
}

/**
 * Matches schemes against user profile and NLP prompt query
 */
export function matchSchemes(profile, rawPrompt = "", categoryFilter = "All Categories") {
  const extracted = extractEntitiesFromPrompt(rawPrompt);

  // Merge profile with extracted NLP entities (profile overrides if explicitly provided, else fallback to NLP)
  const combinedUser = {
    age: profile.age ?? extracted.age ?? 30,
    gender: (profile.gender && profile.gender !== "all") ? profile.gender : (extracted.gender || "all"),
    state: (profile.state && profile.state !== "All States & UTs") ? profile.state : (extracted.state || "All"),
    income: profile.income ?? extracted.income ?? 200000,
    category: (profile.category && profile.category !== "All") ? profile.category : (extracted.category || "General"),
    occupation: (profile.occupation && profile.occupation !== "All Occupations") ? profile.occupation : (extracted.occupation || "all"),
    hasLand: profile.hasLand ?? extracted.hasLand ?? false,
    isRural: profile.isRural ?? extracted.isRural ?? null
  };

  const promptLower = (rawPrompt || "").toLowerCase();

  const scoredSchemes = SCHEMES_DATABASE.map(scheme => {
    let score = 50; // base score
    const matchReasons = [];
    const warningReasons = [];

    // 1. Category Filter hard constraint
    if (categoryFilter !== "All Categories" && scheme.category !== categoryFilter) {
      return null;
    }

    // 2. Occupation Matching (High Weight)
    if (scheme.eligibility.occupations.includes("all") || 
        scheme.eligibility.occupations.includes(combinedUser.occupation)) {
      score += 20;
      if (combinedUser.occupation !== "all") {
        matchReasons.push(`Targeted for ${combinedUser.occupation}`);
      }
    } else if (combinedUser.occupation !== "all") {
      score -= 25;
      warningReasons.push(`Primary occupation requested: ${scheme.eligibility.occupations.join(", ")}`);
    }

    // 3. Income Threshold Validation
    if (combinedUser.income <= scheme.eligibility.maxIncome) {
      score += 15;
      matchReasons.push(`Income (₹${(combinedUser.income / 100000).toFixed(1)}L) within limit (₹${(scheme.eligibility.maxIncome / 100000).toFixed(1)}L)`);
    } else {
      score -= 30;
      warningReasons.push(`Income exceeds max ceiling of ₹${(scheme.eligibility.maxIncome / 100000).toFixed(1)}L`);
    }

    // 4. Age Constraints
    if (combinedUser.age >= scheme.eligibility.minAge && combinedUser.age <= scheme.eligibility.maxAge) {
      score += 10;
      matchReasons.push(`Age ${combinedUser.age} qualifies (${scheme.eligibility.minAge}-${scheme.eligibility.maxAge} yrs)`);
    } else {
      score -= 20;
      warningReasons.push(`Age ${combinedUser.age} outside allowed range (${scheme.eligibility.minAge}-${scheme.eligibility.maxAge})`);
    }

    // 5. Gender Fit
    if (scheme.eligibility.genders.includes("all") || scheme.eligibility.genders.includes(combinedUser.gender)) {
      score += 5;
    } else {
      score -= 35;
      warningReasons.push(`Gender restricted to: ${scheme.eligibility.genders.join(", ")}`);
    }

    // 6. Social Category Fit
    if (scheme.eligibility.categories.includes(combinedUser.category) || scheme.eligibility.categories.includes("General")) {
      score += 5;
    }

    // 7. Natural Language Semantic & Keyword Match
    let semanticMatches = 0;
    for (const tag of scheme.tags) {
      if (promptLower.includes(tag)) {
        semanticMatches++;
      }
    }
    for (const kw of extracted.keywords) {
      if (scheme.tags.includes(kw) || scheme.description.toLowerCase().includes(kw)) {
        semanticMatches += 2;
      }
    }

    if (semanticMatches > 0) {
      const semanticBonus = Math.min(25, semanticMatches * 7);
      score += semanticBonus;
      matchReasons.push(`High semantic alignment with inquiry keywords`);
    }

    // 8. Land holding requirement
    if (scheme.eligibility.requiresLand) {
      if (combinedUser.hasLand) {
        score += 8;
        matchReasons.push(`Land ownership requirement verified`);
      } else {
        score -= 15;
        warningReasons.push(`Requires cultivable land ownership`);
      }
    }

    // Normalize final score between 12% and 99%
    const finalScore = Math.min(99, Math.max(12, Math.round(score)));

    let matchTier = "Low Match";
    let tierColor = "#ef4444";
    if (finalScore >= 80) {
      matchTier = "High Eligibility Match";
      tierColor = "#10b981";
    } else if (finalScore >= 55) {
      matchTier = "Moderate Match";
      tierColor = "#f59e0b";
    }

    return {
      ...scheme,
      matchScore: finalScore,
      matchTier,
      tierColor,
      matchReasons,
      warningReasons,
      extracted
    };
  }).filter(Boolean);

  // Sort descending by match score
  return scoredSchemes.sort((a, b) => b.matchScore - a.matchScore);
}
