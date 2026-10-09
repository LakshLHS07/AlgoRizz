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
  showingBookmarksOnly,
  currentUser,
  onOpenAuthModal,
  onLogout
}) {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="brand-section">
          <div className="brand-badge-box">
            <span className="brand-initials">U</span>
          </div>
          <div>
            <div className="brand-title-row">
              <h1 className="brand-title">Udyama</h1>
              <span className="live-nlp-pill">
                {currentUser.role === 'official' ? 'Official / CSC Mode' : 'Citizen Self-Service'}
              </span>
            </div>
            <p className="brand-subtitle">
              {currentUser.role === 'official' 
                ? `Operator: ${currentUser.name} | ${currentUser.department || 'CSC Desk'}` 
                : 'Check welfare scheme eligibility, required documents, and application steps'}
            </p>
          </div>
        </div>

        <div className="header-actions">
          {/* User / Portal Switcher */}
          <button
            type="button"
            className="action-btn user-portal-btn"
            onClick={onOpenAuthModal}
            title="Switch portal role or login"
          >
            <span>
              {currentUser.isLoggedIn 
                ? (currentUser.role === 'official' ? `Official: ${currentUser.name}` : `Citizen: ${currentUser.name}`)
                : "Login / Switch Portal"}
            </span>
          </button>

          {currentUser.isLoggedIn && (
            <button
              type="button"
              className="action-btn logout-btn"
              onClick={onLogout}
              title="Logout"
            >
              Logout
            </button>
          )}

          {/* Backend Connection Status */}
          <button 
            type="button"
            className={`backend-pill ${backendStatus.connected ? 'connected' : 'standalone'}`}
            onClick={onOpenBackendModal}
            title="Backend settings"
          >
            <span className="status-dot"></span>
            <span className="status-label">
              {backendStatus.connected ? 'Server Active' : 'Offline Mode'}
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
