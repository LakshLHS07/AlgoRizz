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

  const formatLakhs = (val) => {
    return `₹${(val / 100000).toFixed(2)} ${t.lakhs}/${t.perYear}`;
  };

  return (
    <aside className="profile-filters-panel" aria-label="Scheme Filter Panel">
      <div className="filter-panel-header">
        <div className="filter-header-title">
          <span className="filter-badge">{t.parametersBadge}</span>
          <h3>{t.filterTitle}</h3>
        </div>
        <button type="button" className="classic-btn-reset" onClick={onReset} title="Reset all filters to default">
          {t.resetAll}
        </button>
      </div>

      <div className="filter-panel-body">
        {/* Category Filter */}
        <div className="filter-field-block">
          <label className="filter-field-label" htmlFor="cat-filter">
            {t.schemeCategory}
          </label>
          <select
            id="cat-filter"
            className="classic-dropdown-select"
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
        <div className="filter-field-block">
          <label className="filter-field-label" htmlFor="occupation-select">
            {t.occupation}
          </label>
          <select
            id="occupation-select"
            className="classic-dropdown-select"
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

        {/* Income Slider */}
        <div className="filter-field-block">
          <div className="income-header-row">
            <label className="filter-field-label" htmlFor="income-range">
              {t.annualIncome}
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
            <label className="filter-field-label" htmlFor="age-input">{t.ageYears}</label>
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
            <label className="filter-field-label" htmlFor="gender-select">{t.gender}</label>
            <select
              id="gender-select"
              className="classic-dropdown-select"
              value={profile.gender}
              onChange={(e) => handleChange('gender', e.target.value)}
            >
              <option value="all">{translateGender("all", selectedLanguage)}</option>
              <option value="female">{translateGender("female", selectedLanguage)}</option>
              <option value="male">{translateGender("male", selectedLanguage)}</option>
              <option value="other">{translateGender("other", selectedLanguage)}</option>
            </select>
          </div>
        </div>

        {/* State and Social Category */}
        <div className="filter-fields-row">
          <div className="filter-field-block half-width">
            <label className="filter-field-label" htmlFor="state-select">{t.stateUt}</label>
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
            <label className="filter-field-label" htmlFor="category-select">{t.socialCategory}</label>
            <select
              id="category-select"
              className="classic-dropdown-select"
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
        </div>

        {/* Land Ownership */}
        <div className="filter-checkbox-strip">
          <label className="classic-checkbox-label">
            <input
              type="checkbox"
              checked={profile.hasLand}
              onChange={(e) => handleChange('hasLand', e.target.checked)}
            />
            <span>{t.landOwner}</span>
          </label>
        </div>
      </div>
    </aside>
  );
}
