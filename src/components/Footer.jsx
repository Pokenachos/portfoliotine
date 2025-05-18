import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <p>&copy; <span id="year">{currentYear}</span> Justine Paul P. Tañada. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
