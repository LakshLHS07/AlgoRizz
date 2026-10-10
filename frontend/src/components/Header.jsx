import React, { useState, useEffect } from 'react';
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
  const [currentDateTime, setCurrentDateTime] = useState('');
  const t = getTranslation(selectedLanguage);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { 
        weekday: 'short', 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
      };
      setCurrentDateTime(`${now.toLocaleDateString('en-IN', options)} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDecreaseFont = () => {
    setFontSizeMultiplier(prev => Math.max(0.85, prev - 0.05));
  };

  const handleResetFont = () => {
    setFontSizeMultiplier(1.0);
  };

  const handleIncreaseFont = () => {
    setFontSizeMultiplier(prev => Math.min(1.25, prev + 0.05));
  };

  const currentLangObj = INDIAN_LANGUAGES.find(l => l.code === selectedLanguage) || INDIAN_LANGUAGES[0];

  return (
    <header className="app-header-classic">
      {/* Top Accessibility & National Ribbon */}
      <div className="top-gov-ribbon">
        <div className="ribbon-container">
          <div className="gov-title-tag">
            <span className="gov-hindi-text">{t.govIndia}</span>
            <span className="gov-divider">|</span>
            <span className="gov-eng-text">GOVERNMENT OF INDIA</span>
            <span className="gov-divider">|</span>
            <span className="gov-portal-tag">{t.portalTitle}</span>
          </div>

          <div className="ribbon-actions">
            {/* Live IST Clock */}
            <div className="ribbon-clock" title="Current Indian Standard Time">
              <span>{currentDateTime}</span>
            </div>

            <span className="ribbon-divider">|</span>

            {/* Accessibility: Font Size Controls */}
            <div className="accessibility-font-controls" aria-label="Text size adjustments">
              <button 
                type="button" 
                className="font-size-btn" 
                onClick={handleDecreaseFont} 
                title="Decrease Font Size (A-)"
              >
                A-
              </button>
              <button 
                type="button" 
                className="font-size-btn reset-btn" 
                onClick={handleResetFont} 
                title="Default Font Size (A)"
              >
                A
              </button>
              <button 
                type="button" 
                className="font-size-btn" 
                onClick={handleIncreaseFont} 
                title="Increase Font Size (A+)"
              >
                A+
              </button>
            </div>

            <span className="ribbon-divider">|</span>

            {/* High Contrast Toggle */}
            <button
              type="button"
              className={`contrast-toggle-btn ${isHighContrast ? 'active' : ''}`}
              onClick={() => setIsHighContrast(prev => !prev)}
              title="Toggle High Contrast Mode"
            >
              <span>{isHighContrast ? 'Standard' : 'High Contrast'}</span>
            </button>

            <span className="ribbon-divider">|</span>

            {/* Language Selection Modal Trigger */}
            <button
              type="button"
              className="ribbon-lang-modal-btn"
              onClick={onOpenLanguageModal}
              title="Select from all 22 Indian Regional Languages"
            >
              <span className="lang-icon">🌐</span>
              <span className="lang-active-label">{currentLangObj.nativeName} ({currentLangObj.name})</span>
              <span className="lang-chevron">▼</span>
            </button>

            {/* Language Quick Dropdown */}
            <select 
              value={selectedLanguage} 
              onChange={(e) => onChangeLanguage(e.target.value)}
              className="ribbon-lang-select"
              aria-label="Quick language selection"
            >
              {INDIAN_LANGUAGES.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.nativeName} - {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Institutional Header Bar */}
      <div className="main-header-nav">
        <div className="header-container">
          <div className="brand-section">
            {/* National Emblem Crest */}
            <div className="classic-emblem-badge" title="National Emblem representation">
              <div className="emblem-inner">
                <span className="emblem-crest">UDYAMA</span>
                <span className="emblem-motto">{t.hindiTagline}</span>
              </div>
            </div>

            <div className="brand-text-block">
              <div className="brand-title-row">
                <h1 className="brand-title-classic">{t.portalTitle}</h1>
                <span className="brand-hindi-sub">{t.hindiTagline}</span>
                <span className="portal-type-chip">
                  {currentUser.role === 'official' ? t.officialDesk : t.citizenSelfService}
                </span>
              </div>
              <p className="brand-subtitle-classic">
                {t.portalSubtitle} • {t.govIndia}
              </p>
            </div>
          </div>

          <div className="header-actions">
            {/* Scheme Comparison Button */}
            {comparedIds.length > 0 && (
              <button 
                type="button" 
                className="classic-nav-btn"
                onClick={onOpenComparison}
              >
                <span>{t.comparisonTray}</span>
                <span className="classic-badge-count">{comparedIds.length}</span>
              </button>
            )}

            {/* Saved Schemes Button */}
            <button 
              type="button" 
              className={`classic-nav-btn ${showingBookmarksOnly ? 'active' : ''}`}
              onClick={onOpenBookmarks}
            >
              <span>{t.savedSchemes}</span>
              {bookmarkedIds.length > 0 && (
                <span className="classic-badge-count">{bookmarkedIds.length}</span>
              )}
            </button>

            {/* Portal Switcher & Session Button */}
            <button
              type="button"
              className="classic-primary-btn"
              onClick={onOpenAuthModal}
            >
              {currentUser.isLoggedIn 
                ? (currentUser.role === 'official' ? `Official: ${currentUser.name}` : `Citizen: ${currentUser.name}`)
                : t.signInSwitch}
            </button>

            {currentUser.isLoggedIn && (
              <button
                type="button"
                className="classic-logout-btn"
                onClick={onLogout}
                title="Logout from session"
              >
                {t.logout}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Classic Government Portal Navigation Bar */}
      <nav className="classic-portal-nav-bar" aria-label="Main Navigation">
        <div className="header-container nav-items-row">
          <a href="#home" className="nav-item-link active">{t.home}</a>
          <a href="#schemes" className="nav-item-link" onClick={(e) => { e.preventDefault(); if (showingBookmarksOnly) onOpenBookmarks(); }}>
            {t.allSchemes}
          </a>
          <a href="#ekyc" className="nav-item-link" onClick={(e) => { e.preventDefault(); onOpenAuthModal(); }}>
            {t.ekycVerification}
          </a>
          <a href="#csc-desk" className="nav-item-link" onClick={(e) => { e.preventDefault(); onOpenAuthModal(); }}>
            {t.cscOperator}
          </a>
          <button 
            type="button"
            className="nav-item-link lang-nav-item"
            onClick={onOpenLanguageModal}
          >
            🌐 {currentLangObj.nativeName} ({INDIAN_LANGUAGES.length} Languages)
          </button>
          <a href="#helpline" className="nav-item-link">
            {t.helpdesk}
          </a>
        </div>
      </nav>

      {/* Classic News Marquee / Ticker */}
      <div className="gov-ticker-bar">
        <div className="ticker-container">
          <span className="ticker-badge">{t.latestAnnouncement}</span>
          <div className="ticker-content">
            <span className="ticker-text">
              {t.marqueeText}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
