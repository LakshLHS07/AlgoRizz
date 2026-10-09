import React, { useState } from 'react';

export function SchemeModal({
  scheme,
  userProfile,
  onClose,
  isBookmarked,
  onToggleBookmark
}) {
  const [activeTab, setActiveTab] = useState('eligibility');
  const [checkedDocs, setCheckedDocs] = useState({});

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
            Close
          </button>
        </div>

        {/* Highlight Banner */}
        <div className="modal-benefit-banner">
          <div className="benefit-banner-item">
            <span className="banner-label">Financial Benefit / Assistance</span>
            <strong className="banner-value">{scheme.benefitAmount}</strong>
          </div>
          <div className="benefit-banner-item">
            <span className="banner-label">Target Group</span>
            <strong className="banner-value">{scheme.targetGroup}</strong>
          </div>
          <div className="benefit-banner-item">
            <span className="banner-label">Application Status</span>
            <span className="banner-badge open">{scheme.deadline}</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="modal-tabs-nav">
          <button
            type="button"
            className={`tab-nav-btn ${activeTab === 'eligibility' ? 'active' : ''}`}
            onClick={() => setActiveTab('eligibility')}
          >
            Eligibility ({passedCount}/{totalCount})
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
            How to Apply
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
                  <h4>Eligibility Overview</h4>
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
                        <td>
                          <strong>{crit.title}</strong>
                          <div className="sub-note">{crit.note}</div>
                        </td>
                        <td>{crit.requirement}</td>
                        <td>{crit.userVal}</td>
                        <td>
                          <span className={`status-badge ${crit.passed ? 'passed' : 'failed'}`}>
                            {crit.passed ? 'Eligible' : 'Not Met'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {scheme.eligibility.specialConditions && (
                <div className="special-conditions-callout">
                  <strong>Special Conditions:</strong>
                  <p>{scheme.eligibility.specialConditions}</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="documents-tab-pane">
              <div className="docs-intro-row">
                <p>Gather the following documents before applying:</p>
                <button type="button" className="print-docs-btn" onClick={handlePrintChecklist}>
                  Print Checklist
                </button>
              </div>

              <div className="documents-list">
                {scheme.documents.map((doc, idx) => {
                  const isChecked = !!checkedDocs[doc.name];
                  return (
                    <div 
                      key={idx} 
                      className={`document-card-item ${isChecked ? 'checked' : ''}`}
                      onClick={() => toggleDoc(doc.name)}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleDoc(doc.name)}
                        className="doc-checkbox"
                        id={`doc-${idx}`}
                      />
                      <div className="doc-info">
                        <label htmlFor={`doc-${idx}`} className="doc-name">
                          {doc.name} {doc.required && <span className="req-star">(Mandatory)</span>}
                        </label>
                        <p className="doc-desc">{doc.desc}</p>
                      </div>
                      <span className="doc-status-indicator">
                        {isChecked ? "Ready" : "Needed"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'apply' && (
            <div className="apply-tab-pane">
              <h4 className="steps-title">Application Steps</h4>
              <div className="steps-timeline">
                {scheme.applicationSteps.map((step, idx) => (
                  <div key={idx} className="step-timeline-item">
                    <div className="step-number-node">{idx + 1}</div>
                    <div className="step-content">
                      <p>{step}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="official-portal-box">
                <div>
                  <strong>Official Portal</strong>
                  <p>Visit the official government website to submit your application directly.</p>
                </div>
                <a
                  href={scheme.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-portal-link"
                >
                  Visit Portal
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button
            type="button"
            className={`save-modal-btn ${isBookmarked ? 'active' : ''}`}
            onClick={() => onToggleBookmark(scheme.id)}
          >
            {isBookmarked ? "Saved in Bookmarks" : "Save Scheme"}
          </button>
          <button type="button" className="close-btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
