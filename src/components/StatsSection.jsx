import React from 'react';

export function StatsSection({ totalSchemes, topMatchesCount, highEligibilityCount }) {
  return (
    <div className="stats-metric-strip">
      <div className="metric-card">
        <div className="metric-icon">📑</div>
        <div className="metric-info">
          <span className="metric-num">{totalSchemes}</span>
          <span className="metric-desc">Curated Welfare Schemes</span>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-icon">🎯</div>
        <div className="metric-info">
          <span className="metric-num">{topMatchesCount}</span>
          <span className="metric-desc">Matched to Your Profile</span>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-icon">✨</div>
        <div className="metric-info">
          <span className="metric-num">{highEligibilityCount}</span>
          <span className="metric-desc">High Probability (80%+)</span>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-icon">🔒</div>
        <div className="metric-info">
          <span className="metric-num">100%</span>
          <span className="metric-desc">Private & Free</span>
        </div>
      </div>
    </div>
  );
}
