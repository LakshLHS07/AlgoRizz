import React, { useState } from 'react';
import { pingBackend } from '../utils/apiBridge';

export function BackendConfigModal({
  isOpen,
  onClose,
  backendUrl,
  setBackendUrl,
  backendStatus,
  setBackendStatus
}) {
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);

  if (!isOpen) return null;

  const handleTestConnection = async () => {
    setTesting(true);
    setTestResult(null);
    const isOnline = await pingBackend(backendUrl);
    setTesting(false);
    if (isOnline) {
      setTestResult({ success: true, message: "Successfully connected to Python backend!" });
      setBackendStatus({ connected: true, url: backendUrl });
    } else {
      setTestResult({
        success: false,
        message: `Could not reach ${backendUrl}. Ensure your Python/Gradio script is running with CORS enabled or run in client-side NLP mode.`
      });
      setBackendStatus({ connected: false, url: backendUrl });
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog-medium" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-category-tag">Architecture & Integration</span>
            <h3 className="modal-scheme-title">Python Matching Engine Bridge</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <div className="modal-body-padding">
          <p className="backend-modal-desc">
            This React/Node.js frontend communicates with your Python stack (<strong>pandas</strong>, <strong>sentence-transformers</strong>, <strong>BeautifulSoup</strong>, and <strong>Gradio/FastAPI</strong>).
          </p>

          <div className="backend-input-group">
            <label htmlFor="backend-url-input">Python Backend URL (Gradio / FastAPI / Flask)</label>
            <div className="backend-input-row">
              <input
                id="backend-url-input"
                type="text"
                className="backend-url-input"
                placeholder="http://127.0.0.1:7860"
                value={backendUrl}
                onChange={(e) => setBackendUrl(e.target.value)}
              />
              <button
                type="button"
                className="test-backend-btn"
                onClick={handleTestConnection}
                disabled={testing}
              >
                {testing ? "Testing..." : "Test Ping"}
              </button>
            </div>
          </div>

          {testResult && (
            <div className={`backend-result-alert ${testResult.success ? 'success' : 'warning'}`}>
              {testResult.success ? "🟢" : "🟠"} {testResult.message}
            </div>
          )}

          <div className="python-snippet-box">
            <div className="snippet-title">💡 How to launch the Python Gradio/FastAPI matching server:</div>
            <pre className="python-code">
{`# example_backend.py
import gradio as gr
from sentence_transformers import SentenceTransformer
import pandas as pd

model = SentenceTransformer('all-MiniLM-L6-v2')

def match_schemes(user_prompt, income, state, occupation):
    # Semantic search with embeddings + rule filters
    return {"status": "matched", "schemes": [...]}

demo = gr.Interface(
    fn=match_schemes,
    inputs=["text", "number", "text", "text"],
    outputs="json"
)
demo.launch(server_name="127.0.0.1", server_port=7860)`}
            </pre>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="primary-view-btn" onClick={onClose}>
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
