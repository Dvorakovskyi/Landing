import React from 'react';
import { StyledSection } from 'components/Description/Description.styled';
import { StyledSecTitle, StyledItem } from './Benefits.styled';

const Benefits = () => {
  return (
    <StyledSection>
      <StyledSecTitle>Особливості</StyledSecTitle>
      <ul>
        <StyledItem>
          Різноманітність предметів, що знаходяться в наборі;
        </StyledItem>
        <StyledItem>
          Практична та міцна валізка для безпечного зберігання та переміщення;
        </StyledItem>
        <StyledItem>
          Комірки набору ергономічні-групи предметів розділені на секції;
        </StyledItem>
        <StyledItem>Легко використовувати і зберігати;</StyledItem>
        <StyledItem>
          Хороша економія при покупці набору, в порівнянні з придбанням товарів
          окремо.
        </StyledItem>
      </ul>
    </StyledSection>
  );
};

export default Benefits;
