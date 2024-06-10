import React, { useEffect, useState } from 'react';
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

const ProjectTitle = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 24px;
`;

const ProjectParagraph = styled.p`
  font-weight: 300;
  line-height: 28px;
  margin-bottom: 24px;
`;

const Link = styled.a`
  color: var(--brand-color);
  font-weight: bold;
  text-decoration: underline;
`;

const Button = styled.button`
  background-color: var(--brand-color);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const Projects = ({ setSection }) => {
  const { ref, inView } = useInView({});
  const [vidOne, setVidOne] = useState(false);
  const [vidTwo, setVidTwo] = useState(false);
  const [vidThree, setVidThree] = useState(false);

  useEffect(() => {
    if (inView) setSection('projects');
  }, [inView, setSection]);

  const renderTags = (tech) => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '16px' }}>
        {tech.map((tag) => (
          <span
            key={tag}
            style={{
              padding: '4px 8px',
              background: 'var(--brand-color)',
              marginRight: '8px',
              marginBottom: '8px',
              borderRadius: '4px',
              fontSize: '12px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    );
  };

  return (
    <Section
      ref={ref}
      id='projects'
    >
      <Title>Currently Working On:</Title>

      <Card>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '24px',
          }}
        >
          <ProjectTitle>
            Kalman Gasztonyi | Painter Official Website
          </ProjectTitle>
          <div>
            <Link
              href='https://gasztonyi-kalman.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              Visit Website
            </Link>
          </div>
        </div>
        <ProjectParagraph>
          Kalman Gasztonyi is a renowned painter whose works captivate art
          enthusiasts around the world. This project, the official website of
          Kalman Gasztonyi, serves as a comprehensive digital gallery and
          resource for anyone interested in his art. The website showcases a
          curated collection of his paintings, providing detailed descriptions
          and high-resolution images for art collectors, enthusiasts, and
          potential buyers. It also offers insight into Kalman's creative
          process, his biography, and upcoming exhibitions. The primary goal of
          this project is to bridge the gap between Kalman's exceptional artwork
          and a global audience. By presenting his works in a visually engaging
          and user-friendly manner, the website helps promote his art, making it
          accessible to a wider audience who might not have the opportunity to
          visit his exhibitions in person. Our team worked collaboratively to
          bring this project to life. I focused on the design and development of
          the website, ensuring a seamless and immersive user experience. The
          site is designed to be responsive and easy to navigate, with features
          such as an interactive gallery, a contact form for inquiries, and an
          integrated blog for updates and news. Additionally, a video
          walkthrough of the website is included below to provide a quick
          overview of its functionality and content, making it easy for visitors
          to explore without needing to sign up.
        </ProjectParagraph>
        {renderTags([
          'Vite',
          'Styled Components',
          'Figma',
          'GitHub',
          'Git',
          'Tailwind CSS',
          'JavaScript',
        ])}
        <div
          style={{
            marginTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Button onClick={() => setVidOne((prev) => !prev)}>Video Demo</Button>
          {vidOne && (
            <video
              preload='metadata'
              style={{ marginTop: '16px', width: '300px' }}
              controls
            >
              <source src='/wips/preview.mp4' />
              Your browser does not support the video tag.
            </video>
          )} */}
        </div>
      </Card>

      {/*     <Card>
        <ProjectTitle>Second Project</ProjectTitle>
        <ProjectParagraph>
          Here I&apos;ll describe in a paragraph or so what my project is, what
          it does, and most importantly WHO IT SERVES! Describe the problem it
          fixes and for who it fixes it for. If you worked on a team, say which
          parts that you built. I like to add a video of how it works like the
          one below so people don&apos;t have to sign up if they don&apos;t want
          to.
        </ProjectParagraph>
        {renderTags([
          'React (CRA)',
          'Node',
          'Express',
          'Postgres',
          'Knex JS',
          'Heroku',
          'Web Sockets',
        ])}
        <div
          style={{
            marginTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button onClick={() => setVidTwo((prev) => !prev)}>Video Demo</Button>
          {vidTwo && (
            <video
              preload='metadata'
              style={{ marginTop: '16px', width: '100%' }}
              controls
            >
              <source src='/wips/preview.mp4' />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </Card>

      <Card>
        <ProjectTitle>Third Project</ProjectTitle>
        <ProjectParagraph>
          Here I&apos;ll describe in a paragraph or so what my project is, what
          it does, and most importantly WHO IT SERVES! Describe the problem it
          fixes and for who it fixes it for. If you worked on a team, say which
          parts that you built. I like to add a video of how it works like the
          one below so people don&apos;t have to sign up if they don&apos;t want
          to.
        </ProjectParagraph>
        {renderTags([
          'React (Next JS)',
          'TypeScript',
          'Node',
          'Express',
          'Web Audio',
        ])}
        <div
          style={{
            marginTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button onClick={() => setVidThree((prev) => !prev)}>
            Video Demo
          </Button>
          {vidThree && (
            <video
              preload='metadata'
              style={{ marginTop: '16px', width: '100%' }}
              controls
            >
              <source src='/wips/preview.mp4' />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </Card> */}
    </Section>
  );
};

export default Projects;
