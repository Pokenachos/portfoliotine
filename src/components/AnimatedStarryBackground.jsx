import React, { useEffect, useRef } from 'react';

const AnimatedStarryBackground = () => {
  const starsContainerRef = useRef(null);

  useEffect(() => {
    const starsEffect = () => {
      const count = 300; // Number of stars
      const starsContainer = starsContainerRef.current;

      if (!starsContainer) return;

      // Clear existing stars if any (for potential re-renders, though not expected with [])
      starsContainer.innerHTML = '';

      let i = 0;
      while (i < count) {
        const star = document.createElement('i');
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        const size = Math.random() * 2.5; // Adjusted size slightly

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.height = 1 + size + 'px';
        star.style.width = 1 + size + 'px';

        const duration = Math.random() * 2;
        star.style.animationDuration = 2 + duration + 's';
        // star.style.animationDelay = Math.random() * 1 + 's'; // Optional: add random delay

        starsContainer.appendChild(star);
        i++;
      }
    };

    starsEffect();

    // Handle resize to regenerate stars (optional, can be performance intensive)
    // window.addEventListener('resize', starsEffect);
    // return () => window.removeEventListener('resize', starsEffect);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="starry-background">
      <div className="moon_outer">
        <div className="moon">
          <div className="details"></div>
          <div className="details one"></div>
          <div className="details two"></div>
          <div className="details three"></div>
          <div className="details four small"></div>
        </div>
      </div>
      <div id="stars_container_for_js" ref={starsContainerRef}></div>
    </div>
  );
};

export default AnimatedStarryBackground;
