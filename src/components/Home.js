import React from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';

const NameHeader = styled.h1`
  font-size: 100px;
  text-align: center;
  color: black;
  font-family: 'Switzer-Medium';
  margin-bottom: 0px;
`;

const Subheader = styled.p`
font-size:30px;
text-align: center;
font-family: 'Boska-Medium';
`;

function Home(){
  return(
    <>
    <div>
    <FadeIn transitionDuration='1500'>
      <NameHeader>Mekinsie</NameHeader>
      </FadeIn>
      <FadeIn transitionDuration='2000'>
      <NameHeader>Callahan</NameHeader>
      </FadeIn>
      <FadeIn transitionDuration='2500'>
      <Subheader>Software Developer</Subheader>
      </FadeIn>
    </div>
    <ul>
      <li><a href="#">ABOUT</a></li>
      <li><a href="#">WORKS</a></li>
      <li><a href="#">CONTACT</a></li>
    </ul>
    </>
  )
}

export default Home;