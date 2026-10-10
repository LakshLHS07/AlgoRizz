import React from 'react';

export function StatsSection({ totalSchemes, topMatchesCount, highEligibilityCount }) {
  return (
    <div className="stats-section-classic">
      <div className="stat-metric-card">
        <span className="stat-label-text">Welfare Schemes Catalog</span>
        <div className="stat-number-val">{totalSchemes}</div>
      </div>

      <div className="stat-metric-card">
        <span className="stat-label-text">Profile Matched Schemes</span>
        <div className="stat-number-val">{topMatchesCount}</div>
      </div>

      <div className="stat-metric-card highlight">
        <span className="stat-label-text">High Eligibility (80%+)</span>
        <div className="stat-number-val" style={{ color: 'var(--gov-green)' }}>{highEligibilityCount}</div>
      </div>

      <div className="stat-metric-card">
        <span className="stat-label-text">Direct Benefit Transfer</span>
        <div className="stat-number-val" style={{ color: 'var(--gov-navy)' }}>100% Free</div>
      </div>
    </div>
  );
}
