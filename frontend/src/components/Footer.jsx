import React from 'react';
import { getTranslation } from '../utils/translations';

export function Footer({ selectedLanguage = 'en' }) {
  const t = getTranslation(selectedLanguage);
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
              {t.footerBrandDesc || "Next-generation welfare discovery platform. Harnessing semantic search, natural language intent matching, and AI video walkthroughs to make citizen benefits instantly accessible."}
            </p>
            <div className="platform-stats-chips">
              <span className="stat-pill-chip">{t.footerStat1 || "156+ Schemes"}</span>
              <span className="stat-pill-chip">{t.footerStat2 || "22 Indian Languages"}</span>
              <span className="stat-pill-chip">{t.footerStat3 || "100% Free & Open"}</span>
            </div>
          </div>

          {/* Column 2: Core Features */}
          <div className="footer-col">
            <h5 className="footer-col-heading">{t.footerColAi || "AI Capabilities"}</h5>
            <ul className="footer-links-list">
              <li><a href="#schemes">{t.footerLinkDual || "Dual-Window Scheme Explorer"}</a></li>
              <li><a href="#nlp">{t.footerLinkNlp || "Natural Language Intent Search"}</a></li>
              <li><a href="#video">{t.footerLinkVideo || "AI Video Guide Generator"}</a></li>
              <li><a href="#ekyc">{t.footerLinkEkyc || "Simulated e-KYC Verification"}</a></li>
              <li><a href="#compare">{t.footerLinkMatrix || "Side-by-Side Scheme Matrix"}</a></li>
            </ul>
          </div>

          {/* Column 3: Portals & Ministries */}
          <div className="footer-col">
            <h5 className="footer-col-heading">{t.footerColDomains || "Key Domains"}</h5>
            <ul className="footer-links-list">
              <li><a href="#agriculture">{t.footerLinkAgri || "Agriculture & Farmer Grants"}</a></li>
              <li><a href="#education">{t.footerLinkEdu || "Education & Scholarships"}</a></li>
              <li><a href="#health">{t.footerLinkHealth || "Healthcare & Medical Insurance"}</a></li>
              <li><a href="#business">{t.footerLinkBusiness || "MSME & Startup Subsidies"}</a></li>
              <li><a href="#housing">{t.footerLinkHousing || "Affordable Urban & Rural Housing"}</a></li>
            </ul>
          </div>

          {/* Column 4: Trust & Support */}
          <div className="footer-col">
            <h5 className="footer-col-heading">{t.footerColSupport || "Support & Trust"}</h5>
            <ul className="footer-links-list">
              <li><a href="#helpline">{t.footerLinkHelpline || "National Helpline (1800-115-555)"}</a></li>
              <li><a href="#digilocker">{t.footerLinkDigi || "DigiLocker Document Sync"}</a></li>
              <li><a href="#privacy">{t.footerLinkPrivacy || "Privacy & Citizen Data Shield"}</a></li>
              <li><a href="#terms">{t.footerLinkTerms || "Terms & Transparency"}</a></li>
            </ul>
          </div>
        </div>

        {/* Modern Bottom Bar */}
        <div className="footer-modern-bottom-bar">
          <p className="footer-copy-text">
            © {currentYear} Udyama. {t.footerCopyright || "Designed for citizens, entrepreneurs, students, and farmers across India."}
          </p>
          <div className="footer-status-pill">
            <span className="status-dot"></span>
            <span>{t.footerStatus || "All AI Matching Services Operational"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
