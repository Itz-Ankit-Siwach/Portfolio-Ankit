import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top Info */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-logo">Ankit Siwach</span>
            <p className="footer-tagline">
              AI/ML Engineer · Generative AI · Agentic AI · RAG · LLMs
            </p>
          </div>

          <div className="footer-nav">
            <button onClick={() => scrollTo('home')} className="footer-link">Home</button>
            <button onClick={() => scrollTo('about')} className="footer-link">About</button>
            <button onClick={() => scrollTo('experience')} className="footer-link">Experience</button>
            <button onClick={() => scrollTo('skills')} className="footer-link">Skills</button>
            <button onClick={() => scrollTo('projects')} className="footer-link">Projects</button>
            <button onClick={() => scrollTo('education')} className="footer-link">Education</button>
            <button onClick={() => scrollTo('contact')} className="footer-link">Contact</button>
          </div>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/itz-ankit-siwach/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/Itz-Ankit-Siwach"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="mailto:ankitsiwach3011@gmail.com"
              className="footer-social-btn"
              aria-label="Email"
            >
              <FiMail />
            </a>
            <a
              href="tel:+917206679930"
              className="footer-social-btn"
              aria-label="Phone: +91 7206679930"
              title="+91 7206679930"
            >
              <FiPhone />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="footer-social-btn to-top-btn"
              aria-label="Scroll to top"
            >
              <FiArrowUp />
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="copyright-text">
            &copy; {currentYear} Ankit Siwach. All rights reserved.
          </p>
          <p className="footer-built-text">
            Designed & Engineered with React, Framer Motion & Modern CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
