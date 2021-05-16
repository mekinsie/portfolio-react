import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Contact(){

  const ContactDiv = styled.div`
    height: 450px;
    width: 600px;
    margin: auto;
  `;

  const ContactHeader = styled.h1`
    font-size: 50px;
    text-align: center;
    font-family: 'Boska-Medium';
    font-weight: 100;
    margin-bottom: 20px;
    padding-top: 100px;
    color: #d05c35;
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

  return(
    <>
    <ContactDiv id="contact">
      <Fade duration="1500" delay="150">
        <ContactHeader>Contact</ContactHeader>
      </Fade>
        <ContactLinks>
          <ul style={center}>
        <Fade delay="180">
            <li ><a href="https://www.linkedin.com/in/mekinsie/" target="_blank">LINKEDIN</a></li>
          </Fade>
          <Fade delay="210">
            <li><a href="mailto:mekinsie.aja@gmail.com" target="_blank">EMAIL</a></li>
          </Fade>
          <Fade delay="250">
            <li><a href="https://github.com/mekinsie" target="_blank">GITHUB</a></li>
          </Fade>
          </ul>
        </ContactLinks>
    </ContactDiv>
    </>
  )
}

export default Contact;