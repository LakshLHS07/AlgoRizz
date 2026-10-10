import React from 'react';
import { getTranslation } from '../utils/translations';

export function StatsSection({ totalSchemes, topMatchesCount, highEligibilityCount, selectedLanguage = 'en' }) {
  const t = getTranslation(selectedLanguage);

  return (
    <div className="stats-section-classic">
      <div className="stat-metric-card">
        <span className="stat-label-text">{t.availableSchemes}</span>
        <div className="stat-number-val">{totalSchemes}</div>
      </div>

      <div className="stat-metric-card">
        <span className="stat-label-text">{t.matchedSchemes}</span>
        <div className="stat-number-val">{topMatchesCount}</div>
      </div>

      <div className="stat-metric-card highlight">
        <span className="stat-label-text">{t.highEligibility}</span>
        <div className="stat-number-val" style={{ color: 'var(--gov-green)' }}>{highEligibilityCount}</div>
      </div>

      <div className="stat-metric-card">
        <span className="stat-label-text">{t.dbtFree}</span>
        <div className="stat-number-val" style={{ color: 'var(--gov-navy)' }}>100% Free</div>
      </div>
    </div>
  );
}
