import React from 'react';
import { ArrowRight, ExternalLink, TrendingDown, DollarSign, Cpu, Zap, Layers, ShieldCheck } from 'lucide-react';

export default function AboutPage({ openDemoModal }) {
  const costReductionPoints = [
    {
      num: '01',
      title: 'Eliminate Per-Token Markups',
      desc: 'Public APIs charge $15 to $30 per million tokens. As autonomous coding agents run thousands of tool calls daily, token invoices spiral. Running private GPU instances replaces variable token taxes with flat, predictable compute—saving 70% to 85% at scale.',
      icon: TrendingDown
    },
    {
      num: '02',
      title: 'Right-Size Models by Task',
      desc: 'Instead of routing every routine edit or test run to expensive frontier models, route high-frequency agent tasks to specialized open-weight models (Qwen 2.5 Coder, Llama 3.3 70B, DeepSeek) served at full throughput on private silicon.',
      icon: Cpu
    },
    {
      num: '03',
      title: 'Local Prefix Caching in vLLM',
      desc: 'Autonomous developer workflows repeatedly re-read the same repository context and system prompts. Cloyst utilizes vLLM PagedAttention and KV cache reuse to eliminate redundant token compute on repeated agent turns.',
      icon: Zap
    },
    {
      num: '04',
      title: 'Zero Cloud Network Egress Fees',
      desc: 'All model weights, prompt payloads, and completions stay inside your internal VPC or physical data center. You eliminate third-party API bandwidth surcharges, rate-limit penalty tiers, and data transfer costs.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="m5-about-page-root">
      {/* ── 1. Top Hero Section ── */}
      <section className="m5-about-black-hero">
        <div className="m5-hero-inner">
          <h1 className="m5-about-black-hero-title">
            About Cloyst
          </h1>
          <p className="cloyst-about-hero-sub">
            Any Model. Any Infrastructure. Total Control.
          </p>
        </div>
      </section>

      {/* ── 2. Content Section ── */}
      <div className="m5-about-page-content">
        <div className="m5-container">
          {/* Editorial Intro */}
          <section className="m5-about-hero-block">
            <h2 className="m5-about-title">
              The defining infrastructure challenge of this decade is AI sovereignty.
            </h2>
            <p className="m5-about-lead">
              Every enterprise wants autonomous AI coding agents and generative intelligence. But for regulated organizations in banking, healthcare, defense, and government, sending source code and sensitive data to public cloud APIs is an unacceptable risk.
            </p>
          </section>

          {/* Industry Reality Callout: Revolut Case Study */}
          <div className="m5-about-quote-box">
            <span className="m5-about-quote-tag">ENTERPRISE CASE STUDY • INDUSTRY REPORT</span>
            <blockquote className="m5-about-quote-text">
              “How Revolut Slashed AI Coding Costs by 80% Self-Hosting Private Models”
            </blockquote>
            <p className="cloyst-about-quote-sub">
              Fintech leader Revolut moved away from commercial cloud AI coding assistants to self-hosted open-source models deployed on their own private infrastructure. By eliminating commercial per-seat licensing and variable per-token markups, they achieved massive cost savings while ensuring proprietary financial code never leaves their control.
            </p>
          </div>

          {/* How the Reader Can Reduce AI Costs */}
          <div className="m5-about-section-header">
            <span className="m5-about-section-tag">AI COST REDUCTION PLAYBOOK</span>
            <h2 className="m5-about-section-title">How you can reduce your enterprise AI costs.</h2>
            <p className="m5-about-section-sub">
              Four architectural mechanisms to slash your AI infrastructure budget by 70% to 85% while improving developer privacy.
            </p>
          </div>

          <div className="cloyst-eight-grid cloyst-cost-grid-margin">
            {costReductionPoints.map((point) => {
              const IconComp = point.icon;
              return (
                <div key={point.num} className="m5-three-card cloyst-feature-card-clean">
                  <div className="m5-three-card-header">
                    <div className="cloyst-feature-title-wrap">
                      <IconComp size={18} color="#FF5A52" className="cloyst-feature-icon" />
                      <span className="m5-three-card-title">{point.title}</span>
                    </div>
                    <span className="cloyst-feature-num-tag">{point.num}</span>
                  </div>
                  <p className="m5-three-card-desc">{point.desc}</p>
                </div>
              );
            })}
          </div>

          {/* 4 Core Pillars of Cloyst */}
          <div className="m5-about-section-header">
            <span className="m5-about-section-tag">ARCHITECTURAL FOUNDATION</span>
            <h2 className="m5-about-section-title">The four pillars of Cloyst.</h2>
            <p className="m5-about-section-sub">
              Engineered from first principles for air-gapped data centers and high-concurrency enterprise workloads.
            </p>
          </div>

          <div className="m5-values-grid cloyst-values-margin-bottom">
            <div className="m5-value-card">
              <span className="m5-value-num">01 / ZERO EGRESS</span>
              <div>
                <h4 className="m5-value-heading">Air-Gapped Sovereign Operation</h4>
                <p className="m5-value-desc">
                  Zero mandatory internet dependencies during runtime. Compute, model weights, local authentication, and audit logs remain strictly within your physical boundary.
                </p>
              </div>
            </div>

            <div className="m5-value-card">
              <span className="m5-value-num">02 / MODEL AGNOSTIC</span>
              <div>
                <h4 className="m5-value-heading">True Decoupled Architecture</h4>
                <p className="m5-value-desc">
                  Decouples model weights from infrastructure. Swap between Llama 3, DeepSeek, Qwen 2.5, or proprietary fine-tunes on vLLM and llama.cpp without vendor lock-in.
                </p>
              </div>
            </div>

            <div className="m5-value-card">
              <span className="m5-value-num">03 / HARDWARE PREFLIGHT</span>
              <div>
                <h4 className="m5-value-heading">Automated Diagnostics</h4>
                <p className="m5-value-desc">
                  Automated preflight checks scan GPUs, driver versions, CUDA runtimes, and memory headroom before model deployment, preventing silent crashes.
                </p>
              </div>
            </div>

            <div className="m5-value-card">
              <span className="m5-value-num">04 / COMPLIANCE</span>
              <div>
                <h4 className="m5-value-heading">Privacy-Preserving Governance</h4>
                <p className="m5-value-desc">
                  Every inference trace records latency, token counts, and cryptographic identity without logging raw prompt contents or PII, fulfilling SOC2 and HIPAA standards.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="m5-about-cta-card">
            <h2 className="m5-about-cta-title">
              Bring sovereign AI into your organization.
            </h2>
            <p className="m5-about-cta-desc">
              Schedule a technical walkthrough with our founding systems architecture team or request a private sandbox deployment.
            </p>
            <div className="m5-about-cta-actions">
              <button className="m5-hero-btn-primary cloyst-btn-padded" onClick={openDemoModal}>
                <span>Request Enterprise Demo</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
