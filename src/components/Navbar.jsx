import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar({ openDemoModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;
  const isHome = currentPath === '/' || currentPath === '/overview';
  const isAbout = currentPath === '/about';

  const handleCtaClick = () => {
    setMobileOpen(false);
    openDemoModal();
  };

  return (
    <header className="m5-header">
      <div className="m5-header-container">
        {/* Left: Cloyst Logo */}
        <Link
          to="/"
          className="m5-brand-logo"
          onClick={() => setMobileOpen(false)}
        >
          <span className="m5-brand-logo-text">Cloyst</span>
        </Link>

        {/* Center: Simplified Navigation Pill (Only Overview & About) */}
        <div className="m5-nav-center-slot">
          <div className="m5-nav-pill-group">
            <Link
              to="/"
              className={`m5-nav-item ${isHome ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              Overview
            </Link>
            <Link
              to="/about"
              className={`m5-nav-item ${isAbout ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
          </div>
        </div>

        {/* Right: Request Access Button */}
        <div className="m5-nav-right-slot">
          <button className="m5-cta-pill" onClick={handleCtaClick}>
            <span>Request Access</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-only-hamburger"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="m5-mobile-drawer">
          <Link
            to="/"
            className={`m5-nav-item ${isHome ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            Overview
          </Link>
          <Link
            to="/about"
            className={`m5-nav-item ${isAbout ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <div className="cloyst-mobile-divider" />
          <button className="m5-cta-pill cloyst-mobile-cta" onClick={handleCtaClick}>
            <span>Request Access</span>
          </button>
        </div>
      )}
    </header>
  );
}
