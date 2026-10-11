import React, { useState, useEffect, useRef } from 'react';
import { getTranslation } from '../utils/translations';

export function AIVideoGuideModal({
  scheme,
  userProfile,
  onClose,
  selectedLanguage = 'en'
}) {
  const t = getTranslation(selectedLanguage);
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVoiceMuted, setIsVoiceMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const timerRef = useRef(null);
  const speechUtteranceRef = useRef(null);

  if (!scheme) return null;

  // Scene durations in milliseconds (scaled by playbackSpeed)
  const SCENE_DURATIONS = [9000, 10000, 12000, 9000, 8000];

  // Narration scripts for each scene
  const NARRATION_SCRIPTS = [
    // Scene 0: Intro
    `Welcome to the artificial intelligence enrollment guide for ${scheme.name}. Offered by ${scheme.ministry}, this initiative provides critical welfare support tailored for ${scheme.targetGroup || 'eligible citizens'}.`,
    // Scene 1: Benefits
    `Under this scheme, eligible beneficiaries receive ${scheme.benefitAmount}. The financial assistance is delivered through ${scheme.benefitType || 'Direct Benefit Transfer'}, ensuring transparent and prompt transfers.`,
    // Scene 2: Steps
    `To apply, first visit the verified portal at ${scheme.officialUrl}. Then follow the application roadmap: ${scheme.applicationSteps ? scheme.applicationSteps.slice(0, 3).join('. Next, ') : 'Complete your e-KYC and submit your demographic records.'}`,
    // Scene 3: Documents
    `Please prepare your verification documents in advance: ${scheme.documents ? scheme.documents.map(d => d.name).join(', ') : 'Aadhaar Card and Bank Account Passbook'}. Make sure your bank account is linked with Aadhaar.`,
    // Scene 4: Ready to Enroll
    `You are fully prepared! Click the launch button below to proceed directly to the official government portal to complete your enrollment.`
  ];

  // Handle Text-to-Speech voiceover
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();

    if (!isVoiceMuted && isPlaying) {
      const text = NARRATION_SCRIPTS[currentScene];
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = playbackSpeed;
      utterance.pitch = 1.0;
      
      // Attempt to pick a natural voice
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        const preferredVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('India'))) || voices[0];
        if (preferredVoice) utterance.voice = preferredVoice;
      }

      speechUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentScene, isPlaying, isVoiceMuted, playbackSpeed]);

  // Handle scene timer and automated progression
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const duration = SCENE_DURATIONS[currentScene] / playbackSpeed;
    const interval = 100;
    const step = (interval / duration) * 100;

    setSceneProgress(0);

    timerRef.current = setInterval(() => {
      setSceneProgress(prev => {
        if (prev >= 100) {
          if (currentScene < SCENE_DURATIONS.length - 1) {
            setCurrentScene(c => c + 1);
          } else {
            setIsPlaying(false);
          }
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentScene, isPlaying, playbackSpeed]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleNextScene = () => {
    if (currentScene < SCENE_DURATIONS.length - 1) {
      setCurrentScene(c => c + 1);
    }
  };

  const handlePrevScene = () => {
    if (currentScene > 0) {
      setCurrentScene(c => c - 1);
    }
  };

  const handleReplay = () => {
    setCurrentScene(0);
    setSceneProgress(0);
    setIsPlaying(true);
  };

  const scenes = [
    { id: 0, title: t.sceneIntro || "1. Overview & Objectives" },
    { id: 1, title: t.sceneBenefits || "2. Financial Benefits & DBT" },
    { id: 2, title: t.sceneSteps || "3. How to Apply Step-by-Step" },
    { id: 3, title: t.sceneDocs || "4. Required Documents Checklist" },
    { id: 4, title: t.sceneComplete || "5. Enroll & Launch Portal" }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="ai-video-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Top Header */}
        <div className="ai-video-modal-header">
          <div className="video-header-left">
            <span className="ai-engine-tag">AI VIDEO GENERATOR</span>
            <h2 className="video-modal-title">{scheme.name}</h2>
            <span className="video-modal-sub">{scheme.ministry}</span>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close video player"
          >
            ✕
          </button>
        </div>

        {/* Video Player Display Screen */}
        <div className="video-screen-viewport">
          {/* Top Overlay Badge */}
          <div className="video-screen-top-overlay">
            <div className="video-channel-badge">
              <span className="live-dot"></span>
              <span>UDYAMA AI WALKTHROUGH</span>
            </div>
            <div className="video-time-tag">
              Scene {currentScene + 1} of {scenes.length}
            </div>
          </div>

          {/* SCENE 0: OVERVIEW & WELCOME */}
          {currentScene === 0 && (
            <div className="video-scene scene-intro animate-fade-in">
              <div className="scene-bg-watermark">GOVERNMENT OF INDIA</div>
              <div className="scene-center-card">
                <span className="scene-pill-tag">{scheme.category}</span>
                <h3 className="scene-hero-title">{scheme.name}</h3>
                <p className="scene-hero-summary">{scheme.summary}</p>

                <div className="scene-demographics-strip">
                  <div className="demo-box">
                    <span className="demo-label">Target Beneficiary</span>
                    <strong className="demo-val">{scheme.targetGroup || 'Eligible Citizens'}</strong>
                  </div>
                  <div className="demo-box">
                    <span className="demo-label">Eligibility Match</span>
                    <strong className="demo-val green">{scheme.matchScore || 95}% Fit</strong>
                  </div>
                  <div className="demo-box">
                    <span className="demo-label">Application Status</span>
                    <strong className="demo-val">{scheme.deadline || 'Open All Year'}</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCENE 1: KEY FINANCIAL BENEFITS */}
          {currentScene === 1 && (
            <div className="video-scene scene-benefits animate-fade-in">
              <div className="scene-header-strip">
                <span className="scene-badge">CORE BENEFIT MATRIX</span>
                <h4>Direct Financial Support & Entitlements</h4>
              </div>

              <div className="benefit-hero-box">
                <span className="benefit-hero-label">{t.financialBenefit || 'Direct Benefit Amount'}</span>
                <div className="benefit-hero-value">{scheme.benefitAmount}</div>
                <span className="benefit-hero-mode">{scheme.benefitType || 'Direct Bank Transfer (DBT)'}</span>
              </div>

              <div className="benefit-features-grid">
                <div className="benefit-feature-card">
                  <span className="feature-badge-icon">GOV</span>
                  <div>
                    <strong>Sovereign Guarantee</strong>
                    <p>100% Central and State government backed subsidy.</p>
                  </div>
                </div>
                <div className="benefit-feature-card">
                  <span className="feature-badge-icon">DBT</span>
                  <div>
                    <strong>Direct Bank Transfer</strong>
                    <p>Deposited directly into Aadhaar seeded bank account.</p>
                  </div>
                </div>
                <div className="benefit-feature-card">
                  <span className="feature-badge-icon">API</span>
                  <div>
                    <strong>Zero Middlemen</strong>
                    <p>End-to-end digital tracking with SMS confirmation.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCENE 2: HOW TO APPLY STEP-BY-STEP */}
          {currentScene === 2 && (
            <div className="video-scene scene-steps animate-fade-in">
              <div className="scene-header-strip">
                <span className="scene-badge">OFFICIAL ENROLLMENT ROADMAP</span>
                <h4>How to Register on the Government Portal</h4>
              </div>

              {/* Simulated Browser Bar */}
              <div className="simulated-browser-frame">
                <div className="browser-top-bar">
                  <div className="browser-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="browser-url-input">
                    <span className="lock-icon">[HTTPS]</span> {scheme.officialUrl}
                  </div>
                </div>

                <div className="roadmap-animated-steps">
                  {(scheme.applicationSteps || [
                    "Visit the official portal at " + scheme.officialUrl,
                    "Click on New Citizen / Beneficiary Registration",
                    "Input Aadhaar number and complete OTP e-KYC verification",
                    "Fill in family income and bank account passbook details",
                    "Submit application and note down your enrollment reference number"
                  ]).map((step, idx) => (
                    <div key={idx} className="animated-step-row">
                      <span className="step-num-circle">{idx + 1}</span>
                      <span className="step-instruction-text">{step}</span>
                      <span className="step-check-tag">READY</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SCENE 3: REQUIRED DOCUMENTS */}
          {currentScene === 3 && (
            <div className="video-scene scene-docs animate-fade-in">
              <div className="scene-header-strip">
                <span className="scene-badge">{t.documentVerificationTag || "DOCUMENT VERIFICATION"}</span>
                <h4>{t.requiredDocsChecklist || "Required Documents & Proof Checklist"}</h4>
              </div>

              <div className="video-docs-grid">
                {(scheme.documents || [
                  { name: "Aadhaar Card", required: true, desc: "Biometric and identity verification" },
                  { name: "Bank Account Passbook", required: true, desc: "Active DBT enabled account" },
                  { name: "Income Certificate", required: false, desc: "Revenue authority issued proof" }
                ]).map((doc, idx) => (
                  <div key={idx} className="video-doc-card">
                    <div className="doc-card-top">
                      <span className="doc-icon-badge">DOC {idx + 1}</span>
                      {doc.required && <span className="doc-required-pill">{t.docMandatory || "Mandatory"}</span>}
                    </div>
                    <strong className="doc-name-heading">{doc.name}</strong>
                    <p className="doc-desc-text">{doc.desc}</p>
                    <div className="doc-status-verified">{t.verifiedViaDigilocker || "Verified via DigiLocker"}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SCENE 4: READY TO ENROLL & LAUNCH */}
          {currentScene === 4 && (
            <div className="video-scene scene-launch animate-fade-in">
              <div className="launch-congrats-card">
                <div className="launch-icon-celebrate">{t.eligibleStamp || "QUALIFIED"}</div>
                <h3 className="launch-title">{t.readyToEnrollTitle || "You Are Ready to Enroll"}</h3>
                <p className="launch-desc">
                  {t.readyToEnrollDesc || "All criteria have been evaluated. Your profile qualifies for"} <strong>{scheme.name}</strong>.
                </p>

                <div className="simulated-tracking-box">
                  <span className="track-label">{t.generatedRefToken || "Generated Reference Token:"}</span>
                  <span className="track-code">ARZ-ENROLL-{scheme.id.toUpperCase().slice(0, 6)}-{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>

                <div className="launch-actions-cluster">
                  <a
                    href={scheme.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="launch-portal-btn"
                  >
                    <span>{t.proceedToPortal || "Proceed to Official Registration Portal"}</span>
                    <span>→</span>
                  </a>
                  <button
                    type="button"
                    className="replay-video-btn"
                    onClick={handleReplay}
                  >
                    <span>{t.restartVideo || "Restart Video Guide"}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Captions Subtitles Bar */}
          <div className="video-subtitles-bar">
            <span className="subtitles-voice-icon">{t.voiceoverTag || "VOICEOVER"}</span>
            <p className="subtitles-text">
              {NARRATION_SCRIPTS[currentScene]}
            </p>
          </div>
        </div>

        {/* Player Scrub Bar */}
        <div className="video-timeline-bar">
          <div
            className="timeline-fill"
            style={{
              width: `${((currentScene * 100) + sceneProgress) / scenes.length}%`
            }}
          ></div>
        </div>

        {/* Video Control Bar */}
        <div className="video-control-bar">
          <div className="controls-left">
            <button
              type="button"
              className="video-ctrl-btn primary"
              onClick={() => setIsPlaying(p => !p)}
              title={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>

            <button
              type="button"
              className="video-ctrl-btn"
              onClick={handlePrevScene}
              disabled={currentScene === 0}
              title="Previous Scene"
            >
              Previous
            </button>

            <button
              type="button"
              className="video-ctrl-btn"
              onClick={handleNextScene}
              disabled={currentScene === scenes.length - 1}
              title="Next Scene"
            >
              Next
            </button>

            <button
              type="button"
              className="video-ctrl-btn"
              onClick={handleReplay}
              title="Replay Video Guide"
            >
              Restart
            </button>
          </div>

          {/* Scene Chapter Selector Buttons */}
          <div className="scene-chapters-strip">
            {scenes.map(s => (
              <button
                key={s.id}
                type="button"
                className={`chapter-step-btn ${currentScene === s.id ? 'active' : ''}`}
                onClick={() => {
                  setCurrentScene(s.id);
                  setSceneProgress(0);
                  setIsPlaying(true);
                }}
              >
                {s.title}
              </button>
            ))}
          </div>

          <div className="controls-right">
            {/* Audio Voice Narration Toggle */}
            <button
              type="button"
              className={`video-ctrl-btn ${isVoiceMuted ? 'muted' : ''}`}
              onClick={() => setIsVoiceMuted(m => !m)}
              title={isVoiceMuted ? "Unmute Voice Narration" : "Mute Voice Narration"}
            >
              {isVoiceMuted ? "Narration: Off" : "Narration: Active"}
            </button>

            {/* Playback Speed */}
            <select
              className="video-speed-select"
              value={playbackSpeed}
              onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
              aria-label="Playback Speed"
            >
              <option value="0.75">0.75x</option>
              <option value="1.0">1.0x Normal</option>
              <option value="1.25">1.25x</option>
              <option value="1.5">1.5x Fast</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
