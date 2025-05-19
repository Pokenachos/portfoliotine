import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedStarryBackground from './components/AnimatedStarryBackground'; // Import the new component
import './index.css'; 

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
      const scrollPosition = window.scrollY + window.innerHeight / 2; 

      if ( (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100 ) { 
         setActiveSection('contact');
         return;
      }

      let currentSection = 'home'; 
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
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-animated');
        }
      });
    };

    const observerOptions = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.1 
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refsArray = Object.values(sectionRefs);
    refsArray.forEach(sectionRef => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    return () => {
      refsArray.forEach(sectionRef => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      });
    };
  }, []);

  return (
    <>
      <AnimatedStarryBackground /> {/* Add the animated background here */}
      <Header activeSection={activeSection} />
      <main>
        <div ref={sectionRefs.home} className="section-animate"><Hero /></div>
        <div ref={sectionRefs.projects} className="section-animate"><Projects /></div>
        <div ref={sectionRefs.experience} className="section-animate"><Experience /></div>
        <div ref={sectionRefs.education} className="section-animate"><Education /></div>
        <div ref={sectionRefs.certificates} className="section-animate"><Certificates /></div>
        <div ref={sectionRefs.contact} className="section-animate"><Contact /></div>
      </main>
      <Footer />
    </>
  );
}

export default App;
