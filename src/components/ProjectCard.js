import React from 'react'

const ProjectCard = ({ project, openModal }) => {
    return (
      <div className="project-cards" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${project.image})`
         }}>
        <h3 className='highlight-secondary project-name' style={{fontSize: '3em'}}>{ project.name }</h3>
        <button className="project-view-button" onClick={() => {openModal(project)}}>View Project</button>
      </div>
    )
  }


export default ProjectCard
