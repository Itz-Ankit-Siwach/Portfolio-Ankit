import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiArrowRight, FiPhone } from 'react-icons/fi';
import AINeuralVisual from './AINeuralVisual';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Small introductory label with profile avatar */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
          >
            <img
              src="/assets/profile-pic.jpeg"
              alt="Ankit Siwach"
              className="hero-badge-avatar"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/profile-pic.jpeg';
              }}
            />
            <span className="badge-pulse" />
            <span className="badge-text">AI / ML ENGINEER</span>
          </motion.div>

          {/* Name & Headline */}
          <div className="hero-name-block">
            <span className="hero-name-label">Hello, I'm</span>
            <h1 className="hero-name">Ankit Siwach</h1>
          </div>

          {/* Main Heading */}
          <h2 className="hero-heading">
            Building <span className="text-gradient">Intelligent Systems</span> That Solve Real Problems.
          </h2>

          {/* Professional headline */}
          <p className="hero-subheadline">
            AI/ML Engineer <span className="sep">|</span> Generative AI <span className="sep">|</span> Agentic AI <span className="sep">|</span> RAG <span className="sep">|</span> LLMs
          </p>

          {/* Short description */}
          <p className="hero-description">
            I build intelligent applications powered by Generative AI, LLMs, Agentic AI and modern software engineering. 
            I enjoy transforming complex problems into practical, scalable solutions.
          </p>

          {/* Primary Action Buttons */}
          <div className="hero-primary-actions">
            <button
              onClick={() => scrollTo('projects')}
              className="btn-primary hero-btn"
              id="hero-explore-work-btn"
            >
              <span>Explore My Work</span>
              <FiArrowRight />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-secondary hero-btn"
              id="hero-lets-connect-btn"
            >
              <FiMail />
              <span>Let's Connect</span>
            </button>
          </div>

          {/* Secondary links */}
          <div className="hero-secondary-links">
            <a
              href="https://www.linkedin.com/in/itz-ankit-siwach/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-link"
              id="hero-linkedin-link"
            >
              <FiLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Itz-Ankit-Siwach"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-link"
              id="hero-github-link"
            >
              <FiGithub />
              <span>GitHub</span>
            </a>
            <a
              href="tel:+917206679930"
              className="secondary-link phone-link"
              id="hero-phone-link"
              title="Call / WhatsApp: +91 7206679930"
            >
              <FiPhone />
              <span>+91 7206679930</span>
            </a>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-link resume-link"
              id="hero-resume-link"
            >
              <FiDownload />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Quick tech highlights pills */}
          <div className="hero-highlights">
            <span className="highlight-pill">🧠 LLMs & Agentic AI</span>
            <span className="highlight-pill">⚡ LangChain & RAG</span>
            <span className="highlight-pill">🐍 Python Engineering</span>
            <span className="highlight-pill">🌐 DXP (AEM / Contentstack)</span>
          </div>
        </motion.div>

        {/* Right side - Elegant AI Inspired Visual */}
        <motion.div
          className="hero-visual-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
        >
          <AINeuralVisual />
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.button
        className="hero-scroll-btn"
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Scroll to About section"
      >
        <span className="mouse-icon">
          <span className="mouse-wheel" />
        </span>
        <span className="scroll-text">EXPLORE</span>
      </motion.button>
    </section>
  );
}
