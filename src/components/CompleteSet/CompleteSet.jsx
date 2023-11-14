import React from 'react';
import { StyledSection } from 'components/Description/Description.styled';
import { StyledSecTitle, StyledItem } from '../Benefits/Benefits.styled';

const CompleteSet = () => {
  return (
    <StyledSection>
      <StyledSecTitle>Комплектація</StyledSecTitle>
      <ul>
        <StyledItem>Шуруповерт Makita DF330DWE</StyledItem>
        <StyledItem>Два літій-іонні акумулятори 12V/2.0Ah</StyledItem>
        <StyledItem>Зарядний пристрій</StyledItem>
        <StyledItem>Набір біт, свердл, насадок</StyledItem>
        <StyledItem>Пластиковий кейс</StyledItem>
      </ul>
    </StyledSection>
  );
};

export default CompleteSet;
