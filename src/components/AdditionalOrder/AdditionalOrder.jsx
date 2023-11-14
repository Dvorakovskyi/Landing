import React from 'react';
import AdditionalOrderFirst from './AdditionalOrderFirst/AdditionalOrderFirst';
import AdditionalOrderSecond from './AdditionalOrderSecond/AdditionalOrderSecond';
import AdditionalOrderThird from './AdditionalOrderThird/AdditionalOrderThird';
import {
  StyledAdditTittle,
  StyledAdditItem,
  StyledAdditList,
} from './AdditionalOrder.styled';

const AdditionalOrder = () => {
  return (
    <>
      <StyledAdditTittle>
        Нехай блекаут не стане перешкодою! Оберіть наші ліхтарі і створіть
        комфорт для себе та своєї родини.
      </StyledAdditTittle>
      <StyledAdditList>
        <StyledAdditItem>
          <AdditionalOrderFirst />
          <AdditionalOrderSecond />
          <AdditionalOrderThird />
        </StyledAdditItem>
      </StyledAdditList>
    </>
  );
};

export default AdditionalOrder;
