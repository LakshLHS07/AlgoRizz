import React from 'react';

export function ReceiptModal({
  record,
  matchedSchemes,
  onClose
}) {
  if (!record) return null;

  const topSchemes = (matchedSchemes || []).slice(0, 4);

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
          <div className="receipt-header-btns">
            <button type="button" className="primary-action-button" onClick={handlePrint}>
              Print Receipt
            </button>
            <button type="button" className="modal-close-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>

        <div className="receipt-content-body printable-area">
          {/* Government / CSC Official Heading */}
          <div className="receipt-gov-header">
            <h3>Government of India / State Welfare Administration</h3>
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
                  <tr><td>Age / Gender:</td><td>{record.age} Years / {record.gender}</td></tr>
                  <tr><td>Location:</td><td>{record.state}</td></tr>
                  <tr><td>Category:</td><td>{record.category}</td></tr>
                  <tr><td>Occupation:</td><td>{record.occupation}</td></tr>
                  <tr><td>Annual Income:</td><td>₹{(record.income / 100000).toFixed(2)} Lakhs</td></tr>
                  <tr><td>Landholding:</td><td>{record.hasLand ? "Cultivable Land Verified" : "Landless / Urban"}</td></tr>
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
                  <th>Welfare Scheme</th>
                  <th>Ministry / Department</th>
                  <th>Benefit / Assistance</th>
                  <th>Match Score</th>
                </tr>
              </thead>
              <tbody>
                {topSchemes.map((scheme) => (
                  <tr key={scheme.id}>
                    <td><strong>{scheme.name}</strong></td>
                    <td>{scheme.ministry}</td>
                    <td>{scheme.benefitAmount}</td>
                    <td><strong>{scheme.matchScore}% (Eligible)</strong></td>
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
            Print Official Receipt
          </button>
          <button type="button" className="close-btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
