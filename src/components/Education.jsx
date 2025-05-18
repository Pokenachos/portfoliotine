import React from 'react';

const educationData = [
  {
    date: '2010 - 2016',
    title: 'Kinder to Grade 6 - Regular Subjects (No Strand)',
    institution: 'San Isidro Labrador Academy',
    description: 'Just a normal human being, focusing on my studies while enjoying time with my classmates.'
  },
  {
    date: '2017 - 2021',
    title: 'Grade 7 to Grade 10 - Regular Subjects (No Strand)',
    institution: 'San Isidro Labrador Academy',
    description: 'Just a normal human being, focusing on my studies while enjoying time with my classmates.'
  },
  {
    date: '2021 - 2023',
    title: 'Grade 11 to Grade 12',
    institution: 'Sumulong College of Arts and Sciences',
    description: 'Participated in TVL - Information and Communications Technology Strand'
  },
  {
    date: '2023 - 2023',
    title: 'College - First Semester',
    institution: 'Marikina Polytechnic College',
    description: 'Participated in BIT - Electronics Technologies'
  },
  {
    date: '2023 - 2027',
    title: 'College - Second semester until graduation',
    institution: 'Institute of Creative Computer Technology - Antipolo Campus',
    description: 'Participated in BSIT - Bachelor of Science in Information Technology'
  }
];

const Education = React.forwardRef((props, ref) => (
  <section id="education" className="education" ref={ref}>
    <div className="container">
      <h2>Education <span className="highlight">Journey</span></h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.institution}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

export default Education;
