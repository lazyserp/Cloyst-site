import React, { useState } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

export default function RequestDemoModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('10-50');
  const [deploymentMode, setDeploymentMode] = useState('airgap');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setNotes('');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container cloyst-modal-width" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="modal-header">
              <div className="modal-badge">
                <span className="modal-badge-dot" />
                Sovereign Infrastructure Sandbox
              </div>
              <h2 className="modal-title">Request Cloyst Enterprise Pilot</h2>
              <p className="modal-subtitle">
                Experience private model execution, automated GPU node orchestration, and enterprise AI gateway governance with zero cloud egress.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="modal-form-grid">
                <div className="modal-field">
                  <label className="modal-label">Your Name</label>
                  <input
                    type="text"
                    required
                    className="modal-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="modal-field">
                  <label className="modal-label">Work Email</label>
                  <input
                    type="email"
                    required
                    className="modal-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal-form-grid">
                <div className="modal-field">
                  <label className="modal-label">Company / Organization</label>
                  <input
                    type="text"
                    required
                    className="modal-input"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>

                <div className="modal-field">
                  <label className="modal-label">Engineering / AI Team Size</label>
                  <select
                    className="modal-select"
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                  >
                    <option value="1-10">1 – 10 engineers</option>
                    <option value="10-50">10 – 50 engineers</option>
                    <option value="50-200">50 – 200 engineers</option>
                    <option value="200+">200+ engineers</option>
                  </select>
                </div>
              </div>

              <div className="modal-field">
                <label className="modal-label">Deployment Architecture</label>
                <select
                  className="modal-select"
                  value={deploymentMode}
                  onChange={(e) => setDeploymentMode(e.target.value)}
                >
                  <option value="airgap">Air-Gapped / Disconnected On-Prem</option>
                  <option value="customer_cloud">Customer Cloud GPUs (RunPod, Lambda, AWS)</option>
                  <option value="hybrid">Hybrid Sovereign Enclave</option>
                </select>
              </div>

              <div className="modal-field">
                <label className="modal-label">Security &amp; Hardware Requirements (Optional)</label>
                <textarea
                  rows={2}
                  className="modal-textarea"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <button type="submit" className="modal-submit-btn">
                <span>Request Architectural Demo</span>
                <ArrowRight size={16} />
              </button>

              <div className="cloyst-modal-footer-trust">
                <span>✓ 100% Zero Data Egress</span>
                <span>✓ SOC2 &amp; Air-Gap Aligned</span>
                <span>✓ Turnkey 10-Min Setup</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="modal-success-state">
            <div className="modal-success-icon-box">
              <Check size={28} color="#FF5A52" />
            </div>
            <h2 className="modal-success-title">Pilot Request Received</h2>
            <p className="modal-success-desc">
              Thank you, <strong>{name}</strong>. Our founding systems architecture team will reach out to <strong>{email}</strong> within 24 hours to coordinate your Cloyst sandbox and discuss your GPU topology.
            </p>
            <button className="modal-success-btn" onClick={handleReset}>
              Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
