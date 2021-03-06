import React from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';

const NameHeader = styled.h1`
  font-size: 100px;
  // font-family: 'Switzer-Medium';
  // color: rgb(36, 36, 36);
  font-family: 'Cormorant Upright', serif;
  font-weight: 100;
  margin-bottom: 0px;
  color: #d05c35;
  // color: #dd732c;
  // color: rgb(223, 110, 35);
`;

const Subheader = styled.p`
  font-size:30px;
  font-family: 'Boska-Medium';
  color: rgb(67, 54, 54);
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
          <NameHeader>MEKINSIE</NameHeader>
        </FadeIn>
        <FadeIn transitionDuration='2000'>
          <NameHeader>CALLAHAN</NameHeader>
        </FadeIn>
        <FadeIn transitionDuration='2500'>
          <Subheader>Full-Stack Software Developer</Subheader>
        </FadeIn>
      </Head>
    </>
  )
}

export default Home;