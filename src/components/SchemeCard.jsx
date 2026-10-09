import React from 'react';

export function SchemeCard({
  scheme,
  onSelect,
  isBookmarked,
  onToggleBookmark,
  isCompared,
  onToggleCompare
}) {
  const getScoreColor = (score) => {
    if (score >= 80) return '#10b981'; // Emerald
    if (score >= 55) return '#f59e0b'; // Amber
    return '#ef4444'; // Red
  };

  return (
    <div className={`scheme-card ${scheme.matchScore >= 80 ? 'top-match' : ''}`}>
      <div className="card-top-row">
        <div className="category-and-dept">
          <span className="scheme-category-badge">{scheme.category}</span>
          <span className="scheme-ministry">{scheme.ministry}</span>
        </div>

        {/* Match Percentage Badge */}
        <div 
          className="match-score-pill" 
          style={{ 
            borderColor: `${getScoreColor(scheme.matchScore)}40`,
            background: `${getScoreColor(scheme.matchScore)}15`
          }}
        >
          <div 
            className="score-circle" 
            style={{ backgroundColor: getScoreColor(scheme.matchScore) }}
          >
            {scheme.matchScore}%
          </div>
          <span className="match-label" style={{ color: getScoreColor(scheme.matchScore) }}>
            {scheme.matchTier}
          </span>
        </div>
      </div>

      <h3 className="scheme-name" onClick={() => onSelect(scheme)}>
        {scheme.name}
      </h3>

      <p className="scheme-summary">
        {scheme.summary}
      </p>

      {/* Benefit Highlight Box */}
      <div className="benefit-highlight-box">
        <div className="benefit-icon">🎁</div>
        <div className="benefit-details">
          <span className="benefit-label">Key Benefit / Assistance:</span>
          <strong className="benefit-value">{scheme.benefitAmount}</strong>
        </div>
      </div>

      {/* Explainable AI Reasoning Chips */}
      <div className="match-reasons-section">
        {scheme.matchReasons && scheme.matchReasons.slice(0, 3).map((reason, idx) => (
          <span key={idx} className="reason-chip positive">
            ✓ {reason}
          </span>
        ))}
        {scheme.warningReasons && scheme.warningReasons.slice(0, 1).map((warn, idx) => (
          <span key={idx} className="reason-chip warning">
            ⚠️ {warn}
          </span>
        ))}
      </div>

      {/* Tags */}
      <div className="scheme-tags-row">
        {scheme.tags.slice(0, 4).map(t => (
          <span key={t} className="tag-pill">#{t}</span>
        ))}
      </div>

      {/* Footer Actions */}
      <div className="card-footer-actions">
        <button
          type="button"
          className="primary-view-btn"
          onClick={() => onSelect(scheme)}
        >
          <span>Check Eligibility & Docs</span>
          <span className="arrow-icon">→</span>
        </button>

        <div className="secondary-icon-actions">
          <button
            type="button"
            className={`icon-action-btn ${isCompared ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompare(scheme.id);
            }}
            title={isCompared ? "Remove from comparison" : "Add to comparison"}
          >
            ⚖️
          </button>

          <button
            type="button"
            className={`icon-action-btn ${isBookmarked ? 'bookmarked' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(scheme.id);
            }}
            title={isBookmarked ? "Remove from saved" : "Save scheme"}
          >
            {isBookmarked ? "⭐" : "☆"}
          </button>
        </div>
      </div>
    </div>
  );
}
