import React, { useState } from 'react';
import { INDIAN_LANGUAGES, getTranslation } from '../utils/translations';

export function LanguageModal({
  isOpen,
  onClose,
  selectedLanguage,
  onSelectLanguage
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const t = getTranslation(selectedLanguage);

  if (!isOpen) return null;

  const filteredLanguages = INDIAN_LANGUAGES.filter(lang => {
    const q = searchQuery.toLowerCase();
    return (
      lang.name.toLowerCase().includes(q) ||
      lang.nativeName.toLowerCase().includes(q) ||
      lang.script.toLowerCase().includes(q)
    );
  });

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog language-picker-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-classic">
          <div className="lang-modal-title-wrap">
            <span className="lang-code-tag">LANG</span>
            <div>
              <h3>{t.selectLanguageModalTitle || "Select Portal Language / भाषा चुनें"}</h3>
              <p className="lang-subtitle">{t.scheduledLanguagesSub || "22 Official Scheduled Indian Regional Languages + English"}</p>
            </div>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label={t.close || "Close"}>
            ✕
          </button>
        </div>

        <div className="language-modal-body">
          {/* Search Box */}
          <div className="lang-search-wrapper">
            <input
              type="text"
              className="lang-search-input"
              placeholder={t.searchLangPlaceholder || t.searchLanguage || "Search by language name or script (e.g. Marathi, বাংলা, தமிழ்)..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <button 
                type="button" 
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                ✕
              </button>
            )}
          </div>

          {/* Languages Grid */}
          <div className="languages-grid-scroll">
            <div className="languages-grid">
              {filteredLanguages.map((lang) => {
                const isSelected = selectedLanguage === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    className={`lang-option-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => {
                      onSelectLanguage(lang.code);
                      onClose();
                    }}
                  >
                    <div className="lang-card-main">
                      <span className="lang-native-name">{lang.nativeName}</span>
                      <span className="lang-english-name">{lang.name}</span>
                    </div>
                    <div className="lang-card-meta">
                      <span className="lang-script-badge">{lang.script}</span>
                      {isSelected && <span className="lang-check-icon">{t.activeLang || "✓ Active"}</span>}
                    </div>
                  </button>
                );
              })}
            </div>

            {filteredLanguages.length === 0 && (
              <div className="no-lang-found">
                <p>{t.noLangFound || "No language found matching"} "{searchQuery}".</p>
              </div>
            )}
          </div>
        </div>

        <div className="modal-footer-classic">
          <span className="lang-footer-hint">
            {t.langFooterHint || "Directly translates all headers, search tools, filters, eligibility metrics, and receipt dockets."}
          </span>
          <button type="button" className="secondary-action-button" onClick={onClose}>
            {t.close || "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}
