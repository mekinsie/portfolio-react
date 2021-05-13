import React from 'react';
import styled from 'styled-components';

function Works(){
  const WorksDiv = styled.div`
  height: 1000px;
  margin-bottom: 100px;
  `;

  const WorksHeader = styled.h1`
  font-size: 50px;
  text-align: center;
  font-family: 'Switzer-Medium';
  margin-bottom: 20px;
  padding-top: 50px;
`;

const WorksLinks = styled.div`
font-size: 20px;
padding-bottom: 50px;
`;

const center = {
  margin: 'auto',
  display: 'table',
  textAlign: 'center'
}

const Description = styled.p`
font-family: Lato, sans-serif;
padding-bottom: 30px;
width: 600px;
`;

  return(
    <>
    <WorksDiv id="works">
      <WorksHeader>Works</WorksHeader>
      <WorksLinks>
        <ul style={center}>
            <li><a href="https://flash-chords.herokuapp.com/" target="_blank">Flash Chords</a></li>
            <Description>Flash Chords is a web application where you can learn piano chords through the use of flash cards. Sign up to save and customize your own flashcard sets. <strong>Uses Ruby on Rails, PostgreSQL, Heroku, Devise, and Sass.</strong></Description>

            <li ><a  href="https://www.memoryspace.net/" target="_blank">Memory Space</a></li>
            <Description>This application is designed as a community memory space. Users can add their favorite or insightful memories to share with other users. This web application is connected and hosted through firebase. <strong>Uses React, Redux, and Firebase.</strong></Description>

            <li><a href="https://hitomis-sushi.herokuapp.com/" target="_blank">Hitomi's Sushi</a></li>
            <Description>The purpose of this app is to practice using a SQL database along with user authentication and authorization. Users can sign up and login to add, edit, and delete their own reviews. Admin may add, edit and delete products while also deleting reviews. This app utilizes a one-to-many relationship between sushi dishes and their reviews. <strong>Uses Ruby on Rails, PostgreSQL, Heroku, and Sass.</strong></Description>

            <li><a href="https://mekinsie.github.io/pig-dice/" target="_blank">Pig Dice</a></li>
            <Description>A game of Pig Dice. The purpose of this project was to practice using Object-Oriented JavaScript. Co-authored by <a href="https://github.com/KirbyPaint" target="_blank">KirbyPaint.</a> <strong>Uses HTML5, CSS, Bootstrap, Javascript and jQuery.</strong></Description>

            <li><a href="https://mekinsie.github.io/language-suggester/" target="_blank">Language Suggester</a></li>
            <Description>A quiz that suggests the best coding language for you. The Purpose of this project was to practice Javascript and jQuery, and branching. <strong>Uses HTML5, CSS, Bootstrap, Javascript and jQuery.</strong></Description>
        </ul>
      </WorksLinks>
    </WorksDiv>
    </>
  )
}

export default Works;