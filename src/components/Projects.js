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


  render() {
    const projectCards = ProjectList.map((project) => <ProjectCard key={project.name} project={project} openModal={this.openModal}/>)
    console.log(this.state)
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
                <div className="project-cards" style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${this.state.projects[this.state.showIndex].image})`
                   }}>
                  <h3 className='highlight-secondary project-name' style={{fontSize: '3em'}}>{ this.state.projects[this.state.showIndex].name }</h3>
                  <button className="project-view-button" onClick={this.showNextProject}>View Project</button>
                </div>
              </div>
          </section>
      )
    }
  }

export default Projects
