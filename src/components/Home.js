import React from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';

const NameHeader = styled.h1`
  font-size: 100px;
  text-align: center;
  color: black;
  font-family: 'Switzer-Medium';
`;

const Subheader = styled.p`
font-size:30px;
text-align: center;
font-family: 'Boska-Medium';

`;

function Home(){
  return(
    <>
      <NameHeader>Mekinsie</NameHeader>
      <NameHeader>Callahan</NameHeader>
      <Subheader>Software Developer</Subheader>
    </>
  )
}

export default Home;