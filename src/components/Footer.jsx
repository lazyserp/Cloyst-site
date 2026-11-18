import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Copy, Check, Shield, Cpu, Lock } from 'lucide-react';

export default function Footer({ openDemoModal }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('founders@cloyst.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="m5-ocean-footer">
      <div className="m5-container">
        {/* Contact Banner */}
        <div className="m5-footer-contact-hero">
          <div className="cloyst-footer-text-col">
            <h3 className="m5-footer-contact-title">
              Ready to deploy sovereign AI inside your enterprise?
            </h3>
            <p className="m5-footer-contact-sub">
              Deploy Cloyst inside your air-gapped data centers or customer-controlled cloud GPUs. Built for regulated industries, defense, and sovereign AI software vendors.
            </p>
            <div className="cloyst-footer-badges">
              <div className="cloyst-footer-badge-item">
                <Shield size={14} color="#FF5A52" />
                <span>100% Air-Gapped Ready</span>
              </div>
            </div>
          </div>

          <div className="m5-footer-actions-panel">
            <button className="m5-footer-cta-btn" onClick={openDemoModal}>
              <span>Request Enterprise Demo</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Navigation */}
        <div className="cloyst-footer-bottom">
          <div className="cloyst-footer-brand-wrap">
            <span className="cloyst-footer-brand-name">Cloyst</span>
            <span className="cloyst-footer-tagline">
              — Any Model. Any Infrastructure. Total Control.
            </span>
          </div>

          <div className="cloyst-footer-nav-links">
            <Link to="/" className="cloyst-footer-nav-link">Overview</Link>
            <Link to="/about" className="cloyst-footer-nav-link">About</Link>
            <button onClick={openDemoModal} className="cloyst-footer-nav-btn">Request Access</button>
          </div>

          <span className="cloyst-footer-copyright">
            &copy; {new Date().getFullYear()} Cloyst Inc. All rights reserved. Sovereign AI Infrastructure.
          </span>
        </div>
      </div>
    </footer>
  );
}
