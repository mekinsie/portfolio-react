import React from 'react';
import styled from 'styled-components';

function Works(){
  const WorksDiv = styled.div`
  height: 1000px;
  margin-bottom: 100px;
  width: 600px;
  margin: auto;
  // text-align: center;
  `;

  const WorksHeader = styled.h1`
  padding-top: 30px;
  margin-bottom: 20px;
  font-size: 50px;
  font-family: 'Boska-Medium';
`;

  const WorksLinks = styled.div`
  font-size: 20px;
  padding-bottom: 0px;
  `;


  const Description = styled.p`
  padding-bottom: 50px;
  font-size: 17px;
  `;

  return(
    <>
    <WorksDiv id="works">
      <WorksHeader>Works</WorksHeader>
      <WorksLinks>
        <a href="https://flash-chords.herokuapp.com/" target="_blank">Flash Chords</a>
        <h5>Ruby on Rails | PostgreSQL | Heroku | Devise | SCSS.</h5>
        <Description>Flash Chords is a web application where you can learn piano chords through the use of flash cards. Sign up to save and customize your own flashcard sets.</Description>

        <a href="https://www.memoryspace.net/" target="_blank">Memory Space</a>
        <h5>React | Redux | Firebase </h5>
        <Description>This application is designed as a community memory space. Users can add their favorite or insightful memories to share with other users.</Description>

        <a href="https://hitomis-sushi.herokuapp.com/" target="_blank">Hitomi's Sushi</a>
        <h5>Ruby on Rails | PostgreSQL | Heroku | SCSS.</h5>
        <Description>A sushi review website where users can login to add, edit, and delete their own reviews. Admin may add, edit and delete products while also deleting reviews. The database is seeded using the Faker gem.</Description>

        <a href="https://mekinsie.github.io/pig-dice/" target="_blank">Pig Dice</a>
        <h5>Javascript | jQuery | HTML5 | CSS | Bootstrap</h5>
        <Description>A game of Pig Dice. The purpose of this project was to practice using Object-Oriented JavaScript. Co-authored by <a href="https://github.com/KirbyPaint" target="_blank">KirbyPaint.</a></Description>

        <a href="https://mekinsie.github.io/language-suggester/" target="_blank">Language Suggester</a>
        <h5>Javascript | jQuery | HTML5 | CSS | Bootstrap</h5>
        <Description>A lighthearted quiz that suggests the best coding language for you.</Description>
      </WorksLinks>
    </WorksDiv>
    </>
  )
}

export default Works;