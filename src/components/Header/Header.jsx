import React from 'react';
import { StyledHeader, StyledGoods, StyledBazaar } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledBazaar>bazaar.</StyledBazaar>
      <StyledGoods>ALL GOODS</StyledGoods>
    </StyledHeader>
  );
};

export default Header;
