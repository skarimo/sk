import React from 'react'
import '../css/About.css';

const About = () => {
    return (
      <div id="about" className="body about">
        <h1 className="body-header highlight-primary left">about me</h1>
          <div id='skills-container'>
            <i className="devicon-css3-plain-wordmark colored icon"></i>
            <i className="devicon-github-plain-wordmark icon"></i>
            <i className="devicon-heroku-original-wordmark colored icon"></i>
            <i className="devicon-html5-plain-wordmark colored icon"></i>
            <i className="devicon-javascript-plain colored icon"></i>
            <i className="devicon-jquery-plain-wordmark icon"></i>
            <i className="devicon-postgresql-plain-wordmark icon"></i>
            <i className="devicon-ruby-plain-wordmark colored icon"></i>
            <i className="devicon-rails-plain-wordmark colored icon"></i>
            <i className="devicon-react-original-wordmark colored icon"></i>
          </div>

          <p style={{lineHeight: '1.7'}}>
            Hi, I am <span className='highlight-secondary'>Sherzod</span>. A little about me, I am originally from a Central Asian country <span className='highlight-secondary'>Uzbekistan</span>. I recieved my <span className='highlight-secondary'>Bachelors Degree</span> from Queens College, CUNY in 2017. Being from Uzbekistan, I speak four different languages, <span className='highlight-secondary'>English, Russian, Uzbek and Tadjik</span>.
            <br />
            <br />
            My journey as a developer began at the age of <span className='highlight-secondary'>12</span>, where I was first introduces to a programming language called 'Lua'. I would spend hours, days, weeks building small puzzle game and create NPC characters for video games.
            <br />
            <br />
            Sometimes in life, many of us stray away from our passions and desires. And I was no exception. On my journey to finding back my true passion, I gained experience in Security, Loss Prevention, Behavioral Therapy and EMS. These experiences ultimately made me the <span className='highlight-secondary'>Full Stack Developer</span> I am today. This dynamic background provides me with strong skills in <span className='highlight-secondary'>Communication, Leadership, and Problem Solving</span>.
          </p>
      </div>
    )
  }

export default About
