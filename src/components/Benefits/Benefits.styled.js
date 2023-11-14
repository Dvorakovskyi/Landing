import styled from 'styled-components';
import { colors } from 'styles/globalStyles';

export const StyledSecTitle = styled.h2`
  text-align: center;
  margin-bottom: 10px;

  color: ${colors.secondaryTextColor};
`;

export const StyledItem = styled.li`
  margin-bottom: 5px;
  color: ${colors.secondaryTextColor};

  &::marker {
    color: ${colors.discountBgColor};
  }
`;
