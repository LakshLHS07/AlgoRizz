import React, { useState, useEffect } from 'react';
import { 
  validateAadhaarFormat, 
  validatePanFormat, 
  validateIfscFormat,
  verifyAadhaarViaDigiLocker, 
  verifyPanCard, 
  verifyBankStatement,
  sendMobileOtp,
  verifyMobileOtp,
  MAJOR_BANKS 
} from '../utils/kycVerification';

import { INDIAN_LANGUAGES, getTranslation } from '../utils/translations';
import { translateDOM } from '../utils/domTranslator';

export function FullScreenAuthPage({ 
  onLogin, 
  onGuestAccess, 
  initialRole = 'citizen',
  selectedLanguage = 'en',
  onChangeLanguage,
  onOpenLanguageModal
}) {
  const t = getTranslation(selectedLanguage);
  const currentLangObj = INDIAN_LANGUAGES.find(l => l.code === selectedLanguage) || INDIAN_LANGUAGES[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      translateDOM(document.body, selectedLanguage);
    }, 50);
    return () => clearTimeout(timer);
  }, [selectedLanguage]);
  const [selectedRole, setSelectedRole] = useState(initialRole);
  const [citizenVerificationMode, setCitizenVerificationMode] = useState('kyc'); // 'kyc' | 'mobile'

  // Step 1: Aadhaar State (DigiLocker direct verification)
  const [aadhaarInput, setAadhaarInput] = useState('');
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

  // Citizen Quick Mobile State (Pre-seeded with demo citizen 9818886998)
  const [citizenName, setCitizenName] = useState('Lakshya Sharma');
  const [citizenMobile, setCitizenMobile] = useState('9818886998');
  const [mobileOtpSent, setMobileOtpSent] = useState(false);
  const [mobileOtp, setMobileOtp] = useState('');
  const [dispatchedSmsAlert, setDispatchedSmsAlert] = useState(null);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [mobileError, setMobileError] = useState('');

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

  const handleVerifyAadhaarDigiLocker = async () => {
    const raw = aadhaarInput.replace(/\s/g, '');
    if (!validateAadhaarFormat(raw)) {
      setAadhaarError("Please enter a valid 12-digit Aadhaar number.");
      return;
    }
    setIsVerifyingAadhaar(true);
    setAadhaarError('');

    const res = await verifyAadhaarViaDigiLocker(aadhaarInput);
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

  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    setMobileError('');

    if (!mobileOtpSent) {
      const digits = citizenMobile.replace(/\D/g, '');
      if (digits.length !== 10) {
        setMobileError("Please enter a valid 10-digit mobile number.");
        return;
      }
      setIsSendingOtp(true);
      const res = await sendMobileOtp(digits);
      setIsSendingOtp(false);

      if (res.success) {
        setMobileOtpSent(true);
        const code = res.otp || (digits === "9818886998" ? "482916" : "1234");
        setDispatchedSmsAlert({
          sender: "VK-GOVOTP",
          phone: digits,
          otp: code,
          message: `Your UDYAMA Portal authentication OTP is ${code}. Valid for 10 mins. Do not share.`
        });
      } else {
        setMobileError(res.error || "Failed to dispatch OTP. Please try again.");
      }
    } else {
      if (!mobileOtp) {
        setMobileError("Please enter the OTP received via SMS.");
        return;
      }
      setIsVerifyingOtp(true);
      const res = await verifyMobileOtp(citizenMobile, mobileOtp);
      setIsVerifyingOtp(false);

      if (res.success && res.profile) {
        onLogin(res.profile);
      } else {
        setMobileError(res.error || "Invalid OTP. Please check the simulated SMS alert.");
      }
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
            <div className="portal-logo-slot" aria-label="Udyama Official Portal Logo" title="Udyama Official Logo">
              <img 
                src="/udyama-logo.png" 
                alt="Udyama Official Portal Logo" 
                className="portal-logo-img" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/udyama-logo-raw.png';
                }}
              />
            </div>
            <div>
              <div className="auth-title-line">
                <h1 className="auth-brand-title">UDYAMA (उद्यम)</h1>
              </div>
              <p className="auth-brand-subtitle">{t.noCitizenLeftBehind || "No Citizen Left Behind"}</p>
            </div>
          </div>

          <div className="auth-header-right-actions">
            {/* Language Selection Modal Trigger */}
            <button
              type="button"
              className="ribbon-lang-modal-btn"
              onClick={onOpenLanguageModal}
              title="Select Language (22 Indian Languages)"
            >
              <span className="lang-code-tag">{currentLangObj.code.toUpperCase()}</span>
              <span className="lang-active-label">{currentLangObj.nativeName}</span>
              <span className="lang-chevron">▼</span>
            </button>

            <button 
              type="button" 
              className="guest-skip-btn classic-outline-btn"
              onClick={onGuestAccess}
            >
              {t.exploreGuest || "Explore Welfare Directory as Guest →"}
            </button>
          </div>
        </div>
      </header>

      {/* Main Dual-Column Content */}
      <main className="auth-fullscreen-body">
        <div className="auth-two-column-layout">
          {/* Left Column: Official Information & Advisory */}
          <aside className="auth-sidebar-info">
            <div className="classic-info-box">
              <div className="info-box-header">
                <h4>{t.citizenGuidelines || "Official Notice & Disclaimer"}</h4>
              </div>
              <p className="info-box-text">
                {t.guidelineIntro || "This is the official welfare scheme discovery and automated eligibility platform. All citizens are entitled to free scheme matching without agent commissions."}
              </p>
              <div className="it-act-banner">
                <span>{t.itActNotice || "Security Notice: Unauthorized access or data tampering is punishable under Information Technology Act."}</span>
              </div>
            </div>

            <div className="classic-info-box">
              <div className="info-box-header">
                <h4>{t.whyVerify || "Mandatory e-KYC Documents"}</h4>
              </div>
              <ul className="info-steps-list">
                <li>
                  <strong>{t.step1Title || "1. Aadhaar Card (UIDAI):"}</strong>
                  <span>{t.step1Desc || "Auto-validates age, legal name, gender, and residential state."}</span>
                </li>
                <li>
                  <strong>{t.step2Title || "2. PAN Card (ITD):"}</strong>
                  <span>{t.step2Desc || "Verifies income tax assessment bracket & low-income non-taxpayer status."}</span>
                </li>
                <li>
                  <strong>{t.step3Title || "3. Bank Statement & Account:"}</strong>
                  <span>{t.step3Desc || "Validates DBT transfer NPCI linkage and audited annual cash inflow."}</span>
                </li>
              </ul>
            </div>

            <div className="classic-info-box helpline-box">
              <div className="info-box-header">
                <h4>{t.helpdeskTitle || "National Helpdesk"}</h4>
              </div>
              <div className="helpline-details">
                <div>{t.tollFreeLabel || "Toll Free:"} <strong>1800-115-555</strong></div>
                <div>{t.ekycSupportLabel || "e-KYC Support:"} <strong>14444</strong></div>
                <div>{t.emailLabel || "Email:"} <strong>helpdesk-udyama@gov.in</strong></div>
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
                <span className="tab-title">{t.citizenTab || "Citizen Self-Service (e-KYC)"}</span>
                <span className="tab-subtitle">{t.citizenTabSub || "For Individual Applicants"}</span>
              </button>

              <button 
                type="button"
                role="tab"
                aria-selected={selectedRole === 'official'}
                className={`portal-tab ${selectedRole === 'official' ? 'active' : ''}`}
                onClick={() => setSelectedRole('official')}
              >
                <span className="tab-title">{t.cscTab || "CSC / Official Desk"}</span>
                <span className="tab-subtitle">{t.cscTabSub || "For Authorized Field Agents"}</span>
              </button>
            </div>

            {/* Portal Content Container */}
            <div className="classic-form-frame">
              {selectedRole === 'citizen' ? (
                <div className="citizen-auth-content">
                  <div className="form-sub-header">
                    <h3>{t.citizenHeaderTitle || "Citizen Identity & e-KYC Verification"}</h3>
                    <p>{t.citizenHeaderDesc || "Complete 3-step verification to automatically seed your verified profile into scheme matching algorithms."}</p>
                  </div>

                  {/* Mode Selector */}
                  <div className="sub-mode-toggle">
                    <button
                      type="button"
                      className={`sub-mode-btn ${citizenVerificationMode === 'kyc' ? 'active' : ''}`}
                      onClick={() => setCitizenVerificationMode('kyc')}
                    >
                      {t.kycModeBtn || "Aadhaar, PAN & Bank Statement e-KYC (Recommended)"}
                    </button>
                    <button
                      type="button"
                      className={`sub-mode-btn ${citizenVerificationMode === 'mobile' ? 'active' : ''}`}
                      onClick={() => setCitizenVerificationMode('mobile')}
                    >
                      {t.mobileModeBtn || "Quick Mobile OTP Sign-In"}
                    </button>
                  </div>

                  {citizenVerificationMode === 'kyc' ? (
                    <div className="kyc-stepper-wrapper">
                      {/* Step 1: Aadhaar via DigiLocker */}
                      <fieldset className={`kyc-fieldset ${aadhaarVerifiedData ? 'completed' : 'active'}`}>
                        <legend className="kyc-legend">
                          <span className="legend-num">1</span>
                          <span>{t.step1AadhaarLegend || "Aadhaar DigiLocker Verification"}</span>
                          {aadhaarVerifiedData && <span className="verified-tag">{t.digilockerVerifiedBadge || "DIGILOCKER VERIFIED"}</span>}
                        </legend>

                        {!aadhaarVerifiedData ? (
                          <div className="fieldset-content">
                            <div className="form-field-group">
                              <label htmlFor="aadhaar-input-box">{t.enter12DigitAadhaar || "Enter 12-Digit Aadhaar Number *"}</label>
                              <div className="input-with-button-row">
                                <input
                                  id="aadhaar-input-box"
                                  type="text"
                                  className="portal-input classic-input"
                                  placeholder="XXXX XXXX XXXX"
                                  value={aadhaarInput}
                                  onChange={handleAadhaarChange}
                                  disabled={isVerifyingAadhaar}
                                />
                                <button
                                  type="button"
                                  className="classic-action-btn primary"
                                  onClick={handleVerifyAadhaarDigiLocker}
                                  disabled={isVerifyingAadhaar}
                                >
                                  {isVerifyingAadhaar ? (t.connectingDigilocker || "Connecting DigiLocker...") : (t.verifyDigilockerBtn || "Verify via DigiLocker")}
                                </button>
                              </div>
                              <div className="demo-chip-row">
                                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>{t.demoAadhaarLabel || "Demo Aadhaar:"}</span>
                                <button
                                  type="button"
                                  className="demo-chip-btn"
                                  onClick={() => {
                                    setAadhaarInput("9818 8869 9812");
                                    setAadhaarError("");
                                  }}
                                >
                                  {t.useDemoAadhaar || "Use 9818 8869 9812 (Lakshya Sharma)"}
                                </button>
                              </div>
                              <span className="field-hint-text">
                                {t.digilockerHint || "Verified directly via DigiLocker National Identity Repository. No SMS OTP required on webpage."}
                              </span>
                            </div>

                            {aadhaarError && (
                              <div className="classic-alert error">{aadhaarError}</div>
                            )}
                          </div>
                        ) : (
                          <div className="verified-table-box">
                            <table className="classic-data-table">
                              <tbody>
                                <tr>
                                  <td className="table-label">{t.fullNameLabel || "Full Name:"}</td>
                                  <td className="table-value"><strong>{aadhaarVerifiedData.name}</strong></td>
                                  <td className="table-label">{t.ageDobLabel || "Age & DOB:"}</td>
                                  <td className="table-value">{aadhaarVerifiedData.age} {t.years || "Years"} ({aadhaarVerifiedData.dob})</td>
                                </tr>
                                <tr>
                                  <td className="table-label">{t.aadhaarRefLabel || "Aadhaar Reference:"}</td>
                                  <td className="table-value">{aadhaarVerifiedData.aadhaarMasked}</td>
                                  <td className="table-label">{t.residentialStateLabel || "Residential State:"}</td>
                                  <td className="table-value">{aadhaarVerifiedData.state} ({aadhaarVerifiedData.district})</td>
                                </tr>
                                <tr>
                                  <td className="table-label">{t.digilockerDocUriLabel || "DigiLocker Doc URI:"}</td>
                                  <td className="table-value" colSpan="3">
                                    <span style={{ fontFamily: 'monospace', color: '#047857' }}>
                                      {aadhaarVerifiedData.digilockerUri || `in.gov.uidai-adhr-${aadhaarInput.replace(/\s/g, '').slice(-4)}`}
                                    </span>
                                    <span style={{ marginLeft: '0.75rem', fontSize: '0.75rem', color: '#64748b' }}>
                                      {t.digilockerAuthenticVerified || "(DigiLocker Authentic Registry Verified)"}
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div style={{ marginTop: '0.65rem', textAlign: 'right' }}>
                              <button
                                type="button"
                                className="classic-action-btn secondary"
                                style={{ padding: '0.3rem 0.75rem', fontSize: '0.75rem' }}
                                onClick={() => {
                                  setAadhaarVerifiedData(null);
                                  setAadhaarInput('');
                                }}
                              >
                                {t.reverifyAadhaar || "Re-verify Aadhaar"}
                              </button>
                            </div>
                          </div>
                        )}
                      </fieldset>

                      {/* Step 2: PAN Card */}
                      <fieldset className={`kyc-fieldset ${panVerifiedData ? 'completed' : (aadhaarVerifiedData ? 'active' : 'disabled')}`}>
                        <legend className="kyc-legend">
                          <span className="legend-num">2</span>
                          <span>{t.step2PanLegend || "PAN Card Tax & Income Category"}</span>
                          {panVerifiedData && <span className="verified-tag">{t.verifiedBadge || "VERIFIED"}</span>}
                        </legend>

                        {aadhaarVerifiedData && !panVerifiedData && (
                          <div className="fieldset-content">
                            <div className="form-field-group">
                              <label htmlFor="pan-input-box">{t.enter10DigitPan || "Enter 10-Digit PAN Number (e.g. ABCDE1234F)"}</label>
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
                                  {isVerifyingPan ? (t.verifyingPan || "Verifying...") : (t.verifyPanBtn || "Verify PAN")}
                                </button>
                              </div>
                              <div className="demo-chip-row">
                                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>{t.demoPanLabel || "Demo PAN:"}</span>
                                <button
                                  type="button"
                                  className="demo-chip-btn"
                                  onClick={() => {
                                    setPanInput("ABCDE9818F");
                                    setPanError("");
                                  }}
                                >
                                  {t.useDemoPan || "Use ABCDE9818F (NSDL Verified)"}
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
                                  <td className="table-label">{t.panNumberLabel || "PAN Number:"}</td>
                                  <td className="table-value"><strong>{panVerifiedData.pan}</strong></td>
                                  <td className="table-label">{t.taxAssessmentLabel || "Tax Assessment:"}</td>
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
                          <span>{t.step3BankLegend || "Bank Account & 6-Month Inflow Statement"}</span>
                          {bankVerifiedData && <span className="verified-tag">VERIFIED</span>}
                        </legend>

                        {aadhaarVerifiedData && !bankVerifiedData && (
                          <div className="fieldset-content">
                            <div className="form-grid-2col">
                              <div className="form-field-group">
                                <label htmlFor="bank-select-box">{t.selectBankLabel || "Select Bank *"}</label>
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
                                <label htmlFor="ifsc-input-box">{t.ifscLabel || "Bank Branch IFSC Code *"}</label>
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
                                <label htmlFor="account-num-box">{t.accountNumberLabel || "Bank Account Number *"}</label>
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
                                <label htmlFor="statement-upload">{t.uploadStatementLabel || "Upload 6-Month Bank Statement (PDF - Optional)"}</label>
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
                                {isVerifyingBank ? (t.auditingBank || "Analyzing Statement & DBT Status...") : (t.auditBankBtn || "Audit Bank Statement & DBT Status")}
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
                                  <td className="table-label">{t.bankAccountLabel || "Bank / Account:"}</td>
                                  <td className="table-value"><strong>{bankVerifiedData.bankName}</strong> ({bankVerifiedData.accountMasked})</td>
                                  <td className="table-label">{t.dbtNpciStatusLabel || "DBT NPCI Status:"}</td>
                                  <td className="table-value"><strong style={{ color: '#15803d' }}>{bankVerifiedData.dbtStatus}</strong></td>
                                </tr>
                                <tr>
                                  <td className="table-label">{t.assessedInflowLabel || "Assessed Inflow:"}</td>
                                  <td className="table-value"><strong>₹{(bankVerifiedData.assessedAnnualIncome / 100000).toFixed(2)} {t.lakhsPerYr || "Lakhs/yr"}</strong></td>
                                  <td className="table-label">{t.monthlyAverageLabel || "Monthly Average:"}</td>
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
                            : (t.verifyAadhaarToProceed || "Verify Aadhaar to Proceed")}
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Basic Mobile Flow with Demo SMS Dispatch */
                    <form onSubmit={handleMobileSubmit} className="classic-form">
                      <div className="demo-badge-banner">
                        <div>
                          {t.demoLoadedBanner || "Demo Database Record Loaded: Verified citizen profile for Mobile +91 9818886998 (Linked to Aadhaar 9818 8869 9812 and PAN ABCDE9818F)."}
                        </div>
                        <div style={{ fontSize: '0.73rem', color: '#166534' }}>
                          {t.demoClickSms || "Click Send One-Time Password (OTP) to simulate official SMS dispatch to 9818886998."}
                        </div>
                      </div>

                      {dispatchedSmsAlert && (
                        <div className="sms-dispatch-toast">
                          <div className="sms-header-line">
                            <span>{t.smsGatewayHeader || "Official SMS Gateway"} ({dispatchedSmsAlert.sender})</span>
                            <span>{t.deliveredTo || "Delivered to:"} +91 {dispatchedSmsAlert.phone}</span>
                          </div>
                          <div className="sms-body-text">
                            {dispatchedSmsAlert.message}
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <button
                              type="button"
                              className="sms-autofill-btn"
                              onClick={() => {
                                setMobileOtp(dispatchedSmsAlert.otp);
                                setMobileError('');
                              }}
                            >
                              {t.clickAutoFill || "Click to Auto-Fill OTP:"} {dispatchedSmsAlert.otp}
                            </button>
                            <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{t.expiresIn10 || "Expires in 10 minutes"}</span>
                          </div>
                        </div>
                      )}

                      <div className="form-field-group">
                        <label htmlFor="mobile-fullname">{t.applicantFullName || "Applicant Full Name *"}</label>
                        <input
                          id="mobile-fullname"
                          type="text"
                          className="portal-input classic-input"
                          placeholder="e.g. Lakshya Sharma"
                          value={citizenName}
                          onChange={(e) => setCitizenName(e.target.value)}
                        />
                      </div>

                      <div className="form-field-group">
                        <label htmlFor="mobile-num">{t.tenDigitMobile || "10-Digit Mobile Number *"}</label>
                        <div className="input-with-button-row">
                          <input
                            id="mobile-num"
                            type="tel"
                            maxLength="10"
                            className="portal-input classic-input"
                            placeholder="9818886998"
                            value={citizenMobile}
                            onChange={(e) => {
                              setCitizenMobile(e.target.value.replace(/\D/g, ''));
                              setMobileError('');
                            }}
                            disabled={mobileOtpSent}
                            required
                          />
                          {!mobileOtpSent && (
                            <button
                              type="button"
                              className="demo-chip-btn"
                              style={{ whiteSpace: 'nowrap' }}
                              onClick={() => {
                                setCitizenMobile('9818886998');
                                setCitizenName('Lakshya Sharma');
                                setMobileError('');
                              }}
                            >
                              {t.resetTo9818 || "Reset to 9818886998"}
                            </button>
                          )}
                        </div>
                      </div>

                      {mobileOtpSent && (
                        <div className="form-field-group otp-input-block">
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <label htmlFor="mobile-otp-val">{t.enter6DigitOtp || "Enter 6-Digit OTP (Demo: 482916) *"}</label>
                            <button
                              type="button"
                              className="demo-chip-btn"
                              onClick={() => {
                                setMobileOtp('482916');
                                setMobileError('');
                              }}
                            >
                              {t.fill482916 || "Fill 482916"}
                            </button>
                          </div>
                          <input
                            id="mobile-otp-val"
                            type="text"
                            maxLength="6"
                            className="portal-input classic-input"
                            placeholder="482916"
                            value={mobileOtp}
                            onChange={(e) => {
                              setMobileOtp(e.target.value);
                              setMobileError('');
                            }}
                            required
                          />
                        </div>
                      )}

                      {mobileError && (
                        <div className="classic-alert error">{mobileError}</div>
                      )}

                      <div className="form-actions-inline" style={{ marginTop: '0.85rem' }}>
                        <button 
                          type="submit" 
                          className="classic-submit-btn"
                          disabled={isSendingOtp || isVerifyingOtp}
                        >
                          {mobileOtpSent 
                            ? (isVerifyingOtp ? (t.verifyingOtp || "Verifying OTP & Logging In...") : (t.verifyOtpBtn || "Verify OTP & Enter Citizen Portal →"))
                            : (isSendingOtp ? (t.dispatchingOtp || "Dispatching OTP via SMS...") : (t.sendOtpBtn || "Send One-Time Password (OTP)"))}
                        </button>
                      </div>

                      {mobileOtpSent && (
                        <div style={{ marginTop: '0.65rem', textAlign: 'right' }}>
                          <button
                            type="button"
                            className="classic-action-btn secondary"
                            style={{ padding: '0.25rem 0.65rem', fontSize: '0.72rem' }}
                            onClick={() => {
                              setMobileOtpSent(false);
                              setMobileOtp('');
                              setDispatchedSmsAlert(null);
                              setMobileError('');
                            }}
                          >
                            {t.changeMobileResend || "Change Mobile Number / Resend"}
                          </button>
                        </div>
                      )}
                    </form>
                  )}
                </div>
              ) : (
                /* Official CSC Operator Form */
                <form onSubmit={handleOfficialSubmit} className="official-auth-form">
                  <div className="form-sub-header">
                    <h3>{t.cscDeskHeader || "Common Service Center (CSC) & Official Desk"}</h3>
                    <p>{t.cscDeskDesc || "Enter authorized credentials to register citizens and issue official welfare intake dockets."}</p>
                  </div>

                  <div className="form-grid-2col">
                    <div className="form-field-group">
                      <label htmlFor="officer-name">{t.authorizedOfficialName || "Authorized Official Name *"}</label>
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
                      <label htmlFor="officer-id">{t.operatorIdLabel || "Operator / CSC VLE ID *"}</label>
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
                      <label htmlFor="officer-dept">{t.deptCenterLabel || "Department / Center Name *"}</label>
                      <input
                        id="officer-dept"
                        type="text"
                        className="portal-input classic-input"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="officer-dist">{t.districtLabel || "District *"}</label>
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
                    <label htmlFor="officer-pin">{t.securityPinLabel || "Operator Security PIN *"}</label>
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
                      <label htmlFor="captcha-input">{t.securityCaptchaLabel || "Security Captcha Code *"}</label>
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
                      {t.authenticateCscBtn || "Authenticate & Access CSC Terminal →"}
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
            {t.footerNic || "National Informatics Centre (NIC) • Ministry of Electronics & IT • Government of India."}
          </p>
          <p className="auth-footer-sub">
            {t.footerDpdp || "All data processed in compliance with the Digital Personal Data Protection (DPDP) Act 2023."}
          </p>
        </div>
      </footer>
    </div>
  );
}
