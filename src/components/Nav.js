import React from 'react';
import FadeIn from 'react-fade-in';

function Nav(){

  const styledNav = {
    top: '20px',
    left: '40px',
    position: 'fixed',
  }

  return(
    <>
      <div style={styledNav}>
        <ul>
          <FadeIn transitionDuration='1200' delay="1000">
              <li><a href="#">Home</a></li>
          </FadeIn>
          <FadeIn transitionDuration='1600' delay="1000">
              <li><a href="#about">ABOUT</a></li>
          </FadeIn>
          <FadeIn transitionDuration='1900' delay="1000">
              <li><a href="#skills">Skills</a></li>
          </FadeIn>
          <FadeIn transitionDuration='2300' delay="1000">
              <li><a href="#works">WORKS</a></li>
          </FadeIn>
          <FadeIn transitionDuration='2500' delay="1000">
              <li><a href="#contact">CONTACT</a></li>
          </FadeIn>
        </ul>
      </div>
    </>
  )
}

export default Nav;