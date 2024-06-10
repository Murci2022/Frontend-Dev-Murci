import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import Contributions from './Contributions';
import Contact from './Contact';
import Tech from './Tech';

const Section = styled.section`
  margin-bottom: 64px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 8px;
`;

const MiscContributions = styled.div`
  @media (max-width: 990px) {
    display:none;
`;

const Misc = ({ setSection }) => {
  const { ref, inView } = useInView({});

  useEffect(() => {
    if (inView) {
      setSection('misc');
    }
  }, [inView, setSection]);

  return (
    <Section
      ref={ref}
      id='misc'
    >
      <Title>Misc</Title>
      <Contact />
      <Tech />
      <MiscContributions>
        <Contributions />
      </MiscContributions>
    </Section>
  );
};

export default Misc;
