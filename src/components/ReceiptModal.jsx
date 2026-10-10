import React from 'react';
import { 
  getTranslation, 
  translateOccupation, 
  translateGender, 
  translateSocialCategory 
} from '../utils/translations';
import { getLocalizedScheme } from '../utils/schemeLocalization';

export function ReceiptModal({
  record,
  matchedSchemes: rawMatchedSchemes,
  onClose,
  selectedLanguage = 'en'
}) {
  if (!record) return null;

  const t = getTranslation(selectedLanguage);
  const matchedSchemes = (rawMatchedSchemes || []).map(s => getLocalizedScheme(s, selectedLanguage));
  const topSchemes = matchedSchemes.slice(0, 4);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog-large printable-receipt-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header no-print">
          <div>
            <span className="modal-category-tag">Official Intake Docket</span>
            <h2 className="modal-scheme-title">Beneficiary Scheme Eligibility Receipt</h2>
          </div>
          <div className="receipt-header-btns" style={{ display: 'flex', gap: '0.5rem' }}>
            <button type="button" className="primary-action-button" onClick={handlePrint}>
              {t.printReceipt}
            </button>
            <button type="button" className="modal-close-btn" onClick={onClose}>
              {t.close}
            </button>
          </div>
        </div>

        <div className="receipt-content-body printable-area">
          {/* Government / CSC Official Heading */}
          <div className="receipt-gov-header">
            <h3>{t.govIndia} / State Welfare Administration</h3>
            <h4>Citizen Scheme Intake & Eligibility Assessment Slip</h4>
            <div className="receipt-ref-row">
              <span><strong>Docket Ref No:</strong> {record.id}</span>
              <span><strong>Date & Time:</strong> {record.timestamp}</span>
            </div>
          </div>

          <div className="receipt-grid-2col">
            <div className="receipt-box">
              <span className="receipt-box-title">Citizen Demographics</span>
              <table className="receipt-subtable">
                <tbody>
                  <tr><td>Name:</td><td><strong>{record.name}</strong></td></tr>
                  <tr><td>Contact:</td><td>{record.mobile}</td></tr>
                  <tr><td>Aadhaar Ref:</td><td>{record.aadhaar}</td></tr>
                  <tr><td>{t.ageYears} / {t.gender}:</td><td>{record.age} {t.years} / {translateGender(record.gender, selectedLanguage)}</td></tr>
                  <tr><td>{t.stateUt}:</td><td>{record.state}</td></tr>
                  <tr><td>{t.socialCategory}:</td><td>{translateSocialCategory(record.category, selectedLanguage)}</td></tr>
                  <tr><td>{t.occupation}:</td><td>{translateOccupation(record.occupation, selectedLanguage)}</td></tr>
                  <tr><td>{t.annualIncome}:</td><td>₹{(record.income / 100000).toFixed(2)} {t.lakhs}</td></tr>
                  <tr><td>{t.critLand}:</td><td>{record.hasLand ? t.landConfirmed : t.noLand}</td></tr>
                </tbody>
              </table>
            </div>

            <div className="receipt-box">
              <span className="receipt-box-title">Enrolling Officer / CSC Details</span>
              <table className="receipt-subtable">
                <tbody>
                  <tr><td>Officer Name:</td><td><strong>{record.officerName}</strong></td></tr>
                  <tr><td>Officer / VLE ID:</td><td>{record.officerId}</td></tr>
                  <tr><td>Intake Terminal:</td><td>CSC / Gram Panchayat Desk</td></tr>
                  <tr><td>Verification Mode:</td><td>Assisted In-Person Entry</td></tr>
                  {record.notes && (
                    <tr><td>Officer Notes:</td><td>{record.notes}</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Matched Schemes Summary */}
          <div className="receipt-schemes-section">
            <span className="receipt-box-title">Assessed Welfare Schemes and Eligibility</span>
            <table className="criteria-table receipt-table">
              <thead>
                <tr>
                  <th>{t.resultsHeading}</th>
                  <th>{t.schemeCategory}</th>
                  <th>{t.financialBenefit}</th>
                  <th>{t.matchScore}</th>
                </tr>
              </thead>
              <tbody>
                {topSchemes.map((scheme) => (
                  <tr key={scheme.id}>
                    <td><strong>{scheme.name}</strong></td>
                    <td>{scheme.ministry}</td>
                    <td><strong style={{ color: '#15803d' }}>{scheme.benefitAmount}</strong></td>
                    <td><strong>{scheme.matchScore}% ({t.eligibleStamp})</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Document Verification Notice & Signature Line */}
          <div className="receipt-footer-notes">
            <p>
              <strong>Notice to Applicant:</strong> This receipt is an eligibility discovery assessment generated through official scheme criteria matching. Please submit the verified documents (Aadhaar Card, Bank Passbook with DBT, Land Records/Income Certificate) to the designated department portal or nearest CSC kiosk for direct disbursement.
            </p>
          </div>

          <div className="receipt-signature-row">
            <div className="sig-block">
              <div className="sig-line"></div>
              <span>Citizen / Applicant Signature</span>
            </div>
            <div className="sig-block">
              <div className="sig-line"></div>
              <span>Authorized CSC / Official Seal & Signature</span>
            </div>
          </div>
        </div>

        <div className="modal-footer no-print">
          <button type="button" className="primary-action-button" onClick={handlePrint}>
            {t.printReceipt}
          </button>
          <button type="button" className="close-btn-secondary" onClick={onClose}>
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
}
