import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const fullName = "Justine Paul P. Tañada"; // Name to animate
  const [animatedName, setAnimatedName] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Timings (can be adjusted)
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseEndSpeed = 1500; // Pause after name is fully typed
  const pauseStartSpeed = 500; // Pause after name is deleted, before re-typing

  const timeoutIdRef = useRef(null);
  const [isInitialDelayOver, setIsInitialDelayOver] = useState(false);

  // Effect for the initial 1-second delay
  useEffect(() => {
    timeoutIdRef.current = setTimeout(() => {
      setIsInitialDelayOver(true);
    }, 1000); // Initial delay before starting
    return () => clearTimeout(timeoutIdRef.current);
  }, []);

  useEffect(() => {
    if (!isInitialDelayOver) {
      return; // Don't run the main animation logic until initial delay is over
    }

    const handleTyping = () => {
      setAnimatedName(fullName.substring(0, charIndex));

      let action = () => {};
      let currentSpeed;

      if (!isDeleting && charIndex < fullName.length) {
        action = () => setCharIndex((prev) => prev + 1);
        currentSpeed = typingSpeed;
      } else if (isDeleting && charIndex > 0) {
        action = () => setCharIndex((prev) => prev - 1);
        currentSpeed = deletingSpeed;
      } else { // Time to switch direction
        action = () => setIsDeleting((prev) => !prev);
        // Use the state of isDeleting *before* it's toggled to determine pause duration
        currentSpeed = isDeleting ? pauseStartSpeed : pauseEndSpeed;
      }
      
      timeoutIdRef.current = setTimeout(action, currentSpeed);
    };

    handleTyping();

    return () => clearTimeout(timeoutIdRef.current); // Clear timeout on unmount or when dependencies change
  }, [
    charIndex, 
    isDeleting, 
    fullName, 
    typingSpeed, 
    deletingSpeed, 
    pauseEndSpeed, 
    pauseStartSpeed, 
    isInitialDelayOver,
    // setAnimatedName, setCharIndex, setIsDeleting are stable, not strictly needed but good for completeness if linted
  ]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight" id="animated-name">{animatedName}</span><span className="blinking-cursor">|</span></h1>
          <p className="subtitle">Currently Studying</p>
          <p>I'm a 2nd-year IT student at ICCT Antipolo Campus. This portfolio shows my work and projects as I learn and grow in the world of technology.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/Pokenachoss/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/just_tanada03/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://github.com/Pokenachos" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
          <div className="hero-buttons">
            <a href="#projects" className="btn">View My Work</a>
            <a href="/Images/Resume.pdf" download="JustinePaulTanada-Resume.pdf" className="btn btn-cv">
              <i className="fas fa-download"></i> Download CV
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/Images/Me.png" alt="Profile Image" data-ai-hint="profile photo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
