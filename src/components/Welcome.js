import React from 'react'
import Headshot from '../photos/headshot.png'

import gitHubIcon from './icons/github-icon.png'
import linkedInIcon from './icons/linkedin-icon.png'
import mediumIcon from './icons/medium-icon.png'
import '../css/Welcome.css';


const Welcome = () => {

  const linkedInLink = "https://www.linkedin.com/in/sherzod-karimov-869625160/"
  const gitHubLink = "https://github.com/skarimo"
  const mediumLink = "https://medium.com/@karimovj"

    return (
      <div id='welcome' className="welcome">
        <h1 style={{
            color: 'ghostwhite',
            fontSize: '3rem',
            fontWeight: '100',
            margin: '2vh',
          }}
        >hi, i'm <span className="highlight-primary" style={{ fontSize: '6rem' }}>Sherzod</span></h1>

      <div>
        <img src={Headshot} alt="Avatar"
          style={{
            borderRadius: '50%',
            width: '258px'
            }}
          />
        <h3 style={{fontWeight: 300}} className="highlight-primary">Full Stack Developer</h3>
      </div>

      <span>
        <a href={linkedInLink}><img className="social-logo" src={linkedInIcon} alt="linkedin-logo" /></a>
        <a href={mediumLink}><img className="social-logo" src={mediumIcon} alt="medium-logo" /></a>
        <a href={gitHubLink}><img className="social-logo" src={gitHubIcon} alt="github-logo" /></a>
      </span>
      </div>
    )
  }

export default Welcome
