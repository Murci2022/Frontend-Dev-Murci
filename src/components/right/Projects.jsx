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
      <Title>Projects</Title>

      <Card>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '24px',
          }}
        >
          <ProjectTitle>First Project</ProjectTitle>
          <div>
            <Link
              href='#'
              target='_blank'
              rel='noreferrer'
            >
              Visit Website
            </Link>
          </div>
        </div>
        <ProjectParagraph>
          Here I&apos;ll describe in a paragraph or so what my project is, what
          it does, and most importantly WHO IT SERVES! Describe the problem it
          fixes and for who it fixes it for. If you worked on a team, say which
          parts that you built. I like to add a video of how it works like the
          one below so people don&apos;t have to sign up if they don&apos;t want
          to.
        </ProjectParagraph>
        {renderTags([
          'iOS',
          'Android',
          'React (Next JS)',
          'React Native',
          'Node',
          'GCP',
          'Firebase',
          'Serverless',
        ])}
        <div
          style={{
            marginTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button onClick={() => setVidOne((prev) => !prev)}>Video Demo</Button>
          {vidOne && (
            <video
              preload='metadata'
              style={{ marginTop: '16px', width: '300px' }}
              controls
            >
              <source src='/wips/preview.mp4' />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </Card>

      <Card>
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
      </Card>
    </Section>
  );
};

export default Projects;
