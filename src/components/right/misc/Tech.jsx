import React from 'react';
import styled from 'styled-components';
import Card from '../../utilities/Card';

const Title = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 24px;
`;

const Paragraph = styled.p`
  font-weight: 300;
  line-height: 28px;
  margin-bottom: 24px;
`;

const List = styled.ul`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`;

const ListItem = styled.li`
  font-weight: 300;
  line-height: 28px;
`;

const Tech = () => {
  return (
    <Card>
      <Title>Tech I Love</Title>
      <Paragraph>
        My passion for technology spans a diverse range of tools and frameworks
        that I use in my projects. Rather than quantifying my skills with
        percentages, I prefer to showcase the technologies I am proficient in
        through the projects I have built.
      </Paragraph>
      <Paragraph>
        For my personal projects, I generally prefer the following tech stack:
      </Paragraph>
      <List>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>JavaScript (ES6)</ListItem>
        <ListItem>ReactJS</ListItem>
        <ListItem>Redux Toolkit</ListItem>
        <ListItem>NodeJS</ListItem>
        <ListItem>NPM</ListItem>
        <ListItem>Tailwind CSS</ListItem>
        <ListItem>Styled Components</ListItem>
        <ListItem>Figma</ListItem>
        <ListItem>Adobe XD</ListItem>
        <ListItem>Git/Github</ListItem>
      </List>
      <Paragraph>
        I am also fluent in several languages, which allows me to work
        efficiently in international environments and communicate effectively
        with diverse teams:
      </Paragraph>
      <List>
        <ListItem>English</ListItem>
        <ListItem>German</ListItem>
        <ListItem>Japanese</ListItem>
        <ListItem>Hungarian</ListItem>
      </List>
    </Card>
  );
};

export default Tech;
