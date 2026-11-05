import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCpu, FiCode, FiLayers, FiCheckCircle } from 'react-icons/fi';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const focusAreas = [
    {
      icon: <FiCpu />,
      title: 'AI & Generative AI',
      color: '#8B5CF6',
      description: 'Building LLM-powered applications, multi-agent workflows, and advanced RAG architectures with LangChain and vector retrieval.',
      skills: ['Generative AI', 'Agentic AI', 'RAG Pipelines', 'LLMs', 'NLP'],
    },
    {
      icon: <FiCode />,
      title: 'Modern Software Engineering',
      color: '#22D3EE',
      description: 'Transforming complex algorithmic challenges into high-performance, maintainable software across backend and client platforms.',
      skills: ['Python', 'Java', 'Kotlin', 'JavaScript', 'SQL & APIs'],
    },
    {
      icon: <FiLayers />,
      title: 'Enterprise DXP & Delivery',
      color: '#A78BFA',
      description: 'Secondary enterprise expertise integrating robust modern Digital Experience Platforms and headless CMS architectures.',
      skills: ['AEM', 'Contentstack', 'Edge Delivery Services (EDS)'],
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">ABOUT ME</div>
          <h2 className="section-title">
            Engineering Intelligence Through <span className="text-gradient">Modern AI</span>
          </h2>
        </motion.div>

        {/* Master Profile & Narrative Card featuring profile-pic.jpeg and hero-portrait.jpg */}
        <div className="about-main-card glass-card">
          <div className="about-profile-grid">
            {/* Left: User Profile Picture Frame with Interactive Portrait Switcher */}
            <motion.div
              className="about-image-column"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="about-photo-wrapper">
                <div className="about-photo-glow" />
                <div className="about-photo-frame">
                  <img
                    src="/assets/profile-pic.jpeg"
                    alt="Ankit Siwach - AI/ML Engineer"
                    className="about-profile-img"
                  />
                  <div className="photo-corner corner-tl" />
                  <div className="photo-corner corner-br" />
                </div>

                {/* Status pill under photo */}
                <div className="photo-status-badge">
                  <span className="status-dot-active" />
                  <span>Ankit Siwach · AI/ML Engineer</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Narrative Bio with Fixed Roomy Padding */}
            <motion.div
              className="about-text-column"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="about-bio-container">
                <p className="bio-lead">
                  I am a software engineer focused on <strong>Artificial Intelligence, Machine Learning and Generative AI</strong>. 
                  My interests include building LLM-powered applications, RAG pipelines, agentic workflows and intelligent software systems.
                </p>
                <p className="bio-secondary">
                  I also have experience with DXP platforms such as <strong>AEM</strong> and <strong>Contentstack</strong>, 
                  along with Python and modern software development. I enjoy transforming complex problems into practical, 
                  scalable solutions that drive tangible value.
                </p>

                {/* Key Metrics / Highlights Strip */}
                <div className="about-metrics-strip">
                  <div className="metric-box">
                    <span className="metric-icon">🎯</span>
                    <div className="metric-data">
                      <span className="metric-title">Primary Focus</span>
                      <span className="metric-val text-cyan">AI/ML & GenAI</span>
                    </div>
                  </div>
                  <div className="metric-box">
                    <span className="metric-icon">⚡</span>
                    <div className="metric-data">
                      <span className="metric-title">Core Systems</span>
                      <span className="metric-val">Agentic AI & RAG</span>
                    </div>
                  </div>
                  <div className="metric-box">
                    <span className="metric-icon">🏢</span>
                    <div className="metric-data">
                      <span className="metric-title">Enterprise Edge</span>
                      <span className="metric-val">DXP (AEM/Contentstack)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="about-cards-grid">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              className="glass-card area-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.12 }}
            >
              <div className="area-icon-wrapper" style={{ color: area.color, background: `${area.color}15`, borderColor: `${area.color}35` }}>
                {area.icon}
              </div>
              <h3 className="area-title">{area.title}</h3>
              <p className="area-desc">{area.description}</p>
              <div className="area-skills">
                {area.skills.map((skill) => (
                  <span key={skill} className="area-skill-tag">
                    <FiCheckCircle className="tag-check" style={{ color: area.color }} />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
