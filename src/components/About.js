import React from 'react';
import styled from 'styled-components';

function About(){

  const AboutHeader = styled.h1`
  font-size: 50px;
  text-align: center;
  font-family: 'Switzer-Medium';
  margin-bottom: 20px;
  padding-top: 12%;
`;

  const AboutParagraph = styled.p`
  // text-align: center;
  // font-family: 'Switzer-Medium';
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  width: 40%;
`;

const AboutDiv = styled.div`
height: 100vh;
`;

  return(
    <>
    <AboutDiv id="about">
      <AboutHeader>About</AboutHeader>
      <AboutParagraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</AboutParagraph>
    </AboutDiv>
    </>
  )
}

export default About;