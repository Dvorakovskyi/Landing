import React from 'react';
import mainPhoto from '../../images/hero/mainPhoto.png';
import icon1 from '../../images/hero/icon1.png';
import icon2 from '../../images/hero/icon2.png';
import icon3 from '../../images/hero/icon3.png';
import {
  StyledMainTitle,
  StyledHeroImg,
  StyledHeroItem,
  StyledHeroList,
  StyledItemText,
} from './Hero.styled';

const Hero = () => {
  return (
    <>
      <StyledMainTitle>
        Акумуляторний шуруповерт Makita 12v в повній комплектації + набір
        інструментів в подарунок
      </StyledMainTitle>
      <StyledHeroImg src={mainPhoto} alt="Термос" />
      <StyledHeroList>
        <StyledHeroItem>
          <img src={icon1} alt="icon" width="30" height="30" />
          <StyledItemText>Зручність та якість</StyledItemText>
        </StyledHeroItem>
        <StyledHeroItem>
          <img src={icon2} alt="icon" width="30" height="30" />
          <StyledItemText>Швидка доставка</StyledItemText>
        </StyledHeroItem>
        <StyledHeroItem>
          <img src={icon3} alt="icon" width="30" height="30" />
          <StyledItemText>Оплата при отриманні</StyledItemText>
        </StyledHeroItem>
      </StyledHeroList>
    </>
  );
};

export default Hero;
