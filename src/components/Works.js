import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Works(){
  const WorksDiv = styled.div`
    height: 1200px;
    margin-bottom: 100px;
    width: 600px;
    margin: auto;
  `;

  const WorksHeader = styled.h1`
    padding-top: 30px;
    margin-bottom: 20px;
    font-size: 50px;
    font-family: 'Boska-Medium';
    font-weight: 100;
    color: #d05c35;
`;

  const WorksLinks = styled.div`
    font-size: 20px;
    padding-bottom: 0px;
  `;


  const Description = styled.p`
    padding-bottom: 50px;
    font-size: 17px;
  `;

  const float = {
    float: 'right'
  }

  const font = {
    fontFamily: 'Cormorant Upright, serif',
    fontWeight: 'bold' 
  }

  return(
    <>
    <WorksDiv id="works">
      <Fade left duration="1500">
        <WorksHeader>Works</WorksHeader>
      </Fade>
      <WorksLinks>
        <Fade right>
          <a style={font} href="https://flash-chords.herokuapp.com/" target="_blank">FLASH CHORDS</a>
          <h5>Ruby on Rails | PostgreSQL | Heroku | Devise | SCSS <a style={float} href="https://github.com/mekinsie/piano_pals" target="_blank">GitHub Repo</a></h5>
          <Description>Flash Chords is a web application where users can learn piano chords through the use of flash cards. Users can sign up to save and customize their own flashcard sets. Co-authored by <a href="https://github.com/MicahOlson" target="_blank">Micah Olsen</a> and <a href="https://github.com/CrankyJones" target="_blank">Geof Rosenmund.</a></Description>
        </Fade>

        <Fade right duration="1300">
          <a style={font}  href="https://www.memoryspace.net/" target="_blank">MEMORY SPACE</a>
          <h5>React | Redux | Firebase <a style={float} href="https://github.com/mekinsie/memory-space" target="_blank">GitHub Repo</a> </h5>
          <Description>This application is designed as a community memory space. Users can add their favorite or insightful memories to share with other users. It is currently populated with memories from anonymous users. Co-authored by <a href="https://github.com/Lo-GR" target="_blank">Logan Roth.</a></Description>
        </Fade>

        <Fade right duration="1500">
          <a style={font} href="https://www.mekinsie.com/" target="_blank">PORTFOLIO</a>
          <h5>React | SCSS <a style={float} href="https://github.com/mekinsie/portfolio-react" target="_blank">GitHub Repo</a></h5>
          <Description>This portolfio is a personal project to display my work. My design goal is for it to be minimalist and dynamic.</Description>
        </Fade>

        <Fade right duration="1700">
          <a style={font} href="https://hitomis-sushi.herokuapp.com/" target="_blank">HITOMI'S SUSHI</a>
          <h5>Ruby on Rails | PostgreSQL | Heroku | SCSS <a style={float} href="https://github.com/mekinsie/hitomis-sushi" target="_blank">GitHub Repo</a></h5>
          <Description>A sushi review website where users can login to add, edit, and delete their own reviews. Admin may add, edit and delete products while also deleting reviews. The database is seeded using the Faker gem. </Description>
        </Fade>

        <Fade right duration="1900">
          <a style={font} href="https://mekinsie.github.io/pig-dice/" target="_blank">PIG DICE</a>
          <h5>Javascript | jQuery | HTML5 | CSS | Bootstrap <a style={float} href="https://github.com/mekinsie/pig-dice" target="_blank">GitHub Repo</a></h5>
          <Description>A game of Pig Dice. The purpose of this project was to practice using Object-Oriented JavaScript. Co-authored by <a href="https://github.com/KirbyPaint" target="_blank">KirbyPaint.</a></Description>
        </Fade>

        <Fade right duration="2100">
          <a style={font}  href="https://mekinsie.github.io/language-suggester/" target="_blank">LANGUAGE SUGGESTER</a>
          <h5>Javascript | jQuery | HTML5 | CSS | Bootstrap <a style={float} href="https://github.com/mekinsie/language-suggester" target="_blank">GitHub Repo</a></h5>
          <Description>A lighthearted quiz that suggests the best coding language for you.</Description>
        </Fade>
      </WorksLinks>
    </WorksDiv>
    </>
  )
}

export default Works;