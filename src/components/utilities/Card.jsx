import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CardDiv = styled(motion.div)`
  position: relative;
  width: 50%;
  background: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Apply blur to the background */
  -webkit-backdrop-filter: blur(10px); /* For Safari support */
  border-radius: 15px; /* Rounded corners */
  padding: 24px;
  margin-bottom: 24px;
  z-index: 100;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow to give depth */

  @media (max-width: 990px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    width: 90%;
  }

  @media (max-width: 450px) {
    width: 90vw;
    padding: 16px; /* Adjust padding for smaller screens */
  }
`;

const Card = ({ children }) => {
  return (
    <CardDiv
      initial='hidden'
      whileInView='visible'
      transition={{ duration: 0.25 }}
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0, scale: 1 },
        hidden: { opacity: 0, y: 50, scale: 0.8 },
      }}
    >
      {children}
    </CardDiv>
  );
};

export default Card;
