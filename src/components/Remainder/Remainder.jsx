import React from 'react';
import { StyledRemText, StyledRemSpan } from './Remainder.styled';

const Remainder = () => {
  return (
    <StyledRemText>
      Залишилось <StyledRemSpan>12</StyledRemSpan> шт по акції
    </StyledRemText>
  );
};

export default Remainder;
