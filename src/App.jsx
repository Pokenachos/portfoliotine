import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; // Using index.css for global styles

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const sectionRefs = {
    home: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    certificates: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    // Force dark mode permanently
    document.body.classList.add('dark-mode');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust offset as needed

      // Special handling for contact section at the very bottom
      if ( (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100 ) { // 100px buffer
         setActiveSection('contact');
         return;
      }

      let currentSection = 'home'; // Default to home
      for (const sectionId in sectionRefs) {
        const ref = sectionRefs[sectionId].current;
        if (ref) {
          const sectionTop = ref.offsetTop;
          const sectionBottom = sectionTop + ref.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);


  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <div ref={sectionRefs.home}><Hero /></div>
        <div ref={sectionRefs.projects}><Projects /></div>
        <div ref={sectionRefs.experience}><Experience /></div>
        <div ref={sectionRefs.education}><Education /></div>
        <div ref={sectionRefs.certificates}><Certificates /></div>
        <div ref={sectionRefs.contact}><Contact /></div>
      </main>
      <Footer />
    </>
  );
}

export default App;
