import React from 'react';

export function Header({
  backendStatus,
  onOpenBackendModal,
  bookmarkedIds,
  onOpenBookmarks,
  comparedIds,
  onOpenComparison,
  selectedLanguage,
  onChangeLanguage,
  totalSchemesCount
}) {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="brand-section">
          <div className="brand-logo-glow">
            <span className="brand-icon">🏛️</span>
          </div>
          <div>
            <div className="brand-title-row">
              <h1 className="brand-title">AlgoRizz <span className="brand-badge">SchemeSetu AI</span></h1>
              <span className="live-nlp-pill">⚡ NLP Semantic Matcher</span>
            </div>
            <p className="brand-subtitle">
              Intelligent Government & NGO Welfare Scheme Discovery powered by Natural Language Processing
            </p>
          </div>
        </div>

        <div className="header-actions">
          {/* Python Backend Status Pill */}
          <button 
            type="button"
            className={`backend-pill ${backendStatus.connected ? 'connected' : 'standalone'}`}
            onClick={onOpenBackendModal}
            title="Configure Python Backend Bridge"
          >
            <span className="status-dot"></span>
            <span className="status-label">
              {backendStatus.connected ? 'Python Gradio Connected' : 'Client-Side NLP Mode'}
            </span>
            <span className="settings-gear">⚙️</span>
          </button>

          {/* Comparison Tray Button */}
          {comparedIds.length > 0 && (
            <button 
              type="button"
              className="action-btn compare-btn"
              onClick={onOpenComparison}
            >
              <span>⚖️ Compare</span>
              <span className="badge-count">{comparedIds.length}</span>
            </button>
          )}

          {/* Bookmarks Button */}
          <button 
            type="button"
            className="action-btn bookmark-nav-btn"
            onClick={onOpenBookmarks}
          >
            <span>⭐ Saved</span>
            {bookmarkedIds.length > 0 && (
              <span className="badge-count">{bookmarkedIds.length}</span>
            )}
          </button>

          {/* Language Selector */}
          <div className="lang-dropdown-wrapper">
            <select 
              value={selectedLanguage} 
              onChange={(e) => onChangeLanguage(e.target.value)}
              className="lang-select"
              aria-label="Select Language"
            >
              <option value="en">🌐 English</option>
              <option value="hi">🌐 हिन्दी (Hindi)</option>
              <option value="mr">🌐 मराठी (Marathi)</option>
              <option value="ta">🌐 தமிழ் (Tamil)</option>
              <option value="te">🌐 తెలుగు (Telugu)</option>
              <option value="bn">🌐 বাংলা (Bengali)</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
