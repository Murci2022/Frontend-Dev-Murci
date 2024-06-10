import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from './components/Nav';
import Clouds from './components/effects/Clouds';
import Stars from './components/effects/Stars';
import Waves from './components/effects/Waves';
import Fuji from './components/effects/Fuji';
import Moon from './components/effects/Moon';
import Left from './components/left/Left';
import Right from './components/right/Right';

const AppDiv = styled.div`
  border: 1px solid white;
  background-color: var(--color-black2);
  position: relative;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  margin: 0 auto; /* Center the app within the viewport */
  overflow: hidden;
`;

const RightWrapper = styled.div`
  width: 40%;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 35px;

  @media (max-width: 990px) {
    position: relative;
    width: 80vw;
    margin: 0 auto;
    padding: 30px;
    top: 0;
    transform: none;
  }
`;

const LeftWrapper = styled.div`
  padding: 16px;
`;

const App = () => {
  const [section, setSection] = useState('home');
  const [isShown, setIsShown] = useState(false);

  return (
    <AppDiv>
      <Nav
        section={section}
        isShown={isShown}
      />
      <Moon />
      <Stars />
      <Fuji />
      <RightWrapper>
        <Left section={section} />
      </RightWrapper>
      <LeftWrapper>
        <Right
          setSection={setSection}
          setIsShown={setIsShown}
        />
      </LeftWrapper>
    </AppDiv>
  );
};

export default App;
