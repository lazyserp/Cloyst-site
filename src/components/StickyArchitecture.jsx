import React, { useState } from 'react';
import { Layers, Server, Cpu, ShieldCheck, CheckCircle2, Terminal, ArrowRight, Activity, Lock, Database } from 'lucide-react';

export default function StickyArchitecture({ openDemoModal }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: '01',
      tag: 'AIR-GAPPED CONTROL PLANE',
      title: 'Centralized model registry, RBAC, and policy governance.',
      subtitle: 'Zero external dependencies. PostgreSQL-backed reconciliation and audit trails.',
      description: 'The Cloyst Control Plane orchestrates GPU node registrations, model artifact lifecycles, and cryptographic authorization. Built with FastAPI and PostgreSQL, it runs entirely within customer infrastructure with zero mandatory cloud telemetry or phone-home validation.',
      bullets: [
        'Project-scoped RBAC and granular API key credential management',
        'Tamper-evident, metadata-only audit logging for SOC2 & HIPAA compliance',
        '100% offline operation: local metadata, offline model bundles, zero cloud dependencies'
      ],
      previewType: 'control-plane',
      metric: '0.00 B',
      metricLabel: 'Outbound Internet Egress'
    },
    {
      id: '02',
      tag: 'NODE AGENT & GPU PREFLIGHT',
      title: 'Automated hardware discovery, health checks, and container lifecycle.',
      subtitle: 'Strictly bounded operational envelope. Never executes arbitrary remote shell commands.',
      description: 'The Cloyst Node Agent runs as an autonomous daemon on managed GPU servers. It executes thorough hardware preflight verification—validating NVIDIA drivers, CUDA versions, VRAM headroom, and container runtimes—before orchestrating high-throughput vLLM and llama.cpp containers.',
      bullets: [
        'Automated preflight diagnostics: GPU architecture, CUDA 12.x+, VRAM & container socket',
        'Heartbeat reconciliation loops to detect node failures and hardware degradation',
        'Secure validated operational envelope: manages inference containers without arbitrary remote shell execution'
      ],
      previewType: 'node-agent',
      metric: '< 10s',
      metricLabel: 'Automated Hardware Preflight'
    },
    {
      id: '03',
      tag: 'OPENAI-COMPATIBLE AI GATEWAY',
      title: 'Drop-in replacement for OpenAI and Anthropic endpoints.',
      subtitle: 'Sub-30ms p95 latency overhead. Privacy-preserving metadata-only request telemetry.',
      description: 'The Cloyst AI Gateway exposes standard /v1/chat/completions, streaming SSE, and /v1/models endpoints. Connect OpenCode, Claude Code, Cursor, Copilot, or internal agents with a single base URL change while enforcing project rate limits and recording compliant audit trails.',
      bullets: [
        '100% OpenAI drop-in compatible: routes /v1/chat/completions directly to private models',
        'Granular token quota enforcement, project rate limiting, and RBAC authentication',
        'Privacy-preserving by design: logs operational metadata without storing raw prompts or PII'
      ],
      previewType: 'ai-gateway',
      metric: '< 30ms',
      metricLabel: 'Gateway p95 Overhead'
    }
  ];

  return (
    <section className="sticky-architecture-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-eyebrow-center">
          <span className="mono-pill-badge">
            <span className="mono-dot" />
            SYSTEM ARCHITECTURE SPECIFICATION
          </span>
          <h2 className="editorial-section-title">
            Enterprise sovereignty at <span className="serif-highlight">production scale</span>.
          </h2>
          <p className="editorial-section-desc">
            Three decoupled, battle-tested subsystems engineered for high-throughput private AI model operations.
          </p>
        </div>

        {/* 50/50 Architecture Grid */}
        <div className="sticky-grid">
          {/* Left Column: Pinned Step Indicators & Narrative */}
          <div className="sticky-nav-column">
            <div className="sticky-nav-content">
              {steps.map((step, idx) => (
                <div
                  key={step.id}
                  className={`sticky-nav-card ${activeStep === idx ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="sticky-card-header">
                    <span className="sticky-step-num">{step.id}</span>
                    <span className="sticky-step-tag">{step.tag}</span>
                  </div>
                  <h3 className="sticky-card-title">{step.title}</h3>
                  <p className="sticky-card-desc">{step.subtitle}</p>
                  
                  {activeStep === idx && (
                    <div className="sticky-card-expanded">
                      <p className="sticky-expanded-body">{step.description}</p>
                      <ul className="sticky-bullet-list">
                        {step.bullets.map((b, i) => (
                          <li key={i} className="sticky-bullet-item">
                            <CheckCircle2 size={15} className="bullet-check-icon" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Interactive Visual Card */}
          <div className="sticky-visual-column">
            <div className="sticky-visual-display">
              {/* Top Header of Display */}
              <div className="visual-display-header">
                <div className="terminal-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="visual-header-title">
                  <code>cloyst_core::{steps[activeStep].tag.toLowerCase().replace(/ /g, '_')}</code>
                </div>
                <div className="visual-header-badge">
                  <span className="pulse-indicator" />
                  AIR-GAPPED
                </div>
              </div>

              {/* Body Content Based on Step */}
              <div className="visual-display-body">
                {activeStep === 0 && (
                  <div className="ast-visual-content">
                    <div className="ast-spec-metric-bar">
                      <div className="ast-stat">
                        <span className="ast-stat-label">AUDIT INTEGRITY</span>
                        <span className="ast-stat-val">100% Tamper-Evident</span>
                      </div>
                      <div className="ast-stat">
                        <span className="ast-stat-label">DATABASE</span>
                        <span className="ast-stat-val">PostgreSQL / SQLite</span>
                      </div>
                      <div className="ast-stat">
                        <span className="ast-stat-label">EGRESS TRAFFIC</span>
                        <span className="ast-stat-val" style={{ color: '#059669' }}>0.00 B / sec</span>
                      </div>
                    </div>

                    <div className="ast-code-inspector" style={{ background: '#111116', padding: '16px', borderRadius: '8px' }}>
                      <div className="code-line commented"># Cloyst Control Plane Registry State</div>
                      <div className="code-line">
                        <span className="token-fn">registry</span>.<span className="token-name">get_deployment</span>(<span className="token-str">"llama-3.3-70b"</span>)
                      </div>
                      <div className="code-line indent highlight-chunk">
                        <span className="token-keyword">node_id:</span> <span className="token-str">"gpu-node-alpha-01"</span> (Status: HEALTHY)
                        <span className="ast-chunk-badge" style={{ background: '#059669', color: '#FFF' }}>Heartbeat 2.4s ago</span>
                      </div>
                      <div className="code-line indent">
                        <span className="token-keyword">runtime:</span> <span className="token-str">"vLLM v0.6.4"</span> | GPU VRAM: 74.2 / 80 GB
                      </div>
                      <div className="code-line indent">
                        <span className="token-keyword">rbac_policy:</span> <span className="token-str">"proj-eng-internal"</span> (RateLimit: 120 RPM)
                      </div>
                      <div className="code-line indent">
                        <span className="token-keyword">telemetry:</span> <span className="token-str">"METADATA_ONLY"</span> (Raw Prompts: REDACTED)
                      </div>
                    </div>

                    <div className="ast-retrieval-summary">
                      <span className="summary-label">COMPLIANCE ATTESTATION:</span>
                      <span className="summary-match">Zero network sockets bound to external WAN. All encryption keys customer-managed.</span>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="ast-visual-content">
                    <div className="ast-spec-metric-bar">
                      <div className="ast-stat">
                        <span className="ast-stat-label">PREFLIGHT STATUS</span>
                        <span className="ast-stat-val" style={{ color: '#059669' }}>ALL CHECKS PASS</span>
                      </div>
                      <div className="ast-stat">
                        <span className="ast-stat-label">GPU DETECTED</span>
                        <span className="ast-stat-val">NVIDIA H100 80GB</span>
                      </div>
                      <div className="ast-stat">
                        <span className="ast-stat-label">RUNTIME</span>
                        <span className="ast-stat-val">vLLM PagedAttention</span>
                      </div>
                    </div>

                    <div className="ast-code-inspector" style={{ background: '#111116', padding: '16px', borderRadius: '8px', fontFamily: 'PolySans Mono, monospace' }}>
                      <div className="code-line commented">$ cloyst-agent preflight --verbose</div>
                      <div className="code-line" style={{ color: '#10B981' }}>✔ [GPU Discovery] 1x NVIDIA H100 80GB SXM5 (Driver 550.54.14)</div>
                      <div className="code-line" style={{ color: '#10B981' }}>✔ [CUDA Toolkit] CUDA 12.4 runtime library verified</div>
                      <div className="code-line" style={{ color: '#10B981' }}>✔ [VRAM Headroom] 79,240 MB available &gt; model requirement (68,400 MB)</div>
                      <div className="code-line" style={{ color: '#10B981' }}>✔ [Container Runtime] NVIDIA Container Toolkit socket /var/run/docker.sock ready</div>
                      <div className="code-line" style={{ color: '#10B981' }}>✔ [Storage Check] NVMe scratch space 480 GB available</div>
                      <div className="code-line" style={{ color: '#38BDF8', marginTop: '6px' }}>➜ Node Agent enrolled securely with Control Plane [Token ID: n-8942b]</div>
                    </div>

                    <div className="ast-retrieval-summary">
                      <span className="summary-label">RECONCILIATION LOOP:</span>
                      <span className="summary-match">Heartbeat interval: 5000ms. Auto-recovery enabled. Zero arbitrary command execution allowed.</span>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="pipeline-visual-content">
                    <div className="pipeline-row">
                      <div className="pipeline-step done">
                        <Terminal size={16} />
                        <span>OpenCode / Cursor</span>
                        <span className="pill-done">AGENT</span>
                      </div>
                      <div className="pipeline-connector" />
                      <div className="pipeline-step processing">
                        <ShieldCheck size={16} />
                        <span>Cloyst AI Gateway</span>
                        <span className="pill-speed">18.4ms</span>
                      </div>
                      <div className="pipeline-connector" />
                      <div className="pipeline-step ready">
                        <Cpu size={16} />
                        <span>vLLM Private GPU</span>
                        <span className="pill-ready">200 OK</span>
                      </div>
                    </div>

                    <div className="pipeline-diff-box" style={{ background: '#111116', padding: '16px', borderRadius: '8px' }}>
                      <div className="diff-header" style={{ color: '#A1A1AA', fontSize: '12px', borderBottom: '1px solid #27272A', paddingBottom: '8px' }}>
                        <code>TRACE #TR-9942 • POST /v1/chat/completions • HTTP 200 OK</code>
                      </div>
                      <div className="diff-lines" style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '13px', lineHeight: '1.6', marginTop: '8px' }}>
                        <div style={{ color: '#A1A1AA' }}>{`{`}</div>
                        <div style={{ color: '#E4E4E7', paddingLeft: '16px' }}>"model": <span style={{ color: '#38BDF8' }}>"llama-3.3-70b-instruct"</span>,</div>
                        <div style={{ color: '#E4E4E7', paddingLeft: '16px' }}>"tokens_prompt": <span style={{ color: '#F59E0B' }}>842</span>, "tokens_completion": <span style={{ color: '#F59E0B' }}>318</span>,</div>
                        <div style={{ color: '#E4E4E7', paddingLeft: '16px' }}>"gateway_latency_ms": <span style={{ color: '#10B981' }}>18.4</span>,</div>
                        <div style={{ color: '#E4E4E7', paddingLeft: '16px' }}>"data_egress_bytes": <span style={{ color: '#10B981' }}>0.00</span>,</div>
                        <div style={{ color: '#E4E4E7', paddingLeft: '16px' }}>"audit_logged": <span style={{ color: '#10B981' }}>true</span>, "raw_prompt_stored": <span style={{ color: '#EF4444' }}>false</span></div>
                        <div style={{ color: '#A1A1AA' }}>{`}`}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Visual Display Footer */}
              <div className="visual-display-footer">
                <div className="visual-footer-metric">
                  <span className="num">{steps[activeStep].metric}</span>
                  <span className="txt">{steps[activeStep].metricLabel}</span>
                </div>
                <button className="btn-pill-white" onClick={openDemoModal}>
                  <span>Schedule Architectural Walkthrough</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
