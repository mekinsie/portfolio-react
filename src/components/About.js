import React from 'react';
import styled from 'styled-components';

function About(){

  const AboutHeader = styled.h1`
  font-size: 50px;
  text-align: center;
  font-family: 'Switzer-Medium';
  margin-bottom: 20px;
  padding-top: 30px;
`;

const AboutDiv = styled.div`
height: 70vh;
`;

  return(
    <>
    <AboutDiv id="about">
      <AboutHeader>About</AboutHeader>
    </AboutDiv>
    </>
  )
}

export default About;