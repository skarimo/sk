import React from 'react'

const ProjectCard = ({ project }) => {
    return (
      <div className="project-cards" style={{
          width: '300px',
          height: '400px',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderRadius: '10px',
          borderColor: 'white',
          margin: '2%',
          padding: '5px',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex'
         }}>
        <h3 className='highlight-secondary' style={{fontSize: '200%'}}>{ project.name }</h3>
        <button className="project-view-button">View Project</button>
      </div>
    )
  }


export default ProjectCard
