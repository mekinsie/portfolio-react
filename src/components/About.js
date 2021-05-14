import React from 'react';
import styled from 'styled-components';

function About(){

  const AboutDiv = styled.div`
  height: 600px;
  margin: auto;
  width: 600px;
  `;

  const AboutHeader = styled.h1`
  padding-top: 50px;
  margin-bottom: 20px;
  font-size: 50px;
  // text-align: center;
  font-family: 'Boska-Medium';
  `;

  const AboutParagraph = styled.p`
  padding-top: 30px;
`;

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
    </AboutDiv>
    </>
  )
}

export default About;