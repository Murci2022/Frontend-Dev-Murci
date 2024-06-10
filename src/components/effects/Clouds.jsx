import React from 'react';
import styled from 'styled-components';

const CloudDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.05),
    transparent
  );
`;

const Clouds = () => <CloudDiv />;

export default Clouds;
