import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { NLPPromptBar } from './components/NLPPromptBar';
import { StatsSection } from './components/StatsSection';
import { ProfileDrawer } from './components/ProfileDrawer';
import { SchemeCard } from './components/SchemeCard';
import { SchemeModal } from './components/SchemeModal';
import { ComparisonModal } from './components/ComparisonModal';
import { BackendConfigModal } from './components/BackendConfigModal';
import { SCHEMES_DATABASE } from './data/schemesData';
import { matchSchemes, extractEntitiesFromPrompt } from './utils/nlpMatcher';
import { DEFAULT_BACKEND_URL, pingBackend } from './utils/apiBridge';

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
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  // Check backend status on initial load
  useEffect(() => {
    pingBackend(backendUrl).then(connected => {
      setBackendStatus({ connected, url: backendUrl });
    });
  }, [backendUrl]);

  // Persist bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('algorizz_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  // Live NLP entity extraction from prompt
  const extractedEntities = useMemo(() => {
    return extractEntitiesFromPrompt(prompt);
  }, [prompt]);

  // Scored Schemes
  const matchedSchemes = useMemo(() => {
    return matchSchemes(profile, prompt, categoryFilter);
  }, [profile, prompt, categoryFilter]);

  // Filtered by Bookmarks if toggle is on
  const displayedSchemes = useMemo(() => {
    if (showingBookmarksOnly) {
      return matchedSchemes.filter(s => bookmarkedIds.includes(s.id));
    }
    return matchedSchemes;
  }, [matchedSchemes, showingBookmarksOnly, bookmarkedIds]);

  const topMatchesCount = useMemo(() => {
    return matchedSchemes.filter(s => s.matchScore >= 75).length;
  }, [matchedSchemes]);

  const highEligibilityCount = useMemo(() => {
    return matchedSchemes.filter(s => s.matchScore >= 80).length;
  }, [matchedSchemes]);

  // Compared Scheme objects
  const comparedSchemes = useMemo(() => {
    return SCHEMES_DATABASE
      .filter(s => comparedIds.includes(s.id))
      .map(s => {
        const found = matchedSchemes.find(m => m.id === s.id);
        return found || { ...s, matchScore: 70, matchTier: "Moderate Match", tierColor: "#f59e0b" };
      });
  }, [comparedIds, matchedSchemes]);

  const handleSearch = () => {
    setIsSearching(true);
    // Sync extracted NLP values into profile automatically if present
    if (extractedEntities.age) setProfile(p => ({ ...p, age: extractedEntities.age }));
    if (extractedEntities.gender) setProfile(p => ({ ...p, gender: extractedEntities.gender }));
    if (extractedEntities.state) setProfile(p => ({ ...p, state: extractedEntities.state }));
    if (extractedEntities.income) setProfile(p => ({ ...p, income: extractedEntities.income }));
    if (extractedEntities.occupation) setProfile(p => ({ ...p, occupation: extractedEntities.occupation }));
    if (extractedEntities.category) setProfile(p => ({ ...p, category: extractedEntities.category }));
    if (extractedEntities.hasLand !== null) setProfile(p => ({ ...p, hasLand: extractedEntities.hasLand }));

    setTimeout(() => {
      setIsSearching(false);
    }, 350);
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

  return (
    <div className="app-layout">
      {/* Top Header */}
      <Header
        backendStatus={backendStatus}
        onOpenBackendModal={() => setIsBackendModalOpen(true)}
        bookmarkedIds={bookmarkedIds}
        onOpenBookmarks={() => setShowingBookmarksOnly(prev => !prev)}
        comparedIds={comparedIds}
        onOpenComparison={() => setIsComparisonModalOpen(true)}
        selectedLanguage={selectedLanguage}
        onChangeLanguage={setSelectedLanguage}
        totalSchemesCount={SCHEMES_DATABASE.length}
      />

      <main className="main-content">
        {/* NLP Prompt Search Bar */}
        <NLPPromptBar
          prompt={prompt}
          setPrompt={setPrompt}
          onSearch={handleSearch}
          isSearching={isSearching}
          extractedEntities={extractedEntities}
        />

        {/* Stats Strip */}
        <StatsSection
          totalSchemes={SCHEMES_DATABASE.length}
          topMatchesCount={topMatchesCount}
          highEligibilityCount={highEligibilityCount}
        />

        {/* Main Grid: Filters Sidebar + Results */}
        <div className="app-main-grid">
          <ProfileDrawer
            profile={profile}
            setProfile={setProfile}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            onReset={handleResetFilters}
          />

          <section className="results-section">
            <div className="results-header-bar">
              <div className="results-count-tag">
                {showingBookmarksOnly ? (
                  <span>⭐ Saved Welfare Schemes ({displayedSchemes.length})</span>
                ) : (
                  <span>🎯 AI Matched Schemes ({displayedSchemes.length})</span>
                )}
              </div>

              {showingBookmarksOnly && (
                <button
                  type="button"
                  className="action-btn"
                  onClick={() => setShowingBookmarksOnly(false)}
                >
                  ← Back to All Matched Schemes
                </button>
              )}
            </div>

            {displayedSchemes.length === 0 ? (
              <div className="empty-results-box">
                <div className="empty-icon">🔎</div>
                <h4 className="empty-title">No Schemes Matched</h4>
                <p className="empty-desc">
                  {showingBookmarksOnly
                    ? "You haven't bookmarked any schemes yet. Click the star icon on any scheme card to save it."
                    : "Try broadening your category filter or adjusting your annual income threshold in the profile sidebar."}
                </p>
                <button type="button" className="primary-view-btn" onClick={handleResetFilters} style={{ maxWidth: 200, margin: '0 auto' }}>
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="schemes-card-grid">
                {displayedSchemes.map(scheme => (
                  <SchemeCard
                    key={scheme.id}
                    scheme={scheme}
                    onSelect={setSelectedScheme}
                    isBookmarked={bookmarkedIds.includes(scheme.id)}
                    onToggleBookmark={handleToggleBookmark}
                    isCompared={comparedIds.includes(scheme.id)}
                    onToggleCompare={handleToggleCompare}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Detail & Eligibility Modal */}
      {selectedScheme && (
        <SchemeModal
          scheme={selectedScheme}
          userProfile={profile}
          onClose={() => setSelectedScheme(null)}
          isBookmarked={bookmarkedIds.includes(selectedScheme.id)}
          onToggleBookmark={handleToggleBookmark}
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
    </div>
  );
}
