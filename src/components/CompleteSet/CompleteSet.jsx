import React from 'react';
import complete from '../../images/completeSet/complete.png';
import { StyledSection, StyledDescImg } from 'components/Description/Description.styled';
import { StyledSecTitle, StyledItem } from '../Benefits/Benefits.styled';

const CompleteSet = () => {
  return (
    <StyledSection>
      <StyledDescImg src={complete} alt="Комплектація" />
    </StyledSection>
  );
};

export default CompleteSet;
