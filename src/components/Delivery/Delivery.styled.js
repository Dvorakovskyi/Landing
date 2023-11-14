import styled from 'styled-components';
import { colors } from 'styles/globalStyles';

export const StyledDeliveryTittle = styled.h3`
  font-size: 16px;
  margin-bottom: 30px;

  color: ${colors.secondaryTextColor};
`;
export const StyledDeliveryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0;
`;

export const StyledDeliveryItem = styled.li`
  position: relative;
  padding: 10px;
  width: 160px;
  height: 100px;
  list-style: none;

  border-radius: 6px;
  background-color: ${colors.oldPriceBgColor};
`;

export const StyledDeliveryImg = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
`;
