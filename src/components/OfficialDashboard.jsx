import React, { useState } from 'react';
import { INDIAN_STATES, OCCUPATIONS } from '../data/schemesData';

export function OfficialDashboard({
  currentUser,
  onPerformIntakeMatch,
  intakeRecords,
  onViewRecordReceipt
}) {
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
            <span className="official-role-tag">Government & CSC Field Terminal</span>
            <h2 className="official-heading">{currentUser.name}</h2>
            <div className="official-meta">
              <span>ID: {currentUser.officerId}</span>
              <span>•</span>
              <span>{currentUser.department}</span>
              <span>•</span>
              <span>Jurisdiction: {currentUser.district}</span>
            </div>
          </div>
          <div className="official-tabs">
            <button
              type="button"
              className={`official-tab-btn ${activeTab === 'intake' ? 'active' : ''}`}
              onClick={() => setActiveTab('intake')}
            >
              New Citizen Intake
            </button>
            <button
              type="button"
              className={`official-tab-btn ${activeTab === 'registry' ? 'active' : ''}`}
              onClick={() => setActiveTab('registry')}
            >
              Citizen Registry ({intakeRecords.length})
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'intake' ? (
        <div className="intake-form-card">
          <div className="intake-form-header">
            <h3>Assisted Citizen Enrollment</h3>
            <p>Enter citizen profile and demographic parameters to match with eligible welfare schemes and generate an official receipt.</p>
          </div>

          <form onSubmit={handleSubmitIntake} className="intake-form-body">
            <div className="form-grid-2col">
              <div className="form-field-group">
                <label htmlFor="intake-name">Citizen Full Name *</label>
                <input
                  id="intake-name"
                  type="text"
                  className="portal-input"
                  placeholder="Citizen full legal name"
                  value={citizenName}
                  onChange={(e) => setCitizenName(e.target.value)}
                  required
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="intake-mobile">Citizen Contact Number</label>
                <input
                  id="intake-mobile"
                  type="tel"
                  maxLength="10"
                  className="portal-input"
                  placeholder="10-digit mobile number"
                  value={citizenMobile}
                  onChange={(e) => setCitizenMobile(e.target.value)}
                />
              </div>
            </div>

            <div className="form-grid-3col">
              <div className="form-field-group">
                <label htmlFor="intake-aadhaar">Aadhaar (Last 4 Digits)</label>
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
                <label htmlFor="intake-age">Age (Years)</label>
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
                <label htmlFor="intake-gender">Gender</label>
                <select
                  id="intake-gender"
                  className="portal-input"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-grid-3col">
              <div className="form-field-group">
                <label htmlFor="intake-state">State / UT</label>
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
                <label htmlFor="intake-category">Social Category</label>
                <select
                  id="intake-category"
                  className="portal-input"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="EWS">EWS</option>
                </select>
              </div>

              <div className="form-field-group">
                <label htmlFor="intake-occ">Primary Occupation</label>
                <select
                  id="intake-occ"
                  className="portal-input"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                >
                  {OCCUPATIONS.map(occ => (
                    <option key={occ} value={occ}>
                      {occ === "All Occupations" ? "All Occupations" : occ.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-grid-2col">
              <div className="form-field-group">
                <label htmlFor="intake-income">Annual Family Income (in INR)</label>
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
                  <span>Possesses Cultivable Land Records</span>
                </label>
              </div>
            </div>

            <div className="form-field-group">
              <label htmlFor="intake-notes">Field Officer Remarks (Optional)</label>
              <input
                id="intake-notes"
                type="text"
                className="portal-input"
                placeholder="e.g. Applicant needs immediate crop loss support; documents verified."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <div className="intake-form-actions">
              <button type="submit" className="primary-action-button">
                Process Citizen Intake and Match Schemes
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="registry-card">
          <div className="intake-form-header">
            <h3>Registered Beneficiary Log</h3>
            <p>List of citizens processed by this terminal.</p>
          </div>

          {intakeRecords.length === 0 ? (
            <div className="empty-results-box">
              <h4 className="empty-title">No Intake Records Yet</h4>
              <p className="empty-desc">Process a citizen intake using the form above to log their application.</p>
            </div>
          ) : (
            <div className="criteria-table-wrap">
              <table className="criteria-table">
                <thead>
                  <tr>
                    <th>Intake ID</th>
                    <th>Citizen Name</th>
                    <th>Mobile</th>
                    <th>State / Occupation</th>
                    <th>Annual Income</th>
                    <th>Date Logged</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {intakeRecords.map((rec) => (
                    <tr key={rec.id}>
                      <td><strong>{rec.id}</strong></td>
                      <td>{rec.name}</td>
                      <td>{rec.mobile}</td>
                      <td>{rec.state} ({rec.occupation})</td>
                      <td>₹{(rec.income / 100000).toFixed(2)}L</td>
                      <td>{rec.timestamp}</td>
                      <td>
                        <button
                          type="button"
                          className="action-btn"
                          onClick={() => onViewRecordReceipt(rec)}
                        >
                          View Docket
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
