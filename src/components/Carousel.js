import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring'
import flashChord1 from '../img/flashchordhome.png'

function Carousel(){
  const [count, setCount] = useState(0);
  const [reverse, setReverse] = useState(false);

  // const cards = [
  //   flashChord1, flashChord1, flashChord1, flashChord1, flashChord1
  // ]
  const cards = [
    'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
    'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
    'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg'
  ];

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
      <div>
        {transitions(( item, props, key ) => (
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
      </div>
    </>
  )
}

export default Carousel;