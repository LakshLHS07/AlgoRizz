import React from 'react';
import { INDIAN_LANGUAGES, getTranslation } from '../utils/translations';

export function Header({
  backendStatus,
  onOpenBackendModal,
  bookmarkedIds,
  onOpenBookmarks,
  comparedIds,
  onOpenComparison,
  selectedLanguage,
  onChangeLanguage,
  onOpenLanguageModal,
  showingBookmarksOnly,
  currentUser,
  profile,
  eligibleCount,
  onOpenAuthModal,
  onLogout,
  fontSizeMultiplier,
  setFontSizeMultiplier,
  isHighContrast,
  setIsHighContrast
}) {
  const t = getTranslation(selectedLanguage);
  const currentLangObj = INDIAN_LANGUAGES.find(l => l.code === selectedLanguage) || INDIAN_LANGUAGES[0];

  return (
    <header className="minimal-header" aria-label="Portal Navigation">
      <div className="minimal-header-container">
        {/* Brand with Official Logo */}
        <div className="minimal-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="portal-logo-slot" aria-label="Udyama Official Portal Logo" title="Udyama Official Portal Logo">
            <img 
              src="/udyama-logo.png" 
              alt="Udyama Official Portal Logo" 
              className="portal-logo-img" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/udyama-logo-raw.png';
              }}
            />
          </div>
          <div className="minimal-brand-info">
            <div className="brand-title-row">
              <span className="minimal-brand-title">UDYAMA (उद्यम)</span>
            </div>
          </div>
        </div>

        {/* Center Nav */}
        <nav className="minimal-nav">
          <a href="#schemes-results-anchor" className="minimal-nav-link active">
            <span>{t.exploreSchemesNav || "Explore Schemes"}</span>
          </a>

          <button
            type="button"
            className={`minimal-nav-link ${showingBookmarksOnly ? 'active' : ''}`}
            onClick={onOpenBookmarks}
          >
            <span>{t.savedNav || "Saved"}</span>
            {bookmarkedIds.length > 0 && (
              <span className="minimal-count-dot">{bookmarkedIds.length}</span>
            )}
          </button>

          {comparedIds.length > 0 && (
            <button
              type="button"
              className="minimal-nav-link active"
              onClick={onOpenComparison}
            >
              <span>{t.compareNav || "Compare"}</span>
              <span className="minimal-count-dot">{comparedIds.length}</span>
            </button>
          )}
        </nav>

        {/* Right Controls */}
        <div className="minimal-actions">
          {/* CSC Official Counter Action */}
          <button
            type="button"
            className="header-official-counter-btn"
            onClick={onOpenAuthModal}
            title={t.cscCounterNav || "Switch to CSC Official / Authorized Operator Desk"}
          >
            <span>{t.cscCounterNav || "CSC Official Counter →"}</span>
          </button>

          {/* Language Selector */}
          <button
            type="button"
            className="minimal-pill-btn"
            onClick={onOpenLanguageModal}
            title={t.selectLanguageModalTitle || "Select Language"}
          >
            <span className="lang-code-tag">{currentLangObj.code.toUpperCase()}</span>
            <span>{currentLangObj.nativeName}</span>
          </button>

          {/* Accessibility Contrast Toggle */}
          <button
            type="button"
            className={`minimal-icon-btn ${isHighContrast ? 'active' : ''}`}
            onClick={() => setIsHighContrast(prev => !prev)}
            title={t.contrastToggle || "Toggle High Contrast"}
            aria-label="Toggle Contrast"
          >
            <span>◐</span>
          </button>

          {/* User Profile */}
          <div className="minimal-user-cluster">
            <button
              type="button"
              className="minimal-user-pill"
              onClick={onOpenAuthModal}
              title={t.citizenRole || "Citizen Profile"}
            >
              <div className="minimal-avatar">
                {currentUser?.name ? currentUser.name[0].toUpperCase() : 'C'}
              </div>
              <span className="minimal-user-name">
                {currentUser?.name ? currentUser.name.split(' ')[0] : (t.citizenRole || 'Citizen')}
              </span>
            </button>

            {currentUser?.isLoggedIn && (
              <button
                type="button"
                className="minimal-signout-btn"
                onClick={onLogout}
                title={t.signOut || "Sign out"}
              >
                {t.signOut || "Sign out"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Absorbed Beneficiary Profile Bar inside Title Card */}
      {profile && (
        <div className="header-beneficiary-strip">
          <div className="header-beneficiary-container">
            <div className="header-beneficiary-left">
              <span className="beneficiary-profile-label">Current Beneficiary Profile:</span>
              <span className="beneficiary-user-name">
                {currentUser?.name || 'Guest Citizen'}
              </span>
              <span className="beneficiary-separator">•</span>
              <span className="beneficiary-demographics">
                {profile.age} yrs · {profile.occupation} · {profile.state}
              </span>
              {currentUser?.isAadhaarVerified ? (
                <span className="beneficiary-status-badge verified">✓ Aadhaar Verified</span>
              ) : (
                <span className="beneficiary-status-badge guest">Self-Assessed / Guest</span>
              )}
            </div>

            <div className="header-beneficiary-right">
              {eligibleCount !== undefined && (
                <span className="beneficiary-match-note">
                  Matched <strong>{eligibleCount}</strong> eligible schemes
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
