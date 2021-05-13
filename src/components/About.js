import React from 'react';
import styled from 'styled-components';

function About(){

  const AboutHeader = styled.h1`
  font-size: 50px;
  text-align: center;
  font-family: 'Switzer-Medium';
  margin-bottom: 20px;
  padding-top: 40px;
  `;

  const AboutParagraph = styled.p`
  // text-align: center;
  // font-family: 'Switzer-Medium';
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  width: 800px;
`;

  const List = styled.ul`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 200px;
    width: 800px;
    margin: auto;
`;

  const AboutDiv = styled.div`
  height: 100vh;
  `;

  const center = {
    textAlign: 'center',
    paddingTop: '25px'
  }

  return(
    <>
    <AboutDiv id="about">
      <AboutHeader>About</AboutHeader>
      <AboutParagraph>
        Growing up, I found that my best skills are logic and design. As I spent some time soul searching, I found that full-stack development is a perfect combination of both. I can use my design skills to create a beautiful front-end and use my logic skills to create a thoroughly tested back-end.
      </AboutParagraph>
      <AboutParagraph>
        To me, software engineering is fun, frustrating, satisfying, confusing, challenging, and rewarding. I love the feeling of solving complex problems, creating something from nothing, and learning new things because it creates a sense of purpose for me. I will continue learning new languages to grow my skills because I truly enjoy it.
      </AboutParagraph>
      <AboutParagraph>
        In my free time I like to rock climb, hike, play the piano, eat other people's food, and live slowly. I believe in minimalism as a design principle and as a lifestyle.
      </AboutParagraph>
      <div>
      <h2 style={center}>Technologies</h2>
          <List>
            <h3>languages</h3>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li><br></br>
            <h3>libraries</h3>
            <li>React</li>
            <li>Redux.js</li>
            <li>jQuery</li>
            <li>Sinatra</li><br></br>
            <h3>frameworks</h3>
            <li>React</li>
            <li>Rails</li>
            <li>Bootstrap</li><br></br><br></br><br></br>
          <h3>Other Tools</h3>
            <li>Jest</li>
            <li>Capybara</li>
            <li>Git</li>
            <li>Firebase</li>
            <li>PostgreSQL</li>
            <li>Firebase</li>
            <li>Docker</li>
            <li>Webpack</li>
            <li>Test-driven development</li>
          </List>
      </div>
    </AboutDiv>
    </>
  )
}

export default About;