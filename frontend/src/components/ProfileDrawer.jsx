import React from 'react';
import { INDIAN_STATES, OCCUPATIONS, SCHEME_CATEGORIES } from '../data/schemesData';
import { 
  getTranslation, 
  translateCategory, 
  translateOccupation, 
  translateGender, 
  translateSocialCategory 
} from '../utils/translations';

export function ProfileDrawer({
  profile,
  setProfile,
  categoryFilter,
  setCategoryFilter,
  onReset,
  selectedLanguage = 'en'
}) {
  const t = getTranslation(selectedLanguage);

  const handleChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <aside className="minimal-filter-sidebar" aria-label="Scheme Filter Panel">
      <div className="filter-sidebar-header">
        <h3 className="filter-sidebar-title">Filters</h3>
        <button type="button" className="filter-reset-link" onClick={onReset}>
          Reset
        </button>
      </div>

      <div className="filter-sidebar-content">
        {/* Category Filter */}
        <div className="filter-group">
          <label className="filter-label" htmlFor="cat-filter">
            Scheme Category
          </label>
          <select
            id="cat-filter"
            className="filter-input-select"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {SCHEME_CATEGORIES.map(cat => (
              <option key={cat} value={cat}>
                {translateCategory(cat, selectedLanguage)}
              </option>
            ))}
          </select>
        </div>

        {/* Occupation */}
        <div className="filter-group">
          <label className="filter-label" htmlFor="occupation-select">
            Occupation
          </label>
          <select
            id="occupation-select"
            className="filter-input-select"
            value={profile.occupation}
            onChange={(e) => handleChange('occupation', e.target.value)}
          >
            {OCCUPATIONS.map(occ => (
              <option key={occ} value={occ}>
                {translateOccupation(occ, selectedLanguage)}
              </option>
            ))}
          </select>
        </div>

        {/* State */}
        <div className="filter-group">
          <label className="filter-label" htmlFor="state-select">
            State / UT
          </label>
          <select
            id="state-select"
            className="filter-input-select"
            value={profile.state}
            onChange={(e) => handleChange('state', e.target.value)}
          >
            {INDIAN_STATES.map(st => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </div>

        {/* Social Category */}
        <div className="filter-group">
          <label className="filter-label" htmlFor="category-select">
            Social Category
          </label>
          <select
            id="category-select"
            className="filter-input-select"
            value={profile.category}
            onChange={(e) => handleChange('category', e.target.value)}
          >
            <option value="All">{translateSocialCategory("All", selectedLanguage)}</option>
            <option value="General">{translateSocialCategory("General", selectedLanguage)}</option>
            <option value="OBC">{translateSocialCategory("OBC", selectedLanguage)}</option>
            <option value="SC">{translateSocialCategory("SC", selectedLanguage)}</option>
            <option value="ST">{translateSocialCategory("ST", selectedLanguage)}</option>
            <option value="EWS">{translateSocialCategory("EWS", selectedLanguage)}</option>
          </select>
        </div>

        {/* Age */}
        <div className="filter-group">
          <label className="filter-label" htmlFor="age-input">Age (Years)</label>
          <input
            id="age-input"
            type="number"
            min="0"
            max="110"
            className="filter-input-text"
            value={profile.age}
            onChange={(e) => handleChange('age', parseInt(e.target.value, 10) || 0)}
          />
        </div>

        {/* Income Slider */}
        <div className="filter-group">
          <div className="filter-label-flex">
            <label className="filter-label" htmlFor="income-range">
              Annual Income
            </label>
            <span className="filter-value-text">₹{(profile.income / 100000).toFixed(2)}L</span>
          </div>
          <input
            id="income-range"
            type="range"
            min="0"
            max="1200000"
            step="25000"
            value={profile.income}
            onChange={(e) => handleChange('income', parseInt(e.target.value, 10))}
            className="minimal-slider"
          />
        </div>

        {/* Toggles */}
        <div className="filter-toggles-list">
          <label className="filter-checkbox-item">
            <input
              type="checkbox"
              checked={profile.hasLand}
              onChange={(e) => handleChange('hasLand', e.target.checked)}
            />
            <span>Owns Agricultural Land</span>
          </label>

          <label className="filter-checkbox-item">
            <input
              type="checkbox"
              checked={profile.isRural}
              onChange={(e) => handleChange('isRural', e.target.checked)}
            />
            <span>Rural Resident</span>
          </label>
        </div>
      </div>
    </aside>
  );
}
