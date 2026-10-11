import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-platform-footer">
      <div className="footer-container">
        <div className="footer-modern-grid">
          {/* Column 1: Platform Brand */}
          <div className="footer-col brand-col">
            <div className="footer-brand-header">
              <img src="/udyama-logo.png" alt="Udyama Logo" className="footer-brand-logo-img" />
              <span className="footer-brand-title">Udyama</span>
            </div>
            <p className="footer-modern-desc">
              Next-generation welfare discovery platform. Harnessing semantic search, natural language intent matching, and AI video walkthroughs to make citizen benefits instantly accessible.
            </p>
            <div className="platform-stats-chips">
              <span className="stat-pill-chip">156+ Schemes</span>
              <span className="stat-pill-chip">22 Indian Languages</span>
              <span className="stat-pill-chip">100% Free & Open</span>
            </div>
          </div>

          {/* Column 2: Core Features */}
          <div className="footer-col">
            <h5 className="footer-col-heading">AI Capabilities</h5>
            <ul className="footer-links-list">
              <li><a href="#schemes">Dual-Window Scheme Explorer</a></li>
              <li><a href="#nlp">Natural Language Intent Search</a></li>
              <li><a href="#video">AI Video Guide Generator</a></li>
              <li><a href="#ekyc">Simulated e-KYC Verification</a></li>
              <li><a href="#compare">Side-by-Side Scheme Matrix</a></li>
            </ul>
          </div>

          {/* Column 3: Portals & Ministries */}
          <div className="footer-col">
            <h5 className="footer-col-heading">Key Domains</h5>
            <ul className="footer-links-list">
              <li><a href="#agriculture">Agriculture & Farmer Grants</a></li>
              <li><a href="#education">Education & Scholarships</a></li>
              <li><a href="#health">Healthcare & Medical Insurance</a></li>
              <li><a href="#business">MSME & Startup Subsidies</a></li>
              <li><a href="#housing">Affordable Urban & Rural Housing</a></li>
            </ul>
          </div>

          {/* Column 4: Trust & Support */}
          <div className="footer-col">
            <h5 className="footer-col-heading">Support & Trust</h5>
            <ul className="footer-links-list">
              <li><a href="#helpline">National Helpline (1800-115-555)</a></li>
              <li><a href="#digilocker">DigiLocker Document Sync</a></li>
              <li><a href="#privacy">Privacy & Citizen Data Shield</a></li>
              <li><a href="#terms">Terms & Transparency</a></li>
            </ul>
          </div>
        </div>

        {/* Modern Bottom Bar */}
        <div className="footer-modern-bottom-bar">
          <p className="footer-copy-text">
            © {currentYear} Udyama. Designed for citizens, entrepreneurs, students, and farmers across India.
          </p>
          <div className="footer-status-pill">
            <span className="status-dot"></span>
            <span>All AI Matching Services Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
