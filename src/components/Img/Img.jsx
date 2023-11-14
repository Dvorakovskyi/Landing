import React from 'react';
import img from '../../images/img/img.jpg';
import { StyledSecTitle } from 'components/Benefits/Benefits.styled';
import { StyledDescImg } from 'components/Description/Description.styled';

const Img = () => {
  return (
    <>
      <StyledSecTitle>Подарунок для Вас</StyledSecTitle>
      <StyledDescImg src={img} alt="Термос" />
    </>
  );
};

export default Img;
