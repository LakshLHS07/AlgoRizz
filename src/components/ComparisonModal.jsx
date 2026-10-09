import React from 'react';

export function ComparisonModal({
  comparedSchemes,
  onClose,
  onRemoveScheme,
  onClearAll,
  onSelectScheme
}) {
  if (!comparedSchemes || comparedSchemes.length === 0) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog-extra-large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-category-tag">Comparison Engine</span>
            <h2 className="modal-scheme-title">Side-by-Side Scheme Analysis ({comparedSchemes.length}/3)</h2>
          </div>
          <div className="comparison-header-actions">
            <button type="button" className="clear-comparison-btn" onClick={onClearAll}>
              Clear All
            </button>
            <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              ✕
            </button>
          </div>
        </div>

        <div className="comparison-matrix-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="feature-col">Feature / Criterion</th>
                {comparedSchemes.map(s => (
                  <th key={s.id} className="scheme-col">
                    <div className="scheme-col-header">
                      <strong>{s.name}</strong>
                      <button
                        type="button"
                        className="remove-col-btn"
                        onClick={() => onRemoveScheme(s.id)}
                        title="Remove scheme"
                      >
                        ✕ Remove
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="feature-col"><strong>Match Score</strong></td>
                {comparedSchemes.map(s => (
                  <td key={s.id}>
                    <span className="comp-score-badge" style={{ color: s.tierColor }}>
                      {s.matchScore}% ({s.matchTier})
                    </span>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="feature-col"><strong>Category & Ministry</strong></td>
                {comparedSchemes.map(s => (
                  <td key={s.id}>
                    <span className="comp-category">{s.category}</span>
                    <div className="comp-ministry">{s.ministry}</div>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="feature-col"><strong>Financial Benefit</strong></td>
                {comparedSchemes.map(s => (
                  <td key={s.id}>
                    <strong className="comp-benefit">{s.benefitAmount}</strong>
                    <div className="comp-benefit-type">{s.benefitType}</div>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="feature-col"><strong>Target Demographic</strong></td>
                {comparedSchemes.map(s => (
                  <td key={s.id}>{s.targetGroup}</td>
                ))}
              </tr>

              <tr>
                <td className="feature-col"><strong>Max Income Ceiling</strong></td>
                {comparedSchemes.map(s => (
                  <td key={s.id}>
                    ₹{(s.eligibility.maxIncome / 100000).toFixed(1)} Lakhs / yr
                  </td>
                ))}
              </tr>

              <tr>
                <td className="feature-col"><strong>Allowed Occupations</strong></td>
                {comparedSchemes.map(s => (
                  <td key={s.id}>
                    {s.eligibility.occupations.join(", ")}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="feature-col"><strong>Mandatory Documents</strong></td>
                {comparedSchemes.map(s => (
                  <td key={s.id}>
                    <ul className="comp-docs-list">
                      {s.documents.map((d, i) => (
                        <li key={i}>{d.name} {d.required && '*'}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="feature-col"><strong>Action</strong></td>
                {comparedSchemes.map(s => (
                  <td key={s.id}>
                    <button
                      type="button"
                      className="comp-view-details-btn"
                      onClick={() => {
                        onClose();
                        onSelectScheme(s);
                      }}
                    >
                      View Full Details →
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
