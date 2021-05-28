import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { useSpring, animated } from 'react-spring'
import flashChord1 from '../img/flashchordhome.png'

function Carousel(){
  const [[index, dir], setIndex] = useState([0, 0])
  const transitions = useTransition(slides[index], item => item.url, {
    from: {
      opacity: 0,
      transform: `translate3d(${dir === 1 ? 100 : -100}%,0,0) scale(0.5)`
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0) scale(1)"
    },
    leave: {
      opacity: 0,
      transform: `translate3d(${dir === 1 ? -100 : 100}%,0,0) scale(0.5)`
    }
  });
  return(
    <>
    <p>kdjhgkjdfhgk</p>
    </>
  )
}

export default Carousel;