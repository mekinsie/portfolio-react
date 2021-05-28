import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { useSpring, animated } from 'react-spring'
import flashChord1 from '../img/flashchordhome.png'

function Carousel(){
  const [count, setCount] = useState(0);
  const [reverse, setReverse] = useState(false);

  const transitions = useTransition([count], item => item, {
    from: {
      opacity: 0,
      marginTop: reverse ? 100 : 10,
      position: 'absolute',
      boxShadow: '0px 100px 20px 0px rgba(0,0,0,0.4)'
    },
    enter: { opacity: 1, marginTop: 50 },
    leave: { opacity: 0, marginTop: reverse ? 10 : 100 }
  });

  const prevSlide = () => {
    let prevSlide = count - 1 < 0 ? cards.length -1 : count -1;
    setCount(prevSlide);
    setReverse(true);
  };

  const nextSlide = () => {
    let nextSlide = count + 1 < cards.length ? count + 1 : 0;
    setCount(nextSlide);
    setReverse(false);
  }

  return(
    <>


    <p>kdjhgkjdfhgk</p>
    </>
  )
}

export default Carousel;