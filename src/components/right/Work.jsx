import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import Card from '../utilities/Card';

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

const Info = styled.p`
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 16px;
`;

const Content = styled.p`
  font-weight: 300;
  line-height: 28px;
  margin-bottom: 24px;
`;

const Link = styled.a`
  font-weight: bold;
  color: var(--brand-color);
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;

const Work = ({ setSection, setIsShown }) => {
  const { ref, inView } = useInView({});

  useEffect(() => {
    if (inView) {
      setSection('work');
    }
  }, [inView, setSection]);
  useEffect(() => {
    if (inView) {
      setIsShown(true);
    }
  }, [inView, setIsShown]);

  return (
    <Section
      ref={ref}
      id='work'
    >
      <Title>Work</Title>

      <Card>
        <CardTitle>Frontend Developer | Designer</CardTitle>
        <Info>
          <Link
            href='https://portfolio-mate.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            Freelance
          </Link>{' '}
          • 2020 - Present
        </Info>
        <Info>Hamburg, Germany</Info>
        <Content>
          Specialized in web and logo design, later expanding into frontend
          development. Crafted user-centric websites balancing aesthetics and
          functionality. Managed client objectives, wireframing, UI/UX design,
          and responsive layouts.
        </Content>
        <Content>
          Transformed design concepts into interactive web interfaces.
          Proficient in HTML, CSS, JavaScript, ReactJS, Redux Toolkit, and
          related technologies. Demonstrated adaptability and commitment to
          elevating digital user experiences.
        </Content>
      </Card>

      <Card>
        <CardTitle>Brand Strategy Manager</CardTitle>
        <Info>
          <Link
            href='#'
            target='_blank'
            rel='noreferrer'
          >
            Tachini Painting Table
          </Link>{' '}
          • 2017 - 2020
        </Info>
        <Info>Various Locations</Info>
        <Content>
          Conceptualized and executed branding materials, including business
          cards and a multi-language brand catalog, contributing to a successful
          company exhibition in London. Collaborated to produce high-quality
          visual content, fortifying the brand narrative.
        </Content>
        <Content>
          Played a central role in refining the company's brand strategy,
          ensuring brand consistency and resonance.
        </Content>
      </Card>

      <Card>
        <CardTitle>Creative Director | CEO</CardTitle>
        <Info>
          <Link
            href='#'
            target='_blank'
            rel='noreferrer'
          >
            Dynamate s.r.o.
          </Link>{' '}
          • 2009 - 2020
        </Info>
        <Info>Various Locations</Info>
        <Content>
          Directed visual content in collaboration with artists and
          photographers, ensuring alignment with the brand's vision. Facilitated
          collaboration between creative stakeholders for a cohesive brand
          image.
        </Content>
        <Content>
          Transformed creative ideas into marketable products for both the
          Japanese and European markets. Partnered with the Japanese company to
          bridge cultural traditions between Japan and Austria/Hungary.
        </Content>
      </Card>
    </Section>
  );
};

export default Work;
