import React from 'react';

const certificatesData = [
  {
    id: 1,
    title: 'NCII TESDA PASSER',
    issued: 'June 13, 2023',
    by: 'Technical Education and Skills Development Authority (TESDA)',
    imageUrl: 'https://i.imghippo.com/files/eyvM9650XRo.png', // Updated image URL
    imageHint: 'TESDA NCII certificate',
    viewUrl: '#' // You can update this link if you have a URL for the certificate
  }
];

const Certificates = React.forwardRef((props, ref) => (
  <section id="certificates" className="certificates" ref={ref}>
    <div className="container">
      <h2>My <span className="highlight">Certificates</span></h2>
      <div className="certificates-grid">
        {certificatesData.map(cert => (
          <div className="certificate-card" key={cert.id}>
            <div className="certificate-image">
              <img src={cert.imageUrl} alt={cert.title} data-ai-hint={cert.imageHint} />
            </div>
            <div className="certificate-info">
              <h3>{cert.title}</h3>
              <p>Issued: {cert.issued}</p>
              <p>By: {cert.by}</p>
              <a href={cert.viewUrl} className="btn-small" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </div>
          </div>
        ))}
        {/* Placeholder for Future Certificates */}
        <div className="certificate-card empty">
          <div className="certificate-icon">
            <i className="fas fa-award"></i>
          </div>
          <h3>Coming Soon</h3>
          <p>My next achievement will be displayed here</p>
        </div>
        <div className="certificate-card empty">
          <div className="certificate-icon">
            <i className="fas fa-award"></i>
          </div>
          <h3>Coming Soon</h3>
          <p>My next achievement will be displayed here</p>
        </div>
      </div>
    </div>
  </section>
));

export default Certificates;
