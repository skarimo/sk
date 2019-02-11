import React from 'react'
import '../css/Modal.css';

const ProjectModal = ({ showProject, closeModal }) => {
    return (
      <div className="modal-overlay animated fadeIn delay-1s" onClick={closeModal} style={{
        display: `${showProject ?  'flex' : 'none'}`,
      }}>
        <div className='modal-content' >
          <div className='modal-image' style={{width: '100%', height: '70%'}}>
            <img src={showProject.image} alt="Project" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
          </div>

          <div className='modal-buttons'>
            <button onClick={()=> window.open(showProject.githubFront, "_blank")} className="project-github-button">FrontEnd REPO</button>
            <button onClick={()=> window.open(showProject.githubBack, "_blank")} className="project-github-button">BackEnd REPO </button>
          </div>
        </div>
      </div>
    )
  }

export default ProjectModal
