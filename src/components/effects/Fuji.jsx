import React from 'react';
import styled from 'styled-components';

const FujiImg = styled.img`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 1600px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  @media (max-width: 990px) {
    width: 250%;
    z-index: 2;
  }
  @media (max-width: 650px) {
    width: 250%;
  }
  @media (max-width: 450px) {
  }
`;

const Fuji = () => {
  return (
    <FujiImg
      src='./fuji.svg'
      alt='fuji img'
    />
  );
};

export default Fuji;
