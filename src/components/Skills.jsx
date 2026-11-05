import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCpu, FiCode, FiLayers, FiTerminal } from 'react-icons/fi';
import './Skills.css';

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const skillGroups = [
    {
      id: 'ai-genai',
      category: 'AI & Generative AI',
      badge: 'Primary Focus',
      icon: <FiCpu />,
      accent: '#8B5CF6',
      description: 'Core expertise in large language models, retrieval augmented generation, and autonomous agent loops.',
      skills: [
        'Generative AI',
        'Agentic AI',
        'RAG',
        'LLMs',
        'LangChain',
        'Langgraph',
        'VectorDB & Pinecone',
        'Model Context Protocol (MCP)',
        'Machine Learning',
        'NLP',
      ],
    },
    {
      id: 'programming',
      category: 'Programming',
      badge: 'Core Languages',
      icon: <FiCode />,
      accent: '#22D3EE',
      description: 'Strong programming foundations across object-oriented and data-intensive scripting paradigms.',
      skills: [
        'Python',
        'Java',
        'Kotlin',
        'JavaScript',
        'SQL',
      ],
    },
    {
      id: 'dxp-cms',
      category: 'DXP & CMS',
      badge: 'Enterprise Platform',
      icon: <FiLayers />,
      accent: '#A78BFA',
      description: 'Secondary enterprise capabilities with industry-leading digital experience platforms.',
      skills: [
        'AEM',
        'Contentstack',
        'Edge Delivery Services',
      ],
    },
    {
      id: 'development',
      category: 'Development',
      badge: 'Engineering',
      icon: <FiTerminal />,
      accent: '#38BDF8',
      description: 'End-to-end software development, architectural integration, and native mobile ecosystems.',
      skills: [
        'Android Development',
        'API Integration',
        'Software Engineering',
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">TECHNICAL COMPETENCIES</div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Specializations</span>
          </h2>
          <p className="section-subtitle">
            Curated technical capabilities anchored in AI/ML systems and modern software architecture.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="skills-categories-grid">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.id}
              className={`glass-card skill-group-card ${group.id === 'ai-genai' ? 'primary-group' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + idx * 0.1 }}
              style={{ '--group-accent': group.accent }}
            >
              {/* Card Header */}
              <div className="group-card-header">
                <div className="group-icon-wrapper" style={{ color: group.accent }}>
                  {group.icon}
                </div>
                <div className="group-title-block">
                  <div className="group-badge">{group.badge}</div>
                  <h3 className="group-category-title">{group.category}</h3>
                </div>
              </div>

              <p className="group-desc">{group.description}</p>

              {/* Skills Badges - Uniformly and beautifully highlighted */}
              <div className="skills-pill-cloud">
                {group.skills.map((skillName) => (
                  <span
                    key={skillName}
                    className="skill-pill"
                  >
                    <span className="pill-dot" />
                    {skillName}
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
