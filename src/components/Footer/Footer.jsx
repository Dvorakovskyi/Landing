import React from 'react';
import {
  StyledFooter,
  StyledFooterLogoG,
  StyledFooterLogoB,
  StyledEmail,
  StyledSchedule,
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterLogoB>bazaar.</StyledFooterLogoB>
      <StyledFooterLogoG>ALL GOODS</StyledFooterLogoG>
      <StyledEmail href="mailto:allgoodsbazaaar@gmail.com">
        allgoodsbazaaar@gmail.com
      </StyledEmail>
      <StyledSchedule>Графік работи: Пн - Нд: 09:00 - 21:00</StyledSchedule>
    </StyledFooter>
  );
};

export default Footer;
