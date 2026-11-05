import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FiArrowUp } from 'react-icons/fi';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader"
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="loader-logo"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span className="loader-bracket">&lt;</span>
              <span className="loader-name">ANKIT SIWACH</span>
              <span className="loader-bracket">/&gt;</span>
            </motion.div>
            <div className="loader-sub">INITIALIZING AI RUNTIME...</div>
            <motion.div
              className="loader-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <div className="mesh-bg" />
          <ParticleCanvas />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />

          {/* Floating Back-to-Top Button */}
          <BackToTop />
        </>
      )}
    </>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          aria-label="Back to top"
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default App;
