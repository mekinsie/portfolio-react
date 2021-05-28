import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { useTransition, animated } from 'react-spring'
import flashChord1 from '../img/flashchordhome.png'

function Carousel(){
  const [count, setCount] = useState(0);
  const [reverse, setReverse] = useState(false);

  const cards = [
    flashChord1, flashChord1, flashChord1, flashChord1, flashChord1
  ]

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
  };

  return(
    <>
      <div>
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <img src={cards[item]} alt="screenshot of project" />
          </animated.div>
        ))}
      </div>
      <div className="carousel__prev" onClick={prevSlide}>
        ◀︎
      </div>
      <div className="carousel__next" onClick={nextSlide}>
        ▶︎
      </div>

    <p>kdjhgkjdfhgk</p>
    </>
  )
}

export default Carousel;