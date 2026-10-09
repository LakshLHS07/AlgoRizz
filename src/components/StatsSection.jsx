import React from 'react';

export function StatsSection({ totalSchemes, topMatchesCount, highEligibilityCount }) {
  return (
    <div className="stats-metric-strip">
      <div className="metric-card">
        <div className="metric-info">
          <span className="metric-num">{totalSchemes}</span>
          <span className="metric-desc">Available Welfare Schemes</span>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-info">
          <span className="metric-num">{topMatchesCount}</span>
          <span className="metric-desc">Matched to Your Profile</span>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-info">
          <span className="metric-num">{highEligibilityCount}</span>
          <span className="metric-desc">High Probability Matches (80%+)</span>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-info">
          <span className="metric-num">Free</span>
          <span className="metric-desc">Direct Citizen Access</span>
        </div>
      </div>
    </div>
  );
}
