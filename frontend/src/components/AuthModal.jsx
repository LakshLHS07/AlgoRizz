import React, { useState } from 'react';

export function AuthModal({
  isOpen,
  onClose,
  currentRole,
  currentUser,
  onLogin
}) {
  const [activeTab, setActiveTab] = useState(currentRole || 'citizen'); // 'citizen' | 'official'

  // Citizen form state
  const [citizenMobile, setCitizenMobile] = useState('');
  const [citizenAadhaar, setCitizenAadhaar] = useState('');
  const [citizenName, setCitizenName] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [citizenOtp, setCitizenOtp] = useState('');

  // Official form state
  const [officerId, setOfficerId] = useState('');
  const [officerName, setOfficerName] = useState('');
  const [department, setDepartment] = useState('Common Service Center (CSC)');
  const [district, setDistrict] = useState('Pune Rural');
  const [officerPin, setOfficerPin] = useState('');

  if (!isOpen) return null;

  const handleCitizenSubmit = (e) => {
    e.preventDefault();
    if (!otpSent) {
      if (!citizenMobile || citizenMobile.length < 10) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }
      setOtpSent(true);
    } else {
      // Complete login
      onLogin({
        role: 'citizen',
        name: citizenName || 'Citizen Applicant',
        mobile: citizenMobile,
        aadhaar: citizenAadhaar ? `XXXX-XXXX-${citizenAadhaar.slice(-4)}` : 'XXXX-XXXX-8921',
        isLoggedIn: true
      });
      onClose();
    }
  };

  const handleOfficialSubmit = (e) => {
    e.preventDefault();
    if (!officerId) {
      alert("Please enter your Officer / CSC VLE ID.");
      return;
    }
    onLogin({
      role: 'official',
      name: officerName || 'Officer R. Verma',
      officerId: officerId || 'CSC-MH-411038',
      department,
      district,
      isLoggedIn: true
    });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog-medium" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-category-tag">Access Portal</span>
            <h2 className="modal-scheme-title">Select Login Portal</h2>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose}>
            Close
          </button>
        </div>

        {/* Tab Selection */}
        <div className="modal-tabs-nav">
          <button
            type="button"
            className={`tab-nav-btn ${activeTab === 'citizen' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('citizen');
              setOtpSent(false);
            }}
          >
            Citizen Self-Service
          </button>
          <button
            type="button"
            className={`tab-nav-btn ${activeTab === 'official' ? 'active' : ''}`}
            onClick={() => setActiveTab('official')}
          >
            Government Official / CSC Agent
          </button>
        </div>

        <div className="modal-body-padding">
          {activeTab === 'citizen' ? (
            <form onSubmit={handleCitizenSubmit}>
              <p className="portal-intro-text">
                Enter your details to check eligible government schemes, save welfare programs, and track document readiness.
              </p>

              <div className="form-field-group">
                <label htmlFor="citizen-name">Your Full Name</label>
                <input
                  id="citizen-name"
                  type="text"
                  className="portal-input"
                  placeholder="e.g. Ramesh Kumar"
                  value={citizenName}
                  onChange={(e) => setCitizenName(e.target.value)}
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="citizen-mobile">Mobile Number (Required for OTP)</label>
                <input
                  id="citizen-mobile"
                  type="tel"
                  maxLength="10"
                  className="portal-input"
                  placeholder="9876543210"
                  value={citizenMobile}
                  onChange={(e) => setCitizenMobile(e.target.value)}
                  disabled={otpSent}
                  required
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="citizen-aadhaar">Aadhaar Number (Optional)</label>
                <input
                  id="citizen-aadhaar"
                  type="text"
                  maxLength="12"
                  className="portal-input"
                  placeholder="12-digit Aadhaar Number"
                  value={citizenAadhaar}
                  onChange={(e) => setCitizenAadhaar(e.target.value)}
                  disabled={otpSent}
                />
              </div>

              {otpSent && (
                <div className="form-field-group otp-group">
                  <label htmlFor="citizen-otp">Enter 4-digit OTP sent to your phone (Use 1234 for demo)</label>
                  <input
                    id="citizen-otp"
                    type="password"
                    maxLength="6"
                    className="portal-input"
                    placeholder="Enter OTP"
                    value={citizenOtp}
                    onChange={(e) => setCitizenOtp(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="modal-actions-bar">
                <button type="submit" className="primary-action-button">
                  {otpSent ? "Verify OTP and Login" : "Send One-Time Password (OTP)"}
                </button>
                {otpSent && (
                  <button
                    type="button"
                    className="secondary-action-button"
                    onClick={() => setOtpSent(false)}
                  >
                    Change Mobile Number
                  </button>
                )}
              </div>
            </form>
          ) : (
            <form onSubmit={handleOfficialSubmit}>
              <p className="portal-intro-text">
                Authorized access for Gram Panchayat officials, CSC VLE operators, and District Welfare Officers to enroll citizens and generate official scheme application dockets.
              </p>

              <div className="form-field-group">
                <label htmlFor="officer-name">Official / Operator Full Name</label>
                <input
                  id="officer-name"
                  type="text"
                  className="portal-input"
                  placeholder="e.g. Officer Rajesh Verma"
                  value={officerName}
                  onChange={(e) => setOfficerName(e.target.value)}
                  required
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="officer-id">Officer ID / CSC VLE Code</label>
                <input
                  id="officer-id"
                  type="text"
                  className="portal-input"
                  placeholder="e.g. CSC-MH-411038 or GOV-PUN-092"
                  value={officerId}
                  onChange={(e) => setOfficerId(e.target.value)}
                  required
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="officer-dept">Department / Agency</label>
                <select
                  id="officer-dept"
                  className="portal-input"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="Common Service Center (CSC)">Common Service Center (CSC)</option>
                  <option value="Gram Panchayat / Block Office">Gram Panchayat / Block Office</option>
                  <option value="District Social Welfare Department">District Social Welfare Department</option>
                  <option value="Agriculture & Revenue Department">Agriculture & Revenue Department</option>
                </select>
              </div>

              <div className="form-field-group">
                <label htmlFor="officer-district">Assigned District / Block</label>
                <input
                  id="officer-district"
                  type="text"
                  className="portal-input"
                  placeholder="e.g. Pune Rural, Maharashtra"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="officer-pin">Security PIN / Password</label>
                <input
                  id="officer-pin"
                  type="password"
                  className="portal-input"
                  placeholder="Enter 4-digit Officer PIN"
                  value={officerPin}
                  onChange={(e) => setOfficerPin(e.target.value)}
                />
              </div>

              <div className="modal-actions-bar">
                <button type="submit" className="primary-action-button">
                  Access Official Enrollment Terminal
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
