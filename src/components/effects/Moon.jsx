import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import MoonImg from '/moon.png';

const MoonDiv = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #c9c9c9; /* Replace with your moon color or image */
  position: fixed;
  top: 50vh;
  left: calc(50% - 475px);
  z-index: 1;

  @media (max-width: 990px) {
    top: 60vh;
    left: calc(50% - 195px);
    width: 200px;
    height: 200px;
  }
  @media (max-width: 650px) {
    top: 70vh;
    right: calc(50% - 175px);
    width: 120px;
    height: 120px;
  }
`;

const Moon = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 12000], [0, -500]);

  return (
    <MoonDiv style={{ y }}>
      <img
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        src={MoonImg}
        alt='img of moon'
      />
    </MoonDiv>
  );
};

export default React.memo(Moon, () => true);
