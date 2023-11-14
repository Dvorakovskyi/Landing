import React from 'react';
import { StyledSection } from 'components/Description/Description.styled';
import { StyledSecTitle, StyledItem } from '../Benefits/Benefits.styled';

const CompleteSet = () => {
  return (
    <StyledSection>
      <StyledSecTitle>Комплектація</StyledSecTitle>
      <ul>
        <StyledItem>40 воскових пастелей</StyledItem>
        <StyledItem>40 масляних пастелей</StyledItem>
        <StyledItem>36 фломастерів</StyledItem>
        <StyledItem>45 скріпок</StyledItem>
        <StyledItem>20 великих маркерів</StyledItem>
        <StyledItem>20 кольорових олівців</StyledItem>
        <StyledItem>12 акварелей</StyledItem>
        <StyledItem>1 палітра</StyledItem>
        <StyledItem>1 кисть</StyledItem>
        <StyledItem>1 точилка</StyledItem>
        <StyledItem>1 клей</StyledItem>
        <StyledItem>1 лінійка</StyledItem>
        <StyledItem>1 гумка</StyledItem>
        <StyledItem>1 олівець</StyledItem>
      </ul>
    </StyledSection>
  );
};

export default CompleteSet;
