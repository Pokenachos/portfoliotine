import React from 'react';

const experienceData = [
  {
    date: 'May 15 - Present', // Updated Date
    title: 'Social Media Manager',
    company: 'TVS KING COGEO Facebook Page',
    description: 'Managing and curating content, engaging with the online community, and implementing strategies to grow the brand presence on Facebook.',
    type: 'current'
  },
  {
    date: 'May 8, 2025',
    title: 'Branch Store Manager, Social Media Manager & Sales Personnel',
    company: 'TVS KING COGEO',
    description: 'Will be responsible for overseeing branch operations, leading social media marketing, and driving sales performance.',
    type: 'current' 
  },
  {
    date: 'May 15, 2025',
    title: 'Social Media Manager',
    company: 'TVS KING CAVITE Facebook Page',
    description: 'Will lead content creation, community engagement, and growth strategies for the TVS KING CAVITE Facebook presence.',
    type: 'current' 
  }
];

const Experience = React.forwardRef((props, ref) => (
  <section id="experience" className="experience" ref={ref}>
    <div className="container">
      <h2>Work <span className="highlight">Experience</span></h2>
      <div className="timeline">
        {experienceData.map((item, index) => (
          <div className={`timeline-item ${item.type === 'current' ? 'current-role' : ''}`} key={index}>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
              {item.link && (
                <a href={item.link} className="btn-small">{item.linkText}</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

export default Experience;
