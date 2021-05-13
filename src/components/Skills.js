import React from 'react';
import styled from 'styled-components';

function Skills(){

  const SkillsDiv = styled.div`
  height: 650px;
  width: 600px;
  margin: auto;
  `;

  const List = styled.ul`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 350px;
`;

  const SkillsHeader = styled.h1 `
  // text-align: center;
  // margin-left: 30px;
  padding-top: 50px;
  font-family: Boska-Medium;
  font-size: 50px;
  `
  ;

  return(
    <>
    <SkillsDiv id="skills">
      <SkillsHeader>Skills</SkillsHeader>
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