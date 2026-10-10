import React, { useState } from 'react';
import { getTranslation } from '../utils/translations';
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

  const criteriaChecks = [
    {
      title: "Age Criterion",
      requirement: `${scheme.eligibility.minAge} to ${scheme.eligibility.maxAge} Years`,
      userVal: `${userProfile.age} Years`,
      passed: userProfile.age >= scheme.eligibility.minAge && userProfile.age <= scheme.eligibility.maxAge,
      note: userProfile.age < scheme.eligibility.minAge ? "Applicant is below minimum age requirement" : userProfile.age > scheme.eligibility.maxAge ? "Applicant exceeds maximum age limit" : "Age requirement met"
    },
    {
      title: "Income Limit",
      requirement: `Up to ₹${(scheme.eligibility.maxIncome / 100000).toFixed(1)} Lakhs / year`,
      userVal: `₹${(userProfile.income / 100000).toFixed(2)} Lakhs`,
      passed: userProfile.income <= scheme.eligibility.maxIncome,
      note: userProfile.income <= scheme.eligibility.maxIncome ? "Income is within limit" : "Income exceeds maximum threshold"
    },
    {
      title: "Target Occupation",
      requirement: scheme.eligibility.occupations.join(", "),
      userVal: userProfile.occupation,
      passed: scheme.eligibility.occupations.includes("all") || scheme.eligibility.occupations.includes(userProfile.occupation),
      note: scheme.eligibility.occupations.includes("all") ? "Open to all occupations" : `Designed for ${scheme.eligibility.occupations.join(", ")}`
    },
    {
      title: "Gender and Category",
      requirement: `Gender: ${scheme.eligibility.genders.join("/")} | Category: ${scheme.eligibility.categories.join(", ")}`,
      userVal: `Gender: ${userProfile.gender} | Category: ${userProfile.category}`,
      passed: (scheme.eligibility.genders.includes("all") || scheme.eligibility.genders.includes(userProfile.gender)) &&
              (scheme.eligibility.categories.includes(userProfile.category) || scheme.eligibility.categories.includes("General")),
      note: "Demographic requirements"
    }
  ];

  if (scheme.eligibility.requiresLand) {
    criteriaChecks.push({
      title: "Land Requirement",
      requirement: "Cultivable Agricultural Land Ownership",
      userVal: userProfile.hasLand ? "Owns land" : "No land",
      passed: userProfile.hasLand,
      note: userProfile.hasLand ? "Land ownership confirmed" : "Requires agricultural land records"
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
            Eligibility Overview ({passedCount}/{totalCount})
          </button>
          <button
            type="button"
            className={`tab-nav-btn ${activeTab === 'documents' ? 'active' : ''}`}
            onClick={() => setActiveTab('documents')}
          >
            Required Documents ({scheme.documents.length})
          </button>
          <button
            type="button"
            className={`tab-nav-btn ${activeTab === 'apply' ? 'active' : ''}`}
            onClick={() => setActiveTab('apply')}
          >
            How to Apply & Guidelines
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
                  <h4>Eligibility Assessment</h4>
                  <p>
                    {passedCount === totalCount
                      ? "Your profile meets all standard eligibility criteria for this scheme."
                      : `You satisfy ${passedCount} out of ${totalCount} criteria. See details below.`}
                  </p>
                </div>
              </div>

              <div className="criteria-table-wrap">
                <table className="criteria-table">
                  <thead>
                    <tr>
                      <th>Criterion</th>
                      <th>Official Requirement</th>
                      <th>Your Profile</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {criteriaChecks.map((crit, idx) => (
                      <tr key={idx} className={crit.passed ? 'row-passed' : 'row-failed'}>
                        <td><strong>{crit.title}</strong></td>
                        <td>{crit.requirement}</td>
                        <td>{crit.userVal}</td>
                        <td>
                          <span className={`status-badge-chip ${crit.passed ? 'pass' : 'fail'}`}>
                            {crit.passed ? '✓ Eligible' : '✗ Ineligible'}
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
                <p className="docs-desc">Check the documents you already possess to generate your application checklist:</p>
                <button type="button" className="print-checklist-btn" onClick={handlePrintChecklist}>
                  Print Checklist
                </button>
              </div>

              <div className="docs-checklist-group">
                {scheme.documents.map((doc, idx) => (
                  <div key={idx} className={`doc-check-item ${checkedDocs[doc.name] ? 'checked' : ''}`}>
                    <label className="doc-check-label">
                      <input
                        type="checkbox"
                        checked={!!checkedDocs[doc.name]}
                        onChange={() => toggleDoc(doc.name)}
                      />
                      <div className="doc-info-text">
                        <span className="doc-title">{doc.name} {doc.required && <span className="doc-required-tag">*Mandatory</span>}</span>
                        <span className="doc-sub">{doc.desc}</span>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'apply' && (
            <div className="apply-tab-pane">
              <div className="roadmap-box">
                <h4>Application Steps</h4>
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
                <span>Official Scheme Portal: </span>
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
