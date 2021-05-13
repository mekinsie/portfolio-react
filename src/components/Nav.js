import React from 'react';
import FadeIn from 'react-fade-in';

function Nav(){

  const styledNav = {
    // marginLeft: '30px',
    // marginTop: '20px',
    top: '20px',
    left: '30px',
    position: 'fixed'
  }

  return(
    <>
      <div style={styledNav}>
        <ul>
          <FadeIn transitionDuration='1200' delay="1000">
              <li><a href="#home">Home</a></li>
          </FadeIn>
          <FadeIn transitionDuration='1200' delay="1000">
              <li><a href="#about">ABOUT</a></li>
          </FadeIn>
          <FadeIn transitionDuration='1600' delay="1000">
              <li><a href="#works">WORKS</a></li>
          </FadeIn>
          <FadeIn transitionDuration='1900' delay="1000">
              <li><a href="#contact">CONTACT</a></li>
          </FadeIn>
          <FadeIn transitionDuration='2300' delay="1000">
              <li><a href="#">TECHNOLOGIES</a></li>
          </FadeIn>
        </ul>
      </div>
    </>
  )
}

export default Nav;