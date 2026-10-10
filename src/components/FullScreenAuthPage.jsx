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
  const [citizenVerificationMode, setCitizenVerificationMode] = useState('kyc'); // 'kyc' | 'mobile'

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

  // Citizen Quick Mobile State
  const [citizenName, setCitizenName] = useState('');
  const [citizenMobile, setCitizenMobile] = useState('');
  const [mobileOtpSent, setMobileOtpSent] = useState(false);
  const [mobileOtp, setMobileOtp] = useState('');

  // Official CSC Login State
  const [officerName, setOfficerName] = useState('');
  const [officerId, setOfficerId] = useState('');
  const [department, setDepartment] = useState('Common Service Center (CSC Desk)');
  const [district, setDistrict] = useState('Pune Rural');
  const [officerPin, setOfficerPin] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('7K9M2');

  const refreshCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let res = '';
    for (let i = 0; i < 5; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(res);
    setCaptchaInput('');
  };

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
      setPanError("Invalid PAN format. Standard format: ABCDE1234F (10 alphanumeric characters).");
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
      alert("Please complete Aadhaar e-KYC verification.");
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
    if (captchaInput.toUpperCase() !== captchaCode) {
      alert("Incorrect Security Captcha code. Please try again.");
      refreshCaptcha();
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
    <div className="fullscreen-auth-container classic-gov-auth">
      {/* Classic Top Utility Header */}
      <header className="auth-fullscreen-header">
        <div className="auth-header-inner">
          <div className="auth-brand-row">
            <div className="classic-emblem-badge small-emblem">
              <div className="emblem-inner">
                <span className="emblem-crest">UDYAMA</span>
                <span className="emblem-motto">सत्यमेव जयते</span>
              </div>
            </div>
            <div>
              <div className="auth-title-line">
                <h1 className="auth-brand-title">UDYAMA (उद्यम)</h1>
                <span className="gov-india-badge">Government of India</span>
              </div>
              <p className="auth-brand-subtitle">
                National Portal for Citizen Welfare Schemes, e-KYC Verification & Assisted CSC Intake
              </p>
            </div>
          </div>

          <button 
            type="button" 
            className="guest-skip-btn classic-outline-btn"
            onClick={onGuestAccess}
          >
            Explore Welfare Directory as Guest →
          </button>
        </div>
      </header>

      {/* Main Dual-Column Content */}
      <main className="auth-fullscreen-body">
        <div className="auth-two-column-layout">
          {/* Left Column: Official Information & Advisory */}
          <aside className="auth-sidebar-info">
            <div className="classic-info-box">
              <div className="info-box-header">
                <span className="info-header-icon">⚖️</span>
                <h4>Official Notice & Disclaimer</h4>
              </div>
              <p className="info-box-text">
                This is the official Government of India welfare scheme discovery and automated eligibility platform. All citizens are entitled to free scheme matching without agent commissions.
              </p>
              <div className="it-act-banner">
                <span>Security Notice: Unauthorized access or data tampering is punishable under Sections 43 & 66 of the Information Technology Act 2000.</span>
              </div>
            </div>

            <div className="classic-info-box">
              <div className="info-box-header">
                <span className="info-header-icon">📑</span>
                <h4>Mandatory e-KYC Documents</h4>
              </div>
              <ul className="info-steps-list">
                <li>
                  <strong>1. Aadhaar Card (UIDAI):</strong>
                  <span>Auto-validates age, legal name, gender, and residential state.</span>
                </li>
                <li>
                  <strong>2. PAN Card (ITD):</strong>
                  <span>Verifies income tax assessment bracket & low-income non-taxpayer status.</span>
                </li>
                <li>
                  <strong>3. Bank Statement & Account:</strong>
                  <span>Validates DBT transfer NPCI linkage and audited annual cash inflow.</span>
                </li>
              </ul>
            </div>

            <div className="classic-info-box helpline-box">
              <div className="info-box-header">
                <span className="info-header-icon">📞</span>
                <h4>National Helpdesk</h4>
              </div>
              <div className="helpline-details">
                <div>Toll Free: <strong>1800-115-555</strong></div>
                <div>e-KYC Support: <strong>14444</strong></div>
                <div>Email: <strong>helpdesk-udyama@gov.in</strong></div>
              </div>
            </div>
          </aside>

          {/* Right Column: Portal Selection & Login Form */}
          <section className="auth-main-panel">
            {/* Dual Portal Tab Switcher */}
            <div className="classic-portal-tabs" role="tablist">
              <button 
                type="button"
                role="tab"
                aria-selected={selectedRole === 'citizen'}
                className={`portal-tab ${selectedRole === 'citizen' ? 'active' : ''}`}
                onClick={() => setSelectedRole('citizen')}
              >
                <span className="tab-title">Citizen Self-Service (e-KYC)</span>
                <span className="tab-subtitle">For Individual Applicants</span>
              </button>

              <button 
                type="button"
                role="tab"
                aria-selected={selectedRole === 'official'}
                className={`portal-tab ${selectedRole === 'official' ? 'active' : ''}`}
                onClick={() => setSelectedRole('official')}
              >
                <span className="tab-title">CSC / Official Desk</span>
                <span className="tab-subtitle">For Authorized Field Agents</span>
              </button>
            </div>

            {/* Portal Content Container */}
            <div className="classic-form-frame">
              {selectedRole === 'citizen' ? (
                <div className="citizen-auth-content">
                  <div className="form-sub-header">
                    <h3>Citizen Identity & e-KYC Verification</h3>
                    <p>Complete 3-step verification to automatically seed your verified profile into scheme matching algorithms.</p>
                  </div>

                  {/* Mode Selector */}
                  <div className="sub-mode-toggle">
                    <button
                      type="button"
                      className={`sub-mode-btn ${citizenVerificationMode === 'kyc' ? 'active' : ''}`}
                      onClick={() => setCitizenVerificationMode('kyc')}
                    >
                      Aadhaar, PAN & Bank Statement e-KYC (Recommended)
                    </button>
                    <button
                      type="button"
                      className={`sub-mode-btn ${citizenVerificationMode === 'mobile' ? 'active' : ''}`}
                      onClick={() => setCitizenVerificationMode('mobile')}
                    >
                      Quick Mobile OTP Sign-In
                    </button>
                  </div>

                  {citizenVerificationMode === 'kyc' ? (
                    <div className="kyc-stepper-wrapper">
                      {/* Step 1: Aadhaar */}
                      <fieldset className={`kyc-fieldset ${aadhaarVerifiedData ? 'completed' : 'active'}`}>
                        <legend className="kyc-legend">
                          <span className="legend-num">1</span>
                          <span>Aadhaar UIDAI e-KYC Verification</span>
                          {aadhaarVerifiedData && <span className="verified-tag">✓ VERIFIED</span>}
                        </legend>

                        {!aadhaarVerifiedData ? (
                          <div className="fieldset-content">
                            <div className="form-field-group">
                              <label htmlFor="aadhaar-input-box">Enter 12-Digit Aadhaar Number *</label>
                              <div className="input-with-button-row">
                                <input
                                  id="aadhaar-input-box"
                                  type="text"
                                  className="portal-input classic-input"
                                  placeholder="XXXX XXXX XXXX"
                                  value={aadhaarInput}
                                  onChange={handleAadhaarChange}
                                  disabled={aadhaarOtpSent}
                                />
                                {!aadhaarOtpSent ? (
                                  <button
                                    type="button"
                                    className="classic-action-btn secondary"
                                    onClick={handleSendAadhaarOtp}
                                  >
                                    Get UIDAI OTP
                                  </button>
                                ) : (
                                  <button
                                    type="button"
                                    className="classic-action-btn secondary"
                                    onClick={() => {
                                      setAadhaarOtpSent(false);
                                      setAadhaarOtp('');
                                    }}
                                  >
                                    Change Number
                                  </button>
                                )}
                              </div>
                            </div>

                            {aadhaarOtpSent && (
                              <div className="form-field-group otp-input-block">
                                <label htmlFor="aadhaar-otp-box">
                                  Enter OTP sent to registered Aadhaar mobile <strong>(Demo OTP: 1234)</strong>
                                </label>
                                <div className="input-with-button-row">
                                  <input
                                    id="aadhaar-otp-box"
                                    type="password"
                                    maxLength="6"
                                    className="portal-input classic-input"
                                    placeholder="Enter 4 or 6-digit OTP"
                                    value={aadhaarOtp}
                                    onChange={(e) => setAadhaarOtp(e.target.value)}
                                  />
                                  <button
                                    type="button"
                                    className="classic-action-btn primary"
                                    onClick={handleVerifyAadhaar}
                                    disabled={isVerifyingAadhaar}
                                  >
                                    {isVerifyingAadhaar ? "Verifying..." : "Verify e-KYC OTP"}
                                  </button>
                                </div>
                              </div>
                            )}

                            {aadhaarError && (
                              <div className="classic-alert error">{aadhaarError}</div>
                            )}
                          </div>
                        ) : (
                          <div className="verified-table-box">
                            <table className="classic-data-table">
                              <tbody>
                                <tr>
                                  <td className="table-label">Full Name:</td>
                                  <td className="table-value"><strong>{aadhaarVerifiedData.name}</strong></td>
                                  <td className="table-label">Age & Gender:</td>
                                  <td className="table-value">{aadhaarVerifiedData.age} Years ({aadhaarVerifiedData.gender})</td>
                                </tr>
                                <tr>
                                  <td className="table-label">Aadhaar Reference:</td>
                                  <td className="table-value">{aadhaarVerifiedData.aadhaarMasked}</td>
                                  <td className="table-label">Residential State:</td>
                                  <td className="table-value">{aadhaarVerifiedData.state} ({aadhaarVerifiedData.district})</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        )}
                      </fieldset>

                      {/* Step 2: PAN Card */}
                      <fieldset className={`kyc-fieldset ${panVerifiedData ? 'completed' : (aadhaarVerifiedData ? 'active' : 'disabled')}`}>
                        <legend className="kyc-legend">
                          <span className="legend-num">2</span>
                          <span>PAN Card Tax & Income Category</span>
                          {panVerifiedData && <span className="verified-tag">✓ VERIFIED</span>}
                        </legend>

                        {aadhaarVerifiedData && !panVerifiedData && (
                          <div className="fieldset-content">
                            <div className="form-field-group">
                              <label htmlFor="pan-input-box">Enter 10-Digit PAN Number (e.g. ABCDE1234F)</label>
                              <div className="input-with-button-row">
                                <input
                                  id="pan-input-box"
                                  type="text"
                                  maxLength="10"
                                  className="portal-input classic-input uppercase-text"
                                  placeholder="ABCDE1234F"
                                  value={panInput}
                                  onChange={(e) => {
                                    setPanInput(e.target.value.toUpperCase());
                                    setPanError('');
                                  }}
                                />
                                <button
                                  type="button"
                                  className="classic-action-btn primary"
                                  onClick={handleVerifyPan}
                                  disabled={isVerifyingPan}
                                >
                                  {isVerifyingPan ? "Verifying..." : "Verify PAN"}
                                </button>
                              </div>
                            </div>

                            {panError && (
                              <div className="classic-alert error">{panError}</div>
                            )}
                          </div>
                        )}

                        {panVerifiedData && (
                          <div className="verified-table-box">
                            <table className="classic-data-table">
                              <tbody>
                                <tr>
                                  <td className="table-label">PAN Number:</td>
                                  <td className="table-value"><strong>{panVerifiedData.pan}</strong></td>
                                  <td className="table-label">Tax Assessment:</td>
                                  <td className="table-value"><strong>{panVerifiedData.taxCategory}</strong> ({panVerifiedData.verificationStatus})</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        )}
                      </fieldset>

                      {/* Step 3: Bank Account & Statement */}
                      <fieldset className={`kyc-fieldset ${bankVerifiedData ? 'completed' : (aadhaarVerifiedData ? 'active' : 'disabled')}`}>
                        <legend className="kyc-legend">
                          <span className="legend-num">3</span>
                          <span>Bank Account & 6-Month Inflow Statement</span>
                          {bankVerifiedData && <span className="verified-tag">✓ VERIFIED</span>}
                        </legend>

                        {aadhaarVerifiedData && !bankVerifiedData && (
                          <div className="fieldset-content">
                            <div className="form-grid-2col">
                              <div className="form-field-group">
                                <label htmlFor="bank-select-box">Select Bank *</label>
                                <select
                                  id="bank-select-box"
                                  className="portal-input classic-input"
                                  value={bankName}
                                  onChange={(e) => setBankName(e.target.value)}
                                >
                                  {MAJOR_BANKS.map(b => (
                                    <option key={b} value={b}>{b}</option>
                                  ))}
                                </select>
                              </div>

                              <div className="form-field-group">
                                <label htmlFor="ifsc-input-box">Bank Branch IFSC Code *</label>
                                <input
                                  id="ifsc-input-box"
                                  type="text"
                                  maxLength="11"
                                  className="portal-input classic-input uppercase-text"
                                  placeholder="SBIN0004521"
                                  value={ifscCode}
                                  onChange={(e) => setIfscCode(e.target.value.toUpperCase())}
                                />
                              </div>
                            </div>

                            <div className="form-grid-2col">
                              <div className="form-field-group">
                                <label htmlFor="account-num-box">Bank Account Number *</label>
                                <input
                                  id="account-num-box"
                                  type="password"
                                  className="portal-input classic-input"
                                  placeholder="e.g. 30894210984"
                                  value={accountNumber}
                                  onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ''))}
                                  required
                                />
                              </div>

                              <div className="form-field-group">
                                <label htmlFor="statement-upload">Upload 6-Month Bank Statement (PDF - Optional)</label>
                                <input
                                  id="statement-upload"
                                  type="file"
                                  accept=".pdf,.csv"
                                  className="portal-input classic-input file-input"
                                  onChange={(e) => setStatementFile(e.target.files[0])}
                                />
                              </div>
                            </div>

                            <div className="form-actions-inline">
                              <button
                                type="button"
                                className="classic-action-btn primary"
                                onClick={handleVerifyBankStatement}
                                disabled={isVerifyingBank}
                              >
                                {isVerifyingBank ? "Analyzing Statement & DBT Status..." : "Audit Bank Statement & DBT Status"}
                              </button>
                            </div>

                            {bankError && (
                              <div className="classic-alert error">{bankError}</div>
                            )}
                          </div>
                        )}

                        {bankVerifiedData && (
                          <div className="verified-table-box">
                            <table className="classic-data-table">
                              <tbody>
                                <tr>
                                  <td className="table-label">Bank / Account:</td>
                                  <td className="table-value"><strong>{bankVerifiedData.bankName}</strong> ({bankVerifiedData.accountMasked})</td>
                                  <td className="table-label">DBT NPCI Status:</td>
                                  <td className="table-value"><strong style={{ color: '#15803d' }}>{bankVerifiedData.dbtStatus}</strong></td>
                                </tr>
                                <tr>
                                  <td className="table-label">Assessed Inflow:</td>
                                  <td className="table-value"><strong>₹{(bankVerifiedData.assessedAnnualIncome / 100000).toFixed(2)} Lakhs/yr</strong></td>
                                  <td className="table-label">Monthly Average:</td>
                                  <td className="table-value">{bankVerifiedData.avgMonthlyInflow}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        )}
                      </fieldset>

                      {/* Final Submit / Proceed Action */}
                      <div className="kyc-submit-bar">
                        <button
                          type="button"
                          className="classic-submit-btn"
                          onClick={handleCompleteKycLogin}
                          disabled={!aadhaarVerifiedData}
                        >
                          {aadhaarVerifiedData 
                            ? `Proceed to Matching Schemes as ${aadhaarVerifiedData.name} →` 
                            : "Verify Aadhaar to Proceed"}
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Basic Mobile Flow */
                    <form onSubmit={handleMobileSubmit} className="classic-form">
                      <div className="form-field-group">
                        <label htmlFor="mobile-fullname">Applicant Full Name *</label>
                        <input
                          id="mobile-fullname"
                          type="text"
                          className="portal-input classic-input"
                          placeholder="e.g. Ramesh Kumar"
                          value={citizenName}
                          onChange={(e) => setCitizenName(e.target.value)}
                        />
                      </div>

                      <div className="form-field-group">
                        <label htmlFor="mobile-num">10-Digit Mobile Number *</label>
                        <input
                          id="mobile-num"
                          type="tel"
                          maxLength="10"
                          className="portal-input classic-input"
                          placeholder="9876543210"
                          value={citizenMobile}
                          onChange={(e) => setCitizenMobile(e.target.value)}
                          disabled={mobileOtpSent}
                          required
                        />
                      </div>

                      {mobileOtpSent && (
                        <div className="form-field-group otp-input-block">
                          <label htmlFor="mobile-otp-val">Enter 4-Digit OTP (Demo OTP: 1234) *</label>
                          <input
                            id="mobile-otp-val"
                            type="password"
                            maxLength="6"
                            className="portal-input classic-input"
                            placeholder="1234"
                            value={mobileOtp}
                            onChange={(e) => setMobileOtp(e.target.value)}
                            required
                          />
                        </div>
                      )}

                      <div className="form-actions-inline">
                        <button type="submit" className="classic-submit-btn">
                          {mobileOtpSent ? "Verify OTP & Enter Citizen Portal" : "Send One-Time Password (OTP)"}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              ) : (
                /* Official CSC Operator Form */
                <form onSubmit={handleOfficialSubmit} className="official-auth-form">
                  <div className="form-sub-header">
                    <h3>Common Service Center (CSC) & Official Desk</h3>
                    <p>Enter authorized credentials to register citizens and issue official welfare intake dockets.</p>
                  </div>

                  <div className="form-grid-2col">
                    <div className="form-field-group">
                      <label htmlFor="officer-name">Authorized Official Name *</label>
                      <input
                        id="officer-name"
                        type="text"
                        className="portal-input classic-input"
                        placeholder="e.g. S. K. Deshmukh"
                        value={officerName}
                        onChange={(e) => setOfficerName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="officer-id">Operator / CSC VLE ID *</label>
                      <input
                        id="officer-id"
                        type="text"
                        className="portal-input classic-input"
                        placeholder="e.g. CSC-MH-411038"
                        value={officerId}
                        onChange={(e) => setOfficerId(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-grid-2col">
                    <div className="form-field-group">
                      <label htmlFor="officer-dept">Department / Center</label>
                      <input
                        id="officer-dept"
                        type="text"
                        className="portal-input classic-input"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="officer-dist">District / Tehsil Jurisdiction</label>
                      <input
                        id="officer-dist"
                        type="text"
                        className="portal-input classic-input"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="officer-pin">Security PIN (6 Digits)</label>
                    <input
                      id="officer-pin"
                      type="password"
                      maxLength="6"
                      className="portal-input classic-input"
                      placeholder="••••••"
                      value={officerPin}
                      onChange={(e) => setOfficerPin(e.target.value)}
                    />
                  </div>

                  {/* Security Captcha Box */}
                  <div className="captcha-verification-box">
                    <div className="captcha-display-row">
                      <div className="captcha-canvas" title="Security Captcha">
                        <span className="captcha-code-text">{captchaCode}</span>
                      </div>
                      <button 
                        type="button" 
                        className="refresh-captcha-btn"
                        onClick={refreshCaptcha}
                        title="Generate New Captcha Code"
                      >
                        ↻ Refresh
                      </button>
                    </div>
                    <div className="captcha-input-wrap">
                      <label htmlFor="captcha-input">Enter Captcha Code Above *</label>
                      <input
                        id="captcha-input"
                        type="text"
                        className="portal-input classic-input uppercase-text"
                        placeholder="Type characters"
                        value={captchaInput}
                        onChange={(e) => setCaptchaInput(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-actions-inline">
                    <button type="submit" className="classic-submit-btn">
                      Authenticate & Access CSC Terminal →
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>
        </div>
      </main>

      {/* Classic Government Footer */}
      <footer className="auth-footer-classic">
        <div className="auth-footer-inner">
          <p>
            National Informatics Centre (NIC) • Ministry of Electronics & IT • Government of India.
          </p>
          <p className="auth-footer-sub">
            All data processed in compliance with the Digital Personal Data Protection (DPDP) Act 2023.
          </p>
        </div>
      </footer>
    </div>
  );
}
