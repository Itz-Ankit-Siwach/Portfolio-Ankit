import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './AINeuralVisual.css';

export default function AINeuralVisual() {
  const containerRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);

  return (
    <div className="ai-visual-wrapper" ref={containerRef}>
      {/* Background ambient glow rings */}
      <div className="ai-glow-orb ai-glow-orb-primary" />
      <div className="ai-glow-orb ai-glow-orb-secondary" />

      {/* Top Feature Badges - Cleanly positioned above the HUD to prevent any header overlap */}
      <div className="ai-visual-top-strip">
        <motion.div
          className="ai-tag-pill tag-violet"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="pill-sparkle">✦</span>
          <span>Generative AI Solutions</span>
        </motion.div>

        <motion.div
          className="ai-tag-pill tag-cyan"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        >
          <span className="pill-sparkle">⚡</span>
          <span>Autonomous Workflows</span>
        </motion.div>
      </div>

      {/* Main Glass System HUD */}
      <div className="ai-hud-card">
        {/* Terminal Header */}
        <div className="ai-hud-header">
          <div className="ai-hud-dots">
            <span className="dot dot-red" />
            <span className="dot dot-amber" />
            <span className="dot dot-green" />
          </div>
          <div className="ai-hud-status">
            <span className="status-ping" />
            <span className="status-text">AGENTIC RUNTIME ACTIVE</span>
          </div>
          <div className="ai-hud-tag">v2.4_RAG</div>
        </div>

        {/* Neural Network SVG Canvas */}
        <div className="ai-network-container">
          <svg className="ai-network-svg" viewBox="0 0 460 340" fill="none">
            {/* Connecting Synaptic Pathways with animated dashes */}
            <path d="M 90 80 Q 160 120 230 170" className="synapse-path" />
            <path d="M 90 170 L 230 170" className="synapse-path active-synapse" />
            <path d="M 90 260 Q 160 220 230 170" className="synapse-path" />

            <path d="M 230 170 Q 300 120 370 110" className="synapse-path active-synapse-cyan" />
            <path d="M 230 170 Q 300 220 370 230" className="synapse-path" />

            <path d="M 90 80 Q 230 80 230 100" className="synapse-path" />
            <path d="M 230 240 Q 230 260 90 260" className="synapse-path" />

            {/* Glowing signal particles travelling along curves */}
            <circle r="3.5" fill="#22D3EE" className="signal-particle p1">
              <animateMotion
                path="M 90 170 L 230 170"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="3" fill="#8B5CF6" className="signal-particle p2">
              <animateMotion
                path="M 90 80 Q 160 120 230 170"
                dur="3.2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="3.5" fill="#8B5CF6" className="signal-particle p3">
              <animateMotion
                path="M 230 170 Q 300 120 370 110"
                dur="2.6s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="3" fill="#22D3EE" className="signal-particle p4">
              <animateMotion
                path="M 230 170 Q 300 220 370 230"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          {/* Interactive Node Anchors placed on top */}
          <div className="nodes-overlay">
            {/* Input Column */}
            <div className="node-col col-input">
              <span className="col-label">INPUT / CONTEXT</span>
              <div
                className={`node-chip ${activeNode === 'rag' ? 'active' : ''}`}
                onMouseEnter={() => setActiveNode('rag')}
                onMouseLeave={() => setActiveNode(null)}
              >
                <span className="node-icon">🔍</span>
                <span className="node-title">RAG Retrieval</span>
              </div>
              <div
                className={`node-chip ${activeNode === 'vector' ? 'active' : ''}`}
                onMouseEnter={() => setActiveNode('vector')}
                onMouseLeave={() => setActiveNode(null)}
              >
                <span className="node-icon">⚡</span>
                <span className="node-title">Vector Memory</span>
              </div>
              <div
                className={`node-chip ${activeNode === 'prompt' ? 'active' : ''}`}
                onMouseEnter={() => setActiveNode('prompt')}
                onMouseLeave={() => setActiveNode(null)}
              >
                <span className="node-icon">💬</span>
                <span className="node-title">Prompt Engine</span>
              </div>
            </div>

            {/* Central LLM / Agent Hub */}
            <div className="node-col col-center">
              <span className="col-label">REASONING CORE</span>
              <motion.div
                className="central-ai-hub"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(139, 92, 246, 0.35)',
                    '0 0 45px rgba(34, 211, 238, 0.45)',
                    '0 0 20px rgba(139, 92, 246, 0.35)',
                  ],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="hub-core-ring ring-spin" />
                <div className="hub-core-ring ring-reverse" />
                <div className="hub-inner">
                  <span className="hub-icon">🤖</span>
                  <span className="hub-name">LLM CORE</span>
                  <span className="hub-sub">Agentic Loop</span>
                </div>
              </motion.div>
            </div>

            {/* Output Column */}
            <div className="node-col col-output">
              <span className="col-label">ACTIONS & SYNTHESIS</span>
              <div
                className={`node-chip ${activeNode === 'agent' ? 'active' : ''}`}
                onMouseEnter={() => setActiveNode('agent')}
                onMouseLeave={() => setActiveNode(null)}
              >
                <span className="node-icon">🛠️</span>
                <span className="node-title">Tool Calling</span>
              </div>
              <div
                className={`node-chip ${activeNode === 'synth' ? 'active' : ''}`}
                onMouseEnter={() => setActiveNode('synth')}
                onMouseLeave={() => setActiveNode(null)}
              >
                <span className="node-icon">✨</span>
                <span className="node-title">GenAI Output</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Metrics Telemetry Strip */}
        <div className="ai-hud-footer">
          <div className="telemetry-item">
            <span className="telemetry-label">Architecture</span>
            <span className="telemetry-val">Agentic + RAG</span>
          </div>
          <div className="telemetry-divider" />
          <div className="telemetry-item">
            <span className="telemetry-label">Vector Dim</span>
            <span className="telemetry-val">1536 cosine</span>
          </div>
          <div className="telemetry-divider" />
          <div className="telemetry-item">
            <span className="telemetry-label">Latency</span>
            <span className="telemetry-val text-cyan">&lt; 140ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
