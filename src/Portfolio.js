import React, { useState } from 'react';

function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A web design project showcasing modern layouts.',
      details: 'Detailed description of Project 1.',
      link: 'https://example.com/project1',
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'A mobile app development project focused on UX.',
      details: 'Detailed description of Project 2.',
      link: 'https://example.com/project2',
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      title: 'Project 3',
      description: 'A mobile app development project focused on UX.',
      details: 'Detailed description of Project 2.',
      link: 'https://example.com/project2',
      image: 'https://via.placeholder.com/300'
    },
  ];

  const openModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };
  //------------------------------------------------------------------------------HTML SECTION------------------------------------------------------------------------------
  return (
    <div className="grid-container">
      {projects.map((project) => (
        <div key={project.id} className="grid-item" onClick={() => openModal(project)}>
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}

      {/* Modal */}
      {modalOpen && activeProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.details}</p>
            <a href={activeProject.link} target="_blank" rel="noopener noreferrer">View Project</a>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
