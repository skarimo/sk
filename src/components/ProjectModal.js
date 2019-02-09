import React from 'react'
import '../css/Modal.css';

const ProjectModal = ({ showProject, closeModal }) => {
    return (
      <div className="modal-overlay" onClick={closeModal} style={{
        display: `${showProject ?  'flex' : 'none'}`,
      }}>
        <div className='modal-content'>
          hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
          hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
          hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
          hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
          hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
          hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
          hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
          hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
          hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
          hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
        </div>
      </div>
    )
  }

export default ProjectModal
