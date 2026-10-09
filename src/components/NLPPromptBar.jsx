import React from 'react';

const EXAMPLE_PROMPTS = [
  {
    label: "🌾 Maharashtra Farmer",
    text: "I am a 34-year-old farmer in Maharashtra with 2 acres of land and family income of 1.2 Lakhs. Need help with crop insurance and fertilizer subsidies."
  },
  {
    label: "🎓 SC College Student",
    text: "I am a 19yo SC student studying B.Tech engineering in Karnataka, family annual income is 1.8 LPA. Looking for full tuition fee reimbursement and living stipend."
  },
  {
    label: "🛒 Urban Street Vendor",
    text: "I run a small food cart / tea stall in Delhi, age 31, monthly earning around 12,000. Need collateral-free working capital loan to buy new equipment."
  },
  {
    label: "👵 Senior Widow Pension",
    text: "62-year-old widow living in rural Uttar Pradesh with no stable source of income, looking for monthly destitute old age pension and medical card."
  },
  {
    label: "👧 Girl Child Savings",
    text: "I am looking for government high interest savings scheme and education fund for my 5 year old daughter."
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
      <div className="nlp-container-glow">
        <div className="prompt-header">
          <div className="prompt-title-tag">
            <span className="sparkle-icon">✨</span>
            <span>Natural Language Semantic Search</span>
          </div>
          <span className="prompt-hint">Describe your situation in plain English, Hindi, or Hinglish</span>
        </div>

        <div className="prompt-input-wrapper">
          <textarea
            className="nlp-textarea"
            rows="3"
            placeholder="e.g. 'I am a 28-year-old woman farmer from Maharashtra with 2 children, earning 1.5L per year, looking for crop loan and girl child support...'"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            type="button"
            className={`match-submit-btn ${isSearching ? 'loading' : ''}`}
            onClick={onSearch}
            disabled={isSearching}
          >
            {isSearching ? (
              <span className="spinner-rotate">🔄 Matching...</span>
            ) : (
              <>
                <span>⚡ Run AI Match</span>
                <span className="btn-subtext">NLP + Rules</span>
              </>
            )}
          </button>
        </div>

        {/* Live Extracted Entities Bar */}
        {hasExtracted && (
          <div className="extracted-entities-bar">
            <div className="entities-title">
              <span>🧠 Live NLP Detected Profile:</span>
            </div>
            <div className="entities-chips">
              {extractedEntities.occupation && (
                <span className="chip chip-occupation">
                  💼 Role: <strong>{extractedEntities.occupation}</strong>
                </span>
              )}
              {extractedEntities.state && (
                <span className="chip chip-state">
                  📍 State: <strong>{extractedEntities.state}</strong>
                </span>
              )}
              {extractedEntities.age && (
                <span className="chip chip-age">
                  🎂 Age: <strong>{extractedEntities.age} yrs</strong>
                </span>
              )}
              {extractedEntities.gender && (
                <span className="chip chip-gender">
                  👤 Gender: <strong>{extractedEntities.gender}</strong>
                </span>
              )}
              {extractedEntities.income && (
                <span className="chip chip-income">
                  💰 Income: <strong>₹{(extractedEntities.income / 100000).toFixed(1)}L/yr</strong>
                </span>
              )}
              {extractedEntities.category && (
                <span className="chip chip-category">
                  🏷️ Caste: <strong>{extractedEntities.category}</strong>
                </span>
              )}
              {extractedEntities.keywords && extractedEntities.keywords.map(kw => (
                <span key={kw} className="chip chip-keyword">
                  🔍 #{kw}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Quick Example Prompt Pills */}
        <div className="example-prompts-row">
          <span className="examples-label">Try quick scenarios:</span>
          <div className="example-chips">
            {EXAMPLE_PROMPTS.map((ex, index) => (
              <button
                key={index}
                type="button"
                className="example-pill-btn"
                onClick={() => {
                  setPrompt(ex.text);
                }}
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
