import React from 'react';
import { getTranslation } from '../utils/translations';

export function SchemeCard({
  scheme,
  onSelect,
  isBookmarked,
  onToggleBookmark,
  isCompared,
  onToggleCompare,
  selectedLanguage = 'en'
}) {
  const t = getTranslation(selectedLanguage);
  const isHighMatch = scheme.matchScore >= 80;

  return (
    <article className={`classic-scheme-card ${isHighMatch ? 'high-eligibility-card' : ''}`}>
      {/* Top Ministry Banner */}
      <div className="card-ministry-banner">
        <div className="ministry-title-wrap">
          <span className="ministry-name-text">{scheme.ministry}</span>
        </div>
        <div className="scheme-ref-code">
          <span>Ref: {scheme.id.toUpperCase()}</span>
        </div>
      </div>

      <div className="card-inner-padding">
        {/* Scheme Title & Category Row */}
        <div className="scheme-title-row">
          <div className="title-left">
            <span className="category-tag-pill">{scheme.category}</span>
            <h3 className="scheme-card-title" onClick={() => onSelect(scheme)}>
              {scheme.name}
            </h3>
          </div>

          {/* Match Score & Eligibility Stamp */}
          <div className="stamp-and-status-wrap">
            <div className={`eligibility-stamp-badge ${isHighMatch ? 'stamp-eligible' : 'stamp-moderate'}`}>
              <span className="stamp-score">{scheme.matchScore}%</span>
              <span className="stamp-status">{isHighMatch ? t.eligibleStamp : t.assessedStamp}</span>
            </div>
            {scheme.isEligible !== undefined && (
              <span className={`card-eligibility-pill ${scheme.isEligible ? 'pill-eligible' : 'pill-review'}`}>
                {scheme.isEligible ? (t.statusEligible || '✓ Eligible') : (t.statusCheckCriteria || '⚠ Review Criteria')}
              </span>
            )}
          </div>
        </div>

        {/* Short Summary Description */}
        <p className="scheme-summary-text">
          {scheme.summary}
        </p>

        {/* Key Parameter Table */}
        <div className="card-key-params-box">
          <table className="classic-mini-table">
            <tbody>
              <tr>
                <td className="param-label">{t.financialBenefit}</td>
                <td className="param-value highlight-green"><strong>{scheme.benefitAmount}</strong></td>
              </tr>
              <tr>
                <td className="param-label">{t.targetBeneficiary}</td>
                <td className="param-value">{scheme.targetAudience || 'Eligible Citizens'}</td>
              </tr>
              <tr>
                <td className="param-label">{t.applicationMode}</td>
                <td className="param-value">{scheme.applicationMode || 'Online & CSC Counters'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Eligibility Verification Notes */}
        <div className="card-criteria-reasons">
          {scheme.matchReasons && scheme.matchReasons.slice(0, 2).map((reason, idx) => (
            <div key={idx} className="criteria-bullet positive">
              <span className="criteria-bullet-icon">✓</span>
              <span>{reason}</span>
            </div>
          ))}
          {scheme.warningReasons && scheme.warningReasons.slice(0, 1).map((warn, idx) => (
            <div key={idx} className="criteria-bullet warning">
              <span className="criteria-bullet-icon">ℹ</span>
              <span>{warn}</span>
            </div>
          ))}
        </div>

        {/* Card Action Buttons */}
        <div className="card-bottom-actions">
          <button
            type="button"
            className="classic-btn-primary"
            onClick={() => onSelect(scheme)}
          >
            {t.viewGuidelines}
          </button>

          <div className="secondary-btn-group">
            <button
              type="button"
              className={`classic-btn-secondary ${isCompared ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompare(scheme.id);
              }}
              title={isCompared ? "Remove from comparison tray" : "Compare with other schemes"}
            >
              {isCompared ? t.inTray : t.compare}
            </button>

            <button
              type="button"
              className={`classic-btn-secondary ${isBookmarked ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleBookmark(scheme.id);
              }}
              title={isBookmarked ? "Remove from saved list" : "Save scheme"}
            >
              {isBookmarked ? t.saved : t.save}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
