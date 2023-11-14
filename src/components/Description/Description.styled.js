import styled from 'styled-components';
import { colors } from 'styles/globalStyles';

export const StyledSection = styled.section`
  margin-top: 10px;
  padding: 10px;
  min-width: 320px;
  max-width: 480px;
`;

export const StyledDescImg = styled.img`
  max-width: 100%;
`;

export const StyledDescText = styled.p`
  padding: 10px 8px;
  font-size: 17px;
  text-align: justify;

  color: ${colors.secondaryTextColor};
`;

export const StyledSpan = styled.span`
  font-weight: 500;
`;