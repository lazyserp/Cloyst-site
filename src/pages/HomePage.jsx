import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Cpu, 
  Layers, 
  Server, 
  Cloud, 
  Lock, 
  Activity, 
  FileCheck2, 
  Zap,
  TrendingDown
} from 'lucide-react';

export default function HomePage({ openDemoModal }) {
  const scrollToFeatures = () => {
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const costSavingPillars = [
    {
      num: '01',
      title: 'Eliminate Per-Token Markups',
      desc: 'Public APIs charge high margins ($15–$30/M tokens). Self-hosting on private GPUs converts variable token taxes into flat, predictable compute—saving 70% to 85% at scale.',
      icon: TrendingDown
    },
    {
      num: '02',
      title: 'Right-Size Models by Task',
      desc: 'Route routine code generation, autocompletions, and unit tests to efficient open-weight models (Qwen 2.5 Coder, Llama 3.3 70B, DeepSeek) rather than expensive frontier APIs.',
      icon: Cpu
    },
    {
      num: '03',
      title: 'Local Prefix & KV Caching',
      desc: 'Coding agents repeatedly process the same repository context. vLLM PagedAttention and local KV caching reuse prompt prefixes to cut redundant compute to near-zero.',
      icon: Zap
    },
    {
      num: '04',
      title: 'Zero Cloud Network Egress',
      desc: 'All inference traffic runs locally within your internal VPC or data center, eliminating third-party API bandwidth markups and cross-zone egress surcharges.',
      icon: Shield
    }
  ];

  const coreFeatures = [
    {
      num: '01',
      title: 'Air-Gapped & Zero Egress',
      desc: 'Operates with 100% zero external internet connectivity. Compute, weights, and inference pipelines stay strictly within your physical boundary.',
      icon: Shield
    },
    {
      num: '02',
      title: 'Total Privacy & Isolation',
      desc: 'Zero data leaks, zero cloud telemetry, and zero third-party dependencies. Customer proprietary data and prompts never leave your private infrastructure.',
      icon: Lock
    },
    {
      num: '03',
      title: 'Audit Control & Compliance',
      desc: 'Records request latency, token consumption, and node health with metadata-only governance. Full auditability with zero raw prompts or PII retained.',
      icon: Activity
    },
    {
      num: '04',
      title: 'Complete Enterprise Governance',
      desc: 'Project-scoped RBAC API keys, model access policies, rate-limiting quotas, and a centralized private model registry with full administrator control.',
      icon: Server
    }
  ];

  return (
    <div className="m5-page-root">
      {/* ── 1. Hero Section ── */}
      <section className="m5-about-hero">
        <div className="m5-hero-inner">
          <div className="cloyst-hero-badge">
            <span>SOVEREIGN ENTERPRISE AI INFRASTRUCTURE</span>
          </div>

          <h1 className="m5-hero-title">
            <span className="cloyst-hero-line1">Any Model. Any Infrastructure.</span>
            <span className="cloyst-hero-highlight">Total Control.</span>
          </h1>

          <div className="m5-hero-subtitle">
            <p>
              The model-agnostic enterprise AI platform. Deploy & operate LLMs on your own private infrastructure !
            </p>
          </div>

          {/* Action Buttons */}
          <div className="cloyst-hero-actions">
            <button className="m5-hero-btn-white" onClick={openDemoModal}>
              <span>Request Enterprise Demo</span>
              <ArrowRight size={16} />
            </button>

            <button className="m5-hero-btn-glass" onClick={scrollToFeatures}>
              <span>Explore Features</span>
            </button>
          </div>

          {/* Trust Metrics Bar */}
          <div className="cloyst-hero-metrics">
            <div className="cloyst-metric-item">
              <Shield size={16} color="#FF5A52" />
              <span>100% Air-Gapped Ready</span>
            </div>
            <div className="cloyst-metric-item">
              <Cpu size={16} color="#FF5A52" />
              <span>&lt;30ms Gateway Overhead</span>
            </div>
            <div className="cloyst-metric-item">
              <Layers size={16} color="#FF5A52" />
              <span>Model &amp; Runtime Agnostic</span>
            </div>
            <div className="cloyst-metric-item">
              <Lock size={16} color="#FF5A52" />
              <span>OpenAI Drop-In Compatible</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. How You Can Reduce Your AI Costs ── */}
      <section className="cloyst-cost-highlight-section">
        <div className="m5-container">
          <div className="cloyst-section-header">
            <span className="cloyst-section-tag">AI COST REDUCTION PLAYBOOK</span>
            <h2 className="m5-values-title">
              How self-hosting cuts enterprise AI costs by 70–85%.
            </h2>
            <p className="m5-values-sub">
              Inspired by engineering leaders like Revolut, organizations are moving off commercial cloud APIs to dedicated private compute.
            </p>
          </div>

          <div className="cloyst-eight-grid">
            {costSavingPillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div key={pillar.num} className="m5-three-card cloyst-feature-card-clean">
                  <div className="m5-three-card-header">
                    <div className="cloyst-feature-title-wrap">
                      <IconComponent size={18} color="#FF5A52" className="cloyst-feature-icon" />
                      <span className="m5-three-card-title">{pillar.title}</span>
                    </div>
                    <span className="cloyst-feature-num-tag">{pillar.num}</span>
                  </div>
                  <p className="m5-three-card-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Core Features (Top 4 Clean Cards) ── */}
      <section className="m5-features-section" id="features">
        <div className="m5-container">
          <div className="cloyst-section-header">
            <span className="cloyst-section-tag">CORE PLATFORM PILLARS</span>
            <h2 className="m5-features-title">
              Everything required to operate private enterprise AI.
            </h2>
            <p className="m5-values-sub">
              Engineered from first principles for restricted infrastructure, sovereign data residency, and high-performance inference.
            </p>
          </div>

          <div className="cloyst-four-grid">
            {coreFeatures.map((feat) => {
              const IconComponent = feat.icon;
              return (
                <div key={feat.num} className="m5-three-card cloyst-feature-card-clean">
                  <div className="m5-three-card-header">
                    <div className="cloyst-feature-title-wrap">
                      <IconComponent size={18} color="#FF5A52" className="cloyst-feature-icon" />
                      <span className="m5-three-card-title">{feat.title}</span>
                    </div>
                    <span className="cloyst-feature-num-tag">{feat.num}</span>
                  </div>
                  <p className="m5-three-card-desc">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Two Deployment Modes ── */}
      <section className="m5-deploy-section">
        <div className="m5-container">
          <div className="cloyst-section-header">
            <span className="cloyst-section-tag">DEPLOYMENT ARCHITECTURE</span>
            <h2 className="m5-values-title">
              Two deployment modes. One sovereign core platform.
            </h2>
            <p className="m5-values-sub">
              Designed from day one to support physical air-gapped data centers and customer-controlled cloud GPU infrastructure.
            </p>
          </div>

          <div className="cloyst-two-deploy-grid">
            {/* Mode A */}
            <div className="m5-deploy-card cloyst-card-mode-a">
              <div>
                <div className="cloyst-card-top-row">
                  <span className="cloyst-deploy-tag-dark">MODE A / PRIMARY FOCUS</span>
                  <Server size={20} color="#000000" />
                </div>
                <h3 className="m5-deploy-heading">Air-Gapped &amp; On-Premises</h3>
                <div className="m5-deploy-tagline">Banking, Healthcare, Defense, Sovereign Enclaves</div>
                <p className="m5-deploy-desc">
                  Deploy Cloyst and models inside customer physical infrastructure. Zero internet dependency during runtime, local authentication, and zero external telemetry.
                </p>
              </div>

              <div>
                <ul className="m5-deploy-bullets">
                  <li className="m5-deploy-bullet">
                    <span>✓</span> Verified offline model bundles and digitally signed containers
                  </li>
                  <li className="m5-deploy-bullet">
                    <span>✓</span> Self-hosted control plane with durable PostgreSQL state
                  </li>
                  <li className="m5-deploy-bullet">
                    <span>✓</span> Tamper-evident local audit logs with zero cloud phone-home
                  </li>
                </ul>

                <button className="m5-hero-btn-primary cloyst-btn-black" onClick={openDemoModal}>
                  Request Air-Gapped Deployment
                </button>
              </div>
            </div>

            {/* Mode B */}
            <div className="m5-deploy-card cloyst-card-mode-b">
              <div>
                <div className="cloyst-card-top-row">
                  <span className="cloyst-deploy-tag-brand">MODE B / CLOUD GPU</span>
                  <Cloud size={20} color="#FF5A52" />
                </div>
                <h3 className="m5-deploy-heading">Customer Cloud GPUs</h3>
                <div className="m5-deploy-tagline">RunPod, Lambda Labs, AWS / GCP Private VPC</div>
                <p className="m5-deploy-desc">
                  Deploy models across customer-approved cloud GPU instances. Cloyst secures node agents over encrypted TLS channels with project-scoped token isolation.
                </p>
              </div>

              <div>
                <ul className="m5-deploy-bullets">
                  <li className="m5-deploy-bullet">
                    <span>✓</span> Customer-owned cloud compute keys and isolated VPCs
                  </li>
                  <li className="m5-deploy-bullet">
                    <span>✓</span> Automatic GPU instance enrollment and runtime health monitoring
                  </li>
                  <li className="m5-deploy-bullet">
                    <span>✓</span> High-throughput OpenAI-compatible API gateway with rate limits
                  </li>
                </ul>

                <button className="m5-hero-btn-primary cloyst-btn-full" onClick={openDemoModal}>
                  Explore Cloud GPU Mode
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Final Call to Action ── */}
      <section className="cloyst-final-cta-section">
        <div className="m5-container">
          <div className="m5-about-cta-card">
            <h2 className="m5-about-cta-title">
              Deploy sovereign AI across your enterprise.
            </h2>
            <p className="m5-about-cta-desc">
              We work directly with engineering leaders and software vendors to architect air-gapped data centers and customer cloud GPU clusters.
            </p>
            <div className="m5-about-cta-actions">
              <button className="m5-hero-btn-primary cloyst-btn-padded" onClick={openDemoModal}>
                <span>Request Enterprise Demo</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
