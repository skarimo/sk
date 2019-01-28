import React from 'react'
import SkillBar from 'react-skillbars';

const skills = [
  {type: "React", level: 85},
  {type: "Redux", level: 85},
  {type: "Javascript", level: 75},
  {type: "Ruby", level: 75},
  {type: "Rails", level: 75},
  {type: "CSS", level: 75},
  {type: "HTML", level: 75},
]

const colors = {
  "bar": "#4bcffa",
  "title": {
    "text": "#fff",
    "background": "#2980b9"
  }
}

const About = () => {
    return (
      <div id="about" className="body about">
        <h1 className="body-header highlight-primary left">about me</h1>
          <div style={{width: '50%', float: 'left', paddingRight:'1%'}}>
            <SkillBar skills={skills} width={'100px'} height={'20px'} colors={colors}/>
          </div>

        <p> lorem Ita tamen proident, export officia ut appellat. Eu incididunt sed expetendis ex
        ea legam probant laboris, aliquip labore quem deserunt sint ab nam in veniam
        sunt aute, pariatur cillum sunt pariatur tamen o an elit laboris et laborum ne
        pariatur, se velit quid nisi eiusmod. Deserunt legam quae mentitum quorum.Dolor
        o fabulas ea noster, nisi ita ut fugiat eiusmod ita tamen iis doctrina ut
        multos, hic cillum ea multos. Possumus quo sint arbitror, ne quem anim nam
        singulis. Aliquip quid de litteris concursionibus. Nulla consectetur doctrina
        sunt aliquip, nescius firmissimum est consequat te culpa possumus excepteur,
        expetendis o nescius est excepteur culpa arbitror ubi veniam ullamco voluptate
        ne do fore fidelissimae an laboris noster ullamco.  </p>
      </div>
    )
  }

export default About
