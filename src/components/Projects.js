import React, { Component } from 'react'
import ProjectCard from './ProjectCard';
import { ProjectList } from './ProjectList';
import '../css/Project.css';

class Projects extends Component {


  render() {
    const projectCards = ProjectList.map((project) => <ProjectCard project={project}/>)

      return (
          <div id="projects" className="body projects">
            <h1 className="body-header highlight-primary right">projects page</h1>
              <div id='project-container' style={{display: 'flex', width: '100%', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
                {projectCards}
              </div>
          </div>
      )
    }
  }

export default Projects
