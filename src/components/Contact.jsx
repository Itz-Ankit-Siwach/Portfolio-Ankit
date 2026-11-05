import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiArrowUpRight, FiCheck, FiPhone } from 'react-icons/fi';
import './Contact.css';

const contactChannels = [
  {
    id: 'phone',
    label: 'Phone / Mobile',
    value: '+91 7206679930',
    href: 'tel:+917206679930',
    icon: <FiPhone />,
    color: '#10B981',
    accentText: 'Call / WhatsApp Directly',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'ankitsiwach3011@gmail.com',
    href: 'mailto:ankitsiwach3011@gmail.com',
    icon: <FiMail />,
    color: '#22D3EE',
    accentText: 'Send Direct Email',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'in/itz-ankit-siwach',
    href: 'https://www.linkedin.com/in/itz-ankit-siwach/',
    icon: <FiLinkedin />,
    color: '#0A66C2',
    accentText: 'Connect & Network',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'Itz-Ankit-Siwach',
    href: 'https://github.com/Itz-Ankit-Siwach',
    icon: <FiGithub />,
    color: '#8B5CF6',
    accentText: 'View Repositories',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Ankit,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:ankitsiwach3011@gmail.com?subject=${subject}&body=${body}`;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container" ref={ref}>
        {/* Section Header with exact requested heading */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">START A CONVERSATION</div>
          <h2 className="section-title contact-main-heading">
            Have an interesting idea? <span className="text-gradient">Let's build something intelligent.</span>
          </h2>
          <p className="section-subtitle">
            Open for AI/ML engineering roles, Generative AI development, and collaborative technical initiatives.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="contact-layout-grid">
          {/* Left Column: Direct Channels & Status */}
          <motion.div
            className="contact-channels-col"
            initial={{ opacity: 0, x: -35 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <div className="contact-channels-list">
              {contactChannels.map((channel) => (
                <a
                  key={channel.id}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card channel-card"
                  id={`contact-${channel.id}-link`}
                >
                  <div className="channel-icon-wrapper" style={{ color: channel.color }}>
                    {channel.icon}
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">{channel.label}</span>
                    <span className="channel-value">{channel.value}</span>
                    <span className="channel-accent-text">{channel.accentText}</span>
                  </div>
                  <div className="channel-arrow">
                    <FiArrowUpRight />
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Status Badge */}
            <div className="glass-card availability-card">
              <div className="status-indicator-box">
                <span className="status-orb" />
                <span className="status-label">CURRENT AVAILABILITY</span>
              </div>
              <p className="availability-desc">
                Currently actively exploring opportunities in <strong>AI/ML Engineering</strong>, <strong>Generative AI & Agentic Systems</strong>.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: 35 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            <form className="glass-card contact-form" onSubmit={handleSubmit} id="contact-message-form">
              <div className="form-header-bar">
                <h3 className="form-heading">Send a Direct Message</h3>
                <span className="form-hint">Direct to Inbox</span>
              </div>

              {formSent && (
                <div className="form-success-banner">
                  <FiCheck className="success-icon" />
                  <span>Opening your email client to send your message to Ankit!</span>
                </div>
              )}

              <div className="form-field-group">
                <label htmlFor="contact-name" className="field-label">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="e.g. Sarah Connor"
                  className="field-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-email" className="field-label">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="e.g. sarah@company.com"
                  className="field-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-message" className="field-label">Project / Inquiry Details</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your idea, opportunity, or collaboration..."
                  className="field-input field-textarea"
                />
              </div>

              <button
                type="submit"
                className="btn-primary form-submit-btn"
                id="contact-submit-btn"
              >
                <FiSend />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
