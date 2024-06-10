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

const Link = styled.a`
  color: var(--brand-color);
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <Card>
      <Title>Contact</Title>
      <Paragraph>
        The best way to contact me is through email or LinkedIn (I&apos;m not
        much of a twitter guy). Give me a shout here:
      </Paragraph>
      <Paragraph>
        Email:{' '}
        <Link
          href='#'
          target='_blank'
          rel='noreferrer'
        >
          info@matheoskyamaguchi.com
        </Link>
      </Paragraph>
      <Paragraph>
        LinkedIn:{' '}
        <Link
          href='https://www.linkedin.com/in/matheos-k-0461b0243/'
          target='_blank'
          rel='noreferrer'
        >
          @matheos k.yamaguchi
        </Link>
      </Paragraph>
    </Card>
  );
};

export default Contact;
