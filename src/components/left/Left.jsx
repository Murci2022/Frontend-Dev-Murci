import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import Links from './Links';

const LeftDiv = styled.div`
  padding: 16px;
`;

const Left = ({ section }) => {
  return (
    <LeftDiv>
      <Hero section={section} />
      {/* <Links section={section} /> */}
    </LeftDiv>
  );
};

export default Left;
