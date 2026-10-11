import React, { useState } from 'react';
import { INDIAN_STATES, OCCUPATIONS } from '../data/schemesData';
import { 
  getTranslation, 
  translateOccupation, 
  translateGender, 
  translateSocialCategory 
} from '../utils/translations';

export function OfficialDashboard({
  currentUser,
  onPerformIntakeMatch,
  intakeRecords,
  onViewRecordReceipt,
  selectedLanguage = 'en'
}) {
  const t = getTranslation(selectedLanguage);
  const [citizenName, setCitizenName] = useState('');
  const [citizenMobile, setCitizenMobile] = useState('');
  const [citizenAadhaar, setCitizenAadhaar] = useState('');
  const [age, setAge] = useState(32);
  const [gender, setGender] = useState('female');
  const [state, setState] = useState('Maharashtra');
  const [income, setIncome] = useState(120000);
  const [category, setCategory] = useState('OBC');
  const [occupation, setOccupation] = useState('farmer');
  const [hasLand, setHasLand] = useState(true);
  const [notes, setNotes] = useState('');

  const [activeTab, setActiveTab] = useState('intake'); // 'intake' | 'registry'

  const handleSubmitIntake = (e) => {
    e.preventDefault();
    if (!citizenName) {
      alert("Please enter citizen's full name.");
      return;
    }

    const citizenData = {
      id: `INTAKE-${Date.now().toString().slice(-6)}`,
      timestamp: new Date().toLocaleString(),
      officerId: currentUser.officerId || 'CSC-MH-411038',
      officerName: currentUser.name || 'Officer R. Verma',
      name: citizenName,
      mobile: citizenMobile || 'Not provided',
      aadhaar: citizenAadhaar ? `XXXX-XXXX-${citizenAadhaar.slice(-4)}` : 'Verified in person',
      age: parseInt(age, 10),
      gender,
      state,
      income: parseInt(income, 10),
      category,
      occupation,
      hasLand,
      notes
    };

    onPerformIntakeMatch(citizenData);
  };

  return (
    <div className="official-dashboard-container">
      {/* Official Status Header */}
      <div className="official-header-banner">
        <div className="official-info-row">
          <div>
            <span className="official-role-tag">{t.fieldTerminalTitle || "Government & CSC Field Terminal"}</span>
            <h2 className="official-heading">{currentUser.name}</h2>
            <div className="official-meta">
              <span>ID: {currentUser.officerId}</span>
              <span>•</span>
              <span>{currentUser.department}</span>
              <span>•</span>
              <span>{t.jurisdiction || "Jurisdiction:"} {currentUser.district}</span>
            </div>
          </div>
          <div className="official-tabs">
            <button
              type="button"
              className={`official-tab-btn ${activeTab === 'intake' ? 'active' : ''}`}
              onClick={() => setActiveTab('intake')}
            >
              {t.newCitizenIntake || "New Citizen Intake"}
            </button>
            <button
              type="button"
              className={`official-tab-btn ${activeTab === 'registry' ? 'active' : ''}`}
              onClick={() => setActiveTab('registry')}
            >
              {t.citizenRegistry || "Citizen Registry"} ({intakeRecords.length})
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'intake' ? (
        <div className="intake-form-card">
          <div className="intake-form-header">
            <h3>{t.assistedEnrollmentTitle || "Assisted Citizen Enrollment"}</h3>
            <p>{t.assistedEnrollmentDesc || "Enter citizen profile and demographic parameters to match with eligible welfare schemes and generate an official receipt."}</p>
          </div>

          <form onSubmit={handleSubmitIntake} className="intake-form-body">
            <div className="form-grid-2col">
              <div className="form-field-group">
                <label htmlFor="intake-name">{t.citizenFullName || "Citizen Full Name *"}</label>
                <input
                  id="intake-name"
                  type="text"
                  className="portal-input"
                  placeholder={t.citizenFullNamePlaceholder || "Citizen full legal name"}
                  value={citizenName}
                  onChange={(e) => setCitizenName(e.target.value)}
                  required
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="intake-mobile">{t.contactNumber || "Citizen Contact Number"}</label>
                <input
                  id="intake-mobile"
                  type="tel"
                  maxLength="10"
                  className="portal-input"
                  placeholder={t.mobilePlaceholder || "10-digit mobile number"}
                  value={citizenMobile}
                  onChange={(e) => setCitizenMobile(e.target.value)}
                />
              </div>
            </div>

            <div className="form-grid-3col">
              <div className="form-field-group">
                <label htmlFor="intake-aadhaar">{t.aadhaarLast4 || "Aadhaar (Last 4 Digits)"}</label>
                <input
                  id="intake-aadhaar"
                  type="text"
                  maxLength="4"
                  className="portal-input"
                  placeholder="e.g. 5432"
                  value={citizenAadhaar}
                  onChange={(e) => setCitizenAadhaar(e.target.value)}
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="intake-age">{t.ageYears || "Age (Years)"}</label>
                <input
                  id="intake-age"
                  type="number"
                  min="0"
                  max="110"
                  className="portal-input"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="intake-gender">{t.gender || "Gender"}</label>
                <select
                  id="intake-gender"
                  className="portal-input"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="female">{t.female || "Female"}</option>
                  <option value="male">{t.male || "Male"}</option>
                  <option value="other">{t.other || "Other"}</option>
                </select>
              </div>
            </div>

            <div className="form-grid-3col">
              <div className="form-field-group">
                <label htmlFor="intake-state">{t.stateUt || "State / UT"}</label>
                <select
                  id="intake-state"
                  className="portal-input"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  {INDIAN_STATES.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="form-field-group">
                <label htmlFor="intake-category">{t.socialCategory || "Social Category"}</label>
                <select
                  id="intake-category"
                  className="portal-input"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="General">{translateSocialCategory("General", selectedLanguage)}</option>
                  <option value="OBC">{translateSocialCategory("OBC", selectedLanguage)}</option>
                  <option value="SC">{translateSocialCategory("SC", selectedLanguage)}</option>
                  <option value="ST">{translateSocialCategory("ST", selectedLanguage)}</option>
                  <option value="EWS">{translateSocialCategory("EWS", selectedLanguage)}</option>
                </select>
              </div>

              <div className="form-field-group">
                <label htmlFor="intake-occ">{t.primaryOccupation || "Primary Occupation"}</label>
                <select
                  id="intake-occ"
                  className="portal-input"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                >
                  {OCCUPATIONS.map(occ => (
                    <option key={occ} value={occ}>
                      {translateOccupation(occ, selectedLanguage)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-grid-2col">
              <div className="form-field-group">
                <label htmlFor="intake-income">{t.annualIncome || "Annual Family Income (in INR)"}</label>
                <input
                  id="intake-income"
                  type="number"
                  step="10000"
                  className="portal-input"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  required
                />
              </div>

              <div className="form-field-group checkbox-cell">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={hasLand}
                    onChange={(e) => setHasLand(e.target.checked)}
                  />
                  <span>{t.possessesLand || "Possesses Cultivable Land Records"}</span>
                </label>
              </div>
            </div>

            <div className="form-field-group">
              <label htmlFor="intake-notes">{t.fieldOfficerRemarks || "Field Officer Remarks (Optional)"}</label>
              <input
                id="intake-notes"
                type="text"
                className="portal-input"
                placeholder={t.fieldOfficerRemarksPlaceholder || "e.g. Applicant needs immediate crop loss support; documents verified."}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <div className="intake-form-actions">
              <button type="submit" className="primary-action-button">
                {t.processIntakeBtn || "Process Citizen Intake and Match Schemes"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="registry-card">
          <div className="intake-form-header">
            <h3>{t.registeredBeneficiaryLog || "Registered Beneficiary Log"}</h3>
            <p>{t.registeredBeneficiaryDesc || "List of citizens processed by this terminal."}</p>
          </div>

          {intakeRecords.length === 0 ? (
            <div className="empty-results-box">
              <h4 className="empty-title">{t.noIntakeRecords || "No Intake Records Yet"}</h4>
              <p className="empty-desc">{t.noIntakeRecordsDesc || "Process a citizen intake using the form above to log their application."}</p>
            </div>
          ) : (
            <div className="criteria-table-wrap">
              <table className="criteria-table">
                <thead>
                  <tr>
                    <th>{t.thIntakeId || "Intake ID"}</th>
                    <th>{t.thCitizenName || "Citizen Name"}</th>
                    <th>{t.thMobile || "Mobile"}</th>
                    <th>{t.thStateOcc || "State / Occupation"}</th>
                    <th>{t.thAnnualIncome || "Annual Income"}</th>
                    <th>{t.thDateLogged || "Date Logged"}</th>
                    <th>{t.thActions || "Actions"}</th>
                  </tr>
                </thead>
                <tbody>
                  {intakeRecords.map((rec) => (
                    <tr key={rec.id}>
                      <td><strong>{rec.id}</strong></td>
                      <td>{rec.name}</td>
                      <td>{rec.mobile}</td>
                      <td>{rec.state} ({translateOccupation(rec.occupation, selectedLanguage)})</td>
                      <td>₹{(rec.income / 100000).toFixed(2)}L</td>
                      <td>{rec.timestamp}</td>
                      <td>
                        <button
                          type="button"
                          className="action-btn"
                          onClick={() => onViewRecordReceipt(rec)}
                        >
                          {t.viewDocket || "View Docket"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
