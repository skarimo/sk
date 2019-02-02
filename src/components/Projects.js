import React, { Component } from 'react'
import ProjectCard from './ProjectCard';
import { ProjectList } from './ProjectList';

class Projects extends Component {


  render() {
    console.log(ProjectList)
      return (
          <div id="projects" className="body projects">
            <h1 className="body-header highlight-primary right">projects page</h1>
            <ProjectCard />
          </div>
      )
    }
  }

export default Projects
