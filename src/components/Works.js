import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { useSpring, animated } from 'react-spring'
import flashChord1 from '../img/flashchordhome.png'
import Carousel from './Carousel';

function Works(){

  // const springProps = useSpring({
  //   opacity: 1,
  //   from: { opacity: 0 },
  // })
  const [clicked, setClicked] = useState(false);

  const size = useSpring({
    width: clicked ? "300px" : "200px",
    // opacity: clicked ? 1 : 0
  })

  const WorksDiv = styled.div`
    height: 1400px;
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

  const Sub = styled.h5`
    margin-bottom: 10px;
    font-weight: 100;
    color: rgb(84, 82, 82);
    line-height: 30px
  `;

  const Description = styled.p`
    padding-bottom: 50px;
    font-size: 17px;
    font-family: 'Cormorant', serif;
    line-height: 30px
  `;

  const float = {
    float: 'right'
  }

  const font = {
    fontFamily: 'Cormorant Upright, serif',
    fontWeight: 'bold',
    // border: '0.1px solid #d05c35',
    // padding: '5px',
    // borderRadius: '10px',
    // lineHeight: '40px'
  }
  
  return(
    <>
    <Carousel/><br></br>
    <animated.img style={size} onClick={()=> setClicked(!clicked)} src={flashChord1}></animated.img><br></br>
  
    <WorksDiv id="works">
      <Fade duration="1500" delay="150">
        <WorksHeader>Works</WorksHeader>
      </Fade>
      <WorksLinks>
        <Fade delay="150">
          <a style={font} href="https://sleep-habits-89510.web.app/" target="_blank">SLEEP HABITS</a>
          <Sub>React | Redux | Heroku | Firebase | SCSS <a style={float} href="https://github.com/mekinsie/sleep-habits" target="_blank">GitHub Repo</a></Sub>
          <Description>Sleep Habits an app that I am currently working on building. It is an application where users can sign up and log each night's sleep data. The application will create graphs based on the user's sleep data to help visualize areas of improvement. Log in with the email: (example@gmail.com) and password: (example) to see example data without signing up.</Description>
        </Fade>
        <Fade delay="150">
          <a style={font} href="https://flash-chords.herokuapp.com/" target="_blank">FLASH CHORDS</a>
          <Sub>Ruby on Rails | PostgreSQL | Heroku | Devise | SCSS <a style={float} href="https://github.com/mekinsie/piano_pals" target="_blank">GitHub Repo</a></Sub>
          <Description>Flash Chords is a web application where users can learn piano chords through the use of flash cards. Users can sign up to save and customize their own flashcard sets. Co-authored by <a href="https://github.com/MicahOlson" target="_blank">Micah Olsen</a> and <a href="https://github.com/CrankyJones" target="_blank">Geof Rosenmund.</a></Description>
        </Fade>






        <Fade duration="1300" delay="160">
          <a style={font}  href="https://www.memoryspace.net/" target="_blank">MEMORY SPACE</a>
          <Sub>React | Redux | Firebase <a style={float} href="https://github.com/mekinsie/memory-space" target="_blank">GitHub Repo</a> </Sub>
          <Description>This application is designed as a community memory space. Users can add their favorite or insightful memories to share with other users. It is currently populated with memories from anonymous users. Co-authored by <a href="https://github.com/Lo-GR" target="_blank">Logan Roth.</a></Description>
        </Fade>

        <Fade duration="1500" delay="170">
          <a style={font} href="https://www.mekinsie.com/" target="_blank">PORTFOLIO</a>
          <Sub>React | SCSS <a style={float} href="https://github.com/mekinsie/portfolio-react" target="_blank">GitHub Repo</a></Sub>
          <Description>This portolfio is a personal project to display my work. My design goal is for it to be minimalist and dynamic.</Description>
        </Fade>

        <Fade duration="1700" delay="180">
          <a style={font} href="https://hitomis-sushi.herokuapp.com/" target="_blank">HITOMI'S SUSHI</a>
          <Sub>Ruby on Rails | PostgreSQL | Heroku | SCSS <a style={float} href="https://github.com/mekinsie/hitomis-sushi" target="_blank">GitHub Repo</a></Sub>
          <Description>A sushi review website where users can login to add, edit, and delete their own reviews. Admin may add, edit and delete products while also deleting reviews. The database is seeded using the Faker gem. </Description>
        </Fade>

        <Fade duration="1900" delay="190">
          <a style={font} href="https://mekinsie.github.io/pig-dice/" target="_blank">PIG DICE</a>
          <Sub>Javascript | jQuery | HTML5 | CSS | Bootstrap <a style={float} href="https://github.com/mekinsie/pig-dice" target="_blank">GitHub Repo</a></Sub>
          <Description>A game of Pig Dice. The purpose of this project was to practice using Object-Oriented JavaScript. Co-authored by <a href="https://github.com/KirbyPaint" target="_blank">KirbyPaint.</a></Description>
        </Fade>
      </WorksLinks>
    </WorksDiv>
    </>
  )
}

export default Works;