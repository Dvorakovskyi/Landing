import styled from 'styled-components';
import { colors } from 'styles/globalStyles';

export const StyledMainTitle = styled.h1`
  padding: 10px 20px;
  font-weight: 700;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
`;

export const StyledHeroImg = styled.img`
  max-width: 100%;
`;

export const StyledHeroList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
  min-width: 320px;

  background-color: ${colors.mainBgColor};
`;

export const StyledHeroItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  list-style: none;
`;

export const StyledItemText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.1;

  color: ${colors.mainTextColor};
`;
