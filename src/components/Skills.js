import React from 'react';
import styled from 'styled-components';

function Skills(){

  const SkillsDiv = styled.div`
  height: 1000px;
  `;

  const List = styled.ul`
    padding-top: 50px;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 350px;
    width: 600px;
    margin: auto;
`;

  const center = {
    textAlign: 'center',
    paddingTop: '50px',
    fontFamily: 'Boska-Medium',
    fontSize: '50px'
  }

  return(
    <>
    <SkillsDiv id="skills">
      <h1 style={center}>Skills</h1>
          <List>
            <h3>LANGUAGES</h3>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li><br></br>
            <h3>LIBRARIES</h3>
            <li>React</li>
            <li>Redux.js</li>
            <li>jQuery</li>
            <li>Sinatra</li>
            <h3>FRAMEWORKS</h3>
            <li>React</li>
            <li>Rails</li>
            <li>Bootstrap</li><br></br><br></br>
          <h3>OTHER TOOLS</h3>
            <li>Jest</li>
            <li>Capybara</li>
            <li>Git</li>
            <li>Firebase</li>
            <li>PostgreSQL</li>
            <li>Firebase</li>
            <li>Docker</li>
            <li>Webpack</li>
          </List>
      </SkillsDiv>
    </>
  )
}

export default Skills;