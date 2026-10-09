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
  showingBookmarksOnly
}) {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="brand-section">
          <div className="brand-badge-box">
            <span className="brand-initials">AS</span>
          </div>
          <div>
            <div className="brand-title-row">
              <h1 className="brand-title">AlgoRizz SchemeSetu</h1>
              <span className="live-nlp-pill">Government Scheme Matcher</span>
            </div>
            <p className="brand-subtitle">
              Check your eligibility for national and state welfare programs
            </p>
          </div>
        </div>

        <div className="header-actions">
          {/* Backend Connection Status */}
          <button 
            type="button"
            className={`backend-pill ${backendStatus.connected ? 'connected' : 'standalone'}`}
            onClick={onOpenBackendModal}
            title="Backend settings"
          >
            <span className="status-dot"></span>
            <span className="status-label">
              {backendStatus.connected ? 'Python Server Active' : 'Offline Matcher'}
            </span>
          </button>

          {/* Compare Button */}
          {comparedIds.length > 0 && (
            <button 
              type="button"
              className="action-btn"
              onClick={onOpenComparison}
            >
              <span>Compare</span>
              <span className="badge-count">{comparedIds.length}</span>
            </button>
          )}

          {/* Bookmarks Toggle Button */}
          <button 
            type="button"
            className={`action-btn ${showingBookmarksOnly ? 'active-toggle' : ''}`}
            onClick={onOpenBookmarks}
          >
            <span>Saved Schemes</span>
            {bookmarkedIds.length > 0 && (
              <span className="badge-count">{bookmarkedIds.length}</span>
            )}
          </button>

          {/* Language Selector */}
          <select 
            value={selectedLanguage} 
            onChange={(e) => onChangeLanguage(e.target.value)}
            className="lang-select"
            aria-label="Language selection"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी (Hindi)</option>
            <option value="mr">मराठी (Marathi)</option>
            <option value="ta">தமிழ் (Tamil)</option>
            <option value="te">తెలుగు (Telugu)</option>
            <option value="bn">বাংলা (Bengali)</option>
          </select>
        </div>
      </div>
    </header>
  );
}
