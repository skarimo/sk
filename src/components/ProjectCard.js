import React from 'react'

const ProjectCard = ({ project, openModal }) => {
    return (
      <div className="project-cards" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${project.image})`
         }}>
        <h3 className='highlight-secondary project-name' style={{fontSize: '200%'}}>{ project.name }</h3>
        <button className="project-view-button" onClick={() => {openModal(project)}}>View Project</button>
      </div>
    )
  }


export default ProjectCard
