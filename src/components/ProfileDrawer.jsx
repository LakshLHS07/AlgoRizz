import React from 'react';
import { INDIAN_STATES, OCCUPATIONS, SCHEME_CATEGORIES } from '../data/schemesData';

export function ProfileDrawer({
  profile,
  setProfile,
  categoryFilter,
  setCategoryFilter,
  onReset
}) {
  const handleChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatLakhs = (val) => {
    return `₹${(val / 100000).toFixed(2)} Lakhs / yr`;
  };

  return (
    <aside className="profile-filters-card">
      <div className="filters-header">
        <div className="filters-title">
          <span className="filter-icon">⚙️</span>
          <h3>Applicant Profile & Filters</h3>
        </div>
        <button type="button" className="reset-btn" onClick={onReset}>
          Reset
        </button>
      </div>

      <div className="filter-group">
        <label className="filter-label" htmlFor="cat-filter">
          Scheme Category
        </label>
        <select
          id="cat-filter"
          className="filter-select"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {SCHEME_CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label" htmlFor="occupation-select">
          Primary Occupation
        </label>
        <select
          id="occupation-select"
          className="filter-select"
          value={profile.occupation}
          onChange={(e) => handleChange('occupation', e.target.value)}
        >
          {OCCUPATIONS.map(occ => (
            <option key={occ} value={occ}>
              {occ === "All Occupations" ? "All Occupations / Any" : occ.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <div className="label-with-value">
          <label className="filter-label" htmlFor="income-range">Annual Family Income</label>
          <span className="income-badge">{formatLakhs(profile.income)}</span>
        </div>
        <input
          id="income-range"
          type="range"
          min="0"
          max="1200000"
          step="25000"
          value={profile.income}
          onChange={(e) => handleChange('income', parseInt(e.target.value, 10))}
          className="income-slider"
        />
        <div className="income-scale-labels">
          <span>₹0 (BPL)</span>
          <span>₹2.5L</span>
          <span>₹5L</span>
          <span>₹12L+</span>
        </div>
      </div>

      <div className="filter-row-two-col">
        <div className="filter-group">
          <label className="filter-label" htmlFor="age-input">Age</label>
          <input
            id="age-input"
            type="number"
            min="0"
            max="100"
            className="filter-input"
            value={profile.age}
            onChange={(e) => handleChange('age', parseInt(e.target.value, 10) || 0)}
          />
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="gender-select">Gender</label>
          <select
            id="gender-select"
            className="filter-select"
            value={profile.gender}
            onChange={(e) => handleChange('gender', e.target.value)}
          >
            <option value="all">Any / All</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="filter-row-two-col">
        <div className="filter-group">
          <label className="filter-label" htmlFor="state-select">State / UT</label>
          <select
            id="state-select"
            className="filter-select"
            value={profile.state}
            onChange={(e) => handleChange('state', e.target.value)}
          >
            {INDIAN_STATES.map(st => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="category-select">Social Category</label>
          <select
            id="category-select"
            className="filter-select"
            value={profile.category}
            onChange={(e) => handleChange('category', e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC (Scheduled Caste)</option>
            <option value="ST">ST (Scheduled Tribe)</option>
            <option value="EWS">EWS</option>
          </select>
        </div>
      </div>

      <div className="filter-checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={profile.hasLand}
            onChange={(e) => handleChange('hasLand', e.target.checked)}
          />
          <span>Owns Cultivable Agricultural Land</span>
        </label>
      </div>

      <div className="nlp-engine-stats-box">
        <div className="stats-header">🤖 Semantic Matching Engine</div>
        <p className="stats-text">
          Weights TF-IDF keyword embeddings from user description alongside hard income, occupation, and demographic eligibility criteria.
        </p>
      </div>
    </aside>
  );
}
