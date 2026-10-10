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
      label: t.exampleFarmer,
      text: "I am a 34-year-old farmer in Maharashtra with 2 acres of land and family income of 1.2 Lakhs. Need help with crop insurance and fertilizer subsidies."
    },
    {
      label: t.exampleStudent,
      text: "I am a 19-year-old SC student studying B.Tech engineering in Karnataka, family annual income is 1.8 Lakhs. Looking for full tuition fee reimbursement and living stipend."
    },
    {
      label: t.exampleVendor,
      text: "I run a small food cart in Delhi, age 31, monthly earning around 12,000. Need collateral-free working capital loan to buy new equipment."
    },
    {
      label: t.exampleSenior,
      text: "62-year-old widow living in rural Uttar Pradesh with no stable source of income, looking for monthly destitute old age pension and medical card."
    },
    {
      label: t.exampleGirlChild,
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
    extractedEntities.category ||
    (extractedEntities.keywords && extractedEntities.keywords.length > 0);

  return (
    <section className="classic-search-section">
      <div className="search-frame-box">
        {/* Section Header */}
        <div className="search-frame-header">
          <div className="header-title-flex">
            <span className="search-header-badge">SEARCH & DISCOVERY</span>
            <h2 className="search-main-title">{t.searchTitle}</h2>
          </div>
          <p className="search-subtext">
            {t.searchSubtext}
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
              placeholder={t.searchPlaceholder}
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
              {isSearching ? t.computingButton : t.searchButton}
            </button>
            <span className="search-hotkey-hint">{t.pressEnter}</span>
          </div>
        </div>

        {/* Extracted Entities Data Strip */}
        {hasExtracted && (
          <div className="extracted-params-panel">
            <div className="params-panel-header">
              <span className="params-title">{t.detectedDetails}</span>
            </div>
            <div className="params-table-grid">
              {extractedEntities.occupation && (
                <div className="param-item">
                  <span className="p-label">{t.occupation}:</span>
                  <strong className="p-value">{extractedEntities.occupation}</strong>
                </div>
              )}
              {extractedEntities.state && (
                <div className="param-item">
                  <span className="p-label">{t.stateUt}:</span>
                  <strong className="p-value">{extractedEntities.state}</strong>
                </div>
              )}
              {extractedEntities.age && (
                <div className="param-item">
                  <span className="p-label">{t.ageYears}:</span>
                  <strong className="p-value">{extractedEntities.age} Yrs</strong>
                </div>
              )}
              {extractedEntities.gender && (
                <div className="param-item">
                  <span className="p-label">{t.gender}:</span>
                  <strong className="p-value">{extractedEntities.gender}</strong>
                </div>
              )}
              {extractedEntities.income && (
                <div className="param-item">
                  <span className="p-label">{t.annualIncome}:</span>
                  <strong className="p-value">₹{(extractedEntities.income / 100000).toFixed(1)} Lakhs</strong>
                </div>
              )}
              {extractedEntities.category && (
                <div className="param-item">
                  <span className="p-label">{t.socialCategory}:</span>
                  <strong className="p-value">{extractedEntities.category}</strong>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quick Example Personas */}
        <div className="quick-personas-strip">
          <span className="personas-label">{t.quickExamples}</span>
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
