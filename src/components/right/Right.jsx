import React from 'react';
import styled from 'styled-components';
import Education from './Education';
import Projects from './Projects';
import Work from './Work';
import Misc from './misc/Misc';

const RightDiv = styled.div`
  /* border: 10px solid blue; */
  padding: 16px;
`;

const Right = ({ setSection, setIsShown }) => (
  <RightDiv>
    <Work
      setSection={setSection}
      setIsShown={setIsShown}
    />
    <Projects setSection={setSection} />
    <Education setSection={setSection} />
    <Misc setSection={setSection} />
  </RightDiv>
);

export default Right;
