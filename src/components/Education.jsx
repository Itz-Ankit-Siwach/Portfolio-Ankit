import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiCalendar, FiBookOpen, FiCheckCircle } from 'react-icons/fi';
import './Education.css';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="education-section">
      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">ACADEMIC BACKGROUND</div>
          <h2 className="section-title">
            Higher <span className="text-gradient">Education</span>
          </h2>
          <p className="section-subtitle">
            Formal foundations in Data Science, engineering principles, and computational theory.
          </p>
        </motion.div>

        {/* Clean Education Card */}
        <motion.div
          className="education-card-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          <div className="glass-card education-card">
            <div className="edu-top-row">
              <div className="edu-icon-box">
                <FiAward />
              </div>
              <div className="edu-main-info">
                <div className="edu-badge-row">
                  <span className="edu-type-pill">Undergraduate Degree</span>
                  <div className="edu-duration">
                    <FiCalendar className="cal-icon" />
                    <span>2021 – 2025</span>
                  </div>
                </div>
                <h3 className="institution-name">Lovely Professional University</h3>
                <h4 className="degree-name">Bachelor of Technology (B.Tech)</h4>
              </div>
            </div>

            <div className="edu-divider" />

            {/* Specialization & Coursework highlight */}
            <div className="edu-specialization-box">
              <div className="spec-label-row">
                <FiBookOpen className="spec-icon" />
                <span className="spec-title">Specialization:</span>
                <span className="spec-name">Data Science</span>
              </div>
              <p className="spec-summary">
                Rigorous curriculum covering mathematical statistics, machine learning algorithms, 
                data engineering, distributed systems, and predictive modeling.
              </p>

              <div className="spec-highlights-grid">
                <div className="spec-item">
                  <FiCheckCircle className="spec-check" />
                  <span>Machine Learning & Deep Neural Models</span>
                </div>
                <div className="spec-item">
                  <FiCheckCircle className="spec-check" />
                  <span>Data Structures & Algorithmic Complexity</span>
                </div>
                <div className="spec-item">
                  <FiCheckCircle className="spec-check" />
                  <span>Natural Language Processing & Analytics</span>
                </div>
                <div className="spec-item">
                  <FiCheckCircle className="spec-check" />
                  <span>Database Systems & Statistical Inference</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
