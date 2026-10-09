import React from 'react';

const EXAMPLE_PROMPTS = [
  {
    label: "Small Farmer (Crop & Loan)",
    text: "I am a 34-year-old farmer in Maharashtra with 2 acres of land and family income of 1.2 Lakhs. Need help with crop insurance and fertilizer subsidies."
  },
  {
    label: "College Student (Scholarship)",
    text: "I am a 19-year-old SC student studying B.Tech engineering in Karnataka, family annual income is 1.8 Lakhs. Looking for full tuition fee reimbursement and living stipend."
  },
  {
    label: "Street Vendor (Working Capital)",
    text: "I run a small food cart in Delhi, age 31, monthly earning around 12,000. Need collateral-free working capital loan to buy new equipment."
  },
  {
    label: "Senior Citizen (Pension)",
    text: "62-year-old widow living in rural Uttar Pradesh with no stable source of income, looking for monthly destitute old age pension and medical card."
  },
  {
    label: "Girl Child Education (Savings)",
    text: "I am looking for government high interest savings scheme and education fund for my 5-year-old daughter."
  }
];

export function NLPPromptBar({
  prompt,
  setPrompt,
  onSearch,
  isSearching,
  extractedEntities
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSearch();
    }
  };

  const hasExtracted = 
    extractedEntities.age || 
    extractedEntities.gender || 
    extractedEntities.state || 
    extractedEntities.income || 
    extractedEntities.occupation || 
    extractedEntities.category ||
    (extractedEntities.keywords && extractedEntities.keywords.length > 0);

  return (
    <div className="nlp-prompt-section">
      <div className="nlp-card">
        <div className="prompt-header">
          <h2 className="prompt-heading">Describe Your Situation</h2>
          <span className="prompt-hint">Type in simple everyday language (income, location, work, needs)</span>
        </div>

        <div className="prompt-input-wrapper">
          <textarea
            className="nlp-textarea"
            rows="3"
            placeholder="For example: I am a 28-year-old woman farmer from Maharashtra with 2 children, earning 1.4 Lakhs per year, looking for crop loan and girl child support..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            type="button"
            className="match-submit-btn"
            onClick={onSearch}
            disabled={isSearching}
          >
            {isSearching ? "Searching..." : "Find Matching Schemes"}
          </button>
        </div>

        {/* Extracted Entities */}
        {hasExtracted && (
          <div className="extracted-entities-bar">
            <span className="entities-title">Detected Details:</span>
            <div className="entities-chips">
              {extractedEntities.occupation && (
                <span className="chip">
                  Occupation: <strong>{extractedEntities.occupation}</strong>
                </span>
              )}
              {extractedEntities.state && (
                <span className="chip">
                  State: <strong>{extractedEntities.state}</strong>
                </span>
              )}
              {extractedEntities.age && (
                <span className="chip">
                  Age: <strong>{extractedEntities.age} yrs</strong>
                </span>
              )}
              {extractedEntities.gender && (
                <span className="chip">
                  Gender: <strong>{extractedEntities.gender}</strong>
                </span>
              )}
              {extractedEntities.income && (
                <span className="chip">
                  Income: <strong>₹{(extractedEntities.income / 100000).toFixed(1)}L/yr</strong>
                </span>
              )}
              {extractedEntities.category && (
                <span className="chip">
                  Category: <strong>{extractedEntities.category}</strong>
                </span>
              )}
              {extractedEntities.keywords && extractedEntities.keywords.map(kw => (
                <span key={kw} className="chip chip-keyword">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Quick Example Scenarios */}
        <div className="example-prompts-row">
          <span className="examples-label">Examples:</span>
          <div className="example-chips">
            {EXAMPLE_PROMPTS.map((ex, index) => (
              <button
                key={index}
                type="button"
                className="example-pill-btn"
                onClick={() => setPrompt(ex.text)}
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
