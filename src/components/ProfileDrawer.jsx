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
    return `₹${(val / 100000).toFixed(2)} Lakhs/yr`;
  };

  return (
    <aside className="profile-filters-panel" aria-label="Scheme Filter Panel">
      <div className="filter-panel-header">
        <div className="filter-header-title">
          <span className="filter-badge">PARAMETERS</span>
          <h3>Demographic Filters</h3>
        </div>
        <button type="button" className="classic-btn-reset" onClick={onReset} title="Reset all filters to default">
          Reset All
        </button>
      </div>

      <div className="filter-panel-body">
        {/* Category Filter */}
        <div className="filter-field-block">
          <label className="filter-field-label" htmlFor="cat-filter">
            Scheme Sector / Ministry Category
          </label>
          <select
            id="cat-filter"
            className="classic-dropdown-select"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {SCHEME_CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Occupation */}
        <div className="filter-field-block">
          <label className="filter-field-label" htmlFor="occupation-select">
            Applicant Occupation
          </label>
          <select
            id="occupation-select"
            className="classic-dropdown-select"
            value={profile.occupation}
            onChange={(e) => handleChange('occupation', e.target.value)}
          >
            {OCCUPATIONS.map(occ => (
              <option key={occ} value={occ}>
                {occ === "All Occupations" ? "All Occupations (Any)" : occ.charAt(0).toUpperCase() + occ.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Income Slider */}
        <div className="filter-field-block">
          <div className="income-header-row">
            <label className="filter-field-label" htmlFor="income-range">
              Annual Family Income
            </label>
            <span className="income-pill-value">{formatLakhs(profile.income)}</span>
          </div>
          <input
            id="income-range"
            type="range"
            min="0"
            max="1200000"
            step="25000"
            value={profile.income}
            onChange={(e) => handleChange('income', parseInt(e.target.value, 10))}
            className="classic-range-slider"
          />
          <div className="range-scale-ticks">
            <span>₹0 (BPL)</span>
            <span>₹2.5L</span>
            <span>₹5.0L</span>
            <span>₹12L+</span>
          </div>
        </div>

        {/* Age and Gender */}
        <div className="filter-fields-row">
          <div className="filter-field-block half-width">
            <label className="filter-field-label" htmlFor="age-input">Age (Years)</label>
            <input
              id="age-input"
              type="number"
              min="0"
              max="110"
              className="classic-text-input"
              value={profile.age}
              onChange={(e) => handleChange('age', parseInt(e.target.value, 10) || 0)}
            />
          </div>

          <div className="filter-field-block half-width">
            <label className="filter-field-label" htmlFor="gender-select">Gender</label>
            <select
              id="gender-select"
              className="classic-dropdown-select"
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

        {/* State and Social Category */}
        <div className="filter-fields-row">
          <div className="filter-field-block half-width">
            <label className="filter-field-label" htmlFor="state-select">State / UT</label>
            <select
              id="state-select"
              className="classic-dropdown-select"
              value={profile.state}
              onChange={(e) => handleChange('state', e.target.value)}
            >
              {INDIAN_STATES.map(st => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          <div className="filter-field-block half-width">
            <label className="filter-field-label" htmlFor="category-select">Category</label>
            <select
              id="category-select"
              className="classic-dropdown-select"
              value={profile.category}
              onChange={(e) => handleChange('category', e.target.value)}
            >
              <option value="All">All</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="EWS">EWS</option>
            </select>
          </div>
        </div>

        {/* Land Ownership & Rural Area */}
        <div className="filter-checkbox-strip">
          <label className="classic-checkbox-label">
            <input
              type="checkbox"
              checked={profile.hasLand}
              onChange={(e) => handleChange('hasLand', e.target.checked)}
            />
            <span>Applicant owns agricultural land holding</span>
          </label>
        </div>
      </div>
    </aside>
  );
}
