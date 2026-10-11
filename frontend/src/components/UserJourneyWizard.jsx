import React, { useState } from 'react';
import { INDIAN_STATES, SOCIAL_CATEGORIES } from '../data/schemesData';
import { 
  getTranslation, 
  translateOccupation, 
  translateGender, 
  translateSocialCategory 
} from '../utils/translations';

export function UserJourneyWizard({
  profile,
  setProfile,
  matchedCount,
  onCompleteJourney,
  selectedLanguage = 'en'
}) {
  const t = getTranslation(selectedLanguage);
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: t.stepAgeProfile || "Age Profile", sub: t.stepAgeSub || "Age Verification" },
    { id: 2, title: t.stepLocation || "Location", sub: t.stepLocationSub || "State & Area" },
    { id: 3, title: t.stepSocialGroup || "Social Group", sub: t.stepSocialGroupSub || "Category & Inclusivity" },
    { id: 4, title: t.stepOccupationIncome || "Occupation & Income", sub: t.stepOccupationIncomeSub || "Employment & Earnings" }
  ];

  const updateProfile = (key, value) => {
    setProfile(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(s => s + 1);
    } else {
      if (onCompleteJourney) onCompleteJourney();
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(s => s - 1);
    }
  };

  const incomeSlabs = [
    { label: "≤ ₹1.5L", value: 140000 },
    { label: "₹1.5L - 3L", value: 250000 },
    { label: "₹3L - 5L", value: 450000 },
    { label: "₹5L - 8L", value: 700000 },
    { label: "> ₹8L", value: 1000000 }
  ];

  const popularStates = ["Maharashtra", "Uttar Pradesh", "Bihar", "Rajasthan", "Madhya Pradesh", "Karnataka", "Tamil Nadu", "Gujarat"];

  const occupationsList = [
    { id: 'farmer', label: 'Farmer / Cultivator' },
    { id: 'agricultural laborer', label: 'Agricultural Laborer' },
    { id: 'student', label: 'Student / Scholar' },
    { id: 'street vendor', label: 'Street Vendor / Hawker' },
    { id: 'artisan', label: 'Artisan / Craftsman' },
    { id: 'self-employed', label: 'Self-Employed / MSME' },
    { id: 'daily wage / laborer', label: 'Daily Wage Worker' },
    { id: 'unemployed', label: 'Unemployed Youth' },
    { id: 'senior / retired', label: 'Senior / Retired' }
  ];

  return (
    <div className="minimal-wizard-card" aria-label="Guided Eligibility Questionnaire">
      {/* Wizard Header */}
      <div className="wizard-top-bar">
        <div className="wizard-title-group">
          <span className="wizard-step-eyebrow">
            {t.stepEyebrow 
              ? t.stepEyebrow.replace('{current}', currentStep).replace('{total}', 4).replace('{title}', steps[currentStep - 1].title.toUpperCase())
              : `${t.stepStatus ? t.stepStatus.replace('{current}', currentStep).replace('{total}', 4) : `STEP ${currentStep} OF 4`} · ${steps[currentStep - 1].title.toUpperCase()}`
            }
          </span>
          <h2 className="wizard-heading">
            {currentStep === 1 && (t.step1Heading || t.stepAgeSub || "Age Verification")}
            {currentStep === 2 && (t.step2Heading || t.stepLocationSub || "State & Residential Area")}
            {currentStep === 3 && (t.step3Heading || t.stepSocialGroupSub || "Social Category & Inclusivity")}
            {currentStep === 4 && (t.step4Heading || t.stepOccupationIncomeSub || "Occupation & Household Income")}
          </h2>
        </div>

        <div className="wizard-match-counter">
          <span className="counter-dot"></span>
          <span className="counter-val">{matchedCount}</span>
          <span className="counter-txt">{t.eligibleSchemesCount || t.matchedSchemes || "eligible schemes"}</span>
        </div>
      </div>

      {/* Stepper Navigation */}
      <div className="wizard-nav-track">
        <div className="wizard-steps-tabs">
          {steps.map(step => (
            <button
              key={step.id}
              type="button"
              className={`wizard-tab-btn ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'done' : ''}`}
              onClick={() => setCurrentStep(step.id)}
            >
              <span className="tab-circle">{currentStep > step.id ? "✓" : step.id}</span>
              <span className="tab-title">{step.title}</span>
            </button>
          ))}
        </div>
        <div className="wizard-progress-bar-bg">
          <div className="wizard-progress-bar-fill" style={{ width: `${(currentStep / 4) * 100}%` }}></div>
        </div>
      </div>

      {/* Wizard Question Body */}
      <div className="wizard-body-content">
        {/* STEP 1: AGE */}
        {currentStep === 1 && (
          <div className="wizard-step-pane step-age-pane">
            <div className="wizard-question-block">
              <label className="wizard-question-label" htmlFor="minimal-age-input">
                {t.howOldAreYou || t.questionAge || "How old are you? (Citizen Age)"}
              </label>
              <div className="wizard-age-input-row">
                <input
                  id="minimal-age-input"
                  type="number"
                  min="1"
                  max="110"
                  value={profile.age}
                  onChange={(e) => updateProfile('age', Math.max(1, parseInt(e.target.value, 10) || 18))}
                  className="minimal-num-input"
                />
                <span className="num-unit">{t.yearsUnit || t.years || "years"}</span>

                <div className="minimal-chips-row">
                  {[18, 24, 28, 35, 45, 60, 65].map(ageVal => (
                    <button
                      key={ageVal}
                      type="button"
                      className={`minimal-chip-btn ${profile.age === ageVal ? 'active' : ''}`}
                      onClick={() => updateProfile('age', ageVal)}
                    >
                      {ageVal} {t.yrsUnit || "yrs"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: LOCATION */}
        {currentStep === 2 && (
          <div className="wizard-step-pane">
            <div className="wizard-question-block">
              <label className="wizard-question-label" htmlFor="minimal-state-select">
                {t.stateUt || t.questionState || "State or Union Territory"}
              </label>
              <select
                id="minimal-state-select"
                className="minimal-select-input"
                value={profile.state}
                onChange={(e) => updateProfile('state', e.target.value)}
              >
                {INDIAN_STATES.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>

              <div className="minimal-chips-row" style={{ marginTop: '0.75rem' }}>
                {popularStates.map(st => (
                  <button
                    key={st}
                    type="button"
                    className={`minimal-chip-btn ${profile.state === st ? 'active' : ''}`}
                    onClick={() => updateProfile('state', st)}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="wizard-question-block" style={{ marginTop: '1.75rem' }}>
              <label className="wizard-question-label">
                {t.areaOfResidence || "Area of Residence"}
              </label>
              <div className="minimal-pill-grid cols-2">
                <button
                  type="button"
                  className={`minimal-choice-btn ${profile.isRural ? 'selected' : ''}`}
                  onClick={() => updateProfile('isRural', true)}
                >
                  <div className="btn-text-stack">
                    <span className="btn-main-title">{t.ruralArea || "Rural Area"}</span>
                    <span className="btn-sub-title">{t.ruralAreaSub || "Village or Gram Panchayat"}</span>
                  </div>
                  {profile.isRural && <span className="check-mark">✓</span>}
                </button>

                <button
                  type="button"
                  className={`minimal-choice-btn ${!profile.isRural ? 'selected' : ''}`}
                  onClick={() => updateProfile('isRural', false)}
                >
                  <div className="btn-text-stack">
                    <span className="btn-main-title">{t.urbanArea || "Urban Area"}</span>
                    <span className="btn-sub-title">{t.urbanAreaSub || "Town or City Municipality"}</span>
                  </div>
                  {!profile.isRural && <span className="check-mark">✓</span>}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: SOCIAL GROUP & INCLUSIVITY */}
        {currentStep === 3 && (
          <div className="wizard-step-pane">
            <div className="wizard-question-block">
              <label className="wizard-question-label">
                {t.socialCategory || t.questionCategory || "Social Category"}
              </label>
              <div className="minimal-pill-grid cols-5">
                {SOCIAL_CATEGORIES.filter(c => c !== 'All').map(cat => (
                  <button
                    key={cat}
                    type="button"
                    className={`minimal-choice-btn compact ${profile.category === cat ? 'selected' : ''}`}
                    onClick={() => updateProfile('category', cat)}
                  >
                    <span>{translateSocialCategory(cat, selectedLanguage)}</span>
                    {profile.category === cat && <span className="check-mark">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="wizard-question-block" style={{ marginTop: '1.75rem' }}>
              <label className="wizard-question-label">
                {t.specialInclusivity || "Special Inclusivity Criteria"}
              </label>
              <div className="minimal-toggle-row">
                <label className={`minimal-toggle-box ${profile.isDivyang ? 'active' : ''}`}>
                  <input
                    type="checkbox"
                    checked={profile.isDivyang}
                    onChange={(e) => updateProfile('isDivyang', e.target.checked)}
                  />
                  <div className="toggle-box-text">
                    <strong>{t.diffAbled || "Differently Abled (Divyangjan)"}</strong>
                    <span>{t.diffAbledSub || "≥40% benchmark disability"}</span>
                  </div>
                </label>

                <label className={`minimal-toggle-box ${profile.isMinority ? 'active' : ''}`}>
                  <input
                    type="checkbox"
                    checked={profile.isMinority}
                    onChange={(e) => updateProfile('isMinority', e.target.checked)}
                  />
                  <div className="toggle-box-text">
                    <strong>{t.minorityCommunity || "Minority Community"}</strong>
                    <span>{t.minorityCommunitySub || "Notified minority background"}</span>
                  </div>
                </label>

                <label className={`minimal-toggle-box ${profile.isBPL ? 'active' : ''}`}>
                  <input
                    type="checkbox"
                    checked={profile.isBPL}
                    onChange={(e) => updateProfile('isBPL', e.target.checked)}
                  />
                  <div className="toggle-box-text">
                    <strong>{t.bplRation || "BPL / Ration Card Holder"}</strong>
                    <span>{t.bplRationSub || "AAY or Priority Household card"}</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: OCCUPATION & INCOME */}
        {currentStep === 4 && (
          <div className="wizard-step-pane">
            <div className="wizard-question-block">
              <label className="wizard-question-label">
                {t.primaryOccupation || t.questionOccupation || "Primary Occupation"}
              </label>
              <div className="minimal-pill-grid cols-3">
                {occupationsList.map(occ => (
                  <button
                    key={occ.id}
                    type="button"
                    className={`minimal-choice-btn ${profile.occupation === occ.id ? 'selected' : ''}`}
                    onClick={() => updateProfile('occupation', occ.id)}
                  >
                    <span>{translateOccupation(occ.id, selectedLanguage)}</span>
                    {profile.occupation === occ.id && <span className="check-mark">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="wizard-question-block" style={{ marginTop: '1.75rem' }}>
              <label className="wizard-question-label">
                {t.agriculturalLandholding || "Agricultural Landholding"}
              </label>
              <div className="minimal-pill-grid cols-2">
                <button
                  type="button"
                  className={`minimal-choice-btn ${profile.hasLand ? 'selected' : ''}`}
                  onClick={() => updateProfile('hasLand', true)}
                >
                  <div className="btn-text-stack">
                    <span className="btn-main-title">{t.ownsAgriLand || "Owns Agricultural Land"}</span>
                    <span className="btn-sub-title">{t.ownsAgriLandSub || "Qualifies for PM-KISAN, crop insurance & solar pump"}</span>
                  </div>
                  {profile.hasLand && <span className="check-mark">✓</span>}
                </button>

                <button
                  type="button"
                  className={`minimal-choice-btn ${!profile.hasLand ? 'selected' : ''}`}
                  onClick={() => updateProfile('hasLand', false)}
                >
                  <div className="btn-text-stack">
                    <span className="btn-main-title">{t.landless || "Landless / Non-Agricultural"}</span>
                    <span className="btn-sub-title">{t.landlessSub || "Qualifies for rural housing, skill training & labor aid"}</span>
                  </div>
                  {!profile.hasLand && <span className="check-mark">✓</span>}
                </button>
              </div>
            </div>

            <div className="wizard-question-block" style={{ marginTop: '1.75rem' }}>
              <div className="income-heading-flex">
                <label className="wizard-question-label" htmlFor="minimal-income-range">
                  {t.annualHouseholdIncome || t.questionIncome || "Annual Household Income"}
                </label>
                <span className="minimal-income-tag">
                  ₹{(profile.income / 100000).toFixed(2)} {t.lakhsPerYr || "Lakhs/year"}
                </span>
              </div>

              <div className="minimal-chips-row" style={{ marginBottom: '0.85rem' }}>
                {incomeSlabs.map(slab => (
                  <button
                    key={slab.label}
                    type="button"
                    className={`minimal-chip-btn ${Math.abs(profile.income - slab.value) < 50000 ? 'active' : ''}`}
                    onClick={() => updateProfile('income', slab.value)}
                  >
                    {slab.label}
                  </button>
                ))}
              </div>

              <input
                id="minimal-income-range"
                type="range"
                min="0"
                max="1200000"
                step="25000"
                value={profile.income}
                onChange={(e) => updateProfile('income', parseInt(e.target.value, 10))}
                className="minimal-slider"
              />
              <div className="slider-limits">
                <span>₹0 ({t.nil || "Nil"})</span>
                <span>₹3.0L</span>
                <span>₹6.0L</span>
                <span>₹9.0L</span>
                <span>₹12.0L+</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Wizard Footer Navigation */}
      <div className="wizard-footer-bar">
        <div>
          {currentStep > 1 && (
            <button
              type="button"
              className="minimal-wizard-back-btn"
              onClick={handlePrev}
            >
              {t.prevStep || "← Back"}
            </button>
          )}
        </div>

        <div className="wizard-footer-right">
          <span className="wizard-step-status">
            {t.stepStatus 
              ? t.stepStatus.replace('{current}', currentStep).replace('{total}', 4) 
              : `Step ${currentStep} of 4`
            }
          </span>
          {currentStep < 4 ? (
            <button
              type="button"
              className="minimal-wizard-next-btn"
              onClick={handleNext}
            >
              {t.nextStep || "Next Step →"}
            </button>
          ) : (
            <button
              type="button"
              className="minimal-wizard-finish-btn"
              onClick={handleNext}
            >
              {t.viewEligibleSchemesBtn 
                ? t.viewEligibleSchemesBtn.replace('{count}', matchedCount) 
                : (t.finishWizard || `View ${matchedCount} Eligible Schemes →`)
              }
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
