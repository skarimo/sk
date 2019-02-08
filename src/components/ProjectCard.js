import React from 'react'

const ProjectCard = ({ project }) => {
    return (
      <div className="project-cards" style={{width: '300px', height: '400px'}}>
        <h3>{ project.name }</h3>
        <img src={project.image} alt="Project Image" height="300px" width="300px" />
        <h5>{ project.description }</h5>
      </div>
    )
  }


export default ProjectCard
