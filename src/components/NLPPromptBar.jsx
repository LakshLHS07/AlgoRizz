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
    <section className="classic-search-section">
      <div className="search-frame-box">
        {/* Section Header */}
        <div className="search-frame-header">
          <div className="header-title-flex">
            <span className="search-header-badge">SEARCH & DISCOVERY</span>
            <h2 className="search-main-title">Natural Language Scheme Discovery & Criteria Search</h2>
          </div>
          <p className="search-subtext">
            Describe your age, occupation, family income, land holding, or required financial assistance in plain everyday words. The semantic parser will automatically compute eligibility matches.
          </p>
        </div>

        {/* Input & Search Area */}
        <div className="search-input-container">
          <div className="textarea-wrapper">
            <label htmlFor="nlp-search-query" className="sr-only">Welfare Query</label>
            <textarea
              id="nlp-search-query"
              className="classic-search-textarea"
              rows="3"
              placeholder="e.g. I am a 28-year-old female farmer in Maharashtra with 2 acres land and family income of 1.4 Lakhs, looking for crop insurance and education financial assistance..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className="search-submit-panel">
            <button
              type="button"
              className="classic-search-button"
              onClick={onSearch}
              disabled={isSearching}
            >
              {isSearching ? "Computing Matches..." : "Search Matching Schemes →"}
            </button>
            <span className="search-hotkey-hint">Press Enter to Search</span>
          </div>
        </div>

        {/* Extracted Entities Data Strip */}
        {hasExtracted && (
          <div className="extracted-params-panel">
            <div className="params-panel-header">
              <span className="params-title">Parsed Criteria from Query:</span>
            </div>
            <div className="params-table-grid">
              {extractedEntities.occupation && (
                <div className="param-item">
                  <span className="p-label">Occupation:</span>
                  <strong className="p-value">{extractedEntities.occupation}</strong>
                </div>
              )}
              {extractedEntities.state && (
                <div className="param-item">
                  <span className="p-label">State:</span>
                  <strong className="p-value">{extractedEntities.state}</strong>
                </div>
              )}
              {extractedEntities.age && (
                <div className="param-item">
                  <span className="p-label">Age:</span>
                  <strong className="p-value">{extractedEntities.age} Yrs</strong>
                </div>
              )}
              {extractedEntities.gender && (
                <div className="param-item">
                  <span className="p-label">Gender:</span>
                  <strong className="p-value">{extractedEntities.gender}</strong>
                </div>
              )}
              {extractedEntities.income && (
                <div className="param-item">
                  <span className="p-label">Annual Income:</span>
                  <strong className="p-value">₹{(extractedEntities.income / 100000).toFixed(1)} Lakhs</strong>
                </div>
              )}
              {extractedEntities.category && (
                <div className="param-item">
                  <span className="p-label">Social Category:</span>
                  <strong className="p-value">{extractedEntities.category}</strong>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quick Example Personas */}
        <div className="quick-personas-strip">
          <span className="personas-label">Quick Search Examples:</span>
          <div className="personas-list">
            {EXAMPLE_PROMPTS.map((ex, index) => (
              <button
                key={index}
                type="button"
                className="persona-link-btn"
                onClick={() => setPrompt(ex.text)}
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
