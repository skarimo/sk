import React from 'react'

const ProjectCard = ({ project }) => {
    return (
      <div className="project-cards" style={{width: '30%'}}>
        <h5>{ project.name }</h5>
        <h5>{ project.description }</h5>
      </div>
    )
  }


export default ProjectCard
