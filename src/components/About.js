import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

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
    font-family: 'Boska-Medium';
    font-weight: 100;
    color: #d05c35;
  `;

  const AboutParagraph = styled.p`
    padding-top: 30px;
`;

  return(
    <>
    <AboutDiv id="about">
    <Fade left duration="1500">
      <AboutHeader>About</AboutHeader>
    </Fade>
    <Fade right cascade>
      <div>
      <AboutParagraph>
        Growing up, I found that my best skills are in logic and design. As I spent some time discovering potential careers, I found that full-stack development is a perfect combination of both. Having a growth mindset and perseverance are qualities I strongly value. I am currently looking for opportunities to work in a tech environment that pushes me to learn and challenge myself.
      </AboutParagraph>
      <AboutParagraph>
        To me, software engineering is fun, frustrating, satisfying, challenging, and rewarding. I love the feeling of solving complex problems, creating something from nothing, and learning new things because it creates a sense of purpose for me. I will continue learning new languages to grow my skills because I truly enjoy it.
      </AboutParagraph>
      <AboutParagraph>
        In my free time I like to rock climb, hike, play the piano, and eat other people's food. I believe in minimalism as a design principle and as a lifestyle.
      </AboutParagraph>
      </div>
    </Fade>
    </AboutDiv>
    </>
  )
}

export default About;