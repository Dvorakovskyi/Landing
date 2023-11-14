import React from 'react';
import {
  StyledWrapper,
  StyledOldPrice,
  StyledNewPrice,
  StyledPriceText,
  StyledDiscount,
  StyledPrice,
  StyledPriceLine,
  StyledDiscText,
  StyledDiscNumber,
} from './Price.styled';

const Price = () => {
  return (
    <StyledWrapper>
      <StyledOldPrice>
        <StyledPriceText>Звичайна ціна:</StyledPriceText>
        <StyledPriceLine>2199грн.</StyledPriceLine>
      </StyledOldPrice>
      <StyledDiscount>
        <StyledDiscText>SALE</StyledDiscText>
        <StyledDiscNumber>-37%</StyledDiscNumber>
      </StyledDiscount>
      <StyledNewPrice>
        <StyledPriceText>Ціна сьогодні:</StyledPriceText>
        <StyledPrice>1399грн.</StyledPrice>
      </StyledNewPrice>
    </StyledWrapper>
  );
};

export default Price;
