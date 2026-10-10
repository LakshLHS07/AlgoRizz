import React from 'react';
import { getTranslation } from '../utils/translations';
import { getLocalizedScheme } from '../utils/schemeLocalization';

export function ComparisonModal({
  comparedSchemes: rawComparedSchemes,
  onClose,
  onRemoveScheme,
  onClearAll,
  onSelectScheme,
  selectedLanguage = 'en'
}) {
  const t = getTranslation(selectedLanguage);
  
  if (!rawComparedSchemes || rawComparedSchemes.length === 0) return null;

  const comparedSchemes = rawComparedSchemes.map(s => getLocalizedScheme(s, selectedLanguage));

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog-extra-large comparison-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-category-tag">{t.comparisonTray}</span>
            <h2 className="modal-scheme-title">{t.comparisonTray} ({comparedSchemes.length}/3)</h2>
          </div>
          <div className="comparison-header-actions" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <button type="button" className="clear-comparison-btn" onClick={onClearAll} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: '0.75rem', padding: '0.35rem 0.75rem', cursor: 'pointer', borderRadius: 2 }}>
              {t.resetAll}
            </button>
            <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              {t.close}
            </button>
          </div>
        </div>

        <div className="comparison-matrix-wrapper" style={{ padding: '1rem', overflowX: 'auto' }}>
          <table className="criteria-table comparison-table">
            <thead>
              <tr>
                <th style={{ width: '180px' }}>Feature</th>
                {comparedSchemes.map(s => (
                  <th key={s.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                      <strong>{s.name}</strong>
                      <button
                        type="button"
                        onClick={() => onRemoveScheme(s.id)}
                        title="Remove scheme"
                        style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '2px 6px', fontSize: '0.7rem', borderRadius: 2, cursor: 'pointer' }}
                      >
                        ✕
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Match Score</strong></td>
                {comparedSchemes.map(s => (
                  <td key={s.id}>
                    <strong style={{ color: s.tierColor || '#15803d' }}>
                      {s.matchScore}% ({s.matchTier || t.eligibleStamp})
                    </strong>
                  </td>
                ))}
              </tr>

              <tr>
                <td><strong>{t.schemeCategory}</strong></td>
                {comparedSchemes.map(s => (
                  <td key={s.id}>
                    <div><strong>{s.category}</strong></div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{s.ministry}</div>
                  </td>
                ))}
              </tr>

              <tr>
                <td><strong>{t.financialBenefit}</strong></td>
                {comparedSchemes.map(s => (
                  <td key={s.id}>
                    <strong style={{ color: '#15803d' }}>{s.benefitAmount}</strong>
                  </td>
                ))}
              </tr>

              <tr>
                <td><strong>{t.targetBeneficiary}</strong></td>
                {comparedSchemes.map(s => (
                  <td key={s.id}>{s.targetGroup}</td>
                ))}
              </tr>

              <tr>
                <td><strong>{t.annualIncome} Limit</strong></td>
                {comparedSchemes.map(s => (
                  <td key={s.id}>
                    ₹{(s.eligibility.maxIncome / 100000).toFixed(1)} Lakhs / year
                  </td>
                ))}
              </tr>

              <tr>
                <td><strong>{t.occupation}</strong></td>
                {comparedSchemes.map(s => (
                  <td key={s.id}>
                    {s.eligibility.occupations.join(", ")}
                  </td>
                ))}
              </tr>

              <tr>
                <td><strong>Action</strong></td>
                {comparedSchemes.map(s => (
                  <td key={s.id}>
                    <button
                      type="button"
                      className="classic-btn-primary"
                      onClick={() => {
                        onClose();
                        onSelectScheme(s);
                      }}
                    >
                      {t.viewGuidelines}
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
