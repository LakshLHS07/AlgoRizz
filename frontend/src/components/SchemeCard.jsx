import React from 'react';
import { getTranslation } from '../utils/translations';

export function SchemeCard({
  scheme,
  onSelect,
  onOpenVideo,
  isBookmarked,
  onToggleBookmark,
  isCompared,
  onToggleCompare,
  selectedLanguage = 'en'
}) {
  const t = getTranslation(selectedLanguage);
  const isHighMatch = scheme.matchScore >= 80;

  return (
    <article className="minimal-scheme-card">
      <div className="card-top-row">
        <div className="card-meta-cluster">
          <span className="card-ministry-text">{scheme.ministry}</span>
          <h3 className="card-title-text" onClick={() => onSelect(scheme)}>
            {scheme.name}
          </h3>
          <div className="card-tags-line">
            <span className="card-category-tag">{scheme.category}</span>
            <span className="card-benefit-tag">{scheme.benefitAmount}</span>
          </div>
        </div>

        <div className="card-score-cluster">
          <div className={`card-match-pill ${isHighMatch ? 'high' : 'moderate'}`}>
            <span className="match-num">{scheme.matchScore}%</span>
            <span className="match-label">{t.matchScoreTag || "Match"}</span>
          </div>
          {scheme.isEligible && (
            <span className="card-verified-dot" title={t.statusEligible || "Criteria Verified"}>{t.eligibleStamp || "Eligible"}</span>
          )}
        </div>
      </div>

      <p className="card-summary-paragraph">
        {scheme.summary}
      </p>

      <div className="card-meta-footer">
        <div className="card-target-text">
          <span>{t.targetBeneficiary || "Target:"} </span>
          <strong>{scheme.targetAudience || scheme.targetGroup || 'Eligible Citizens'}</strong>
        </div>

        <div className="card-action-cluster">
          <button
            type="button"
            className="minimal-btn-primary"
            onClick={() => onSelect(scheme)}
          >
            {t.viewGuidelines || "View Details"} →
          </button>

          {onOpenVideo && (
            <button
              type="button"
              className="minimal-btn-icon"
              onClick={(e) => {
                e.stopPropagation();
                onOpenVideo(scheme);
              }}
              title={t.watchAiVideo || "Watch AI Video Guide"}
              aria-label="AI Video Guide"
            >
              {t.videoLabel || "Video"}
            </button>
          )}

          <button
            type="button"
            className={`minimal-btn-icon ${isCompared ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompare(scheme.id);
            }}
            title={isCompared ? (t.inTray || "Remove from Compare Tray") : (t.compare || "Compare Scheme")}
            aria-label="Compare"
          >
            {isCompared ? (t.inTray || "Compared") : (t.compare || "Compare")}
          </button>

          <button
            type="button"
            className={`minimal-btn-icon ${isBookmarked ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(scheme.id);
            }}
            title={isBookmarked ? (t.saved || "Remove Bookmark") : (t.save || "Save Scheme")}
            aria-label="Save"
          >
            {isBookmarked ? (t.saved || "Saved") : (t.save || "Save")}
          </button>
        </div>
      </div>
    </article>
  );
}
