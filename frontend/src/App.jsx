import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { NLPPromptBar } from './components/NLPPromptBar';
import { StatsSection } from './components/StatsSection';
import { ProfileDrawer } from './components/ProfileDrawer';
import { SchemeCard } from './components/SchemeCard';
import { SchemeModal } from './components/SchemeModal';
import { ComparisonModal } from './components/ComparisonModal';
import { BackendConfigModal } from './components/BackendConfigModal';
import { FullScreenAuthPage } from './components/FullScreenAuthPage';
import { OfficialDashboard } from './components/OfficialDashboard';
import { ReceiptModal } from './components/ReceiptModal';
import { LanguageModal } from './components/LanguageModal';
import { Footer } from './components/Footer';
import { SCHEMES_DATABASE } from './data/schemesData';
import { matchSchemes, extractEntitiesFromPrompt } from './utils/nlpMatcher';
import { DEFAULT_BACKEND_URL, pingBackend } from './utils/apiBridge';
import { INDIAN_LANGUAGES, getTranslation } from './utils/translations';
import { getLocalizedScheme } from './utils/schemeLocalization';

const INITIAL_PROFILE = {
  age: 28,
  gender: "female",
  state: "Maharashtra",
  income: 140000,
  category: "OBC",
  occupation: "farmer",
  hasLand: true,
  isRural: true
};

