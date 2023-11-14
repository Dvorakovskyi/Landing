import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdditionalOrder from 'components/AdditionalOrder/AdditionalOrder';
import {
  StyledThkText,
  StyledThkSection,
  StyledThkTitle,
  StyledThkBtn,
} from './Thanks.styled';

const Thanks = () => {
  const navigate = useNavigate();

  return (
    <StyledThkSection>
      <StyledThkTitle>Дякуємо за замовлення!</StyledThkTitle>
      <StyledThkText>Очікуйте на дзвінок від менеджера.</StyledThkText>
      <StyledThkBtn
        type="button"
        onClick={() => {
          navigate('/');
        }}
      >
        Назад
      </StyledThkBtn>
      <AdditionalOrder />
    </StyledThkSection>
  );
};

export default Thanks;
