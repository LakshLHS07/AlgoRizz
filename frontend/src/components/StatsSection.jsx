import React from 'react';
import { getTranslation } from '../utils/translations';

export function StatsSection({ totalSchemes, topMatchesCount, highEligibilityCount, selectedLanguage = 'en' }) {
  const t = getTranslation(selectedLanguage);

  return (
    <div className="minimal-stats-ribbon" aria-label="Portal Statistics">
      <div className="stats-item">
        <span className="stats-metric">{totalSchemes}</span>
        <span className="stats-label">{t.availableSchemes || "Total Schemes"}</span>
      </div>
      <div className="stats-divider">·</div>
      <div className="stats-item highlight">
        <span className="stats-metric green">{topMatchesCount}</span>
        <span className="stats-label">{t.matchedSchemes || "Eligible for You"}</span>
      </div>
      <div className="stats-divider">·</div>
      <div className="stats-item">
        <span className="stats-metric blue">{highEligibilityCount}</span>
        <span className="stats-label">{t.highEligibility || "High Match (80%+)"}</span>
      </div>
      <div className="stats-divider">·</div>
      <div className="stats-item">
        <span className="stats-badge-free">Direct Benefit Transfer</span>
      </div>
    </div>
  );
}
