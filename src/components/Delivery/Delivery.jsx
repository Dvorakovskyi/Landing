import React from 'react';
import application from '../../images/delivery/how-img-1.png';
import call from '../../images/delivery/how-img-2.png';
import dispatch from '../../images/delivery/how-img-3.png';
import receiving from '../../images/delivery/how-img-4.png';
import { StyledSection } from 'components/Description/Description.styled';
import { StyledSecTitle } from 'components/Benefits/Benefits.styled';
import { StyledDeliveryTittle, StyledDeliveryItem, StyledDeliveryList } from './Delivery.styled';

const Delivery = () => {
  return (
    <StyledSection>
      <StyledSecTitle>Як замовити?</StyledSecTitle>
      <StyledDeliveryList>
        <StyledDeliveryItem>
          <StyledDeliveryTittle>ЗАЯВКА</StyledDeliveryTittle>
          <img src={application} alt="Icon" width="50" height="50"/>
          <p>Залишаєте заявку на нашому сайті</p>
        </StyledDeliveryItem>
        <StyledDeliveryItem>
          <StyledDeliveryTittle>ДЗВІНОК</StyledDeliveryTittle>
          <img src={call} alt="Icon" width="50" height="50"/>
          <p>Менеджер уточнює деталі замовлення</p>
        </StyledDeliveryItem>
        <StyledDeliveryItem>
          <StyledDeliveryTittle>ВІДПРАВКА</StyledDeliveryTittle>
          <img src={dispatch} alt="Icon" width="50" height="50"/>
          <p>Новою Поштою протягом 1-3 днів</p>
        </StyledDeliveryItem>
        <StyledDeliveryItem>
          <StyledDeliveryTittle>ОТРИМАННЯ</StyledDeliveryTittle>
          <img src={receiving} alt="Icon" width="50" height="50"/>
          <p>Оплачуєте при отриманні</p>
        </StyledDeliveryItem>
      </StyledDeliveryList>
    </StyledSection>
  )
};

export default Delivery;
