import React from 'react'
import SkillBar from 'react-skillbars';
import '../css/About.css';

const technicalSkills = [
  {type: "React", level: 85},
  {type: "Redux", level: 85},
  {type: "Javascript", level: 75},
  {type: "Ruby", level: 75},
  {type: "Rails", level: 75},
  {type: "CSS", level: 75},
  {type: "HTML", level: 75},
]
const softSkills = [
  {type: "Leadership", level: 85},
  {type: "Communication", level: 85},
  {type: "Teamwork", level: 85},
  {type: "Adaptability", level: 85},
  {type: "Work Ethic", level: 85},
]

const colors = {
  "bar": "#4bcffa",
  "title": {
    "text": "#fff",
    "background": "#2980b9"
  }
}

const backgroundQuote = 'A journey of a thousand miles begins with a single step'
const backgroundText = 'That single step occured at the age of 12. '

const About = () => {
    return (
      <div id="about" className="body about">
        <h1 className="body-header highlight-primary left">about me</h1>


          <div id='skills-container'>
            <div>
              <h3 className={'highlight-primary'} style={{fontSize:'150%'}}>Technical Skills</h3>
              <SkillBar animationDelay={0} skills={technicalSkills} width={'100px'} height={'20px'} colors={colors}/>
            </div>
            <div>
              <h3 className={'highlight-primary'}>Soft Skills</h3>
              <SkillBar animationDelay={0} skills={softSkills} width={'100px'} height={'20px'} colors={colors}/>
            </div>
          </div>


          <span style={{  fontStyle: 'italic'}}>'{ backgroundQuote }'</span> - Lao Tzu
          <p>
            { backgroundText }
          </p>
      </div>
    )
  }

export default About
