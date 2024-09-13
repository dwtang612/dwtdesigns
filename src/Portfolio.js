import React, { useState } from 'react';

function Portfolio() {
  const [projects] = useState([
    { id: 1, name: 'Project 1', description: 'This is project 1' },
    { id: 2, name: 'Project 2', description: 'This is project 2' }
  ]);

  return (
    <div>
      <h2>My Portfolio</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
