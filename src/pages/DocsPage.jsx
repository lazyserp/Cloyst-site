import React, { useState, useEffect } from 'react';
import Eyebrow from '../components/Eyebrow';
import CodeBlock from '../components/CodeBlock';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  Lock,
  Server,
  Cpu,
  CheckCircle2,
  Terminal,
  Code2,
  KeyRound,
  FileCheck2,
  Activity,
  Database
} from 'lucide-react';

export default function DocsPage({ openDemoModal }) {
  const [activeSection, setActiveSection] = useState('system-architecture');
  const [activeSetupTab, setActiveSetupTab] = useState('opencode');

  useEffect(() => {
    const sectionIds = [
      'system-architecture',
      'gpu-preflight',
      'api-compatibility',
      'airgap-bundles',
      'security-governance',
      'faq'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const setupConfigs = {
    opencode: {
      name: 'OpenCode Agent',
      subtitle: 'Native terminal coding agent with zero cloud egress',
      steps: [
        'Export OPENAI_BASE_URL to point to http://localhost:8000/v1.',
        'Export your Cloyst RBAC project key: OPENAI_API_KEY=clst_live_...',
        'Run opencode with your prompt — execution is 100% sovereign.'
      ],
      codeTitle: 'Terminal (OpenCode Setup)',
      code: `export OPENAI_BASE_URL="http://localhost:8000/v1"
export OPENAI_API_KEY="clst_live_9f82d1c7a4b049"

opencode run --auto "Create pii_scrubber.py with mask_email and mask_credit_card."`
    },
    cursor: {
      name: 'Cursor IDE',
      subtitle: 'Drop-in custom OpenAI model provider in Cursor',
      steps: [
        'Open Cursor Settings (Cmd+,) and navigate to Models.',
        'Enable "Override OpenAI Base URL" and enter http://localhost:8000/v1.',
        'Enter your Cloyst API Key and specify model name: llama-3.3-70b-instruct.',
        'Chat with your private LLM with verified ground truth.'
      ],
      codeTitle: 'Cursor Settings → Models',
      code: `// Add to Cursor Settings > Models > OpenAI API
Base URL: http://localhost:8000/v1
API Key:  clst_live_9f82d1c7a4b049
Model:    llama-3.3-70b-instruct`
    },
    claude: {
      name: 'Claude Code CLI',
      subtitle: 'Autonomous developer loop with metadata audit logging',
      steps: [
        'Point ANTHROPIC_BASE_URL to the Cloyst AI Gateway.',
        'Pass your Cloyst authentication token.',
        'Execute multi-file refactoring with zero outbound internet traffic.'
      ],
      codeTitle: 'Terminal (Claude Code)',
      code: `export ANTHROPIC_BASE_URL="http://localhost:8000/v1"
export ANTHROPIC_API_KEY="clst_live_9f82d1c7a4b049"

claude "Audit system authentication architecture and refactor"`
    },
    python: {
      name: 'Python OpenAI SDK',
      subtitle: 'Drop-in replacement for the official OpenAI SDK',
      steps: [
        'Initialize standard OpenAI client instance.',
        'Configure base_url to http://localhost:8000/v1 with Cloyst API key.',
        'Stream chat completions with sub-30ms gateway latency.'
      ],
      codeTitle: 'main.py (OpenAI SDK)',
      code: `from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:8000/v1",
    api_key="clst_live_9f82d1c7a4b049"
)

stream = client.chat.completions.create(
    model="llama-3.3-70b-instruct",
    messages=[{"role": "user", "content": "Analyze security boundaries."}],
    stream=True
)
for chunk in stream:
    print(chunk.choices[0].delta.content or "", end="")`
    }
  };

  return (
    <div className="container docs-layout">
      {/* ── Sidebar ───────────────────────────────────────────────────────── */}
      <aside className="docs-sidebar">
        <div className="docs-sidebar-group">
          <div className="docs-sidebar-title">Architecture</div>
          <ul className="docs-sidebar-links">
            <li>
              <span
                className={`docs-sidebar-link ${activeSection === 'system-architecture' ? 'active' : ''}`}
                onClick={() => scrollToSection('system-architecture')}
              >
                System Architecture
              </span>
            </li>
            <li>
              <span
                className={`docs-sidebar-link ${activeSection === 'gpu-preflight' ? 'active' : ''}`}
                onClick={() => scrollToSection('gpu-preflight')}
              >
                GPU Diagnostics &amp; Preflight
              </span>
            </li>
          </ul>
        </div>

        <div className="docs-sidebar-group">
          <div className="docs-sidebar-title">Integration</div>
          <ul className="docs-sidebar-links">
            <li>
              <span
                className={`docs-sidebar-link ${activeSection === 'api-compatibility' ? 'active' : ''}`}
                onClick={() => scrollToSection('api-compatibility')}
              >
                OpenAI API Compatibility
              </span>
            </li>
            <li>
              <span
                className={`docs-sidebar-link ${activeSection === 'airgap-bundles' ? 'active' : ''}`}
                onClick={() => scrollToSection('airgap-bundles')}
              >
                Air-Gapped Offline Bundles
              </span>
            </li>
          </ul>
        </div>

        <div className="docs-sidebar-group">
          <div className="docs-sidebar-title">Security &amp; Governance</div>
          <ul className="docs-sidebar-links">
            <li>
              <span
                className={`docs-sidebar-link ${activeSection === 'security-governance' ? 'active' : ''}`}
                onClick={() => scrollToSection('security-governance')}
              >
                RBAC &amp; Threat Modeling
              </span>
            </li>
            <li>
              <span
                className={`docs-sidebar-link ${activeSection === 'faq' ? 'active' : ''}`}
                onClick={() => scrollToSection('faq')}
              >
                Frequently Asked Questions
              </span>
            </li>
          </ul>
        </div>
      </aside>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <main className="docs-content">
        {/* 1. System Architecture */}
        <section className="docs-article" id="system-architecture">
          <Eyebrow>Sovereign System Architecture</Eyebrow>
          <h1 className="docs-h1" style={{ fontWeight: 350, letterSpacing: '-1.5px' }}>Cloyst System Architecture</h1>
          <p className="docs-p">
            <span style={{ color: '#FFFFFF', fontWeight: 450 }}>
              Cloyst is a model-agnostic enterprise AI platform engineered to deploy, operate, secure, govern, and observe private AI models across air-gapped on-premises data centers and customer-controlled GPU infrastructure.
            </span>
          </p>

          {/* 3 Principal Subsystems Diagram */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px', margin: '32px 0' }}>
            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
              <div style={{ color: '#FF5A52', fontWeight: 600, fontSize: '0.82rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Subsystem 01</div>
              <h3 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '8px', fontWeight: 450 }}>Control Plane</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                Self-hosted FastAPI &amp; PostgreSQL management engine. Governs model registries, project-scoped RBAC, node enrollment, and tamper-evident audit logs without external dependencies.
              </p>
            </div>

            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
              <div style={{ color: '#FF5A52', fontWeight: 600, fontSize: '0.82rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Subsystem 02</div>
              <h3 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '8px', fontWeight: 450 }}>Node Agent</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                Runs on managed GPU servers. Executes hardware preflight checks (CUDA, VRAM, drivers), reports health heartbeats, and manages vLLM / llama.cpp containers within a validated envelope.
              </p>
            </div>

            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
              <div style={{ color: '#FF5A52', fontWeight: 600, fontSize: '0.82rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Subsystem 03</div>
              <h3 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '8px', fontWeight: 450 }}>AI Gateway</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                High-throughput OpenAI-compatible proxy. Exposes /v1/chat/completions with sub-30ms p95 overhead, rate limiting, and privacy-preserving metadata telemetry.
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '20px 24px', margin: '24px 0' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', margin: 0 }}>
              <span style={{ color: '#FFFFFF', fontWeight: 450 }}>The Cloyst Invariant:</span> Cloyst strictly separates model artifacts, inference runtimes, physical infrastructure, and API governance. The platform never depends on external cloud services during operation.
            </p>
          </div>
        </section>

        {/* 2. GPU Preflight Diagnostics */}
        <section className="docs-article" id="gpu-preflight">
          <Eyebrow>Autonomous Hardware Discovery</Eyebrow>
          <h1 className="docs-h1" style={{ fontWeight: 350, letterSpacing: '-1.5px' }}>GPU Diagnostics &amp; Preflight Checker</h1>
          <p className="docs-p">
            GPU compatibility is a first-class feature in Cloyst. The automated preflight checker prevents deployment failures by validating your physical environment before runtime spin-up.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '28px 0' }}>
            <div className="feature-doc-card">
              <div className="feature-doc-icon" style={{ background: 'rgba(239, 68, 68, 0.12)', color: '#FF5A52' }}>
                <Cpu size={20} />
              </div>
              <h3 className="feature-doc-title">GPU Detection &amp; VRAM Verification</h3>
              <p className="feature-doc-text">
                Discovers NVIDIA GPUs via NVML. Calculates usable VRAM headroom against target model weight requirements, preventing Out-Of-Memory (OOM) fatal crashes.
              </p>
            </div>

            <div className="feature-doc-card">
              <div className="feature-doc-icon" style={{ background: 'rgba(59, 130, 246, 0.12)', color: '#60A5FA' }}>
                <Zap size={20} />
              </div>
              <h3 className="feature-doc-title">CUDA Toolkit &amp; Driver Compatibility</h3>
              <p className="feature-doc-text">
                Verifies NVIDIA driver 535+ and CUDA 12.x library compatibility across host and container layers, providing actionable remediation instructions on mismatch.
              </p>
            </div>

            <div className="feature-doc-card">
              <div className="feature-doc-icon" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#34D399' }}>
                <ShieldCheck size={20} />
              </div>
              <h3 className="feature-doc-title">Container Engine &amp; NVIDIA Toolkit</h3>
              <p className="feature-doc-text">
                Confirms availability of <code style={{ color: '#FF5A52' }}>/var/run/docker.sock</code> and NVIDIA Container Toolkit runtime hooks for hardware-accelerated execution.
              </p>
            </div>

            <div className="feature-doc-card">
              <div className="feature-doc-icon" style={{ background: 'rgba(245, 158, 11, 0.12)', color: '#F59E0B' }}>
                <Database size={20} />
              </div>
              <h3 className="feature-doc-title">NVMe Scratch &amp; Port Verification</h3>
              <p className="feature-doc-text">
                Checks disk storage capacity for uncompressed model weights and verifies local network ports (:8000 Gateway, :8001 Control Plane) are unblocked.
              </p>
            </div>
          </div>

          <CodeBlock
            title="Terminal Preflight Command"
            code={`$ cloyst node preflight --verbose

[1/5] GPU Discovery: 1x NVIDIA H100 80GB SXM5 (Driver: 550.54.14) ..... [PASS]
[2/5] CUDA Runtime: CUDA 12.4 library hooks verified ................. [PASS]
[3/5] Memory Headroom: 79,240 MB available (> 68,400 MB required) ..... [PASS]
[4/5] Container Toolkit: /var/run/docker.sock with nvidia runtime ..... [PASS]
[5/5] Storage & Network: 480 GB NVMe available, ports 8000/8001 open .. [PASS]

Preflight check passed. Node is ready for Cloyst model enrollment.`}
            language="bash"
          />
        </section>

        {/* 3. API Compatibility Hub */}
        <section className="docs-article" id="api-compatibility">
          <Eyebrow>Universal Drop-In Integration</Eyebrow>
          <h1 className="docs-h1" style={{ fontWeight: 350, letterSpacing: '-1.5px' }}>OpenAI API Compatibility</h1>
          <p className="docs-p">
            The Cloyst AI Gateway serves standard OpenAI-compatible endpoints. Any tool, coding agent, or framework that supports OpenAI works immediately with Cloyst.
          </p>

          <div className="setup-hub-card">
            <div className="setup-hub-tabs">
              {Object.keys(setupConfigs).map((key) => {
                const conf = setupConfigs[key];
                const isActive = activeSetupTab === key;
                return (
                  <button
                    key={key}
                    className={`setup-tab-item ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveSetupTab(key)}
                  >
                    <span>{conf.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="setup-hub-body">
              <div className="setup-hub-header-row">
                <div>
                  <h3 className="setup-hub-title">{setupConfigs[activeSetupTab].name}</h3>
                  <p className="setup-hub-sub">{setupConfigs[activeSetupTab].subtitle}</p>
                </div>
                <span className="setup-mcp-badge">OpenAI Drop-In</span>
              </div>

              <div className="setup-steps-list">
                {setupConfigs[activeSetupTab].steps.map((step, idx) => (
                  <div key={idx} className="setup-step-row">
                    <span className="setup-step-num">{idx + 1}</span>
                    <span className="setup-step-text">{step}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '20px' }}>
                <CodeBlock
                  title={setupConfigs[activeSetupTab].codeTitle}
                  code={setupConfigs[activeSetupTab].code}
                  language={activeSetupTab === 'python' ? 'python' : 'bash'}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Air-Gapped Offline Bundles */}
        <section className="docs-article" id="airgap-bundles">
          <Eyebrow>Disconnected Infrastructure</Eyebrow>
          <h1 className="docs-h1" style={{ fontWeight: 350, letterSpacing: '-1.5px' }}>Air-Gapped Operations &amp; Offline Bundles</h1>
          <p className="docs-p">
            Cloyst is engineered from first principles for disconnected enclaves where zero internet connectivity is permitted.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '24px 0' }}>
            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <Lock size={22} color="#FF5A52" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '8px', fontWeight: 450 }}>Zero Egress &amp; No Phone-Home</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                The platform contains zero mandatory external telemetry, no remote license activation checks, and no external package manager dependencies during runtime.
              </p>
            </div>

            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <FileCheck2 size={22} color="#FF5A52" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '8px', fontWeight: 450 }}>Signed Offline Bundles</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Package application containers, vLLM inference runtimes, model artifacts, configuration templates, and SHA256 checksums into an air-gapped deployment archive.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Security & Threat Modeling */}
        <section className="docs-article" id="security-governance">
          <Eyebrow>Enterprise Security Governance</Eyebrow>
          <h1 className="docs-h1" style={{ fontWeight: 350, letterSpacing: '-1.5px' }}>Security, RBAC &amp; Threat Model</h1>
          <p className="docs-p">
            Cloyst incorporates defense-in-depth principles across the control plane, node agent, and inference gateway.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '24px 0' }}>
            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <ShieldCheck size={22} color="#FFFFFF" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '8px', fontWeight: 450 }}>Bounded Operational Envelope</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                The Node Agent never executes arbitrary shell commands received from the network. It only accepts explicitly defined, schema-validated operational instructions.
              </p>
            </div>

            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <Activity size={22} color="#FFFFFF" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '8px', fontWeight: 450 }}>Metadata-Only Audit Trails</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                To fulfill SOC2, HIPAA, and banking compliance without violating data privacy, Cloyst logs request timestamps, latency, and token counts without retaining raw prompts or sensitive PII.
              </p>
            </div>
          </div>
        </section>

        {/* 6. FAQ */}
        <section className="docs-article" id="faq">
          <Eyebrow>Enterprise FAQ</Eyebrow>
          <h1 className="docs-h1" style={{ fontWeight: 350, letterSpacing: '-1.5px' }}>Frequently Asked Questions</h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' }}>
            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '8px', fontWeight: 450 }}>Does Cloyst require external internet connectivity to operate?</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                No. In Mode A (Air-Gapped / On-Premises), Cloyst operates with zero internet dependency. Model artifacts, container runtimes, authentication, and audit logs are 100% self-hosted on your compute.
              </p>
            </div>

            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '8px', fontWeight: 450 }}>Which models and inference runtimes are supported?</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Cloyst is model-agnostic. It initially supports leading open-weight LLMs (Llama 3.3, DeepSeek-V3/R1, Qwen 2.5, Mistral) and customer fine-tuned weights using high-throughput vLLM (PagedAttention) and llama.cpp runtimes.
              </p>
            </div>

            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '8px', fontWeight: 450 }}>How do developer coding agents connect to Cloyst?</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                The Cloyst AI Gateway serves standard OpenAI-compatible endpoints (<code style={{ color: '#FF5A52' }}>/v1/chat/completions</code>). You configure tools like OpenCode, Cursor, Claude Code, or Copilot simply by setting the base URL to your Cloyst Gateway.
              </p>
            </div>

            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '8px', fontWeight: 450 }}>Can Cloyst run on customer cloud GPUs as well as bare metal?</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Yes. While we build air-gapped on-premises support first, Cloyst is architected to support customer-controlled cloud GPUs (e.g. RunPod, Lambda Labs, AWS/GCP private VPCs) using the same core contracts and node agent.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
