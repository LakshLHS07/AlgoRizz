import React, { useState, useEffect } from 'react';

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
  onLogout,
  fontSizeMultiplier,
  setFontSizeMultiplier,
  isHighContrast,
  setIsHighContrast
}) {
  const [currentDateTime, setCurrentDateTime] = useState('');

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

  return (
    <header className="app-header-classic">
      {/* Top Accessibility & National Ribbon */}
      <div className="top-gov-ribbon">
        <div className="ribbon-container">
          <div className="gov-title-tag">
            <span className="gov-hindi-text">भारत सरकार</span>
            <span className="gov-divider">|</span>
            <span className="gov-eng-text">GOVERNMENT OF INDIA</span>
            <span className="gov-divider">|</span>
            <span className="gov-portal-tag">राष्ट्रीय उद्यम पोर्टल (UDYAMA)</span>
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
              <span>{isHighContrast ? 'Standard Mode' : 'High Contrast'}</span>
            </button>

            <span className="ribbon-divider">|</span>

            {/* Backend NLP Engine Indicator */}
            <button 
              type="button" 
              className={`ribbon-link-btn ${backendStatus.connected ? 'connected' : ''}`}
              onClick={onOpenBackendModal}
              title="Configure Python NLP Engine"
            >
              <span className="status-dot"></span>
              <span>{backendStatus.connected ? 'Python Server Online' : 'Built-in Engine'}</span>
            </button>

            {/* Language Selector */}
            <select 
              value={selectedLanguage} 
              onChange={(e) => onChangeLanguage(e.target.value)}
              className="ribbon-lang-select"
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
      </div>

      {/* Main Institutional Header Bar */}
      <div className="main-header-nav">
        <div className="header-container">
          <div className="brand-section">
            {/* National Emblem Crest */}
            <div className="classic-emblem-badge" title="National Emblem of India representation">
              <div className="emblem-inner">
                <span className="emblem-crest">UDYAMA</span>
                <span className="emblem-motto">सत्यमेव जयते</span>
              </div>
            </div>

            <div className="brand-text-block">
              <div className="brand-title-row">
                <h1 className="brand-title-classic">UDYAMA</h1>
                <span className="brand-hindi-sub">उद्यम कल्याण सेतु</span>
                <span className="portal-type-chip">
                  {currentUser.role === 'official' ? 'CSC Official Desk' : 'Citizen Portal'}
                </span>
              </div>
              <p className="brand-subtitle-classic">
                National Semantic Welfare Scheme Discovery & Citizen Intake Portal • Government of India
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
                <span>Comparison Tray</span>
                <span className="classic-badge-count">{comparedIds.length}</span>
              </button>
            )}

            {/* Saved Schemes Button */}
            <button 
              type="button" 
              className={`classic-nav-btn ${showingBookmarksOnly ? 'active' : ''}`}
              onClick={onOpenBookmarks}
            >
              <span>Saved Schemes</span>
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
                : "Portal Login / Switch"}
            </button>

            {currentUser.isLoggedIn && (
              <button
                type="button"
                className="classic-logout-btn"
                onClick={onLogout}
                title="Logout from session"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Classic Government Portal Navigation Menu */}
      <nav className="classic-portal-nav-bar" aria-label="Main Navigation">
        <div className="header-container nav-items-row">
          <a href="#home" className="nav-item-link active">Home</a>
          <a href="#schemes" className="nav-item-link" onClick={(e) => { e.preventDefault(); if (showingBookmarksOnly) onOpenBookmarks(); }}>
            All Welfare Schemes
          </a>
          <a href="#ekyc" className="nav-item-link" onClick={(e) => { e.preventDefault(); onOpenAuthModal(); }}>
            Citizen e-KYC Verification
          </a>
          <a href="#csc-desk" className="nav-item-link" onClick={(e) => { e.preventDefault(); onOpenAuthModal(); }}>
            CSC Operator Counter
          </a>
          <a href="#dbt" className="nav-item-link" onClick={(e) => { e.preventDefault(); onOpenBackendModal(); }}>
            NLP Engine Settings
          </a>
          <a href="#helpline" className="nav-item-link">
            Citizen Helpdesk & Guidelines
          </a>
        </div>
      </nav>

      {/* Classic News Marquee / Ticker */}
      <div className="gov-ticker-bar">
        <div className="ticker-container">
          <span className="ticker-badge">LATEST ANNOUNCEMENT</span>
          <div className="ticker-content">
            <span className="ticker-text">
              Direct Benefit Transfer (DBT) verification is now active for FY 2026-27 across 180+ Central & State welfare schemes. Complete Aadhaar, PAN & Bank Statement e-KYC for automated instant eligibility matching.
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
