import styled from 'styled-components';
import { colors } from 'styles/globalStyles';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 10px;
  min-width: 320px;
  max-width: 460px;

  background-color: ${colors.mainBgColor};
`;

export const StyledGoods = styled.p`
  font-size: 12px;
  font-weight: 500;
  width: 70px;

  color: ${colors.mainTextColor};
`;

export const StyledBazaar = styled.p`
  width: 90px;
  font-size: 24px;
  font-weight: 700;

  color: ${colors.mainTextColor};
`;
