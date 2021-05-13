import React from 'react';
import styled from 'styled-components';

function Works(){

  const WorksHeader = styled.h1`
  font-size: 50px;
  text-align: center;
  font-family: 'Switzer-Medium';
  margin-bottom: 20px;
  padding-top: 30px;
`;

const WorksLinks = styled.div`
font-size: 20px;
padding-bottom: 50px;
`;

const center = {
  display: 'table',
  margin: '0 auto',
  textAlign: 'center'
}

const WorksDiv = styled.div`
height: 70vh;
`;

  return(
    <>
    <WorksDiv id="works">
      <WorksHeader>Works</WorksHeader>
      <WorksLinks>
        <ul style={center}>
            <li ><a  href="#" target="_blank">Project1</a></li>
            <li><a href="#" target="_blank">Project2</a></li>
            <li><a href="#" target="_blank">Project3</a></li>
        </ul>
      </WorksLinks>
    </WorksDiv>
    </>
  )
}

export default Works;