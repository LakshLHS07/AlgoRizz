import React, { useState } from 'react';
import { 
  validateAadhaarFormat, 
  validatePanFormat, 
  validateIfscFormat,
  verifyAadhaarOtp, 
  verifyPanCard,
  verifyBankStatement,
  MAJOR_BANKS 
} from '../utils/kycVerification';

export function FullScreenAuthPage({ onLogin, onGuestAccess, initialRole = 'citizen' }) {
  const [selectedRole, setSelectedRole] = useState(initialRole);
  const [citizenVerificationMode, setCitizenVerificationMode] = useState('kyc'); // 'kyc' (Aadhaar+PAN+Bank) | 'mobile'

  // Step 1: Aadhaar State
  const [aadhaarInput, setAadhaarInput] = useState('');
  const [aadhaarOtpSent, setAadhaarOtpSent] = useState(false);
  const [aadhaarOtp, setAadhaarOtp] = useState('');
  const [aadhaarVerifiedData, setAadhaarVerifiedData] = useState(null);
  const [isVerifyingAadhaar, setIsVerifyingAadhaar] = useState(false);
  const [aadhaarError, setAadhaarError] = useState('');

  // Step 2: PAN State
  const [panInput, setPanInput] = useState('');
  const [panVerifiedData, setPanVerifiedData] = useState(null);
  const [isVerifyingPan, setIsVerifyingPan] = useState(false);
  const [panError, setPanError] = useState('');

  // Step 3: Bank Account & Statement State
  const [bankName, setBankName] = useState(MAJOR_BANKS[0]);
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('SBIN0004521');
  const [statementFile, setStatementFile] = useState(null);
  const [bankVerifiedData, setBankVerifiedData] = useState(null);
  const [isVerifyingBank, setIsVerifyingBank] = useState(false);
  const [bankError, setBankError] = useState('');

  // Citizen Basic Mobile State
  const [citizenName, setCitizenName] = useState('');
  const [citizenMobile, setCitizenMobile] = useState('');
  const [mobileOtpSent, setMobileOtpSent] = useState(false);
  const [mobileOtp, setMobileOtp] = useState('');

  // Official Form State
  const [officerName, setOfficerName] = useState('');
  const [officerId, setOfficerId] = useState('');
  const [department, setDepartment] = useState('Common Service Center (CSC)');
  const [district, setDistrict] = useState('Pune Rural');
  const [officerPin, setOfficerPin] = useState('');

  // Auto-format Aadhaar input (XXXX XXXX XXXX)
  const handleAadhaarChange = (e) => {
    let raw = e.target.value.replace(/\D/g, '').slice(0, 12);
    let formatted = raw.replace(/(\d{4})(?=\d)/g, '$1 ');
    setAadhaarInput(formatted);
    setAadhaarError('');
  };

  const handleSendAadhaarOtp = () => {
    const raw = aadhaarInput.replace(/\s/g, '');
    if (!validateAadhaarFormat(raw)) {
      setAadhaarError("Please enter a valid 12-digit Aadhaar number.");
      return;
    }
    setAadhaarOtpSent(true);
    setAadhaarError('');
  };

  const handleVerifyAadhaar = async () => {
    if (!aadhaarOtp) {
      setAadhaarError("Please enter the OTP sent to your registered mobile.");
      return;
    }
    setIsVerifyingAadhaar(true);
    setAadhaarError('');

    const res = await verifyAadhaarOtp(aadhaarInput, aadhaarOtp);
    setIsVerifyingAadhaar(false);

    if (res.success) {
      setAadhaarVerifiedData(res.data);
    } else {
      setAadhaarError(res.error);
    }
  };

  const handleVerifyPan = async () => {
    if (!validatePanFormat(panInput)) {
      setPanError("Invalid PAN format. Standard format: ABCDE1234F (10 characters).");
      return;
    }
    setIsVerifyingPan(true);
    setPanError('');

    const res = await verifyPanCard(panInput, aadhaarVerifiedData ? aadhaarVerifiedData.name : "");
    setIsVerifyingPan(false);

    if (res.success) {
      setPanVerifiedData(res.data);
    } else {
      setPanError(res.error);
    }
  };

  const handleVerifyBankStatement = async () => {
    if (!accountNumber || accountNumber.length < 8) {
      setBankError("Please enter a valid Bank Account Number.");
      return;
    }
    if (ifscCode && !validateIfscFormat(ifscCode)) {
      setBankError("Please enter a valid 11-character IFSC code (e.g. SBIN0004521).");
      return;
    }

    setIsVerifyingBank(true);
    setBankError('');

    const res = await verifyBankStatement({
      bankName,
      accountNumber,
      ifscCode,
      statementFileName: statementFile ? statementFile.name : "bank_statement_6months.pdf"
    });
    setIsVerifyingBank(false);

    if (res.success) {
      setBankVerifiedData(res.data);
    } else {
      setBankError(res.error);
    }
  };

  const handleCompleteKycLogin = () => {
    if (!aadhaarVerifiedData) {
      alert("Please complete Aadhaar verification.");
      return;
    }

    onLogin({
      role: 'citizen',
      name: aadhaarVerifiedData.name,
      age: aadhaarVerifiedData.age,
      gender: aadhaarVerifiedData.gender,
      state: aadhaarVerifiedData.state,
      aadhaar: aadhaarVerifiedData.aadhaarMasked,
      isAadhaarVerified: true,
      pan: panVerifiedData ? panVerifiedData.pan : null,
      isPanVerified: !!panVerifiedData,
      bank: bankVerifiedData ? {
        bankName: bankVerifiedData.bankName,
        accountMasked: bankVerifiedData.accountMasked,
        ifsc: bankVerifiedData.ifsc,
        dbtStatus: bankVerifiedData.dbtStatus,
        assessedAnnualIncome: bankVerifiedData.assessedAnnualIncome,
        avgMonthlyInflow: bankVerifiedData.avgMonthlyInflow
      } : null,
      isBankVerified: !!bankVerifiedData,
      assessedIncome: bankVerifiedData ? bankVerifiedData.assessedAnnualIncome : 140000,
      isLoggedIn: true
    });
  };

  const handleMobileSubmit = (e) => {
    e.preventDefault();
    if (!mobileOtpSent) {
      if (!citizenMobile || citizenMobile.length < 10) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }
      setMobileOtpSent(true);
    } else {
      onLogin({
        role: 'citizen',
        name: citizenName || 'Citizen Applicant',
        mobile: citizenMobile,
        aadhaar: 'Unverified',
        isAadhaarVerified: false,
        isPanVerified: false,
        isBankVerified: false,
        isLoggedIn: true
      });
    }
  };

  const handleOfficialSubmit = (e) => {
    e.preventDefault();
    if (!officerName || !officerId) {
      alert("Please enter Officer Name and Officer/CSC ID.");
      return;
    }
    onLogin({
      role: 'official',
      name: officerName,
      officerId: officerId,
      department,
      district,
      isLoggedIn: true
    });
  };

  return (
    <div className="fullscreen-auth-container">
      {/* Top Navbar */}
      <header className="auth-fullscreen-header">
        <div className="auth-brand-row">
          <div className="brand-badge-box">
            <span className="brand-initials">U</span>
          </div>
          <div>
            <h1 className="auth-brand-title">Udyama</h1>
            <p className="auth-brand-subtitle">Government Welfare Scheme Matching & Verification Portal</p>
          </div>
        </div>

        <button 
          type="button" 
          className="guest-skip-btn"
          onClick={onGuestAccess}
        >
          Explore as Guest Citizen →
        </button>
      </header>

      {/* Main Auth Body */}
      <main className="auth-fullscreen-body">
        <div className="auth-center-wrapper">
          <div className="auth-headline-section">
            <span className="auth-eyebrow">National Welfare Access Portal</span>
            <h2 className="auth-main-heading">Select Your Access Portal</h2>
            <p className="auth-main-subtext">
              Verify your identity using Aadhaar, PAN, and Bank Statement for automatic income extraction and DBT qualification, or access the official CSC terminal.
            </p>
          </div>

          {/* Role Choice Cards */}
          <div className="portal-selector-grid">
            <div 
              className={`portal-choice-card ${selectedRole === 'citizen' ? 'selected' : ''}`}
              onClick={() => setSelectedRole('citizen')}
            >
              <div className="portal-card-header">
                <span className="portal-type-badge">Citizen Self-Entry</span>
                <span className="portal-radio-indicator"></span>
              </div>
              <h3 className="portal-card-title">Citizen Self-Service</h3>
              <p className="portal-card-desc">
                Verify identity via Aadhaar, PAN, & Bank Statement to auto-verify age, tax bracket, and bank account for DBT transfers.
              </p>
            </div>

            <div 
              className={`portal-choice-card ${selectedRole === 'official' ? 'selected' : ''}`}
              onClick={() => setSelectedRole('official')}
            >
              <div className="portal-card-header">
                <span className="portal-type-badge official-badge">Official Terminal</span>
                <span className="portal-radio-indicator"></span>
              </div>
              <h3 className="portal-card-title">Government Official / CSC Agent</h3>
              <p className="portal-card-desc">
                For Gram Panchayat secretaries, CSC operators, and field officers to register citizens and issue intake dockets.
              </p>
            </div>
          </div>

          {/* Form Container */}
          <div className="auth-form-card">
            {selectedRole === 'citizen' ? (
              <div className="citizen-auth-content">
                {/* Mode Selector */}
                <div className="sub-mode-toggle">
                  <button
                    type="button"
                    className={`sub-mode-btn ${citizenVerificationMode === 'kyc' ? 'active' : ''}`}
                    onClick={() => setCitizenVerificationMode('kyc')}
                  >
                    Aadhaar, PAN & Bank Statement Verification (Full KYC)
                  </button>
                  <button
                    type="button"
                    className={`sub-mode-btn ${citizenVerificationMode === 'mobile' ? 'active' : ''}`}
                    onClick={() => setCitizenVerificationMode('mobile')}
                  >
                    Quick Mobile OTP Login
                  </button>
                </div>

                {citizenVerificationMode === 'kyc' ? (
                  <div className="kyc-flow-container">
                    {/* Step 1: Aadhaar Verification */}
                    <div className={`kyc-step-card ${aadhaarVerifiedData ? 'step-completed' : 'step-active'}`}>
                      <div className="kyc-step-header">
                        <div className="step-num-badge">1</div>
                        <div>
                          <h4>Aadhaar UIDAI e-KYC Verification</h4>
                          <p>Verifies legal name, age, gender, and residential state</p>
                        </div>
                        {aadhaarVerifiedData && (
                          <span className="verified-pill">Aadhaar Verified</span>
                        )}
                      </div>

                      {!aadhaarVerifiedData ? (
                        <div className="kyc-step-body">
                          <div className="form-field-group">
                            <label htmlFor="aadhaar-number">12-Digit Aadhaar Number</label>
                            <div className="input-with-action">
                              <input
                                id="aadhaar-number"
                                type="text"
                                className="portal-input"
                                placeholder="XXXX XXXX XXXX"
                                value={aadhaarInput}
                                onChange={handleAadhaarChange}
                                disabled={aadhaarOtpSent}
                              />
                              {!aadhaarOtpSent ? (
                                <button
                                  type="button"
                                  className="secondary-action-button"
                                  onClick={handleSendAadhaarOtp}
                                >
                                  Send UIDAI OTP
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  className="secondary-action-button"
                                  onClick={() => {
                                    setAadhaarOtpSent(false);
                                    setAadhaarOtp('');
                                  }}
                                >
                                  Change
                                </button>
                              )}
                            </div>
                          </div>

                          {aadhaarOtpSent && (
                            <div className="form-field-group otp-box">
                              <label htmlFor="aadhaar-otp">Enter 4-Digit OTP sent to Aadhaar-linked phone (Use 1234)</label>
                              <div className="input-with-action">
                                <input
                                  id="aadhaar-otp"
                                  type="password"
                                  maxLength="6"
                                  className="portal-input"
                                  placeholder="Enter OTP"
                                  value={aadhaarOtp}
                                  onChange={(e) => setAadhaarOtp(e.target.value)}
                                />
                                <button
                                  type="button"
                                  className="primary-action-button"
                                  onClick={handleVerifyAadhaar}
                                  disabled={isVerifyingAadhaar}
                                >
                                  {isVerifyingAadhaar ? "Verifying..." : "Verify OTP"}
                                </button>
                              </div>
                            </div>
                          )}

                          {aadhaarError && (
                            <div className="kyc-error-alert">{aadhaarError}</div>
                          )}
                        </div>
                      ) : (
                        <div className="verified-details-box">
                          <div className="verified-detail-item">
                            <span>Verified Name:</span>
                            <strong>{aadhaarVerifiedData.name}</strong>
                          </div>
                          <div className="verified-detail-item">
                            <span>Age / Gender:</span>
                            <strong>{aadhaarVerifiedData.age} Years ({aadhaarVerifiedData.gender})</strong>
                          </div>
                          <div className="verified-detail-item">
                            <span>State:</span>
                            <strong>{aadhaarVerifiedData.state} ({aadhaarVerifiedData.district})</strong>
                          </div>
                          <div className="verified-detail-item">
                            <span>Aadhaar:</span>
                            <strong>{aadhaarVerifiedData.aadhaarMasked}</strong>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Step 2: PAN Card Verification */}
                    <div className={`kyc-step-card ${panVerifiedData ? 'step-completed' : (aadhaarVerifiedData ? 'step-active' : 'step-disabled')}`}>
                      <div className="kyc-step-header">
                        <div className="step-num-badge">2</div>
                        <div>
                          <h4>PAN Card Tax & Income Verification</h4>
                          <p>Verifies tax bracket and non-taxpayer low-income eligibility status</p>
                        </div>
                        {panVerifiedData && (
                          <span className="verified-pill">PAN Verified</span>
                        )}
                      </div>

                      {aadhaarVerifiedData && !panVerifiedData && (
                        <div className="kyc-step-body">
                          <div className="form-field-group">
                            <label htmlFor="pan-number">10-Character Permanent Account Number (PAN)</label>
                            <div className="input-with-action">
                              <input
                                id="pan-number"
                                type="text"
                                maxLength="10"
                                className="portal-input uppercase-input"
                                placeholder="ABCDE1234F"
                                value={panInput}
                                onChange={(e) => {
                                  setPanInput(e.target.value.toUpperCase());
                                  setPanError('');
                                }}
                              />
                              <button
                                type="button"
                                className="primary-action-button"
                                onClick={handleVerifyPan}
                                disabled={isVerifyingPan}
                              >
                                {isVerifyingPan ? "Verifying..." : "Verify PAN"}
                              </button>
                            </div>
                          </div>

                          {panError && (
                            <div className="kyc-error-alert">{panError}</div>
                          )}
                        </div>
                      )}

                      {panVerifiedData && (
                        <div className="verified-details-box">
                          <div className="verified-detail-item">
                            <span>PAN Number:</span>
                            <strong>{panVerifiedData.pan}</strong>
                          </div>
                          <div className="verified-detail-item">
                            <span>Entity Type:</span>
                            <strong>{panVerifiedData.entityType}</strong>
                          </div>
                          <div className="verified-detail-item">
                            <span>Tax Assessment:</span>
                            <strong>{panVerifiedData.taxCategory}</strong>
                          </div>
                          <div className="verified-detail-item">
                            <span>Status:</span>
                            <strong>{panVerifiedData.verificationStatus}</strong>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Step 3: Bank Account & Statement Verification */}
                    <div className={`kyc-step-card ${bankVerifiedData ? 'step-completed' : (aadhaarVerifiedData ? 'step-active' : 'step-disabled')}`}>
                      <div className="kyc-step-header">
                        <div className="step-num-badge">3</div>
                        <div>
                          <h4>Bank Account & Statement Verification</h4>
                          <p>Verifies active account for DBT cash transfers and analyzes 6-month statement cashflow</p>
                        </div>
                        {bankVerifiedData && (
                          <span className="verified-pill">Bank Verified</span>
                        )}
                      </div>

                      {aadhaarVerifiedData && !bankVerifiedData && (
                        <div className="kyc-step-body">
                          <div className="form-grid-2col">
                            <div className="form-field-group">
                              <label htmlFor="bank-select">Select Bank Name</label>
                              <select
                                id="bank-select"
                                className="portal-input"
                                value={bankName}
                                onChange={(e) => setBankName(e.target.value)}
                              >
                                {MAJOR_BANKS.map(b => (
                                  <option key={b} value={b}>{b}</option>
                                ))}
                              </select>
                            </div>

                            <div className="form-field-group">
                              <label htmlFor="ifsc-code">Bank Branch IFSC Code</label>
                              <input
                                id="ifsc-code"
                                type="text"
                                maxLength="11"
                                className="portal-input uppercase-input"
                                placeholder="SBIN0004521"
                                value={ifscCode}
                                onChange={(e) => setIfscCode(e.target.value.toUpperCase())}
                              />
                            </div>
                          </div>

                          <div className="form-grid-2col">
                            <div className="form-field-group">
                              <label htmlFor="account-num">Bank Account Number *</label>
                              <input
                                id="account-num"
                                type="password"
                                className="portal-input"
                                placeholder="e.g. 30894210984"
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ''))}
                                required
                              />
                            </div>

                            <div className="form-field-group">
                              <label htmlFor="statement-file">Upload 6-Month Bank Statement (PDF - Optional)</label>
                              <input
                                id="statement-file"
                                type="file"
                                accept=".pdf,.csv"
                                className="portal-input file-input"
                                onChange={(e) => setStatementFile(e.target.files[0])}
                              />
                            </div>
                          </div>

                          <div className="bank-action-row">
                            <button
                              type="button"
                              className="primary-action-button"
                              onClick={handleVerifyBankStatement}
                              disabled={isVerifyingBank}
                            >
                              {isVerifyingBank ? "Analyzing Statement & DBT Status..." : "Verify Bank Account & Statement"}
                            </button>
                          </div>

                          {bankError && (
                            <div className="kyc-error-alert">{bankError}</div>
                          )}
                        </div>
                      )}

                      {bankVerifiedData && (
                        <div className="verified-details-box">
                          <div className="verified-detail-item">
                            <span>Bank / Account:</span>
                            <strong>{bankVerifiedData.bankName} ({bankVerifiedData.accountMasked})</strong>
                          </div>
                          <div className="verified-detail-item">
                            <span>DBT Transfer Status:</span>
                            <strong>{bankVerifiedData.dbtStatus}</strong>
                          </div>
                          <div className="verified-detail-item">
                            <span>Assessed Annual Inflow:</span>
                            <strong>₹{(bankVerifiedData.assessedAnnualIncome / 100000).toFixed(2)} Lakhs ({bankVerifiedData.avgMonthlyInflow})</strong>
                          </div>
                          <div className="verified-detail-item">
                            <span>Statement Audit:</span>
                            <strong>{bankVerifiedData.statementPeriod} (Verified)</strong>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Step 4: Final Proceed Button */}
                    <div className="kyc-final-action">
                      <button
                        type="button"
                        className="primary-action-button full-width-btn"
                        onClick={handleCompleteKycLogin}
                        disabled={!aadhaarVerifiedData}
                      >
                        {aadhaarVerifiedData 
                          ? `Proceed to Matching Schemes as ${aadhaarVerifiedData.name} ${bankVerifiedData ? '(Full KYC)' : ''}` 
                          : "Verify Aadhaar to Continue"}
                      </button>
                      <button
                        type="button"
                        className="ghost-text-btn"
                        onClick={onGuestAccess}
                      >
                        Skip verification and explore as guest
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Basic Mobile Flow */
                  <form onSubmit={handleMobileSubmit} className="auth-form">
                    <div className="form-field-group">
                      <label htmlFor="auth-citizen-name">Your Full Name</label>
                      <input
                        id="auth-citizen-name"
                        type="text"
                        className="portal-input"
                        placeholder="e.g. Ramesh Kumar"
                        value={citizenName}
                        onChange={(e) => setCitizenName(e.target.value)}
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="auth-citizen-mobile">Mobile Number *</label>
                      <input
                        id="auth-citizen-mobile"
                        type="tel"
                        maxLength="10"
                        className="portal-input"
                        placeholder="10-digit mobile number"
                        value={citizenMobile}
                        onChange={(e) => setCitizenMobile(e.target.value)}
                        disabled={mobileOtpSent}
                        required
                      />
                    </div>

                    {mobileOtpSent && (
                      <div className="form-field-group otp-box">
                        <label htmlFor="auth-mobile-otp">Enter 4-Digit OTP (Use 1234)</label>
                        <input
                          id="auth-mobile-otp"
                          type="password"
                          maxLength="6"
                          className="portal-input"
                          placeholder="Enter OTP"
                          value={mobileOtp}
                          onChange={(e) => setMobileOtp(e.target.value)}
                          required
                        />
                      </div>
                    )}

                    <div className="form-actions-row">
                      <button type="submit" className="primary-action-button full-width-btn">
                        {mobileOtpSent ? "Verify OTP & Enter Citizen Portal" : "Send One-Time Password (OTP)"}
                      </button>
                      {mobileOtpSent && (
                        <button
                          type="button"
                          className="secondary-action-button full-width-btn"
                          onClick={() => setMobileOtpSent(false)}
                        >
                          Change Mobile Number
                        </button>
                      )}
                      <button
                        type="button"
                        className="ghost-text-btn"
                        onClick={onGuestAccess}
                      >
                        Continue as Guest Citizen without OTP
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              /* Official Login Form */
              <form onSubmit={handleOfficialSubmit} className="auth-form">
                <div className="form-section-title">
                  <h3>Government Official & CSC Terminal Login</h3>
                  <span>Authorized access for assisted citizen enrollment</span>
                </div>

                <div className="form-grid-2col">
                  <div className="form-field-group">
                    <label htmlFor="auth-officer-name">Official / Operator Full Name *</label>
                    <input
                      id="auth-officer-name"
                      type="text"
                      className="portal-input"
                      placeholder="e.g. Officer Rajesh Verma"
                      value={officerName}
                      onChange={(e) => setOfficerName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="auth-officer-id">Officer ID / CSC VLE Code *</label>
                    <input
                      id="auth-officer-id"
                      type="text"
                      className="portal-input"
                      placeholder="e.g. CSC-MH-411038"
                      value={officerId}
                      onChange={(e) => setOfficerId(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-grid-2col">
                  <div className="form-field-group">
                    <label htmlFor="auth-dept">Department / Authority</label>
                    <select
                      id="auth-dept"
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
                    <label htmlFor="auth-district">Assigned District / Block</label>
                    <input
                      id="auth-district"
                      type="text"
                      className="portal-input"
                      placeholder="e.g. Pune Rural, Maharashtra"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label htmlFor="auth-pin">Security PIN (Optional for Demo)</label>
                  <input
                    id="auth-pin"
                    type="password"
                    className="portal-input"
                    placeholder="Enter Security PIN"
                    value={officerPin}
                    onChange={(e) => setOfficerPin(e.target.value)}
                  />
                </div>

                <div className="form-actions-row">
                  <button type="submit" className="primary-action-button full-width-btn">
                    Access Official Intake Terminal
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="auth-footer-info">
            <span>Official Government Welfare Scheme Intelligence Engine • Free & Secure Public Service</span>
          </div>
        </div>
      </main>
    </div>
  );
}
