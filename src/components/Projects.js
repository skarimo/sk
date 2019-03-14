import React, { Component } from 'react'
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { ProjectList } from './ProjectList';
import '../css/Project.css';


class Projects extends Component {
  constructor() {
    super()
    this.state = {
      showProject: false,
      projects: ProjectList,
      showIndex: 0
    }
  }

  openModal = (project) => {
    this.setState({showProject: project})
  }

  closeModal = () => {
    this.setState({showProject: false})
  }

  showNextProject = () => {
    if (this.state.showIndex < this.state.projects.length-1) {
      this.setState({ showIndex: this.state.showIndex+1 })
    } else {
      this.setState({ showIndex: 0 })
    }
  }
  showPreviousProject = () => {
    if (this.state.showIndex > 0) {
      this.setState({ showIndex: this.state.showIndex-1 })
    } else {
      this.setState({ showIndex: this.state.projects.length-1 })
    }
  }


  render() {
    const projectCards = ProjectList.map((project) => <ProjectCard key={project.name} project={project} openModal={this.openModal}/>)
      return (
          <section id="projects" className="body projects">

            <ProjectModal showProject={this.state.showProject} closeModal={this.closeModal} />

            <h1 className="body-header highlight-primary right">projects</h1>
              <div id='project-container' style={{
                  display: 'flex',
                  width: '100%',
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  justifyContent: 'center'
                }}>
                {projectCards}
                <h1 style={{width: '100%', textAlign: 'center'}}>Click on Project to see more info</h1>
              </div>
          </section>
      )
    }
  }

export default Projects
