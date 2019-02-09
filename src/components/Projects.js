import React, { Component } from 'react'
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { ProjectList } from './ProjectList';
import '../css/Project.css';


class Projects extends Component {
  constructor() {
    super()
    this.state = {
      showProject: false
    }
  }

  openModal = (project) => {
    this.setState({showProject: project})
  }

  closeModal = () => {
    this.setState({showProject: false})
  }

  render() {
    const projectCards = ProjectList.map((project) => <ProjectCard project={project} openModal={this.openModal}/>)

      return (
          <div id="projects" className="body projects">

            <ProjectModal showProject={this.state.showProject} closeModal={this.closeModal} />

            <h1 className="body-header highlight-primary right">projects page</h1>
              <div id='project-container' style={{display: 'flex', width: '100%', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
                {projectCards}
              </div>
          </div>
      )
    }
  }

export default Projects