export default function App() {
  const [prompt, setPrompt] = useState(
    "I am a 28-year-old female farmer in Maharashtra with 2 acres land and family income of 1.4 Lakhs, looking for crop insurance and education financial assistance for my daughter."
  );
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [isSearching, setIsSearching] = useState(false);

  // Accessibility State (Font scale & Contrast)
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState(1.0);
  const [isHighContrast, setIsHighContrast] = useState(false);

  // Language State (22 Indian Scheduled Languages + English)
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    try {
      return localStorage.getItem('algorizz_language') || 'en';
    } catch {
      return 'en';
    }
  });
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  // Auth & Portal State
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('algorizz_user') || 'null');
    } catch {
      return null;
    }
  });

  const [showAuthScreen, setShowAuthScreen] = useState(() => {
    return !currentUser;
  });

  // Official Intake Records
  const [intakeRecords, setIntakeRecords] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('algorizz_intake_records') || '[]');
    } catch {
      return [];
    }
  });

  const [activeReceiptRecord, setActiveReceiptRecord] = useState(null);

  // Modals & Drawers
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [isBackendModalOpen, setIsBackendModalOpen] = useState(false);
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  const [showingBookmarksOnly, setShowingBookmarksOnly] = useState(false);

  // Bookmarks & Comparisons
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('algorizz_bookmarks') || '[]');
    } catch {
      return ['pm-kisan', 'ayushman-bharat'];
    }
  });

  const [comparedIds, setComparedIds] = useState(['pm-kisan', 'pm-fasal-bima-yojana']);

  // Backend connection state
  const [backendUrl, setBackendUrl] = useState(DEFAULT_BACKEND_URL);
  const [backendStatus, setBackendStatus] = useState({ connected: false, url: DEFAULT_BACKEND_URL });

  // Translation helper
  const t = getTranslation(selectedLanguage);
  const currentLangObj = INDIAN_LANGUAGES.find(l => l.code === selectedLanguage) || INDIAN_LANGUAGES[0];

  // Check backend status on initial load
  useEffect(() => {
    pingBackend(backendUrl).then(connected => {
      setBackendStatus({ connected, url: backendUrl });
    });
  }, [backendUrl]);

  // Persist language
  useEffect(() => {
    try {
      localStorage.setItem('algorizz_language', selectedLanguage);
    } catch (e) {
      console.error(e);
    }
  }, [selectedLanguage]);

  // Persist bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('algorizz_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  // Persist User
  useEffect(() => {
    try {
      localStorage.setItem('algorizz_user', JSON.stringify(currentUser));
    } catch (e) {
      console.error(e);
    }
  }, [currentUser]);

  // Persist Intake Records
  useEffect(() => {
    try {
      localStorage.setItem('algorizz_intake_records', JSON.stringify(intakeRecords));
    } catch (e) {
      console.error(e);
    }
  }, [intakeRecords]);

  // Apply font scale dynamically to document root
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSizeMultiplier * 100}%`;
  }, [fontSizeMultiplier]);

  // Live NLP entity extraction from prompt
  const extractedEntities = useMemo(() => {
    return extractEntitiesFromPrompt(prompt);
  }, [prompt]);

  // Window View Mode: 'eligible' | 'all' | 'bookmarks' & Dual Window toggle
  const [activeWindowTab, setActiveWindowTab] = useState('eligible');
  const [isDualWindowView, setIsDualWindowView] = useState(false);
  const [catalogSearchTerm, setCatalogSearchTerm] = useState('');

  // Scored & Localized Master Schemes
  const allAssessedSchemes = useMemo(() => {
    const rawMatches = matchSchemes(profile, prompt, categoryFilter);
    return rawMatches.map(s => {
      const isEligible = (s.warningReasons && s.warningReasons.length === 0) || s.matchScore >= 60;
      return {
        ...getLocalizedScheme(s, selectedLanguage),
        isEligible
      };
    });
  }, [profile, prompt, categoryFilter, selectedLanguage]);

  // Strictly Eligible Schemes (Passed demographic and criteria checks)
  const eligibleSchemes = useMemo(() => {
    return allAssessedSchemes.filter(s => s.isEligible);
  }, [allAssessedSchemes]);

  // Bookmarked Schemes
  const bookmarkedSchemes = useMemo(() => {
    return allAssessedSchemes.filter(s => bookmarkedIds.includes(s.id));
  }, [allAssessedSchemes, bookmarkedIds]);

  // Filtered Catalog by search term
  const filteredCatalogSchemes = useMemo(() => {
    if (!catalogSearchTerm.trim()) return allAssessedSchemes;
    const term = catalogSearchTerm.toLowerCase();
    return allAssessedSchemes.filter(s => 
      s.name.toLowerCase().includes(term) ||
      s.summary.toLowerCase().includes(term) ||
      s.category.toLowerCase().includes(term) ||
      s.ministry.toLowerCase().includes(term)
    );
  }, [allAssessedSchemes, catalogSearchTerm]);

  const topMatchesCount = useMemo(() => {
    return eligibleSchemes.length;
  }, [eligibleSchemes]);

  const highEligibilityCount = useMemo(() => {
    return eligibleSchemes.filter(s => s.matchScore >= 80).length;
  }, [eligibleSchemes]);

  // Compared Scheme objects
  const comparedSchemes = useMemo(() => {
    return SCHEMES_DATABASE
      .filter(s => comparedIds.includes(s.id))
      .map(s => {
        const localizedBase = getLocalizedScheme(s, selectedLanguage);
        const found = allAssessedSchemes.find(m => m.id === s.id);
        return found || { ...localizedBase, matchScore: 70, matchTier: "Moderate Match", tierColor: "#f59e0b" };
      });
  }, [comparedIds, allAssessedSchemes, selectedLanguage]);

  const handleSearch = () => {
    setIsSearching(true);
    if (extractedEntities.age) setProfile(p => ({ ...p, age: extractedEntities.age }));
    if (extractedEntities.gender) setProfile(p => ({ ...p, gender: extractedEntities.gender }));
    if (extractedEntities.state) setProfile(p => ({ ...p, state: extractedEntities.state }));
    if (extractedEntities.income) setProfile(p => ({ ...p, income: extractedEntities.income }));
    if (extractedEntities.occupation) setProfile(p => ({ ...p, occupation: extractedEntities.occupation }));
    if (extractedEntities.category) setProfile(p => ({ ...p, category: extractedEntities.category }));
    if (extractedEntities.hasLand !== null) setProfile(p => ({ ...p, hasLand: extractedEntities.hasLand }));

    setTimeout(() => {
      setIsSearching(false);
    }, 250);
  };

  const handleToggleBookmark = (id) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleToggleCompare = (id) => {
    setComparedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(x => x !== id);
      }
      if (prev.length >= 3) {
        alert("You can compare up to 3 schemes at a time. Remove one first.");
        return prev;
      }
      return [...prev, id];
    });
  };

  const handleResetFilters = () => {
    setProfile(INITIAL_PROFILE);
    setCategoryFilter("All Categories");
    setPrompt("");
    setShowingBookmarksOnly(false);
  };

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    setShowAuthScreen(false);

    // If verified via Aadhaar KYC and Bank Statement, seed verified demographic & income values
    if (userData.isAadhaarVerified) {
      setProfile(prev => ({
        ...prev,
        age: userData.age || prev.age,
        gender: userData.gender || prev.gender,
        state: userData.state || prev.state,
        income: userData.assessedIncome || prev.income
      }));
      setPrompt(`I am ${userData.name}, aged ${userData.age}, living in ${userData.state}, verified annual income of ₹${((userData.assessedIncome || 140000)/100000).toFixed(2)}L. Looking for eligible government welfare schemes.`);
    }
  };

  const handleGuestAccess = () => {
    setCurrentUser({
      role: 'citizen',
      name: 'Guest Citizen',
      isLoggedIn: false
    });
    setShowAuthScreen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setShowAuthScreen(true);
  };

  const handleOpenAuthScreen = () => {
    setShowAuthScreen(true);
  };

  // Official Intake action
  const handlePerformIntakeMatch = (citizenRecord) => {
    setProfile({
      age: citizenRecord.age,
      gender: citizenRecord.gender,
      state: citizenRecord.state,
      income: citizenRecord.income,
      category: citizenRecord.category,
      occupation: citizenRecord.occupation,
      hasLand: citizenRecord.hasLand,
      isRural: true
    });
    setPrompt(`${citizenRecord.occupation} in ${citizenRecord.state} with annual income of ${citizenRecord.income}. ${citizenRecord.notes || ''}`);
    
    setIntakeRecords(prev => [citizenRecord, ...prev]);
    setActiveReceiptRecord(citizenRecord);
  };

  // If Full-Screen Login Page is active, display it
  if (showAuthScreen || !currentUser) {
    return (
      <div className={`app-root ${isHighContrast ? 'high-contrast-theme' : ''}`} dir={currentLangObj.dir || 'ltr'}>
        <FullScreenAuthPage
          onLogin={handleLogin}
          onGuestAccess={handleGuestAccess}
          initialRole={currentUser ? currentUser.role : 'citizen'}
          selectedLanguage={selectedLanguage}
          onChangeLanguage={setSelectedLanguage}
          onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
        />
        <LanguageModal
          isOpen={isLanguageModalOpen}
          onClose={() => setIsLanguageModalOpen(false)}
          selectedLanguage={selectedLanguage}
          onSelectLanguage={setSelectedLanguage}
        />
      </div>
    );
  }

  return (
    <div className={`app-layout ${isHighContrast ? 'high-contrast-theme' : ''}`} dir={currentLangObj.dir || 'ltr'}>
      {/* Top Classic Government Header */}
      <Header
        backendStatus={backendStatus}
        onOpenBackendModal={() => setIsBackendModalOpen(true)}
        bookmarkedIds={bookmarkedIds}
        onOpenBookmarks={() => setShowingBookmarksOnly(prev => !prev)}
        comparedIds={comparedIds}
        onOpenComparison={() => setIsComparisonModalOpen(true)}
        selectedLanguage={selectedLanguage}
        onChangeLanguage={setSelectedLanguage}
        onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
        showingBookmarksOnly={showingBookmarksOnly}
        currentUser={currentUser}
        onOpenAuthModal={handleOpenAuthScreen}
        onLogout={handleLogout}
        fontSizeMultiplier={fontSizeMultiplier}
        setFontSizeMultiplier={setFontSizeMultiplier}
        isHighContrast={isHighContrast}
        setIsHighContrast={setIsHighContrast}
      />

      {/* Breadcrumb Navigation Bar */}
      <div className="classic-breadcrumb-bar">
        <div className="breadcrumb-container">
          <span className="crumb-item">{t.home}</span>
          <span className="crumb-sep">/</span>
          <span className="crumb-item">Citizen Services</span>
          <span className="crumb-sep">/</span>
          <span className="crumb-item active">
            {currentUser.role === 'official' ? t.officialDesk : t.resultsHeading}
          </span>
        </div>
      </div>

      <main className="main-content">
        {/* If Official Role: Render Official Intake Dashboard */}
        {currentUser.role === 'official' ? (
          <OfficialDashboard
            currentUser={currentUser}
            onPerformIntakeMatch={handlePerformIntakeMatch}
            intakeRecords={intakeRecords}
            onViewRecordReceipt={(rec) => setActiveReceiptRecord(rec)}
            selectedLanguage={selectedLanguage}
          />
        ) : (
          /* If Citizen Role: Render Citizen Natural Language Search & Discovery */
          <>
            {/* Citizen Verified Status Strip */}
            <div className="citizen-status-ribbon">
              <div className="citizen-info-badges">
                <span className="citizen-label-strong">{t.activeApplicant}:</span>
                <span className="citizen-name-badge">{currentUser.name}</span>
                {currentUser.isAadhaarVerified ? (
                  <span className="kyc-badge verified">Aadhaar Verified ({currentUser.aadhaar})</span>
                ) : (
                  <span className="kyc-badge unverified">Aadhaar Unverified</span>
                )}
                {currentUser.isPanVerified && (
                  <span className="kyc-badge verified">PAN Assessed</span>
                )}
                {currentUser.isBankVerified && (
                  <span className="kyc-badge verified">DBT Enabled</span>
                )}
              </div>
              <button
                type="button"
                className="switch-desk-link"
                onClick={handleOpenAuthScreen}
              >
                Switch to Official / CSC Counter
              </button>
            </div>

            <NLPPromptBar
              prompt={prompt}
              setPrompt={setPrompt}
              onSearch={handleSearch}
              isSearching={isSearching}
              extractedEntities={extractedEntities}
              selectedLanguage={selectedLanguage}
            />

            <StatsSection
              totalSchemes={SCHEMES_DATABASE.length}
              topMatchesCount={topMatchesCount}
              highEligibilityCount={highEligibilityCount}
              selectedLanguage={selectedLanguage}
            />
          </>
        )}

        {/* Results Grid Layout */}
        <div className="app-main-grid">
          <ProfileDrawer
            profile={profile}
            setProfile={setProfile}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            onReset={handleResetFilters}
            selectedLanguage={selectedLanguage}
          />

          <section className="results-section">
            {/* Dual Window & Tab Navigation Bar */}
            <div className="window-mode-control-bar">
              <div className="window-tabs-group" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={!isDualWindowView && activeWindowTab === 'eligible'}
                  className={`window-tab-btn ${!isDualWindowView && activeWindowTab === 'eligible' ? 'active' : ''}`}
                  onClick={() => {
                    setIsDualWindowView(false);
                    setActiveWindowTab('eligible');
                  }}
                >
                  <span className="tab-label">{t.windowEligibleTitle || 'Eligible Schemes'}</span>
                  <span className="tab-count-pill green">{eligibleSchemes.length}</span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={!isDualWindowView && activeWindowTab === 'all'}
                  className={`window-tab-btn ${!isDualWindowView && activeWindowTab === 'all' ? 'active' : ''}`}
                  onClick={() => {
                    setIsDualWindowView(false);
                    setActiveWindowTab('all');
                  }}
                >
                  <span className="tab-label">{t.windowAllTitle || 'All Available Schemes'}</span>
                  <span className="tab-count-pill blue">{allAssessedSchemes.length}</span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={!isDualWindowView && activeWindowTab === 'bookmarks'}
                  className={`window-tab-btn ${!isDualWindowView && activeWindowTab === 'bookmarks' ? 'active' : ''}`}
                  onClick={() => {
                    setIsDualWindowView(false);
                    setActiveWindowTab('bookmarks');
                  }}
                >
                  <span className="tab-label">{t.windowBookmarksTitle || 'Saved Bookmarks'}</span>
                  <span className="tab-count-pill amber">{bookmarkedSchemes.length}</span>
                </button>
              </div>

              {/* Side-by-Side Dual Window Toggle */}
              <div className="window-actions-right">
                <button
                  type="button"
                  className={`classic-btn-dual-toggle ${isDualWindowView ? 'active' : ''}`}
                  onClick={() => setIsDualWindowView(prev => !prev)}
                  title="Toggle side-by-side display of Eligible Schemes and All Schemes"
                >
                  <span>{isDualWindowView ? (t.singleWindowToggle || 'Single Window') : (t.dualWindowToggle || 'Side-by-Side Dual Window')}</span>
                </button>
              </div>
            </div>

            {/* DUAL WINDOW MODE (Side-by-Side) */}
            {isDualWindowView ? (
              <div className="dual-window-container">
                {/* Left Window: Eligible Schemes */}
                <div className="window-panel window-eligible-pane">
                  <div className="window-panel-header">
                    <div className="panel-title-wrap">
                      <div>
                        <h3 className="panel-title">{t.windowEligibleTitle || 'Eligible Schemes For You'}</h3>
                        <p className="panel-subtitle">{t.eligibleFilterSub || 'Schemes matching your verified demographic parameters, income & occupation'}</p>
                      </div>
                    </div>
                    <span className="panel-count-tag green">{eligibleSchemes.length} {t.eligibleTabCount || 'Eligible'}</span>
                  </div>

                  {eligibleSchemes.length === 0 ? (
                    <div className="empty-results-box compact">
                      <h4 className="empty-title">{t.noSchemes}</h4>
                      <p className="empty-desc">{t.noSchemesSub}</p>
                      <button type="button" className="classic-btn-primary" onClick={handleResetFilters}>
                        {t.resetAll}
                      </button>
                    </div>
                  ) : (
                    <div className="schemes-card-stack">
                      {eligibleSchemes.map(scheme => (
                        <SchemeCard
                          key={scheme.id}
                          scheme={scheme}
                          onSelect={setSelectedScheme}
                          isBookmarked={bookmarkedIds.includes(scheme.id)}
                          onToggleBookmark={handleToggleBookmark}
                          isCompared={comparedIds.includes(scheme.id)}
                          onToggleCompare={handleToggleCompare}
                          selectedLanguage={selectedLanguage}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Window: All Available Schemes Catalog */}
                <div className="window-panel window-catalog-pane">
                  <div className="window-panel-header">
                    <div className="panel-title-wrap">
                      <div>
                        <h3 className="panel-title">{t.windowAllTitle || 'All Available Schemes'}</h3>
                        <p className="panel-subtitle">{t.allCatalogSub || 'Complete master repository of national and state government schemes'}</p>
                      </div>
                    </div>
                    <span className="panel-count-tag blue">{filteredCatalogSchemes.length} Total</span>
                  </div>

                  {/* Catalog Filter Input */}
                  <div className="catalog-search-toolbar">
                    <input
                      type="text"
                      className="catalog-search-input"
                      placeholder="Search schemes by name, keyword or ministry..."
                      value={catalogSearchTerm}
                      onChange={(e) => setCatalogSearchTerm(e.target.value)}
                    />
                    {catalogSearchTerm && (
                      <button
                        type="button"
                        className="catalog-clear-btn"
                        onClick={() => setCatalogSearchTerm('')}
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {filteredCatalogSchemes.length === 0 ? (
                    <div className="empty-results-box compact">
                      <h4 className="empty-title">No Schemes Found</h4>
                      <p className="empty-desc">No government schemes matched "{catalogSearchTerm}".</p>
                      <button type="button" className="classic-btn-secondary" onClick={() => setCatalogSearchTerm('')}>
                        Clear Search
                      </button>
                    </div>
                  ) : (
                    <div className="schemes-card-stack">
                      {filteredCatalogSchemes.map(scheme => (
                        <SchemeCard
                          key={scheme.id}
                          scheme={scheme}
                          onSelect={setSelectedScheme}
                          isBookmarked={bookmarkedIds.includes(scheme.id)}
                          onToggleBookmark={handleToggleBookmark}
                          isCompared={comparedIds.includes(scheme.id)}
                          onToggleCompare={handleToggleCompare}
                          selectedLanguage={selectedLanguage}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* SINGLE WINDOW MODE (Active Tab) */
              <div className="single-window-container">
                {/* Active Window Banner */}
                <div className="single-window-banner">
                  <div className="window-banner-left">
                    <h3 className="window-heading">
                      {activeWindowTab === 'eligible' && (
                        <>{t.windowEligibleTitle || 'Eligible Schemes For You'} ({eligibleSchemes.length})</>
                      )}
                      {activeWindowTab === 'all' && (
                        <>{t.windowAllTitle || 'All Available Schemes Catalog'} ({filteredCatalogSchemes.length})</>
                      )}
                      {activeWindowTab === 'bookmarks' && (
                        <>{t.windowBookmarksTitle || 'Saved Bookmarks Checklist'} ({bookmarkedSchemes.length})</>
                      )}
                    </h3>
                    <p className="window-subheading">
                      {activeWindowTab === 'eligible' && (t.eligibleFilterSub || 'Schemes matching your verified demographic parameters, income & occupation')}
                      {activeWindowTab === 'all' && (t.allCatalogSub || 'Complete master repository of national and state government schemes')}
                      {activeWindowTab === 'bookmarks' && 'Your saved schemes for fast comparison and intake processing'}
                    </p>
                  </div>

                  {activeWindowTab === 'all' && (
                    <div className="catalog-search-toolbar single">
                      <input
                        type="text"
                        className="catalog-search-input"
                        placeholder="Search all schemes..."
                        value={catalogSearchTerm}
                        onChange={(e) => setCatalogSearchTerm(e.target.value)}
                      />
                      {catalogSearchTerm && (
                        <button
                          type="button"
                          className="catalog-clear-btn"
                          onClick={() => setCatalogSearchTerm('')}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Single Window Schemes List */}
                {(() => {
                  const targetList = activeWindowTab === 'eligible' 
                    ? eligibleSchemes 
                    : activeWindowTab === 'all' 
                      ? filteredCatalogSchemes 
                      : bookmarkedSchemes;

                  if (targetList.length === 0) {
                    return (
                      <div className="empty-results-box">
                        <h4 className="empty-title">
                          {activeWindowTab === 'bookmarks' ? 'No Saved Schemes' : t.noSchemes}
                        </h4>
                        <p className="empty-desc">
                          {activeWindowTab === 'bookmarks' 
                            ? 'You have not saved any schemes yet. Click the "Save" button on any scheme card.'
                            : t.noSchemesSub}
                        </p>
                        <button type="button" className="classic-btn-primary" onClick={handleResetFilters} style={{ maxWidth: 220, margin: '1rem auto 0' }}>
                          {t.resetAll}
                        </button>
                      </div>
                    );
                  }

                  return (
                    <div className="schemes-card-grid">
                      {targetList.map(scheme => (
                        <SchemeCard
                          key={scheme.id}
                          scheme={scheme}
                          onSelect={setSelectedScheme}
                          isBookmarked={bookmarkedIds.includes(scheme.id)}
                          onToggleBookmark={handleToggleBookmark}
                          isCompared={comparedIds.includes(scheme.id)}
                          onToggleCompare={handleToggleCompare}
                          selectedLanguage={selectedLanguage}
                        />
                      ))}
                    </div>
                  );
                })()}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Classic Government Footer */}
      <Footer selectedLanguage={selectedLanguage} />

      {/* Language Selection Modal (All 22 Indian Regional Languages + English) */}
      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={setSelectedLanguage}
      />

      {/* Scheme Detail & Eligibility Modal */}
      {selectedScheme && (
        <SchemeModal
          scheme={selectedScheme}
          userProfile={profile}
          onClose={() => setSelectedScheme(null)}
          isBookmarked={bookmarkedIds.includes(selectedScheme.id)}
          onToggleBookmark={handleToggleBookmark}
          selectedLanguage={selectedLanguage}
        />
      )}

      {/* Comparison Modal */}
      {isComparisonModalOpen && (
        <ComparisonModal
          comparedSchemes={comparedSchemes}
          onClose={() => setIsComparisonModalOpen(false)}
          onRemoveScheme={(id) => setComparedIds(prev => prev.filter(x => x !== id))}
          onClearAll={() => setComparedIds([])}
          onSelectScheme={setSelectedScheme}
          selectedLanguage={selectedLanguage}
        />
      )}

      {/* Python Backend Bridge Modal */}
      <BackendConfigModal
        isOpen={isBackendModalOpen}
        onClose={() => setIsBackendModalOpen(false)}
        backendUrl={backendUrl}
        setBackendUrl={setBackendUrl}
        backendStatus={backendStatus}
        setBackendStatus={setBackendStatus}
      />

      {/* Official Beneficiary Receipt Modal */}
      {activeReceiptRecord && (
        <ReceiptModal
          record={activeReceiptRecord}
          matchedSchemes={matchedSchemes}
          onClose={() => setActiveReceiptRecord(null)}
          selectedLanguage={selectedLanguage}
        />
      )}
    </div>
  );
}
