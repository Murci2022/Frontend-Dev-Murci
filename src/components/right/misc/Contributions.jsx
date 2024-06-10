import React from 'react';
import styled from 'styled-components';
import GitHubCalendar from 'react-github-calendar';
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

const Link = styled.a`
  color: var(--brand-color);
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

const Contributions = () => {
  return (
    <Card>
      <Title>Contributions</Title>
      <Paragraph>
        GitHub:{' '}
        <Link
          href='https://github.com/Murci2022'
          target='_blank'
          rel='noreferrer'
        >
          @Murci2022
        </Link>
      </Paragraph>
      <FlexCenter>
        <GitHubCalendar username='Murci2022' />
      </FlexCenter>
    </Card>
  );
};

export default Contributions;
