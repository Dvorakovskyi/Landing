import React from 'react';
import { StyledSection } from 'components/Description/Description.styled';
import { StyledSecTitle } from 'components/Benefits/Benefits.styled';
import { StyledVideoWrapper } from './Video.styled';

const Video = () => {
  return (
    <StyledSection>
      <StyledSecTitle>Відеоогляд</StyledSecTitle>
      <StyledVideoWrapper>
        <iframe
          title='Відеоогляд'
          src="https://www.youtube.com/embed/vkcnkDuZ_cA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          width="400"
          height="250"
        ></iframe>
      </StyledVideoWrapper>
    </StyledSection>
  );
};

export default Video;
