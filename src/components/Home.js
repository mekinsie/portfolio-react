import React from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';

const NameHeader = styled.h1`
  font-size: 100px;
  font-family: 'Switzer-Medium';
  color: rgb(36, 36, 36);

  margin-bottom: 0px;
`;

const Subheader = styled.p`
  font-size:30px;
  font-family: 'Boska-Medium';
`;

const Head = styled.div`
  margin-top: 45vh;
  margin-left: 35px;
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
      <Subheader>Full-Stack Software Developer</Subheader>
    </FadeIn>
    </Head>
    </>
  )
}

export default Home;