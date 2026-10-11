import React from 'react';
import { getTranslation } from '../utils/translations';

export function NLPPromptBar({
  prompt,
  setPrompt,
  onSearch,
  isSearching,
  extractedEntities,
  selectedLanguage = 'en'
}) {
  const t = getTranslation(selectedLanguage);

  const EXAMPLE_PROMPTS = [
    {
      label: "Farmer (Maharashtra)",
      text: "I am a 34-year-old farmer in Maharashtra with 2 acres of land and family income of 1.2 Lakhs. Need help with crop insurance and fertilizer subsidies."
    },
    {
      label: "SC Tech Student",
      text: "I am a 19-year-old SC student studying B.Tech engineering in Karnataka, family annual income is 1.8 Lakhs. Looking for full tuition fee reimbursement."
    },
    {
      label: "Street Vendor",
      text: "I run a small food cart in Delhi, age 31, monthly earning around 12,000. Need collateral-free working capital loan to buy new equipment."
    },
    {
      label: "Senior Citizen (Rural)",
      text: "62-year-old widow living in rural Uttar Pradesh with no stable source of income, looking for monthly destitute old age pension and medical card."
    },
    {
      label: "Girl Child Education",
      text: "I am looking for government high interest savings scheme and education fund for my 5-year-old daughter."
    }
  ];

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
    extractedEntities.category;

  return (
    <div className="minimal-nlp-box">
      <div className="nlp-input-wrapper">
        <textarea
          id="nlp-search-query"
          className="minimal-nlp-textarea"
          rows="2"
          placeholder={t.searchPlaceholder || "Describe yourself or what kind of government support you need in natural language..."}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="nlp-action-bar">
          <span className="nlp-hotkey-text">Press Enter ↵ to match</span>
          <button
            type="button"
            className="minimal-nlp-btn"
            onClick={onSearch}
            disabled={isSearching}
          >
            {isSearching ? "Matching..." : "Find Schemes →"}
          </button>
        </div>
      </div>

      {/* Extracted Parameters Strip */}
      {hasExtracted && (
        <div className="minimal-extracted-chips">
          <span className="extracted-label">Identified:</span>
          {extractedEntities.occupation && (
            <span className="extracted-chip">{extractedEntities.occupation}</span>
          )}
          {extractedEntities.state && (
            <span className="extracted-chip">{extractedEntities.state}</span>
          )}
          {extractedEntities.age && (
            <span className="extracted-chip">{extractedEntities.age} yrs</span>
          )}
          {extractedEntities.income && (
            <span className="extracted-chip">₹{(extractedEntities.income / 100000).toFixed(1)}L/yr</span>
          )}
          {extractedEntities.category && (
            <span className="extracted-chip">{extractedEntities.category}</span>
          )}
        </div>
      )}

      {/* Suggestion Personas */}
      <div className="minimal-personas-row">
        <span className="personas-tag">Try prompt:</span>
        {EXAMPLE_PROMPTS.map((ex, index) => (
          <button
            key={index}
            type="button"
            className="minimal-persona-pill"
            onClick={() => setPrompt(ex.text)}
          >
            {ex.label}
          </button>
        ))}
      </div>
    </div>
  );
}
