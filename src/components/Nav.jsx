import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavDiv = styled.div`
  border: 1px solid white;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  text-align: right;
  position: fixed;
  top: 0px;
  right: 0;
  z-index: 40000;
  @media (min-width: 990px) {
    display: none;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;

  background: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Apply blur to the background */
  -webkit-backdrop-filter: blur(10px); /* For Safari support */
  border-radius: 15px; /* Rounded corners */
  padding: 10px 10px;

  z-index: 100;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow to give depth */
`;

const ButtonUp = styled.button`
  background-color: rgba(255, 255, 255, 0.1);

  z-index: 100000;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  backdrop-filter: blur(10px); /* Apply blur to the background */
  -webkit-backdrop-filter: blur(10px); /* For Safari support */

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
const ButtonDown = styled.button`
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  backdrop-filter: blur(10px); /* Apply blur to the background */
  -webkit-backdrop-filter: blur(10px); /* For Safari support */

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Nav = ({ section }) => {
  const [sectionName, setSectionName] = useState('');

  useEffect(() => {
    if (section) {
      setSectionName(section);
    } else {
      setSectionName('');
    }
  }, [section]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSectionName('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <NavDiv>
      <ButtonUp onClick={scrollToTop}>⬆️</ButtonUp>
      <Title>{sectionName}</Title>
      <ButtonDown onClick={scrollToBottom}>⬇️</ButtonDown>
    </NavDiv>
  );
};

export default Nav;
