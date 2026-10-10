import React, { useState } from 'react';
import { 
  getTranslation, 
  translateOccupation, 
  translateGender, 
  translateSocialCategory, 
  translateDocumentName 
} from '../utils/translations';
import { getLocalizedScheme } from '../utils/schemeLocalization';

export function SchemeModal({
  scheme: rawScheme,
  userProfile,
  onClose,
  isBookmarked,
  onToggleBookmark,
  selectedLanguage = 'en'
}) {
  const [activeTab, setActiveTab] = useState('eligibility');
  const [checkedDocs, setCheckedDocs] = useState({});
  const t = getTranslation(selectedLanguage);
  const scheme = getLocalizedScheme(rawScheme, selectedLanguage);

  if (!scheme) return null;

  const toggleDoc = (docName) => {
    setCheckedDocs(prev => ({
      ...prev,
      [docName]: !prev[docName]
    }));
  };

  const handlePrintChecklist = () => {
    window.print();
  };

  const isAgeValid = userProfile.age >= scheme.eligibility.minAge && userProfile.age <= scheme.eligibility.maxAge;
  const isIncomeValid = userProfile.income <= scheme.eligibility.maxIncome;
  const isOccValid = scheme.eligibility.occupations.includes("all") || scheme.eligibility.occupations.includes(userProfile.occupation);
  const isGenderCategoryValid = (scheme.eligibility.genders.includes("all") || scheme.eligibility.genders.includes(userProfile.gender)) &&
                                (scheme.eligibility.categories.includes(userProfile.category) || scheme.eligibility.categories.includes("General"));

  const criteriaChecks = [
    {
      title: t.critAge,
      requirement: `${scheme.eligibility.minAge} ${t.to} ${scheme.eligibility.maxAge} ${t.years}`,
      userVal: `${userProfile.age} ${t.years}`,
      passed: isAgeValid,
      note: userProfile.age < scheme.eligibility.minAge 
        ? t.ageBelow 
        : userProfile.age > scheme.eligibility.maxAge 
        ? t.ageExceeds 
        : t.ageMet
    },
    {
      title: t.critIncome,
      requirement: `${t.upTo} ₹${(scheme.eligibility.maxIncome / 100000).toFixed(1)} ${t.lakhs} / ${t.perYear}`,
      userVal: `₹${(userProfile.income / 100000).toFixed(2)} ${t.lakhs}`,
      passed: isIncomeValid,
      note: isIncomeValid ? t.incomeWithin : t.incomeExceeds
    },
    {
      title: t.critOccupation,
      requirement: scheme.eligibility.occupations.includes("all") 
        ? t.openToAllOcc 
        : scheme.eligibility.occupations.map(o => translateOccupation(o, selectedLanguage)).join(", "),
      userVal: translateOccupation(userProfile.occupation, selectedLanguage) || userProfile.occupation,
      passed: isOccValid,
      note: scheme.eligibility.occupations.includes("all") 
        ? t.openToAllOcc 
        : `${t.designedFor} ${scheme.eligibility.occupations.map(o => translateOccupation(o, selectedLanguage)).join(", ")}`
    },
    {
      title: t.critGenderCategory,
      requirement: `${t.gender}: ${scheme.eligibility.genders.map(g => translateGender(g, selectedLanguage)).join("/")} | ${t.socialCategory}: ${scheme.eligibility.categories.map(c => translateSocialCategory(c, selectedLanguage)).join(", ")}`,
      userVal: `${t.gender}: ${translateGender(userProfile.gender, selectedLanguage)} | ${t.socialCategory}: ${translateSocialCategory(userProfile.category, selectedLanguage)}`,
      passed: isGenderCategoryValid,
      note: t.demographicReqs
    }
  ];

  if (scheme.eligibility.requiresLand) {
    criteriaChecks.push({
      title: t.critLand,
      requirement: t.landReq,
      userVal: userProfile.hasLand ? t.ownsLand : t.noLand,
      passed: userProfile.hasLand,
      note: userProfile.hasLand ? t.landConfirmed : t.requiresLandRecords
    });
  }

  const passedCount = criteriaChecks.filter(c => c.passed).length;
  const totalCount = criteriaChecks.length;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog-large" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-category-tag">{scheme.category}</span>
            <h2 className="modal-scheme-title">{scheme.name}</h2>
            <span className="modal-ministry-tag">{scheme.ministry}</span>
          </div>

          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            {t.close}
          </button>
        </div>

        {/* Highlight Banner */}
        <div className="modal-benefit-banner">
          <div className="benefit-banner-item">
            <span className="banner-label">{t.financialBenefit}</span>
            <strong className="banner-value">{scheme.benefitAmount}</strong>
          </div>
          <div className="benefit-banner-item">
            <span className="banner-label">{t.targetBeneficiary}</span>
            <strong className="banner-value">{scheme.targetGroup}</strong>
          </div>
          <div className="benefit-banner-item">
            <span className="banner-label">{t.applicationMode}</span>
            <span className="banner-badge open">{scheme.applicationMode || scheme.deadline}</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="modal-tabs-nav">
          <button
            type="button"
            className={`tab-nav-btn ${activeTab === 'eligibility' ? 'active' : ''}`}
            onClick={() => setActiveTab('eligibility')}
          >
            {t.tabEligibility} ({passedCount}/{totalCount})
          </button>
          <button
            type="button"
            className={`tab-nav-btn ${activeTab === 'documents' ? 'active' : ''}`}
            onClick={() => setActiveTab('documents')}
          >
            {t.tabDocuments} ({scheme.documents.length})
          </button>
          <button
            type="button"
            className={`tab-nav-btn ${activeTab === 'apply' ? 'active' : ''}`}
            onClick={() => setActiveTab('apply')}
          >
            {t.tabApply}
          </button>
        </div>

        {/* Tab Content */}
        <div className="modal-tab-content">
          {activeTab === 'eligibility' && (
            <div className="eligibility-tab-pane">
              <div className="eligibility-summary-box">
                <div className="summary-score-circle">
                  <span>{scheme.matchScore}%</span>
                </div>
                <div>
                  <h4>{t.eligibilityAssessment}</h4>
                  <p>
                    {passedCount === totalCount
                      ? t.eligibilityAllMet
                      : t.eligibilityPartialMet.replace('{passed}', passedCount).replace('{total}', totalCount)}
                  </p>
                </div>
              </div>

              <div className="criteria-table-wrap">
                <table className="criteria-table">
                  <thead>
                    <tr>
                      <th>{t.thCriterion}</th>
                      <th>{t.thRequirement}</th>
                      <th>{t.thYourProfile}</th>
                      <th>{t.thStatus}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {criteriaChecks.map((crit, idx) => (
                      <tr key={idx} className={crit.passed ? 'row-passed' : 'row-failed'}>
                        <td>
                          <strong>{crit.title}</strong>
                          <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>{crit.note}</div>
                        </td>
                        <td>{crit.requirement}</td>
                        <td>{crit.userVal}</td>
                        <td>
                          <span className={`status-badge-chip ${crit.passed ? 'pass' : 'fail'}`}>
                            {crit.passed ? t.passEligible : t.failIneligible}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="documents-tab-pane">
              <div className="docs-header-row">
                <p className="docs-desc">{t.docsChecklistDesc}</p>
                <button type="button" className="print-checklist-btn" onClick={handlePrintChecklist}>
                  {t.printChecklist}
                </button>
              </div>

              <div className="docs-checklist-group">
                {scheme.documents.map((doc, idx) => {
                  const localizedDocName = translateDocumentName(doc.name, selectedLanguage);
                  return (
                    <div key={idx} className={`doc-check-item ${checkedDocs[doc.name] ? 'checked' : ''}`}>
                      <label className="doc-check-label">
                        <input
                          type="checkbox"
                          checked={!!checkedDocs[doc.name]}
                          onChange={() => toggleDoc(doc.name)}
                        />
                        <div className="doc-info-text">
                          <span className="doc-title">
                            {localizedDocName} {doc.required && <span className="doc-required-tag">{t.mandatoryDoc}</span>}
                          </span>
                          <span className="doc-sub">{doc.desc}</span>
                        </div>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'apply' && (
            <div className="apply-tab-pane">
              <div className="roadmap-box">
                <h4>{t.applicationSteps}</h4>
                <ol className="roadmap-steps-list">
                  {scheme.applicationSteps.map((step, idx) => (
                    <li key={idx} className="roadmap-step">
                      <span className="step-number">{idx + 1}</span>
                      <p className="step-text">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="official-link-box">
                <span>{t.officialPortal} </span>
                <a href={scheme.officialUrl} target="_blank" rel="noopener noreferrer" className="official-portal-link">
                  {scheme.officialUrl} ↗
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button
            type="button"
            className={`secondary-action-button ${isBookmarked ? 'active' : ''}`}
            onClick={() => onToggleBookmark(scheme.id)}
          >
            {isBookmarked ? t.saved : t.save}
          </button>
          
          <a
            href={scheme.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-action-button"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
          >
            {t.applyNow}
          </a>
        </div>
      </div>
    </div>
  );
}
