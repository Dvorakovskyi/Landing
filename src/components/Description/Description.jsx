import React from 'react';
import description from '../../images/description/desc.jpg';
import {
  StyledSection,
  StyledDescImg,
  StyledDescText,
  StyledSpan
} from './Description.styled';

const Description = () => {
  return (
    <StyledSection>
      <StyledDescImg src={description} alt="Термос" />
      <StyledDescText>
        Шуруповерт Makita призначений для закручування та викручування шурупів у
        деревину, пластмасу та інші матеріали. Цей інструмент має <StyledSpan>17 режимів
        обертання</StyledSpan>, включаючи <StyledSpan>режим «реверс»</StyledSpan>, що дає фору багатьом аналогічним. <br />
        Також, слід зазначити можливість активації <StyledSpan>LED-підсвітки</StyledSpan>, що
        допоможе вирішувати багато завдань у важких місцях та при досить
        поганому освітленні. <br />
        Шуруповерт гарний у своїй справі. Швидкість
        обертання висока. А все це можливо завдяки <StyledSpan>потужному електродвигуну</StyledSpan>,
        який живиться від ємного акумулятора.
      </StyledDescText>
    </StyledSection>
  );
};

export default Description;
