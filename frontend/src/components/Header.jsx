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
        {/* Brand */}
        <div className="minimal-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="minimal-brand-mark">UD</div>
          <div className="minimal-brand-info">
            <span className="minimal-brand-title">Udyama</span>
            <span className="minimal-brand-tag">National Welfare Portal</span>
          </div>
        </div>

        {/* Center Nav */}
        <nav className="minimal-nav">
          <a href="#schemes-results-anchor" className="minimal-nav-link active">
            <span>Explore Schemes</span>
          </a>

          <button
            type="button"
            className={`minimal-nav-link ${showingBookmarksOnly ? 'active' : ''}`}
            onClick={onOpenBookmarks}
          >
            <span>Saved</span>
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
              <span>Compare</span>
              <span className="minimal-count-dot">{comparedIds.length}</span>
            </button>
          )}
        </nav>

        {/* Right Controls */}
        <div className="minimal-actions">
          {/* Language Selector */}
          <button
            type="button"
            className="minimal-pill-btn"
            onClick={onOpenLanguageModal}
            title="Select Language"
          >
            <span className="lang-code-tag">{currentLangObj.code.toUpperCase()}</span>
            <span>{currentLangObj.nativeName}</span>
          </button>

          {/* Accessibility Contrast Toggle */}
          <button
            type="button"
            className={`minimal-icon-btn ${isHighContrast ? 'active' : ''}`}
            onClick={() => setIsHighContrast(prev => !prev)}
            title="Toggle High Contrast"
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
              title="Citizen Profile"
            >
              <div className="minimal-avatar">
                {currentUser?.name ? currentUser.name[0].toUpperCase() : 'C'}
              </div>
              <span className="minimal-user-name">
                {currentUser?.name ? currentUser.name.split(' ')[0] : 'Citizen'}
              </span>
            </button>

            {currentUser?.isLoggedIn && (
              <button
                type="button"
                className="minimal-signout-btn"
                onClick={onLogout}
                title="Sign out"
              >
                Sign out
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
