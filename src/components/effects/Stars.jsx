import { motion, useTransform, useScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const NUM_STARS = 150;

const StarsDiv = styled.div`
  /* width: auto; */
  height: 100vh;
  width: 100%;
  max-width: 1600px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
`;
const StarDiv = styled(motion.div)`
  border-radius: 50%;
  background: white;
  position: absolute;
  z-index: 0;
`;

const Stars = () => {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    const starData = [];
    for (let i = 0; i < NUM_STARS; i++) {
      const scrollPos = pickRandom(scrollPosValues);
      const scrollParams = pickRandom(scrollParamsValues);
      const horizontalPos = pickRandom(horizontalPosValues);
      const bottomInitial = pickRandom(bottomInitValues);
      starData.push({
        key: i,
        scrollPos,
        scrollParams,
        horizontalPos,
        bottomInitial,
      });
    }

    setStars(starData);
  };

  const pickRandom = (arr) => {
    const length = arr.length;
    const randomIndex = Math.floor(Math.random() * length);
    return arr[randomIndex];
  };

  useEffect(() => {
    generateStars();
  }, []);

  return (
    <StarsDiv>
      {stars.map(
        ({ key, scrollPos, scrollParams, horizontalPos, bottomInitial }) => (
          <Star
            key={key}
            scrollPos={scrollPos}
            scrollParams={scrollParams}
            horizontalPos={horizontalPos}
            bottomInitial={bottomInitial}
          />
        )
      )}
    </StarsDiv>
  );
};

const Star = ({
  scrollPos = [0, 8250],
  scrollParams = [0, -2000],
  horizontalPos = '12px',
  bottomInitial = '-50vh',
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, scrollPos, scrollParams);

  const getRandValue = (max, min = 0) =>
    Math.floor(Math.random() * (max - min) + min);

  const widthHeight = getRandValue(6, 1);

  return (
    <StarDiv
      style={{
        y,
        animationDuration: `${getRandValue(10)}s`,
        width: widthHeight,
        height: widthHeight,
        bottom: bottomInitial,
        right: horizontalPos,
      }}
    />
  );
};

const scrollPosValues = [
  [0, 8000],
  [0, 9000],
  [0, 10000],
  [0, 11000],
  [0, 12000],
  [0, 13000],
  [0, 14000],
  [0, 15000],
  [0, 16000],
  [0, 17000],
  [0, 18000],
  [0, 19000],
  [0, 20000],
  [0, 21000],
  [0, 22000],
  [0, 23000],
  [0, 24000],
  [0, 25000],
];

const scrollParamsValues = [
  [0, -100],
  [0, -200],
  [0, -300],
  [0, -400],
  [0, -500],
  [0, -600],
  [0, -700],
  [0, -800],
  [0, -900],
  [0, -1000],
  [0, -1250],
  [0, -1500],
  [0, -1750],
  [0, -2000],
];

const horizontalPosValues = [
  '3%',
  '6%',
  '9%',
  '12%',
  '15%',
  '18%',
  '21%',
  '24%',
  '27%',
  '30%',
  '33%',
  '36%',
  '39%',
  '42%',
  '45%',
  '48%',
  '51%',
  '54%',
  '57%',
  '60%',
  '63%',
  '66%',
  '69%',
  '72%',
  '75%',
  '78%',
  '81%',
  '84%',
  '87%',
  '90%',
  '93%',
  '96%',
  '99%',
  // ---
  '3%',
  '6%',
  '9%',
  '12%',
  '15%',
  '18%',
  '21%',
  '24%',
  '27%',
  '30%',
  '33%',
  '36%',
  '39%',
  '42%',
  '45%',
  '48%',
  '51%',
  '54%',
  '57%',
  '60%',
  '63%',
  '66%',
  '69%',
  '72%',
  '75%',
  '78%',
  '81%',
  '84%',
  '87%',
  '90%',
  '93%',
  '96%',
  '99%',
];

const bottomInitValues = [
  '0vh',
  '-5vh',
  '-10vh',
  '-15vh',
  '-20vh',
  '-25vh',
  '-30vh',
  '-35vh',
  '-40vh',
  '-45vh',
  '-50vh',
  '-55vh',
  '-60vh',
  '-65vh',
  '-70vh',
  '-75vh',
  '-80vh',
  '-85vh',
  '-90vh',
  '-95vh',
  // ---
  '5vh',
  '10vh',
  '15vh',
  '20vh',
  '25vh',
  '30vh',
  '35vh',
  '40vh',
  '45vh',
  '50vh',
  '55vh',
  '60vh',
  '65vh',
  '70vh',
  '75vh',
  '80vh',
  '85vh',
  '90vh',
  '95vh',
];

export default Stars;
