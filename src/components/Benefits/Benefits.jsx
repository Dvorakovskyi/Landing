import React from 'react';
import benefits from '../../images/benefits/benefits.png';
import { StyledSection, StyledDescImg } from 'components/Description/Description.styled';

const Benefits = () => {
  return (
    <StyledSection>
      <StyledDescImg src={benefits} alt="Переваги" />
    </StyledSection>
  );
};

export default Benefits;
