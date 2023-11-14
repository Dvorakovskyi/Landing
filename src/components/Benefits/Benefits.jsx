import React from 'react';
import { StyledSection } from 'components/Description/Description.styled';
import { StyledSecTitle, StyledItem } from './Benefits.styled';

const Benefits = () => {
  return (
    <StyledSection>
      <StyledSecTitle>Особливості</StyledSecTitle>
      <ul>
        <StyledItem>Новий шуруповерт Makita з технологією LXT</StyledItem>
        <StyledItem>
          Збільшення загального терміну служби на 430%
        </StyledItem>
        <StyledItem>
          2-х швидкісний планетарний редуктор з металевими шестернями
        </StyledItem>
        <StyledItem>
          Електронне регулювання числа обертів та гальмування двигуна
        </StyledItem>
        <StyledItem>
          4-х полюсний легкий та компактний двигун постійного струму
        </StyledItem>
        <StyledItem>Автоматична фіксація шпинделя</StyledItem>
        <StyledItem>Вага акумулятора зменшена на 40%</StyledItem>
      </ul>
    </StyledSection>
  );
};

export default Benefits;
