import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scrollspy logic
      const sectionIds = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`site-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        {/* Brand Logo */}
        <a
          href="#home"
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          aria-label="Ankit Siwach - Home"
        >
          <span className="logo-icon-box">AI</span>
          <div className="logo-text-block">
            <span className="logo-name">ANKIT SIWACH</span>
            <span className="logo-sub">AI/ML ENGINEER</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav-menu" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={item.label} className="nav-item">
                  <button
                    className={`nav-button ${isActive ? 'nav-button-active' : ''}`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        className="active-indicator"
                        layoutId="activeNavIndicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Action: Download Resume Button */}
        <div className="nav-actions">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-nav-btn"
            id="nav-download-resume-btn"
            aria-label="Download Resume"
          >
            <FiDownload className="resume-icon" />
            <span>Resume</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-nav-inner">
              {navItems.map((item) => {
                const id = item.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <button
                    key={item.label}
                    className={`mobile-nav-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="mobile-dot" />}
                  </button>
                );
              })}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mobile-resume-btn"
              >
                <FiDownload />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
