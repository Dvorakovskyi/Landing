import React from 'react';
import description from '../../images/description/desc.jpg';
import {
  StyledSection,
  StyledDescImg,
  StyledDescText,
  StyledSpan,
} from './Description.styled';

const Description = () => {
  return (
    <StyledSection>
      <StyledDescImg src={description} alt="Термос" />
      <StyledDescText>
        Великий набір для малювання з ексклюзивним наповненням у дерев'яній
        валізці на <StyledSpan>220 предметів</StyledSpan> ідеальний подарунок як
        для дітей, так і для підлітків. <br />
      </StyledDescText>
      <StyledDescText>
        Набір для малювання та творчості виготовлений із{' '}
        <StyledSpan>екологічно чистих матеріалів</StyledSpan> та є повністю
        безпечним для дітей. <br />
      </StyledDescText>
      <StyledDescText>
        Він стане чудовим подарунком до будь-якого свята –{' '}
        <StyledSpan>Нового року, Дня народження, Дня св. Миколая</StyledSpan> та
        інших важливих свят!{' '}
      </StyledDescText>
    </StyledSection>
  );
};

export default Description;
