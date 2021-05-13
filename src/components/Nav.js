import React from 'react';
import FadeIn from 'react-fade-in';

function Nav(){
  return(
    <>
      <ul>
    <FadeIn transitionDuration='1200' delay="1000">
        <li><a href="#">ABOUT</a></li>
    </FadeIn>
    <FadeIn transitionDuration='1600' delay="1000">
        <li><a href="#">WORKS</a></li>
    </FadeIn>
    <FadeIn transitionDuration='1900' delay="1000">
        <li><a href="#">CONTACT</a></li>
    </FadeIn>
    <FadeIn transitionDuration='2300' delay="1000">
        <li><a href="#">TECHNOLOGIES</a></li>
    </FadeIn>
      </ul>
    </>
  )
}

export default Nav;