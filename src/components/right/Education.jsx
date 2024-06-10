import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import Card from '../utilities/Card';

// Define styled-components
const Section = styled.section`
  margin-bottom: 64px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 8px;
`;

const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 24px;
`;

const CardParagraph = styled.p`
  font-weight: 300;
  line-height: 28px;
  margin-bottom: 24px;
`;

const Link = styled.a`
  color: var(--brand-color); // Ensure this variable is defined
  font-weight: bold;
  text-decoration: underline;
`;

const Education = ({ setSection }) => {
  const { ref, inView } = useInView({});

  useEffect(() => {
    if (inView) {
      setSection('education');
    }
  }, [inView, setSection]);

  return (
    <Section
      ref={ref}
      id='education'
    >
      <Title>Education</Title>

      <Card>
        <CardTitle>Dope School</CardTitle>
        <CardParagraph>
          "My journey began with learning graphic design, which led me to use
          Webflow. I then attended The Kaufmann, earning my international
          certificate while studying primarily in German. My education continued
          with a rigorous coding bootcamp at neuefische GmbH, conducted in both
          English and German. These experiences have provided me with a solid
          foundation in web development and enhanced my language skills."
        </CardParagraph>
        <CardParagraph>
          Additionally, I completed my high school education at Hermann-Otto
          Gymnasium, earning my Érettségi diploma in Hungarian. This diverse
          educational background has not only broadened my academic horizons but
          also honed my ability to adapt and excel in multilingual environments.
        </CardParagraph>

        <div>
          <Link
            href='#'
            target='_blank'
            rel='noreferrer'
          >
            Website
          </Link>
        </div>
      </Card>

      <Card>
        <CardTitle>Another School</CardTitle>
        <CardParagraph>
          My linguistic abilities further complement my technical skills.
          Hungarian is my mother tongue, but I am also fluent in German and
          English, which allows me to navigate and communicate effectively in
          international settings. Moreover, I possess conversational proficiency
          in Japanese, adding another layer of cultural and linguistic
          versatility to my profile.
        </CardParagraph>
      </Card>
    </Section>
  );
};

// Define prop types for the Education component
Education.propTypes = {
  setSection: PropTypes.func.isRequired,
};

export default Education;
