import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gov-classic-footer">
      <div className="footer-top-ribbon">
        <div className="footer-container top-ribbon-content">
          <div className="footer-helpdesk-info">
            <span className="helpdesk-label">National Citizen Helpline:</span>
            <strong className="helpdesk-number">1800-115-555 (Toll Free)</strong>
            <span className="helpdesk-divider">|</span>
            <span className="helpdesk-label">e-KYC & DBT Support:</span>
            <strong className="helpdesk-number">14444</strong>
            <span className="helpdesk-divider">|</span>
            <span className="helpdesk-email">helpdesk-udyama@gov.in</span>
          </div>
          <div className="footer-timings">
            <span>Working Hours: 09:00 AM - 06:00 PM (Monday to Saturday)</span>
          </div>
        </div>
      </div>

      <div className="footer-main-section">
        <div className="footer-container footer-grid">
          {/* Column 1: Portal Details */}
          <div className="footer-col brand-col">
            <div className="footer-emblem-badge">
              <span className="emblem-symbol">U</span>
            </div>
            <h4 className="footer-col-title">UDYAMA</h4>
            <p className="footer-text">
              National Semantic Matching & Citizen Verification Portal for Central & State Government Welfare Schemes and Direct Benefit Transfers (DBT).
            </p>
            <div className="footer-gov-tag">
              <span>Government of India • भारत सरकार</span>
            </div>
          </div>

          {/* Column 2: Key Scheme Categories */}
          <div className="footer-col">
            <h5 className="footer-col-heading">Key Portals & Categories</h5>
            <ul className="footer-links-list">
              <li><a href="#agriculture">Agriculture & Farmer Welfare</a></li>
              <li><a href="#education">Education & Higher Studies Scholarships</a></li>
              <li><a href="#health">Healthcare & Medical Assistance</a></li>
              <li><a href="#business">MSME & Self-Employment Loans</a></li>
              <li><a href="#social">Social Security, Widow & Old Age Pensions</a></li>
              <li><a href="#housing">Affordable Rural & Urban Housing</a></li>
            </ul>
          </div>

          {/* Column 3: Citizen Services */}
          <div className="footer-col">
            <h5 className="footer-col-heading">Citizen Services</h5>
            <ul className="footer-links-list">
              <li><a href="#ekyc">Aadhaar UIDAI e-KYC Verification</a></li>
              <li><a href="#pan">PAN Income Tax Assessment</a></li>
              <li><a href="#dbt">Bank Account DBT Inflow Audit</a></li>
              <li><a href="#csc">Common Service Center (CSC) Desk</a></li>
              <li><a href="#grievance">CPGRAMS Public Grievance</a></li>
              <li><a href="#guidelines">Eligibility Guidelines & Rules</a></li>
            </ul>
          </div>

          {/* Column 4: Official Compliance & Policies */}
          <div className="footer-col">
            <h5 className="footer-col-heading">Website Policies</h5>
            <ul className="footer-links-list">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#hyperlink">Hyperlinking Policy</a></li>
              <li><a href="#copyright">Copyright Policy</a></li>
              <li><a href="#disclaimer">Legal Disclaimer</a></li>
              <li><a href="#accessibility">Accessibility Statement</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & NIC Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-container bottom-bar-flex">
          <div className="bottom-left-info">
            <p className="nic-attribution">
              Designed, Developed & Maintained by <strong>National Informatics Centre (NIC)</strong> • Ministry of Electronics and Information Technology, Government of India.
            </p>
            <p className="copyright-line">
              © {currentYear} Udyama National Welfare Portal. All Rights Reserved. Content owned by respective Ministries.
            </p>
          </div>

          <div className="bottom-right-stats">
            <div className="stat-badge">
              <span className="stat-label">Last Updated:</span>
              <strong className="stat-value">10-Oct-2026</strong>
            </div>
            <div className="stat-badge">
              <span className="stat-label">Total Visitors:</span>
              <strong className="stat-value">14,892,401</strong>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
