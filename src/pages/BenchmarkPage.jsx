import React, { useState } from 'react';
import { 
  TrendingDown, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  BarChart3,
  Cpu,
  Lock,
  Activity,
  Server,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import './BenchmarkPage.css';
import BenchmarkCharts from '../components/BenchmarkCharts';

export default function BenchmarkPage({ setActivePage, openDemoModal }) {
  // Interactive Team TCO Calculator State
  const [teamSize, setTeamSize] = useState('org'); // default to 'org' for enterprise scale
  const [modelTier, setModelTier] = useState('frontier'); // 'frontier' ($15) | 'opus' ($20) | 'standard' ($8)

  const presets = {
    solo: { label: 'Startup Team (5 Devs)', queriesPerDay: 500, monthlyQueries: 15000, desc: '5 active engineers using coding agents (OpenCode, Cursor)' },
    team: { label: 'Fast Growth (25 Devs)', queriesPerDay: 3000, monthlyQueries: 90000, desc: '25 engineers shipping autonomous agent loops and internal LLM apps' },
    org: { label: 'Enterprise Org (100 Devs)', queriesPerDay: 15000, monthlyQueries: 450000, desc: '100 engineers + automated CI pipelines & agent workflows' }
  };

  const modelTiers = {
    frontier: { label: 'GPT-4o / Claude 3.7 Sonnet Tier', rate: 15, desc: '$15 / 1M blended public API tokens' },
    opus: { label: 'Claude 3.5 Opus / o1 High Reasoning', rate: 22, desc: '$22 / 1M high-reasoning tokens' },
    standard: { label: 'Standard Enterprise LLM API', rate: 10, desc: '$10 / 1M baseline context tokens' }
  };

  const activePreset = presets[teamSize];
  const activeRate = modelTiers[modelTier].rate;

  // Average tokens: 3,000 tokens per developer agent turn
  const monthlyTokensM = (activePreset.monthlyQueries * 3000) / 1000000;
  
  // Public Cloud API cost vs Cloyst Private GPU Node Amortization ($2.80/M token equivalent)
  const publicApiCost = Math.round(monthlyTokensM * activeRate);
  const cloystNodeCost = Math.round(monthlyTokensM * 2.8);
  const monthlySavings = publicApiCost - cloystNodeCost;
  const annualSavings = monthlySavings * 12;

  return (
    <div className="m5-page-root">
      {/* ── 1. Hero Section ──────────────────────────────────────────────── */}
      <section className="m5-about-hero benchmark-hero">
        <div className="m5-hero-inner">
          <div className="m5-languages-badge-pill benchmark-hero-badge">
            <span>SOVEREIGN PERFORMANCE &amp; COST BENCHMARKS</span>
          </div>

          <h1 className="m5-hero-title">
            Proven Zero Egress. &lt;30ms Gateway Overhead.
          </h1>

          <div className="m5-hero-subtitle">
            <p>
              We benchmarked Cloyst's AI Gateway and private vLLM orchestration against public cloud APIs and manual Kubernetes stacks.
              Here is how sovereign infrastructure cuts costs by 80%+ while guaranteeing zero data leaks.
            </p>
          </div>

          <div className="m5-hero-actions benchmark-hero-actions">
            <button
              className="m5-hero-btn-white"
              onClick={() => setActivePage('try')}
            >
              <span>View Quickstart Guide</span>
              <ArrowRight size={16} />
            </button>
            <button
              className="m5-hero-btn-glass"
              onClick={openDemoModal}
            >
              <span>Schedule Technical Walkthrough</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. Top 3 Headline Summary Cards ──────────────────────────────── */}
      <section className="benchmark-summary-section">
        <div className="m5-container">
          <div className="benchmark-summary-grid">
            {/* Card 1 */}
            <div className="benchmark-summary-card">
              <div className="benchmark-summary-card-header">
                <span className="benchmark-card-tag">01 / CLOUD EGRESS</span>
                <ShieldCheck size={18} color="#059669" />
              </div>
              <div className="benchmark-summary-card-metric" style={{ color: '#059669' }}>
                0.00 B
              </div>
              <p className="benchmark-card-desc">
                100% verified air-gapped operation. Zero telemetry, zero weights, and zero prompt packets leave your physical boundary.
              </p>
            </div>

            {/* Card 2 */}
            <div className="benchmark-summary-card">
              <div className="benchmark-summary-card-header">
                <span className="benchmark-card-tag">02 / GATEWAY OVERHEAD</span>
                <Zap size={18} color="#B92B23" />
              </div>
              <div className="benchmark-summary-card-metric">
                18.4 ms
              </div>
              <p className="benchmark-card-desc">
                p95 gateway overhead for /v1/chat/completions. Enforces rate limits, auth, and audit logging with negligible latency impact.
              </p>
            </div>

            {/* Card 3 */}
            <div className="benchmark-summary-card">
              <div className="benchmark-summary-card-header">
                <span className="benchmark-card-tag">03 / COST REDUCTION</span>
                <TrendingDown size={18} color="#B92B23" />
              </div>
              <div className="benchmark-summary-card-metric">
                -81.3%
              </div>
              <p className="benchmark-card-desc">
                Lower TCO compared to paying per-token public cloud API invoices (GPT-4o / Claude) at enterprise scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Visual Comparison Chart: Public API vs Cloyst Private Node ─── */}
      <section className="benchmark-graph-section">
        <div className="m5-container">
          <div className="benchmark-section-header">
            <span className="benchmark-section-badge">
              EMPIRICAL TCO COMPARISON
            </span>
            <h2 className="m5-values-title">
              Monthly Cost per 100M Inference Tokens
            </h2>
            <p className="m5-values-sub benchmark-section-sub">
              Comparing commercial public cloud API billing against Cloyst on dedicated private GPU nodes.
            </p>
          </div>

          <div className="benchmark-graph-container">
            {/* Graph Legend */}
            <div className="benchmark-graph-legend">
              <div>
                <span className="benchmark-legend-title-tag">
                  Inference Economics
                </span>
                <div className="benchmark-legend-title">
                  Total Monthly Cost per 100M Tokens
                </div>
              </div>

              <div className="benchmark-legend-swatches">
                <div className="benchmark-legend-item" style={{ color: '#DC2626' }}>
                  <span className="benchmark-legend-swatch-bar" style={{ background: '#DC2626' }} />
                  <span>Public Cloud APIs ($1,500 - $2,200)</span>
                </div>

                <div className="benchmark-legend-item" style={{ color: '#D48B38' }}>
                  <span className="benchmark-legend-swatch-bar" style={{ background: '#D48B38' }} />
                  <span>DIY Custom Kubernetes ($780 + DevOps FTE)</span>
                </div>

                <div className="benchmark-legend-item" style={{ color: '#059669', fontWeight: 600 }}>
                  <span className="benchmark-legend-swatch-bar" style={{ background: '#059669' }} />
                  <span>Cloyst Sovereign Infrastructure ($280)</span>
                </div>
              </div>
            </div>

            {/* Cartesian Bar Chart */}
            <div className="benchmark-svg-wrapper">
              <svg 
                viewBox="0 0 920 230" 
                className="benchmark-svg-canvas"
              >
                {/* Vertical Gridlines */}
                {[
                  { cost: 0, x: 230, label: '$0' },
                  { cost: 500, x: 387.5, label: '$500' },
                  { cost: 1000, x: 545, label: '$1,000' },
                  { cost: 1500, x: 702.5, label: '$1,500' },
                  { cost: 2000, x: 860, label: '$2,000+' }
                ].map((tick, idx) => (
                  <g key={idx}>
                    <line 
                      x1={tick.x} 
                      y1={24} 
                      x2={tick.x} 
                      y2={180} 
                      stroke="#F3F4F6" 
                      strokeWidth="1" 
                      strokeDasharray="2 3" 
                    />
                    <text 
                      x={tick.x} 
                      y={198} 
                      textAnchor="middle" 
                      fill="#888888" 
                      fontSize="11" 
                      fontWeight="400"
                      fontFamily="PolySans Mono, monospace"
                    >
                      {tick.label}
                    </text>
                  </g>
                ))}

                {/* Row 1: Public Cloud APIs */}
                <g>
                  <text x="215" y="47" textAnchor="end" fill="#111111" fontSize="12.5" fontWeight="450" fontFamily="PolySans, sans-serif">
                    Public Cloud APIs
                  </text>
                  <text x="215" y="62" textAnchor="end" fill="#888888" fontSize="11" fontWeight="400" fontFamily="PolySans, sans-serif">
                    OpenAI / Anthropic
                  </text>
                  <rect x="230" y="41" width="540.0" height="22" rx="2" fill="#DC2626" />
                  <line 
                    x1="770.0" 
                    y1="41" 
                    x2="770.0" 
                    y2="180" 
                    stroke="#EF4444" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3" 
                  />
                  <text x="782" y="56" textAnchor="start" fill="#DC2626" fontSize="11.5" fontWeight="500" fontFamily="PolySans Mono, monospace">
                    ~$1,500 (100% Egress Risk)
                  </text>
                </g>

                {/* Row 2: DIY In-House Kubernetes */}
                <g>
                  <text x="215" y="97" textAnchor="end" fill="#111111" fontSize="12.5" fontWeight="450" fontFamily="PolySans, sans-serif">
                    DIY Custom Cluster
                  </text>
                  <text x="215" y="112" textAnchor="end" fill="#888888" fontSize="11" fontWeight="400" fontFamily="PolySans, sans-serif">
                    Manual K8s + DevOps cost
                  </text>
                  <rect x="230" y="91" width="280" height="22" rx="2" fill="#D48B38" />
                  <line 
                    x1="510" 
                    y1="91" 
                    x2="510" 
                    y2="180" 
                    stroke="#D48B38" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3" 
                  />
                  <text x="522" y="106" textAnchor="start" fill="#B45309" fontSize="11.5" fontWeight="400" fontFamily="PolySans Mono, monospace">
                    ~$780 + High Maintenance
                  </text>
                </g>

                {/* Row 3: Cloyst Sovereign Platform */}
                <g>
                  <text x="215" y="147" textAnchor="end" fill="#059669" fontSize="12.5" fontWeight="600" fontFamily="PolySans, sans-serif">
                    Cloyst Sovereign AI
                  </text>
                  <text x="215" y="162" textAnchor="end" fill="#888888" fontSize="11" fontWeight="400" fontFamily="PolySans, sans-serif">
                    Private GPU node + vLLM
                  </text>
                  <rect x="230" y="141" width="105" height="22" rx="2" fill="#059669" />
                  <line 
                    x1="335" 
                    y1="141" 
                    x2="335" 
                    y2="180" 
                    stroke="#059669" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3" 
                  />
                  <text x="347" y="156" textAnchor="start" fill="#059669" fontSize="11.5" fontWeight="600" fontFamily="PolySans Mono, monospace">
                    ~$280 (81.3% Savings, 0 Egress)
                  </text>
                </g>

                {/* Baseline Ruler */}
                <line x1="230" y1="180" x2="860" y2="180" stroke="#D1D5DB" strokeWidth="1" />
              </svg>
            </div>

            {/* 3-Column Editorial Breakdown Cards */}
            <div className="benchmark-editorial-grid">
              {/* Card 1: Public Cloud */}
              <div className="benchmark-editorial-card">
                <div className="benchmark-editorial-card-header">
                  <span style={{ width: '12px', height: '2px', background: '#DC2626' }} />
                  <span className="benchmark-editorial-card-title">Public Cloud APIs</span>
                </div>
                <div className="benchmark-editorial-metric" style={{ color: '#DC2626' }}>
                  $15–$22 / 1M tokens <span className="benchmark-editorial-metric-tag" style={{ color: '#777777' }}>(Recurring)</span>
                </div>
                <p className="benchmark-editorial-desc">
                  Exponential costs as autonomous agents execute multi-turn loops. Sensitive code and health data transmitted to cloud servers.
                </p>
              </div>

              {/* Card 2: DIY K8s */}
              <div className="benchmark-editorial-card">
                <div className="benchmark-editorial-card-header">
                  <span style={{ width: '12px', height: '2px', background: '#D48B38' }} />
                  <span className="benchmark-editorial-card-title">DIY Custom Kubernetes</span>
                </div>
                <div className="benchmark-editorial-metric" style={{ color: '#D48B38' }}>
                  High FTE Burden <span className="benchmark-editorial-metric-tag" style={{ color: '#888888' }}>(Maintenance)</span>
                </div>
                <p className="benchmark-editorial-desc">
                  Requires dedicated DevOps infrastructure engineers. Vulnerable to CUDA mismatch breaks, unverified node failures, and fragile ingress proxies.
                </p>
              </div>

              {/* Card 3: Cloyst */}
              <div className="benchmark-editorial-card">
                <div className="benchmark-editorial-card-header">
                  <span style={{ width: '12px', height: '2px', background: '#059669' }} />
                  <span className="benchmark-editorial-card-title" style={{ color: '#059669', fontWeight: 600 }}>Cloyst Sovereign Platform</span>
                </div>
                <div className="benchmark-editorial-metric" style={{ color: '#059669' }}>
                  ~$2.80 / 1M equiv. <span className="benchmark-editorial-metric-tag" style={{ color: '#059669' }}>(-81% TCO)</span>
                </div>
                <p className="benchmark-editorial-desc" style={{ color: '#555555' }}>
                  Turnkey hardware preflight, automated vLLM container lifecycle, sub-30ms OpenAI AI Gateway, and local metadata audit trails.
                </p>
              </div>
            </div>

            {/* Takeaway note */}
            <div className="benchmark-takeaway-box">
              <p className="benchmark-takeaway-text">
                <strong style={{ fontWeight: 500, color: '#111111' }}>Key Takeaway:</strong> Cloyst delivers dramatic cost reductions while providing 100% sovereign data residency. Your models run on dedicated silicon with zero cloud telemetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Concurrency & Throughput Stress Testing ────────────────────── */}
      <BenchmarkCharts />

      {/* ── 5. Interactive ROI & Cost Savings Calculator ──────────────────── */}
      <section className="benchmark-calc-section">
        <div className="m5-container">
          <div className="benchmark-calc-header">
            <span className="benchmark-section-badge-light">
              ENTERPRISE TCO CALCULATOR
            </span>
            <h2 className="m5-values-title-white benchmark-calc-title">
              Estimate Your Sovereign AI Cost Savings
            </h2>
            <p className="benchmark-calc-subtitle">
              Calculate how transitioning from public cloud APIs to Cloyst-orchestrated private GPUs slashes your infrastructure bills.
            </p>

            {/* Preset Selector */}
            <div className="benchmark-preset-pills">
              {Object.keys(presets).map((key) => (
                <button
                  key={key}
                  onClick={() => setTeamSize(key)}
                  className={`benchmark-preset-pill-btn ${teamSize === key ? 'active' : 'inactive'}`}
                >
                  {presets[key].label}
                </button>
              ))}
            </div>

            {/* Model Tier Selector */}
            <div className="benchmark-model-tier-row">
              <span className="benchmark-model-tier-label">
                Comparative Public Cloud Model:
              </span>
              <div className="benchmark-model-tier-pills">
                {Object.keys(modelTiers).map((tierKey) => (
                  <button
                    key={tierKey}
                    onClick={() => setModelTier(tierKey)}
                    className={`benchmark-model-tier-btn ${modelTier === tierKey ? 'active' : 'inactive'}`}
                  >
                    {modelTiers[tierKey].label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Calculator Visual Display */}
          <div className="benchmark-calc-box">
            <div className="benchmark-calc-metrics-grid">
              {/* Monthly Queries */}
              <div>
                <div className="benchmark-calc-metric-header">
                  ESTIMATED AGENT TURNS
                </div>
                <div className="benchmark-calc-metric-value">
                  {activePreset.monthlyQueries.toLocaleString()} / mo
                </div>
                <div className="benchmark-calc-metric-desc">
                  {activePreset.desc}
                </div>
              </div>

              {/* Data Egress */}
              <div>
                <div className="benchmark-calc-metric-header">
                  DATA EGRESS ELIMINATED
                </div>
                <div className="benchmark-calc-metric-value cyan">
                  0.00 Bytes
                </div>
                <div className="benchmark-calc-metric-desc cyan">
                  100% data residency maintained
                </div>
              </div>

              {/* Net Monthly Dollar Savings */}
              <div>
                <div className="benchmark-calc-metric-header">
                  ESTIMATED SAVINGS
                </div>
                <div className="benchmark-calc-metric-value green">
                  ${monthlySavings.toLocaleString()} / mo
                </div>
                <div className="benchmark-calc-metric-desc green">
                  ~${annualSavings.toLocaleString()} saved annually vs cloud APIs
                </div>
              </div>
            </div>

            <div className="benchmark-calc-footer">
              <button
                className="m5-hero-btn-white benchmark-calc-btn"
                onClick={() => setActivePage('try')}
              >
                <span>View Quickstart &amp; Architecture</span>
                <ArrowRight size={15} />
              </button>
              <div className="benchmark-calc-footnote">
                Calculated comparing {modelTiers[modelTier].desc} against amortized compute on customer-controlled private GPU nodes.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Call To Action Banner ─────────────────────────────────────── */}
      <section className="benchmark-cta-section">
        <div className="m5-container">
          <div className="m5-about-cta-card">
            <h2 className="m5-about-cta-title">
              Ready to benchmark Cloyst on your private hardware?
            </h2>
            <p className="m5-about-cta-desc">
              Run our automated GPU preflight checker and test OpenAI agent compatibility in under 10 minutes.
            </p>
            <div className="benchmark-cta-actions">
              <button
                className="m5-hero-btn-primary benchmark-cta-btn-primary"
                onClick={() => setActivePage('try')}
              >
                <span>Deploy Quickstart</span>
                <ArrowRight size={16} />
              </button>
              <button
                className="m5-hero-btn-primary benchmark-cta-btn-dark"
                onClick={openDemoModal}
              >
                <span>Request Enterprise Sandbox</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
