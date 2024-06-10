import React from 'react';
import styled from 'styled-components';

const WavesImg = styled.img`
  position: fixed;
  bottom: 0;
  /*  width: 100%; */
  max-width: none; /* Remove any default max-width */
  transform: scale(1.2); /* Adjust the scale factor to make the image bigger */
  transform-origin: bottom center; /* Ensure scaling happens from the bottom center */

  @media (max-width: 650px) {
    transform: scale(
      1.5
    ); /* Increase the scale factor for smaller screens if needed */
  }
`;

const Waves = () => (
  <WavesImg
    src='/waves.svg'
    alt='A flat image of waves in the horizon'
  />
);

export default Waves;
