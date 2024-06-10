import React from 'react';
import Links from './Links';
import styled from 'styled-components';
import Contributions from '../right/misc/Contributions';

const HeroDiv = styled.div`
  border: 1px solid blue;
  margin-bottom: 24px;
  margin-top: 48px;
  padding: 16px;
`;

const HeroTitle = styled.h1`
  font-size: 40px;
  line-height: 48px;
  font-weight: 900;

  @media (min-width: 1024px) {
    font-size: 48px;
    line-height: 56px;
  }
`;

const HeroParagraphContainer = styled.div`
  background: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Apply blur to the background */
  -webkit-backdrop-filter: blur(10px); /* For Safari support */
  border-radius: 15px; /* Rounded corners */
  padding: 24px;
  margin-bottom: 24px;
  z-index: 100;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow to give depth */
`;

const HeroParagraph = styled.p`
  font-weight: 300;
  line-height: 28px;

  margin-bottom: 24px;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 32px 0;

  img {
    margin-right: 16px;
    transition: opacity 0.3s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const HeroContributions = styled.div`
  margin-top: 24px;
  display: none;
  @media (max-width: 990px) {
    display: block;
  }
`;

const Hero = ({ section }) => (
  <HeroDiv>
    <HeroTitle>
      Hey, I&apos;m
      <br />
      Matheos<span style={{ color: 'var(--brand-color)' }}>.</span>
    </HeroTitle>
    <SocialIcons>
      <img
        alt=''
        onClick={() => {
          window.open('https://github.com/', '_blank');
        }}
        src='/github.svg'
      />
      <img
        alt=''
        onClick={() => {
          window.open('https://www.linkedin.com/', '_blank');
        }}
        src='/linkedin.svg'
      />
      <img
        alt=''
        onClick={() => {
          window.open('https://twitter.com/', '_blank');
        }}
        src='/twitter.svg'
      />
      <img
        alt=''
        onClick={() => {
          window.open('mailto:youremail@gmail.com');
        }}
        src='/google.svg'
      />
    </SocialIcons>

    <HeroParagraph>
      I&apos;m a software engineer based in Tokyo and in Hamburg. Here&apos;s a
      sentence about{' '}
      <a
        href='#'
        style={{
          color: 'var(--brand-color)',
          fontWeight: 'bold',
          textDecoration: 'underline',
        }}
      >
        a cool thing that I built
      </a>{' '}
      and the people it helps. This is about the type of person I am and what I
      like to do in my free time so you know I&apos;m not a robot. Here&apos;s
      one last interesting sentence so that you remember me a bit better.
    </HeroParagraph>
    <Links section={section} />
    <HeroContributions>
      <Contributions />
    </HeroContributions>
  </HeroDiv>
);

export default Hero;
