import React, { useState } from 'react';

const Contact = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API)
    console.log('Form data submitted:', formData);
    alert('Message sent (simulated)!');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <h2>Get In <span className="highlight">Touch</span></h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello</p>
            <div className="contact-links">
              <a href="mailto:justinepault@gmail.com"><i className="fas fa-envelope"></i> justinepault@gmail.com</a>
              <a href="tel:09100965155"><i className="fas fa-phone"></i> 0910 096 5155</a>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/Pokenachoss/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/just_tanada03/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://github.com/Pokenachos" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message}
              onChange={handleChange}
              required>
            </textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
});
export default Contact;
