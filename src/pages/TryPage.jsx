import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  ArrowRight, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  Code2,
  FolderGit2,
  Eye,
  Activity,
  Server,
  KeyRound,
  Shield,
  Lock,
  Database
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

export default function TryPage({ setActivePage, openDemoModal }) {
  const [activePkg, setActivePkg] = useState('curl');
  const [activeIde, setActiveIde] = useState('opencode');
  const [copiedHero, setCopiedHero] = useState(false);
  const [copiedPromptIndex, setCopiedPromptIndex] = useState(null);

  const handleCopyHero = () => {
    navigator.clipboard.writeText('curl -fsSL https://get.cloyst.com | bash');
    setCopiedHero(true);
    setTimeout(() => setCopiedHero(false), 2000);
  };

  const handleCopyPrompt = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptIndex(index);
    setTimeout(() => setCopiedPromptIndex(null), 2000);
  };

  const installCommands = {
    curl: 'curl -fsSL https://get.cloyst.com | bash',
    docker: 'docker run -d --gpus all -p 8000:8000 -p 8001:8001 cloyst/cloyst:latest',
    pip: 'pip install cloyst-cli && cloyst init'
  };

  const agentConfigs = {
    opencode: {
      name: 'OpenCode Agent',
      desc: 'Connect OpenCode autonomous terminal agent to Cloyst AI Gateway for complete sovereign code authoring.',
      steps: [
        'Ensure Cloyst Gateway is running at http://localhost:8000/v1.',
        'Export OPENAI_BASE_URL pointing to your local Cloyst Gateway endpoint.',
        'Set your Cloyst scoped project API key.',
        'Run opencode with an autonomous task instruction.'
      ],
      codeTitle: 'Terminal (OpenCode Setup)',
      code: `export OPENAI_BASE_URL="http://localhost:8000/v1"
export OPENAI_API_KEY="clst_live_9f82d1c7a4b049"

opencode run --auto "Create pii_scrubber.py with mask_email and mask_credit_card functions."`
    },
    cursor: {
      name: 'Cursor IDE',
      desc: 'Point Cursor directly to Cloyst as a custom private OpenAI model provider.',
      steps: [
        'Open Cursor Settings (Cmd+,) and navigate to Models.',
        'Under "OpenAI API Key", check Override OpenAI Base URL.',
        'Enter Base URL: http://localhost:8000/v1 and enter your Cloyst API key.',
        'Set Model Name: llama-3.3-70b-instruct (or your deployed model) and click Save.'
      ],
      codeTitle: 'Cursor Settings → Models',
      code: `// Cursor Custom Model Configuration:
Base URL:  http://localhost:8000/v1
API Key:   clst_live_9f82d1c7a4b049
Model:     llama-3.3-70b-instruct`
    },
    claude: {
      name: 'Claude Code CLI',
      desc: 'Route Anthropic Claude Code CLI loops through Cloyst with project rate limiting and full audit logging.',
      steps: [
        'Export ANTHROPIC_BASE_URL pointing to the Cloyst AI Gateway.',
        'Provide your Cloyst RBAC project key.',
        'Launch claude in your terminal — all requests route to private vLLM compute.'
      ],
      codeTitle: 'Terminal (Claude Code)',
      code: `export ANTHROPIC_BASE_URL="http://localhost:8000/v1"
export ANTHROPIC_API_KEY="clst_live_9f82d1c7a4b049"

claude "Refactor user authentication pipeline with strict type annotations"`
    },
    vscode: {
      name: 'VS Code & Copilot',
      desc: 'Connect VS Code AI extensions (Continue, Roo Code, Cline) directly to Cloyst Gateway.',
      steps: [
        'Open your extension configuration (e.g. .continue/config.json).',
        'Add a model entry with provider "openai" pointing to http://localhost:8000/v1.',
        'Specify your deployed model tag (e.g. llama-3.3-70b-instruct).'
      ],
      codeTitle: '~/.continue/config.json',
      code: `{
  "models": [
    {
      "title": "Cloyst Private LLM",
      "provider": "openai",
      "model": "llama-3.3-70b-instruct",
      "apiBase": "http://localhost:8000/v1",
      "apiKey": "clst_live_9f82d1c7a4b049"
    }
  ]
}`
    },
    python: {
      name: 'Python OpenAI SDK',
      desc: 'Drop-in replacement for the official OpenAI Python SDK. Exactly two parameters changed.',
      steps: [
        'Import standard OpenAI client from the openai package.',
        'Set base_url to your Cloyst Gateway: http://localhost:8000/v1.',
        'Execute chat completions with streaming SSE support.'
      ],
      codeTitle: 'main.py (OpenAI SDK)',
      code: `from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:8000/v1",
    api_key="clst_live_9f82d1c7a4b049"
)

response = client.chat.completions.create(
    model="llama-3.3-70b-instruct",
    messages=[{"role": "user", "content": "Generate security audit script."}],
    temperature=0.2
)
print(response.choices[0].message.content)`
    }
  };

  const testPrompts = [
    {
      title: '01 / Autonomous Security Utility',
      prompt: 'Create pii_scrubber.py with functions mask_email and mask_credit_card and a demo execution block.',
      explanation: 'OpenCode queries the Cloyst AI Gateway, receives completions in sub-second latency, and autonomously writes the file to disk. Cloyst logs a 200 OK trace with zero external egress.'
    },
    {
      title: '02 / Autonomous Pytest Generation',
      prompt: 'Write a Python file named test_pii.py with pytest test cases testing mask_email and mask_credit_card from pii_scrubber. Return pure Python without markdown.',
      explanation: 'The model analyzes the newly generated code and produces a rigorous test suite. The trace lands in Cloyst with token consumption, response latency, and metadata-only governance.'
    },
    {
      title: '03 / Zero Cloud Egress Audit Verification',
      prompt: 'Verify network traffic sockets: zero outbound packets transmitted to api.openai.com or api.anthropic.com.',
      explanation: 'Check the Cloyst Control Plane at http://localhost:8001/console. Every turn was served locally by vLLM on your private GPU silicon with 100% data sovereignty.'
    }
  ];

  return (
    <div className="m5-about-page-root">
      
      {/* ── 1. Top Hero Section ───────────────────────────────────────────── */}
      <section className="m5-about-black-hero">
        <div className="m5-hero-inner">
          <div className="m5-about-hero-pill">
            SOVEREIGN DEVELOPER QUICKSTART
          </div>

          <h1 className="m5-about-black-hero-title">
            Deploy Cloyst in Under 10 Minutes
          </h1>

          <p className="m5-about-black-hero-sub">
            The model-agnostic sovereign AI infrastructure platform. Run hardware preflight diagnostics, launch private vLLM model runtimes, and connect AI coding agents with zero cloud egress.
          </p>

          {/* Quick Terminal Command in Hero */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            borderRadius: '9999px',
            padding: '8px 18px',
            marginTop: '28px',
            backdropFilter: 'blur(16px)',
            fontFamily: 'PolySans Mono, monospace',
            fontSize: '14px',
            color: '#FFFFFF'
          }}>
            <Terminal size={15} color="#FF5A52" />
            <span>curl -fsSL https://get.cloyst.com | bash</span>
            <button
              onClick={handleCopyHero}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                borderRadius: '9999px',
                padding: '4px 10px',
                color: '#FFFFFF',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '12px',
                fontFamily: 'PolySans Mono, monospace',
                transition: 'background 0.2s ease'
              }}
              title="Copy install command"
            >
              {copiedHero ? <Check size={12} color="#42FFFC" /> : <Copy size={12} />}
              <span>{copiedHero ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. White Content Section ──────────────────────────────────────── */}
      <div className="m5-about-page-content">
        <div className="m5-container">

          {/* Editorial Intro */}
          <section className="m5-about-hero-block" style={{ marginBottom: '56px' }}>
            <span className="m5-about-section-tag">THREE-STEP DEPLOYMENT FLOW</span>
            <h2 className="m5-about-title">
              Turnkey private AI infrastructure in three commands.
            </h2>
            <p className="m5-about-lead">
              Cloyst runs 100% inside your infrastructure perimeter. Automated GPU preflight validation, self-hosted control plane, high-throughput vLLM orchestration, and drop-in OpenAI API gateway.
            </p>
          </section>

          {/* ── STEP 1: INSTALL & PREFLIGHT ── */}
          <div className="m5-try-step-wrapper">
            <div className="m5-try-step-header">
              <span className="m5-value-num">STEP 01 / HARDWARE PREFLIGHT</span>
              <h3 className="m5-try-step-title">Run Automated GPU Preflight Diagnostics</h3>
              <p className="m5-try-step-desc">
                The Cloyst preflight engine scans your host server to verify GPU architecture, available VRAM, NVIDIA drivers, CUDA 12.x libraries, and container toolkit sockets.
              </p>
            </div>

            {/* Install method toggle */}
            <div className="m5-try-pkg-tabs">
              <button 
                className={`m5-try-pkg-btn ${activePkg === 'curl' ? 'active' : ''}`}
                onClick={() => setActivePkg('curl')}
              >
                curl install script
              </button>
              <button 
                className={`m5-try-pkg-btn ${activePkg === 'docker' ? 'active' : ''}`}
                onClick={() => setActivePkg('docker')}
              >
                docker container
              </button>
              <button 
                className={`m5-try-pkg-btn ${activePkg === 'pip' ? 'active' : ''}`}
                onClick={() => setActivePkg('pip')}
              >
                pip cli
              </button>
            </div>

            <CodeBlock 
              title="Terminal (Install &amp; Preflight)" 
              code={`${installCommands[activePkg]}\ncloyst node preflight --verbose`} 
              language="bash" 
            />

            {/* Under the Hood 3-Col Cards */}
            <div className="m5-try-micro-grid">
              <div className="m5-try-micro-card">
                <h4 className="m5-try-micro-heading">GPU &amp; VRAM Verification</h4>
                <p className="m5-try-micro-text">
                  Detects SXM5/PCIe NVIDIA GPUs (H100, A100, L40S, RTX) and verifies memory headroom for target model weights.
                </p>
              </div>

              <div className="m5-try-micro-card">
                <h4 className="m5-try-micro-heading">CUDA &amp; Driver Check</h4>
                <p className="m5-try-micro-text">
                  Confirms driver 535+ and CUDA 12.x runtime compatibility, preventing silent runtime segfaults.
                </p>
              </div>

              <div className="m5-try-micro-card">
                <h4 className="m5-try-micro-heading">Container Engine Hook</h4>
                <p className="m5-try-micro-text">
                  Validates NVIDIA Container Toolkit socket availability to launch hardware-accelerated isolated runtimes.
                </p>
              </div>
            </div>
          </div>

          {/* ── STEP 2: START CLOYST & DEPLOY MODEL ── */}
          <div className="m5-try-step-wrapper">
            <div className="m5-try-step-header">
              <span className="m5-value-num">STEP 02 / MODEL DEPLOYMENT</span>
              <h3 className="m5-try-step-title">Start Cloyst &amp; Deploy Private Model</h3>
              <p className="m5-try-step-desc">
                Launch the Cloyst Control Plane and Node Agent. Deploy a model from local offline artifacts or registry cache with high-throughput vLLM PagedAttention.
              </p>
            </div>

            <CodeBlock 
              title="Terminal (Start &amp; Deploy Model)" 
              code={`# Start Cloyst Control Plane & Node Agent daemon
cloyst start --mode airgap

# Deploy open-weight model with high-speed vLLM runtime
cloyst deploy \\
  --model llama-3.3-70b-instruct \\
  --runtime vllm \\
  --tensor-parallel-size 1 \\
  --gpu-memory-utilization 0.90`} 
              language="bash" 
            />

            <div className="m5-try-micro-grid">
              <div className="m5-try-micro-card">
                <h4 className="m5-try-micro-heading">Control Plane (:8001)</h4>
                <p className="m5-try-micro-text">
                  Self-hosted management console, model registry, PostgreSQL state, and tamper-evident audit log manager.
                </p>
              </div>

              <div className="m5-try-micro-card">
                <h4 className="m5-try-micro-heading">AI Gateway (:8000)</h4>
                <p className="m5-try-micro-text">
                  High-throughput OpenAI-compatible API gateway with sub-30ms p95 overhead and metadata-only telemetry.
                </p>
              </div>

              <div className="m5-try-micro-card">
                <h4 className="m5-try-micro-heading">Health Heartbeats</h4>
                <p className="m5-try-micro-text">
                  Continuous node agent reconciliation loops detect hardware throttling and container failures automatically.
                </p>
              </div>
            </div>
          </div>

          {/* ── STEP 3: CONNECT AGENTS (INTERACTIVE IDE TABS) ── */}
          <div className="m5-try-step-wrapper">
            <div className="m5-try-step-header">
              <span className="m5-value-num">STEP 03 / AGENT CONNECTION</span>
              <h3 className="m5-try-step-title">Connect Your AI Coding Agents &amp; SDKs</h3>
              <p className="m5-try-step-desc">
                Select your developer tool to see the exact drop-in configuration. No proprietary plugins required:
              </p>
            </div>

            {/* IDE Selector Tabs */}
            <div className="m5-try-ide-tabs">
              {Object.keys(agentConfigs).map((key) => {
                const item = agentConfigs[key];
                return (
                  <button
                    key={key}
                    className={`m5-try-ide-tab-btn ${activeIde === key ? 'active' : ''}`}
                    onClick={() => setActiveIde(key)}
                  >
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active IDE Details */}
            <div className="m5-try-ide-panel">
              <p style={{
                fontFamily: 'PolySans, sans-serif',
                fontSize: '15px',
                color: '#555555',
                marginBottom: '16px'
              }}>
                {agentConfigs[activeIde].desc}
              </p>

              <ol style={{
                fontFamily: 'PolySans, sans-serif',
                fontSize: '14.5px',
                color: '#222222',
                paddingLeft: '20px',
                marginBottom: '16px',
                lineHeight: '1.7'
              }}>
                {agentConfigs[activeIde].steps.map((step, idx) => (
                  <li key={idx} style={{ marginBottom: '6px' }}>{step}</li>
                ))}
              </ol>

              <CodeBlock 
                title={agentConfigs[activeIde].codeTitle} 
                code={agentConfigs[activeIde].code} 
                language={activeIde === 'python' ? 'python' : 'bash'} 
              />
            </div>
          </div>

          {/* ── STEP 4: VERIFICATION PLAYBOOK (INVESTOR DEMO SCRIPT) ── */}
          <div className="m5-about-section-header" style={{ marginBottom: '36px' }}>
            <span className="m5-about-section-tag">VERIFICATION PLAYBOOK • LIVE AGENT TESTING</span>
            <h2 className="m5-about-section-title">Test Cloyst with your agent in real-time.</h2>
            <p className="m5-about-section-sub">
              Execute these real-world autonomous coding commands in your terminal to verify private model inference, tool execution, and zero cloud egress:
            </p>
          </div>

          <div className="m5-try-prompts-grid">
            {testPrompts.map((item, idx) => (
              <div key={idx} className="m5-try-prompt-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span className="m5-value-num" style={{ margin: 0, fontSize: '13px' }}>{item.title}</span>
                  <button
                    onClick={() => handleCopyPrompt(item.prompt, idx)}
                    className="copy-btn"
                    style={{ background: '#FFFFFF', color: '#111111', borderColor: '#E0E0E0' }}
                  >
                    {copiedPromptIndex === idx ? (
                      <>
                        <Check size={12} color="#059669" />
                        <span>Copied Prompt</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="m5-try-prompt-quote">
                  “{item.prompt}”
                </div>

                <p className="m5-try-prompt-exp">
                  <strong>What happens:</strong> {item.explanation}
                </p>
              </div>
            ))}
          </div>

          {/* ── 4-Card Grid: Enterprise Operations Toolkit ── */}
          <div className="m5-about-section-header" style={{ marginTop: '72px' }}>
            <span className="m5-about-section-tag">SOVEREIGN OPERATIONS TOOLKIT</span>
            <h2 className="m5-about-section-title">Production CLI utilities for private AI.</h2>
            <p className="m5-about-section-sub">
              Purpose-built commands to manage GPU nodes, bundle air-gapped artifacts, and audit inference compliance.
            </p>
          </div>

          <div className="m5-values-grid" style={{ marginBottom: '80px' }}>
            <div className="m5-value-card">
              <span className="m5-value-num">01 / NODE HEALTH</span>
              <div>
                <h4 className="m5-value-heading">GPU Topology &amp; Heartbeats</h4>
                <p className="m5-value-desc">
                  Run <code style={{ color: '#B92B23' }}>cloyst node list</code> to inspect active GPU nodes, temperature, memory saturation, and heartbeat latency.
                </p>
              </div>
            </div>

            <div className="m5-value-card">
              <span className="m5-value-num">02 / AIR-GAP BUNDLES</span>
              <div>
                <h4 className="m5-value-heading">Offline Artifact Packaging</h4>
                <p className="m5-value-desc">
                  Run <code style={{ color: '#B92B23' }}>cloyst bundle create</code> to export signed container images, model weights, and dependency manifests for disconnected data centers.
                </p>
              </div>
            </div>

            <div className="m5-value-card">
              <span className="m5-value-num">03 / TRACING &amp; AUDITING</span>
              <div>
                <h4 className="m5-value-heading">Tamper-Evident Logs</h4>
                <p className="m5-value-desc">
                  Run <code style={{ color: '#B92B23' }}>cloyst audit tail</code> to view real-time request metadata, token consumption, and verify 0 bytes outbound egress.
                </p>
              </div>
            </div>

            <div className="m5-value-card">
              <span className="m5-value-num">04 / RBAC &amp; QUOTAS</span>
              <div>
                <h4 className="m5-value-heading">Project API Key Scoping</h4>
                <p className="m5-value-desc">
                  Run <code style={{ color: '#B92B23' }}>cloyst key create --project sec-ops</code> to generate cryptographically scoped keys with hard token rate limits.
                </p>
              </div>
            </div>
          </div>

          {/* ── Call to Action Banner ── */}
          <div className="m5-about-cta-card">
            <h2 className="m5-about-cta-title">
              Ready to deploy Cloyst across your enterprise?
            </h2>
            <p className="m5-about-cta-desc">
              We work directly with engineering leaders and software vendors to architect air-gapped data centers and customer cloud GPU clusters.
            </p>
            <div className="m5-about-cta-actions">
              <button
                className="m5-hero-btn-primary"
                style={{ padding: '12px 28px', fontSize: '15px' }}
                onClick={openDemoModal}
              >
                <span>Request Enterprise Pilot</span>
                <ArrowRight size={16} />
              </button>

              <button
                className="m5-hero-btn-secondary"
                style={{ padding: '12px 28px', fontSize: '15px' }}
                onClick={() => setActivePage('docs')}
              >
                <span>Read Architecture Docs</span>
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
