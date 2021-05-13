import React from 'react';
import styled from 'styled-components';


function Contact(){

  const ContactHeader = styled.h1`
  font-size: 50px;
  text-align: center;
  font-family: 'Boska-Medium';
  margin-bottom: 20px;
  padding-top: 100px;
`;

  const ContactLinks = styled.div`
  font-size: 20px;
  padding-bottom: 50px;
  `;

const center = {
  display: 'table',
  margin: '0 auto',
  textAlign: 'center'
}

const ContactDiv = styled.div`
height: 500px;
`;

  return(
    <>
    <ContactDiv id="contact">
      <ContactHeader>Contact</ContactHeader>
      <ContactLinks>
        <ul style={center}>
            <li ><a  href="https://www.linkedin.com/in/mekinsie/" target="_blank">LINKEDIN</a></li>
            <li><a href="mailto:mekinsie.aja@gmail.com" target="_blank">EMAIL</a></li>
            <li><a href="https://github.com/mekinsie" target="_blank">GITHUB</a></li>
        </ul>
      </ContactLinks>
    </ContactDiv>
    </>
  )
}

export default Contact;