import React from 'react';
import { StyledSection } from 'components/Description/Description.styled';
import { StyledSecTitle, StyledItem } from '../Benefits/Benefits.styled';

const Characteristics = () => {
  return (
    <StyledSection>
      <StyledSecTitle>Характеристики</StyledSecTitle>
      <ul>
        <StyledItem>Потужність: 12В</StyledItem>
        <StyledItem>Число оборотів: 0-350/1300 об/хв</StyledItem>
        <StyledItem>
          Діаметр свердління: Дерево - 20 мм, сталь -10 мм
        </StyledItem>
        <StyledItem>Кількість позицій регулювання: 18+1</StyledItem>
        <StyledItem>Акумулятор (літій-іонний): 12V/2.0Ah</StyledItem>
        <StyledItem>Час зарядки: 1 година</StyledItem>
        <StyledItem>Вага: 1,0 кг</StyledItem>
        <StyledItem>Розмір кейсу: 35х29х10 (см)</StyledItem>
        <StyledItem>LED підсвітка: є</StyledItem>
      </ul>
    </StyledSection>
  );
};

export default Characteristics;
