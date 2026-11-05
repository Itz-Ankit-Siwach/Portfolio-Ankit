import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiInfo, FiX, FiCheck } from 'react-icons/fi';
import './Projects.css';

const projectsData = [
  {
    id: 'smart-controller',
    title: 'Smart Controller',
    badge: 'Featured Computer Vision Project',
    isFeatured: true,
    image: '/assets/smart-controller.png',
    fallbackImage: '/assets/smart-controller.png',
    aspectType: 'portrait',
    description:
      'A full-stack computer vision application enabling users to control computer systems through hand gestures using OpenCV and MediaPipe. Features real-time tracking, gesture recognition, and responsive web controls.',
    technologies: ['Python', 'Flask', 'OpenCV', 'MediaPipe', 'Computer Vision', 'JavaScript'],
    github: 'https://github.com/Itz-Ankit-Siwach',
    live: 'https://smart-controller-website.onrender.com/',
    highlights: [
      'Real-time hand landmark tracking and spatial coordinate mapping',
      'Custom gesture classification engine integrated with Flask backend',
      'Interactive web dashboard deployed with cloud-hosted live interface',
    ],
  },
  {
    id: 'emotion-detection',
    title: 'Emotion Detection Using Text',
    badge: 'NLP & Machine Learning',
    isFeatured: false,
    image: '/assets/Emotion pic.png',
    fallbackImage: '/emotion-detection.png',
    aspectType: 'square',
    description:
      'An intelligent machine learning application that analyzes text inputs and detects underlying emotional sentiment using Natural Language Processing and Scikit-learn algorithms.',
    technologies: ['Python', 'NLP', 'Scikit-learn', 'Flask', 'Machine Learning'],
    github: 'https://github.com/Itz-Ankit-Siwach/Emotion-Dectection-ML-Project',
    live: 'https://emotion-detection-using-text.onrender.com/',
    highlights: [
      'Multi-class text classification pipeline for sentiment understanding',
      'Text tokenization, feature extraction, and pre-processing pipeline',
      'Deployed web app providing instant sentiment analysis predictions',
    ],
  },
  {
    id: 'price-prediction',
    title: 'Price Prediction Model',
    badge: 'Machine Learning Model',
    isFeatured: false,
    image: '/assets/price proj.jpg',
    fallbackImage: '/price-prediction.jpg',
    aspectType: 'landscape',
    description:
      'A Java-based machine learning model that predicts product prices based on multi-variate market features, implementing statistical regression algorithms.',
    technologies: ['Java', 'Machine Learning', 'Regression Algorithms', 'Data Analysis'],
    github: 'https://github.com/Itz-Ankit-Siwach/Price-Predection-Model-In-Java',
    live: null,
    highlights: [
      'Engineered in Java with custom regression modeling algorithms',
      'Data preprocessing, feature normalization, and market attribute analysis',
      'Mathematical evaluation and residual error metric optimization',
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">PORTFOLIO SHOWCASE</div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Engineered systems demonstrating computer vision, NLP, and machine learning architectures.
          </p>
        </motion.div>

        {/* Dedicated Featured Smart Controller Card (Section 4) */}
        {projectsData
          .filter((p) => p.isFeatured)
          .map((project) => (
            <motion.div
              key={project.id}
              className="glass-card smart-controller-card"
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="smart-controller-grid">
                {/* Left Info Column */}
                <div className="smart-info-col">
                  <div className="featured-ribbon">
                    <span className="ribbon-sparkle">★</span>
                    <span>{project.badge}</span>
                  </div>

                  <h3 className="smart-project-title">{project.title}</h3>

                  <p className="smart-project-desc">{project.description}</p>

                  {/* Highlights from codebase */}
                  <div className="smart-highlights-list">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="highlight-item">
                        <FiCheck className="highlight-check" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="project-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-action-buttons">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary project-action-btn"
                        id="smart-controller-live-btn"
                      >
                        <FiExternalLink />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary project-action-btn"
                        id="smart-controller-github-btn"
                      >
                        <FiGithub />
                        <span>GitHub</span>
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="details-trigger-btn"
                      aria-label="View Smart Controller details"
                    >
                      <FiInfo />
                      <span>Details</span>
                    </button>
                  </div>
                </div>

                {/* Right Image Presentation - Live Application Showcase */}
                <div className="smart-image-col">
                  <div className="smart-image-showcase">
                    <div className="showcase-top-bar">
                      <div className="bar-dots">
                        <span className="bar-dot" />
                        <span className="bar-dot" />
                        <span className="bar-dot" />
                      </div>
                      <span className="showcase-bar-title">Smart Controller Web App</span>
                    </div>

                    <div className="showcase-image-viewport">
                      <img
                        src={project.image}
                        alt="Smart Controller - Web App"
                        className="smart-controller-img"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = project.fallbackImage;
                        }}
                      />
                    </div>

                    <div className="showcase-caption-strip">
                      <span className="caption-dot" />
                      <span>Smart Controller · Production Gesture Control Web Interface</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Other Projects Grid (Section 8) */}
        <div className="standard-projects-grid">
          {projectsData
            .filter((p) => !p.isFeatured)
            .map((project, idx) => (
              <motion.div
                key={project.id}
                className="glass-card standard-project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
              >
                {/* Project Image Card Header - Centered & uncropped presentation */}
                <div className="project-thumb-frame">
                  <div className="thumb-bar">
                    <div className="bar-dots">
                      <span className="bar-dot" />
                      <span className="bar-dot" />
                      <span className="bar-dot" />
                    </div>
                    <span className="thumb-badge-label">{project.badge}</span>
                  </div>
                  <div className="thumb-viewport">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-thumb-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = project.fallbackImage;
                      }}
                    />
                  </div>
                </div>

                {/* Body Content */}
                <div className="project-card-body">
                  <h3 className="card-project-title">{project.title}</h3>
                  <p className="card-project-desc">{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Card Bottom Links */}
                  <div className="card-footer-actions">
                    <div className="links-group">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer-icon-link"
                          aria-label={`${project.title} GitHub`}
                        >
                          <FiGithub />
                          <span>Code</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer-icon-link live-link"
                          aria-label={`${project.title} Live Demo`}
                        >
                          <FiExternalLink />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="details-text-btn"
                    >
                      <FiInfo />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="github-showcase-cta glass-card"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="cta-text">
            <h4>Explore Full Engineering Repository</h4>
            <p>Access open source repositories, algorithms, and experimental prototypes on GitHub.</p>
          </div>
          <a
            href="https://github.com/Itz-Ankit-Siwach"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            id="projects-view-all-github-btn"
          >
            <FiGithub />
            <span>GitHub Profile</span>
          </a>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <motion.div
              className="glass-card modal-container"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="modal-header">
                <div>
                  <span className="modal-badge">{selectedProject.badge}</span>
                  <h3 className="modal-title">{selectedProject.title}</h3>
                </div>
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  <FiX />
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-img-frame">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = selectedProject.fallbackImage;
                    }}
                  />
                </div>

                <div className="modal-desc-section">
                  <h4>Overview</h4>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="modal-highlights-section">
                  <h4>Key Architectural Features</h4>
                  <ul>
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i}>
                        <FiCheck className="highlight-check" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-tech-section">
                  <h4>Technologies Used</h4>
                  <div className="project-tags">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <FiGithub /> GitHub Code
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <FiExternalLink /> Launch Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
