import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar, FiExternalLink } from 'react-icons/fi';
import './Experience.css';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const tenaraiSkills = [
    'Python (Programming Language)',
    'Large Language Models (LLM)',
    'Retrieval-Augmented Generation (RAG)',
    'Generative AI',
    'Agentic AI Development',
    'VectorDB',
    'Model Context Protocol (MCP)',
    'LangChain',
    'Langraph',
    'Pinecone.io',
    'AI Agents',
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">CAREER HISTORY</div>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated engineering trajectory across AI development and enterprise platforms.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="experience-timeline">
          {/* Company 1: Tenarai */}
          <motion.div
            className="timeline-item current-company"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Timeline indicator node */}
            <div className="timeline-node">
              <span className="node-pulse" />
              <div className="node-icon-box">
                <FiBriefcase />
              </div>
            </div>

            {/* Experience Card */}
            <div className="glass-card exp-card">
              <div className="exp-card-header">
                <div className="company-info">
                  <div className="company-name-row">
                    <h3 className="company-title">Tenarai</h3>
                    <span className="current-badge">Present</span>
                  </div>
                  <h4 className="role-title">Software Engineer</h4>
                </div>
                <a
                  href="https://www.linkedin.com/in/itz-ankit-siwach/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-verify-btn"
                  aria-label="View Ankit Siwach on LinkedIn"
                >
                  <span>LinkedIn Profile</span>
                  <FiExternalLink />
                </a>
              </div>

              {/* Meta tags: Employment, Date, Location */}
              <div className="exp-meta-grid">
                <div className="meta-item">
                  <span className="meta-label">Type:</span>
                  <span className="meta-val">Full-time</span>
                </div>
                <div className="meta-item">
                  <FiCalendar className="meta-icon" />
                  <span className="meta-val">May 2026 – Present</span>
                </div>
                <div className="meta-item">
                  <FiMapPin className="meta-icon" />
                  <span className="meta-val">Bengaluru, Karnataka, India · On-site</span>
                </div>
              </div>

              {/* Skills associated - Uniformly highlighted & verified */}
              <div className="exp-skills-section">
                <span className="skills-heading">Skills associated:</span>
                <div className="skills-badge-list">
                  {tenaraiSkills.map((skill) => (
                    <span key={skill} className="skill-badge highlight">
                      <span className="skill-dot" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Company 2: Infogain (Career Progression) */}
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {/* Timeline indicator node */}
            <div className="timeline-node">
              <div className="node-icon-box">
                <FiBriefcase />
              </div>
            </div>

            {/* Experience Card with Nested Progression */}
            <div className="glass-card exp-card">
              <div className="exp-card-header">
                <div className="company-info">
                  <div className="company-name-row">
                    <h3 className="company-title">Infogain</h3>
                    <span className="progression-pill">Progression (2 roles)</span>
                  </div>
                  <div className="meta-item location-tag">
                    <FiMapPin className="meta-icon" />
                    <span className="meta-val">Bengaluru, Karnataka, India · On-site</span>
                  </div>
                </div>
              </div>

              {/* Stepper showing career progression from Trainee to Associate Software Engineer */}
              <div className="career-progression-stepper">
                {/* Role 1: Associate Software Engineer */}
                <div className="progression-step">
                  <div className="step-marker" />
                  <div className="step-content">
                    <div className="step-title-row">
                      <h4 className="role-title">Associate Software Engineer</h4>
                      <span className="type-tag">Full-time</span>
                    </div>
                    <div className="meta-item step-date">
                      <FiCalendar className="meta-icon" />
                      <span className="meta-val">October 2025 – May 2026</span>
                    </div>
                  </div>
                </div>

                {/* Role 2: Trainee */}
                <div className="progression-step">
                  <div className="step-marker marker-initial" />
                  <div className="step-content">
                    <div className="step-title-row">
                      <h4 className="role-title role-initial">Trainee</h4>
                      <span className="type-tag">Apprenticeship</span>
                    </div>
                    <div className="meta-item step-date">
                      <FiCalendar className="meta-icon" />
                      <span className="meta-val">July 2025 – October 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
