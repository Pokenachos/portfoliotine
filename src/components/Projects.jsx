import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This Project is for Admin Management.',
    imageUrl: 'https://i.imgur.com/K6JEIsM.png',
    imageHint: 'admin dashboard',
    liveDemoUrl: 'https://tvskingstargoldadmin.pages.dev/login',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This Project is for Sales in Cogeo and Silang Branch.',
    imageUrl: 'https://i.imgur.com/xMINo0w.png',
    imageHint: 'sales app',
    liveDemoUrl: 'https://tvskingstargold.pages.dev/', // Added live demo link
  },
];

const Projects = React.forwardRef((props, ref) => (
  <section id="projects" className="projects" ref={ref}>
    <div className="container">
      <h2>My <span className="highlight">Projects</span></h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} data-ai-hint={project.imageHint} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.liveDemoUrl && (
                  <a href={project.liveDemoUrl} className="btn-small" target="_blank" rel="noopener noreferrer">Live Demo</a>
                )}
              </div>
            </div>
          </div>
        ))}
        {/* Empty Project Cards for Future Projects - now 4 placeholders */}
        <div className="project-card empty">
          <div className="project-image">
            <i className="fas fa-plus"></i>
          </div>
          <div className="project-info">
            <h3>Coming Soon</h3>
            <p>My next amazing project will be displayed here.</p>
          </div>
        </div>
        <div className="project-card empty">
          <div className="project-image">
            <i className="fas fa-plus"></i>
          </div>
          <div className="project-info">
            <h3>Coming Soon</h3>
            <p>My next amazing project will be displayed here.</p>
          </div>
        </div>
        <div className="project-card empty">
          <div className="project-image">
            <i className="fas fa-plus"></i>
          </div>
          <div className="project-info">
            <h3>Coming Soon</h3>
            <p>My next amazing project will be displayed here.</p>
          </div>
        </div>
        <div className="project-card empty">
          <div className="project-image">
            <i className="fas fa-plus"></i>
          </div>
          <div className="project-info">
            <h3>Coming Soon</h3>
            <p>My next amazing project will be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
));

export default Projects;
