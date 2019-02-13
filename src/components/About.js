import React from 'react'
import SkillBar from 'react-skillbars';
import '../css/About.css';

const technicalSkills = [
  {type: "React", level: 80},
  {type: "Redux", level: 75},
  {type: "Javascript", level: 90},
  {type: "Ruby", level: 85},
  {type: "Rails", level: 85},
  {type: "CSS", level: 90},
  {type: "HTML", level: 90},
]
const softSkills = [
  {type: "Leadership", level: 90},
  {type: "Communication", level: 90},
  {type: "Teamwork", level: 100},
  {type: "Adaptability", level: 100},
  {type: "Work Ethic", level: 100},
]

const colors = {
  "bar": "#4bcffa",
  "title": {
    "text": "#fff",
    "background": "#2980b9"
  }
}

// const backgroundQuote = 'A journey of a thousand miles begins with a single step'
// const backgroundText = 'That single step occured at the age of 12. '

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
          <p>
            Hi, I am <span className='highlight-secondary'>Sherzod</span>. A little about me: I am originally from a Central Asian country <span className='highlight-secondary'>Uzbekistan</span>. I recieved my <span className='highlight-secondary'>Bachelors Degree</span> from Queens College, CUNY in 2017. Being from Uzbekistan, I speak four different languages, <span className='highlight-secondary'>English, Russian, Uzbek and Tadjik</span>.
          </p>
      </div>
    )
  }

export default About
