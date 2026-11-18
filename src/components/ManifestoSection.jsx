import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Shield, ArrowUpRight } from 'lucide-react';

export default function ManifestoSection({ openDemoModal }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.85;
      const end = -rect.height * 0.3;
      const current = rect.top;
      
      const progress = Math.min(Math.max((start - current) / (start - end), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lines = [
    {
      text: "Autonomous coding agents and AI applications cannot send proprietary source code and sensitive data to public cloud APIs.",
      serifHighlight: "cannot send proprietary source code"
    },
    {
      text: "Yet building custom air-gapped runtimes, GPU hardware preflights, and compliance audit pipelines burns 6+ months of engineering.",
      serifHighlight: "burns 6+ months of engineering"
    },
    {
      text: "Cloyst delivers model-agnostic, turnkey sovereign AI infrastructure — giving enterprises total control over private models with zero cloud egress.",
      serifHighlight: "total control over private models"
    }
  ];

  return (
    <section className="manifesto-section" ref={containerRef}>
      <div className="container">
        <div className="manifesto-badge-row">
          <span className="mono-pill-badge">
            <span className="mono-dot" />
            THE SOVEREIGN AI MANDATE
          </span>
          <span className="mono-date-tag">SPEC 2026</span>
        </div>

        <div className="manifesto-text-stack">
          {lines.map((item, index) => {
            const threshold = (index + 0.3) / lines.length;
            const isLit = scrollProgress >= threshold;
            const lineOpacity = Math.min(Math.max(0.28 + (scrollProgress * lines.length - index) * 0.72, 0.28), 1);

            return (
              <p
                key={index}
                className="manifesto-line"
                style={{
                  opacity: lineOpacity,
                  filter: isLit ? 'drop-shadow(0 0 24px rgba(255,255,255,0.18))' : 'none',
                  transition: 'opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease'
                }}
              >
                {item.text}
              </p>
            );
          })}
        </div>

        <div className="manifesto-footer-row">
          <div className="manifesto-stat-pill">
            <span className="manifesto-stat-num">0.00 Bytes</span>
            <span className="manifesto-stat-desc">Cloud Data Egress • 100% Air-Gapped Sovereign Infrastructure</span>
          </div>
          <button className="btn-pill-glass" onClick={openDemoModal}>
            <span>Request Sovereign Infrastructure Pilot</span>
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
