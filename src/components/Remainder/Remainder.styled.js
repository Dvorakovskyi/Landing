import styled from 'styled-components';
import { colors } from 'styles/globalStyles';

export const StyledRemText = styled.p`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 220px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;

  color: ${colors.secondaryTextColor};
`;

export const StyledRemSpan = styled.span`
  padding: 5px;
  font-size: 18px;
  background-color: ${colors.newPriceBgColor};
`;
