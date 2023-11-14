import React from 'react';
import application from '../../images/delivery/how-img-1.png';
import call from '../../images/delivery/how-img-2.png';
import dispatch from '../../images/delivery/how-img-3.png';
import receiving from '../../images/delivery/how-img-4.png';
import { StyledSection } from 'components/Description/Description.styled';
import { StyledSecTitle } from 'components/Benefits/Benefits.styled';
import { StyledDeliveryTittle, StyledDeliveryItem, StyledDeliveryList, StyledDeliveryImg } from './Delivery.styled';

const Delivery = () => {
  return (
    <StyledSection>
      <StyledSecTitle>Як замовити?</StyledSecTitle>
      <StyledDeliveryList>
        <StyledDeliveryItem>
          <StyledDeliveryTittle>ЗАЯВКА</StyledDeliveryTittle>
          <StyledDeliveryImg src={application} alt="Icon"/>
          <p>Залишаєте заявку на нашому сайті</p>
        </StyledDeliveryItem>
        <StyledDeliveryItem>
          <StyledDeliveryTittle>ДЗВІНОК</StyledDeliveryTittle>
          <StyledDeliveryImg src={call} alt="Icon"/>
          <p>Менеджер уточнює деталі замовлення</p>
        </StyledDeliveryItem>
        <StyledDeliveryItem>
          <StyledDeliveryTittle>ВІДПРАВКА</StyledDeliveryTittle>
          <StyledDeliveryImg src={dispatch} alt="Icon"/>
          <p>Новою Поштою протягом 1-3 днів</p>
        </StyledDeliveryItem>
        <StyledDeliveryItem>
          <StyledDeliveryTittle>ОТРИМАННЯ</StyledDeliveryTittle>
          <StyledDeliveryImg src={receiving} alt="Icon"/>
          <p>Оплачуєте при отриманні</p>
        </StyledDeliveryItem>
      </StyledDeliveryList>
    </StyledSection>
  )
};

export default Delivery;
