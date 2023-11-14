import styled from 'styled-components';
import { colors } from 'styles/globalStyles';
import { StyledGoods, StyledBazaar } from 'components/Header/Header.styled';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 10px;
  min-width: 320px;
  max-width: 460px;

  background-color: ${colors.oldPriceBgColor};
`;

export const StyledFooterLogoG = styled(StyledGoods)`
  font-size: 12px;
  font-weight: 500;
  width: 70px;

  color: ${colors.secondaryTextColor};
`;

export const StyledFooterLogoB = styled(StyledBazaar)`
  width: 90px;
  font-size: 24px;
  font-weight: 700;

  color: ${colors.secondaryTextColor};
`;

export const StyledEmail = styled.a`
  margin-top: 10px;
  font-size: 14px;
  text-decoration: none;

  color: ${colors.secondaryTextColor};
`;

export const StyledSchedule = styled.p`
  margin-top: 10px;
  font-size: 14px;

  color: ${colors.secondaryTextColor};
`;
