import React, { useState } from 'react';
import styled from 'styled-components';

const LinksDiv = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: start;

  z-index: 1000;
  margin-top: 24px;
  height: 48px;
`;

const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  margin-right: 16px;
  margin-bottom: 8px;
  cursor: pointer;
  height: 100%;

  &:hover span,
  &:hover div {
    color: var(--brand-color);
    background-color: var(--brand-color);
  }

  span {
    transition: color 0.3s;
    &.selected {
      color: var(--color-black);
    }
  }

  div {
    width: 12px;
    height: 1px;
    margin: 0 4px;
    transition: background-color 0.3s;
    &.selected {
      background-color: var(--color-black);
    }

    @media (min-width: 1024px) {
      width: 20px;
    }
  }
`;

const HideOnLargeScreens = styled.div`
  @media (min-width: 990px) {
    display: none;
  }
`;

const Link = ({ text, label, inView }) => {
  const [selected, setSelected] = useState(false);

  return (
    <LinkDiv
      onClick={() => {
        const el = document.getElementById(text.toLowerCase());
        el?.scrollIntoView({ behavior: 'smooth' });
      }}
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
    >
      <span className={selected || inView ? 'selected' : ''}>{label}</span>
      <div className={selected || inView ? 'selected' : ''} />
      <span className={selected || inView ? 'selected' : ''}>
        {text.toUpperCase()}
      </span>
    </LinkDiv>
  );
};

const Links = ({ section }) => (
  <LinksDiv>
    <HideOnLargeScreens>
      <Link
        text='HOME'
        label='00'
        inView={section === 'home'}
      />
    </HideOnLargeScreens>
    <Link
      text='WORK'
      label='01'
      inView={section === 'work'}
    />
    <Link
      text='PROJECTS'
      label='02'
      inView={section === 'projects'}
    />
    <Link
      text='EDUCATION'
      label='03'
      inView={section === 'education'}
    />
    <Link
      text='MISC'
      label='04'
      inView={section === 'misc'}
    />
  </LinksDiv>
);

export default Links;
