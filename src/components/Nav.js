import React from 'react';
import FadeIn from 'react-fade-in';

function Nav(){
  return(
    <>
    <FadeIn transitionDuration='1500' delay="1000">
      <ul>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">WORKS</a></li>
        <li><a href="#">CONTACT</a></li>
        <li><a href="#">TECHNOLOGIES</a></li>
      </ul>
    </FadeIn>
    </>
  )
}

export default Nav;