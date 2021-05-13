import React from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import Nav from './Nav'

const NameHeader = styled.h1`
  font-size: 100px;
  // text-align: center;
  color: black;
  font-family: 'Switzer-Medium';
  margin-bottom: 0px;
`;

const Subheader = styled.p`
font-size:30px;
// text-align: center;
font-family: 'Boska-Medium';
`;

const Head = styled.div`
margin-top: 300px;
margin-left: 70px;
height: 80vh;
`;

function Home(){
  return(
    <>
    <Head>
    <FadeIn transitionDuration='1500'>
      <NameHeader>Mekinsie</NameHeader>
    </FadeIn>
    <FadeIn transitionDuration='2000'>
      <NameHeader>Callahan</NameHeader>
    </FadeIn>
    <FadeIn transitionDuration='2500'>
      <Subheader> Software Developer</Subheader>
    </FadeIn>
    </Head>
    </>
  )
}

export default Home;